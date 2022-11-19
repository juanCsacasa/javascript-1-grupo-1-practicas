//ejercicio1
function factorial(numeroFactorial) {
  if (numeroFactorial == 0) {
    return 1;
  }
  return numeroFactorial * factorial(numeroFactorial - 1);
}
//ejercicio2
function añoBisiesto(año) {
  if ((año % 4 == 0) && (año % 100 != 0)) {
    console.log("el año si es bisisesto");
  }
  else if (año % 400 == 0) {
    console.log("el año si es bisisesto");
  } else {
    console.log("el año no es bisisesto");
  }
}
//ejercicio3
function contLetras(palabra, letra) {
  let cont = 0;
  for (let i = 0; i < palabra.length; i++) { 
    if (palabra[i] == letra) {
      cont ++;
    }
  }
  console.log("la letra se repitio", cont, "veces")
}
//ejercicio4
function secretro(numbs) {
  let menor = 0;
  let mayor = 100;
  let intentos = Math.floor(Math.random() * (mayor - menor + 1) + menor);
  while (intentos != 0 && intentos != numbs) {
    if (intentos > numbs) {
      console.log("El numero", intentos, "es mayor, siga probando");
    }else{
      console.log("El numero", intentos, "es menor, siga probando");
    }
    intentos = Math.floor(Math.random() * (mayor - menor + 1) + menor);
  }
  if (intentos == numbs) {
    console.log("El numero", intentos, "es el secreto, felicidades!!! ");
  }else{
    console.log("El usuario ha detenido el programa usando 0");
  }
}
//ejercicio5
function espacioBlanco(texto) {
    let texto2 = '';
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] != ' ') {
            texto2+=texto[i];
        }
    }
    console.log("el texto sin espacios es", texto2);
}
//main
function main(){
  console.log("el factorial es", factorial(10));
  añoBisiesto(2024);
  contLetras("Messiiiiiiiiiiiiiii", "i");
  secretro(50);
  espacioBlanco('Hola me llamo, no me acuerdo');
}

main();

