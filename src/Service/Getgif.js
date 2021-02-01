const apikey='C8ShkkqqBNUg5lGIYLxtDDENUvG6DRLy'

export default function Getgif ({keyword='panda'} ={}) {
  const url_API= `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

   return fetch(url_API)
    .then(res => res.json())
    .then(response =>{
      const{data = []} = response
      if (Array.isArray(data)){ 
      const gifs_P = data.map(image =>
        {
const  {images,id,title} = image
const {url} = image.images.downsized_medium
    return {id,title,url,images}   
} )
      return gifs_P
      }
    })
}
   //gifs_P queda guardado en  Getgif () que se exporta en App.js, change es el valor que representa el cambio que genera en setGifs