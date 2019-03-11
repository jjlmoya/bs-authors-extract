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
		'attributes' => array(
			'title' => array(
				'type' => 'string',
			),
			'max_entries' => array(
				'type' => 'string',
			),
			'className' => array(
				'type' => 'string',
			)

		),
		'render_callback' => 'render_bs_authors_extract',
	)
);

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
}

function render_bs_authors_extract_entries($authors)
{
	$html = '';
	while ($authors->have_posts()) : $authors->the_post();
		$title = get_the_title();
		$image = esc_url(get_the_post_thumbnail_url(get_the_ID()));
		$description = get_the_content();
		$link = esc_url(get_the_permalink());
		$position = get_post_meta(get_the_ID(), 'bs_publisher_position', TRUE);
		$html .= '
		<div class="ml-card-author l-flex l-flex--direction-column l-flex--justify-center l-column--1-3 l-column--mobile--2-3 a-pad">
			<div class="ml-card-author__image l-flex-item--align-center l-column--1-1">
				<picture class="a-pad l-column--1-1 a-pad-0">
					<img class="a-image l-column--1-1" src="' . $image . '">
					</picture>
				</div>
			<div class="ml-card-author__description a-border--primary a-pad">
				<h3>
					<a href="' . $link . '" class="a-text a-text--underline a-text--bold a-text--link a-text--brand">
						' . $title . '
					</a>
				</h3>
				<p class="a-text a-text--bold a-text--xs ">
					' . $position . '
				</p>
				<p class="a-text a-pad--y">
					' . $description . '
				</p>
			</div>
		</div>';
		unset($post);
	endwhile;
	return $html;
}

function render_bs_authors_extract($attributes)
{
	$class = isset($attributes['className']) ? ' ' . $attributes['className'] : '';
	$entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 0;
	$title = isset($attributes['title']) ? $attributes['title'] : 'Nuestros Colaboradores:';
	$args = array(
		'post_type' => 'publisher',
		'post_status' => 'publish',
		'posts_per_page' => $entries
	);
	$authors = new WP_Query($args);
	if (empty($authors)) {
		return "";
	}
	return '
	<section class="og-block-authors a-pad-40 ' . $class . '">
	<h2 class="a-text a-text--xl">' . $title . '</h2>
		<div class="l-flex l-flex--justify-center l-flex--wrap a-pad--y">
		' . render_bs_authors_extract_entries($authors) . '
		</div>
	</section>';
}

add_action('enqueue_block_editor_assets', 'bs_authors_extract_editor_assets');
