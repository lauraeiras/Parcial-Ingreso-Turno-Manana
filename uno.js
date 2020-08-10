/*Eiras laura
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	var nombre;
	var temperatura;
	var sexo;
	var edad;
	var contador;
	var contadorFemenino;
	var contadorMasculino;
	var contadorEdad;
	var acumuladorEdad;
	var promedio;
	var temperaturaMujer;

	acumuladorEdad=0;
	contadorEdad=0;
	contadorFemenino=0;
	contadorMasculino=0;
	contador = 0;



	while (contador < 3) {
		nombre = prompt("Ingrese nombre");
		while (!isNaN(nombre)) {
			nombre = prompt("Error Ingrese nombre");
		}
		temperatura = prompt("Ingrese temperatura");
		temperatura = parseInt(temperatura);
		while (isNaN(temperatura) || temperatura < 1) {
			temperatura = prompt("Error, ingrese temperatura nueva");
			temperatura = parseInt(temperatura);
		}
		sexo = prompt("Ingrese sexo f/m");
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Error,Ingrese sexo f/m");
		}
		edad = prompt("Ingrese edad");
		edad = parseInt(edad);
		while (isNaN(edad) || edad < 1) {
			edad = prompt("Error, ingrese edad valida");
			edad = parseInt(edad);
		}

		if(sexo == "f"){
			contadorFemenino++;
		}else{
			contadorMasculino++;
		}

		if(edad>=0){
			contadorEdad++;
			acumuladorEdad=acumuladorEdad+edad;
		}

		if(contador==0 && sexo=="f"){
			temperaturaMujer=nombre;
		}else{
			if(temperatura > temperaturaMujer){
				temperaturaMujer=nombre;
				console.log("la mujer con mas temperatura es "+temperaturaMujer);
			}
		}
		



		contador++;

	}// fin while
	promedio=acumuladorEdad/contadorEdad;

	document.write("Cantidad de mujeres "+contadorFemenino+" Cantidad de hombres "+contadorMasculino+"<br>");
	document.write("Promedio de edad tota "+promedio+"<br>");


}
