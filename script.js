// ====== Config simple (cambia solo esto) ======
const BRAND = "TuMarca";
const WHATSAPP_NUMBER = "573001234567"; // Colombia: 57 + número
const WHATSAPP_MESSAGE = "Hola, quiero una página web profesional. ¿Me das información?";
const EMAIL_TO = "tuemail@ejemplo.com";
// =============================================

document.getElementById("year").textContent = new Date().getFullYear();

const wa = document.getElementById("wa");
const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
wa.href = waUrl;

const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Form sin backend: abre tu cliente de correo con el mensaje
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  const subject = `Contacto desde la web - ${BRAND}`;
  const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}\n`;

  const mailto = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});
