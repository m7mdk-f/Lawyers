$(document).ready(function (e) {
  let id = 0;
  var table = $("#myTable").DataTable({
    data: dataSet,
    select: true,
    columns: [
      { title: "الرقم" },
      { title: " بداية الاشتراك" },
      { title: "تاريخ نهاية الاشتراك" },
      { title: "نوع الاشتراك" },
      { title: "مدة الاشتراك" },
      { title: "قيمة الاشتراك" },
    ],
    ordering: false,
    info: false,

    dom: "<'border rounded-lg border-2'<'top  '<'flex border-b border-b-2   flex-wrap px-4 py-2 mo  bg-white sm:justify-between justify-center '<'w-auto'B>>><'relative  w-full mx-auto  overflow-x-auto shadow-md sm:rounded-b-lg'rt>>",
    buttons: [
      {
        text: `<div class="flex w-10">
                                <div class="">فلتر</div>
                                <svg class="fill-none stroke-[#008BF9] inline mr-1  stroke-[30px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
                                </div>
                                
                                `,
        className:
          " bg-[#E5E5E5] fillter relative px-4 py-1 duration-500    rounded-sm  border text-base text-[#0C2647]",
      },
      {
        extend: "pdf",
        text: "pdf",
        className: "hidden pdf",
      },
      {
        extend: "excel",
        text: "pdf",
        className: " hidden excel",
      },
      {
        text: `تصدير<svg class="inline-block mr-1" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 9.5L12 15.5L6 9.5" stroke="#008BF9" stroke-width="2"/>
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
          console.log(0);
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
          "edit_delete delete  not_active px-4 py-1 duration-500   rounded-sm  border text-base",
        action: function () {
          var selectedRows = table.rows(".selected");
          console.log(selectedRows);
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
$(".pdfbut")
  .eq(0)
  .on("click", () => {
    const table = document.getElementById("myTable");
    html2pdf().from(table).save();
  });
  let trch = document.querySelectorAll("#myTable tbody .odd");
  $(".edit_delete").prop("disabled", true);
  clicktr();
  function clicktr() {
    $("#myTable tbody").on("click", "tr", function (even) {
      $(this).toggleClass("selected");
      $("#myTable tbody tr").not(this).removeClass("selected ");
      var td = $(event.target).closest("td");
      var link = $(td).find("a").attr("href");
      if (td.html().includes("تفاصيل القضية")) {
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
  h1.innerText = "سجل الاشتراكات";
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
});
