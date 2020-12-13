//Arreglos en JS
 
//podemos escribir un arreglo de posicion fija
//de la siguente forma

const arreglo = new Array(10); // Arreglo de 10 posiciones
arreglo.push(1); //con el push inserto un valor en la posicion siguente
arreglo.push(2);
console.log(arreglo.length);
console.log(arreglo);

for (const element in arreglo) {
    console.log(arreglo[element]);
}

/*Para añadir elementos de un arreglo en otro
hacerlo con el spread operator*/

const arreglo2 = [1,2,3,4];
let arreglo3 = [...arreglo2,5];

console.log(arreglo2);
console.log(arreglo3);

//funcion map de los arrays

const arreglo4 = [1,2,3,4,5];

arreglo4.map((x)=>{return x*2});
let arreglo5 = arreglo4.map((x)=>{return x*2});

console.log(arreglo4);
console.log(arreglo5);