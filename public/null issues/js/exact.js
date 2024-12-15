$(document).ready(function (e) {
  let id = 0;
  var table = $("#myTable").DataTable({
    data: dataSet,
    select: true,
    columns: [
      { title: "#" },
      { title: " رقم المعاملة " },
      { title: "تاريخها", className: "w-[10%]" },
      {
        title: "الموضوع",
        className: "w-[40%]",
      },
      { title: "المعاملة" },
      { title: "الجلسة" },
    ],
    ordering: false,
    info: false,
    dom: "<'border rounded-lg border-2'<'top  '<'flex border-b border-b-2   flex-wrap px-4 py-2 mo  bg-white sm:justify-between justify-center '<'w-auto'l>>><'relative   w-full mx-auto  overflow-x-auto shadow-md sm:rounded-t-lg'rt>><'bottom flex relative botton-1 py-4 rounded-b-xl w-full bg-white border-b justify-center items-center ' <'mx-auto mt-2 md:mx-0    custom-page-number' p>>",
    createdRow: function (row, data, dataIndex) {
      $("td:eq(4)", row).html(
        `       <div>
                                <button type="button"
                                   onclick="window.location='transaction.html'"
                                    class="  w-full bg-[#8C7155] border text-white  hover:bg-black duration-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-3  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    المعاملة</button>

                            </div>`
      );
      $("td:eq(5)", row).html(
        `       <div>
                                <button type="button"
                                    class="w-full  but  border-[#8C7155] border text-[#8C7155]  hover:bg-black duration-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-3  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    الجلسة</button>

                            </div>`
      );
    },
  });
  $(".but").on("click",()=>{
       removemenum("alterdiv2");
  });

  function edittable() {
    $("#myTable").addClass(
      "w-full text-sm text-left text-gray-500 dark:text-gray-400"
    );
    $("#myTable thead").addClass(
      "text-base text-[#0D0C22] font-medium   bg-white py-5 dark:bg-gray-700 dark:text-gray-400 text-right"
    );
    $("#myTable thead tr th").addClass("px-6 py-5 text-center");
    $("#myTable tbody").addClass(
      "w-full text-[#0D0C22] h-full  bg-white  dark:text-gray-400 "
    );
    $("#myTable tbody tr").addClass(
      "bg-white border-b border-red-400 text-right text-sm text-center font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    );
    $("#myTable  tbody tr th").addClass(
      "px-6 py-4 font-medium text-gray-900 whitespace-nowrap   dark:text-white"
    );
  }
  edittable();

  let mo = document.querySelector(".mo");
  console.log(mo.children[0]);
  let divq = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.innerText = "ارشيف القضية";
  h1.className = "mt-2 text-[#0D0C22] text-center sm:mb-0 mb-3";
  divq.append(h1);
  mo.prepend(divq);
  $("#myTable").on("draw.dt", function () {
    rplacebutton();
    trch = document.querySelectorAll("#myTable tbody .odd");
    console.log(trch);
    edittable();
  });

  let dataTables_length = $(".dataTables_length");
  let select = dataTables_length.find("select");
  select.addClass("mr-3  kkk ");
  $(dataTables_length).addClass("space-x-3");
  $(dataTables_length).children().css("display", "none");
  $(dataTables_length).append("المدخلات");

  $(dataTables_length).append(select);

  console.log(select);
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
});

$(document).ready(function (e) {
  var table = $("#myTable2").DataTable({
    data: dataset2,
    columns: [
      {
        title: " رقم الوكالة",
        className: "text-center border-l-2  border-[#D9D9D9]",
      },
      { title: "الملاحظات", className: "text-center" },
      { title: "الاجراء", className: "text-center" },
    ],
    language: {
      search: "",
      searchPlaceholder: "بحث...",
    },

    ordering: false,
    info: false,
    dom: "<''<'top flex sm:justify-between  text-center mb-3 mx-5 flex-wrap sm:flex-nowrap mt-10' <'div1'><'div2'> <'block mt-3'l>><'kk  m-5 '> <'relative  w-full mx-auto  overflow-x-auto  w-full 'rt>><'bottom flex relative botton-1 py-4 rounded-b-xl w-full bg-white border-b mx-4 ' <'ml-auto mt-2     custom-page-number' p>>",
  });
  
  function edittable() {
    $("#myTable2").addClass(
      "w-full text-sm text-left text-gray-500 dark:text-gray-400"
    );
    $("#myTable2 thead").addClass(
      "text-base text-[#0D0C22] font-medium   bg-white py-5 dark:bg-gray-700 dark:text-gray-400 text-right"
    );
    $("#myTable2 thead tr th").addClass("px-6 py-5 text-center");
    $("#myTable2 tbody").addClass(
      "w-full text-[#0D0C22] h-full  bg-white  dark:text-gray-400 "
    );
    $("#myTable2 tbody tr").addClass(
      "bg-white border-b-2 border-[#D9D9D9] text-right text-sm text-center font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    );
    $("#myTable2  tbody tr th").addClass(
      "px-6 py-4 font-medium text-gray-900 whitespace-nowrap   dark:text-white"
    );
  }
  edittable();


  $("#myTable2_wrapper").css("overflow", "hidden");
  let trch = document.querySelectorAll("#myTable tbody .odd");
  $(".edit_delete").prop("disabled", true);

  $("#myTable2").on("draw.dt", function () {
    rplacebutton();
    trch = document.querySelectorAll("#myTable tbody .odd");
  });
  let dataTables_length = $(".dataTables_length");
  dataTables_length.css("float", "none");

  let select = dataTables_length.eq(1).find("select");
  select.addClass("mr-3  kkk ");
  dataTables_length.eq(1).addClass("space-x-3");
  dataTables_length.eq(1).children().css("display", "none");
  dataTables_length.eq(1).append("المدخلات");
  
  $(".kk").html(`
            <div class="text-right">
                                    <h3 
                                        class="text-lg md:cursor-default mb-1 cursor-pointer font-medium text-gray-500 dark:text-gray-400">
                                        الموضوع:</h3>

                                    <a
                                        class="text-[#0D0C22] transition-colors text-right  duration-200 dark:text-gray-200  dark:hover:text-blue-400   ">قضية تعدي المدعي عليه على بيتي.</a>
                                </div>
  `);
  $(".div1").html(`
            <div class="text-right">
                                    <h3 
                                        class="text-lg md:cursor-default mb-1 cursor-pointer font-medium text-gray-500 dark:text-gray-400">
                                        رقم المستعرض:</h3>

                                    <a
                                        class="text-[#0D0C22] transition-colors text-right  duration-200 dark:text-gray-200  dark:hover:text-blue-400   ">44/3</a>
                                </div>
  `);
  $(".div2").html(`
            <div class="text-right">
                                    <h3 
                                        class="text-lg mb-1 md:cursor-default cursor-pointer font-medium text-gray-500 dark:text-gray-400">
تاريخها:</h3>

                                    <a
                                        class="text-[#0D0C22] transition-colors  duration-200 dark:text-gray-200  dark:hover:text-blue-400   ">9 Dec 2023</a>
                                </div>
  `);
  dataTables_length.eq(1).append(select);
  let divsearch2 = $(".divsearch2");
  divsearch2.append(` <div
                                            class="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="11" cy="11" r="7" stroke="#787878" stroke-width="2" />
                                                <path
                                                    d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11"
                                                    stroke="#787878" stroke-width="2" stroke-linecap="round" />
                                                <path d="M20 20L17 17" stroke="#787878" stroke-width="2"
                                                    stroke-linecap="round" />
                                            </svg>
                                        </div>`);
  rplacebutton();
  function rplacebutton() {
    let $paginate = $("#myTable2_paginate");
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
});
