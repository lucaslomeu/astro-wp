<?php
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
});

function custom_post_type_projetos()
{
    register_post_type('projetos', [
        'label' => 'Projetos',
        'public' => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'projeto',
        'graphql_plural_name' => 'projetos',
        'supports' => ['title', 'editor', 'thumbnail'],
        'menu_icon' => 'dashicons-portfolio',
    ]);
}
add_action('init', 'custom_post_type_projetos');
