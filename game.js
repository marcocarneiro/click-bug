/* 
---------------------------------------------------
    VARIÁVEIS E FUNÇÕES
---------------------------------------------------
 */

//lista com os invasores
let invasores = document.getElementsByClassName('invasor')
//lista com os "bonzinhos"
let bonzinhos = document.getElementsByClassName('bonzinho')

let score = 0
let tempoRestante = 30

let larguraQuadro = document.getElementById('quadro').offsetWidth


//Função para posicionar um elemento
//recebe parâmetro el que informa o elemento
const posicElement = (el) => {
    let posX = Math.floor(Math.random()*1000)
    let posY = Math.floor(Math.random()*400)
    el.style.position = 'absolute'
    el.style.left = -posX+'px'
    el.style.top = posY+'px'
}

//Desloca os elementos na tela
//recebe parâmetros elemento, velocidade, incremento
const moveElemento = (el, veloc, inc)=> {

    //executa a cada x milissegundos
    const anima = setInterval(() => {
        veloc = veloc + inc
        el.style.left = veloc +'px'
        //verifica se elemento saiu do quadro e possui a
        //classe emtela
        //remove a classe e volta para uma posição inicial
        if(veloc > larguraQuadro){
            veloc = -1000
            posicElement(el)
        }
    }, 40);    
}











/* 
------------------------------------------------------
        EVENTOS E EXECUÇÕES AUTOMÁTICAS 
------------------------------------------------------
 */

for(inv of invasores){
    posicElement(inv)
    moveElemento(inv, Math.random()*10, Math.random()*19+1)
}

