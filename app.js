document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.getElementById("status-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const radioButtons = document.querySelectorAll(".dropdown-menu input[type='radio']");

  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const dropdown = dropdownToggle.parentElement;
    dropdown.classList.toggle("active");
  });

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      dropdownToggle.textContent = e.target.value;
      dropdownToggle.parentElement.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-dropdown")) {
      document.querySelector(".custom-dropdown").classList.remove("active");
    }
  });
});
