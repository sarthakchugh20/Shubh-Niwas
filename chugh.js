// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with a specific class
  var elements = document.querySelectorAll('.custom-js');

  // Loop through each element and add a click event listener
  elements.forEach(function(element) {
    element.addEventListener('click', function() {
      // Example action: Change background color
      element.style.backgroundColor = getRandomColor();
    });
  });

  // Function to generate a random color
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
