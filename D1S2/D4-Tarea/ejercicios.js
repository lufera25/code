// 1. Texto truncado
// dado una cadena de texto de n caracteres,
// truncar la cadena de texto a determinado número de caracteres
// en base aun argumento pasado en f(n), donde n es un numero natural > 0
// además concatenear la frase "... Leer más"


// Ej.
/**
 * const input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
 * n = 10, f(n)
 *  output = `Lorem ipsu... Leer más`
 */
const input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

function f(n){
    let texNuevo = "";
    texNuevo = input.substring(0, n);

    return texNuevo;
}

console.log(f(10))

// 2. vocales
// dado una cadena de texto de n caracteres
// buscar en cada palabra que compone dicha cadena la última vocal en la
// presente palabra y reemplazarla por una vocal pasada como argumento
// Ej.
/**
 * const input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`; 
 * vocal pasada como argumento f(a)
   output =  'Loram ipsam dolar sat amat, consectetar adipiscang elat.'
   ** nótese     ^     ^     ^   ^    ^            ^         ^     ^  
 */

// 3. Wolfram Alpha
// https://www.wolframalpha.com/
// Wolfram Alpha es un sitio que ofrece una herremienta matemática y pedagógica
// que ayuda a los estudiantes a resolver ecuaciones matemáticas paso a paso
// y de forma gráfica
// Ejercicio,
// Dada una ecuacion de primer grado del tipo, ax + b = c
// donde a, b y c son valores constantes y 'x' es un valor desconocido o variable
// escribir ua funcion que tome una ecuación de primer grado
// y resuelva imprimiendo paso a paso la resolución de la misma
// Ej.
//  f('3x+6=0')
//  (Paso 1) -> 3x = -6
//  (Paso 2) -> x = -6/3
//  (Paso 3) -> x = -2
// fin
// BONUS (AYUDA)
// para input = "3x+6=0"
// donde el patron a buscar (?<ax>[0-9]*x)(?<operador>[\+|-])(?<b>[0-9]+)(?<igual>=)(?<c>[0-9]+)$
// y
// ?<ax> -> nombre del grupo
// * -> busca de cero conicidencias a ilimitadas
// + -> busca de una conicidencia a ilimitadas
// [\+|-] -> busca el operador + o el -
// $ -> estrictamente debe finalizar con un valor
/*
  const pattern = /(?<ax>[0-9]*x)(?<operador>[\+|-])(?<b>[0-9]+)(?<igual>=)(?<c>[0-9]+)$/m;
  const string = "3x+6=0";
  const arrayResult = Array.from(string.match(pattern));

  // arrayResult = [ '3x+6=0', '3x', '+', '6', '=', '0' ]
*/
