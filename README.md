# Melisa Liberman · Sitio web

Sitio web de la odontóloga Melisa Liberman (Mendoza).
HTML, CSS y JavaScript puro — **sin build, sin frameworks, sin `npm install`, sin base de datos**.

Los turnos se gestionan en la agenda online de **Lomas Centro Médico** (MrTurno): el sitio
no guarda ningún dato de pacientes.

---

## 📁 Qué hay en la carpeta

```
index.html            Home
sobre-mi.html         Formación, trayectoria y forma de trabajar
tratamientos.html     Los 6 tratamientos + preguntas frecuentes
contacto.html         Datos de contacto, mapa y formulario

css/styles.css        Sistema visual completo (colores y tipografías arriba de todo)

js/datos.js           ⭐ Contacto, redes, link de la agenda y tratamientos
js/main.js            Menú, botones de agenda y WhatsApp, testimonios, animaciones
js/tratamientos.js    Dibuja el acordeón de tratamientos
js/contacto.js        Formulario → WhatsApp
js/util.js            Funciones auxiliares

assets/img/           Imágenes y favicon
assets/iconos.svg     Todos los íconos en un solo archivo
netlify.toml          Configuración de deploy
FOTOS-NECESARIAS.md   Qué fotos hacen falta, con nombres y tamaños
```

El archivo con ⭐ es el que se toca a mano para casi todo.

---

## 🧪 Probarlo en tu computadora

El sitio usa módulos de JavaScript, así que **no alcanza con hacer doble clic** en el HTML:
hay que levantar un servidor local (es un solo comando).

**Con Python** (ya viene en Windows 11 y Mac):

```bash
cd "Web Meli"
python -m http.server 5500
```

**Con Node:**

```bash
npx serve .
```

Después abrí `http://localhost:5500` en el navegador.

---

## ✏️ Cosas que vas a querer cambiar

| Qué | Dónde |
|---|---|
| Teléfono, email, redes, dirección, horarios | `js/datos.js` → `CONTACTO` |
| Link de la agenda de turnos | `js/datos.js` → `AGENDA_URL` |
| Tratamientos (nombre, texto, puntos) | `js/datos.js` → `TRATAMIENTOS` |
| Testimonios | `js/datos.js` → `TESTIMONIOS` |
| Fotos | `assets/img/` (mantené los nombres — ver `FOTOS-NECESARIAS.md`) |
| Colores y tipografías | `css/styles.css`, bloque `:root` de arriba de todo |
| Textos de las páginas | Directamente en cada `.html` |
| Preguntas frecuentes | `tratamientos.html`, sección "Preguntas frecuentes" |

### Paleta de marca

| Color | Código | Uso |
|---|---|---|
| Oliva | `#79791A` | Titulares y botón principal |
| Oliva profundo | `#3F3F0C` | Footer y bloques oscuros |
| Tostado | `#B8905F` | Detalles, íconos, subrayados |
| Tostado oscuro | `#8B6239` | Textos pequeños destacados |
| Crema | `#F8F4EC` | Fondo general |

Tipografías: **Bodoni Moda** itálica (titulares) y **Montserrat** (textos).

---

## 🚀 Publicar el sitio

No hace falta Firebase: el sitio es 100% estático. Solo se necesitan **GitHub** y **Netlify**.

### 1️⃣ Crear la cuenta de GitHub

1. Entrá a **https://github.com/signup**.
2. Usá el email de Melisa (`melisaliberman@gmail.com`) o el que prefieras para la cuenta.
3. Elegí un nombre de usuario, por ejemplo `melisaliberman-web`.
4. Verificá el email y completá el registro (plan **Free**).

### 2️⃣ Crear el repositorio

1. Ya dentro de GitHub, clic en **+ (arriba a la derecha) → New repository**.
2. Nombre: `web-melisa-liberman`.
3. Visibilidad: **Private** (o Public, da igual para Netlify).
4. **No** marques "Add a README" (ya tenemos uno).
5. **Create repository**.

### 3️⃣ Subir los archivos

Desde la terminal, parado en esta carpeta:

```bash
cd "Web Meli"
git remote remove origin        # saca el repo viejo de Silvana
git add .
git commit -m "Web de Melisa Liberman"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/web-melisa-liberman.git
git push -u origin main
```

> ⚠️ **Importante:** esta carpeta arrastra el historial del sitio de Silvana Arrula.
> Si preferís arrancar de cero, borrá la carpeta oculta `.git` antes de todo y hacé
> `git init` de nuevo.

O sin terminal: en el repo recién creado, **Add file → Upload files** y arrastrás todos
los archivos de la carpeta.

### 4️⃣ Crear la cuenta de Netlify y publicar

1. Entrá a **https://app.netlify.com/signup** y elegí **Sign up with GitHub**
   (así queda todo conectado con un clic).
2. Autorizá a Netlify a leer tus repositorios.
3. **Add new site → Import an existing project → GitHub**.
4. Elegí `web-melisa-liberman`.
5. No hace falta comando de build ni carpeta de publicación (ya están en `netlify.toml`).
6. **Deploy site**.

Netlify te da una dirección tipo `https://web-melisa-liberman.netlify.app`.
Para cambiarla: **Site configuration → Change site name**.

### 5️⃣ Dominio propio (opcional)

**Domain management → Add a domain** y seguís las instrucciones de DNS que te da Netlify.
Si comprás el dominio, actualizá también las etiquetas `<link rel="canonical">` y
`og:image` de cada HTML, más `robots.txt` y `sitemap.xml`.

### 6️⃣ Actualizaciones futuras

Cada vez que cambies algo:

```bash
python versionar.py     # ⭐ solo si tocaste imágenes, CSS o JavaScript
git add .
git commit -m "Qué cambiaste"
git push
```

Netlify vuelve a publicar solo, en menos de un minuto.

---

## 🔄 El tema de la caché

**El problema.** Los navegadores guardan una copia de las imágenes, del CSS y del
JavaScript para no bajarlos en cada visita. Como los archivos siempre se llaman igual
(`hero.jpg`, `styles.css`), después de un cambio el navegador cree que ya los tiene y
sigue mostrando la versión vieja. Eso te obligaba a borrar la caché a mano, y al
paciente le hubiera pasado lo mismo.

**Cómo está resuelto.** Hay dos capas:

**1. El servidor avisa que revalide siempre.** En `netlify.toml` hay una regla `/*`
que le dice al navegador: antes de usar tu copia, preguntá si cambió. Si no cambió,
Netlify responde en unos pocos bytes y la página carga igual de rápido.

> Antes la regla decía `/*.html`, y ese patrón **no alcanza a la home** (`/`) ni a las
> URLs limpias (`/tratamientos`), porque esas direcciones no terminan en `.html`.
> Por eso justo la portada era la que se quedaba vieja.

**2. Los archivos llevan número de versión.** Todas las referencias del sitio terminan
en `?v=1`:

```html
<link rel="stylesheet" href="css/styles.css?v=1">
<img src="assets/img/hero.jpg?v=1">
```

Cuando corrés `python versionar.py`, ese número sube a `?v=2` en todo el proyecto de
una sola vez. Para el navegador esa es una dirección **nueva**, así que la baja de cero
sin importar qué tenga guardado. Es la parte que garantiza el resultado, porque algunos
navegadores de celular ignoran lo que pide el servidor.

**Regla práctica:**

| Qué cambiaste | ¿Hay que correr `versionar.py`? |
|---|---|
| Texto dentro de un `.html` | No |
| Una imagen de `assets/img/` | **Sí** |
| `css/styles.css` | **Sí** |
| Cualquier archivo de `js/` | **Sí** |

Si te queda la duda, corrélo igual: no rompe nada.

**Para probar mientras trabajás en tu computadora**, en el navegador abrí las
herramientas de desarrollo con `F12`, andá a la pestaña **Network** y tildá
**Disable cache**. Mientras esa ventana esté abierta, nunca vas a ver contenido viejo.

---

## 📸 Fotos

Están puestas como **placeholders** (bloques tostados con el nombre y el tamaño escrito
adentro). Cuando lleguen las definitivas, se reemplazan los archivos en `assets/img/`
**manteniendo los mismos nombres** y no hay que tocar nada de código.

El detalle completo está en **`FOTOS-NECESARIAS.md`**.

---

## 📅 Agenda de turnos

Todos los botones "Agendá tu turno" apuntan al mismo link, que vive en
`js/datos.js` → `AGENDA_URL`. Se abren en una pestaña nueva.

Si algún día Melisa cambia de centro o de sistema de turnos, se edita **una sola línea**
y todos los botones del sitio quedan actualizados.
