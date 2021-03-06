<?php
/**
 * Shortcodes related to Midiblocks
 */

 /**
 * Display a fullscreen Midiblocks app
 * @todo version the url
 */
add_shortcode('midiblocks-app', function ($atts) {
  global $post;
  global $midiblocksVersion;

  $atts = shortcode_atts([
    'id' => $post->ID,
    'path' => '/',
    'fullscreen' => false
  ], $atts);
  $path = esc_attr($atts['path']);

  $path = str_replace(':id', $atts['id'], $path);
  
  ob_start(); ?>
    <iframe class="midiblocks-app <?= $atts['fullscreen'] ? 'fullscreen' : ''?>" src="<?= get_stylesheet_directory_uri() ?>/midiblocks/v/<?= $midiblocksVersion ?>/index.html#<?= $path ?>">
    </iframe>
  <?php
  return ob_get_clean();
});

/**
 * Echos the Midiblocks app version
 */
add_shortcode('midiblocks-app-version', function () {
  global $midiblocksVersion;
  return $midiblocksVersion;
});