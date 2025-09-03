// Typing animation for the title
const title = document.getElementById("title");
const text = "My Photofolio";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    title.innerHTML = text.substring(0, index + 1);
    index++;
    setTimeout(typeEffect, 150);
  }
}
window.onload = typeEffect;

// Dark/Light mode toggle
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
  // Change button text/icon
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

