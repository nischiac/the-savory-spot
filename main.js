// Navbar active link on scroll
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Gallery Lightbox
document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", function() {
    document.getElementById("lightboxImage").src = this.src;
  });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  if (!this.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }
  this.classList.add("was-validated");
});

// Today's Special Badge (Monday only)
const day = new Date().getDay();
if (day === 1) { // Monday
  const badge = document.getElementById("specialBadge");
  if (badge) badge.classList.remove("d-none");
}

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("bg-dark", "text-white");
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-white");
    localStorage.setItem("theme", body.classList.contains("bg-dark") ? "dark" : "light");
  });
}
