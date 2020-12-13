//Const y let 


const nombre = 'Antonio';
const apellido = 'Fernandez';

console.log('Antonio');

let valor = 'Global';
console.log(valor);
if(true){
    const nombre = 'Antonio';
    console.log(nombre);
    let valor = 'Local 1'; // Local 1 solo existe en este scope no en el if de abajo
    console.log(valor);
    if (true){
        let valor = 'Local 2'; // Local 1 no existe en este scope
        valor = 'Local 3';        
        console.log(valor);
    }
    
};