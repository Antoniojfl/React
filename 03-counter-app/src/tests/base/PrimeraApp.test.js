import React from 'react';
//import {getByText, render} from '@testing-library/react'
import {shallow} from 'enzyme'
import PrimeraApp from '../../PrimeraApp'


describe('Pruebas en <PrimeraApp />', () => {

   // test('debe de mostrar el mensaje "Hola Mundo" ', () => {
        
    // Forma 1
       /*  const  saludo = 'Hola Mundo';

        const wrapper = render(<PrimeraApp holaGoku='Hola soy Goku'/>);
        
        expect(wrapper.getByText(saludo)).toBeInTheDocument(); */

    /*Tambien se puede hacer de la siguente forma
    wrapper devuelve  un objeto el cual tiene la funcion getByText, se
    puede desestructurar y obtener la funcion directamente ejemplo: */

        /* const  saludo = 'Hola Mundo';

        const {getByText} = render(<PrimeraApp holaGoku='Hola soy Goku'/>);

        expect(getByText(saludo)).toBeInTheDocument(); */

    /*Se necesitó crear el archivo setupTests.js para que pudiera leer
    la dependencia donde esta el toBeInTheDocument(), el archivo lo lee
    el test suite cuando se corren las pruebas*/
 
   // })

   test('debe de mostrar el mensaje "Hola Mundo" con enzyme ', () => {

        const saludo = 'Hola soy Goku';
        const wrapper = shallow(<PrimeraApp holaGoku={saludo}/> );

        expect(wrapper).toMatchSnapshot();
        
   })

   test('debe de mostrar el sub ', () => {

    const saludo = 'Hola Mundo !!!';
    const propDos= 'Esta es una forma de poner default props';
    const wrapper = shallow(<PrimeraApp 
        holaGoku={saludo}
        defaultProp ={propDos}
        /> );

    const textoParrafo = wrapper.find('p').text();
    console.log(textoParrafo);

    expect(textoParrafo).toBe('Imprimiendo un defaultProp: Esta es una forma de poner default props');
    
})
   
    
    
})
 