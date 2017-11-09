

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
  url: 'https://randomuser.me/api/?results=12&nat=us,gb,au,ca',
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
    // $('.modal').html(modalString);
    $('.modal').append(modalString);

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

const modal = document.querySelector(".modal");
const modal_close = document.querySelector(".modal-close");
const grid = document.querySelector(".grid");
// let items = document.querySelectorAll(".item");

modal_close.addEventListener("click", function() {
  let details = document.querySelectorAll(".details");
  modal.style.display = "none";
  for (let i = 0; i < details.length; i++) {
    details[i].style.visibility = "hidden";
    details[i].style.display = "none";
  }
});

//     var array = [2, 9, 9];
//     array.indexOf(2);     // 0
//     array.indexOf(7);     // -1

grid.addEventListener("click", function(event) {
  let clicked = event.target;
  let user = "";
  const items = document.querySelectorAll(".item")
  const details = document.querySelectorAll(".details")
  if (clicked.className !== "grid") {
    modal.style.display = "block";

    if (clicked.className === "item") {
      user = event.target;
      // console.log(user);
    } else if ((clicked.className === "pic-div") || (clicked.className === "info_basic")) {
      user = event.target.parentNode;
      // console.log(user);
    } else {
      user = event.target.parentNode.parentNode;
      // console.log(user);
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
        // console.log("ITEM FOUND: " + items[i].innerHTML);
        details[i].style.visibility = "visible";
        details[i].style.display = "flex";
        // console.log("DETAIL FOUND: " + details[i].innerHTML);

        currentDetails = details[i];
      }
    }
    // MOVE BACK BETWEEN EMPLOYEE DETAILS INFO
    const prev = document.querySelector(".modal-prev");
    prev.addEventListener("click", function() {
      currentDetails.style.visibility = "hidden";
      currentDetails.style.display = "none";
      // console.log("CURRENT DETAILS:");
      // console.log(currentDetails);

      if (currentDetails.previousElementSibling.className !== "details") {
        console.log("NO MORE DETAILS HERE");
        // currentDetails.nextElementSibling.style.visibility = "visible";
        // currentDetails.nextElementSibling.style.display = "flex";

        // Node.parentNode.lastChild

        console.log(currentDetails.parentNode.lastChild.innerHTML);
        currentDetails = currentDetails.parentNode.lastChild;

        currentDetails.style.visibility = "visible";
        currentDetails.style.display = "flex";


      }
      else {
        // console.log("CURRENT DETAILS:");
        // console.log(currentDetails);

        previousDetails = currentDetails.previousElementSibling;
        // console.log("PREVIOUS DETAILS:");
        // console.log(previousDetails);

        // console.log(previousDetails.innerHTML);
        previousDetails.style.visibility = "visible";
        previousDetails.style.display = "flex";
        currentDetails = previousDetails;

        // console.log("PREVIOUS DETAILS:");
        // console.log(previousDetails);
      }



    });

    // MOVE FORTH BETWEEN EMPLOYEE DETAILS INFO
    const next = document.querySelector(".modal-next");
    next.addEventListener("click", function() {
      currentDetails.style.visibility = "hidden";
      currentDetails.style.display = "none";
      // console.log("CURRENT DETAILS:");
      // console.log(currentDetails);

      if (!(currentDetails.nextElementSibling) ||
          currentDetails.nextElementSibling.className !== "details") {
        console.log("NO MORE DETAILS HERE");
        // currentDetails.nextElementSibling.style.visibility = "visible";
        // currentDetails.nextElementSibling.style.display = "flex";

        // console.log("CURRENT DETAILS: " + currentDetails.innerHTML);
        // console.log("CURRENT DETAILS: " + currentDetails.parentNode.firstElementChild.tagName);
        // console.log(currentDetails.previousElementSibling.parentNode.firstChild.innerHTML);
        // currentDetails = nextDetails.previousElementSibling.parentNode.lastChild;
        currentDetails = currentDetails.parentNode.firstElementChild;

        console.log("CURRENT DETAILS TAG: " + currentDetails.tagName);
        while (currentDetails.className !== "details") {
          currentDetails = currentDetails.nextElementSibling;
          console.log("NEW: " + currentDetails.tagName);
        }

        currentDetails.style.visibility = "visible";
        currentDetails.style.display = "flex";
      }
      else {
        // console.log("CURRENT DETAILS:");
        // console.log(currentDetails);

        nextDetails = currentDetails.nextElementSibling;
        // console.log("PREVIOUS DETAILS:");
        // console.log(nextDetails);

        // console.log(nextDetails.innerHTML);
        nextDetails.style.visibility = "visible";
        nextDetails.style.display = "flex";
        currentDetails = nextDetails;

        // console.log("PREVIOUS DETAILS:");
        // console.log(nextDetails);
      }
      // Node.parentNode.lastChild


    });




  }

  // let item = event.currentTarget.;
  // if (clicked.className !== "grid") {
    // modal.style.display = "block";

    // const items = document.querySelectorAll(".item")
    // const details = document.querySelectorAll(".details")
    // console.log(items);
    // console.log(details);


    // var array = [2, 9, 9];
    // array.indexOf(2);     // 0
    // array.indexOf(7);     // -1
  // }
});

// function display(event) {
//   // let item = event.currentTarget;
//   console.log(modal.style.display);
//   modal.style.display = "block";
//   console.log(modal.style.display);
// };
//
// for (let i = 0; i < items.length; i++) {
//     items[i].addEventListener('click', display);
// }



// SEARCH function

function search() {

  let input = document.querySelector("#searchBar");
  let filter = input.value.toUpperCase();

  let grid = document.querySelector(".grid");
  let items = document.querySelectorAll(".item");

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    // console.log(item.lastElementChild.firstElementChild.textContent);
    let name = item.lastElementChild.firstElementChild.textContent;
    if (name.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}















//
