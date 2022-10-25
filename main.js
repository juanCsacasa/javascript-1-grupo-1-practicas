/*ejercicio2 */
let polindormo = '';
let poli = "mama";

/*ejercicio 3 */
let array = [[1, 0, 0], [0, 1, 1], [0, 1, 0],];
let count = 0;

/*ejercicio 5 */
let star = ' ';



function main() {

  //numero uno
  let lista = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
  console.log(Math.max(...lista))



  //numero dos
  function palabra() {
    for (let i = poli.length - 1; i >= 0; i--) {
      polindormo += poli[i]
    } if (poli == polindormo) {
      console.log('Es polindromo');
    } else {
      console.log("No es polindromo");
    }

  }
  palabra()


  //numero tres. 
  function cerosRepetidos() {

    for (let i = 0; i < array.length; i++) {
      for (let k = 0; k < array.length; k++) {
        for (let m = 0; m < array.length; m++) {
          if (array[i][k][m] == 0) {
            count++
          }
          return + count
        }
      }
    }
  }
  console.log(cerosRepetidos())


  /*//numero cuatro.
  function repetidos(numero) {
    let val = [];
    for (let i = 0; i < numero.length; i++) {
  
    }
  }
  repetidos()*/



  //Numkero cinco.
  function triangulo(numero) {
    for (let i = 0; i < numero; i++) {
      star += ' * ';
      console.log(star);
    }
  }
  triangulo(6);


}

main();
