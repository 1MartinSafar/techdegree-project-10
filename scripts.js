$.ajax({
  // url: 'https://randomuser.me/api/?results=12?nat=us',
  // url: 'https://randomuser.me/api/?results=12',
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
      let first_name = item["name"]["first"];
      let last_name = item["name"]["last"];
      let email = item["email"];
      let city = item["location"]["city"];
      // <div class="item">1</div>

      htmlString += '<div class="item">';

      htmlString += '<img src="' + picture + '" class="picture">';

      htmlString += '<div class="info_basic">';
      htmlString += '<h2 class="name">' + first_name + ' ' + last_name + '</h2>';
      htmlString += '<span class="email">' + email + '</span>';
      htmlString += '<span class="city">' + city + '</spain>';
      htmlString += '</div>';

      htmlString += '</div>';
    }); // end each loop

    $('.grid').html(htmlString);

  // $('#videos').html(htmlString + "</ul>");
  }
}); // end ajax

















//
