<?php
/* banner-php */
// -> START General Settings

Redux::setSection($opt_name, array(
    'title'      => esc_html__('General', 'townhub'),
    'id'         => 'general-settings',
    'subsection' => false,

    'icon'       => 'el-icon-cogs',
    'fields'     => array(

        array(
            'id'      => 'show_loader',
            'type'    => 'switch',
            'on'      => esc_html__('Yes', 'townhub'),
            'off'     => esc_html__('No', 'townhub'),
            'title'   => esc_html__('Show Loader', 'townhub'),
            'default' => true,

        ),

        array(
            'id'      => 'loader_icon',
            'type'    => 'image_id',
            'title'   => esc_html__('Loader Icon', 'townhub'),
            'default' => '',
        ),

        array(
            'id'      => 'enable_auto_update',
            'type'    => 'switch',
            'on'      => esc_html__('Yes', 'townhub'),
            'off'     => esc_html__('No', 'townhub'),
            'title'   => esc_html__('Enable Auto Update', 'townhub'),
            'desc'    => esc_html__('Note: auto update feature is not for Envato Elements download.', 'townhub'),
            'default' => false,
        ),

    ),
));
