var searchBtn = document.querySelector("#searchBtn");
let recNames = document.querySelector("#recNames");
let burgerBtn = $("#burgers");
let pizzaBtn = $("#pizza");
let kebabBtn = $("#kebab");
let dessertsBtn = $("#desserts");
let postcodeSearch = document.querySelector("#postcodeSearch");

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

searchBtn.addEventListener("click", fetchFood, postcode);
console.log("button clicked");

async function fetchFood(event) {
  event.preventDefault();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);

      const response = await fetch(
        `https://developers.zomato.com/api/v2.1/search?q=${recNames.value}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&count=10`,

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

        $("#fetchInfo").append();

        console.log(data);

        // ---------------------------------------------------------------------------------------------------
        // PYTHAGGGGG

        let sumlat =
          // get current locations latitude....
          position.coords.latitude -
          // minus each restaurants latitude....
          data.restaurants[i].restaurant.location.latitude;

        let sumlon =
          // get current locations longitude....
          position.coords.longitude -
          // minus each restaurants lon....
          data.restaurants[i].restaurant.location.longitude;

        // use pythag thearom.....so 'a*a + b*b = c squared..'

        let C = Math.sqrt(sumlat * sumlat + sumlon * sumlon);

        //   C.sort(function (a, b) {
        //     return a - b;
        //   });
        // }

        // trying to sort the pythag in order...lowest number first..
        // function something(more) {
        //   C.sort(function (a, b) {
        //     return a - b;
        //   });
        //   document.getElementById("#fetchInfo").innerHTML = C;
        // }

        console.log(data.restaurants[i].restaurant.location.address);
        console.log(sumlat);
        console.log(sumlon);
        console.log(C);
      }
    });
  }
}

function pythagorean_theorem(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  return Math.sqrt(x * x + y * y);
}

console.log(pythagorean_theorem(2, 4));
console.log(pythagorean_theorem(3, 4));

function postcode(data) {
  // let lat = data.result[0].lat;
  // let lon = data.result[0].lon;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (data1) {
      console.log(data1.coords.latitude);
      console.log(data1.coords.longitude);

      let latitude = data1.coords.latitude;
      let longitude = data1.coords.longitude;

      var URL = `https://api.postcodes.io/postcodes?${postcodeSearch.value}&lon=${data1.coords.longitude}&lat=${data1.coords.latitude}`;
      fetch(URL).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            var loc = data.result[0].postcode;

            $("#location").append(data.result[0].postcode);
            console.log(data);
            console.log(URL);
            console.log(loc);
          });
        }
      });
    });
  }
}
// ${postcodeSearch.value}
postcode();

let a = 10;
let b = 12;
let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// function geo() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       console.log(position);
//       $.get(
//         "http://maps.googleapis.com/maps/api/geocode/json?latlng=" +
//           position.coords.latitude +
//           "," +
//           position.coords.longitude,
//         function (data1) {
//           console.log(data1);
//         }
//       );
//     });
//   }
// }

//developers.zomato.com/api/v2.1/search?q=${recNames.value}&lat=${data1.coords.latitude}&lon=${data1.coords.longitude}&count=10
// CLEAR APPENDED STUFF ---

// ------------------------------------------------------------------------------------------------------------
// GIVE ME PIZZAS ONLY WHEN I CLICK THE PIZZA BUTTON....................
// https:

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

    console.log(data);
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
