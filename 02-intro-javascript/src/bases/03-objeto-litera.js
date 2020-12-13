 const persona = {
     nombre: 'Antonio',
     apellido: 'Fernandez',
     edad: '28',
     acciones: {
         saludar: ()=>{return 'Hola'}
     }
 }

 console.log(persona.acciones.saludar());

 console.log(persona);

 let persona2 = persona;
 
 persona2.nombre = 'Javier';

 console.log(persona);
 console.log(persona2);

 //Spread operator
 persona2= {...persona};
 persona2.nombre = 'Javier Antonio';
 console.log(persona);
 console.log(persona2);

 let testArray = [1,2,3];
 console.log(testArray);
 let testArray2 = [...testArray,4,5,6];
 console.log(testArray2);