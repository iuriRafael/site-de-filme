let inputBuscarFilmes = document.querySelector("#input-buscar-filmes");
let btnBuscarFilmes = document.querySelector("#btn-buscar-filmes");


btnBuscarFilmes.onclick = () => {
  
  if (inputBuscarFilmes.value.length > 0) {
    let filmes = new Array();
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1b5322a&s=" + inputBuscarFilmes.value)
      .then((resp) => resp.json())
      .then((resp) => {
        resp.Search.forEach((item)=>{ 
          console.log(item);
          let filme=new Filme(
            item.imdbID,
            item.Title,
            item.Year,
            null,
            item.Poster,
            null,
            null,
            null,
            null,
            null,
            null,
          
          );
          filmes.push(filme);
          
      });
      listarFilmes(filmes);
      
    })
    
  }
          
  return false;
}

let listarFilmes = async(filmes) =>{
  let listaFilmes = await document.querySelector("#lista-filmes");
 
  listaFilmes.innerHTML = "";
  
  console.log(listaFilmes);
  if(filmes.length > 0){
    filmes.forEach(async(filme) => {
      listaFilmes.appendChild(await filme.getCard());
    })
  }
}

let detalhesFilme = async (id) => {
  fetch("https://www.omdbapi.com/?apikey=1b5322a&i=" + id)
    .then((resp) => resp.json())
    .then((resp) => {
      let filme = new Filme(
        resp.imdbID,
        resp.Title,
        resp.Year,
        resp.Genre.slipt(","),
        resp.Runtime,
        resp.Poster,
        resp.plot,
        resp.Director,
        resp.Actors.slipt(","),
        resp.Awards,
        resp.imdbRating
      )
      console.log(Filme);
    });
};