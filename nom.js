let numero = 30;
let numero2 = 10;
let alrevez = "juan";
let vacio = '';
let params = 'los ajas'

//ejercicio1
function par_impar(x) {
  if (x % 2 == 0) {
    console.log("es par");
  } else {
    console.log("es impar");
  }
  if (x % 3 == 0) {
    console.log("es divisible entre 3");
  } else {
    console.log("no es divisible entre 3");
  }
  if (x % 5 == 0) {
    console.log("es divisible entre 5");
  } else {
    console.log("no es divisible entre 5");
  }
}
//ejercicio2
function suma(y) {
  let suma = 0;
  for (let i = 1; i <= y; i++) {
    suma += i
    //console.log(i)
  }
  return suma;
}
//ejercicio3
function palabra(p) {
  let i = p.length - 1;
  while (i >= 0) {
    vacio += p[i];
    --i
  }
  return vacio;
}
//ejercicio4_solucion profe julio
function changed_i(params) {
let resultado = '';

  for (let i = 0;  i < params.length; i++) {
    let letra = params[i];

    if (letra == 'a' || letra == 'e'  || letra == 'i' ||letra == 'o'  || letra == 'u' ) {
      resultado += 'i';
    }else{
      resultado += letra;
    }
  }
  return resultado
}

function main2() {
  par_impar(numero);
  console.log(suma(numero2));
  console.log(palabra(alrevez));
  console.log(changed_i(params))
}
main2()