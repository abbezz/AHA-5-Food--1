function recipe() {
  var url = `https://recipesapi2.p.rapidapi.com/recipes/lasagna`;

  fetch(url).then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {

            
  });
}

var options = {
  method: "GET",
  url: "https://recipesapi2.p.rapidapi.com/recipes/lasagna",
  params: { maxRecipes: "2" },
  headers: {
    "x-rapidapi-host": "recipesapi2.p.rapidapi.com",
    "x-rapidapi-key": "99487931c9msh09e061c599bd40dp1e25e6jsn37d27e63886d",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
