
/* =================================
   JOJO STUDIO - JAVASCRIPT
================================= */

// MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu"
  );
});

// FERMER LE MENU APRÈS UN CLIC

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  });
});

// ANNÉE AUTOMATIQUE

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

// FORMULAIRE DE CONTACT

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

// À CONFIGURER PLUS TARD AVEC L'ADRESSE OFFICIELLE
const CONTACT_EMAIL = "";

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  if (!CONTACT_EMAIL) {
    formStatus.textContent =
      "Le formulaire est prêt. L'adresse e-mail de réception doit encore être configurée.";

    return;
  }

  const formData = new FormData(contactForm);

  const name = formData.get("name");
  const email = formData.get("email");
  const audience = formData.get("audience");
  const service = formData.get("service");
  const message = formData.get("message");

  const subject = encodeURIComponent(
    "Nouvelle demande de prestation - Jojo Studio"
  );

  const body = encodeURIComponent(
    `Nouvelle demande reçue depuis le site Jojo Studio\n\n` +
    `Nom : ${name}\n` +
    `Email : ${email}\n` +
    `Profil : ${audience}\n` +
    `Service : ${service}\n\n` +
    `Message :\n${message}`
  );

  const mailtoLink =
    `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;

  formStatus.textContent =
    "Votre logiciel de messagerie va s'ouvrir pour finaliser l'envoi.";
});
