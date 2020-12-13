import React from 'react';
import PropTypes from 'prop-types';

// Este import de React no es necesario en las nuevas versiones de react
//Los componentes se escriben con upper-cammel-case

//Functional components


const PrimeraApp = ({holaGoku,defaultProp}) =>{

    const saludo = 'Antonio';
    const saludo2 = 28;
    const saludo3 = true;
    const saludo4 = 12.26;
    const saludo5 = {
        name:'Antonio',
        age:28,
        gender:'Male'
    }

    //console.log(holaGoku);

    
    //Props

    /* Los props se pueden definir desde el render.dom pasandoselos al
    componente pero ya no se suele usar de esa manera, tambien
    se le puede hacer destructuring o se definen directamente en el componente */

    return (
    <>
        <h1>Hola Mundo !!!</h1>
        <h1>Imprimiendo un prop: {holaGoku}</h1>
        <h1>Puedo imprimir un string: {saludo}</h1>
        <h1>Puedo imprimir un number: {saludo2}</h1>
        <h1>NO puedo imprimir un boolean: {saludo3}</h1>
        <h1>Puedo imprimir un decimal: {saludo4}</h1>
        <pre>Puedo imprimir un objeto: {JSON.stringify(saludo5,null,3)}</pre>
        <p>Imprimiendo un defaultProp: {defaultProp}</p>
        <h1>Mi primera aplicacion</h1>

    </>  // o tambien se puede importar Fragment y escribir <Fragment> </Fragment>
    );
};

/* Para retornar mas de una linea de JSX
bien se puede retornar dentro de un div o un tag que los agrupe
segun necesidad, ejemplo si eso va a llevar alguna clase se
agrupa en un div y dentro del div se colocan los otros tags y se
le da estilo al div, pero si no se necesita hacer nada de eso se puede
encerrar en un fragment que es propio de React, se necesita importar,
tambien puede ir encerrado en parentesis para que react sepa que esta 
devolviendo un objeto y devuelve todo lo que esta en ese parentesis*/



//PROP-TYPES

/* esto es opcional pero nos permite definir las propiedades de nuestro
componente y opciones como si son requeridas o no, para que a futuro
quien trabaje con nuestro codigo se vea obligado a usarlas */

PrimeraApp.propTypes = {
    holaGoku: PropTypes.string.isRequired // Prop requerida
}

PrimeraApp.defaultProps = {
    defaultProp: 'Esta es una forma de poner default props'
}

export default PrimeraApp;