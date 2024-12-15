$(document).ready(function (e) {
  let id = 0;
  var table = $("#myTable").DataTable({
    data: dataSet,
    select: true,
    columns: [
      { title: "#" },
      {
        title: "النوع",
      },
      { title: "اليوم" },

      { title: "التاريخ الهجري" },
      { title: "التاريخ الميلادي" },
      { title: "الوقت" },
      {
        title: "حالة الجلسة",
      },
      { title: "الاجراء" },
    ],
    ordering: false,
    info: false,

    dom: "<'border rounded-lg border-2'<'top  '<'flex border-b border-b-2   flex-wrap px-4 py-2 mo  bg-white sm:justify-between justify-center '<'w-auto'B>>><'relative  w-full mx-auto  overflow-x-auto shadow-md sm:rounded-b-lg'rt>><'bottom flex relative botton-1 py-4 rounded-b-xl w-full bg-white border-b justify-center items-center ' <'mx-auto mt-2 md:mx-0    custom-page-number' p>>",
    buttons: [
      {
        text: `<div class="flex w-10">
                                <div class="">فلتر</div>
                                <img class="inlinde-block" src="./images/icons8_filter 1.png" alt="">
        
                                </div>
                                
                                `,
        className:
          " bg-[#E5E5E5] fillter relative px-4 py-1 duration-500    rounded-sm  border text-base text-[#0C2647]",
      },

      {
        extend: "excel",
        text: "pdf",
        className: " hidden excel",
      },
      {
        text: `تصدير<svg class="mr-1 inline-block" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 9.5L12 15.5L6 9.5" stroke="#E1A123" stroke-width="2"/>
</svg>

    <div id="menumhid" class="absolute hidden bg-white w-full text-center flex justify-center items-center  top-7 z-10 left-0"> 
    <div>
        <button class="inline-block mt-2 pdfbut  text-center">
            pdf
        </button>
            <button class="block my-2 excelbut text-center">
            Excel
        </button>
            <button class="block text-center">
            html
        </button>
        </div>
    </div>
    `,
        className:
          " bg-[#E5E5E5] px-4 py-1 duration-500 relative    rounded-sm  border text-base text-[#0C2647]",
        action: function () {
          $("#menumhid").toggleClass("hidden");
          let pdf = $(".pdf");
          let pdfbut = $(".pdfbut");
          let excel = $(".excel");
          let excelbut = $(".excelbut");
          excelbut.on("click", function () {
            excel.trigger("click");
          });
          pdfbut.on("click", function () {
            pdf.trigger("click");
          });
        },
      },

      {
        text: "حذف",
        className:
          "edit_delete   not_active px-4 py-1 duration-500   rounded-sm  border text-base",
        action: function () {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              var selectedRows = table.rows(".selected").data();
              dataSet = dataSet.filter((d) => d != selectedRows[0]);
              table.clear().rows.add(dataSet).draw();
              formattable();
              $(".edit_delete").css("opacity", ".5");
              $(".edit_delete").prop("disabled", true);
            }
          });
        },
      },
    ],
  });


  let showmuncenter3 = $(".showmuncenter3");
  showmuncenter3.on('click',()=>{
    removemenum("alterdiv3");
  })
  $(".pdfbut").on("click", () => {
    const table = document.getElementById("myTable");
    html2pdf().from(table).save();
  });
  let linkshow = $(".linkshow");
  linkshow.on("click", () => {
    removemenum("alterdiv3");
  });

  let trch = document.querySelectorAll("#myTable tbody .odd");
  $(".edit_delete").prop("disabled", true);
  clicktr();
  function clicktr() {
    $("#myTable tbody").on("click", "tr", function (even) {
      $(this).toggleClass("selected");
      $("#myTable tbody tr").not(this).removeClass("selected ");
      var td = $(even.target).closest("td");
      var link = $(td).find("a").attr("href");
      console.log(link);
      if (link != undefined) {
        window.location = link;
      }
      trch.forEach((t) => {
        if (t.classList.contains("selected")) {
          t.classList.remove("odd");
        } else t.classList.add("odd");
      });

      var selectedRows = table.rows(".selected").data();
      if (selectedRows.length == 0) {
        $(".edit_delete").css("opacity", ".5");
        $(".edit_delete").css("cursor", "not-allowed");
        $(".edit_delete").prop("disabled", true);
        return;
      } else {
        $(".edit_delete").css("opacity", "1");
        $(".edit_delete").prop("disabled", false);
        $(".edit_delete").css("cursor", "pointer");
      }
    });
  }

  formattable();
  function formattable() {
    $("#myTable").addClass(
      "w-full text-sm text-left text-gray-500 dark:text-gray-400"
    );
    $("#myTable thead").addClass(
      "text-base text-[#0D0C22] font-medium   bg-white py-5 dark:bg-gray-700 dark:text-gray-400 text-center"
    );
    $("#myTable thead tr th").addClass("px-6 py-5");
    $("#myTable tbody").addClass(
      "w-full text-[#0D0C22] h-full  bg-white  dark:text-gray-400 "
    );
    $("#myTable tbody tr").addClass(
      "bg-white border-b border-red-400 text-center text-sm  font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    );
    $("#myTable  tbody tr th").addClass(
      "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    );
  }
  let mo = document.querySelector(".mo");
  let divq = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.innerText = "جلسات القضايا ";
  h1.className = "mt-2 text-[#0D0C22] text-center sm:mb-0 mb-3";
  divq.append(h1);
  mo.prepend(divq);
  $("#myTable").on("draw.dt", function () {
    rplacebutton();
    trch = document.querySelectorAll("#myTable tbody .odd");
  });

  rplacebutton();
  function rplacebutton() {
    let $paginate = $("#myTable_paginate");
    $paginate.addClass("relative");
    let $prevButton = $paginate.find(".paginate_button.previous");
    let $nextButton = $paginate.find(".paginate_button.next");
    let $customButton;
    let $nectcusButton;
    if ($prevButton.hasClass("disabled")) {
      $customButton =
        $(`<button id="privbut" type="button" class=" text-lg ml-2 disp " aria-controls="myTable" tabindex="0"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99481 7.00495L2.40181 11.5979C2.31023 11.6914 2.20102 11.7658 2.08051 11.8168C1.96001 11.8678 1.83059 11.8943 1.69974 11.895C1.56889 11.8957 1.43921 11.8704 1.31819 11.8206C1.19718 11.7708 1.08723 11.6976 0.994704 11.6051C0.902179 11.5125 0.828914 11.4026 0.779145 11.2816C0.729376 11.1605 0.704092 11.0309 0.704753 10.9C0.705414 10.7692 0.732008 10.6398 0.782996 10.5192C0.833985 10.3987 0.908356 10.2895 1.00181 10.1979L4.90181 6.29795L1.00181 2.39795C0.819248 2.21166 0.717578 1.96085 0.718896 1.70002C0.720213 1.43919 0.824411 1.18942 1.00885 1.00498C1.19328 0.820548 1.44305 0.716349 1.70388 0.715032C1.96471 0.713715 2.21552 0.815383 2.40181 0.997947L6.99481 5.58995C7.18228 5.77748 7.2876 6.03178 7.2876 6.29695C7.2876 6.56211 7.18228 6.81642 6.99481 7.00395L6.99481 7.00495Z" />
                            </svg>
                            </button>`);
    } else {
      $customButton =
        $(`<button id="privbut" type="button" class=" text-lg ml-2 actbut " aria-controls="myTable" tabindex="0"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99481 7.00495L2.40181 11.5979C2.31023 11.6914 2.20102 11.7658 2.08051 11.8168C1.96001 11.8678 1.83059 11.8943 1.69974 11.895C1.56889 11.8957 1.43921 11.8704 1.31819 11.8206C1.19718 11.7708 1.08723 11.6976 0.994704 11.6051C0.902179 11.5125 0.828914 11.4026 0.779145 11.2816C0.729376 11.1605 0.704092 11.0309 0.704753 10.9C0.705414 10.7692 0.732008 10.6398 0.782996 10.5192C0.833985 10.3987 0.908356 10.2895 1.00181 10.1979L4.90181 6.29795L1.00181 2.39795C0.819248 2.21166 0.717578 1.96085 0.718896 1.70002C0.720213 1.43919 0.824411 1.18942 1.00885 1.00498C1.19328 0.820548 1.44305 0.716349 1.70388 0.715032C1.96471 0.713715 2.21552 0.815383 2.40181 0.997947L6.99481 5.58995C7.18228 5.77748 7.2876 6.03178 7.2876 6.29695C7.2876 6.56211 7.18228 6.81642 6.99481 7.00395L6.99481 7.00495Z" />
                        </svg>
                        </button>`);
    }
    $prevButton.css("display", "none");
    $nextButton.css("display", "none");
    if ($nextButton.hasClass("disabled")) {
      $nectcusButton =
        $(`<button type="button" class=" text-lg  mr-2 disp" aria-controls="myTable" tabindex="0"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00483 7.00493C0.817362 6.8174 0.712047 6.56309 0.712047 6.29793C0.712047 6.03277 0.817362 5.77846 1.00483 5.59093L5.59783 0.997929C5.78412 0.815366 6.03493 0.713697 6.29576 0.715014C6.55659 0.716331 6.80636 0.82053 6.9908 1.00497C7.17523 1.1894 7.27943 1.43917 7.28075 1.7C7.28207 1.96083 7.1804 2.21164 6.99783 2.39793L3.09783 6.29793L6.99783 10.1979C7.1804 10.3842 7.28207 10.635 7.28075 10.8959C7.27943 11.1567 7.17523 11.4065 6.9908 11.5909C6.80636 11.7753 6.55659 11.8795 6.29576 11.8808C6.03493 11.8822 5.78412 11.7805 5.59783 11.5979L1.00483 7.00493Z" />
                                        </svg>
                                        </button>`);
    } else {
      $nectcusButton =
        $(`<button type="button" class=" text-lg  mr-2 actbut" aria-controls="myTable" tabindex="0"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00483 7.00493C0.817362 6.8174 0.712047 6.56309 0.712047 6.29793C0.712047 6.03277 0.817362 5.77846 1.00483 5.59093L5.59783 0.997929C5.78412 0.815366 6.03493 0.713697 6.29576 0.715014C6.55659 0.716331 6.80636 0.82053 6.9908 1.00497C7.17523 1.1894 7.27943 1.43917 7.28075 1.7C7.28207 1.96083 7.1804 2.21164 6.99783 2.39793L3.09783 6.29793L6.99783 10.1979C7.1804 10.3842 7.28207 10.635 7.28075 10.8959C7.27943 11.1567 7.17523 11.4065 6.9908 11.5909C6.80636 11.7753 6.55659 11.8795 6.29576 11.8808C6.03493 11.8822 5.78412 11.7805 5.59783 11.5979L1.00483 7.00493Z" />
                                        </svg>
                                        </button>`);
    }

    $nectcusButton.on("click", () => {
      $nextButton.trigger("click");
    });
    $customButton.on("click", function () {
      $prevButton.trigger("click");
    });
    $paginate.prepend($customButton);
    $paginate.append($nectcusButton);
  }

  // alter div
  $(".fillter").on("click", function () {
    removemenum("alterdiv2");
  });
  let showmuncenter2 = document.querySelectorAll(".showmuncenter2");
  showmuncenter2.forEach((s) => {
    s.addEventListener("click", (even) => {
      removemenum("alterdiv2");
    });
  });

  function removemenum(id) {
    let id2 = document.getElementById(id);
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
});
