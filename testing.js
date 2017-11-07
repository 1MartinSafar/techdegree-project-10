






// Random User Generator allows you to fetch up to 5,000 generated users
// in one request using the results parameter.
// https://randomuser.me/api/?results=5000

// You can specify a nationality like so:
// https://randomuser.me/api/?nat=us


// These parameters accept the following values in a comma delimited list

// gender
// name
// location
// email
// login
// registered
// dob
// phone
// cell
// id
// picture
// nat

// If you only wanted the names,genders,and nats of users:
// https://randomuser.me/api/?inc=gender,name,nat

// If you want everything except for login data:
// https://randomuser.me/api/?exc=login

// callback - If you want the payload in JSONP, supply a callback
// using the callback parameter. Only available with JSON formats.
// https://randomuser.me/api/?results=5&callback=randomuserdata


// var encodedParam = encodeURIComponent('www.foobar.com/?first=1&second=12&third=5');
// encodedParam = 'http%3A%2F%2Fwww.foobar.com%2F%3Ffirst%3D12%26sec%3D25%26position%3D'

$(function(){
  $('#usersnav ul li a').on('click', function(e){
    e.preventDefault();
    var htmlString  = '<ul id="videoslisting">';
    var channelname = $(this).attr('href').substring(1);
    var ytapiurl    = 'http://gdata.youtube.com/feeds/api/users/'+channelname+'/uploads?alt=json&max-results=10';


$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});





$.getJSON(ytapiurl, function(data) {
      $.each(data.feed.entry, function(i, item) {
        var title    = item['title']['$t'];
        var videoid  = item['id']['$t'];

        var pubdate  = item['published']['$t'];
        var fulldate = new Date(pubdate).toLocaleDateString();

        var thumbimg = item['media$group']['media$thumbnail'][0]['url'];
        var tinyimg1 = item['media$group']['media$thumbnail'][1]['url'];
        var tinyimg2 = item['media$group']['media$thumbnail'][2]['url'];
        var tinyimg3 = item['media$group']['media$thumbnail'][3]['url'];

        var vlink    = item['media$group']['media$content'][0]['url'];
        var ytlink   = item['media$group']['media$player'][0]['url'];
        var numviews = item['yt$statistics']['viewCount'];
        var numcomms = item['gd$comments']['gd$feedLink']['countHint'];

        htmlString +='<li class="clearfix"><h2>' + title + '</h2>';
        htmlString +='<div class="videothumb"><a href="' + ytlink
        + '" target="_blank"><img src="' + thumbimg
        + '" width="480" height="360"></a></div>';
        htmlString +='<div class="meta"><p>Published on <strong>' + fulldate
        + '</strong></p><p>Total views: <strong>' + commafy(numviews)
        + '</strong></p><p>Total comments: <strong>'+ numcomms
        +'</strong></p><p><a href="'+ ytlink
        +'" class="external" target="_blank">View on YouTube</a></p><p><a href="'
        + vlink +
        '" class="external" target="_blank">View in Fullscreen</a></p><p><strong>Alternate Thumbnails</strong>:<br><img src="'+ tinyimg1 +'"> <img src="' + tinyimg2 + '"> <img src="'+ tinyimg3 +'"></p></div></li>';
      }); // end each loop

      $('#videos').html(htmlString + "</ul>");
    }); // end json parsing














//
