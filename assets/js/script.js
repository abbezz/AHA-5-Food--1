var searchBtn = document.querySelector("#searchBtn");
let recNames = document.querySelector("#recNames");

// let apikey = "99487931c9msh09e061c599bd40dp1e25e6jsn37d27e63886d";

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

searchBtn.addEventListener("click", fetchFood);
console.log("button clicked");

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

async function fetchFood(event) {
  event.preventDefault();

  console.log("something");
  const response = await fetch(
    `https://developers.zomato.com/api/v2.1/search?q=${recNames.value}&count=20&lat=&lon=&cuisines=indian`,
    {
      headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
    }
  );
  const data = await response.json();
  console.log(data);
}
