jQuery(document).ready(function () {
  jQuery('#hero-slider').owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    mouseDrag: false,
    nav: true,
    navText: ['<i class="fa-angle-left"></i>', '<i class="fa-angle-right"></i>'],
    autoplay: true,
  });
   jQuery('#amenities, #amenities_2').owlCarousel({
    center: false,
    items: 5,
    loop: false,
    dots: false,
    margin: 30,
    stagePadding: 132,
    nav: true,
    navText: ["<i class='arrow-left'></i>", "<i class='arrow-right'></i>"],
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },

      600: {
        items: 2,
        stagePadding: 40,
      },

      1024: {
        items: 3,
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
  jQuery('.amenities-slider').owlCarousel({
    center: false,
    items: 4,
    loop: false,
    dots: false,
    margin: 30,
    stagePadding: 132,
    nav: true,
    navText: ["<i class='arrow-left'></i>", "<i class='arrow-right'></i>"],
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        dots: false,
      },

      600: {
        items: 2,
        dots: true,
        stagePadding: 40,
      },

      1024: {
        items: 3,
        dots: true,
        stagePadding: 52,
      },

      1366: {
        items: 3,
        stagePadding: 72,
      },
      1600: {
        items: 3
      }
    }

  });

 
  jQuery('#testimonials').owlCarousel({
    items: 1,
    loop: false,
    dots: true,
    stagePadding: 0,

  });

  jQuery('#nearbydinning').owlCarousel({
    center: false,
    items: 4,
    loop: false,
    margin: 30,
    dots: false,
    stagePadding: 132,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        dots: true,
      },

      600: {
        items: 2,
        dots: true,
        stagePadding: 0,
      },

      1024: {
        items: 3,
        dots: true,
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
  jQuery('#step-away_2').owlCarousel({
    center: false,
    items: 6,
    loop: false,
    margin: 30,
    dots: false,
    stagePadding: 132,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        dots: true,
      },

      600: {
        items: 2,
        dots: true,
        stagePadding: 0,
      },

      1024: {
        items: 3,
        dots: true,
        stagePadding: 52,
      },

      1366: {
        items: 5,
        stagePadding: 72,
      },
      1600: {
        items: 5
      }
    }

   
  });

 
  jQuery('.old-montreal').owlCarousel({
    center: false,
    items: 2,
    loop: false,
    margin: 30,
    dots: false,
    stagePadding: 400,
    mouseDrag: false,
    nav: true,
    navText: ["<i class='arrow-left'></i>", "<i class='arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },

      600: {
        items: 1,
        stagePadding: 102,
      },

      1024: {
        items: 1,
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
  jQuery('.restaurants').owlCarousel({
    items: 1,
    loop: false,
    margin: 0,
    dots: false,
    nav: true,
    navText: ["<i class='arrow-left'></i>", "<i class='arrow-right'></i>"]
  });

  jQuery(".hamburger-btn").click(function () {
    jQuery("body").addClass("open-menu");
  });
  jQuery(".hamburger-close").click(function () {
    jQuery("body").removeClass("open-menu");
  });

  jQuery(".footer-menu").click(function () {
    jQuery(".footer-grid").toggleClass("main");
  });

  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
      jQuery('header').addClass("sticky");
    } else {
      jQuery('header').removeClass("sticky");
    }
  });
  jQuery(".open-popup").click(function () {
    jQuery("body").addClass("intro");
  });

  jQuery(".close-popup").click(function () {
    jQuery("body").removeClass("intro");
  });
  jQuery(".filter-popup").click(function () {
    jQuery(".filter-modal").addClass("activefrom");
  });
  jQuery(".close-btn").click(function () {
    jQuery(".filter-modal").removeClass("activefrom");
  });
 
});
  
