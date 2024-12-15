let secend = document.getElementById("secend");
let onclickbut = document.getElementById("onclickbut");
onclickbut.addEventListener("click", (event) => {
  let steps = document.querySelectorAll(".steps");
  if (!secend.classList.contains("hidden")) {
    event.target.parentElement.parentElement.parentElement.parentElement.classList.add(
      "hidden"
    );
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].classList.remove(
      "hidden"
    );
    secend.classList.add("hidden");
    steps.forEach((s) => {
      try {
        s.children[2].classList.remove("bg-[#8C7155]");
        s.children[2].classList.add("bg-[#F1EDF4]");
      } catch {}
      s.children[0].classList.remove("bg-[#8C7155]");
      s.children[0].classList.add("bg-[#F1EDF4]");
      s.classList.remove("stroke-white", "text-[#8C7155]");
      s.classList.add("stroke-[#CCD2E3]", "text-[#878691]");
    });
    steps[0].children[2].classList.add("bg-[#8C7155]");
    steps[0].children[2].classList.remove("bg-[#F1EDF4]");
    steps[0].children[0].classList.add("bg-[#8C7155]");
    steps[0].children[0].classList.remove("bg-[#F1EDF4]");
    steps[0].classList.add("stroke-white", "text-[#8C7155]");
    steps[0].classList.remove("stroke-[#CCD2E3]", "text-[#878691]");
  }
  secend.classList.remove("hidden");
});
let shownext = document.querySelectorAll(".shownext");
shownext.forEach((e) => {
  e.addEventListener("click", replace);
});
function replace(event) {
  let steps = document.querySelectorAll(".steps");
  let alldiv = document.querySelectorAll(".alldiv");

  let arr =
    event.target.parentElement.parentElement.parentElement.parentElement
      .parentElement.parentElement.children;
  console.log(arr);
  if (event.target.id == "prive") {
    let o = 0;
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].classList.contains("hidden")) {
        o = i;
      }
    }
    alldiv.forEach((d) => {
      d.classList.add("hidden");
    });
    arr[o - 1].classList.remove("hidden");
  } else {
    alldiv.forEach((d) => {
      d.classList.add("hidden");
    });
    if (event.target.id == "paid") {
      let divpaid = document.getElementById("divpaid");
      divpaid.classList.remove("hidden");
    } else
      event.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.remove(
        "hidden"
      );
  }
  console.log(arr[5]);
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].classList.contains("hidden")) {
      if (arr[5] == undefined) {
        i = 5;
      }
      steps.forEach((s, index) => {
        if (index <= i) {
          try {
            s.children[2].classList.add("bg-[#E1A123]");
            s.children[2].classList.remove("bg-[#F1EDF4]");
          } catch {}
          s.children[0].classList.add("bg-[#E1A123]");
          s.children[0].classList.remove("bg-[#F1EDF4]");
          s.classList.add("stroke-white", "text-[#E1A123]");
          s.classList.remove("stroke-[#CCD2E3]", "text-[#878691]");
        } else {
          try {
            s.children[2].classList.remove("bg-[#8C7155]");
            s.children[2].classList.add("bg-[#F1EDF4]");
          } catch {}
          s.children[0].classList.remove("bg-[#8C7155]");
          s.children[0].classList.add("bg-[#F1EDF4]");
          s.classList.remove("stroke-white", "text-[#E1A123]");
          s.classList.add("stroke-[#CCD2E3]", "text-[#878691]");
        }
      });
    }
  }
}

// alter div
let showmuncenter2 = document.querySelectorAll(".showmuncenter2");
showmuncenter2.forEach((s) => {
  s.addEventListener("click", () => {
    removemenum("alterdiv2");
  });
});
let showmuncenter3 = document.querySelectorAll(".showmuncenter3");
showmuncenter3.forEach((s) => {
  s.addEventListener("click", () => {
    removemenum("alterdiv3");
  });
});
let showmuncenter = document.querySelectorAll(".showmuncenter");
showmuncenter.forEach((s) => {
  s.addEventListener("click", () => {
    removemenum("alterdiv");
  });
});
function removemenum(id) {
  let id2 = document.getElementById(id);
  if (!id2.classList.contains("hidden")) {
    try {
      id2.children[0].children[1].classList.add("hidere");
      id2.children[0].children[1].classList.remove("hide12");
    } catch {
      id2.children[1].classList.add("hidere");
      id2.children[1].classList.remove("hide12");
    }
    id2.children[0].children[0].classList.add("showre");
    id2.children[0].children[0].classList.remove("show12");
    setTimeout(() => {
      try {
        id2.children[0].children[1].classList.remove("hidere");
        id2.children[0].children[1].classList.add("hide12");
      } catch {
        id2.children[1].classList.remove("hidere");
        id2.children[1].classList.add("hide12");
      }
      id2.children[0].children[0].classList.add("show12");
      id2.children[0].children[0].classList.remove("showre");
      id2.classList.add("hidden");
    }, 500);
    return;
  } else id2.classList.remove("hidden");
}
