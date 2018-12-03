$( document ).ready(function() {

  // find elements
var banner = $("#banner-message")
var button = $("button")
var buttontext = $("#Buttontext")
var text = $("#text")
var text2 = $("#text2")

// x find elements
var xbanner = $("#xbanner-message")
var xbutton = $("xbutton")
var xbuttontext = $("#xButtontext")
var xtext = $("#xtext")
var xtext2 = $("#xtext2")

//----------------

//setTimeout(function(){
//    odometer.innerHTML = 456;
//}, 1000);



$.getJSON( url, function( json ) {
  console.log( "JSON Data: " + json.number );
 });

 //----------------

// handle click and add class
button.on("click", function(){
  banner.toggleClass("alt")
  buttontext.text("pressed")
})

// JSON

var url ="https://tggfworktime.firebaseio.com/Schedule/2018-04-06.json"

var fanUrl="https://graph.facebook.com/v2.12/CSWBayreuth/?fields=fan_count%2Cname&access_token=EAACEdEose0cBAHJKansUSDompNUrre4ye70ycZAHw88M8gmQvAidLZBLBhPt7qaopg0b8wUblGvgOg2BBMIFMKoKEUAc75lZBnLdEMLl509ZCGvmkEYBxUhb9Grww7RhWZBUVhgQ50YZC5D6GAX8OH2tLUBQFvGZBEZBHkaFKtYhuYLJoc5tPvu94AZAQTSE1DvEZD"

var liangxiangUrl = "https://api.waqi.info/feed/beijing/fangshanliangxiang/?token=b817986004304da829b72557c283300c20dfb9ae"
var haidianUrl = "https://api.waqi.info/feed/beijing/haidianwanliu/?token=b817986004304da829b72557c283300c20dfb9ae"
var exchangeUrl ="https://api.exchangeratesapi.io/latest"
//$.getJSON( url, function( json ) {
//  console.log( "JSON Data: " + json.Dienst );
//  var dienst = json.Dienst
//  text.text(dienst)
//  return json
// });

$.getJSON( haidianUrl, function( json ) {
  console.log( "JSON Haidian Data: " + json.data.aqi );
  var haidianair = json.data.aqi
  var x = document.getElementById("odometer_haidian");
  text.text(haidianair)
  x.innerHTML = haidianair

  if (haidianair < 70) {
   console.log( "Air quality: " + haidianair + " is green" );
   x.style.background = "green";
}
  if (70 < haidianair&&haidianair < 120) {
   console.log( "Air quality: " + haidianair + " is yellow" );
   x.style.background = "yellow";
}
  if (120 < haidianair&&haidianair < 175) {
   console.log( "Air quality: " + haidianair + " is orange" );
   x.style.background = "orange";
}

   if (175 < haidianair&&haidianair < 225) {
   console.log( "Air quality: " + haidianair + " is red" );
   x.style.background = "red";
}

   if (225 < haidianair&&haidianair < 300) {
   console.log( "Air quality: " + haidianair + " is Dark red" );
   x.style.background = "#730010";
}

  if (haidianair > 300) {
   console.log( "Air quality: " + haidianair + " is green" );
   x.style.background = "green";
}

  return json
 });

 $.getJSON( liangxiangUrl, function( json ) {
   console.log( "JSON Liangxiang Data: " + json.data.aqi );
   var liangxiangair = json.data.aqi
   var x = document.getElementById("odometer");
   text.text(liangxiangair)

   odometer.innerHTML = liangxiangair

   if (liangxiangair < 70) {
    console.log( "Air quality: " + liangxiangair + " is green" );
    x.style.background = "green";
   }
   if (70 < liangxiangair&&liangxiangair < 120) {
    console.log( "Air quality: " + liangxiangair + " is yellow" );
    x.style.background = "yellow";
   }
   if (120 < liangxiangair&&liangxiangair < 175) {
    console.log( "Air quality: " + liangxiangair + " is orange" );
    x.style.background = "orange";
   }

    if (175 < liangxiangair&&liangxiangair < 225) {
    console.log( "Air quality: " + liangxiangair + " is red" );
    x.style.background = "red";
   }

    if (225 < liangxiangair&&liangxiangair < 300) {
    console.log( "Air quality: " + liangxiangair + " is Dark red" );
    x.style.background = "#730010";
   }

   if (liangxiangair > 300) {
    console.log( "Air quality: " + liangxiangair + " is purple" );
    x.style.background = "purple";
   }

   return json
  });

  $.getJSON( exchangeUrl, function( json ) {
    console.log( "JSON Exchange Data: " + json.rates.CNY );
    var exchangerate = json.rates.CNY
    var y = document.getElementById("odometer_exchange");
    text.text(exchangerate)
    y.innerHTML = String(exchangerate)
    return json
   });


//$.getJSON( fanUrl5, function( json ) {
  //console.log( "JSON Data: " + json.fan_count );
  //var pageName = json.name
  //var pageFans = json.fan_count
  //xtext.text(pageName)
  //xtext2.text(pageFans)
  //return json

// });

	$("#btnAjaxCall").click(function(){
		fetchDataAndDisplay();
	});

	function fetchDataAndDisplay(){
		$.ajax({
			url:fanUrl2,
			method:"GET"
		}).done(function(data){

    	var ajaxName = data.name
      var ajaxFans = data.data.aqi

      text2.text(ajaxFans)

    })}

});
