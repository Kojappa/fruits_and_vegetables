$(document).ready(function() {
    
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
       
    /*** Fixed Header ***/
    
    checkScroll(scrollOffset);
    
    
    $(window).on("scroll", function() {
        
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    })
    
    function checkScroll(scrollOffset) {
        
        if ( scrollOffset >= introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }
    
    /* Smoth Scroll*/
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        var blockid = $(this).data('scroll'),
            blockOffset = $(blockid).offset().top;
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    })
    
    /*Slider*/
    
    $('.slider').slick({
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true        
    });
    
	/*** E-mail Ajax Send***/ 
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});























