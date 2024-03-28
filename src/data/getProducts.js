const productos = [
    {
      id: "aaa123",
      nombre: "Spin Air",
      descripcion: "Valija Rígida Spin Air Spinner 55/20 Exp Chica Negro",
      categoria: "Valija rígida",
      size: "Cabina",
      precio: "$212583"
    },
    {
      id: "aaa223",
      nombre: "Octolite",
      descripcion: "Valija Rígida Octolite SPINNER 55/20 EXP Negro Cabina",
      categoria: "Valija rígida",
      size: "Cabina",
      precio: "$301990"
    }
  ]

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
    }, 2000);
  })

  export default getProducts