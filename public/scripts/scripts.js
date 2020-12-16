/*!
 * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
(function ($) {
  // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $("html, body").on("click", ".js-scroll-trigger", function (target) {
    $(".navbar-collapse").collapse("hide");
  });

  //scroll top
  $("html, body").on("click", ".scroll-top", function (target) {
    $("html, body").animate(
      {
        scrollTop: "0px",
      },
      1000,
      "easeInOutExpo"
    );
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    var mainNav = $("#mainNav");
    if (mainNav.offset()) {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
