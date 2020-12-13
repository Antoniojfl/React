/* El nombre del archivo .test.js corresponde a que el test suite va a 
buscar esa terminacion del archivo para correr las pruebas, lo que este
antes deeso, no es importante */

//console.log('Hola Mundo');


/*El describe sirve para agrupar las pruenas. se meten todas
las pruenas dentro de esta funcion */


describe('Pruebas en el archivo demo.test.js',()=>{
    
    test('Aqui va algo descriptivo de la prueba, ej: debe ser true',()=>{
    
        const isActive =true;
    
        if (!isActive){
           throw new Error('No esta activo') ;
        }
        
    })
    
    test('deben ser iguales los String',()=>{
    
        //1. inicializacion
        const mensaje = 'Hola mundo';
    
        //2. estímulo
        const mensaje2 = `Hola mundo`;
    
        // 3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 );
    })



})
