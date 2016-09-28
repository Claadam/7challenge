console.log("")
var colorfulElements = $(".intro-section")
var colorNameDisplay = $("#color-display")

colorfulElements.hover(function(e) {
  console.log(":D")
  var elementHoveredOver = $(e.target)
  colorNameDisplay.html("");
})