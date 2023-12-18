
jQuery(document).ready(function () {
jQuery('#hero-slider').owlCarousel({
    items: 1,
    loop: false,
	dots:false,
    nav:true,
	navText: ['<i class="fa-angle-left"></i>','<i class="fa-angle-right"></i>'],
    autoplay: true,
  });
<!--amenities-->
    jQuery('#amenities, #amenities_2').owlCarousel({
    center: false,
    items:5,
    loop:false,
		dots:false,
    margin:20,
	 stagePadding: 132,
	 nav:true,
	navText : ["<i class='arrow-left'></i>","<i class='arrow-right'></i>"] ,
	mouseDrag : false,
	 responsive: {
    0: {
      items: 1,
			stagePadding: 0,
			dots:true,
    },

    600: {
      items: 2,
			dots:true,
			stagePadding: 40,
    },

    1024: {
      items: 3,
			dots:true,
			stagePadding: 52,
    },

    1366: {
      items: 4,
	  stagePadding: 72,
    },
	    1600: {
      items: 4
    }
  }
   
});
<!--step-away-->
   jQuery('#testimonials').owlCarousel({
    items:1,
    loop:false,
		dots:true,
	 stagePadding: 0,
   
});
<!--step-away-->
    jQuery('#step-away_2').owlCarousel({
    center: false,
    items:5,
    loop:false,
    margin:20,
		dots:false,
	 stagePadding: 132,
	 responsive: {
    0: {
      items: 1,
			stagePadding: 0,
			dots:true,
    },

    600: {
      items: 2,
			dots:true,
			stagePadding: 0,
    },

    1024: {
      items: 3,
			dots:true,
			stagePadding: 52,
    },

    1366: {
      items: 5,
	  stagePadding: 72,
    },
	    1600: {
      items: 4
    }
  }
   
});

<!--old-montreal-->
    jQuery('.old-montreal').owlCarousel({
    center: false,
    items:2,
    loop:false,
    margin:20,
		dots:false,
	 stagePadding: 400,
	  mouseDrag : false,
	  nav:true,
	navText : ["<i class='arrow-left'></i>","<i class='arrow-right'></i>"] ,
	 responsive: {
    0: {
      items: 1,
			stagePadding: 0,
			dots:true,
			 nav:false,
    },

    600: {
      items: 1,
			dots:true,
			stagePadding: 102,
    },

    1024: {
      items: 1,
			dots:true,
			stagePadding: 152,
    },

    1366: {
      items: 1,
	  stagePadding: 260,
    },
	    1600: {
      items: 1
    }
  }
   
});

<!--Restaurants-->
   jQuery('.restaurants').owlCarousel({
    items:1,
    loop:true,
    margin:0,
	dots:false, 
	nav:true,
	navText : ["<i class='arrow-left'></i>","<i class='arrow-right'></i>"]  
});

<!---Responsive-menu--->
  jQuery(".hamburger-btn").click(function(){
   jQuery("body").addClass("open-menu");
  });
   jQuery(".hamburger-close").click(function(){
   jQuery("body").removeClass("open-menu");
  });
	
jQuery(".footer-menu").click(function(){
jQuery(".footer-grid").toggleClass("main");
});
	
});

