//import {heroes} from './data/heroes'
//import {heroes} from './data/heroes'
import heroes,{owners} from '../data/heroes' //la exportacion por default es la que esta sin corchetes, la otra son export individuales

//console.log(owners);
//USO DEL FIND DEVUELVE EL PRIMER ELEMENTO QUE CUMPLA EL CALLBACK
export const getHeroeById = (id)=>{
    
    return heroes.find(heroes => heroes.id === id);
};

//console.log(getHeroeById(1));

const result = name =>(heroes.find(element => element.name === name));

//console.log(result('Superman'));


//USO DEL filter DEVUELVE TODOS LOS ELEMENTOS QUE CUMPLAN LA CONDICION
//DEL CALL BACK
const findByOwner = owner => (heroes.filter(element => element.owner === owner));
//console.log(findByOwner('DC'));

const inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];

function esCereza(fruta) { 
    return fruta.nombre === 'cerezas';
}

//console.log(inventario.find(esCereza));

