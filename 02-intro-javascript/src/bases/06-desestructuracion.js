//Desestructuracion de objetos ó Asignacion Desestructurante

const persona = {
    nombre: 'Antonio',
    edad: 28,
    cargo: 'Software engineer'
};

/*Aqui le estoy diciendo asignale a una nueva variable nombre, el atributo
nombre que esta en el objeto persona*/
const {nombre} = persona;

console.log(nombre);

/*Aqui le estoy diciendo asignale a una nueva const nombreExtraido,
 el atributo nombre que esta en el objeto persona y tambien a una const
 edad el atributo edad que esta en el objeto persona */
const {nombre:nombreExtraido,edad} = persona;
console.log(nombreExtraido);
console.log(edad);

//desestrurando con funciones
const avenger = ()=>{
    const {nombre} = persona
    console.log(nombre);
};
avenger();


const useContext = ({nombre,edad,apellido='Fernandez'})=>{
    console.log(nombre,edad,apellido);
    return {
        nombreclave:nombre,
        anios: apellido
    }
};

const {nombreclave,anios} = useContext(persona);
console.log(nombreclave);

//desestructuracion objetos anidados

const humano = {
    nombreHumano:'Antonio',
    cuerpo:{
        colorPiel:'Carne',
        altura: 1.70
    }
};


const {nombreHumano,cuerpo:{colorPiel,altura}} = humano;
console.log(nombreHumano,colorPiel);

//otra forma de desestructuracion anidada
const {nombreHumano:nombreHumano2,cuerpo:cuerpo2} = humano;
const {colorPiel:colorPiel2,altura:Altura2} = cuerpo2;
console.log(colorPiel2);
