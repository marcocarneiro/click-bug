/* 
---------------------------------------------------
    VARIÁVEIS, EVENTOS E EXECUÇÕES AUTOMÁTICAS
---------------------------------------------------
*/

//Variável com a lista de invasores (baseado na classe "invasor")
let invasores = document.querySelectorAll('.invasor')

//Variável com a lista de invasores (baseado na classe "bonzinho")
let bonzinhos = document.querySelectorAll('.bonzinho')

let score = 0

//Tempo para a rodada, modifique a duração do jogo aqui
let tempoRestante = 30

//Largura da tela. Importante para detectar se o 
//inseto saiu de cena
let larguraQuadro = document.getElementById('quadro').offsetWidth

//Altura do quadro
let alturaQuadro = document.getElementById('quadro').offsetHeight

//Comportamento de TODOS os invasores
for (const inv of invasores) {
    let velocInicio = Math.floor(Math.random()*20 + 5)
    let incInicio = Math.floor(Math.random()*10 + 5)
    posicElemento(inv)
    moveElemento(inv, velocInicio, incInicio)
    inv.addEventListener('mousedown', ()=>{ clickBug(inv) })
}

//Comportamento de TODOS os bonzinhos
for (const bom of bonzinhos) {
    let velocInicio = Math.floor(Math.random()*20 + 5)
    let incInicio = Math.floor(Math.random()*10 + 5)
    posicElemento(bom)
    moveElemento(bom, velocInicio, incInicio)
    bom.addEventListener('mousedown', ()=>{ clickBug(bom) })
}


document.getElementById('infoTR').innerText = tempoRestante
document.getElementById('temporest').innerText = tempoRestante
//executa a cada segundo até atingir o valor
//da variável tempoRestante SETINTERVAL
//Após isso GAMEOVER
let tempo = tempoRestante
const tempoGame = setInterval( ()=>{
    //Mostra o tempo nos spans infoTR e temporest
    document.getElementById('infoTR').innerText = tempoRestante
    document.getElementById('temporest').innerText = --tempo
    //se tempo for igual a 0, 
    //fim de jogo e recarrega a página
    if(tempo == -1){
        window.location.assign('gameover.html')
    }

},1000)



