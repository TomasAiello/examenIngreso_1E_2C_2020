/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexo;
	let lugar;
	let temp;
	let cant;
	let resp = "s";

	let contbari = 0;
	let contcata = 0;
	let contsalta = 0;

	let lugarmax = "";

	do {
		do {
			sexo = prompt("ingrese sexo del titular: s/n");
		} while (!(sexo == "m" || sexo == "f"));

		do {
			lugar = prompt("ingrese lugar de su estadia: bariloche/cataratas/salta");

			switch (lugar) {
				case "bariloche":
					contbari++;
					break;
				case "cataratas":
					contcata++;
					break;
				case "salta":
					contsalta++;
					break;

			}

		} while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta"))

		do {
			temp = prompt("ingrese la temporada en la que desea viajar: otoño/invierno/verano/primavera");
		} while (!(temp == "otoño" || temp == "invierno" || temp == "verano" || tipo == "primavera"));

		cant = parseInt(prompt("ingrese la cantidad de personas que viajan"));



		resp = prompt("quiere ingresar otra estadia? s/n");
	} while (resp == "s")

	//A

	if (contsalta > contcata && contsalta > contbari) {
		lugarmax = "salta";
	}
	else if (contcata > contsalta && contcata > contbari) {
		lugarmax = "salta";
	}
	else{
		lugarmax = "bariloche";
	}

	alert("el lugar mas elegido es: " + lugarmax);

	//B
	



}
