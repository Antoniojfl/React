

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try{
        const apikey ='US3s05gjAp04Vv9aWW5YsxIWpWOnTCSO';
        const randomImg = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const resp = await randomImg.json();
        const {url} = resp.data.images.original
        return url;
        /* const image = document.createElement("img");
        image.src = url;
        document.body.append(image); */
    } catch(error){
        //manejo del error
        console.error(error);
    }
    
    
    
}

 getImagen();



