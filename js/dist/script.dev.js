"use strict";

var header = document.querySelector(".header");

window.onscroll = function () {
  if (window.scrollY >= 200) {
    header.style.cssText = "position:fixed !important; top:0px; left:0px; background-color:#0F172B;";
  }
};