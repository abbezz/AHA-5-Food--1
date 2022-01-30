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