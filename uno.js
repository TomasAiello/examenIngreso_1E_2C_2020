/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nom;
	let peso;
	let sexo;
	let edad;

	let contf = 0; // contador de femenino
	let acumedad = 0;
	let promedio;
	let maxpeso;
	let flag = 0;
	let nommaxpeso;

	for (let i = 0; i < 5; i++) {

		nom = prompt("ingrese nombre");
		peso = parseInt(prompt("ingrese peso"));


		do {
			sexo = prompt("ingreso sexo: f/m");

			if (sexo == "f") {
				contf++;
			}
			else {
				if (flago == 0 || maxpeso < peso) {
					maxpeso = peso;
					nommaxpeso = nom;
				}
			}

		} while (!(sexo == "f" || sexo == "m"));

		edad = parseInt(prompt("ingrese edad"));
		acumedad = acumedad + edad;
		promedio = acumedad / 5;


	}

	//A
	document.write("la cantidad de mujeres es: " + contf);

	//B
	document.write("la edad promedio en total es: " + promedio);

	//C
	document.write("el hombre mas pesado es: " + nommaxpeso + "y su peso es: " + maxpeso);








}
