"use strict";
class operacionesMatematicas {
    // suma: number;
    // resta: number;
    // multiplicacion: number;
    // division: number;
    constructor(_operaciones) {
        this._operaciones = _operaciones;
        this._operaciones = this.operaciones;
        // this._suma = this.suma
        // this._resta = this.resta
        // this._multiplicacion = this.multiplicacion
        // this._division = this.division
    }
    set operacionesMatematicas(value) {
        this._operaciones = value;
    }
    get operacionesMatematicas() {
        return this._operaciones;
    }
}
// var readline = require('readline');
let calculadora = new operacionesMatematicas("");
// calculadora.operaciones("263+2656")
calculadora.operacionesMatematicas = "2+1=0";
calculadora.operacionesMatematicas;
let arreglo;
console.log(calculadora.operacionesMatematicas);
arreglo = calculadora.operacionesMatematicas;
console.log(arreglo);
let resultado;
let operaciones;
//  const patternMultiplicacion = /(?<a>[0-9]+)(?<o>[\+|-])(?<b>[0-9]+)(?<igual>=)(?<c>[0-9]+)$/m;
//   //  const pattern = /(?<a>[0-9]+)(?<o>[\+|-])(?<b>[0-9]+)(?<igual>=)(?<c>[0-9]+)$/m;
// 
const regexPattern = /[0-9]+|\+|-|\*|/gm;
const suma = "52+52-65*41/45";
let arregloNumeros = [];
// const numerosASumar = suma.split(regexPattern);
const numerosASumar = suma.match(regexPattern);
for (let i = 0; i < numerosASumar.length; i++) {
    const element = numerosASumar[i];
    if (element == "*") {
        operaciones = eval(numerosASumar[i - 1]) * eval(numerosASumar[i + 1]);
        arregloNumeros.splice(i - 1, 1);
        arregloNumeros.splice(i + 1, 1);
        arregloNumeros.push(operaciones.toString());
        // arregloNumeros.push(numerosASumar[i+1].toString())
        i = i + 2;
    }
    arregloNumeros.push(numerosASumar[i].toString());
}
console.log(arregloNumeros);
//  for (let i = 0; i < numerosASumar.length; i++) {
//   const element = numerosASumar[i];
//   if(element == "/"){
//    operaciones = eval(numerosASumar[i-1]) * eval(numerosASumar[i+1])
//    break
//   }
// }
console.log("numeros a sumar", operaciones);
// regex  -> Regular Expression
