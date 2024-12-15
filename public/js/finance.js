// table 2
$(document).ready(function (e) {
  let id = 0;
  var table2 = $("#myTable2").DataTable({
    data: dataSet2,
    select: true,
    columns: [
      {
        title: '<input type="checkbox" id="select-all" title="Select All">',
        orderable: false,
        className: "md:w-[3%]",
        render: function (data, type, full, meta) {
          return '<input type="checkbox" class="row-checkbox" title="Select Row">';
        },
      },
      { title: "#" },
      { title: " العميل " },
      { title: "المبلغ" },
      { title: "النوع" },
      { title: "تاريخها" },
      { title: "الوقت" },
      { title: "الوصف" },
      { title: "الحالة" },
    ],
    ordering: false,
    info: false,
    dom: "<'border rounded-lg border-2'<'top  '<'flex border-b border-b-2   flex-wrap px-4 py-2 mo  bg-white sm:justify-between justify-center '<'w-auto'B>>><'relative  w-full mx-auto  overflow-x-auto shadow-md sm:rounded-b-lg'rt>><'bottom flex relative botton-1 py-4 rounded-b-xl w-full bg-white border-b justify-center items-center ' <'mx-auto mt-2 md:mx-0    custom-page-number' p>>",
    buttons: [
      {
        text: `<div class="flex w-10 showmuncenter">
                                <div class="">فلتر</div>
                                <svg class="fill-none stroke-[#008BF9] inline mr-1  stroke-[30px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
                                </div>
                                
                                `,
        className:
          " bg-[#E5E5E5] fillter relative px-4 py-1 duration-500    rounded-sm  border text-base text-[#0C2647]",
      },

      {
        extend: "excel",
        text: "pdf",
        className: " hidden excel1",
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
            <button class="block my-2 excelbut1 text-center">
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
          let excel = $(".excel1");
          let excelbut = $(".excelbut1");
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
          let selectedRows = $("table tbody tr").has("td input:checked");

          if (selectedRows.length != 0) {
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
                let selectedData = [];

                selectedRows.each(function () {
                  let rowData = table2.row($(this)).data();
                  selectedData.push(rowData);
                });

                selectedData.forEach(function (data) {
                  let index = table2
                    .rows()
                    .eq(0)
                    .filter(function (rowIdx) {
                      return table2.row(rowIdx).data() === data;
                    });

                  table2.row(index).remove();
                });

                table2.draw();
                $(".edit_delete").css("opacity", ".5");
                $(".edit_delete").prop("disabled", true);
              }
            });
          }
        },
      },
    ],
  });
  $(".pdfbut")
    .eq(0)
    .on("click", () => {
      const table = document.getElementById("myTable2");
      html2pdf().from(table).save();
    });
  let showmuncenter = $(".showmuncenter");
  showmuncenter.on("click", () => {
    removemenum("alterdiv");
  });

  $(".edit_delete").css("opacity", ".5");
  $(".edit_delete").prop("disabled", true);
  let sorting_disabled = $(".sorting_disabled input");
  let allinput = $("table  tbody tr td input");
  sorting_disabled.on("click", () => {
    allinput.prop("checked", sorting_disabled.is(":checked"));
    if (sorting_disabled.is(":checked")) {
      $(".edit_delete").css("opacity", "1");
      $(".edit_delete").prop("disabled", false);
    } else {
      $(".edit_delete").css("opacity", ".5");
      $(".edit_delete").prop("disabled", true);
    }
  });

  allinput.on("click", () => {
    let allinput1 = $("table  tbody tr td input:checked").toArray();
    if (allinput1.length == 0) {
      $(".edit_delete").css("opacity", ".5");
      $(".edit_delete").prop("disabled", true);
    } else {
      $(".edit_delete").css("opacity", "1");
      $(".edit_delete").prop("disabled", false);
    }
    if (allinput.length == allinput1.length) {
      sorting_disabled.prop("checked", true);
    } else {
      sorting_disabled.prop("checked", false);
    }
  });

  let mo = document.querySelector(".mo");
  let divq = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.innerText = "السندات";
  h1.className = "mt-2 text-[#0D0C22] text-center sm:mb-0 mb-3";
  divq.append(h1);
  mo.prepend(divq);
  $("#myTable2").on("draw.dt", function () {
    rplacebutton();
  });

  function edittable() {
    $("table").addClass(
      "w-full text-sm text-left text-gray-500 dark:text-gray-400"
    );
    $("table thead").addClass(
      "text-base text-[#0D0C22] font-medium   bg-white py-5 dark:bg-gray-700 dark:text-gray-400"
    );
    $("table thead tr th").addClass("px-6 py-5 text-center");
    $("table tbody").addClass(
      "w-full text-[#0D0C22] h-full  bg-white  dark:text-gray-400 "
    );
    $("table tbody tr").addClass(
      "bg-white border-b border-red-400 text-sm text-center font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    );
    $("table  tbody tr th").addClass(
      "px-6 py-4 font-medium text-gray-900 whitespace-nowrap   dark:text-white"
    );
  }

  let showmuncenter2 = document.querySelectorAll(".showmuncenter2");
  showmuncenter2.forEach((s) => {
    s.addEventListener("click", (event) => {
      removemenum("alterdiv2");
    });
  });
  edittable();
  rplacebutton();
  function rplacebutton() {
    var $paginate = $("#myTable2_paginate");
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

    console.log($customButton);
    $paginate.prepend($customButton);
    $paginate.append($nectcusButton);
  }
});

// table 3
$(document).ready(function (e) {
  let id = 0;
  var table = $("#myTable").DataTable({
    data: dataSet,
    select: true,
    columns: [
      { title: "التسلسل" },
      { title: " اتعاب القضية" },
      { title: "اخرى" },
      { title: "تحكيم" },
      { title: "تمثيل قضائي" },
      { title: "تنفيذ" },
      { title: "دراسة قضية" },
      { title: "صباغة عقود" },
      { title: "صياغة لائحة" },
      { title: "لائحة استئناف" },
      { title: "المجموع" },
    ],
    ordering: false,
    info: false,

    dom: "<'border rounded-lg border-2'<'top  '<'flex border-b border-b-2   flex-wrap px-4 py-2 mo  bg-white sm:justify-between justify-center '<'w-auto'B>>><'relative  w-full mx-auto  overflow-x-auto shadow-md sm:rounded-b-lg'rt>><'bottom flex relative botton-1 py-4 rounded-b-xl w-full bg-white border-b justify-center items-center ' <'mx-auto mt-2 md:mx-0    custom-page-number' p>>",
    buttons: [
      {
        text: `تحميل  
    <svg width="24" class="inline-block mr-1" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_80_16596)">
<path d="M19.35 10.54C19.0141 8.83772 18.0976 7.30486 16.7571 6.20325C15.4165 5.10163 13.7351 4.49961 12 4.5C9.11 4.5 6.6 6.14 5.35 8.54C3.88023 8.69883 2.52101 9.39521 1.53349 10.4953C0.545971 11.5954 -0.000171702 13.0217 4.04928e-08 14.5C4.04928e-08 17.81 2.69 20.5 6 20.5H19C21.76 20.5 24 18.26 24 15.5C24 12.86 21.95 10.72 19.35 10.54ZM19 18.5H6C3.79 18.5 2 16.71 2 14.5C2 12.45 3.53 10.74 5.56 10.53L6.63 10.42L7.13 9.47C7.58988 8.57478 8.28787 7.82382 9.14712 7.29979C10.0064 6.77577 10.9936 6.49902 12 6.5C14.62 6.5 16.88 8.36 17.39 10.93L17.69 12.43L19.22 12.54C19.9717 12.5906 20.6764 12.924 21.1922 13.4732C21.708 14.0224 21.9966 14.7466 22 15.5C22 17.15 20.65 18.5 19 18.5ZM13.45 10.5H10.55V13.5H8L12 17.5L16 13.5H13.45V10.5Z" fill="#8C7155"/>
</g>
<defs>
<clipPath id="clip0_80_16596">
<rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
    `,
        className:
          " bg-[#E5E5E5] px-4 py-1 duration-500 relative    rounded-sm  border text-base text-[#0C2647]",
      },

      {
        extend: "excel",
        text: "pdf",
        className: " hidden excel",
      },
      {
        text: `2022
        <svg width="14" height="9" class="inline-block mr-1" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1.5L7 7.5L1 1.5" stroke="#8C7155" stroke-width="2"/>
</svg>

   
    <div id="menumhid2" class="absolute hidden bg-white w-full text-center flex justify-center items-center  top-7 z-10 left-0"> 
    <div>
        <button class="inline-block mt-2 pdfbut  text-center">
            2019
        </button>
            <button class="block my-2 excelbut text-center">
            2018
        </button>
            <button class="block text-center">
            2019
        </button>
        </div>
    </div>
    `,
        className:
          " bg-[#E5E5E5] px-4 py-1 duration-500 relative    rounded-sm  border text-base text-[#0C2647]",
        action: function () {
          console.log(4);
          $("#menumhid2").toggleClass("hidden");
        },
      },
      {
        text: `تصدير
        <svg width="14" height="9" class="inline-block mr-1" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1.5L7 7.5L1 1.5" stroke="#8C7155" stroke-width="2"/>
</svg>

   
    <div id="menumhid1" class="absolute hidden bg-white w-full text-center flex justify-center items-center  top-7 z-10 left-0"> 
    <div>
        <button class="inline-block mt-2 pdfbut1  text-center">
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
          console.log(4);
          $("#menumhid1").toggleClass("hidden");
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
    ],
  });

  $(".pdfbut1").on("click", () => {
    const table = document.getElementById("myTable");
    html2pdf().from(table).save();
  });
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
  let mo = document.querySelectorAll(".mo")[1];
  let divq = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.innerText = "التقرير السنوي للدخل";
  h1.className = "mt-2 text-[#0D0C22] text-center sm:mb-0 mb-3";
  divq.append(h1);
  mo.prepend(divq);
  $("#myTable").on("draw.dt", function () {
    rplacebutton();
  });

  rplacebutton();
  function rplacebutton() {
    var $paginate = $("#myTable_paginate");
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
});