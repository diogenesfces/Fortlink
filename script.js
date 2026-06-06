const EMAIL_TO = "contato@fortlinksolucoes.com.br";
const WHATSAPP_NUMBER = "5531999592961";

const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".service-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const card = trigger.closest(".service-card");
    const isOpen = card.classList.toggle("open");
    trigger.setAttribute("aria-expanded", String(isOpen));
    trigger.querySelector(".plus").textContent = isOpen ? "-" : "+";
  });
});

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const whatsappButton = document.querySelector("#whatsappButton");

function buildWhatsAppLink(formData) {
  const text = [
    "Olá, gostaria de agendar uma reunião com a FortLink Soluções.",
    `Nome: ${formData.get("nome") || ""}`,
    `Empresa: ${formData.get("empresa") || ""}`,
    `Mensagem: ${formData.get("mensagem") || ""}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

if (contactForm) {
  contactForm.addEventListener("input", () => {
    const formData = new FormData(contactForm);
    whatsappButton.href = buildWhatsAppLink(formData);
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    whatsappButton.href = buildWhatsAppLink(formData);

    const payload = {
      nome: formData.get("nome"),
      empresa: formData.get("empresa"),
      mensagem: formData.get("mensagem"),
    };

    const emailSubject = "Contato FortLink";
    const emailBody = [
      `Nome: ${payload.nome}`,
      `Empresa: ${payload.empresa}`,
      `Mensagem: ${payload.mensagem}`,
    ].join("\n");

    const mailtoLink = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    contactForm.reset();
    formStatus.textContent = "Abrindo seu cliente de e-mail...";
    window.location.href = mailtoLink;
  });
}
