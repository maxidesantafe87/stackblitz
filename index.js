// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function DecimalABinario(num) {
    // tu codigo aca
    var arrayBinario = [];
    do {
        if (num <= 1) {
          arrayBinario.unshift('1');
        }
        if (num > 1 && num % 2 === 0) {
          arrayBinario.unshift('0');
        }
        if (num > 1 && num % 2 !== 0) {
          arrayBinario.unshift('1');
        }
        num = Math.floor(num / 2);
      } while (num >= 1);
    return arrayBinario.join('');
  }
  
  console.log(DecimalABinario(7));
  
  console.log("----------------------")
  
  function DecimalABinario1(num) {
     return num.toString(2);// se utiliza para convertir a String (es decir, a una cadena de texto)
  }
  console.log(DecimalABinario1(7));
  
  
  
  console.log("----------------------")
  
  
  function convertToBinary(x) {
      let bin = 0;
      let rem, i = 1, pasos = 1;
      while (x != 0) {
          rem = x % 2;
          console.log(
              `Paso ${pasos++}: ${x}/2, Resto = ${rem}, Cociente = ${parseInt(x/2)}`
          );
          x = parseInt(x / 2);
          bin = bin + rem * i;
          i = i * 10;
      }
      console.log(`Nro Binario: ${bin}`);
  }
  
  convertToBinary(7);
  
  
  console.log("----------------------")
  function convertToBinary1 (number) {
      let numero = number;
      let binario = (numero % 2).toString();
      for (; numero > 1; ) {
          numero = parseInt(numero / 2);
          binario =  (numero % 2) + (binario);
      }
      console.log(binario);
  }
      convertToBinary1(7);
  
  
  console.log("----------------------")
  ////////////////////////////////////
  function BinarioADecimal(num) {
     if (num.constructor != String){
        return null;
      }
      num = num.replace(/[^01]/gi, ""); // remplaza todas las cadenas diferentes a 01 por espacio
      return Number.parseInt(num, 2);
  }
  
  console.log(BinarioADecimal("111"));
  
  console.log("----------------------")
  /////////////////////////////
  
  
  /// posibles soluciones:
  
  
  function BinarioADecimal(num) {
     let binario = String(num); //// convierte num en estring 
     let respuesta =0; ////guardo la repuesta final ( acumulo)
  
     for (let i = 0; i > binario.length; i++) //// tiene que ser menor a la longitud de binario y ++ para avanzar
     respuesta = repuesta + (Math.pow(2)) ////l
  }