$(document).ready(function (e) {
  let id = 0;
  var table = $("#myTable").DataTable({
    data: dataSet,
    columns: [
      {
        title: '<input type="checkbox" id="select-all" title="Select All">',
        orderable: false,
        className: "dt-body-center",
        render: function (data, type, full, meta) {
          return '<input type="checkbox" class="row-checkbox" title="Select Row">';
        },
      },
      { title: " رقم الفرع" },
      { title: "اسم الفرع" },
      { title: "عنوان الفرع" },
      { title: "الموظف المسؤول" },
      { title: "عدد الموظفين" },
      { title: "الاجراء" },
    ],
    ordering: false,
    info: false,

    dom: "<'border rounded-lg border-2'<'top  '<'flex border-b border-b-2   flex-wrap px-4 py-2 mo  bg-white sm:justify-between justify-center '<'w-auto'B>>><'relative  w-full mx-auto  overflow-x-auto shadow-md sm:rounded-b-lg'rt>><'bottom flex relative botton-1 py-4 rounded-b-xl w-full bg-white border-b justify-center items-center ' <'mx-auto mt-2 md:mx-0    custom-page-number' p>>",
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
          "edit_delete delete  text-red-400 not_active px-4 py-1 duration-500   rounded-sm  border text-base",
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

    createdRow: function (row, data, dataIndex) {
      $("td:eq(6)", row).html(
        `       <div class="flex justify-between">
                                <button class="block relative duration-500 edit"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="4" fill="#F3F3F3"/>
                        <path d="M20.0142 6.72021C16.3444 6.72021 13.3476 9.717 13.3476 13.3869C13.3476 17.0568 16.3444 20.0535 20.0142 20.0535C22.6168 20.0535 25.1265 18.4909 27.0754 17.0184C29.0243 15.5459 30.4088 14.0718 30.4088 14.0718C30.5831 13.8863 30.6801 13.6414 30.6801 13.3869C30.6801 13.1324 30.5831 12.8874 30.4088 12.702C30.4088 12.702 29.0243 11.2279 27.0754 9.75537C25.1265 8.28286 22.6168 6.72021 20.0142 6.72021ZM20.0142 8.72021C21.745 8.72021 24.0686 9.9909 25.8697 11.3517C27.2173 12.3699 27.7289 12.9389 28.1757 13.3869C27.7289 13.8348 27.2173 14.4039 25.8697 15.422C24.0686 16.7829 21.745 18.0535 20.0142 18.0535C17.4255 18.0535 15.3476 15.9757 15.3476 13.3869C15.3476 10.7981 17.4255 8.72021 20.0142 8.72021ZM31.6653 19.3335C31.4826 19.3342 31.2979 19.3503 31.1119 19.3843C30.5226 19.4903 29.9596 19.7976 29.4843 20.2736L28.5859 21.172L32.828 25.4142L33.7265 24.5158C34.2025 24.0405 34.5098 23.4775 34.6158 22.8882C34.6491 22.7022 34.6646 22.5175 34.6653 22.3348C34.6673 21.5388 34.3604 20.7864 33.7864 20.2137C33.2137 19.6404 32.4613 19.3322 31.6653 19.3335ZM27.1718 22.5861L21.6184 28.1395C21.3804 28.3775 21.2052 28.6743 21.1119 28.9963L20.065 32.6499C20.017 32.7766 19.9953 32.9104 19.9999 33.0444C20.0086 33.2864 20.1036 33.5258 20.289 33.7111C20.4736 33.8958 20.7117 33.9908 20.953 34.0002C21.087 34.0048 21.2228 33.9837 21.3502 33.9351L25.0038 32.8882C25.3258 32.7949 25.6206 32.6203 25.8593 32.3817L31.414 26.8283L27.1718 22.5861ZM12.3333 22.7202C10.6793 22.7202 9.33325 24.0662 9.33325 25.7202V26.5197C9.33325 30.085 13.3545 32.9315 18.6991 33.3335C18.6885 33.2528 18.6712 33.1739 18.6679 33.0926C18.6579 32.7986 18.7008 32.5131 18.7955 32.2397L19.0494 31.3504C14.2621 31.0698 11.3333 28.717 11.3333 26.5197V25.7202C11.3333 25.1689 11.7819 24.7202 12.3333 24.7202H23.151L25.151 22.7202H12.3333Z" fill="#1AC5BD"/>
                        </svg>

                        </button>
                                <button onclick="window.location='./branchesdetails.html'" class="block relative duration-500 details">
                              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="4" fill="#F3F3F3"/>
<path d="M10.9987 8C8.9767 8 7.33203 9.64533 7.33203 11.6667V28.3333C7.33203 30.3547 8.9767 32 10.9987 32H20.0365C19.6405 31.382 19.3185 30.7114 19.0885 29.9987H10.9987C10.08 29.9987 9.33203 29.2514 9.33203 28.332V14.6654H30.6654V19.332C31.388 19.634 32.0574 20.0357 32.6654 20.5117V11.6667C32.6654 9.64533 31.0207 8 28.9987 8H10.9987ZM12.9987 17.3333C12.8662 17.3315 12.7346 17.3559 12.6117 17.4054C12.4887 17.4548 12.3768 17.5281 12.2824 17.6212C12.188 17.7142 12.1131 17.8251 12.0619 17.9473C12.0108 18.0696 11.9845 18.2008 11.9845 18.3333C11.9845 18.4659 12.0108 18.5971 12.0619 18.7193C12.1131 18.8416 12.188 18.9524 12.2824 19.0455C12.3768 19.1385 12.4887 19.2119 12.6117 19.2613C12.7346 19.3107 12.8662 19.3352 12.9987 19.3333H14.332C14.4645 19.3352 14.5961 19.3107 14.7191 19.2613C14.842 19.2119 14.954 19.1385 15.0483 19.0455C15.1427 18.9524 15.2176 18.8416 15.2688 18.7193C15.3199 18.5971 15.3463 18.4659 15.3463 18.3333C15.3463 18.2008 15.3199 18.0696 15.2688 17.9473C15.2176 17.8251 15.1427 17.7142 15.0483 17.6212C14.954 17.5281 14.842 17.4548 14.7191 17.4054C14.5961 17.3559 14.4645 17.3315 14.332 17.3333H12.9987ZM18.332 17.3333C17.78 17.3333 17.332 17.7807 17.332 18.3333C17.332 18.886 17.78 19.3333 18.332 19.3333H23.9974C25.0241 18.9047 26.15 18.6667 27.332 18.6667C27.5334 18.6667 27.7304 18.6833 27.9284 18.6966C27.9731 18.5839 27.9987 18.462 27.9987 18.3333C27.9987 17.7807 27.5507 17.3333 26.9987 17.3333H18.332ZM27.332 20C23.282 20 19.9987 23.2833 19.9987 27.3333C19.9987 31.3833 23.282 34.6667 27.332 34.6667C31.382 34.6667 34.6654 31.3833 34.6654 27.3333C34.6654 23.2833 31.382 20 27.332 20ZM12.9987 21.3333C12.8662 21.3315 12.7346 21.3559 12.6117 21.4054C12.4887 21.4548 12.3768 21.5281 12.2824 21.6212C12.188 21.7142 12.1131 21.8251 12.0619 21.9473C12.0108 22.0696 11.9845 22.2008 11.9845 22.3333C11.9845 22.4659 12.0108 22.5971 12.0619 22.7193C12.1131 22.8416 12.188 22.9524 12.2824 23.0455C12.3768 23.1385 12.4887 23.2119 12.6117 23.2613C12.7346 23.3107 12.8662 23.3352 12.9987 23.3333H14.332C14.4645 23.3352 14.5961 23.3107 14.7191 23.2613C14.842 23.2119 14.954 23.1385 15.0483 23.0455C15.1427 22.9524 15.2176 22.8416 15.2688 22.7193C15.3199 22.5971 15.3463 22.4659 15.3463 22.3333C15.3463 22.2008 15.3199 22.0696 15.2688 21.9473C15.2176 21.8251 15.1427 21.7142 15.0483 21.6212C14.954 21.5281 14.842 21.4548 14.7191 21.4054C14.5961 21.3559 14.4645 21.3315 14.332 21.3333H12.9987ZM18.332 21.3333C17.7794 21.3333 17.332 21.7807 17.332 22.3333C17.332 22.886 17.78 23.3333 18.332 23.3333H19.6484C20.0318 22.598 20.5179 21.926 21.0872 21.3333H18.332ZM27.332 24C30.7867 24 32.5029 26.8754 32.5742 26.9974C32.6949 27.2054 32.6949 27.4613 32.5742 27.6693C32.5029 27.7919 30.7867 30.6667 27.332 30.6667C23.8774 30.6667 22.1612 27.7913 22.0898 27.6693C21.9692 27.4613 21.9692 27.2054 22.0898 26.9974C22.1612 26.8754 23.8774 24 27.332 24ZM12.9987 25.3333C12.8662 25.3315 12.7346 25.3559 12.6117 25.4054C12.4887 25.4548 12.3768 25.5281 12.2824 25.6212C12.188 25.7142 12.1131 25.8251 12.0619 25.9473C12.0108 26.0696 11.9845 26.2008 11.9845 26.3333C11.9845 26.4659 12.0108 26.5971 12.0619 26.7193C12.1131 26.8416 12.188 26.9524 12.2824 27.0455C12.3768 27.1385 12.4887 27.2119 12.6117 27.2613C12.7346 27.3107 12.8662 27.3352 12.9987 27.3333H14.332C14.4645 27.3352 14.5961 27.3107 14.7191 27.2613C14.842 27.2119 14.954 27.1385 15.0483 27.0455C15.1427 26.9524 15.2176 26.8416 15.2688 26.7193C15.3199 26.5971 15.3463 26.4659 15.3463 26.3333C15.3463 26.2008 15.3199 26.0696 15.2688 25.9473C15.2176 25.8251 15.1427 25.7142 15.0483 25.6212C14.954 25.5281 14.842 25.4548 14.7191 25.4054C14.5961 25.3559 14.4645 25.3315 14.332 25.3333H12.9987ZM18.332 25.3333C17.7794 25.3333 17.332 25.7807 17.332 26.3333C17.332 26.886 17.78 27.3333 18.332 27.3333H18.6654C18.6654 26.644 18.7543 25.9767 18.9062 25.3333H18.332ZM27.332 25.3333C26.2274 25.3333 25.332 26.2287 25.332 27.3333C25.332 28.438 26.2274 29.3333 27.332 29.3333C28.4367 29.3333 29.332 28.438 29.332 27.3333C29.332 26.2287 28.4367 25.3333 27.332 25.3333Z" fill="#468BE3"/>
</svg>

                            </button>
                                           <button class="block relative duration-500 show"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="4" fill="#F3F3F3"/>
<path d="M11.6667 8C9.64467 8 8 9.64533 8 11.6667V12.6667V28.3333C8 30.3587 9.64133 32 11.6667 32H28.3333C30.3587 32 32 30.3587 32 28.3333V12.6667V11.6667C32 9.64533 30.3553 8 28.3333 8H11.6667ZM10 12.6667H30V28.3333C30 29.254 29.254 30 28.3333 30H11.6667C10.746 30 10 29.254 10 28.3333V12.6667ZM14.9896 15.3229C14.7906 15.323 14.5961 15.3824 14.431 15.4936C14.266 15.6048 14.1379 15.7627 14.0631 15.9471C13.9883 16.1315 13.9702 16.3341 14.0111 16.5288C14.0521 16.7236 14.1502 16.9017 14.293 17.0404L16.3424 19.0898C14.8983 20.0183 14.1507 21.2161 14.1016 21.2982C13.9662 21.5268 13.9662 21.8091 14.1016 22.0378C14.1816 22.1711 16.1133 25.3333 20 25.3333C20.8273 25.3333 21.5545 25.1794 22.2044 24.9518L24.293 27.0404C24.3851 27.1363 24.4955 27.213 24.6176 27.2657C24.7397 27.3185 24.8712 27.3464 25.0042 27.3478C25.1372 27.3491 25.2692 27.3239 25.3924 27.2736C25.5156 27.2233 25.6275 27.149 25.7216 27.0549C25.8156 26.9608 25.89 26.8489 25.9403 26.7257C25.9906 26.6026 26.0158 26.4706 26.0144 26.3375C26.0131 26.2045 25.9852 26.0731 25.9324 25.9509C25.8796 25.8288 25.803 25.7184 25.707 25.6263L15.707 15.6263C15.6138 15.5303 15.5023 15.454 15.3791 15.4019C15.2558 15.3498 15.1234 15.3229 14.9896 15.3229ZM20 18C19.9887 18 19.9781 18.0013 19.9674 18.0013L25.0612 23.0951C25.5899 22.5397 25.8691 22.0858 25.8984 22.0365C26.0338 21.8078 26.0338 21.5255 25.8984 21.2969C25.8184 21.1629 23.8867 18 20 18ZM18.1628 20.9102L20.7565 23.5039C20.5225 23.6024 20.2705 23.6667 20 23.6667C18.8953 23.6667 18 22.7713 18 21.6667C18 21.3962 18.0642 21.1441 18.1628 20.9102Z" fill="#FB764C"/>
</svg>


                        </button>
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

  let trch = document.querySelectorAll("#myTable tbody .odd");

  $(".edit_delete").prop("disabled", true);
  clicktr();
  function clicktr() {
    $("table tbody").on("click", "tr", function (even) {
      $(this).toggleClass("selected");
      $("table tbody tr").not(this).removeClass("selected ");
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
      "bg-white border-b border-red-400 text-right text-sm font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    );
    $("#myTable  tbody tr th").addClass(
      "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    );
  }
  let mo = document.querySelector(".mo");
  console.log(mo.children[0]);
  let divq = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.innerText = "طلبات القضايا";
  h1.className = "mt-2 text-[#0D0C22] text-center sm:mb-0 mb-3";
  divq.append(h1);
  mo.prepend(divq);
  $("#myTable").on("draw.dt", function () {
    rplacebutton();
    trch = document.querySelectorAll("#myTable tbody .odd");
    console.log(trch);
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

  console.log($(".btn-secondary").addClass("relative"));
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

// select button

let chooseserves = document.getElementById("chooseserves");
chooseserves.addEventListener("click", chooseser);

document.querySelectorAll(".select").forEach((s) => {
  s.addEventListener("click", (even) => {
    chooseser();
    document.getElementById("selectedchose").innerHTML = even.target.innerHTML;
  });
});

function chooseser() {
  let heght = document.getElementById("heght");
  if (!heght.classList.contains("hidden")) {
    heght.classList.add("hieght2");
    heght.classList.remove("hieght1");
    setTimeout(() => {
      heght.classList.add("hidden");
      heght.classList.add("hieght1");
      heght.classList.remove("hieght2");
    }, 500);
  } else heght.classList.remove("hidden");
}