// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Tu código:
  return x > y ? x : y;
}

export function mayoriaDeEdad(edad) {
  // Tu código:

  return edad >= 18 ? 'Allowed' : 'Not allowed';
}
  
export function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  // Tu código:
  let connectionState;
  switch (status) {
    case 1:
      connectionState = 'Online'
      break;
    case 2:
      connectionState = 'Away'
      break;
    case 3:
      connectionState = 'Offline'
      break;
    default:
      connectionState = 'Offline'
      break;
  }
  return connectionState;
}

export function saludo(idioma) {  
  // Tu código:
  switch (idioma) {
    case 'ingles':
      return 'Hello!'
    case 'aleman':
      return 'Guten Tag!'
    case 'mandarin':
      return 'Ni Hao!'
    default:
      return 'Hola!'
  }
}

export function colors(color) {  
  //Usar el statement Switch.
  // Tu código:
 switch (color) {
  case 'blue':
    return 'This is blue'
  case 'red':
    return 'This is red'
  case 'green':
    return 'This is green'
  case 'orange':
    return 'This is orange'
  default:
    return 'Color not found'
 }
}

export function esDiezOCinco(numero) {
  // Tu código:

  return numero === 10 || numero === 5;
}

export function estaEnRango(numero) {  
  // Tu código:
  
  return numero > 20 && numero < 50;
}

export function esEntero(numero) {
  // Tu código:

  return numero % 1 == 0;
}

export function fizzBuzz(numero) {
  // Tu código:

  return numero % 3 === 0 ? (numero % 5 === 0 ? 'fizzbuzz' : 'fizz') : (numero % 5 === 0 ? 'buzz' : numero);
}

export function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  // Tu código:
  if (num1 === 0 || num2 === 0 || num3 === 3) return "Error";
  if (num1 < 0 || num2 < 0 || num3 < 3) return "Hay negativos";
  if (num2 > num1 && num2 > 3) return false;
  if (num1 > num3) {
    return "Número 1 es mayor y positivo";
  } else if (num3 > num2) {
    return num3 + 1;
  }
  return;
}

export function esPrimo(numero) {
  /// Tu código:
  if(numero === 0 || numero === 1) return false;
  for (let i = 2; i < numero; i++) {
    if(numero !== i && numero % i === 0) return false;
  }
  return true;  
}

export function esVerdadero(valor){
  // Tu código:

  return valor ? 'Soy verdadero' : 'Soy falso';
}

export function tablaDelSeis() {
  // Tu código:
  let tabla = [];
  for (let i = 0; i < 11; i++) {
    tabla.push(6 * i);
  }
  return tabla;
}

export function tieneTresDigitos(numero){
  // Tu código:

  return numero / 100 >= 1  && numero / 1000 < 10;
}

export function doWhile(numero) {  
  //Usar el bucle do ... while.
  for (let i = 0; i < 8; i++) {
    numero += 5;
    
  }
  return numero;
}