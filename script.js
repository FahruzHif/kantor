// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  });
});

// Form kontak (contoh saja, belum terhubung ke server)
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = form.nama.value.trim();
  status.textContent = `Terima kasih, ${nama}! Pesan Anda telah kami terima.`;
  form.reset();
});
