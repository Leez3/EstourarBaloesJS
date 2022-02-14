function addBola() {
    var bola = document.createElement("div");
// ADICIONANDO A CLASS .bola que ja está criada com as propriedades corretas no style.css
    bola.setAttribute("class", "bola"); 



// Criando posiçoes aleatórias dentra da página
    var bgcolor = Math.floor( Math.random() * 999999 );
    var p1 = Math.floor( Math.random() * 500 );
    var p2 = Math.floor( Math.random() * 400 ); 
    bola.setAttribute("style", "left:"+p1+"px; top:"+p2+"px; background-color:#"+bgcolor+";");
    bola.setAttribute("onclick", "estourar(this)");
    document.body.appendChild(bola);

}

function estourar(elemento) {
    document.body.removeChild(elemento);
}


function iniciar() {
    setInterval(addBola, 1000)
}