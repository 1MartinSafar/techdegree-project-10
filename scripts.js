

// CAPITALIZING THE FIRST LETTER IN A STRING
function capitalize(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// CAPITALIZING EVERY WORD IN A STRING
function capitalizeAll(str) {
   let splitStr = str.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   return splitStr.join(' ');
}

// DISPLAYING 12 RANDOM USERS
$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    let htmlString = "";
    let modalString = "";
    $.each(data.results, function(i, item) {
      let picture = item["picture"]["large"];
      let first_name = capitalizeAll(item["name"]["first"]);
      let last_name = capitalizeAll(item["name"]["last"]);
      let email = item["email"];
      let city = capitalizeAll(item["location"]["city"]);

      let username = item["login"]["username"];
      let cell = item["cell"];
      let street = capitalizeAll(item["location"]["street"]);
      // let city = capitalize(item["location"]["city"]);
      let state = capitalizeAll(item["location"]["state"]);
      let postcode = item["location"]["postcode"];
      let birthdate = item["dob"].slice(0,10);

      // ADDING 12 RANDOM USERS

      htmlString += '<div class="item">';

      htmlString += '<div class="pic-div">';
      htmlString += '<img src="' + picture + '" class="picture">';
      htmlString += '</div>';

      htmlString += '<div class="info_basic">';
      htmlString += '<h2 class="name">' + first_name + ' ' + last_name + '</h2>';
      htmlString += '<span class="email">' + email + '</span>';
      htmlString += '<span class="city">' + city + '</span>';
      htmlString += '</div>';

      htmlString += '</div>';

      // ADDING 12 DETAILS

      modalString += '<div class="details">';

      modalString += '<div class="pic-div_details">';
      modalString += '<img src="' + picture + '" class="picture">';
      modalString += '</div>';

      modalString += '<div class="info_details">';
      modalString += '<h2 class="name">' + first_name + ' ' + last_name + '</h2>';
      modalString += '<span class="username">' + username + '</span>';
      modalString += '<span class="email_details">' + email + '</span>';
      modalString += '<span class="cell">' + cell + '</span>';
      modalString += '<span class="street">' + street + '</span>';
      // modalString += '<span class="city">' + city + '</span>';
      modalString += '<span class="state_postcode_city">' + city + ", " + state + " " + postcode + '</span>';
      // modalString += '<span class="postcode">' + postcode + '</span>';
      modalString += '<span class="birthdate">' + "Birthday: " + birthdate + '</span>';
      modalString += '</div>';

      modalString += '</div>';
    }); // end each loop

    // ADDING THE CLICKED USER TO A MODAL POP UP WINDOW
      // CHANGE: MAKING IT IN HTML and then ADDING TO IT
      // htmlString += '<div class="modal">';
      // CHANGE: creating 12 divs with details, then adding them to .MODAL

      // const grid = document.querySelector(".grid");
      //
      // grid.addEventListener("click", function(event) {
      //   // console.log("CLICKED");
      //   // console.log(event.target);
      //
      //   let modalString = "";
      //
      //   // can use if === .item else .parent
      //   // can use z-index?
      //
      //   // if (event.target.className === "item") {
      //   //   console.log(event.target);
      //   // } else {
      //   //   console.log(event.target.parentNode);
      //   // }
      //   console.log(event.currentTarget.firstChild);
      //
      //
      // });

    $('.grid').html(htmlString);
    $('.modal').html(modalString);

    // $('.item').on("click", function(e) {
    //   console.log("CLICKED");
      // console.log(e.target);
    // });
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
