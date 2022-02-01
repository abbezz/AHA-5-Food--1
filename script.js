const settings = {
  async: true,
  crossDomain: true,
  url: "https://recipesapi2.p.rapidapi.com/recipes/tomato%20soup?maxRecipes=2",
  method: "GET",
  headers: {
    "x-rapidapi-host": "recipesapi2.p.rapidapi.com",
    "x-rapidapi-key": "99487931c9msh09e061c599bd40dp1e25e6jsn37d27e63886d",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
