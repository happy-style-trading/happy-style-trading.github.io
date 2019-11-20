"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded");
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    autoplay: true
  });
});