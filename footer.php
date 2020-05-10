<?php
/* banner-php */
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 */

                do_action( 'townhub_footer_before');
?>
                </div>
                <!-- Content end -->

            


            </div>
            <!-- wrapper end -->

            <?php 
            $head_carts = townhub_get_header_cart_link();
            if (  !empty($head_carts) ) {
            ?>
            <!--cart  --> 
            <div class="show-cart color2-bg"><i class="far fa-shopping-cart"></i><span class="cart-count"><?php echo esc_html($head_carts['count'] );?></span></div>
            <div class="cart-overlay"></div>
            <div class="cart-modal">
                <div class="cart-modal-wrap fl-wrap">
                    <span class="close-cart color2-bg"><?php esc_html_e( 'Close ', 'townhub' ); ?><i class="fal fa-times"></i> </span>
                    <h3><?php esc_html_e( 'Your cart', 'townhub' ); ?></h3>
                    <div class="widget_shopping_cart_content"></div>
                    
                </div>
            </div>
            <!--cart end-->  
            <?php 
            }
            ?>
            
            <!--footer -->
            <footer class="townhub-footer main-footer dark-footer  ">  
                <?php 
                $footer_widgets = townhub_get_option('footer_widgets_top',array());
                if ($footer_widgets ) {
                ?>
                <div class="footer-header fl-wrap grad ient-dark">
                    <div class="container footer_widgets_top">
                        <div class="row fhwids-row dis-flex flw-wrap"><?php
                            foreach ($footer_widgets as $widget) {
                                if($widget['title']&&$widget['classes']){
                                    if(is_active_sidebar($widget['widid'])){
                                        echo '<div class="dynamic-footer-widget '.esc_attr($widget['classes'] ).'">';
                                            dynamic_sidebar($widget['widid']);
                                        echo '</div>';
                                    }
                                }
                            }
                        ?></div>
                    </div>
                </div>
                <?php
                }
                ?>
                <?php 
                $footer_widgets = townhub_get_option('footer_widgets');
                if ($footer_widgets ) {
                ?>
                <div class="footer-inner fl-wrap">
                    <div class="container footer_widgets">
                        <div class="row fwids-row"><?php
                            foreach ($footer_widgets as $widget) {
                                if($widget['title']&&$widget['classes']){
                                    if(is_active_sidebar($widget['widid'])){
                                        echo '<div class="dynamic-footer-widget '.esc_attr($widget['classes'] ).'">';
                                            dynamic_sidebar($widget['widid']);
                                        echo '</div>';
                                        
                                    }
                                }
                            }
                        ?></div>
                    </div>
                    
                    <?php $footer_backg = townhub_get_option('footer_backg','');
                    if ($footer_backg != ''){
                    ?>
                        <div class="footer-bg" data-fbg="<?php echo  wp_get_attachment_image_url($footer_backg);?>"></div>
                    <?php } ?>

                    <!-- footer bg-->
                    <div class="footer-bg" data-ran="4"></div>
                    <div class="footer-wave">
                        <svg viewbox="0 0 100 25">
                            <path fill="#fff" d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
                        </svg>
                    </div>
                    <!-- footer bg  end-->
                    
                </div>
                <?php
                }
                ?>

                <div class="sub-footer fl-wrap">
                    <div class="container">
                        <div class="row flex-items-center sub-footer-row flw-wrap">
                            <?php 
                            if(is_active_sidebar('footer-menu')){  
                                echo '<div class="col-md-6 col-sm-12 col-xs-12 subfooter-info-wrap">';
                                    get_template_part( 'template-parts/footer/site', 'info' );
                                echo '</div>';
                                echo '<div class="col-md-6 col-sm-12 col-xs-12 subfooter-menu-wrap">';
                                    dynamic_sidebar('footer-menu');
                                echo '</div>';
                            }else{ ?>
                            <div class="col-md-12 subfooter-info-wrap">
                                <?php 
                                get_template_part( 'template-parts/footer/site', 'info' );
                                ?>
                            </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>

            </footer>
            <!--footer end  -->
            
        
            <a class="to-top"><i class="fas fa-caret-up"></i></a>
            
        </div>
        <!-- Main end -->
        <?php wp_footer(); ?>
    </body>
</html>
