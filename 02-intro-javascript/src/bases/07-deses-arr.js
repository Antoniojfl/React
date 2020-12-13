//Desestructuracion de arreglos

const arreglo = [1,2,3,4];
const [uno] = arreglo;
console.log(uno);

const retornaArreglo = (valor)=>{
    return [valor,()=>{console.log('Hola Mundo')}]
};

const arr = retornaArreglo('Goku');
console.log(arr);
const [,imprimete] = retornaArreglo();

imprimete();


const arr2 = ['nombre',()=>{console.log('setNombre')}];
const [nombre, setNombre] = arr2;

console.log(nombre);
setNombre();



const arr3 = (valor)=>{
    return [valor,()=>{console.log(`Hola ${valor}`)}]
};

const [nombre2,setNombre2] = arr3('Goku');
console.log(nombre2);
setNombre2();