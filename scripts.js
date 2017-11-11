

// CAPITALIZING THE FIRST LETTER IN A STRING
function capitalize(string) {
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
  url: 'https://randomuser.me/api/?results=12&nat=us,gb,au,ca',
  dataType: 'json',
  success: function(data) {
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
      // NEW
      htmlString += '<span class="username">' + username + '</span>';
      htmlString += '<span class="email">' + email + '</span>';
      htmlString += '<span class="city">' + city + ", " + state + '</span>';
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
      modalString += '<span class="state_postcode_city">' + city + ", " + state + " " + postcode + '</span>';
      modalString += '<span class="birthdate">' + "Birthday: " + birthdate + '</span>';
      modalString += '</div>';

      modalString += '</div>';
    }); // end each loop

    $('.grid').html(htmlString);
    $('.modal').append(modalString);
  } // end callback (success)
}); // end ajax

const modal = document.querySelector(".modal");
const modal_close = document.querySelector(".modal-close");
const grid = document.querySelector(".grid");

// Hiding the modal window and all the details when the modal is closed
modal_close.addEventListener("click", function() {
  let details = document.querySelectorAll(".details");
  modal.style.display = "none";
  for (let i = 0; i < details.length; i++) {
    details[i].style.visibility = "hidden";
    details[i].style.display = "none";
  }
});

grid.addEventListener("click", function(event) {
  let clicked = event.target;
  let user = "";
  const items = document.querySelectorAll(".item")
  const details = document.querySelectorAll(".details")

  if (clicked.className !== "grid") {
    modal.style.display = "block";

    if (clicked.className === "item") {
      user = event.target;
    } else if ((clicked.className === "pic-div") || (clicked.className === "info_basic")) {
      user = event.target.parentNode;
    } else {
      user = event.target.parentNode.parentNode;
    }
    // RESETTING all details to be hidden - in case the user
    // clicks on another employee while the modal window is still open
    for (let i = 0; i < details.length; i++) {
      details[i].style.visibility = "hidden";
      details[i].style.display = "none";
    }
    // DISPLAYING THE CORRECT EMPLOYEE DETAILS
    let currentDetails = "";
    let previousDetails = "";
    let nextDetails = ""
    for (let i = 0; i < items.length; i++) {
      if (items[i] === user) {
        details[i].style.visibility = "visible";
        details[i].style.display = "flex";
        currentDetails = details[i];
      }
    }
    // MOVE BACK BETWEEN EMPLOYEE DETAILS INFO
    const prev = document.querySelector(".modal-prev");
    prev.addEventListener("click", function() {
      // RESETTING
      for (let i = 0; i < details.length; i++) {
      details[i].style.visibility = "hidden";
      details[i].style.display = "none";
    }
      currentDetails.style.visibility = "hidden";
      currentDetails.style.display = "none";

      if (currentDetails.previousElementSibling.className !== "details") {
        currentDetails = currentDetails.parentNode.lastElementChild;
        previousDetails = currentDetails;
        currentDetails.style.visibility = "visible";
        currentDetails.style.display = "flex";
      }
      else {
        previousDetails = currentDetails.previousElementSibling;
        previousDetails.style.visibility = "visible";
        previousDetails.style.display = "flex";
        currentDetails = previousDetails;
      }
    }); // end prev

    // MOVE FORTH BETWEEN EMPLOYEE DETAILS INFO
    const next = document.querySelector(".modal-next");
    next.addEventListener("click", function() {
      // RESETTING
      for (let i = 0; i < details.length; i++) {
      details[i].style.visibility = "hidden";
      details[i].style.display = "none";
    }

      currentDetails.style.visibility = "hidden";
      currentDetails.style.display = "none";

      if (!(currentDetails.nextElementSibling) ||
          currentDetails.nextElementSibling.className !== "details") {
        currentDetails = currentDetails.parentNode.firstElementChild;
        while (currentDetails.className !== "details") {
          currentDetails = currentDetails.nextElementSibling;
        }
        nextDetails = currentDetails;
        currentDetails.style.visibility = "visible";
        currentDetails.style.display = "flex";
      }
      else {
        nextDetails = currentDetails.nextElementSibling;
        nextDetails.style.visibility = "visible";
        nextDetails.style.display = "flex";
        currentDetails = nextDetails;
      }
    }); // end next
  }
}); // end grid events

// SEARCH function
function search() {

  let input = document.querySelector("#searchBar");
  let filter = input.value.toUpperCase();
  let grid = document.querySelector(".grid");
  let items = document.querySelectorAll(".item");

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let name = item.lastElementChild.firstElementChild.textContent;
    if (name.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
    let username = item.lastElementChild.firstElementChild.nextElementSibling.textContent;
    if (username.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    }
  }
}









//
