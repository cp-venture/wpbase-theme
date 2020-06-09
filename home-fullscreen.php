<?php
/* banner-php */
/**
 * Template Name: Home Fullscreen
 *
 */

if ( post_password_required() ) {
    get_template_part( 'template-parts/page/protected', 'page' );
    return;
}	
get_header(); ?>
<?php while(have_posts()) : the_post(); ?>

	<?php the_content(); ?>
	<?php wp_link_pages(); ?>

<?php endwhile; ?>   
<?php 
    get_footer( );
?>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script>

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop));
}

function refreshIndicators() {
    var a = $('.main-header').first()
	var b = $('.main-search-form-wrap').first()
	var c = $('.header-search_btn').first()
	
	if (isScrolledIntoView(b)) {
		a.css('position', 'absolute');
		a.css('background-color', '#ffffff00')
		a.css('box-shadow', 'none')
		c.css('display', 'none')
	} else {
		a.css('position', 'fixed');
		a.css('background-color', '#fff')
		a.css('box-shadow', 'rgba(0, 0, 0, 0.06) 0px 1px 2px')
		a.css('transition', 'all 0.25s ease-in-out 0s')
		c.css('display', 'inline-block')
	}
}

refreshIndicators();

$(window).bind('scroll', refreshIndicators);
	
</script>
