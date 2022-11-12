function mate(valor) {
  let contador = 0;
  let maximo = 0;
  let minimo = 0;
  let mediana = 0;


  for (let i = 0; i < valor.length; i++) {
    contador = contador + valor[i];
    if (i == 0) {
      maximo = valor[i];
      minimo = valor[i];
    }
    if (maximo < valor[i]) {
      maximo = valor[i];
    } else if (minimo > valor[i]) {
      minimo = valor[i];
    }
  }
  if (valor.length % 2 == 0) {
    mediana = (valor[valor.length / 2] + (valor[valor.length / 2 - 1])) / 2;
  } else {
    mediana = (valor.length + 1) / 2;
  }
  return [(contador / valor.length), maximo, minimo, mediana];
}


console.log(mate([1, 2, 3, 4, 5, 6, 7, 8, 9]));