jQuery(document).ready(function(){let imagesArray=[SSP_LOCAL_PHP.siteUrl+'/wp-content/uploads/sites/14/2016/10/Grayson-Erhard-Colorado-Guitarist-and-Singer-Songwriter-Hair.jpg',SSP_LOCAL_PHP.siteUrl+'/wp-content/uploads/sites/14/2018/05/Grayson-Erhard-12.jpg',SSP_LOCAL_PHP.siteUrl+'/wp-content/uploads/sites/14/2018/05/Grayson-Erhard-15.jpg'];let $randomImage=imagesArray[Math.floor(Math.random()*imagesArray.length)];$('.ssp_lyrics').css('background-image','url('+$randomImage+')');$('.single-product  .ssp_container').flexslider({selector:".ssp_video_wrap",slideshow:false,touch:true});});