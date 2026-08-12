// =============================================================
//  PÁGINA DE TRATAMIENTOS
//  Dibuja el acordeón a partir de la lista de datos.js, así se
//  edita en un solo lugar y no hay que tocar el HTML.
// =============================================================
import "./main.js";
import { TRATAMIENTOS } from "./datos.js?v=1";
import { escapar } from "./util.js?v=1";

const caja = document.getElementById("acordeon-tratamientos");

if (caja) {
  caja.innerHTML = TRATAMIENTOS.map(
    (t, i) => `
    <details class="acor" id="${escapar(t.id)}"${i === 0 ? " open" : ""}>
      <summary>
        <span class="acor__ico"><svg><use href="assets/iconos.svg?v=1#ico-${escapar(t.icono)}"></use></svg></span>
        <span>${escapar(t.nombre)}</span>
        <span class="acor__mas" aria-hidden="true">+</span>
      </summary>
      <div class="acor__cuerpo">
        <p>${escapar(t.detalle)}</p>
        <ul>
          ${t.puntos
            .map(
              (p) =>
                `<li><svg><use href="assets/iconos.svg?v=1#ico-check-simple"></use></svg><span>${escapar(p)}</span></li>`
            )
            .join("")}
        </ul>
      </div>
    </details>`
  ).join("");

  // Si la URL trae #implantes (por ejemplo), abrimos ese tratamiento.
  const id = location.hash.slice(1);
  if (id) {
    const el = document.getElementById(id);
    if (el) {
      caja.querySelectorAll("details").forEach((d) => (d.open = false));
      el.open = true;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}
