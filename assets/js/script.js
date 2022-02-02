var searchBtn = document.querySelector("#searchBtn");
let recNames = document.querySelector("#recNames");
let burgerBtn = $("#burgers");
let pizzaBtn = $("#pizza");
let kebabBtn = $("#kebab");
let dessertsBtn = $("#desserts");

$(function () {
  var Restaurant = [
    "Dixy Chicken",
    "Aberdeen",
    "Liverpool",
    "Glasgow",
    "Birmingham",
    "Manchester",
    "Essex",
    "Tokyo",
    "London",
    "New York, USA",
    "Paris",
    "Islamabad",
    "New Delhi",
    "Chicago",
    "Rome",
    "San Francisco",
    "Denver",
  ];
  $("#restNames").autocomplete({
    source: Restaurant,
  });
});

searchBtn.addEventListener("click", fetchFood);
console.log("button clicked");

async function fetchFood(event) {
  event.preventDefault();

  console.log("FOOD");
  const response = await fetch(
    `https://developers.zomato.com/api/v2.1/search?q=${recNames.value}&count=20`,

    {
      headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
    }
  );
  const data = await response.json();

  // Give me 10 bits of data
  for (i = 0; i < 10; i++) {
    // create it in a list
    var listEl = $("<li>");
    var listDetail = name.concat("");
    listEl.addClass("list-group-item").text(listDetail);
    listEl.appendTo("#fetchInfo");

    // Bring Data in the info box
    $("#fetchInfo").append(
      data.restaurants[i].restaurant.name + " - Address: "
    );

    $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
    // $("#fetchInfo").append(
    //   "    Menu URL : " + data.restaurants[i].restaurant.url
    // );
    $("#fetchInfo").append(
      "  Opening times : " + data.restaurants[i].restaurant.timings
    );

    // var mapbox = document.createElement("button");
    // mapbox.id = "boxing";
    // // mapbox.addClass("box");
    // mapbox.appendTo("#fetchInfo");

    // $("#fetchInfo").append(data.restaurants[i].restaurant.photos[0].photo.id);

    // console.log(data.restaurants[i].restaurant.location);
    console.log(data);
  }
}

// ------------------------------------------------------------------------------------------------------------
// GIVE ME PIZZAS ONLY WHEN I CLICK THE PIZZA BUTTON....................
pizzaBtn.on("click", fetchPizzas);

async function fetchPizzas(event) {
  event.preventDefault();

  console.log("some pizzas");
  const response = await fetch(
    `https://developers.zomato.com/api/v2.1/search?q=pizza&count=20`,

    {
      headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
    }
  );
  const data = await response.json();

  // Give me 10 bits of data
  for (i = 0; i < 10; i++) {
    // create it in a list
    var listEl = $("<li>");
    var listDetail = name.concat("");
    listEl.addClass("list-group-item").text(listDetail);
    listEl.appendTo("#fetchInfo");

    // Bring Data in the info box
    $("#fetchInfo").append(
      data.restaurants[i].restaurant.name + " - Address: "
    );

    $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
  }
}

// GIVE ME BURGERS ONLY WHEN I CLICK THE BURGER BUTTON....................

burgerBtn.on("click", fetchBurgers);

async function fetchBurgers(event) {
  event.preventDefault();

  console.log("some Burgers");
  const response = await fetch(
    `https://developers.zomato.com/api/v2.1/search?q=burger&count=20`,

    {
      headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
    }
  );
  const data = await response.json();

  // Give me 10 bits of data
  for (i = 0; i < 10; i++) {
    // create it in a list
    var listEl = $("<li>");
    var listDetail = name.concat("");
    listEl.addClass("list-group-item").text(listDetail);
    listEl.appendTo("#fetchInfo");

    // Bring Data in the info box
    $("#fetchInfo").append(
      data.restaurants[i].restaurant.name + " - Address: "
    );

    $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
  }
}

// GIVE ME KEBABS ONLY WHEN I CLICK THE KEBAB BUTTON....................

kebabBtn.on("click", fetchKebab);

async function fetchKebab(event) {
  event.preventDefault();

  const response = await fetch(
    `https://developers.zomato.com/api/v2.1/search?q=kebab&count=20`,

    {
      headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
    }
  );
  const data = await response.json();

  // Give me 10 bits of data
  for (i = 0; i < 10; i++) {
    // create it in a list
    var listEl = $("<li>");
    var listDetail = name.concat("");
    listEl.addClass("list-group-item").text(listDetail);
    listEl.appendTo("#fetchInfo");

    // Bring Data in the info box
    $("#fetchInfo").append(
      data.restaurants[i].restaurant.name + " - Address: "
    );

    $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
    console.log("kebabs");
  }
}

// GIVE ME DESSERTS ONLY WHEN I CLICK THE DESSERTS BUTTON....................

dessertsBtn.on("click", fetchDesserts);

async function fetchDesserts(event) {
  event.preventDefault();

  const response = await fetch(
    `https://developers.zomato.com/api/v2.1/search?q=dessert+waffles&count=20`,

    {
      headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
    }
  );
  const data = await response.json();

  // Give me 10 bits of data
  for (i = 0; i < 10; i++) {
    // create it in a list
    var listEl = $("<li>");
    var listDetail = name.concat("");
    listEl.addClass("list-group-item").text(listDetail);
    listEl.appendTo("#fetchInfo");

    // Bring Data in the info box
    $("#fetchInfo").append(
      data.restaurants[i].restaurant.name + " - Address: "
    );

    $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
    console.log("some desserts");
  }
}

// async function fetchFood(event) {
//   event.preventDefault();

//   console.log("something");
//   const response = await fetch(
//     `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${recNames.value}&offset=10`,
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "recipe-by-api-ninjas.p.rapidapi.com",
//         "x-rapidapi-key": "99487931c9msh09e061c599bd40dp1e25e6jsn37d27e63886d",
//       },
//     }
//   );
//   const data = await response.json();
//   console.log(data);
// }

// async function fetchFood(event) {
//   event.preventDefault();

//   console.log("something");
//   const response = await fetch(
//     `https://webknox-recipes.p.rapidapi.com/recipes/quickAnswer?q=${recNames.values}`,
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
//         "x-rapidapi-key": "99487931c9msh09e061c599bd40dp1e25e6jsn37d27e63886d",
//       },
//     }
//   );
//   const data = await response.json();
//   console.log(data);
// }

// searchBtn.addEventListener("click", fetchFood);
// console.log("button clicked");

// async function fetchFood(event) {
//   event.preventDefault();

//   console.log("something");
//   const response = await fetch(
//     `https://recipesapi2.p.rapidapi.com/recipes/&recipe_name${recNames.value}?maxRecipes=10`,
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "recipesapi2.p.rapidapi.com",
//         "x-rapidapi-key": "99487931c9msh09e061c599bd40dp1e25e6jsn37d27e63886d",
//       },
//     }
//   );
//   const data = await response.json();
//   console.log("this is the data: ", data);
// }
