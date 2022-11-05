let numero = 30;
let numero2 = 10;
let alrevez = "juan";
let vacio = '';
//let vocales = (a, e, i, o, u);

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

function suma(y) {
  for (let i = 1; i <= y; i++) {
    console.log(i)
  }
}

function palabra(p) {
  let i = p.length - 1;
  while (i >= 0) {
    vacio += p[i];
    --i
  }
  return vacio;
}


/*function changed_i(params) {

}*/

function main2() {
  console.log(par_impar(numero));
  console.log(suma(numero2));
  console.log(palabra(alrevez));
}
main2()