// topslider
let sectionpr = document.querySelectorAll(".sectionpr");
let bg1 = document.querySelector("#bg1");
let bg2 = document.querySelector("#bg2");
let btn1 = document.querySelector("#btnswitch1");
let btn2 = document.querySelector("#btnswitch2");
let index = 1;

function slider() {
  sectionpr.forEach((p) => {
    if (p.classList.contains("hidden")) {
      p.classList.add("opin");
      p.classList.remove("hidden");
      p.classList.remove("opout");
    } else {
      p.classList.remove("opin");
      p.classList.add("opout");
      setTimeout(() => {
        p.classList.add("hidden");
      }, 1000);
    }
  });
  if (index == 0) {
    bg1.style.opacity = "0";
    bg2.style.opacity = "1";
    btn1.style.transform = "translateY(8px)";
    btn2.style.transform = "translateY(-8px)";
    btn1.firstElementChild.style.rotate = "0deg";
    btn2.firstElementChild.style.rotate = "0deg";
    index = 1;
  } else if (index == 1) {
    bg2.style.opacity = "0";
    bg1.style.opacity = "1";
    btn1.style.transform = "translateY(-80px)";
    btn2.style.transform = "translateY(80px)";
    btn1.firstElementChild.style.rotate = "180deg";
    btn2.firstElementChild.style.rotate = "180deg";
    index = 0;
  }
}

document
  .querySelectorAll(".sliderbtn")
  .forEach((btn) => btn.addEventListener("click", slider));

// secendslider

let divslid = document.querySelectorAll(".slid ");
let secendslider = document.querySelector(".secendslider");
let bgdives = document.querySelectorAll(".bgdives div");

let previous = document.getElementById("previous");
let next = document.getElementById("next");
let index1 = 0;

next.addEventListener("click", () => {
  previous.classList.remove("cursor-not-allowed");

  if (index1 < 3) {
    console.log(index1);
    index1++;
    bgdives.forEach((d, ix) => {
      d.classList.remove("bg-[#E1A123]");
      d.classList.add("bg-white");
      if (ix == index1) {
        d.classList.remove("bg-white");
        d.classList.add("bg-[#E1A123]");
      }
    });
    secendslider.style.transform = ` translateX(${index1 * 100}%)`;

    if (index1 == 3) {
      next.classList.add("cursor-not-allowed");
    }
  } else {
    next.classList.add("cursor-not-allowed");
  }
});
previous.addEventListener("click", () => {
  next.classList.remove("cursor-not-allowed");
  if (index1 > 0) {
    console.log(index1);
    index1--;
    bgdives.forEach((d, ix) => {
      d.classList.remove("bg-[#E1A123]");
      d.classList.add("bg-white");
      if (ix == index1) {
        d.classList.remove("bg-white");
        d.classList.add("bg-[#E1A123]");
      }
    });
    secendslider.style.transform = ` translateX(${index1 * 100}%)`;
    if (index1 == 0) {
      previous.classList.add("cursor-not-allowed");
    }
  } else {
    previous.classList.add("cursor-not-allowed");
  }
});
