var popupLink = document.querySelectorAll(".popup-link");
var popupWindow = document.getElementById("popup-window");
var closeButton = document.getElementById("close-button");


  // Show the pop-up window when the link is clicked
  popupLink.forEach ((button) => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      popupWindow.style.display = "block";
});
});
  // Hide the pop-up window when the close button is clicked
  closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
  });
