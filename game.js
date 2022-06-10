/* --------------------------------------------- 
            VARIÁVEIS E FUNÇÕES 
------------------------------------------------*/
//lista com os invasores
const invasores = document.getElementsByClassName('invasor')
//lista com os bonzinhos
const bonzinhos = document.getElementsByClassName('bonzinho')
//largura do quadro
const larguraQuadro = document.getElementById('quadro').offsetWidth
//pontuação
var score = 0
//posicionamento em X e Y dos diversos objetos
var posX, posY 


//função para posicionar os elementos, recebe argumento
// el que é um determinado elemento do HTML
function posicElement(el)
{
    posX = Math.random()*1000
    posY = Math.random()*400

    el.style.position = 'absolute'
    el.style.left = -posX + 'px'
    el.style.top = posY + 'px'
}


//função que desloca os elementos constantemente
//recebe elemento, velocidade deslocamento
function moveElemento(el, veloc, inc)
{   
    //Adiciona ao elemento o atributo velocidade
    el.setAttribute('velocidade', inc)
    //setInterval executa constantemente
    var tempo = setInterval(function(){
        veloc += inc;
        el.style.left = veloc + 'px'
        //Se veloc for maior q o quadro OU
        //elemento tiver a classe 'morto'
        if(veloc > larguraQuadro || el.classList.contains('morto'))
        {
            posicElement(el)
            el.classList.remove('morto')
            veloc = -Math.random()*500;
            //sorteia de 1 a 30
            inc = Math.random()*29+1
            el.setAttribute('velocidade', inc);
        }
    }, 20)
}

//Ao clicar nos invasores, soma score
//e reinicia o invasor
function mataInvasor(el)
{                       
    score += 10
    /* SE ATRIBUTO VELOCIDADE FOR MAIOR QUE 16
    INCREMENTA O SCORE EM + 90 */
    if(el.getAttribute('velocidade') > 16)
    {
        score += 90

        var pt = document.getElementById('pts100')
        pt.style.left = el.style.left;
        pt.style.top = el.style.top;                
        //Processa a função abaixo após
        //400 centézimos de segundo (esconde a pontuação)
        var tmp = setInterval(() => {
            pt.style.left = -500+'px';
            clearInterval(tmp)
        }, 400);
    }

    document.getElementById('score').innerText = score
    //acrescenta a classe 'morto'
    el.classList.add('morto')
}

//Ao clicar nos bonzinhos, diminui score
//e reinicia o bonzinho
function mataBonzinho(el)
{
    score -= 50
    document.getElementById('score').innerText = score
    
}


/* --------------------------------------------
            EVENTOS E EXECUÇÕES AUTOMÁTICAS 
-----------------------------------------------*/
document.getElementById('score').innerText = score

//aplica as funções nos invasores
for(let inv of invasores)
{
    posicElement(inv)
    moveElemento(inv, Math.random()*10, Math.random()*19+1)
    inv.addEventListener('mousedown', function(){
        mataInvasor(this)
    })
}

//aplica as funções nos bonzinhos
for(let bom of bonzinhos)
{
    posicElement(bom)
    moveElemento(bom, Math.random()*10, Math.random()*19+1)
    bom.addEventListener('mousedown', function(){
        mataBonzinho(this)
    })
}
        
