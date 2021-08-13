// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  ar1=[];
  ar2=[];
  for(let clave in objeto){
    ar1.push(clave);
    ar1.push(objeto[clave]);
    ar2.push(ar1);
    //ar1.push([clave, objeto[prop]]) return ar1
    //return Object.entries(objeto);
    ar1=[];
  }
  return ar2;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  arr=string.split("");
  let obj={};
  for(i=0;i<arr.length;i++){
    cont=0;
    if(arr[i]!==obj[arr[i]]){
    for(j=0;j<arr.length;j++){
      if(arr[i]===arr[j]){
        cont++;
      }
    }
    obj[arr[i]]=cont;
  }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  arr=s.split("");
  let mayus='';
  let minus='';
  for(i=0;i<arr.length;i++){
    if(arr[i]===arr[i].toUpperCase()){
      mayus=mayus+arr[i];
    }
    else {
      minus=minus+arr[i];
    }
  }
  return mayus+minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  arr=str.split(" ");
  result=[];
  for(i=0;i<arr.length;i++){
    result.push(arr[i].split("").reverse().join(""));
  }
  return result.join(" ")
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  str=numero.toString();
  arr=str.split("");
   for(i=0;i<arr.length;i++){
    if(arr[i]!==arr[arr.length-(i+1)]){
      return "No es capicua";
    }
}
return "Es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena=cadena.replace("a","");
  cadena=cadena.replace("b","");
  cadena=cadena.replace("c","");
  return cadena;
}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(i=0;i<arr.length;i++){
    for(j=i+0;j<arr.length;j++){
      if(arr[i].length>arr[j].length){
        let x=arr[j];
        arr[j]=arr[i];
        arr[i]=x
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  array=[];
  for(i=0;i<arreglo1.length;i++){
    for(j=0;j<arreglo2.length;j++){
      if(arreglo1[i]===arreglo2[j]){
        array.push(arreglo1[i]);
      }
    }
    
  }
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

