// =============================================================
//  UTILIDADES COMPARTIDAS
// =============================================================

/** Escapa texto antes de meterlo en el HTML (evita inyecciones). */
export function escapar(txt = "") {
  return String(txt).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

/** Arma el link de WhatsApp con el mensaje ya escrito. */
export function linkWhatsApp(numero, mensaje) {
  const limpio = String(numero || "").replace(/\D/g, "");
  return `https://wa.me/${limpio}?text=${encodeURIComponent(mensaje)}`;
}

export function esEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim());
}
