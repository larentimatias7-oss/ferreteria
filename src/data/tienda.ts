export interface ComboApertura {
  id: string;
  nombre: string;
  subtitulo: string;
  categoria: string;
  precio: number;
  precioAnterior: number;
  moneda: string;
  imagen: string;
  badge: string;
  badgeColor: 'emerald' | 'amber' | 'blue' | 'rose' | 'slate';
  iconoColor: string;
  incluye: string[];
  specs: { label: string; valor: string }[];
  linkMercadoPago: string;
  mensajeWhatsApp: string;
}

export interface Producto {
  id: string;
  nombre: string;
  categoria?: string;
  descripcion: string;
  precio: number;
  precioAnterior?: number;
  moneda: string;
  imagen: string;
  linkMercadoPago: string;
  mensajeWhatsApp: string;
  badge?: string;
  badgeTipo?: 'oferta' | 'stock' | 'gremio' | 'combo';
  specs?: { label: string; valor: string }[];
  unidad?: string;
}

export interface DatosNegocio {
  nombre: string;
  nombreCorto: string;
  razonSocial: string;
  slogan: string;
  lema: string;
  evento: string;
  cuit: string;
  direccion: string;
  localidad: string;
  direccionCompleta: string;
  direccionDetalle: string;
  telefonoLlamadas: string;
  whatsappInternacional: string;
  whatsappDisplay: string;
  email: string;
  horarioSemana: string;
  horarioSabado: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  folletoUrl: string;
}

export const tienda = {
  negocio: {
    nombre: "H-Ferretería",
    nombreCorto: "Ferretería H",
    razonSocial: "H-Ferretería",
    slogan: "Tu proyecto, en las mejores manos",
    lema: "Construí, Repará, Mejorá tu hogar",
    evento: "Gran Apertura • Te esperamos en Andino",
    cuit: "30-71829304-8",
    direccion: "Ana de Manguiaterra 45",
    localidad: "Andino, Santa Fe",
    direccionCompleta: "Ana de Manguiaterra 45, Andino - Santa Fe",
    direccionDetalle: "Pueblo Andino, Santa Fe (Cerca de Construcciones Harriet — referencia en Google Maps)",
    telefonoLlamadas: "0341 6 587861",
    whatsappInternacional: "5493416587861",
    whatsappDisplay: "0341 6 587861",
    email: "consultas@ferreteriah.com.ar",
    horarioSemana: "Lunes a Viernes: 08:00 a 18:30 hs (Horario corrido)",
    horarioSabado: "Sábados: 08:00 a 13:00 hs",
    googleMapsUrl: "https://www.google.com/maps/place/Construcciones+Harriet/@-32.6361526,-60.8361207,309m/data=!3m1!1e3!4m6!3m5!1s0x95b6691777eacb65:0xa1c0e5ef02ef6b44!8m2!3d-32.6361488!4d-60.835053!16s%2Fg%2F11h_4wpknx",
    googleMapsEmbed: "https://maps.google.com/maps?q=Construcciones%20Harriet,%20Andino,%20Santa%20Fe&t=&z=16&ie=UTF8&iwloc=&output=embed",
    folletoUrl: "/images/folleto-limpio.webp",
  } satisfies DatosNegocio,

  categorias: [
    { nombre: "Construcción", icono: "foundation", desc: "Áridos, cementos, hierros y mampostería" },
    { nombre: "Herramientas", icono: "construction", desc: "Eléctricas, manuales y de banco" },
    { nombre: "Electricidad", icono: "bolt", desc: "Conductores, térmicas e iluminación LED" },
    { nombre: "Plomería", icono: "plumbing", desc: "Termofusión, cañerías y desagües" },
    { nombre: "Pinturas", icono: "format_paint", desc: "Impermeabilizantes, látex y esmaltes" },
    { nombre: "Hogar y Jardín", icono: "yard", desc: "Riego, bombas y mantenimiento" },
  ],

  pilares: [
    {
      titulo: "Marcas de Confianza",
      descripcion: "Distribuidores de Sika, Megaflex, DeWalt, Bosch, Klaukol y líderes del sector.",
      icono: "verified",
      tag: "100% Originales"
    },
    {
      titulo: "Los Mejores Precios",
      descripcion: "Precios directos de fábrica, promociones de apertura y descuentos por volumen de gremio.",
      icono: "sell",
      tag: "Ahorro Real"
    },
    {
      titulo: "Varios Medios de Pago",
      descripcion: "Efectivo en mostrador, transferencias, tarjetas de débito y crédito con cuotas.",
      icono: "credit_card",
      tag: "Facilidades"
    },
    {
      titulo: "Asesoramiento Personalizado",
      descripcion: "Atención técnica especializada para orientarte en la solución justa para tu proyecto u obra.",
      icono: "support_agent",
      tag: "Atención Experta"
    }
  ],

  combosApertura: [
    {
      id: "combo-sikafill-techos",
      nombre: "Combo SikaFill Techos",
      subtitulo: "Solución económica y confiable.",
      categoria: "Impermeabilización Techos",
      precio: 197000,
      precioAnterior: 245000,
      moneda: "$",
      imagen: "/images/combos/sikafill-techos-20kg.png",
      badge: "PROMOCIÓN APERTURA",
      badgeColor: "emerald",
      iconoColor: "#16a34a",
      incluye: [
        "1 Tarro SikaFill Techos 20 kg",
        "1 Rodillo lana 22 cm",
        "1 Pincel 2\"",
        "1 Bandeja plástica para pintor",
        "1 Rollo manta geotextil 25 cm x 25 m"
      ],
      specs: [
        { label: "Capacidad", valor: "20 Kg" },
        { label: "Manta", valor: "25 m" },
        { label: "Rodillo", valor: "22 cm lana" }
      ],
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola H-Ferretería! Quiero encargar el Combo SikaFill Techos a $197.000 de la promoción de apertura."
    },
    {
      id: "combo-sikafill-fibrado",
      nombre: "Combo SikaFill Fibrado",
      subtitulo: "Mayor resistencia y durabilidad.",
      categoria: "Impermeabilización Fibrada",
      precio: 219000,
      precioAnterior: 275000,
      moneda: "$",
      imagen: "/images/combos/sikafill-fibrado-20kg.webp",
      badge: "MÁS RESISTENTE",
      badgeColor: "amber",
      iconoColor: "#ea580c",
      incluye: [
        "1 Tarro SikaFill Fibrado 20 kg",
        "1 Rodillo lana 22 cm",
        "1 Pincel 2\"",
        "1 Bandeja plástica para pintor",
        "1 Rollo manta geotextil 25 cm x 25 m"
      ],
      specs: [
        { label: "Fórmula", valor: "Con microfibras" },
        { label: "Capacidad", valor: "20 Kg" },
        { label: "Manta", valor: "25 m" }
      ],
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola H-Ferretería! Quiero encargar el Combo SikaFill Fibrado a $219.000 de la promoción de apertura."
    },
    {
      id: "combo-sikalastic-560",
      nombre: "Combo Sikalastic 560",
      subtitulo: "Máximo rendimiento y protección.",
      categoria: "Membrana Poliuretánica Premium",
      precio: 314000,
      precioAnterior: 385000,
      moneda: "$",
      imagen: "/images/combos/sikalastic-560-20kg.jpg",
      badge: "MÁXIMA CALIDAD",
      badgeColor: "blue",
      iconoColor: "#0284c7",
      incluye: [
        "1 Tarro Sikalastic 560 20 kg",
        "1 Rodillo lana 22 cm",
        "1 Pincel 2\"",
        "1 Bandeja plástica para pintor",
        "1 Rollo manta geotextil 25 cm x 25 m"
      ],
      specs: [
        { label: "Tecnología", valor: "Poliuretano híbrido" },
        { label: "Capacidad", valor: "20 Kg" },
        { label: "Protección", valor: "UV Extrema" }
      ],
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola H-Ferretería! Quiero encargar el Combo Sikalastic 560 a $314.000 de la promoción de apertura."
    },
    {
      id: "combo-manta-geotextil",
      nombre: "Combo Manta Geotextil",
      subtitulo: "Refuerzo para mayor seguridad.",
      categoria: "Refuerzo Estructural",
      precio: 99000,
      precioAnterior: 125000,
      moneda: "$",
      imagen: "/images/combos/manta-geotextil-1x25m.webp",
      badge: "KIT REFUERZO",
      badgeColor: "rose",
      iconoColor: "#e11d48",
      incluye: [
        "1 Rollo manta geotextil 1 m x 25 m",
        "1 Cúter profesional",
        "1 Cinta métrica 5 m",
        "1 Rodillo auxiliar"
      ],
      specs: [
        { label: "Medidas", valor: "1 m x 25 m" },
        { label: "Rinde", valor: "25 m²" },
        { label: "Kit", valor: "4 piezas" }
      ],
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola H-Ferretería! Quiero encargar el Combo Manta Geotextil a $99.000 de la promoción de apertura."
    },
    {
      id: "combo-membrana-megaflex",
      nombre: "Combo Membrana Asfáltica Megaflex",
      subtitulo: "Sistema tradicional de alta durabilidad.",
      categoria: "Membrana Asfáltica No Crack 4mm",
      precio: 235000,
      precioAnterior: 290000,
      moneda: "$",
      imagen: "/images/combos/megaflex-megalum-4mm.jpg",
      badge: "CALIDAD MEGAFLEX",
      badgeColor: "slate",
      iconoColor: "#1e293b",
      incluye: [
        "1 Rollo membrana Megaflex Megalum No Crack 4 mm (1 x 10 m)",
        "1 Soplete con manguera",
        "1 Guantes de trabajo (par)",
        "1 Cepillo de alambre",
        "1 Espátula"
      ],
      specs: [
        { label: "Espesor", valor: "4 mm No Crack" },
        { label: "Rollo", valor: "1 x 10 m (10 m²)" },
        { label: "Kit instalación", valor: "Soplete + Accesorios" }
      ],
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola H-Ferretería! Quiero encargar el Combo Membrana Megaflex a $235.000 de la promoción de apertura."
    }
  ] satisfies ComboApertura[],

  productoDestacado: {
    id: "combo-sikafill-fibrado",
    nombre: "Combo SikaFill Fibrado 20kg + Kit Completo Pintor",
    categoria: "Promoción Estrella Gran Apertura",
    descripcion: "Mayor resistencia y durabilidad. Membrana líquida acrílica elástica con microfibras incorporadas para techos y terrazas. Incluye rodillo lana 22cm, pincel 2\", bandeja plástica y rollo manta geotextil 25cm x 25m.",
    precio: 219000,
    precioAnterior: 275000,
    moneda: "$",
    imagen: "/images/combos/sikafill-fibrado-20kg.webp",
    linkMercadoPago: "https://mpago.la/ejemplo",
    mensajeWhatsApp: "Hola H-Ferretería! Quiero encargar la Promoción Estrella: Combo SikaFill Fibrado a $219.000.",
    badge: "★ PROMO ESTRELLA APERTURA",
    badgeTipo: "oferta",
    specs: [
      { label: "Contenido", valor: "Balde 20 Kg" },
      { label: "Fibras", valor: "Microfibras Sika" },
      { label: "Kit Pintor", valor: "4 Accesorios + Manta" }
    ],
    unidad: "Combo Completo Listo para Aplicar",
  } satisfies Producto,

  catalogo: [
    {
      id: "combo-sikafill-techos-item",
      nombre: "Combo SikaFill Techos 20kg + Kit",
      categoria: "Impermeabilizantes",
      descripcion: "Solución económica y confiable para techos y terrazas con 4 accesorios de aplicación y rollo de geotextil.",
      precio: 197000,
      precioAnterior: 245000,
      moneda: "$",
      imagen: "/images/combos/sikafill-techos-20kg.png",
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola H-Ferretería, quiero comprar el Combo SikaFill Techos 20kg a $197.000.",
      badge: "PRECIO APERTURA",
      badgeTipo: "oferta",
      unidad: "Combo balde 20kg + kit",
    },
    {
      id: "combo-sikalastic-560-item",
      nombre: "Combo Sikalastic 560 Poliuretánico 20kg",
      categoria: "Poliuretano Premium",
      descripcion: "Máximo rendimiento y protección impermeable para cubiertas transitables con kit completo de aplicación.",
      precio: 314000,
      precioAnterior: 385000,
      moneda: "$",
      imagen: "/images/combos/sikalastic-560-20kg.jpg",
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola H-Ferretería, quiero comprar el Combo Sikalastic 560 a $314.000.",
      badge: "MÁXIMA DURABILIDAD",
      badgeTipo: "oferta",
      unidad: "Combo balde 20kg + kit",
    },
    {
      id: "combo-manta-geotextil-item",
      nombre: "Combo Manta Geotextil 1x25m + Herramientas",
      categoria: "Refuerzo Techos",
      descripcion: "Rollo de manta geotextil de 1m x 25m (25m²) con cúter profesional, cinta métrica de 5m y rodillo auxiliar.",
      precio: 99000,
      precioAnterior: 125000,
      moneda: "$",
      imagen: "/images/combos/manta-geotextil-1x25m.webp",
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola H-Ferretería, quiero comprar el Combo Manta Geotextil a $99.000.",
      badge: "KIT COMPLETO",
      badgeTipo: "combo",
      unidad: "Rollo 25m² + 3 herramientas",
    },
    {
      id: "combo-megaflex-item",
      nombre: "Combo Membrana Megaflex No Crack 4mm + Soplete",
      categoria: "Membrana Asfáltica",
      descripcion: "Membrana Megaflex Megalum No Crack 4mm con soplete, manguera, guantes, cepillo de alambre y espátula.",
      precio: 235000,
      precioAnterior: 290000,
      moneda: "$",
      imagen: "/images/combos/megaflex-megalum-4mm.jpg",
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola H-Ferretería, quiero comprar el Combo Membrana Megaflex a $235.000.",
      badge: "CALIDAD OBRA",
      badgeTipo: "gremio",
      unidad: "Rollo 10m² + equipo soplete",
    },
    {
      id: "amoladora-dewalt-850w",
      nombre: "Amoladora Angular 115mm 850W DeWalt",
      categoria: "Herramientas Eléctricas",
      descripcion: "Motor de alta durabilidad con protección contra sobrecarga y guarda de ajuste rápido. Ideal para herrería y obra.",
      precio: 118500,
      precioAnterior: 142000,
      moneda: "$",
      imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuC20apnuw7mcSfd2f1T57FifAYoGFjuE6AEb0eoKKGmTYE1CylZtCgPY4zUrYcO23rrpC4p-NyqPj7FRcRTWhDvwCCJpW0QiufpsLA2Mp0zUrR6WiyC7SzFhH9vJRITLht823svdlqVvtgAxSqYKXFMJD-cYK_5pa2d_ITyJ2kxij06O_pW93IUBDZ1HTFW1y_6atteEZ2-FEH18PQl5ReHzJzGBxDXRUawE0gfiwVeh6DURxcEf_2ZSg",
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola H-Ferretería, quiero comprar la Amoladora Angular DeWalt 850W a $118.500.",
      badge: "HERRAMIENTAS",
      badgeTipo: "stock",
      unidad: "Unidad en caja",
    }
  ] satisfies Producto[],
};

export function formatearMoneda(monto: number, moneda: string = "$"): string {
  return `${moneda} ${monto.toLocaleString("es-AR")}`;
}

export function buildWhatsAppUrl(telefono: string, mensaje: string): string {
  return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
}
