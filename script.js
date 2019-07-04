// Navigation shrink
$(function(){
	$(window).scroll(function() {
    	if($(window).scrollTop() >= 100) {
    		$('nav').addClass('scrolled');
     	}

     	else {
       		$('nav').removeClass('scrolled');
    	}
    });
});

//Show Code-Form
$(document).ready(function(){

    $("#verify").click(function(){
        $("form").removeClass("hide");
    });
    
});



// Remove active class
// $(document).ready(function(){
//     $("li").click(function(){
//         $("a").removeClass("active");

//     });

//     $("ul").click(function(){
//         $("li").removeClass("homenav");

//     });
// });


// Smooth scrolling

$(document).on('click', 'a[href^="#"]', function (event) {
event.preventDefault();

$('html, body').animate({
  scrollTop: $($.attr(this, 'href')).offset().top
  }, 3000);



});

// Back to top

$(document).ready(function(){
var offset = 250;
var duration = 500;

$(window).scroll(function(){
  if($(this).scrollTop() > offset){
    $('.top').fadeIn(duration);
  }else{
    $('.top').fadeOut(duration);
  }
})
});








