/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  let marca;
  let precio;
  let peso;
  let tipo;
  let resp = "s";

  let acumpeso = 0;
  let maxliquido;
  let marcamaxliquido;
  let flagli = 0;
  let flagso = 0;

  let minsolido;
  let marcaminsolido;

  do {

    marca = prompt("ingrese marca");
    precio = parseInt(prompt("ingrese precio"));
    peso = parseInt(prompt("ingrese precio en KG"));
    acumpeso = acumpeso + peso;

    do {
      tipo = prompt("ingrese tipo: solido/liquido");

      switch (tipo) {
        case "liquido":
          if (flagli == 0 || maxliquido < precio) {
            maxliquido = precio;
            marcamaxliquido = marca;
            flagli = 1;
          }
          break;
        case "solido":
          if (flagso == 0 || minsolido > precio) {
            minsolido = precio;
            marcaminsolido = marca;
            flagso = 1;
          }
          break;
      }


    } while (!(tipo == "solido" || tipo == "liquido"));


    resp = prompt("quiere ingresar otro producto? s/n");
  } while (resp == "s");

  //A
  alert("el peso total de la compra es: " + acumpeso);

  //B
  alert("la marca del mas caro de los liquido es: " + marcamaxliquido);

  //C
  alert("la marca del mas barato de los solidos es: " + marcaminsolido);

}
