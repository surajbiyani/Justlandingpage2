const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const themeSwitcher = document.getElementById("themeSwitcher");

// Toggle nav
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

// Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-container")) {
    modal.classList.remove("show-modal");
  }
});

// Prevent default form submission
document.querySelector(".modal-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});

// Theme toggle logic
themeSwitcher.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
});

// Load theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeSwitcher.checked = true;
  }
});
