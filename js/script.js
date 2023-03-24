let inputBuscarFilmes = document.querySelector("#input-buscar-filmes");
let btnBuscarFilmes = document.querySelector("#btn-buscar-filmes");
let filmes;

btnBuscarFilmes.onclick = () => {
  
  if (inputBuscarFilmes.value.length > 0) {
    filmes = new Array();
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
            null
          
          );
          filmes.push(filme);
          
      });
      listarFilmes(filmes);
      
    });
  }
}



let listarFilmes = async(filmes) =>{
  let listaFilmes =  await document.querySelector("#lista-filmes");
  listaFilmes.style.display="flex";
  listaFilmes.innerHTML ="";

  document.querySelector("#mostrar-filmes").innerHTML="";
  document.querySelector("#mostrar-filmes").style.display ="none";

  if(filmes.length > 0){
    filmes.forEach(async(filme) => {
      listaFilmes.appendChild(await filme.getCard());
      filme.getBtnDetalhes().onclick=()=>{
        detalhesFilme(filme.id);
      }
    });
  }
}

let detalhesFilme = async (id) => {
  fetch("https://www.omdbapi.com/?apikey=1b5322a&i=" + id)
  .then((resp) => resp.json())
  .then((resp) => {
      
      console.log(resp);
      let filme = new Filme (
          resp.imdbID,
          resp.Title,
          resp.Year,
          resp.Genre.split(","),
          resp.Runtime,
          resp.Plot,
          resp.Poster,
          resp.Director,
          resp.Actors.split(","),
          resp.Awards,
          resp.imdbRating,
          resp.Awards,
          resp.imdbID
      );
      document.querySelector("#mostrar-filmes").appendChild(filme.getDetalhesFilme());
      document.querySelector("#lista-filmes").style.display="none";
      document.querySelector("#mostrar-filmes").style.display="flex";   
  });
}



