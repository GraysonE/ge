$=jQuery;$(document).ready(function(){function onScrollInit(items,trigger){items.each(function(){var wpElement=$(this),wpAnimationClass=wpElement.attr('data-wp-animation');wpAnimationDelay=wpElement.attr('data-wp-animation-delay');wpElement.css({'-webkit-animation-delay':wpAnimationDelay,'-moz-animation-delay':wpAnimationDelay,'animation-delay':wpAnimationDelay});var wpTrigger=(trigger)?trigger:wpElement;wpTrigger.waypoint(function(){wpElement.addClass('animated').addClass(wpAnimationClass);},{triggerOnce:false,offset:'90%'});});}
onScrollInit($('.wp-animation'));onScrollInit($('.wp-staggered-animation'),$('.wp-staggered-animation-container'));});