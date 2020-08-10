/*Laura Eiras
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar() {
  var marca;
  var precio;
  var peso;
  var tipo;
  var respuesta;
  var pesoTotalCompra;
  var banderaMarcaMAsCaraLiquidos;
  var marcaMAsCaraLiquidos;
  var banderaMaslivianoSolidos;
  var marcaMaslivianoSolidos;

  banderaMaslivianoSolidos = 0;
  banderaMarcaMAsCaraLiquidos = 0;
  pesoTotalCompra=0;
  respuesta = "s";

  while (respuesta == "s") {
    marca = prompt("Ingrese marca");
    precio = prompt("Ingrese precio");
    precio = parseInt(precio);
    while (isNaN(precio) || precio < 1) {
      precio = prompt("Ingrese precio valido");
      precio = parseInt(precio);
    }
    peso = prompt("Ingrese peso");
    peso = parseInt(precio);
    while (isNaN(peso) || peso < 1) {
      peso = prompt("Ingrese peso valido");
      peso = parseInt(peso);
    }
    tipo = prompt("Ingrese tipo");
    while (tipo != "solido" && tipo != "liquido") {
      tipo = prompt("Ingrese tipo solido o liquido");
    }

    
      pesoTotalCompra = pesoTotalCompra + peso;
  

    switch (tipo) {
      case "liquido":
        if (banderaMarcaMAsCaraLiquidos == 0) {
          banderaMarcaMAsCaraLiquidos = 1;
          marcaMAsCaraLiquidos = marca;
        } else {
          if (precio > marcaMAsCaraLiquidos) {
            marcaMAsCaraLiquidos = marca;
          }
        }
        break;
      case "solido":
        if (banderaMaslivianoSolidos == 0) {
          banderaMaslivianoSolidos = 1;
          marcaMaslivianoSolidos = marca;
        } else {
          if (peso < marcaMaslivianoSolidos) {
            marcaMaslivianoSolidos = marca;
          }

        }

        break;

    }


    respuesta = prompt("Desea seguir ponga s");
  }

  console.log("Peso total compra " + pesoTotalCompra + "kilogramos");
  console.log("Marca mas cara liquidos " + marcaMAsCaraLiquidos);
  console.log("Marca mas liviana solidos " + marcaMAsCaraLiquidos);

}
