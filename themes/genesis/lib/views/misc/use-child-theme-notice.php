<?php
/**
 * Genesis Framework.
 *
 * WARNING: This file is part of the core Genesis Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package StudioPress\Genesis
 * @author  StudioPress
 * @license GPL-2.0+
 * @link    https://my.studiopress.com/themes/genesis/
 */

?>
<div class="error"><p>
	<strong><?php esc_html_e( 'Please Activate a Genesis Child Theme:', 'genesis' ); ?></strong>
	<?php
	esc_html_e( 'We\'ve noticed you are using the Genesis Framework parent theme alone. We strongly recommend you run a Genesis child theme with it (we even have a free theme you can use). ', 'genesis' );
	/* translators: %s: URL to studiopress.com. */
	printf( esc_html__( 'For more information, see our article at %s', 'genesis' ), make_clickable( __( 'https://www.studiopress.com/genesis-always-use-child-theme/', 'genesis' ) )
);
	?>
</p></div>
