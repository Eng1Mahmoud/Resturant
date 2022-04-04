"use strict";

var started = false; // start functions on function onloud

window.onscroll = function () {
  // start header
  var header = document.querySelector(".header");

  if (window.scrollY >= 200) {
    header.style.cssText = "position:fixed !important; top:0px; left:0px; background-color:#0F172B;";
  } else {
    header.style.cssText = "position:absolute !important; top:0px; left:0px; background-color:transperant;";
  } //end header
  // start service


  var box_service = document.querySelectorAll(".service .container .over .box");
  box_service.forEach(function (box) {
    if (window.scrollY >= box.offsetTop - 380) {
      box.classList.add("reset_buttom");
    }
  }); // end service
  //start about 

  var img_about = document.querySelectorAll(".about_us .container .imgs .imgC");
  var number_about = document.querySelectorAll(".about_us .container .row .number");
  img_about.forEach(function (img) {
    if (window.scrollY >= img.offsetTop - 380) {
      img.classList.add("reset_scale");
    }
  }); // function incres numbe

  function count(num) {
    var gole = num.children[0].children[0].children[0].dataset.num;
    var count = setInterval(function () {
      num.children[0].children[0].children[0].textContent++;

      if (num.children[0].children[0].children[0].textContent == gole) {
        clearInterval(count);
      }
    }, 300 / gole);
  }

  if (window.scrollY >= number_about[0].parentElement.offsetTop - 380) {
    if (!started) {
      number_about.forEach(function (num) {
        count(num);
      });
      started = true;
    }
  } //end about
  // start head_popular


  var head_popular = document.querySelector(".popular .head_popular");

  if (window.scrollY >= head_popular.offsetTop - 380) {
    head_popular.classList.add("reset_scale");
  } // end head_popular
  // start resturant video and form


  var video = document.querySelector(".resturant .row .video");
  var form = document.querySelector(".resturant .row .form");

  if (window.scrollY >= video.offsetTop - 380) {
    video.classList.add("reset_left");
  }

  if (window.scrollY >= form.offsetTop - 380) {
    form.classList.add("reset_right");
  } // end resturant video and form
  //start team


  var head_team = document.querySelector(".chefs .container .head-chefs");
  var team_box = document.querySelectorAll(".chefs .container .chefs-card .box-card");

  if (window.scrollY >= head_team.offsetTop - 380) {
    head_team.classList.add("reset_buttom");
  }

  team_box.forEach(function (card) {
    if (window.scrollY >= card.offsetTop - 380) {
      card.classList.add("reset_buttom");
    }
  }); // end team
  //start gallery

  var head_gallery = document.querySelector(".gallery .container .head-gallery");
  var img_box = document.querySelectorAll(".gallery  .container .row .box-img ");

  if (window.scrollY >= head_gallery.offsetTop - 380) {
    head_gallery.classList.add("reset_buttom");
  }

  img_box.forEach(function (img) {
    if (window.scrollY >= img.offsetTop - 380) {
      img.classList.add("reset_scale");
    }
  }); // end gallery
}; // start functions on function onloud


var text_hearo = document.querySelector(".hearo .container .contents .text");
var img_loud = document.querySelector(".loud .content-loud img");
var loud = document.querySelector(".loud");
var html = document.querySelector("html");

window.onload = function () {
  setTimeout(function () {
    loud.style.cssText = "display:none !important;";
    text_hearo.classList.add("reset_scale");
    html.style.cssText = "overflow-y: visible !important;  overflow-x: hidden !important;";
  }, 3000);
};