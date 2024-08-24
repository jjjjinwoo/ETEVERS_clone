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

//섹션3 카운트박스 스크롤 애니메이션 - JS

document.addEventListener("scroll", () => {
  if (window.scrollY > 2299) {
    document.querySelector(".main_section3 .count_box").style.transform =
      "translateX(0px)";
  }
});

//섹션3 카운트박스 숫자 오르는 애니메이션 - Jquery

// var s = 0;

// $(function () {
//   for (var i = 0; i < 1993; i++) {
//     setInterval(function () {
//       $("#year1").text(s);
//       s++;
//     }, 1000);
//   }
// }); 실패~

$(document).ready(function () {
  // 클래스가 "counter"인 모든 요소를 선택합니다.
  const $counters = $(".year");

  // 노출 비율(%)과 애니메이션 속도(ms)을 설정합니다.
  const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
  const duration = 1500; // ex) 1000 = 1초

  // 숫자에 쉼표를 추가할지 여부를 설정합니다.
  const addCommas = true; // ex) true = 1,000 / false = 1000

  // 숫자를 업데이트하고 애니메이션하는 함수 정의
  function updateCounter($el, start, end) {
    let startTime;
    function animateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;
      const current = Math.round(start + progress * (end - start));
      const formattedNumber = addCommas ? current.toLocaleString() : current;
      $el.text(formattedNumber);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      } else {
        $el.text(addCommas ? end.toLocaleString() : end);
      }
    }
    requestAnimationFrame(animateCounter);
  }

  // 윈도우의 스크롤 이벤트를 모니터링합니다.
  $(window)
    .on("scroll", function () {
      // 각 "counter" 요소에 대해 반복합니다.
      $counters.each(function () {
        const $el = $(this);
        // 요소가 아직 스크롤되지 않았다면 처리합니다.
        if (!$el.data("scrolled")) {
          // 요소의 위치 정보를 가져옵니다.
          const rect = $el[0].getBoundingClientRect();
          const winHeight = window.innerHeight;
          const contentHeight = rect.bottom - rect.top;

          // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
          if (
            rect.top <=
              winHeight - (contentHeight * exposurePercentage) / 100 &&
            rect.bottom >= (contentHeight * exposurePercentage) / 100
          ) {
            const start = parseInt($el.data("start"));
            const end = parseInt($el.data("end"));
            // 숫자를 업데이트하고 애니메이션을 시작합니다.
            updateCounter($el, start, end);
            $el.data("scrolled", true);
          }
        }
      });
    })
    .scroll();
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
  transform: "translate(0vw, 0%)",
  filter: "blur(20px)",
  width: "100%",
  overflow: "hidden",
});

gsap.to(".main_section6 .bg_box img", {
  scrollTrigger: {
    trigger: ".main_section5",
    start: "60% 50%",
    end: "140% 50%",
    scrub: 1,
    markers: false,
  },
  "clip-path": "inset(0%)",
});

//섹션6 스크롤 애니메이션 - JS

const textBox6 = document.querySelector(".main_section6 .text_box");
const logoboxStroke = document.querySelector(".main_section6 .logo_box.stroke");
const logoboxFill = document.querySelector(".main_section6 .logo_box.fill img");

document.addEventListener("scroll", () => {
  if (window.scrollY > 5700) {
    textBox6.style.transform = "translate(-50%, 0%)";
    textBox6.style.opacity = "1";
    setTimeout(logoboxDelayOn, 500);
    setTimeout(logoboxDelayOn2, 1500);
  } else {
    textBox6.style.transform = "translate(-50%, 20%)";
    textBox6.style.opacity = "0";
    logoboxStroke.classList.remove("on");
    logoboxFill.classList.remove("on");
    document
      .querySelector(".main_section6 .logo_box.stroke img")
      .classList.remove("on");
  }
});

function logoboxDelayOn() {
  logoboxStroke.classList.add("on");
}
function logoboxDelayOn2() {
  logoboxFill.classList.add("on");
  document
    .querySelector(".main_section6 .logo_box.stroke img")
    .classList.add("on");
}

// 섹션7 스크롤 애니메이션 - JS

const textBox7 = document.querySelectorAll(".main_section7 .card .text_box");

document.addEventListener("scroll", () => {
  if (window.scrollY > 6600) {
    for (let j = 0; j < textBox7.length; j++) {
      setTimeout(function () {
        textBox7[j].style.transform = "translateX(0px)";
        textBox7[j].style.opacity = "1";
      }, 500 * j);
    }
  }
});

const groupList7 = document.querySelectorAll(
  ".main_section7 .card .group-list"
);

document.addEventListener("scroll", () => {
  if (window.scrollY > 6600) {
    for (let j = 0; j < groupList7.length; j++) {
      setTimeout(function () {
        groupList7[j].style.transform = "translateX(0px)";
        groupList7[j].style.opacity = "1";
      }, 500 * j);
    }
  }
});

// 섹션7 호버 - JS

const cardList = document.querySelectorAll(".main_section7 .card");

for (var i = 0; i < cardList.length; i++) {
  cardList[i].addEventListener("mouseover", function () {
    for (var j = 0; j < cardList.length; j++) {
      cardList[j].classList.remove("hover");
    }
    this.classList.add("hover");
  });
}

document.querySelector(".main_section6").addEventListener("mouseover", () => {
  for (var j = 0; j < cardList.length; j++) {
    cardList[j].classList.add("hover");
  }
});
document.querySelector(".main_section8").addEventListener("mouseover", () => {
  for (var j = 0; j < cardList.length; j++) {
    cardList[j].classList.add("hover");
  }
});

// 섹션8 커서 이벤트 - JS

let mouseCursor = document.querySelector("#cursor");
window.addEventListener("wheel", cursor);
window.addEventListener("mousemove", cursor);
//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY + "px";
}

const link8 = document.querySelectorAll(".main_section8 .list .link");
const body = document.querySelector("body");

for (var i = 0; i < link8.length; i++) {
  link8[i].addEventListener("mouseover", cursorOn);
  function cursorOn(e) {
    mouseCursor.classList.add("hover");
  }
  // function cursorOn(e) {
  //   mouseCursor.style.transform = "scale(1)";
  //   mouseCursor.style.opacity = "1";
  // }
  link8[i].addEventListener("mouseout", cursorOff);
  function cursorOff(e) {
    mouseCursor.classList.remove("hover");
  }
  // function cursorOff(e) {
  //   mouseCursor.style.transform = "scale(0)";
  //   mouseCursor.style.opacity = "0";
  // }
}

// document.body.style.cursor = "none";

//마우스호버했을때 커서 안보이게
