// class calculadoraMatematica {
//   operaciones: string;
//   private suma: number;
//   private resta: number;
//   private multiplicacion: number;
//   private division: number;
  

//   constructor(private _operaciones: string) {
//     this._operaciones = this.operaciones;
//     // // this._suma = this.suma
//     // this._resta = this.resta
//     // this._multiplicacion = this.multiplicacion
//     // this._division = this.division
//   }
//   public operciones(value: string) {

//     this.operaciones = value;

//   }
//  get getOperciones() {

//    return this.operaciones;

//   }

//   public setSuma(value: number,value2: number) {

//     this.suma = value + value2;

//   }
//   get getSuma() {

//     return this.suma;

//   }
//   public setresta(value: number,value2: number) {

//     this.resta = value - value2;

//   }
//   get getresta() {

//     return this.resta;

//   }
//   public setmultiplicacion(value: number,value2: number) {

//     this.multiplicacion = value * value2;

//   }
//   get getmultiplicacion() {

//     return this.multiplicacion;

//   }
//   public setdividir(value: number,value2: number) {

//     this.division = value / value2;

//   }
//   get getdividir() {

//     return this.division;

//   }

//   get operacionesMatematicas() {



//     return this._operaciones;

//   }


//   realizaroperaciones(){

//     const regexPattern = /[0-9]+|\+|-|\*|/gm;
//     let operacion = this.getOperciones;
//     let arregloNumeros = []
  
  
  
//     // const numerosASumar = suma.split(regexPattern);
//     const numerosASumar = operacion.match(regexPattern);
  
//    for (let i = 0; i < numerosASumar.length; i++) {
//      const element = numerosASumar[i];
  
//      if(element == "*"){


//       this.setmultiplicacion(eval(numerosASumar[i-1]),eval(numerosASumar[i+1]))
  
//       arregloNumeros.splice(i-1, 1);
//       arregloNumeros.splice(i+1, 1);
      
//       arregloNumeros.push(this.setmultiplicacion.toString())
//       // arregloNumeros.push(numerosASumar[i+1].toString())
//       i = i+2;
//      }
//      arregloNumeros.push(numerosASumar[i].toString())
     
//    }


//    console.log(arregloNumeros)

//   }



//   }
//   //  suma(value1: number,value2: number ) {

//   //  this.suma = value1 + value2;

//   // // }

//   // //   suma() {



//   //   return this.suma;

//   // }
//   // resta(value1: number,value2: number ) {

//   //   this.resta = value1 + value2;

//   // // }

//   // // get resta() {



//   //   return this.resta;

//   // }
//   // set multiplicar(value1: number,value2: number ) {

//   //   this.multiplicacion =  value1 * value2;

//   // // }

//   // // get multiplicar() {



//   //   return this.multiplicacion;

//   // }
//   // set division(value1: number,value2: number ) {

//   //   this._division =  value1 / value2;

//   // // }

//   // // get division() {



//   //   return this.division;

//   // }


//   // operacionesMate() : void{


//   //   // const pattern = /(?<a>[0-9]+)(?<x>[\x])(?<operador>[\+|-])(?<b>[0-9]+)(?<igual>=)(?<c>[0-9]+)$/m;

//   //   // const arrayResult = Array.from(operacionesMatematicas.match(pattern));

//   // //  let trigger = "2",
//   // //  regexp = new RegExp('^[1-9]\d{0,2}$'),
//   // //  test = regexp.test(this.trigger);

//   //  var regex = /^[1-9]\d{0,2}$/g

//   //   console.log(regex.match('2') )






//   // }
//   // 



// // var readline = require('readline');

// let calculadora = new calculadoraMatematica("");

// calculadora.setSuma(2,2);

// // // calculadora.operaciones("263+2656")
// // // calculadora.operacionesMatematicas = "2+1=0";
// // // calculadora.operacionesMatematicas;\

// // let arreglo : string;
// console.log(calculadora.getSuma)

// class calculadoraMatematica {
//   operaciones: string;
//   private suma: number;
//   private resta: number;
//   private multiplicacion: number;
//   private division: number;

//   public setSuma(value: number, value2: number) {

//       this.suma = value + value2;

//   }
//   get getSuma() {

//       return this.suma;

//   }
//   public setresta(value: number, value2: number) {

//       this.resta = value - value2;

//   }
//   get getresta() {

//       return this.resta;

//   }
//   public setmultiplicacion(value: number, value2: number) {

//       this.multiplicacion = value * value2;

//   }
//   get getmultiplicacion() {

//       return this.multiplicacion;

//   }
//   public setdividir(value: number, value2: number) {

//       this.division = value / value2;

//   }
//   get getdividir() {

//       return this.division;

//   }

// }

// var Numero1: string;
// //var Numero2: string;

// process.stdout.write("Escribe un número ");

// process.stdin.on('data', function (data) {
//   Numero1 = data.toString();
//   process.stdout.write(`${Numero1}\n`)
//  // process.stdout.write(`${Numero2}\n`)
//  let Array = Numero1.split("/");
//  let calculadora = new calculadoraMatematica();
//  calculadora.setdividir(parseFloat(Array[0]), parseFloat(Array[1]));
//  console.log(calculadora.getdividir) 
//   process.exit();
// });

// var readline = require('readline');