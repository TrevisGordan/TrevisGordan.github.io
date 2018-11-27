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

var fanUrl2 = "https://api.waqi.info/feed/beijing/fangshanliangxiang/?token=b817986004304da829b72557c283300c20dfb9ae"

//$.getJSON( url, function( json ) {
//  console.log( "JSON Data: " + json.Dienst );
//  var dienst = json.Dienst
//  text.text(dienst)
//  return json
// });

$.getJSON( fanUrl2, function( json ) {
  console.log( "JSON Data: " + json.data.aqi );
  var air = json.data.aqi
  text.text(air)
  odometer.innerHTML = air
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
