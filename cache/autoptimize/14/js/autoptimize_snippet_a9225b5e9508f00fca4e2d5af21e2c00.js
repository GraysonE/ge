$=jQuery;$(document).ready(function(){initializeSexyStyles();});function initializeSexyStyles(){if(localized_sexy_config.sexy_woocheckout_link_color){let linkColor=localized_sexy_config.sexy_woocheckout_link_color;if(linkColor.charAt(0)==='#'){$('#slider a').css('color',linkColor);}else{$('#slider a').css('color','#'+linkColor);}}
if(localized_sexy_config.sexy_woocheckout_text_color){let textColor=localized_sexy_config.sexy_woocheckout_text_color;if(textColor.charAt(0)==='#'){$('#slider h1, #slider h2, #slider h3, #slider h4, #slider p, #slider span, #slider th, #slider td, #slider tr, #slider .quantity::before').css('color',textColor);}else{$('#slider h1, #slider h2, #slider h3, #slider h4, #slider p, #slider span, #slider th, #slider td, #slider tr, #slider .quantity::before').css('color','#'+textColor);}}
if(localized_sexy_config.sexy_woocheckout_button_color){let buttonColor=localized_sexy_config.sexy_woocheckout_button_color;if(buttonColor.charAt(0)==='#'){$('#slider input[type=submit], #slider .checkout-button').css('background-color',buttonColor);}else{$('#slider input[type=submit], #slider .checkout-button').css('background-color','#'+buttonColor);}}};