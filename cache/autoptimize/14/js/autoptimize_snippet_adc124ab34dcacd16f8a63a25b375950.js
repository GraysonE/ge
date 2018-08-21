jQuery(function(e){"use strict";var r,t,o,n=Stripe(wc_stripe_params.key),a=wc_stripe_params.elements_options.length?wc_stripe_params.elements_options:{},s=n.elements(a),i={getAjaxURL:function(e){return wc_stripe_params.ajaxurl.toString().replace("%%endpoint%%","wc_stripe_"+e)},unmountElements:function(){"yes"===wc_stripe_params.inline_cc_form?r.unmount("#stripe-card-element"):(r.unmount("#stripe-card-element"),t.unmount("#stripe-exp-element"),o.unmount("#stripe-cvc-element"))},mountElements:function(){e("#stripe-card-element").length&&("yes"===wc_stripe_params.inline_cc_form?r.mount("#stripe-card-element"):(r.mount("#stripe-card-element"),t.mount("#stripe-exp-element"),o.mount("#stripe-cvc-element")))},createElements:function(){var n={base:{iconColor:"#666EE8",color:"#31325F",fontSize:"15px","::placeholder":{color:"#CFD7E0"}}},a={focus:"focused",empty:"empty",invalid:"invalid"};n=wc_stripe_params.elements_styling?wc_stripe_params.elements_styling:n,a=wc_stripe_params.elements_classes?wc_stripe_params.elements_classes:a,"yes"===wc_stripe_params.inline_cc_form?(r=s.create("card",{style:n,hidePostalCode:!0})).addEventListener("change",function(r){i.onCCFormChange(),r.error&&e(document.body).trigger("stripeError",r)}):(r=s.create("cardNumber",{style:n,classes:a}),t=s.create("cardExpiry",{style:n,classes:a}),o=s.create("cardCvc",{style:n,classes:a}),r.addEventListener("change",function(r){i.onCCFormChange(),i.updateCardBrand(r.brand),r.error&&e(document.body).trigger("stripeError",r)}),t.addEventListener("change",function(r){i.onCCFormChange(),r.error&&e(document.body).trigger("stripeError",r)}),o.addEventListener("change",function(r){i.onCCFormChange(),r.error&&e(document.body).trigger("stripeError",r)})),"yes"===wc_stripe_params.is_checkout?e(document.body).on("updated_checkout",function(){r&&i.unmountElements(),i.mountElements()}):(e("form#add_payment_method").length||e("form#order_review").length)&&i.mountElements()},updateCardBrand:function(r){var t={visa:"stripe-visa-brand",mastercard:"stripe-mastercard-brand",amex:"stripe-amex-brand",discover:"stripe-discover-brand",diners:"stripe-diners-brand",jcb:"stripe-jcb-brand",unknown:"stripe-credit-card-brand"},o=e(".stripe-card-brand"),n="stripe-credit-card-brand";r in t&&(n=t[r]),e.each(t,function(e,r){o.removeClass(r)}),o.addClass(n)},init:function(){"yes"!==wc_stripe_params.is_change_payment_page&&"yes"!==wc_stripe_params.is_pay_for_order_page||e(document.body).trigger("wc-credit-card-form-init"),this.stripe_checkout_submit=!1,e("form.woocommerce-checkout").length&&(this.form=e("form.woocommerce-checkout")),e("form.woocommerce-checkout").on("checkout_place_order_stripe checkout_place_order_stripe_bancontact checkout_place_order_stripe_sofort checkout_place_order_stripe_giropay checkout_place_order_stripe_ideal checkout_place_order_stripe_alipay checkout_place_order_stripe_sepa",this.onSubmit),e("form#order_review").length&&(this.form=e("form#order_review")),e("form#order_review, form#add_payment_method").on("submit",this.onSubmit),e("form#add_payment_method").length&&(this.form=e("form#add_payment_method")),e("form.woocommerce-checkout").on("change",this.reset),e(document).on("stripeError",this.onError).on("checkout_error",this.reset),i.createElements(),"yes"===wc_stripe_params.is_stripe_checkout&&e(document.body).on("click",".wc-stripe-checkout-button",function(){return i.openModal(),!1})},isStripeChosen:function(){return e("#payment_method_stripe, #payment_method_stripe_bancontact, #payment_method_stripe_sofort, #payment_method_stripe_giropay, #payment_method_stripe_ideal, #payment_method_stripe_alipay, #payment_method_stripe_sepa, #payment_method_stripe_eps, #payment_method_stripe_multibanco").is(":checked")||e("#payment_method_stripe").is(":checked")&&"new"===e('input[name="wc-stripe-payment-token"]:checked').val()||e("#payment_method_stripe_sepa").is(":checked")&&"new"===e('input[name="wc-stripe-payment-token"]:checked').val()},isStripeSaveCardChosen:function(){return e("#payment_method_stripe").is(":checked")&&e('input[name="wc-stripe-payment-token"]').is(":checked")&&"new"!==e('input[name="wc-stripe-payment-token"]:checked').val()||e("#payment_method_stripe_sepa").is(":checked")&&e('input[name="wc-stripe_sepa-payment-token"]').is(":checked")&&"new"!==e('input[name="wc-stripe_sepa-payment-token"]:checked').val()},isStripeCardChosen:function(){return e("#payment_method_stripe").is(":checked")},isBancontactChosen:function(){return e("#payment_method_stripe_bancontact").is(":checked")},isGiropayChosen:function(){return e("#payment_method_stripe_giropay").is(":checked")},isIdealChosen:function(){return e("#payment_method_stripe_ideal").is(":checked")},isSofortChosen:function(){return e("#payment_method_stripe_sofort").is(":checked")},isAlipayChosen:function(){return e("#payment_method_stripe_alipay").is(":checked")},isSepaChosen:function(){return e("#payment_method_stripe_sepa").is(":checked")},isP24Chosen:function(){return e("#payment_method_stripe_p24").is(":checked")},isEpsChosen:function(){return e("#payment_method_stripe_eps").is(":checked")},isMultibancoChosen:function(){return e("#payment_method_stripe_multibanco").is(":checked")},hasSource:function(){return 0<e("input.stripe-source").length},hasToken:function(){return 0<e("input.stripe_token").length},isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isStripeModalNeeded:function(e){var r=i.form.find("input.stripe_token");return(!i.stripe_submit||!r)&&!!i.isStripeChosen()},block:function(){i.isMobile()||i.form.block({message:null,overlayCSS:{background:"#fff",opacity:.6}})},unblock:function(){i.form.unblock()},getSelectedPaymentElement:function(){return e('.payment_methods input[name="payment_method"]:checked')},openModal:function(){var r=i.form,t=e("#stripe-payment-data");i.reset();StripeCheckout.open({key:wc_stripe_params.key,billingAddress:t.data("billing-address"),zipCode:t.data("verify-zip"),amount:t.data("amount"),name:t.data("name"),description:t.data("description"),currency:t.data("currency"),image:t.data("image"),locale:t.data("locale"),email:e("#billing_email").val()||t.data("email"),panelLabel:t.data("panel-label"),allowRememberMe:t.data("allow-remember-me"),token:function(e){if(r.find("input.stripe_source").remove(),"token"===e.object)n.createSource({type:"card",token:e.id}).then(i.sourceResponse);else if("source"===e.object){var t={source:e};i.sourceResponse(t)}},closed:i.onClose()})},resetModal:function(){i.reset(),i.stripe_checkout_submit=!1},onClose:function(){i.unblock()},getOwnerDetails:function(){var r=e("#billing_first_name").length?e("#billing_first_name").val():wc_stripe_params.billing_first_name,t=e("#billing_last_name").length?e("#billing_last_name").val():wc_stripe_params.billing_last_name,o={owner:{name:"",address:{},email:"",phone:""}};return o.owner.name=r,o.owner.name=r&&t?r+" "+t:e("#stripe-payment-data").data("full-name"),o.owner.email=e("#billing_email").val(),o.owner.phone=e("#billing_phone").val(),void 0!==o.owner.phone&&0>=o.owner.phone.length&&delete o.owner.phone,void 0!==o.owner.email&&0>=o.owner.email.length&&delete o.owner.email,void 0!==o.owner.name&&0>=o.owner.name.length&&delete o.owner.name,e("#billing_address_1").length>0?(o.owner.address.line1=e("#billing_address_1").val(),o.owner.address.line2=e("#billing_address_2").val(),o.owner.address.state=e("#billing_state").val(),o.owner.address.city=e("#billing_city").val(),o.owner.address.postal_code=e("#billing_postcode").val(),o.owner.address.country=e("#billing_country").val()):wc_stripe_params.billing_address_1&&(o.owner.address.line1=wc_stripe_params.billing_address_1,o.owner.address.line2=wc_stripe_params.billing_address_2,o.owner.address.state=wc_stripe_params.billing_state,o.owner.address.city=wc_stripe_params.billing_city,o.owner.address.postal_code=wc_stripe_params.billing_postcode,o.owner.address.country=wc_stripe_params.billing_country),o},createSource:function(){var t=i.getOwnerDetails(),o="card";if(i.isBancontactChosen()&&(o="bancontact"),i.isSepaChosen()&&(o="sepa_debit"),i.isIdealChosen()&&(o="ideal"),i.isSofortChosen()&&(o="sofort"),i.isGiropayChosen()&&(o="giropay"),i.isAlipayChosen()&&(o="alipay"),"card"===o)n.createSource(r,t).then(i.sourceResponse);else{switch(o){case"bancontact":case"giropay":case"ideal":case"sofort":case"alipay":t.amount=e("#stripe-"+o+"-payment-data").data("amount"),t.currency=e("#stripe-"+o+"-payment-data").data("currency"),t.redirect={return_url:wc_stripe_params.return_url},wc_stripe_params.statement_descriptor&&(t.statement_descriptor=wc_stripe_params.statement_descriptor)}switch(o){case"sepa_debit":var a=e("#stripe-payment-data"),s=e("#billing_email").length?e("#billing_email").val():a.data("email");t.currency=e("#stripe-"+o+"-payment-data").data("currency"),t.owner.name=e("#stripe-sepa-owner").val(),t.owner.email=s,t.sepa_debit={iban:e("#stripe-sepa-iban").val()},t.mandate={notification_method:wc_stripe_params.sepa_mandate_notification};break;case"ideal":t.ideal={bank:e("#stripe-ideal-bank").val()};break;case"alipay":t.currency=e("#stripe-"+o+"-payment-data").data("currency"),t.amount=e("#stripe-"+o+"-payment-data").data("amount");break;case"sofort":t.sofort={country:e("#billing_country").val()}}t.type=o,n.createSource(t).then(i.sourceResponse)}},sourceResponse:function(r){r.error?e(document.body).trigger("stripeError",r):"no"===wc_stripe_params.allow_prepaid_card&&"card"===r.source.type&&"prepaid"===r.source.card.funding?(r.error={message:wc_stripe_params.no_prepaid_card_msg},"yes"===wc_stripe_params.is_stripe_checkout?i.submitError('<ul class="woocommerce-error"><li>'+wc_stripe_params.no_prepaid_card_msg+"</li></ul>"):e(document.body).trigger("stripeError",r)):i.processStripeResponse(r.source)},processStripeResponse:function(r){i.reset(),i.form.append("<input type='hidden' class='stripe-source' name='stripe_source' value='"+r.id+"'/>"),e("form#add_payment_method").length&&e(i.form).off("submit",i.form.onSubmit),i.form.submit()},onSubmit:function(r){if(i.isStripeChosen()){if(!(i.isStripeSaveCardChosen()||i.hasSource()||i.hasToken())){if(r.preventDefault(),i.block(),"yes"===wc_stripe_params.is_stripe_checkout&&i.isStripeModalNeeded()&&i.isStripeCardChosen())return"yes"===wc_stripe_params.is_checkout||(i.openModal(),!1);if(i.isSepaChosen()){if(""===e("#stripe-sepa-owner").val())return e(document.body).trigger("stripeError",{error:{message:wc_stripe_params.no_sepa_owner_msg}}),!1;if(""===e("#stripe-sepa-iban").val())return e(document.body).trigger("stripeError",{error:{message:wc_stripe_params.no_sepa_iban_msg}}),!1}if(i.isBancontactChosen()||i.isGiropayChosen()||i.isIdealChosen()||i.isAlipayChosen()||i.isSofortChosen()||i.isP24Chosen()||i.isEpsChosen()||i.isMultibancoChosen()){if(e("form#order_review").length)return e("form#order_review").off("submit",this.onSubmit),i.form.submit(),!1;if(e("form.woocommerce-checkout").length)return!0;if(e("form#add_payment_method").length)return e("form#add_payment_method").off("submit",this.onSubmit),i.form.submit(),!1}return i.createSource(),!1}return e("form#add_payment_method").length?(r.preventDefault(),"yes"===wc_stripe_params.is_stripe_checkout&&i.isStripeModalNeeded()&&i.isStripeCardChosen()?(i.openModal(),!1):(i.block(),i.createSource(),!1)):void 0}},onCCFormChange:function(){i.reset()},reset:function(){e(".wc-stripe-error, .stripe-source, .stripe_token").remove(),"yes"===wc_stripe_params.is_stripe_checkout&&(i.stripe_submit=!1)},onError:function(r,t){var o=t.error.message,n=i.getSelectedPaymentElement().parents("li").eq(0).find(".stripe-source-errors");"invalid_request_error"!==t.error.type&&"api_connection_error"!==t.error.type&&"api_error"!==t.error.type&&"authentication_error"!==t.error.type&&"rate_limit_error"!==t.error.type||(o=wc_stripe_params.invalid_request_error),"card_error"===t.error.type&&wc_stripe_params.hasOwnProperty(t.error.code)&&(o=wc_stripe_params[t.error.code]),"validation_error"===t.error.type&&wc_stripe_params.hasOwnProperty(t.error.code)&&(o=wc_stripe_params[t.error.code]),i.reset(),e(".woocommerce-NoticeGroup-checkout").remove(),console.log(t.error.message),e(n).html('<ul class="woocommerce_error woocommerce-error wc-stripe-error"><li>'+o+"</li></ul>"),e(".wc-stripe-error").length&&e("html, body").animate({scrollTop:e(".wc-stripe-error").offset().top-200},200),i.unblock()},submitError:function(r){e(".woocommerce-NoticeGroup-checkout, .woocommerce-error, .woocommerce-message").remove(),i.form.prepend('<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout">'+r+"</div>"),i.form.removeClass("processing").unblock(),i.form.find(".input-text, select, input:checkbox").blur();var t="";e("#add_payment_method").length&&(t=e("#add_payment_method")),e("#order_review").length&&(t=e("#order_review")),e("form.checkout").length&&(t=e("form.checkout")),t.length&&e("html, body").animate({scrollTop:t.offset().top-100},500),e(document.body).trigger("checkout_error"),i.unblock()}};i.init()});