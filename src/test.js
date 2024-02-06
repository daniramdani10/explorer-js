let url = "http://localhost:3000/";

getCategory = async () => {
  //   let endpointTrip = await fetch(url + `trip`);
  //   let trip = await endpointTrip.json();
  //   trip.forEach((item) => {
  //     console.log(item.title);
  //   });

  let endpointCategory = await fetch(url + `trip?category.id=3`);
  let category = await endpointCategory.json();
  category.forEach((item) => {
    console.log(item);

    let categoryElm = document.getElementById("category");
    let categoryItem = document.createElement("div");
    categoryItem.textContent = `${item.nama_kategori}`;

    categoryElm.appendChild(categoryItem);
  });
};

getCategory();
