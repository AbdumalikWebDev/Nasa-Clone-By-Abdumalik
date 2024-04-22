function closeDropdowns() {
  var icon1 = document.getElementById("arrow-icon1");
  var icon2 = document.getElementById("arrow-icon2");

  // Triggering a reflow before removing the class to apply transition
  icon1.offsetHeight;
  icon2.offsetHeight;

  icon1.classList.remove("rotate-down");
  icon2.classList.remove("rotate-down");

  document.getElementById("dropdown-content1").style.display = "none";
  document.getElementById("dropdown-content2").style.display = "none";
}

function toggleDropdown(dropdownId) {
  var icon = document.getElementById(
    "arrow-icon" + dropdownId.charAt(dropdownId.length - 1)
  );
  var content = document.getElementById(
    "dropdown-content" + dropdownId.charAt(dropdownId.length - 1)
  );

  if (content.style.display === "block") {
    icon.classList.remove("rotate-down"); // Remove the rotation class
    content.style.display = "none"; // Hide the dropdown content
  } else {
    closeDropdowns(); // Close other dropdowns
    icon.classList.add("rotate-down"); // Add the rotation class
    content.style.display = "block"; // Display the dropdown content
  }
}

document.addEventListener("click", function (event) {
  var isClickInsideDropdown = false;
  var dropdowns = document.querySelectorAll(".dropdown-btn");
  dropdowns.forEach(function (dropdown) {
    if (dropdown.contains(event.target)) {
      isClickInsideDropdown = true;
    }
  });
  if (!isClickInsideDropdown) {
    closeDropdowns();
  }
});

