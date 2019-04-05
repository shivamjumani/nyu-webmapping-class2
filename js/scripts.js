$('.laut').on('click', function() {
  $('#asian-info-box').text('Conveniently located at Union Square, Laut was one of the first Malaysian restaurants to receive a Michelin Star in NY. We focus on bringing the best recipes, dishes and flavors from South East Asia for you. Our goal is to preserve the flavor profiles of each dish, while maintaining the integrity of each cuisine.');
});

$('.barn-joo').on('click', function() {
  $('#asian-info-box').text('The exciting characteristics of Barn Joo’s menu, is a changing array of small plates highlighting farm-to-table ingredients offering comfort foods with a touch of Korean soul. We focus on bringing the best out of ingredients and transform them into flavor profiles different from the Western palate.');
});

$('.topaz').on('click', function() {
  $('#asian-info-box').text('Topaz noodle bar - all you can find Thai street foods provide with fresh premium quality and authentic ingredients. You will feel like eating foods in Thailand, in the heart of Midtown Manhattan. Just a step away from Carnegie hall and Central Park easily to access my spot.');
});

$('.ladybird').on('click', function() {
  $('#vegan-info-box').text('Ladybird is a vegetable bar in the East Village owned by Ravi Derossi. The atmosphere is intimate and warm and the menu — 100% plant based and gluten-free, upon request — offers salads, grains, fondue, and more.');
});

$('.nix').on('click', function() {
  $('#vegan-info-box').text('Nix is a restaurant from Michelin-starred chef John Fraser and James Truman. With the belief that eating vegetarian or vegan should feel more celebration than sacrifice, Nix features dishes that are seasonal, shareable and highly flavourful.');
});

$('.bar-verde').on('click', function() {
  $('#vegan-info-box').text('Bar Verde brings Matthew Kenney’s passion for plant-based cuisine to a new Mexican concept with influences from other Latin countries. Guests will be treated to an array of sharing plates, including variations on guacamoles, ceviches, chips and salsas, and a large number of unique main course preparations');
});

$('.indian-accent').on('click', function() {
  $('#indian-info-box').text('Indian Accent’s menu explores progressive ideas in Indian cuisine while maintaining traditional integrity. Chef Manish Mehrotra reinterprets nostalgic Indian dishes with an openness towards global techniques and influences.');
});

$('.ahimsa').on('click', function() {
  $('#indian-info-box').text('Ahimsa is a place to be nourished by simply prepared vegan, vegetarian and kosher food that comes from recipes our families have been preparing for generations in India. We are proud to welcome you into our tradition. Ahimsa - in Greenwich Village and now, in the East Village.');
});

$('.baar-baar').on('click', function() {
  $('#indian-info-box').text('BAAR BAAR a reimagining of the Indian love affair with all things spirited. A first of its kind Indian Gastro Bar that will challenge your perception of the subcontinent.Join us on this journey with India-inspired cocktails that pay homage to our beginnings and modern interpretation of regional Indian Cuisine crafted by Chef Sujan Sarkar.');
});

$('.smith').on('click', function() {
  $('#brunch-info-box').text('The Smith is a casual American Brasserie with four upbeat locations in New York City: The Smith East Village, The Smith Midtown The Smith Lincoln Square, and The Smith NoMad. Utilizing local products and purveyors, the breakfast, lunch, brunch and dinner menus feature a selection of familiar bistro dishes. ');
});

$('.jacks-wife-freda').on('click', function() {
  $('#brunch-info-box').text('A lively all-day NYC bistro executing American-Mediterranean cooking & classic cocktails in understated digs, with locations in Soho and the West Village.');
});

$('.cafe-mogador').on('click', function() {
  $('#brunch-info-box').text('Founded in 1983 in the East Village, Cafe Mogador was both an early pioneer in the NYC restaurant world and a downtown cultural hub. Serving up her signature Moroccan-inspired cuisine, founder Rivka embraced and celebrated the creative neighborhood she called home while pushing culinary boundaries.');
});

var name = 'Shivam'; // String

// var age = 24; // number (if it had quotes around it, it would be a string)
// instead of hard coding, we can read it from an input

$('#ageSubmit').on('click', function() {
  var age = $('#ageInput').val();
  age = parseInt(age); //parse a number from the string that was read from input

  if(isNaN(age)) {
    //console.log('You did not enter a number');
    $('.outputMessage').text('You did not enter a number!!');
  } else {
    var ageInADecade = age + 10;
    $('.outputMessage').text(`You will be ${ageInADecade} in 10 years`);
  }
  console.log('it read this from input', age, age.length)
})
//
// console.log(name)
//
// var ageInADecade = age + 10;
//
// console.log(ageInADecade)
