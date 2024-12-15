$(document).ready(function (e) {
  let id = 0;
  var table = $("#myTable").DataTable({
    data: dataSet,
    columns: [
      {
        title: '<input type="checkbox" id="select-all" title="Select All">',
        orderable: false,
        className: "md:w-[3%]",
        render: function (data, type, full, meta) {
          return '<input type="checkbox" class="row-checkbox" title="Select Row">';
        },
      },
      { title: "#", className: "md:w-[5%] text-right" },
      { title: " الاسم", className: "text-right md:w-[10%]" },
      { title: "الدور الوظيفي", className: "md:w-[17%]    text-center" },
      { title: "الاجراء", className: "md:w-[30%] text-right" },
    ],

    ordering: false,
    info: false,

    dom: "<'border rounded-lg border-2'<'top  '<'flex border-b border-b-2   flex-wrap px-4 py-2 mo  bg-white sm:justify-between justify-center '<'w-auto'l>>><'relative  w-full mx-auto  overflow-x-auto shadow-md sm:rounded-b-lg'rt>><'bottom flex relative botton-1 py-4 rounded-b-xl w-full bg-white border-b justify-center items-center ' <'mx-auto mt-2 md:mx-0    custom-page-number' p>>",

    createdRow: function (row, data, dataIndex) {
      $("td:eq(4)", row).html(
        `       <div class="flex justify-between">
                                <button class="block relative duration-500 delete">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="4" fill="#F3F3F3"/>
                            <path d="M20.0001 6.6665C17.8028 6.6665 16.0001 8.46926 16.0001 10.6665H11.8308C11.7715 10.6563 11.7113 10.6515 11.6511 10.6522C11.6027 10.6534 11.5544 10.6582 11.5066 10.6665H9.00008C8.86757 10.6646 8.73601 10.6891 8.61304 10.7385C8.49007 10.7879 8.37815 10.8613 8.28378 10.9543C8.18941 11.0474 8.11447 11.1583 8.06333 11.2805C8.01218 11.4028 7.98584 11.534 7.98584 11.6665C7.98584 11.799 8.01218 11.9302 8.06333 12.0525C8.11447 12.1747 8.18941 12.2856 8.28378 12.3787C8.37815 12.4717 8.49007 12.5451 8.61304 12.5945C8.73601 12.6439 8.86757 12.6684 9.00008 12.6665H10.6667V29.6665C10.6667 31.6797 12.3202 33.3332 14.3334 33.3332H25.6667C27.6799 33.3332 29.3334 31.6797 29.3334 29.6665V12.6665H31.0001C31.1326 12.6684 31.2642 12.6439 31.3871 12.5945C31.5101 12.5451 31.622 12.4717 31.7164 12.3787C31.8108 12.2856 31.8857 12.1747 31.9368 12.0525C31.988 11.9302 32.0143 11.799 32.0143 11.6665C32.0143 11.534 31.988 11.4028 31.9368 11.2805C31.8857 11.1583 31.8108 11.0474 31.7164 10.9543C31.622 10.8613 31.5101 10.7879 31.3871 10.7385C31.2642 10.6891 31.1326 10.6646 31.0001 10.6665H28.4975C28.3901 10.6489 28.2806 10.6489 28.1733 10.6665H24.0001C24.0001 8.46926 22.1973 6.6665 20.0001 6.6665ZM20.0001 8.6665C21.1162 8.6665 22.0001 9.55041 22.0001 10.6665H18.0001C18.0001 9.55041 18.884 8.6665 20.0001 8.6665ZM12.6667 12.6665H27.3334V29.6665C27.3334 30.5987 26.5989 31.3332 25.6667 31.3332H14.3334C13.4013 31.3332 12.6667 30.5987 12.6667 29.6665V12.6665ZM17.6511 15.9855C17.3861 15.9897 17.1336 16.0988 16.9491 16.289C16.7645 16.4792 16.6629 16.7348 16.6667 16.9998V26.9998C16.6649 27.1323 16.6894 27.2639 16.7388 27.3869C16.7882 27.5098 16.8615 27.6218 16.9546 27.7161C17.0476 27.8105 17.1585 27.8854 17.2808 27.9366C17.403 27.9877 17.5342 28.0141 17.6667 28.0141C17.7993 28.0141 17.9305 27.9877 18.0527 27.9366C18.175 27.8854 18.2859 27.8105 18.3789 27.7161C18.472 27.6218 18.5453 27.5098 18.5947 27.3869C18.6441 27.2639 18.6686 27.1323 18.6667 26.9998V16.9998C18.6687 16.866 18.6437 16.7331 18.5933 16.6091C18.5429 16.4851 18.4682 16.3725 18.3735 16.2779C18.2788 16.1833 18.166 16.1087 18.0419 16.0584C17.9179 16.0082 17.785 15.9834 17.6511 15.9855ZM22.3178 15.9855C22.0528 15.9897 21.8003 16.0988 21.6157 16.289C21.4311 16.4792 21.3296 16.7348 21.3334 16.9998V26.9998C21.3315 27.1323 21.356 27.2639 21.4054 27.3869C21.4549 27.5098 21.5282 27.6218 21.6213 27.7161C21.7143 27.8105 21.8252 27.8854 21.9474 27.9366C22.0697 27.9877 22.2009 28.0141 22.3334 28.0141C22.4659 28.0141 22.5971 27.9877 22.7194 27.9366C22.8417 27.8854 22.9525 27.8105 23.0456 27.7161C23.1386 27.6218 23.212 27.5098 23.2614 27.3869C23.3108 27.2639 23.3353 27.1323 23.3334 26.9998V16.9998C23.3353 16.866 23.3104 16.7331 23.26 16.6091C23.2096 16.4851 23.1349 16.3725 23.0401 16.2779C22.9454 16.1833 22.8327 16.1087 22.7086 16.0584C22.5845 16.0082 22.4516 15.9834 22.3178 15.9855Z" fill="#F21B1B"/>
                            </svg>
                            </button>
                            </div>`
      );
    },
  });

  if (dataSet.length === 0) {
    var tableHead = $("#myTable thead");
    tableHead.remove();
  }
  let sorting_disabled = $(".sorting_disabled input");
  let allinput = $("table  tbody tr td input");
  console.log(allinput);
  sorting_disabled.on("click", () => {
    allinput.prop("checked", sorting_disabled.is(":checked"));
  });

  allinput.on("click", () => {
    let allinput1 = $("table  tbody tr td input:checked").toArray();
    if (allinput.length == allinput1.length) {
      sorting_disabled.prop("checked", true);
    } else {
      sorting_disabled.prop("checked", false);
    }
  });

  $(".dataTables_empty").html(`
        <div class="w-full bg-white h-screen flex justify-center items-center divvailable">
            <div >
                <div>
                    <svg width="296" height="296" viewBox="0 0 296 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="148" cy="148" r="148" fill="#2E3031" fill-opacity="0.1" />
                        <circle cx="148" cy="148" r="112" fill="#8C7155" fill-opacity="0.39" />
                        <path
                            d="M125.5 91C124.307 91.0001 123.162 91.4743 122.318 92.3182C121.474 93.162 121 94.3066 121 95.5V118H110.5C98.1265 118 88 128.126 88 140.5V182.5C88 194.874 98.1265 205 110.5 205H185.5C197.874 205 208 194.874 208 182.5V140.5C208 128.126 197.874 118 185.5 118H175V95.5C175 94.3066 174.526 93.162 173.682 92.3182C172.838 91.4743 171.693 91.0001 170.5 91H125.5ZM130 100H166V118H130V100ZM110.5 127H125.5H170.5H185.5C193.01 127 199 132.99 199 140.5V182.5C199 190.01 193.01 196 185.5 196H110.5C102.99 196 97 190.01 97 182.5V140.5C97 132.99 102.99 127 110.5 127ZM148 136C144.817 136 141.765 137.264 139.515 139.515C137.264 141.765 136 144.817 136 148C136 151.183 137.264 154.235 139.515 156.485C141.765 158.736 144.817 160 148 160C151.183 160 154.235 158.736 156.485 156.485C158.736 154.235 160 151.183 160 148C160 144.817 158.736 141.765 156.485 139.515C154.235 137.264 151.183 136 148 136ZM131.342 166C128.942 166 127 167.942 127 170.342V174.256C127 180.925 135.511 187 148 187C160.489 187 169 180.925 169 174.256V170.342C169 167.942 167.058 166 164.658 166H131.342Z"
                            fill="#8C7155" />
                    </svg>

                </div>
                <h1 class=" text-[#000000] text-2xl text-center mt-2">لا يوجد محاميين</h1>
            </div>
        </div>`);
  let dataTables_length = $(".dataTables_length");
  let select = dataTables_length.find("select");
  select.addClass("mr-3  kkk ");
  $(dataTables_length).addClass("space-x-3");
  dataTables_length[0].children[0].style.display = "none";
  dataTables_length[0].append("المدخلات");
  dataTables_length[0].append(select[0]);
  let trch = document.querySelectorAll("#myTable tbody .odd");
  $(".edit_delete").prop("disabled", true);

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
      "bg-white border-b border-red-400 text-right text-sm font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    );
    $("#myTable  tbody tr th").addClass(
      "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    );
  }
  let mo = document.querySelector(".mo");
  let divq = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.innerText = "طلبات القضايا";
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
