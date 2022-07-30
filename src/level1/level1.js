
// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(str) {
  // Tu código:

  return str.toString();  
}

export function suma(x, y) {
 // Tu código:

  return x + y;  
}

export function resta(x, y) {
 // Tu código:

  return x - y;
}

export function multiplica(x, y) {
  // Tu código:

  return x * y;
}

export function divide(x, y) { 
  // Tu código:

  return x != 0 && y != 0 ? x / y : error;
}

export function sonIguales(x, y) {  
  // Tu código:

  return x === y;  
}

export function tienenMismaLongitud(a, b) {  
  // Tu código:

  return a.length === b.length;
}

export function menosQueNoventa(num) {  
  // Tu código:

  return num < 90;
}

export function mayorQueCincuenta(num) {  
  // Tu código:

  return num > 50;
}

export function obtenerResto(x, y) {  
  // Tu código:

  return x % y;
}

export function esPar(num) {
  // Tu código:

  return num % 2 == 0;
}

export function esImpar(num) {  
  // Tu código:

  return num % 2 != 0;
}

export function elevarAlCuadrado(num) {  
  // Tu código:

  return Math.pow(num, 2);
}

export function elevarAlCubo(num) { 
  // Tu código:

  return Math.pow(num, 3);
}

export function elevar(num, exp) {  
  // Tu código:

  return Math.pow(num, exp);
}

export function redondearNumero(num) {  
  // Tu código:

  return Math.round(num);
}

export function redondearHaciaArriba(num) { 
  // Tu código:

  return Math.ceil(num);
}

export function numeroRandom() {  
  // Tu código:

  return Math.random();
}

export function esPositivo(num) {
  // Tu código:
  
  return num === 0 ? false : num > 0 ? 'Es positivo' : 'Es negativo';
}

export function agregarSimboloExclamacion(str) {  
  // Tu código:

  return `${str}!`;
}

export function combinarNombres(firstName, lastName) {
  // Tu código:

  return `${firstName} ${lastName}`;
}

export function obtenerSaludo(name) {
  // Tu código:

  return `Hola ${name}!`;
}

export function obtenerAreaRectangulo(alto, ancho) {  
  // Tu código:

  return alto * ancho;
}


export function retornarPerimetro(lado){
  // Tu código:

  return lado * 4;
}


export function areaDelTriangulo(base, altura){
  // Tu código:

  return (base * altura) / 2;
}


export function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:

  return euro * 1.2;
}


export function esVocal(letra){
  // Tu código:
  let vocals = ['a', 'e', 'i', 'o', 'u'];
  return letra.length > 1 || !vocals.includes(letra) ? 'Dato incorrecto' : 'Es vocal';
}
