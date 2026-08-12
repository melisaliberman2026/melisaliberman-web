// =============================================================
//  COMPORTAMIENTO COMÚN DEL SITIO
//  Menú móvil, link de la agenda, testimonios, año y WhatsApp.
// =============================================================
import { CONTACTO, AGENDA_URL, MENSAJE_WA, TESTIMONIOS } from "./datos.js?v=1";
import { linkWhatsApp, escapar } from "./util.js?v=1";

/* ---------- Menú móvil ---------- */
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const abierto = nav.classList.toggle("abierto");
    menuBtn.setAttribute("aria-expanded", String(abierto));
    menuBtn.querySelector("use").setAttribute(
      "href",
      `assets/iconos.svg?v=1#${abierto ? "ico-cerrar" : "ico-menu"}`
    );
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("abierto");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.querySelector("use").setAttribute("href", "assets/iconos.svg?v=1#ico-menu");
    })
  );
}

/* ---------- Botones de la agenda ----------
   Cualquier <a data-agenda> apunta a la agenda de Lomas Centro Médico
   y se abre en una pestaña nueva. El link vive en datos.js.           */
document.querySelectorAll("[data-agenda]").forEach((el) => {
  el.href = AGENDA_URL;
  el.target = "_blank";
  el.rel = "noopener";
});

/* ---------- Links de WhatsApp ---------- */
document.querySelectorAll("[data-wa]").forEach((el) => {
  // data-wa vacío usa el mensaje general; con texto propio, ese texto.
  const msg = el.dataset.wa || MENSAJE_WA;
  el.href = linkWhatsApp(CONTACTO.whatsapp, msg);
  el.target = "_blank";
  el.rel = "noopener";
});

/* ---------- Testimonios ---------- */
const cajaTesti = document.getElementById("testimonios");
if (cajaTesti && TESTIMONIOS.length) {
  cajaTesti.innerHTML = TESTIMONIOS.map(
    (t, i) => `
    <article class="testi${i === 0 ? " activo" : ""}">
      <span class="testi__comilla" aria-hidden="true">&ldquo;</span>
      <p>${escapar(t.texto)}</p>
      <div class="testi__autor">
        ${
          t.foto
            ? `<img src="${escapar(t.foto)}" alt="" width="52" height="52" loading="lazy">`
            : `<span class="testi__inicial" aria-hidden="true">${escapar(t.autor.charAt(0))}</span>`
        }
        <div><b>${escapar(t.autor)}</b><span>${escapar(t.detalle || "")}</span></div>
      </div>
    </article>`
  ).join("");

  const puntos = document.querySelector(".puntos");
  if (puntos) {
    puntos.innerHTML = TESTIMONIOS.map(
      (_, i) =>
        `<button type="button" class="${i === 0 ? "activo" : ""}" aria-label="Ver testimonio ${i + 1}"></button>`
    ).join("");
  }
}

const testis = [...document.querySelectorAll(".testi")];
const puntos = [...document.querySelectorAll(".puntos button")];
if (testis.length > 1) {
  let i = 0;
  let timer;
  const mostrar = (n) => {
    i = (n + testis.length) % testis.length;
    testis.forEach((t, k) => t.classList.toggle("activo", k === i));
    puntos.forEach((p, k) => p.classList.toggle("activo", k === i));
  };
  const auto = () => {
    clearInterval(timer);
    timer = setInterval(() => mostrar(i + 1), 8000);
  };
  puntos.forEach((p, k) =>
    p.addEventListener("click", () => {
      mostrar(k);
      auto();
    })
  );
  mostrar(0);
  auto();
}

/* ---------- Año actual en el footer ---------- */
document.querySelectorAll("[data-anio]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

/* ---------- Aparición suave al hacer scroll ---------- */
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const objetivos = document.querySelectorAll(
    ".card-trat, .paso, .beneficio, .contacto-item, .duo__img, .acor, .bloque-oliva, .galeria img"
  );
  objetivos.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity .5s ease, transform .5s ease";
  });
  const mostrar = (el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  };
  const obs = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e, k) => {
        if (!e.isIntersecting) return;
        setTimeout(() => mostrar(e.target), k * 60);
        obs.unobserve(e.target);
      });
    },
    { threshold: 0.12 }
  );
  objetivos.forEach((el) => obs.observe(el));

  // Red de seguridad: si el observador no dispara, a los 2,5 s se muestra
  // todo igual. Nunca dejamos contenido invisible.
  setTimeout(() => objetivos.forEach(mostrar), 2500);
}
