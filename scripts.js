

// CAPITALIZING THE FIRST LETTER
function capitalize(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// DISPLAYING 12 RANDOM USERS
$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    let htmlString = "";
    $.each(data.results, function(i, item) {
      // console.log(item["picture"]["large"]);
      // console.log(item["name"]["first"]);
      // console.log(item["name"]["last"]);
      // console.log(item["email"]);
      // console.log(item["location"]["city"]);
      // console.log(item["nat"]);
      let picture = item["picture"]["large"];
      let first_name = capitalize(item["name"]["first"]);
      let last_name = capitalize(item["name"]["last"]);
      let email = item["email"];
      let city = capitalize(item["location"]["city"]);

      // ADDING 12 RANDOM USERS

      htmlString += '<div class="item">';

      htmlString += '<div class="pic-div">';
      htmlString += '<img src="' + picture + '" class="picture">';
      htmlString += '</div>';

      htmlString += '<div class="info_basic">';
      htmlString += '<h2 class="name">' + first_name + ' ' + last_name + '</h2>';
      htmlString += '<span class="email">' + email + '</span>';
      htmlString += '<span class="city">' + city + '</spain>';
      htmlString += '</div>';

      htmlString += '</div>';

      // ADDING THE CLICKED USER TO A MODAL POP UP WINDOW

    }); // end each loop
    $('.grid').html(htmlString);

    $('.item').on("click", function(e) {
      console.log("CLICKED");
      // console.log(e.target);
    });
  }
}); // end ajax

// const item = document.querySelector(".item");
// console.log(item);

// item.addEventListener("click", function() {
//   console.log("CLICKED");
// });

// const grid = document.querySelector(".grid");
//
// grid.addEventListener("click", function(event) {
//   console.log("CLICKED");
//   console.log(event.target);
// });













//
