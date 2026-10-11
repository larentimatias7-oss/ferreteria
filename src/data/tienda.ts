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
  razonSocial: string;
  cuit: string;
  direccion: string;
  direccionDetalle: string;
  telefonoLlamadas: string;
  whatsappInternacional: string;
  whatsappDisplay: string;
  email: string;
  horarioSemana: string;
  horarioSabado: string;
  googleMapsUrl: string;
}

export const tienda = {
  negocio: {
    nombre: "Ferretería H",
    razonSocial: "Ferretería H S.R.L.",
    cuit: "30-71829304-8",
    direccion: "Ruta Provincial 26S km 2",
    direccionDetalle: "Acceso directo asfaltado para camiones y acoplados (Frente al corredor logístico)",
    telefonoLlamadas: "341-777777",
    whatsappInternacional: "549341777777",
    whatsappDisplay: "+54 9 341 777777",
    email: "presupuestos@ferreteriah.com.ar",
    horarioSemana: "Lunes a Viernes: 07:30 a 18:30 hs (Horario corrido)",
    horarioSabado: "Sábados: 08:00 a 13:00 hs",
    googleMapsUrl: "https://maps.google.com/?q=Ruta+Provincial+26S+km+2",
  } satisfies DatosNegocio,

  productoDestacado: {
    id: "sherwin-20l",
    nombre: "Impermeabilizante Techo Terrazas Rojo 20lt. Sherwin-Williams",
    categoria: "Pinturas & Impermeabilización Profesional",
    descripcion: "Membrana elástica transitable de alta viscosidad. Evita filtraciones y goteras. Apto sobre membrana aluminizada.",
    precio: 190000,
    precioAnterior: 235000,
    moneda: "$",
    imagen: "/sherwin-20l.jpg",
    linkMercadoPago: "https://mpago.la/ejemplo",
    mensajeWhatsApp: "Hola Ferretería H, quiero comprar el Impermeabilizante Sherwin-Williams 20L a $190.000.",
    badge: "★ OFERTA ESPECIAL",
    badgeTipo: "oferta",
    specs: [
      { label: "Rendimiento", valor: "1.5 kg / m²" },
      { label: "Acabado", valor: "Rojo Teja" },
      { label: "Envase", valor: "Balde 20 Litros" }
    ],
    unidad: "Balde 20 Litros",
  } satisfies Producto,

  catalogo: [
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
      mensajeWhatsApp: "Hola Ferretería H, quiero comprar la Amoladora Angular DeWalt 850W a $118.500.",
      badge: "OFERTA HERRAMIENTAS",
      badgeTipo: "oferta",
      unidad: "Unidad en caja",
    },
    {
      id: "klaukol-impermeable-30kg",
      nombre: "Adhesivo Klaukol Impermeable 30kg",
      categoria: "Adhesivos Obra",
      descripcion: "Mezcla adhesiva impermeable para colocación de pisos y revestimientos cerámicos exteriores en obra civil.",
      precio: 18900,
      precioAnterior: 22800,
      moneda: "$",
      imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmwIxcu_iPubFSOmSKRQW5WnoONFOXIqGNRzfd-Go13yI1hkdOv0auy4Ai6pW3fzhaAZy4-dUOJZEsIeFbgqU5FU9s0FLbgXT66R4BwRe2Aurpa8DO23panmRiUWPnNaYI6p7bqttNUadM43fIc4wfX1lYlp_RNw2ypbeg2l7sZf99_9F2W8D_5XSYBuDNjcyWeV2iwpYoZvxKYRDlGeXLWpdpDqD2408gYZIyeGoyNmDbuEHmnmATyg",
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola Ferretería H, quiero comprar el Adhesivo Klaukol Impermeable 30kg a $18.900.",
      badge: "STOCK DISPONIBLE",
      badgeTipo: "stock",
      unidad: "Bolsa x 30kg",
    },
    {
      id: "discos-bosch-115mm",
      nombre: "Pack 10 Discos Corte Bosch 115x1.0mm",
      categoria: "Abrasivos & Taller",
      descripcion: "Corte rápido y limpio en metales y acero inoxidable sin rebabas. Estuche metálico protector.",
      precio: 14200,
      precioAnterior: 17500,
      moneda: "$",
      imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7amkeUDMrem3IBusGKU8gkXxQagHFhJLQd3nZt7ERUztkxEK00oYdk73-UTx-5z6hFpS_LP6mbOeZbpsZZ7He-GEY_IJe3GQnnU7tQ3iQPdW_LjSIfNOAfuZCPu94FWRVyi7GgPPORrDHOo0BvsXMbRWtVCXBX9a-qoTOVdaa3Kmh2G_8iu5mkcJGdNbzavwO_r9WmswZV3-u6K3tbHP8xFj8GZv5bSeBmFw-tQp79sfxGvKJD0JQbw",
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola Ferretería H, quiero comprar el Pack 10 Discos Corte Bosch a $14.200.",
      badge: "COMBO TALLER",
      badgeTipo: "combo",
      unidad: "Pack cerrado 10 u.",
    },
    {
      id: "latex-antihongo-20l",
      nombre: "Pintura Látex Int/Ext Antihongo 20L",
      categoria: "Pinturas Obra",
      descripcion: "Poder cubritivo superior, ultra lavable con aditivo antihongo de alta resistencia ambiental.",
      precio: 84500,
      precioAnterior: 108000,
      moneda: "$",
      imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHuHXhidsTSCarNkKFaMYvvqSbnlWNOFHHuG5xProi9ZhCbkLtWMkEBfLsq6WTqEb8peVMmc9j1UKtG8_KJdmirr9sj-F86cBDJO1oIYYxFSIl5l3HrcaVqnNWbn5qrsFgmvkQj1vPXcmM72cKXUjNCwkPALLB4AIjy9WwO-c7CVUcJIEA-SwL-0ojo0rmcJOtBuG6_JXantzR-sfogJLfsisV0Ryy3_tWgriwU1z_U04hGp2Jw5HPzw",
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola Ferretería H, quiero comprar la Pintura Látex Antihongo 20L a $84.500.",
      badge: "PRECIO GREMIO",
      badgeTipo: "gremio",
      unidad: "Balde de 20L",
    },
    {
      id: "cemento-lomanegra-50kg",
      nombre: "Cemento Portland Loma Negra 50kg",
      categoria: "Materiales Gruesos",
      descripcion: "Cemento tradicional tipo CPC 40 para todo tipo de hormigones, revoques y obras estructurales.",
      precio: 12500,
      precioAnterior: 14500,
      moneda: "$",
      imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmwIxcu_iPubFSOmSKRQW5WnoONFOXIqGNRzfd-Go13yI1hkdOv0auy4Ai6pW3fzhaAZy4-dUOJZEsIeFbgqU5FU9s0FLbgXT66R4BwRe2Aurpa8DO23panmRiUWPnNaYI6p7bqttNUadM43fIc4wfX1lYlp_RNw2ypbeg2l7sZf99_9F2W8D_5XSYBuDNjcyWeV2iwpYoZvxKYRDlGeXLWpdpDqD2408gYZIyeGoyNmDbuEHmnmATyg",
      linkMercadoPago: "https://mpago.la/ejemplo",
      mensajeWhatsApp: "Hola Ferretería H, quiero consultar stock y comprar Cemento Loma Negra 50kg a $12.500.",
      badge: "ACOPIO ASEGURADO",
      badgeTipo: "stock",
      unidad: "Bolsa x 50kg",
    }
  ] satisfies Producto[],
};

export function formatearMoneda(monto: number, moneda: string = "$"): string {
  return `${moneda}${monto.toLocaleString("es-AR")}`;
}

export function buildWhatsAppUrl(telefono: string, mensaje: string): string {
  return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
}
