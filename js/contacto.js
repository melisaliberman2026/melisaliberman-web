// =============================================================
//  FORMULARIO DE CONTACTO
//  Sin base de datos: arma el mensaje y lo abre en WhatsApp,
//  con opción de mandarlo por email como alternativa.
// =============================================================
import "./main.js";
import { esEmail, linkWhatsApp } from "./util.js?v=1";
import { CONTACTO, MENSAJE_WA } from "./datos.js?v=1";

const form = document.getElementById("form-contacto");
const aviso = document.getElementById("msg-contacto");

function mostrar(tipo, html) {
  aviso.className = `form__aviso ${tipo}`;
  aviso.innerHTML = html;
  aviso.scrollIntoView({ behavior: "smooth", block: "center" });
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const d = Object.fromEntries(new FormData(form).entries());
  const nombre = (d.nombre || "").trim();
  const mensaje = (d.mensaje || "").trim();
  const email = (d.email || "").trim();

  if (!nombre || !mensaje) {
    return mostrar("mal", "Completá tu nombre y el mensaje, por favor.");
  }
  if (email && !esEmail(email)) {
    return mostrar("mal", "Revisá el email: no parece válido.");
  }

  // Texto que se abre ya escrito en WhatsApp
  const texto = [
    `Hola, me contacto con Melisa Liberman, desde su sitio web. Soy ${nombre}.`,
    `Motivo: ${d.motivo || "Consulta general"}`,
    email ? `Email: ${email}` : "",
    (d.telefono || "").trim() ? `Teléfono: ${d.telefono.trim()}` : "",
    "",
    mensaje,
  ]
    .filter(Boolean)
    .join("\n");

  const wa = linkWhatsApp(CONTACTO.whatsapp, texto);
  window.open(wa, "_blank", "noopener");

  const mailto = `mailto:${CONTACTO.email}?subject=${encodeURIComponent(
    `Consulta desde la web · ${nombre}`
  )}&body=${encodeURIComponent(texto)}`;

  mostrar(
    "ok",
    `<b>¡Listo!</b> Se abrió WhatsApp con tu mensaje ya escrito: solo tenés que apretar enviar.<br>
     Si no se abrió, <a href="${wa}" target="_blank" rel="noopener"><b>tocá acá</b></a>
     o mandalo por <a href="${mailto}"><b>email</b></a>.`
  );
  form.reset();
});
