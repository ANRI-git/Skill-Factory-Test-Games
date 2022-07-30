// No cambies los nombres de las funciones.

export function devolverPrimerElemento(array) {
  // Tu código:

  return array[0];
}

export function devolverUltimoElemento(array) {
  // Tu código:

  return array[array.length - 1];
}

export function obtenerLargoDelArray(array) {
  // Tu código:

  return array.length;
}

export function incrementarPorUno(array) {
  // Tu código:

  return array.map(e => e + 1);
}

export function agregarItemAlFinalDelArray(array, elemento) {
  // Tu código:
  array.push(elemento)
  return array;
}

export function agregarItemAlComienzoDelArray(array, elemento) {
  /// Tu código:
  array.unshift(elemento)
  return array;
}

export function dePalabrasAFrase(palabras) {
  // Tu código:

  return palabras.join(" ");
}

export function arrayContiene(array, elemento) {
  // Tu código:

  return array.includes(elemento);
}

export function agregarNumeros(numeros) {
  // Tu código:
 
  return numeros.reduce((a, b) => a + b, 0);
}

export function promedioResultadosTest(resultadosTest) {
  // Tu código:

  return resultadosTest.reduce((a, b) => a + b, 0) / resultadosTest.length;
}

export function numeroMasGrande(numeros) {
  // Tu código:
 
  return Math.max(...numeros);
}

// export function multiplicarArgumentos() {
//   // Tu código:

//   return;
// }

export function cuentoElementos(arreglo) {
  // Tu código:
 let counter = 0;
 for (const num of arreglo) {
   if (num > 18) counter++;
 }
 return counter;
}

export function diaDeLaSemana(numeroDeDia) {
  // Tu código:

  return numeroDeDia < 7 && numeroDeDia > 1 ? 'Es dia Laboral' : 'Es fin de semana';
}

export function empiezaConNueve(n) {
  // Tu código:
  return (String(n).split("").map((num)=>{
    return Number(num)
  }))[0] === 9;
}

export function todosIguales(arreglo) {
  // Tu código:

  return [...new Set(arreglo)].length === 1;
}

export function mesesDelAño(array) {
  // Tu código:
  const ok = ['Enero', 'Noviembre', 'Marzo'];
  let arrayOk = [...new Set(array.filter(mes => ok.includes(mes)))]
  return arrayOk.length === 3 ? arrayOk : 'No se encontraron los meses pedidos';
}

export function mayorACien(array) {
  // Tu código:

  return array.filter(n => n > 100);
}

export function breakStatement(numero) {
  // Tu código:
  let array = [];
  for (let i = 0; i < 10; i++) {
    array.push(numero+=2);
    if(numero === i) return 'Se interrumpió la ejecución';
  }
  return array;
}

export function continueStatement(numero) {
  // Tu código:
  let array = [];
  for (let i = 0; i < 10; i++) {
    if (i != 5) array.push((numero += 2));
  }
  return array;
}
