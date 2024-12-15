let toggleSidebarMobile = document.getElementById("toggleSidebarMobile");
let sidebar = document.getElementById("sidebar");
let backgrou = document.getElementById("backgrou");
toggleSidebarMobile.addEventListener("click", () => {
  backgrou.classList.toggle("hidden");
  document.body.classList.toggle("overflow-y-hidden");

  if (window.innerWidth < 500 && window.innerWidth > 300)
    sidebar.style.width = "60%";
  else if (window.innerWidth < 300) sidebar.style.width = "100%";
  else sidebar.style.width = "40%";
});
document.getElementById("error").addEventListener("click", hid);
backgrou.addEventListener("click", hid);
function hid() {
  sidebar.style.width = 0;
  backgrou.classList.toggle("hidden");
  document.body.classList.toggle("overflow-y-hidden");
}
window.onload = () => {
  let menu = document.querySelectorAll(".menu");
  let ul = document.querySelectorAll(".men");
  ul.forEach((u) => {
    if (u.classList.contains("active")) {
      let li = u.children;
      u.style.height = `${li[1].clientHeight * (li.length - 1)}px`;
      try {
        u.parentElement.children[0].children[0].children[1].children[0].style.rotate =
          "180deg";
      } catch {}
    }
    else u.style.height='0px'
  });

  menu.forEach((m) => {
    m.addEventListener("click", show);
  });
  function show(event) {
    console.log(event.target)
    menu.forEach((m) => {
      try {
        m.children.item(1).children[0].style.rotate = "0deg";
      } catch {}
    });
    ul.forEach((ul) => {
      if (ul.dataset.men == event.target.id && ul.style.height == "0px") {
        let li = ul.children;
        
        ul.style.height = `${li[1].clientHeight * (li.length - 1)}px`;
        try {
          event.target.parentElement.children.item(1).children[0].style.rotate =
            "180deg";
        } catch {}
      } else {
        ul.style.height = 0;
      }
    });
  }
};

function showremove(id, idd) {
  id.addEventListener("click", () => {
    document.getElementById(idd).classList.toggle("hidden");
  });
  let menuadrop = document.querySelectorAll(".menuadrop");
  menuadrop.forEach((m) => {
    if (m.id != idd) {
      m.classList.add("hidden");
    } else m.classList.remove("hidden");
  });
}
