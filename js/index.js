"use strict";

// lenis : 스크롤 부드럽게 하는 효과

const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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

//섹션4 스크롤 애니메이션 - GSAP

gsap.to(".main_section4 .text_box", {
  scrollTrigger: {
    trigger: ".main_section4 .text_box",
    start: "0% 0%",
    end: "100% 0%",
    scrub: 1,
    markers: false,
    pin: true,
  },
});

gsap.to(".main_section4 .text_box .text,.main_section4 .text_box .title", {
  scrollTrigger: {
    trigger: ".main_section4",
    start: "60% 50%",
    end: "60% 50%",
    scrub: 1,
    markers: false,
  },
  color: "white",
});

gsap.to(".main_section4 .text_box .title_fill", {
  scrollTrigger: {
    trigger: ".main_section4",
    start: "60% 50%",
    end: "60% 50%",
    scrub: 1,
    markers: false,
  },
  "background-image": "-webkit-linear-gradient(transparent 50%, #ffffff 50%)",
  "-webkit-text-stroke": "1px #ffffff",
});

//섹션4 스크롤 텍스트 애니메이션 - JS

const mainText4 = document.querySelector(".main_section4 .text_box .text");
const mainTitle4 = document.querySelector(".main_section4 .text_box .title");
const mainTitleFill4 = document.querySelector(
  ".main_section4 .text_box .title_fill"
);

document.addEventListener("scroll", () => {
  if (window.scrollY > 3000) {
    mainText4.style.animationName = "mainTitle2";
    mainText4.style.opacity = "1";
    mainTitle4.style.animationName = "mainTitle2";
    mainTitle4.style.opacity = "1";
    mainTitleFill4.style.animationName = "mainTitle1";
    mainTitleFill4.style.opacity = "1";
    setTimeout(function () {
      mainTitleFill4.style.backgroundSize = "100% 376px";
    }, 500);
  }
});

//섹션6 스크롤 애니메이션 - GSAP

gsap.to(".main_section6 .bg_box", {
  scrollTrigger: {
    trigger: ".main_section5",
    start: "60% 50%",
    end: "140% 50%",
    scrub: 1,
    markers: false,
  },
  "clip-path": "inset(0%)",
  transform: "translate(0px, 0px)",
  filter: "blur(20px)",
});
