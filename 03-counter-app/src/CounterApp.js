import React,{useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value})=>{

    let [count,setCount] = useState(0); //[]
    
    const handleAdd = (e) =>{
        console.log(e);
        //return ()=> console.log('Hola Mundo');
    }

    const handleSubstract = () =>{setCount(count -1);}
    
     const handleReset = () =>{setCount(value);}
    

    return (
    <>
        <h1>CounterApp</h1>
        <h3>{value}</h3>
        <h2>{count}</h2>

        <button onClick={handleAdd}>+1</button>
        <br></br>
        <button onClick={()=>setCount((count+1))}>+1 Count</button> 
        <br></br>
        <button onClick={()=>setCount((c)=>c+1)}>+1 Count otra forma</button>
        <br></br>
        <button onClick={handleSubstract}>-1 Count </button>
        <br></br>
        <button onClick={handleReset}>Reset Count </button>   
    </>);

        /*No se le pasan argumentos al on click porque al estar definido
        como funcion de flecha automaticamente se le pasan los argumentos 
        del handleAdd*/

        /*Hay que tener en cuenta que si ejecutamos la funcion handleAdd()
        react la va a ejecutar cada vez que se renderiza la pagina
        por eso hay que pasar la referencia handleAdd (sin parentesis)
        dependiendo de lo que se quiera lograr*/

        
};

CounterApp.propTypes = {
    value: PropTypes.number
};

export default CounterApp;
