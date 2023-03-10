let inputBuscarFilmes = document.querySelector("input-buscar-filmes");
let btnBuscarFilmes = document.querySelector("btn-buscar-filmes");


btnBuscarFilmes.onclick = () =>{
    if(inputBuscarFilmes.value.length > 0){
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a6bbbd1f" +inputBuscarFilmes.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
            console.log(resp);
        })
    }
    return false;
}
