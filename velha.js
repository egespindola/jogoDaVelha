var jogador = null;
var vencedor = null;
var jogadorSelecionado  = document.getElementById("jogador-selecionado");
var vencedorSelecionado = document.getElementById("vencedor-selecionado");
var quadrados = document.getElementsByClassName("quadrado");

mudarJogador("X")

function escolherQuadrado(id) {
    //  console.log(`vencedor=${vencedor}`)
    if (vencedor != null) {
        let congrats = jogadorSelecionado;
        congrats.style.color = "#0b0";
        congrats.style.fontSize = "40px";
        congrats.style.fontWeight = "900px";
        congrats.innerHTML = "PARABÉNS JOGADOR " + vencedor.innerHTML;
        return
    }

    var quadrado = document.getElementById(id);
    
    if(quadrado.innerHTML !== '-') {
        return
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = "#000";
 
    if(jogador === "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }

    
    checkWinner();
    mudarJogador(jogador);
}

function mudarJogador(val) {
    jogador = val;
    jogadorSelecionado.innerHTML = jogador;
}

function checkWinner() {
    /*console.log(`div1 = ${quadrados[0].innerHTML}`)*/
    if(checkSequence(quadrados[0].innerHTML, quadrados[1].innerHTML, quadrados[2].innerHTML)){
        setSquareColor(quadrados[0],quadrados[1], quadrados[2]);
        setWinner(quadrados[0].innerHTML);
        return;
    }

    if(checkSequence(quadrados[0].innerHTML,quadrados[4].innerHTML,quadrados[8].innerHTML)) {
        setSquareColor(quadrados[0],quadrados[4], quadrados[8]);
        setWinner(quadrados[0].innerHTML);
        return;
    }

    if(checkSequence(quadrados[0].innerHTML,quadrados[3].innerHTML,quadrados[6].innerHTML)) {
        setSquareColor(quadrados[0],quadrados[3], quadrados[6]);
        setWinner(quadrados[0].innerHTML);
        return;
    }

    if(checkSequence(quadrados[1].innerHTML,quadrados[4].innerHTML,quadrados[7].innerHTML)) {
        setSquareColor(quadrados[1],quadrados[4], quadrados[7]);
        setWinner(quadrados[1].innerHTML);
        return;
    }
        
    if(checkSequence(quadrados[2].innerHTML,quadrados[5].innerHTML,quadrados[8].innerHTML)) {
        setSquareColor(quadrados[2],quadrados[5], quadrados[8]);
        setWinner(quadrados[2].innerHTML);
        return;
    }

    if(checkSequence(quadrados[3].innerHTML,quadrados[4].innerHTML,quadrados[5].innerHTML)) {
        setSquareColor(quadrados[3],quadrados[4], quadrados[5]);
        setWinner(quadrados[3].innerHTML);
        return;
    }

    if(checkSequence(quadrados[6].innerHTML,quadrados[7].innerHTML,quadrados[8].innerHTML)) {
        setSquareColor(quadrados[6],quadrados[7], quadrados[8]);
        setWinner(quadrados[6].innerHTML);
        return;
    }

    if(checkSequence(quadrados[2].innerHTML,quadrados[4].innerHTML,quadrados[6].innerHTML)) {
        setSquareColor(quadrados[2],quadrados[4], quadrados[6]);
        setWinner(quadrados[2].innerHTML);
        return;
    }
}

function checkSequence(quad1, quad2, quad3){
    if(quad1 !== '-' && quad1 === quad2 && quad2 === quad3) {
        return true;
    }
}

function setSquareColor(quad1, quad2, quad3) {
    quad1.style.background = "#0f0";
    quad2.style.background = "#0f0";
    quad3.style.background = "#0f0";
}

function setWinner(quad){
    vencedor = vencedorSelecionado;
    vencedor.innerHTML = quad;
}

function restart(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    jogadorSelecionado.style.color = "#000";
    jogadorSelecionado.fontSize = "30px";
    jogadorSelecionado.fontWeight = "700px";

    for(let i = 0; i < 9; i++) {
        // console.log(`${i}: ${quadrados[i].innerHTML}`)
        quadrados[i].style.background = "#eee";
        quadrados[i].style.color = "#eee";
        quadrados[i].innerHTML = "-";
    }
    
    mudarJogador('X');
}

