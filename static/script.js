document.addEventListener("DOMContentLoaded", function() {
  // Function to toggle dropdown visibility
  function toggleDropdown(id) {
    var dropdownContent = document.getElementById(id);
    dropdownContent.classList.toggle("hidden");
  }

  // Add event listeners to all buttons
  var btnBeginner = document.getElementById("btn-beginner");
  btnBeginner.addEventListener("click", function() {
    toggleDropdown("dropdownContent-beginner");
  });

  var btnComplete = document.getElementById("btn-complete");
  btnComplete.addEventListener("click", function() {
    toggleDropdown("dropdownContent-complete");
  });

  var btnAirbrush = document.getElementById("btn-airbrush");
  btnAirbrush.addEventListener("click", function() {
    toggleDropdown("dropdownContent-airbrush");
  });

  var btnSemipermanent = document.getElementById("btn-semipermanent");
  btnSemipermanent.addEventListener("click", function() {
    toggleDropdown("dropdownContent-semipermanent");
  });

  var btnSpecialeffect = document.getElementById("btn-specialeffect");
  btnSpecialeffect.addEventListener("click", function() {
    toggleDropdown("dropdownContent-specialeffect");
  });

  var btnMediamakeup = document.getElementById("btn-mediamakeup");
  btnMediamakeup.addEventListener("click", function() {
    toggleDropdown("dropdownContent-mediamakeup");
  });

  var btnGlobal = document.getElementById("btn-global");
  btnGlobal.addEventListener("click", function() {
    toggleDropdown("dropdownContent-global");
  });

  var btnAbsolute = document.getElementById("btn-absolute");
  btnAbsolute.addEventListener("click", function() {
    toggleDropdown("dropdownContent-absolute");
  });
});
