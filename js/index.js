"use strict";

// 섹션2 스크롤 트리거

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
    trigger: ".main_section2", //객체기준범위
    start: "0% 20%", //시작 지점
    end: "40% 50%", //끝 지점
    // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    scrub: 1, //부드러운 스크러빙
    markers: false, //개발가이드선
  },
  y: -180,
});
