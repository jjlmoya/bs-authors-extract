<?php
/**
 * Plugin Name: Authors Extract [BonSeo Block]
 * Plugin URI: https://www.bonseo.es/bloques-gutenberg/arrow-banner
 * Description: Un banner simple en forma de flecha
 * Author: jjlmoya
 * Author URI: https://www.bonseo.es/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * @package BS
 */


if (!defined('ABSPATH')) {
	exit;
}


if (!function_exists('bs_create_block_category')) {
	function bs_create_block_category($categories, $post)
	{
		return array_merge(
			$categories,
			array(
				array(
					'slug' => 'bonseo-blocks',
					'title' => __('BonSeo', 'bonseo-blocks'),
				),
			)
		);
	}

	add_filter('block_categories', 'bs_create_block_category', 10, 2);
}


function bs_register_publisher_post_type()
{

	/**
	 * Post Type: Autores.
	 */

	$labels = array(
		"name" => __("Servicios", "custom-post-type-ui"),
		"singular_name" => __("Servicio", "custom-post-type-ui"),
	);

	$args = array(
		"label" => __("Servicios", "custom-post-type-ui"),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"delete_with_user" => false,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array("slug" => "servicios", "with_front" => true),
		"query_var" => true,
		"supports" => array("title", "editor", "thumbnail", "custom-fields", "excerpt"),
	);

	register_post_type("publisher", $args);
}

add_action('add_meta_boxes', 'bs_publisher_metabox_add');
add_action('add_meta_boxes', 'bs_publisher_metabox_add_v2');
function bs_publisher_metabox_add()
{
	add_meta_box(
		'bs_publisher_position',
		'Author Position',
		'bs_publisher_position_action',
		'publisher',
		'side',
		'high'
	);
}


function bs_publisher_metabox_add_v2()
{
	add_meta_box(
		'bs_theme_brand',
		'Theme',
		'bs_publisher_brand_action',
		'publisher',
		'side',
		'high'
	);
}


function bs_publisher_position_action()
{
	global $post;
	wp_nonce_field(basename(__FILE__), 'bs_publisher_position');
	$location = get_post_meta($post->ID, 'bs_publisher_position', true);
	echo '<input type="text" name="bs_publisher_position" value="' . esc_textarea($location) . '" class="widefat">';
}

function bs_publisher_brand_action()
{
	global $post;
	wp_nonce_field(basename(__FILE__), 'bs_theme_brand');
	$location = get_post_meta($post->ID, 'bs_theme_brand', true);
	echo '<input type="text" name="bs_theme_brand" value="' . esc_textarea($location) . '" class="widefat">';
}


add_action('init', 'bs_register_publisher_post_type');
add_action('save_post', 'bs_publisher_on_save');

function bs_publisher_on_save($post_id)
{
	if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
		return;
	}
	if (isset($_POST['post_type']) && $_POST['post_type'] == 'publisher') {
		if (!current_user_can('edit_page', $post_id)) {
			return;
		}
	} else {
		if (!current_user_can('edit_post', $post_id)) {
			return;
		}
	}
	if (!isset($_POST['bs_publisher_position'])) {
		return;
	}
	if (!isset($_POST['bs_theme_brand'])) {
		return;
	}
	$myPosition = sanitize_text_field($_POST['bs_publisher_position']);
	$myBrand = sanitize_text_field($_POST['bs_theme_brand']);
	update_post_meta($post_id, 'bs_publisher_position', $myPosition);
	update_post_meta($post_id, 'bs_theme_brand', $myBrand);
}


require_once plugin_dir_path(__FILE__) . 'src/init.php';
