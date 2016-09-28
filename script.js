console.log(":/")
var colorfulElements = $(".intro-section")
var colorNameDisplay = $("#color-display")
console.log(":|")

colorfulElements.hover(function(e) {
  console.log(":D")
  var elementHoveredOver = $(e.target)
  colorNameDisplay.html("Green is not a creative color");
})