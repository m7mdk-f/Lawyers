let select_all = document.querySelector("#select-all");
let allinput = document.querySelectorAll("table  tbody tr td input");
select_all.addEventListener("click", () => {
  allinput.forEach((a) => {
    a.checked = select_all.checked;
  });
});

allinput.forEach((a) => {
  a.addEventListener("click", () => {
    let allinput1 = Array.from(
      document.querySelectorAll("table tbody tr td input:checked")
    );
    if (allinput.length == allinput1.length) {
      select_all.checked = true;
    } else select_all.checked = false;
  });
});
