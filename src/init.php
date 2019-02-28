<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package BS
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

$block = 'block-bs-authors-extract';

// Hook server side rendering into render callback
register_block_type('bonseo/' . $block,
	array(
		'render_callback' => 'render_bs_authors_extract',
	)
);


/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function bs_authors_extract_assets()
{
	wp_enqueue_style(
		'bs_authors_extract-style-css',
		plugins_url('dist/blocks.style.build.css', dirname(__FILE__)),
		array('wp-editor')
	);
}

add_action('enqueue_block_assets', 'bs_authors_extract_assets');

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function bs_authors_extract_editor_assets()
{ // phpcs:ignore
	// Scripts.
	wp_enqueue_script(
		'bs_authors_extract-block-js', // Handle.
		plugins_url('/dist/blocks.build.js', dirname(__FILE__)), // Block.build.js: We register the block here. Built with Webpack.
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: File modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'bs_authors_extract-block-editor-css', // Handle.
		plugins_url('dist/blocks.editor.build.css', dirname(__FILE__)), // Block editor CSS.
		array('wp-edit-blocks') // Dependency to include the CSS after it.
	// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);
}

function render_bs_authors_extract_entries($authors)
{
	while ($authors->have_posts()) : $authors->the_post();
		$title = get_the_title();
		$image = esc_url(get_the_post_thumbnail_url(get_the_ID()));
		$link = esc_url(get_the_permalink());
		return '
		<div class="ml-card-author l-flex l-flex--direction-column l-flex--justify-center l-column--1-3 l-column--mobile--2-3 a-pad">
			<div class="ml-card-author__image l-flex-item--align-center l-column--1-1">
				<picture class="a-pad l-column--1-1 a-pad-0">
					<img class="a-image l-column--1-1" src="' . $image . '">
					</picture>
				</div>
			<div class="ml-card-author__description a-pad">
				<a href="' . $link . '" class="a-text a-text--underline a-text--bold a-text--s a-text--link">
				' . $title . '
				</a>
				<p class="a-text a-text--bold">
					Profesión
				</p>
				<p class="a-text ">
					Pequeña descripción
				</p>
			</div>
		</div>';
		unset($post);
	endwhile;
}

function render_bs_authors_extract()
{
	$args = array(
		'post_type' => 'publisher',
		'post_status' => 'publish',
		'posts_per_page' => 0
	);
	$authors = new WP_Query($args);
	if (empty($authors)) {
		return "";
	}

	return '
	<section class="og-block-authors l-flex l-flex--justify-center l-flex--wrap a-pad-20 ">
		' . render_bs_authors_extract_entries($authors) . '
	</section>';
}

add_action('enqueue_block_editor_assets', 'bs_authors_extract_editor_assets');
