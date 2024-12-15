let menum1 = document.getElementById("menum1");
let divmunum = document.getElementById("divmunum");

menum1.addEventListener("click", () => {
    if (
    menum1.parentElement.children[0].children[0].classList.contains("hidden")
  ) {
    console.log(1);
   menum1.parentElement.children[0].children[0].classList.remove("hidden");
   menum1.parentElement.children[0].children[1].classList.add("hidden");
    divmunum.classList.remove("hightmun");
    divmunum.classList.add("hightmun2");
    setTimeout(() => {
      divmunum.classList.add("hidden");
    }, 500);
  } else {
    divmunum.classList.add("hightmun");
    divmunum.classList.remove("hightmun2");
    divmunum.classList.remove("hidden");
    menum1.parentElement.children[0].children[0].classList.add("hidden");
    menum1.parentElement.children[0].children[1].classList.remove("hidden");

  }


});
