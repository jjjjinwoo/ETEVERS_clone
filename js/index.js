"use strict";

//섹션2 스크롤 애니메이션 - GSAP

gsap.to(".top_hand", {
  scrollTrigger: {
    trigger: ".main_section2", //객체기준범위
    start: "0% 20%", //시작 지점
    end: "40% 50%", //끝 지점
    // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    scrub: 1, //부드러운 스크러빙
    markers: false, //개발가이드선
  },
  y: 200,
});

gsap.to(".bottom_hand", {
  scrollTrigger: {
    trigger: ".main_section2",
    start: "0% 20%",
    end: "40% 50%",
    scrub: 1,
    markers: false,
  },
  y: -180,
});

//섹션3 스크롤 애니메이션 - GSAP

gsap.to(".main_section3 .bg_box", {
  scrollTrigger: {
    trigger: ".main_section2",
    start: "60% 20%",
    end: "100% 50%",
    scrub: 1,
    markers: false,
  },
  "clip-path": "inset(0%)",
  transform: "translateY(0px)",
});

gsap.to(".main_section3 .blur > div", {
  scrollTrigger: {
    trigger: ".main_section2",
    start: "60% 20%",
    end: "100% 50%",
    scrub: 1,
    markers: false,
  },
  width: "100%",
  height: "100%",
  transform: "translateY(0px)",
  opacity: 0,
});

gsap.to(".main_section3 .text_box", {
  scrollTrigger: {
    trigger: ".main_section3",
    start: "0% 20%",
    end: "0% 20%",
    scrub: 2,
    markers: false,
  },
  transform: "translateX(0px)",
  opacity: 1,
});

//섹션3 카운트박스 애니메이션 - JS

document.addEventListener("scroll", () => {
  if (window.scrollY > 2299) {
    document.querySelector(".main_section3 .count_box").style.transform =
      "translateX(0px)";
  }
});
