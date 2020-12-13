/*Recomendacion trabajar con funciones como constantes*/

//Transformar a funcion de flecha

function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre)=>({uid: 'ABC567',username: nombre});

console.log(getUsuarioActivo2('Antonio'));