var dataSet = [
  [
    1,
    "طلب تعويض من المدعى عليه نتيجة",
    "اداري",
    " <span>علي فارس</span>",
    "مدعي",
    "خالد علي",
    "مدعي عليه",
    [
      "./images/Ellipse 6.png",
      "./images/Ellipse 6.png",

      "./images/Ellipse 7.png",
      "./images/Ellipse 8.png",
    ],
    "تفاصيل القضية",
  ],
];


dataSet.forEach((d) => {
  d[2] = changecolor(d[2]);
  d[d.length - 1] = detailsreqa(d[d.length - 1]);
if (!(window.innerWidth <= 900)) {
  d[d.length - 2] = writeimage(d[d.length - 2]);
}

  
});
function writeimage(data){
    let str1 = `
    <div>
    <div class="  flex  -space-x-4">`;
    data.forEach((i,index)=>{
      if(index!=0){

        str1 += `
        <div class="" > <img class="w-8 h-8 rounded-full dark:border-gray-800 " src="${i}" alt=""> </div>`;
      }
      else
      
        str1 += `
        <div class=" hidden" > <img class="w-8 h-8 rounded-full dark:border-gray-800 " src="${i}" alt=""> </div>`;
    })
    str1 += `</div>
    علي خالد، فارس علي، معتز احمد
    </div>
    `;
    console.log(str1)
    return str1
}
function detailsreqa(data) {
  return `<a htrf="./details.html"><u>${data}</u></a>`;
}
function changecolor(data) {
  if (data.trim() == "اداري") {
    return `<span class="bg-[#55618C1A] px-3 py-2 text-[#0d0c22cc]  rounded-full ">${data}</span>`;
  }
  if (data.trim() == "مالي") {
    return `<span class="bg-[#76B7574A] px-3 py-2 text-[#0d0c22cc]  rounded-full ">${data}</span>`;
  }
  if (data.trim() == "قانوني") {
    return `<span class="bg-[#E9C85542] px-3 py-2 text-[#0d0c22cc]  rounded-full ">${data}</span>`;
  }
}
if (window.innerWidth <= 900) {
  dataSet.forEach((d) => {
    d[1] = replace(d[1]);
   d[d.length - 2] = writeimageres(d[d.length - 2]);

  });


function writeimageres(data) {
  let str1 = `
    <div class="flex   -space-x-4">`;
    data.forEach((i, index) => {
      if (index != 0) {
        str1 += `
        <div class="" > <img class="w-8 h-8 rounded-full dark:border-gray-800 " src="${i}" alt=""> </div>`;
      } else
        str1 += `
        <div class=" hidden" > <img class="w-8 h-8 rounded-full dark:border-gray-800 " src="${i}" alt=""> </div>`;
    });
  str1 += `</div>
    `;
  return str1;
}

  function replace(data) {
    const str = data;
    const pattern = /^(\S+\s+\S+)/;
    const match = str.match(pattern);
    if (match) {
      const firstTwoWords = match[1] + " ...";
      return firstTwoWords;
    }
  }
}
