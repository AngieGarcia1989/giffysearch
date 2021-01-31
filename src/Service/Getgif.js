const url_API= 'https://api.giphy.com/v1/gifs/search?api_key=C8ShkkqqBNUg5lGIYLxtDDENUvG6DRLy&q=POMERANIA&limit=10&offset=0&rating=g&lang=en'


export default function Getgif () {
   return fetch(url_API)
    .then(res => res.json())
    .then(response =>{
      const{data = []} = response
      if (Array.isArray(data)){ 
      const gifs_P = data.map(image => image.images.downsized_medium.url)
      return gifs_P
      }
    })
}
   //gifs_P queda guardado en  Getgif () que se exporta en App.js, change es el valor que representa el cambio que genera en setGifs