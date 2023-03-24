class Ator
{
    constructor(id,nome){
        this.nome=nome;
        this.id=id
    }
}

class Diretor
{
    constructor(id,nome){
        this.nome=nome;
        this.id=id
    }
}


class Filme{
    constructor(id,titulo,ano,genero,cartaz,sinopse,duracao,direcao,elenco,classificacao,avaliacao){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.cartaz=cartaz;
        this.sinopse=sinopse;
        this.duracao=duracao;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.btnDetalhes=null;
    }

    getCard = async () => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src", this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute(
          "style",
          "display:flex; justify-content:space-aroud;"
        );
        let divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1;");
        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow:1;");
        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow:1;");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);
        
        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());
        
        
        return card;  
    }
    
    setBtnDetalhes= () => {
    this.btnDetalhes=document.createElement('button');
    this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
    this.btnDetalhes.setAttribute("id", this.id); 
    this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
  }


  getDetalhesFilme = () =>{
    let divTudo = document.createElement("div");
    divTudo.setAttribute("class","principal");
    let div = document.createElement("div")
    div.setAttribute("class", "imagem")
    let imagens = document.createElement("img")
    imagens.setAttribute("src", this.cartaz);
    imagens.setAttribute("class","img");
    let detalhes= document.createElement("div");
    detalhes.setAttribute("class","detalhes");
    let card = document.createElement("div");
    card.setAttribute("id", "card-body");
    let titulo = document.createElement("h5");
    titulo.setAttribute("class","titulo");
    let ano = document.createElement("p");
    ano.setAttribute("class","texto");
    let genero = document.createElement("p");
    genero.setAttribute("class","texto");
    let duracao = document.createElement("p");
    duracao.setAttribute("class","texto");
    let clas = document.createElement("p");
    clas.setAttribute("class","texto");
    let resumo = document.createElement("p");
    resumo.setAttribute("class","texto");
    let rank = document.createElement("p");
    rank.setAttribute("class","texto");
    let elenco = document.createElement("p");
    elenco.setAttribute("class","texto");
    let ator = document.createElement("p");
    ator.setAttribute("class","texto");
    
    
    titulo.appendChild(document.createTextNode(this.titulo));
    ano.appendChild(document.createTextNode(this.ano));
    genero.appendChild(document.createTextNode(this.genero));
    duracao.appendChild(document.createTextNode(this.duracao));
    clas.appendChild(document.createTextNode(this.classificacao));
    resumo.appendChild(document.createTextNode(this.sinopse));
    rank.appendChild(document.createTextNode(this.avaliacao));
    elenco.appendChild(document.createTextNode(this.direcao));
    ator.appendChild(document.createTextNode(this.elenco));

    
    detalhes.appendChild(titulo);
    detalhes.appendChild(ano);
    detalhes.appendChild(genero);
    detalhes.appendChild(duracao);
    detalhes.appendChild(clas)
    detalhes.appendChild(resumo);
    detalhes.appendChild(rank);
    detalhes.appendChild(elenco);
    detalhes.appendChild(ator);
    div.appendChild(imagens);
    detalhes.appendChild(card);
    divTudo.appendChild(div);
    divTudo.appendChild(detalhes);

    let btnSalvar=document.createElement('button');
    btnSalvar.appendChild(document.createTextNode('Salvar'));
    btnSalvar.setAttribute('id', 'btnSalvar');
    divTudo.appendChild(btnSalvar);

    let btnFechar=document.createElement('button');
    btnFechar.appendChild(document.createTextNode('Fechar'));
    btnFechar.setAttribute('id', 'btnFechar');
    divTudo.appendChild(btnFechar)

    return divTudo;

  
  }

  getBtnDetalhes =() =>{
    return this.btnDetalhes
  }
}





  


