const dropdownCategories2 = document.getElementById("dropdownMenu3");
const dropdownContainer2 = document.getElementById("to-toggle-3");
const dropdownOther2 = document.getElementById("to-toggle-4");

dropdownCategories2.addEventListener("click", function () {
  dropdownContainer2.classList.toggle("show");
  dropdownOther2.classList.toggle("show");
  dropdownCategories2.ariaExpanded = true;
});

dropdownOther2.addEventListener("click", function (e) {
  dropdownContainer2.classList.toggle("show");
  dropdownOther2.classList.toggle("show");
  dropdownCategories2.ariaExpanded = true;
  dropdownCategories2.textContent = e.target.textContent;
});
