var response = document.getElementsByClassName("response")[0];  // WHY WONT JQUERY ACCESS WORK?!

var encouragement = [
  "Wow! That's a great idea!",
  "Actually, we have been planning on doing that for ages.",
  "I would love to see that happen!",
  "It's actually already in the works.",
  "I love it! It's brilliant!",
  "Fantastic! Great plan!",
  "We've been thinking about doing something like that for a long time!",
  "That's a superb idea!",
  "Excellent suggestion!",
  "I love it!",
  "Amazing idea!",
  "Wow, that's really cool.",
  "That's a really good idea!",
  "Good job, guys!",
  "That's a neat and innovative idea!"
];

var conjunction = [
  "However",
  "Although",
  "The problem is that",
  "The only thing is that",
  "But the thing is that",
  "Unfortunately"
];

var excuse = [
  "it's sort of a complicated issue",
  "my hands are kind of tied in the matter",
  "it's sort of out of my hands here",
  "there are a ton of levels of administration and stuff in the way",
  "I'm just not totally sure if it's really really possible right now",
  "we're kind of powerless to really do much about it",
  "it might kind of take a long time",
  "it's just sort of tough to get something like that done",
  "we don't really have a lot of say in the matter and stuff",
  "we just don't really have the resources for that",
  "there's just a lot of things to take into consideration",
  "I'm sort of really busy at the moment"
];

var trailing = [
  ", you know?",
  "...",
  ". I hope you can understand."
];

function generate_response() {   
  var conjunction_function = getRand(encouragement) + " " + getRand(conjunction) + " " + getRand(excuse) + getRand(trailing);
  return conjunction_function;
}

function getRand(array) { 
  return array[Math.floor(Math.random()*100) % array.length];
}

$("#response").click(function() { 
  // speech bubble conversion
  $(this).hide()
  $(".bubble").css("background", "#ffffff");
  $(".bubble").addClass('show-arrow');
  
  response.innerHTML = generate_response();
  $("#links").show();
});

$("#suggest").click(function() { 
  response.innerHTML = generate_response();
});

$("#giveup").click(function() {
  var apology = "Sorry I couldn't really be of any more help, guys...";       
  response.innerHTML = apology;

  $("#links").hide(); 
});