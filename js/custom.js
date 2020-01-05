$(document).ready(function() {
  var $menu = $(".sidebar-menu");
  var $menu_a = $("a", $menu);
  var $back_to_top = $('#back-to-top');
  var id = false;
  var sections = [];
  var hash = function(h) {
    if (history.pushState) {
      history.pushState(null, null, h);
    } else {
      location.hash = h;
    }
  };
//menu item scrolling
  $menu_a.click(function(event) {
   
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top 
      },
      {
        duration: 700,
        complete: hash($(this).attr("href"))
      }
    );
  });

$menu_a.each(function() {
    sections.push($($(this).attr("href")));
  });


  $(window).scroll(function(event) {
    var scrolling = $(this).scrollTop() + $(this).height() / 3;
    var scroll_id;
    var skillbar_section = $('#menu-content-04');
    for (var i in sections) {
      var section = sections[i];
      if (scrolling > section.offset().top) {
        scroll_id = section.attr("id");
      }
    }
    if (scroll_id !== id) {
      id = scroll_id;
      $menu_a.removeClass("isactive");
      $("a[href='#" + id + "']", $menu).addClass("isactive");
    }
    if (scrolling >= skillbar_section.offset().top) {
      
      jQuery(".progress-bar").each(function() {
        jQuery(this).find(".progress-content").animate({
          width: jQuery(this).attr("data-percentage")
        },2000);

        jQuery(this).find(".progress-number-mark").animate({
          left: jQuery(this).attr("data-percentage")
        },{
          duration: 2000,
          step: function(now, fx) {
            var data = Math.round(now);
            jQuery(this).find(".percent").html(data + "%");
          }
        });
      });

    }
  });

 /*back to top */
 $back_to_top.click(function(event) {
   
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top 
    },
    {
      duration: 700,
      complete: hash($(this).attr("href"))
    }
  );
});

$back_to_top.each(function() {
  sections.push($($(this).attr("href")));
});


  
});


/*type animation */

$(function(){
	$(".typed").typed({
		strings: ["Developer", "Designer", "Freelancer"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 40,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

/**portfolio gallery */
$(document).ready(function(){
 

  $('.filters ul li').click(function(){
   
    $('.filters ul li').removeClass('active');
    $(this).addClass('active');
    
    var data = $(this).attr('data-filter');
    $grid.isotope({
      filter: data
    })
  });
  
  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
      columnWidth: ".all"
    }
  })





});





$(document).ready(function(){
//pc menu
  $("#hamburger-menu").click(function(){
    $("#hamburger-menu").toggleClass("open");
    $('.sidebar').toggleClass('show');
   $('.main').toggleClass('show');
   $('.numbers').toggleClass('numbers-width');
  });
  


 //carousel blog
 $(function() {
  //important article
    $('.carousel-normal').owlCarousel({
       rtl:true,
       loop:true,
       stagePadding: 0,
       margin:30,
       dots:true,
      nav:false,
       autoplay:true,
   autoplayTimeout:6000,
   autoplayHoverPause:true,
     
      responsive:{
           0:{
               items:1
           },
           360:{
               items:1
           },
           600:{
               items:2
          },
          1000:{
               items:3
           },
           1300:{
               items:3
           }
     }
   });


});

 /*This says once the window has scrolled past a certain number of vertical pixels, it adds a class to the menu that changes it's position value to "fixed". */
 $(window).bind('scroll', function () {
  if ($(window).scrollTop() > 100) {
      $('.small-menu-device ').addClass('fixed');
  } else {
      $('.small-menu-device').removeClass('fixed');
  }

});

$("#hamburger-menu-small").click(function(){
  $("#hamburger-menu-small").toggleClass("open");
 
});

});
