"use strict";

// 헤더 호버 시 서브메뉴 출력하는 애니메이션

const headerBlackbox = document.querySelector("header .black_box");
const headerText = document.querySelector("header .text");
const headerSubmenu = document.querySelectorAll("header .sub_menu");

headerText.addEventListener("mouseenter", mouseOverBlackbox);
headerText.addEventListener("mouseenter", mouseOverText);

function mouseOverBlackbox() {
  headerBlackbox.style.height = "460px";
}

function mouseOverText() {
  for (var i = 0; i < headerSubmenu.length; i++) {
    headerSubmenu[i].style.height = "300px";
    headerSubmenu[i].style.transition = "0.5s";
    headerSubmenu[i].style.opacity = "1";
  }
}

headerBlackbox.addEventListener("mouseleave", mouseOutBlackbox);

function mouseOutBlackbox() {
  headerBlackbox.style.height = "0%";
  for (var i = 0; i < headerSubmenu.length; i++) {
    headerSubmenu[i].style.height = "";
    headerSubmenu[i].style.opacity = "";
  }
}

// 헤더 원위치 스크롤

document.addEventListener("scroll", loadHeader);

function loadHeader() {
  if (window.scrollY == 0) {
    document.querySelector(".black_box.second").style.height = "0";
  } else {
    document.querySelector(".black_box.second").style.height = "100%";
  }
}

// 모바일 네비

const navBtn = document.querySelector("header .nav_btn");
const navMobileCon = document.querySelector(".nav_mobile_con");
const navMobile = document.querySelector(".nav_mobile_con .nav_mobile");
const navMobileBlackBox = document.querySelector(".nav_mobile_con .black_box ");
const navCloseBtn = document.querySelector(".nav_mobile .close_btn");

navBtn.addEventListener("click", onNavMobile);

function onNavMobile() {
  navMobileCon.style.width = "100vw";
  navMobile.style.transform = "translateX(0%)";
  navMobileBlackBox.style.opacity = "0.5";
}

navMobileBlackBox.addEventListener("click", offNavMobile);
navCloseBtn.addEventListener("click", offNavMobile);

function offNavMobile() {
  navMobile.style.transform = "translateX(100%)";
  navMobileBlackBox.style.opacity = "0";
  setTimeout(function () {
    navMobileCon.style.width = "0";
  }, 700);
}
