try {
  let showmuncenter = document.querySelectorAll(".showmuncenter");
  showmuncenter.forEach((s) => {
    s.addEventListener("click", () => {
      removemenum("alterdiv");
    });
  });
} catch {}

let showmuncenter2 = document.querySelectorAll(".showmuncenter2");
showmuncenter2.forEach((s) => {
  s.addEventListener("click", () => {
    removemenum("alterdiv2");
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
