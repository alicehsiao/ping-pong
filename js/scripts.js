//Business End Logic
var pingPong = function(number) {
  var list = [];
  for (var i = 1; i <= number; i++) {
    list.push(i);
  }
  var finalList = list.map(function(number) {
    if (number % 15 === 0) {
      return "pingpong";
    }  else if (number % 5 === 0) {
      return "pong";
    } else if (number % 3 === 0) {
      return "ping";
    } else {
      return number;
    }
  });
  return finalList;
}

//User Interface Logic
$(document).ready(function() {
  var divClone = $("#list").clone();
  $("#blanks form").submit(function(event) {
    $("#list").replaceWith(divClone.clone());
    var userInput = parseInt($("input#number").val());
    var output = pingPong(userInput);
    output.forEach(function(number) {
      $("#list ul").append("<li>" + number + "</li>");
    });
    event.preventDefault();
  });
});
