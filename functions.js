//ARMAZENAR ARRAY NO LOCALSTORAGE: https://pt.stackoverflow.com/questions/329223/armazenar-um-array-de-objetos-em-um-local-storage-com-js
// TELA CHEIA:  https://www.joemaster.com.br/tutoriais/como-abrir-tela-inteira-do-navegador-com-javascript/

/* 
---------------------------------------------------
    FUNÇÕES
---------------------------------------------------
*/

//Função para posicionar os elementos na tela
//recebe o parâmetro el q. informa 
//qual elemento se desloca
const posicElemento = (el)=>{
    //sorteia um número p/ os posicionamentos
    let posX = Math.floor(Math.random()*960 + 40)
    let posY = Math.floor(Math.random()*alturaQuadro/2 + 160)

    el.style.position = 'absolute'
    el.style.left = -posX + 'px'
    el.style.top =  posY + 'px'

}

//Função para deslocar os elementos na tela
//parâmetros elemento, velocidade e incremento
const moveElemento = (el, veloc, inc)=> {
    //setInterval - repete função constantemente
    const anima = setInterval( ()=>{
        veloc = veloc + inc
        el.style.left = veloc + 'px'

        //verifica se saiu do quadro OU se possui
        //a classe "morto", sai do quadro e retorna
        if(veloc > larguraQuadro || el.classList.contains('morto')){
            //redefine a velocidade e incremento
            veloc = -Math.random()*400 + 80            
            inc = Math.random()*20 + 5
            posicElemento(el)
            //remove a classe "morto" do elemento
            el.classList.remove('morto')
        }
        //adiciona atributo "velocidade"
        //aos elementos com o valor de incremento
        el.setAttribute('velocidade', inc)
    },40 )    
}

//Função para clicar no inseto - matar o inseto
const clickBug = (el)=>{
    let splash = document.getElementById('splash')
    //captura posição do inseto ao ser clicado
    let left = el.style.left
    let top = el.style.top
    //posiciona splash na mesma posição
    splash.style.left = left
    splash.style.top = top
    //recarrega o gif animado
    splash.src = `${splash.src}?v${Math.random()}`
    
    let ponto = 10
    //se velocidade for maior que 20
    //ponto vale 100 e mostra a imagem "+100" (somente invasores)
    if(el.getAttribute('velocidade') > 20 && el.classList.contains('invasor') ){
        ponto = 100
        //exibe a imagem +100 na posição do inseto
        let img100 = document.getElementById('pts100')
        img100.style.left = el.style.left
        img100.style.top = el.style.top
        //após 1/2 segundo muda o LEFT de img100 
        //para '-5000px' (oculta a imagem)
        setTimeout(()=>{
            img100.style.left = '-5000px'
        }, 500)
    }
    //se elemento for "bonzinho" - classe bonzinho
    //pontuação vale -50
    if(el.classList.contains('bonzinho')){
        ponto = -50
    }
    
    //soma na pontuação geral e remove da tela
    //adiciona a classe "morto"
    score += ponto
    el.classList.add('morto')
    document.getElementById('score').innerText = score
}