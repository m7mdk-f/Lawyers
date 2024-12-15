// select button
let chooseserves = document.getElementById("chooseserves");
chooseserves.addEventListener("click", chooseser);

function chooseser() {
  let heght = document.getElementById("heght");
  if (!heght.classList.contains("hidden")) {
    heght.classList.add("hieght2");
    heght.classList.remove("hieght1");
    setTimeout(() => {
      heght.classList.add("hidden");
      heght.classList.add("hieght1");
      heght.classList.remove("hieght2");
    }, 500);
  } else heght.classList.remove("hidden");
}
document.querySelectorAll(".select").forEach((s) => {
  s.addEventListener("click", (even) => {
    chooseser();
    document.getElementById("selectedchose").innerHTML = even.target.innerHTML;
  });
});
// hidden and show munum
let showmuncenter = document.querySelectorAll(".showmuncenter");
showmuncenter.forEach((s) => {
  s.addEventListener("click", (even) => {
    removemenum("alterdiv", even.target);
  });
});
let showmuncenter2 = document.querySelectorAll(".showmuncenter2");
showmuncenter2.forEach((s) => {
  s.addEventListener("click", (even) => {
    removemenum("alterdiv2", even.target);
  });
});
function removemenum(id, thiselement) {
  let id2 = document.getElementById(id);
  let alterdiv = document.getElementById("alterdiv");
  if (thiselement.dataset.id == "add" && !alterdiv.classList.contains('hidden')) {
    alterdiv.classList.remove("hidden");
  } else if (thiselement.dataset.id == "remove") {
    alterdiv.classList.add("hidden");
  }

  if (!id2.classList.contains("hidden")) {
    id2.children[0].children[1].classList.add("hidere");
    id2.children[0].children[1].classList.remove("hide12");
    id2.children[0].children[0].classList.add("showre");
    id2.children[0].children[0].classList.remove("show12");
    setTimeout(() => {
      id2.children[0].children[1].classList.remove("hidere");
      id2.children[0].children[0].classList.add("show12");
      id2.children[0].children[1].classList.add("hide12");
      id2.children[0].children[0].classList.remove("showre");
      id2.classList.add("hidden");
    }, 500);
    return;
  } else id2.classList.remove("hidden");
}
