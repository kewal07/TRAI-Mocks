$(function() {
	$(window).load(function(){
		$(".be-loader").fadeOut("slow");
	});
	$('#complaints-container').mixItUp();
	$('.trai-info').slick({
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  dots: true,
  	  infinite: true,
  	  cssEase: 'linear'
	});
});
