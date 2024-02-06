let namaElm = document.getElementById("nama_profile");
namaElm.textContent = "Dani Ramdani";

let url = "http://localhost:3000/";
// show menu element
let categoryElm = document.getElementById("category");

getCategory = async () => {
  let dataCategory = await fetch(url + `category`);
  let dataCategoryConv = await dataCategory.json();

  dataCategoryConv.forEach((item) => {
    const menuCategory = document.createElement("div");
    menuCategory.textContent = `${item.nama_kategori}`;
    menuCategory.classList.add("menu");
    menuCategory.classList.add("cursor-pointer");
    menuCategory.addEventListener("click", function () {
      let judul = document.getElementById("akuaku");
      judul.textContent = `${item.nama_kategori}`;
      judul.innerHTML = `${item.nama_kategori}`;

      const menuClassList = document.querySelectorAll(".menu");
      menuClassList.forEach((item) => {
        item.classList.remove("text-red-600");
        item.classList.remove("hover:scale-110");
      });

      menuCategory.classList.add("text-red-600");
      menuCategory.classList.add("hover:scale-110");
    });

    categoryElm.appendChild(menuCategory);
  });
};
getCategory();

let tripElm = document.getElementById("trip");
getTrip = async () => {
  let dataTrip = await fetch(url + `trip`);
  let dataTripConv = await dataTrip.json();

  dataTripConv.forEach((item) => {
    const menuTrip = document.createElement("div");

    menuTrip.innerHTML = `<div class="flex flex-col rounded-md gap-1 shadow-md">
              <span
                ><img src="${item.image}" alt="img"
              /></span>
              <div class="flex flex-col p-5 gap-2">
                <span class="font-semibold text-xl">${item.title}</span>
                <span class="flex gap-5"><i class="fa-solid fa-star">${item.ratting} </i> </span>
                <span class="text-sm text-teal-500">${item.jumlah_berangkat} telah berangkat</span>
                <span
                  >IDR
                  <span class="text-red-600 font-semibold text-2xl"
                    >${item.harga}</span
                  ></span
                >
                <div class="flex mt-2 gap-2">
                  <span class="bg-slate-100 p-2 rounded-lg">${item.tag}</span>
                </div>
              </div>
            </div>
    `;

    tripElm.appendChild(menuTrip);
  });
};

getTrip();

getOT = async () => {
  let link = "trip?category.id=2";
  let endpOT = await fetch(url + link);
  let endOTconv = await endpOT.json();
  // console.log(endOTconv);
};
getOT();
