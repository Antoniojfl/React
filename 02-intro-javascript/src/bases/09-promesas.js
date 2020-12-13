import {getHeroeById} from './bases/08-imp.exp'
//Promesas

/* const promesa = new Promise((resolve,reject)=>{

    setTimeout(()=>{

        const heroe = getHeroeById(10); 
        //console.log(heroe);
        resolve(heroe);
        reject('No se pudo encontrar al heroe');
        

    },2000)

});

promesa.then((heroe)=>{
    console.log(heroe);
})
.catch(err => console.warn(err)); */

const getHeroe = (id)=>{

    return new Promise((resolve,reject)=>{        
        setTimeout(()=>{
            const heroe = getHeroeById(id);
            heroe ? resolve(heroe):reject('Error, no se encontro el heroe');

        },2000);

    });  

};


getHeroe(1)
    //.then(heroe =>{console.log(heroe)})
    //.catch((err)=> console.warn(err))
    .then(console.log)
    .catch(console.warn)