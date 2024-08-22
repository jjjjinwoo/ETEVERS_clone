"use strict";

// 헤더 호버 시 서브메뉴 출력하는 애니메이션

const headerBlackbox = document.querySelector("header .black_box");
const headerText = document.querySelector("header .text");
const headerSubmenu = document.querySelectorAll("header .sub_menu");

headerText.addEventListener("mouseover", mouseOverBlackbox);
headerText.addEventListener("mouseover", mouseOverText);

function mouseOverBlackbox() {
  headerBlackbox.style.transform = "translateY(0px)";
}

function mouseOverText() {
  for (var i = 0; i < headerSubmenu.length; i++) {
    headerSubmenu[i].style.height = "300px";
    headerSubmenu[i].style.transition = "0.5s";
    headerSubmenu[i].style.opacity = "1";
  }
}

headerBlackbox.addEventListener("mouseout", mouseOutBlackbox);

function mouseOutBlackbox() {
  headerBlackbox.style.transform = "translateY(-460px)";
  scrollHeader(); // 헤더 스크롤
  for (var i = 0; i < headerSubmenu.length; i++) {
    headerSubmenu[i].style.height = "";
    headerSubmenu[i].style.opacity = "";
  }
}

// 헤더 스크롤

document.addEventListener("scroll", scrollHeader);

function scrollHeader() {
  if (window.scrollY === 0) {
    headerBlackbox.style.transform = "translateY(-460px)";
  } else {
    headerBlackbox.style.transform = "translateY(-330px)";
  }
}
