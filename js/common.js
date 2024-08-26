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
  if (window.scrollY === 0) {
    headerBlackbox.style.height = "0";
  } else {
    headerBlackbox.style.height = "100%";
  }
  // headerBlackbox.style.height = "0";
  for (var i = 0; i < headerSubmenu.length; i++) {
    headerSubmenu[i].style.height = "";
    headerSubmenu[i].style.opacity = "";
  }
}

// 헤더 스크롤

// document.addEventListener("scroll", scrollHeader);

// function scrollHeader() {
//   if (window.scrollY === 0) {
//     headerBlackbox.style.height = "0";
//   } else if (window.scrollY < 100) {
//     headerBlackbox.style.height = "100%";
//     for (var i = 0; i < headerSubmenu.length; i++) {
//       headerSubmenu[i].style.height = "";
//       headerSubmenu[i].style.opacity = "";
//     }
//   }
// }

// 새로고침 되었을때

document.addEventListener("scroll", loadHeader);

function loadHeader() {
  if (window.scrollY < 1) {
    document.querySelector(".black_box.second").style.height = "0";
  } else {
    document.querySelector(".black_box.second").style.height = "100%";
  }
}

console.log(document.querySelector(".black_box.second"));
