$(window).on('load',function(){
    
    $(".preloader").addClass('complete');
    $(".page-wrapper").delay(2000).addClass('addClassToShow').fadeIn("slow");
    $(".preloader").delay(0).fadeOut("slow");
 
})