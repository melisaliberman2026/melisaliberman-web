// =============================================================
//  DATOS DEL SITIO · Melisa Liberman
//  Todo lo editable "a mano" vive acá: contacto, redes, el link
//  de la agenda y los tratamientos que se muestran en la web.
// =============================================================

export const CONTACTO = {
  nombre: "Melisa Liberman",
  rol: "Rehabilitación Oral · Estética Dental · Implantes",
  matricula: "", // ← cargar la matrícula provincial cuando la tengamos (ej: "MP 1234")
  email: "melisaliberman@gmail.com",
  telefono: "+54 9 261 213 2465",
  whatsapp: "5492612132465", // sin + ni espacios
  consultorio: "Lomas Centro Médico",
  direccion: "Av. Champagnat esq. Dr. Leloir, Ciudad de Mendoza",
  ciudad: "Mendoza, Argentina",
  horario: "Lunes a Viernes · 9 a 19 hs",
  instagram: "https://www.instagram.com/melisaliberman.odontologa/",
  linkedin: "https://www.linkedin.com/in/melisa-liberman-odontologa/",
};

// Mensaje que aparece ya escrito al abrir WhatsApp desde cualquier botón
// del sitio. Se cambia acá una vez y cambia en toda la web.
export const MENSAJE_WA =
  "Hola, me contacto con Melisa Liberman, desde su sitio web. Quería realizar una consulta de sus servicios de odontología";

// Agenda del centro donde atiende. Todos los botones "Agendá tu turno"
// abren este link en una pestaña nueva.
export const AGENDA_URL =
  "https://www.mrturno.com/turn/create?from=microsite&professional_id=5ba39cc5-0c62-11ef-9448-d2d543cba71d&institution_subsidiary_id=6afacbca-9bbc-11ea-a720-de31932e4d21";

// =============================================================
//  TRATAMIENTOS
//  icono → nombre del símbolo dentro del archivo de íconos
// =============================================================
export const TRATAMIENTOS = [
  {
    id: "integral",
    nombre: "Odontología integral y preventiva",
    icono: "escudo",
    resumen: "Controles, limpiezas y diagnóstico completo para que nada se complique.",
    detalle:
      "La mejor odontología es la que evita el tratamiento grande. Cada consulta empieza con un diagnóstico completo de tus dientes, encías y mordida, para detectar a tiempo lo que todavía se resuelve fácil y planificar el resto con calma.",
    puntos: [
      "Diagnóstico clínico y radiográfico completo",
      "Limpieza y control de placa bacteriana",
      "Detección temprana de caries y problemas de encía",
      "Plan de cuidado adaptado a tus hábitos",
    ],
  },
  {
    id: "rehabilitacion",
    nombre: "Rehabilitación oral y prótesis",
    icono: "diente",
    resumen: "Recuperar la función de masticar, hablar y sonreír sin incomodidad.",
    detalle:
      "Es el área en la que Melisa hizo su posgrado en la Universidad de Buenos Aires. Cuando faltan piezas o el desgaste cambió la forma de morder, se reconstruye el conjunto: coronas, puentes y prótesis fijas o removibles pensadas para que la boca vuelva a funcionar como corresponde.",
    puntos: [
      "Coronas y puentes de porcelana y zirconio",
      "Prótesis fijas y removibles",
      "Rehabilitación de casos complejos por etapas",
      "Recuperación de la altura y la función masticatoria",
    ],
  },
  {
    id: "implantes",
    nombre: "Implantes dentales",
    icono: "alineador",
    resumen: "Reemplazar una pieza perdida sin tocar los dientes vecinos.",
    detalle:
      "Un implante devuelve la raíz que falta y sostiene una corona que se ve y funciona como un diente propio. Antes de colocarlo estudiamos el hueso y la mordida, porque un implante bien planificado dura décadas y uno apurado trae problemas.",
    puntos: [
      "Estudio previo del hueso y de la mordida",
      "Implantes unitarios y múltiples",
      "Coronas sobre implante a medida",
      "Controles de seguimiento a lo largo del tratamiento",
    ],
  },
  {
    id: "estetica",
    nombre: "Diseño de sonrisa y estética dental",
    icono: "brillo",
    resumen: "Una sonrisa que se vea natural y que siga siendo tuya.",
    detalle:
      "El diseño de sonrisa no es poner dientes iguales a todo el mundo: es encontrar la proporción que va con tu cara, tu edad y tu forma de hablar. Trabajamos con carillas, restauraciones estéticas y blanqueamiento según lo que cada caso necesite.",
    puntos: [
      "Diseño de sonrisa planificado antes de empezar",
      "Carillas y restauraciones estéticas",
      "Blanqueamiento dental profesional",
      "Corrección de forma, color y proporción",
    ],
  },
  {
    id: "restauraciones",
    nombre: "Restauraciones y tratamientos conservadores",
    icono: "brackets",
    resumen: "Arreglar lo que se puede salvar, con materiales de calidad.",
    detalle:
      "Antes de reemplazar, se conserva. Las restauraciones bien hechas devuelven la forma y el color del diente y aguantan años. La diferencia está en el material, en el aislamiento del campo y en el tiempo que se le dedica a cada una.",
    puntos: [
      "Restauraciones estéticas de composite",
      "Tratamiento de caries en todas sus etapas",
      "Reconstrucción de piezas muy destruidas",
      "Cirugía dental y extracciones cuando hacen falta",
    ],
  },
  {
    id: "urgencias",
    nombre: "Urgencias y pacientes con miedo al dentista",
    icono: "corazon",
    resumen: "Si hay dolor, se resuelve primero. Y si hay miedo, se avanza a tu ritmo.",
    detalle:
      "Con más de diez años de consultorio, Melisa trabaja mucho con pacientes que llegan con dolor, o que hace años que no van al dentista por miedo. En los dos casos la lógica es la misma: primero se calma lo urgente, se explica todo antes de hacerlo y se avanza al ritmo que cada uno pueda.",
    puntos: [
      "Dolor y urgencias resueltos con prioridad",
      "Primera consulta sin apuro, explicando cada paso",
      "Acompañamiento a pacientes con miedo al dentista",
      "Retomar el cuidado después de años sin controles",
    ],
  },
];

// =============================================================
//  TESTIMONIOS
//  Cuando haya reseñas reales, reemplazar estos textos.
//  Si no hay foto del paciente, dejar foto:"" y se muestra la inicial.
// =============================================================
export const TESTIMONIOS = [
  {
    texto:
      "Llegué con miedo después de años sin ir al dentista y Melisa me explicó todo antes de tocarme un diente. Terminamos una rehabilitación completa en etapas y hoy mastico como no lo hacía hace mucho.",
    autor: "Paciente de rehabilitación oral",
    detalle: "Mendoza",
    foto: "assets/img/testimonio-1.jpg?v=1",
  },
  {
    texto:
      "Me hizo el diseño de sonrisa antes del casamiento. Lo que más me gustó es que no quedó exagerado: se ve natural y nadie me pregunta qué me hice, solo me dicen que me veo bien.",
    autor: "Paciente de estética dental",
    detalle: "Mendoza",
    foto: "assets/img/testimonio-2.jpg?v=1",
  },
  {
    texto:
      "Perdí una muela y pensé que era un trámite eterno. Me explicó por qué había que estudiar el hueso primero, hicimos el implante con todos los controles y quedó perfecto.",
    autor: "Paciente de implantes",
    detalle: "Mendoza",
    foto: "assets/img/testimonio-3.jpg?v=1",
  },
];
