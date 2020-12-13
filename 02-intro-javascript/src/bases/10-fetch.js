const apikey ='US3s05gjAp04Vv9aWW5YsxIWpWOnTCSO';

const randomImg = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    
randomImg
    .then(resp=>resp.json())
    //.then(data => console.log(data));
    .then( ({data}) => {
        const {url} = data.images.original;
        console.log(url);

        const image = document.createElement("img");
        image.src = url;

        document.body.append(image);
    })
    .catch(console.warn);
    //.then(({images})=> console.log(images.original.url))
  

    
    

