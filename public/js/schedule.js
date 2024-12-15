$(document).ready(function (e) {
  let id = 0;
  var table = $("#myTable").DataTable({
    data: dataSet,
    columns: [
      { title: "الوصف", className: "text-center" },
      { title: "الوقت", className: "text-center" },
      { title: " التاريخ هجري", className: "text-center" },
      { title: "التاريخ ميلادي", className: "text-center" },
    ],

    ordering: false,
    info: false,
    buttons: [
      {
        text: `<div class="flex w-10 showmuncenter2">
                                <div class="">فلتر</div>
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.75 3.5C4.0682 3.5 3.5 4.0682 3.5 4.75V6.29492C3.5 7.44325 4.02774 8.52942 4.92969 9.24023L10 13.2354V20.75C10.0001 20.8877 10.0381 21.0228 10.1098 21.1404C10.1816 21.2579 10.2843 21.3535 10.4067 21.4165C10.5292 21.4796 10.6667 21.5077 10.804 21.4978C10.9414 21.4879 11.0734 21.4403 11.1855 21.3604L14.6855 18.8604C14.7828 18.791 14.862 18.6994 14.9167 18.5933C14.9714 18.4871 15 18.3694 15 18.25V13.2344L20.0703 9.24023C20.9723 8.52942 21.5 7.44325 21.5 6.29492V4.75C21.5 4.0682 20.9318 3.5 20.25 3.5H4.75ZM5 5H20V6.29492C20 6.9846 19.6846 7.63434 19.1426 8.06152L14.1436 12H10.8564L5.85742 8.06152C5.31537 7.63434 5 6.9846 5 6.29492V5ZM11.5 13.5H13.5V17.8643L11.5 19.293V13.5Z" fill="#EEBF48"/>
</svg>
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
        text: `تصدير<svg class="inline-block" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 9.5L12 15.5L6 9.5" stroke="#D4AF36" stroke-width="2"/>
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
          "edit_delete delete  not_active px-4 py-1 duration-500   rounded-sm  border text-base",
        action: function () {
          var selectedRows = table2.rows(".selected");
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
              var selectedRows = table2.rows(".selected").data();

              dataSet3 = dataSet3.filter((d) => d != selectedRows[0]);
              table2.clear().rows.add(dataSet3).draw();
              $(".edit_delete").css("opacity", ".5");
              $(".edit_delete").prop("disabled", true);
            }
          });
        },
      },
    ],
    dom: "<'border rounded-lg border-2'<'top  '<'flex border-b border-b-2   flex-wrap px-4 py-2 mo  bg-white sm:justify-between justify-center '<'w-auto'B>>><'relative  w-full mx-auto  overflow-x-auto shadow-md sm:rounded-b-lg'rt>><'bottom flex relative botton-1 py-4 rounded-b-xl w-full bg-white border-b justify-center items-center ' <'mx-auto mt-2 md:mx-0    custom-page-number' p>>",

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

   $(".pdfbut").on("click", () => {
     const table = document.getElementById("myTable");
     html2pdf().from(table).save();
   });
  if (dataSet.length === 0) {
    var tableHead = $("#myTable thead");
    tableHead.remove();
  }

  $(".dataTables_empty").html(`
        <div class="w-full bg-white h-screen flex justify-center items-center divvailable">
            <div >
                <div class="flex justify-center">
           <svg width="296" height="296" viewBox="0 0 296 296" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="148" cy="148" r="148" fill="#2E3031" fill-opacity="0.1"/>
<circle cx="148" cy="148" r="112" fill="#8C7155" fill-opacity="0.39"/>
<path d="M201.667 78.9998H194V63.6665H178.667V78.9998H117.333V63.6665H102V78.9998H94.3333C85.9 78.9998 79 85.8998 79 94.3332V201.667C79 210.1 85.9 217 94.3333 217H201.667C210.1 217 217 210.1 217 201.667V94.3332C217 85.8998 210.1 78.9998 201.667 78.9998ZM201.667 201.667H94.3333V125H201.667V201.667ZM94.3333 109.667V94.3332H201.667V109.667H94.3333ZM119.097 181.81L127.223 189.936L145.93 171.23L164.637 189.936L172.763 181.81L154.057 163.103L172.763 144.396L164.637 136.27L145.93 154.977L127.223 136.27L119.097 144.396L137.803 163.103L119.097 181.81Z" fill="#8C7155"/>
</svg>


                </div>
                <h1 class=" text-[#000000] text-2xl text-center mt-2">لا توجد مواعيد للفترة من 2023-03-12 الى 2023-03-18</h1>
            </div>
        </div>`);
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
  h1.innerText = "جدول المواعيد";
  h1.className = "mt-2 text-[#0D0C22] text-center sm:mb-0 mb-3";
  divq.append(h1);
  mo.prepend(divq);
  $("#myTable").on("draw.dt", function () {
    rplacebutton();
    trch = document.querySelectorAll("#myTable tbody .odd");
  });
  
  // let showmuncenter2 = $(".showmuncenter2");
  // showmuncenter2.on("click", () => {
  //   removemenum("alterdiv2");
  // });


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
