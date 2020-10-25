// 1. Texto truncado
// dado una cadena de texto de n caracteres,
// truncar la cadena de texto a determinado número de caracteres
// en base aun argumento pasado en f(n), donde n es un numero natural > 0
// además concatenear la frase "... Leer más"

const { forEach } = require("lodash");


// Ej.
/**
 * const input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
 * n = 10, f(n)
 *  output = `Lorem ipsu... Leer más`
 */
const input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

function f(n) {
  let texNuevo = "";
  texNuevo = input.substring(0, n);

  return texNuevo + "... Leer más";
}

console.log("Ejercicio 1 :"+f(10))

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
const input2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

console.log("Ejercicio 2: ")
console.log("Texto Normal: " + input2)
console.log("Texto Modificado: " + cambiarUltimaVocal(input2,"t"))

function cambiarUltimaVocal(texto, letra) {

  const input3 = texto.split(" ");
  let remplace = ""
  let output = "";

  for (let i = 0; i < input3.length; i++) {
    let cont = 0
    let element = input3[i];


    for (let caracter = element.length - 1; caracter >= 0; caracter--) {
      if (cont == 0) {
        if (element[caracter] == "a" || element[caracter] == "e" || element[caracter] == "i" || element[caracter] == "o" || element[caracter] == "u") {

          remplace += element[caracter].replace(element[caracter], letra)

          cont = 1

        } else {
          remplace += element[caracter]
        }
      } else {
        remplace += element[caracter]
      }

    }
    remplace += " "
  }

  const array = remplace.split(" ");

  for (let i = 0; i < array.length; i++) {

    let palabra = array[i];

    for (let caracter = palabra.length - 1; caracter >= 0; caracter--) {
      output += palabra[caracter];
    }
    output += " "
  }
  return output

}





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

ecuacionLineal("3x+6=0")

function ecuacionLineal(ecuacion) {

  console.log("Ejercicio3 ")
  console.log("Ecuacion lineal: "+ ecuacion)

  const pattern = /(?<a>[0-9]+)(?<x>[\x])(?<operador>[\+|-])(?<b>[0-9]+)(?<igual>=)(?<c>[0-9]+)$/m;
  // const string = "3x+6=0";
  const arrayResult = Array.from(ecuacion.match(pattern));

  const paso1 = arrayResult[1] + arrayResult[2] + " = " + (arrayResult[6] > 0 ? arrayResult[6] : "") + (arrayResult[3] === "+" ? '-' + arrayResult[4] :'+' + arrayResult[4])
  console.log("paso 1: " + paso1);

  sumaDespeje = eval(arrayResult[6]) + eval(arrayResult[3] === "+" ? '-' + arrayResult[4] : arrayResult[4]);

  const paso2 = arrayResult[2] + " = " + sumaDespeje + "/" + arrayResult[1];

  console.log("paso 2: " + paso2);

  divisionDespeje = sumaDespeje / eval(arrayResult[1])

  const paso3 = arrayResult[2] + " = " + divisionDespeje

  console.log("paso 3: " + paso3)


}



  // console.log(arrayResult)

  // arrayResult = [ '3x+6=0', '3x', '+', '6', '=', '0' ]


