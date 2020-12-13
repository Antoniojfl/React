//Template String


const nombre = 'Antonio';
const apellido = 'Fernandez';

//concatenacion normal;

console.log(nombre + ' ' + apellido);

//template string
console.log(`${nombre} ${apellido}`);
console.log(`enviando js simple ${1+1}`);

console.log(`imprimiendo
saltos
de
linea`);

function getSaludo(nombre){
    return `Hola ${nombre}`;
};

console.log(`${getSaludo('Antonio')}`);


