export const Productos = [
  {
    id: "01",
    sku: "",
    descripcion: "Cafe Tostado Chocolate en Bolsa Yute",
    descripcionDetallada:
      "¡Descubre una deliciosa combinación de sabores de nuestros granos de café tostados bañados en Chocolate en una hermosa bolsa de yute ! Con un peso de 200 g, esta exquisita mezcla de café y chocolate te brindará una experiencia única y llena de sabor. Ideal para disfrutar en cualquier momento del día o para regalar a tus seres queridos. ¡No te pierdas la oportunidad de deleitar tu paladar con este irresistible manjar!",
    precio: 6990,
    stock: 10,
    urlImg: "https://merello.cl/wp-content/uploads/2020/03/SACO-DE-CAFE-1.jpg",
    estatus: true,
    categoria: "cafe",
  },
  {
    id: "02",
    sku: "",
    descripcion: "Cabezas de ajo negro - Bolsa de 100gr",
    descripcionDetallada:
      "Aproximadamente 3 cabezas de ajo negro UXO. Se recomienda utilizar en las preparaciones de exquisitos platos o comer directamente.",
    precio: 25000,
    stock: 10,
    urlImg:
      "https://ajonegrouxo.com/wp-content/uploads/2023/10/2-1-Esencial-Cabezas-de-ajo-negro-%E2%80%93-Bolsa-de-200gr.-Medium-300x300.png",
    estatus: true,
    categoria: "ajo",
  },
  {
    id: "03",
    sku: "",
    descripcion: "Miel pura 1Kg",
    descripcionDetallada:
      "Líquido dulce que fabrican las abejas usando el néctar de las plantas con flores. Existen alrededor de 320 tipos diferentes de miel, que varían en color, aroma y sabor.",
    precio: 10000,
    stock: 10,
    urlImg:
      "https://dojiw2m9tvv09.cloudfront.net/93845/product/X_miel2342.png?9&time=1751231939",
    estatus: true,
    categoria: "extra",
  },
    {
    id: "04",
    sku: "",
    descripcion: "Café Valle amazónico 500g",
    descripcionDetallada:
      "Cada bolsa de 500 gramos de Café Valle Amazónico es el resultado de un cuidadoso proceso que honra la tradición cafetera y la riqueza natural de su origen. La combinación de la altitud, el clima amazónico y la selección de la variedad Arábica, específicamente las subvariedades Castillo, Catimor y Bourbon, contribuyen a su perfil de sabor distintivo y su calidad excepcional.",
    precio: 20000,
    stock: 10,
    urlImg: "https://nomadbrew.cl/cdn/shop/files/Gemini_Generated_Image_xjv1uvxjv1uvxjv1.png?v=1750180045&width=600",
    estatus: true,
    categoria: "cafe",
  },
];

export const Usuario = [
  {
    id: 1,
    idUsuario: 1,
    nombre_completo: "Pepito Ignacio Pérez Gómez",
    telefono: 12345678,
    email: "usuarioPepito@test.cl",
    password: "secretKey",
    url_avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEs7QDULIpNjmTV7oIZwoEKeS-nmASLZLYQ&s",
    historial: [
      {
        id: 1,
        num_orden: "XXXX-1",
        cantidad_vendida: 3,
        precio_producto: 41990,
        fecha_compra: "01072025",
      },
      {
        id: 2,
        num_orden: "XXXX-2",
        cantidad_vendida: 6,
        precio_producto: 83980,
        fecha_compra: "04072025",
      },
            {
        id: 3,
        num_orden: "XXXX-3",
        cantidad_vendida: 9,
        precio_producto: 125970,
        fecha_compra: "10072025",
      },
    ],
  },
];
