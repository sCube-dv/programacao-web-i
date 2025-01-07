/* Armazena em 'itemMenu' os indices de todos os itens da lista */
let itemMenu = document.querySelectorAll('.item-menu')

/* Função que adiciona a classe 'ativo' no item de menu selecionado */
function selectedItem() {
    itemMenu.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

/* Pega o click do item selecionado e executa a função 'selectedLink' */
itemMenu.forEach((item) =>
    item.addEventListener('click', selectedItem)
)


/* Lógica para exibir e ocultar as telas principais */
/* funções para mostrar as telas de acordo com a opção de menu selecionada */
const mostrarHome = () => {

    // alert('home')
    let home = document.getElementsByClassName('home')

    if(home.style.display === 'none'){
        // home.style.display = 'block'
        alert('home')
    } else {
        home.style.display = 'none'
    }
    
}


/* Lógica para calcular o fatorial do número informado */

let n = document.getElementById('nFat')

const btnCalc = document.getElementById('calcFat')

btnCalc.addEventListener('click', () => {
    let fat = parseInt(n.value) /* converte para numero int */

    /* Verifica se é um valor válido (número >= 0) */
    if (isNaN(fat) || fat < 0) {
        alert("Por favor, insira um número inteiro não negativo")
        return
    }

    let resultado = 1 /* Valor inicial (ps.: 0!=1) */
    for (let i = fat; i > 1; i--) {
        resultado *= i
    }

    document.getElementById('fatRes').innerHTML = `O fatorial do número ${fat} é <strong>${resultado}</strong> `
})

const limpar = () => document.getElementById('fatRes').innerHTML = ''



/* Lógica para calcular a multiplicação entre os vetores */

const nElemVet = document.getElementById('nElemVet')

let vetA = []
let vetB = []
let vetRes = []

const preencherVetor = document.getElementById('preencherVetor')

preencherVetor.addEventListener('click', () => {

    let nElem = parseInt(nElemVet.value)
    alert(`Ok! Cada Vetor terá ${nElem} elementos! Vamos Preenchê-los...`)

    for (let i = 0; i < nElem; i++) {
        vetA[i] = parseInt(prompt(`Infome o ${i+1}° valor para o Vetor A:`))
    } 
    for (let i = 0; i < nElem; i++) {
        vetB[i] = parseInt(prompt(`Infome o ${i+1}° valor para o Vetor B:`))
    } 
    for (let i = 0; i < nElem; i++) {
        vetRes[i] = vetA[i]*vetB[i]
    } 

    document.querySelector('.vetA').innerText = `Vetor A: [${vetA}]`
    document.querySelector('.vetB').innerText = `Vetor A: [${vetB}]`
    document.querySelector('.vetRes').innerText = `Vetor A*B: [${vetRes}]`
})

const limparVet = () => {
    document.querySelector('.vetA').innerText = ''
    document.querySelector('.vetB').innerText = ''
    document.querySelector('.vetRes').innerText = ''
}

/* Lógica para Preencher e Retornar a Posição de um Item em um Vetor */

const qtdElemVet = document.getElementById('qtdElemVet')

let Vet = []

const povoarVetor = () => {
    let vNelem = parseInt(qtdElemVet.value)

    alert(`Ok! O Vetor terá ${vNelem} elementos! Vamos Preenchê-los...`)

    for (let i = 0; i < vNelem; i++) {
        Vet[i] = parseInt(prompt(`Infome o ${i+1}° valor para o Vetor`))
    }

    return document.querySelector('.exibVet').innerText = `Vetor [${Vet}]`
}

const elemPos = document.getElementById('elemPos')

const mostraPosElem = () => {
    let posElem = parseInt(elemPos.value)

    for(let i = 0; i < Vet.length; i++){

        if (Vet[i] === posElem) {
            return document.querySelector('.posItemVet').innerHTML = `O elemento '<strong>${posElem}</strong>' ocupa a posição '<strong>${i}</strong>' no <strong>Vetor [${Vet}]</strong>`
        }

        return document.querySelector('.posItemVet').innerHTML = `O elemento '<strong>${posElem}</strong>' não pertence ao <strong>Vetor [${Vet}]</strong>`
    }
        
}



/* Lógica para Expandir o Menu */

/* Armazena o botão de expandir e o menu lateral */
// let btnExp = document.querySelector('#btn-exp')
// let sideMenu = document.querySelector('.menu-lateral')

/* Adiciona evento de 'click' ao botão expandir e alterna a inserção da classe 'expandir' ao elemento 'nav' e assim é realizada a exibição/ocultação do menu */

/* Obs.: Função anônima `function(){}` */
// btnExp.addEventListener('click', function(){
//     sideMenu.classList.toggle('expandir')
// })