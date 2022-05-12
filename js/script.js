// let customApiUrl =
//   "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1";

$(".search-button").click(function () {
  let userInput = $("input").val();

  let customApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;
  // let url = `https://api.giphy.com/v1/gifs/${userInput}/`;

  console.log(userInput, customApiUrl);
  fetch(customApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (giphyData) {
      let randomIndex = Math.floor(Math.random() * giphyData.data.length);
      console.log(giphyData);
      console.log(giphyData.data[randomIndex].images.original.url);

      $(".gif-here").html(
        `<img src="${giphyData.data[randomIndex].images.original.url}">`
      );
      // Multiple gifs
      // for(var i=0; i < giphyData.data.length; i++){
      //   $(".gif-here").append('<img src="${giphyData.data[randomIndex].images.original}"')
      // }
    });
});

// Gif #2
$(".search-button").click(function () {
  let userInput = $("input").val();

  let customApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;
  // let url = `https://api.giphy.com/v1/gifs/${userInput}/`;

  console.log(userInput, customApiUrl);
  fetch(customApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (giphyData) {
      let randomIndex = Math.floor(Math.random() * giphyData.data.length);
      console.log(giphyData);
      console.log(giphyData.data[randomIndex].images.original.url);

      $(".display").html(
        `<img src="${giphyData.data[randomIndex].images.original.url}">`
      );
    });
});
