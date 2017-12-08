<?php

if ( !empty( get_post_meta( get_the_ID(), '_youtube_text_area', true) ) ):

  // Delimit by comma and Remove whitespaces
  $product_videos =
    explode(
      ',' ,
    preg_replace(
          '/\s+/',
          '',
           get_post_meta ( get_the_ID(), '_youtube_text_area', true) ) );

  foreach ( $product_videos as $product_video ) :

      preg_match('/[\\?\\&]v=([^\\?\\&]+)/', $product_video, $matches );
      $id = $matches[1]; ?>

<div class="ssp_video ssp_div">
  <div class="ssp_container">
        <div class="ssp_video_wrap">
            <iframe src="https://www.youtube.com/embed/<?php echo $id ?>?rel=0&showinfo=0&color=white&iv_load_policy=3"
                    frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
</div>
  <?php endforeach; ?>

<?php endif; ?>
