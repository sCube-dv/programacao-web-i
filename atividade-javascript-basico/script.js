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

let homePg = document.querySelector('.home')
let fatorialPg = document.querySelector('.fatorial')
let vetorPg = document.querySelector('.vetor')
let posVetorPg = document.querySelector('.pos-vetor')
let previdenciaPg = document.querySelector('.previdencia')
let impostoRendaPg = document.querySelector('.imposto-renda')


const mostrarHome = () => {
    homePg.classList.remove('ocultar')
    fatorialPg.classList.add('ocultar')
    vetorPg.classList.add('ocultar')
    posVetorPg.classList.add('ocultar')
    previdenciaPg.classList.add('ocultar')
    impostoRendaPg.classList.add('ocultar')
}
const mostrarFat = () => {
    homePg.classList.add('ocultar')
    fatorialPg.classList.remove('ocultar')
    vetorPg.classList.add('ocultar')
    posVetorPg.classList.add('ocultar')
    previdenciaPg.classList.add('ocultar')
    impostoRendaPg.classList.add('ocultar')
}
const mostrarMultVet = () => {
    homePg.classList.add('ocultar')
    fatorialPg.classList.add('ocultar')
    vetorPg.classList.remove('ocultar')
    posVetorPg.classList.add('ocultar')
    previdenciaPg.classList.add('ocultar')
    impostoRendaPg.classList.add('ocultar')
}
const mostrarPosVet = () => {
    homePg.classList.add('ocultar')
    fatorialPg.classList.add('ocultar')
    vetorPg.classList.add('ocultar')
    posVetorPg.classList.remove('ocultar')
    previdenciaPg.classList.add('ocultar')
    impostoRendaPg.classList.add('ocultar')
}
const mostrarPrevidencia = () => {
    homePg.classList.add('ocultar')
    fatorialPg.classList.add('ocultar')
    vetorPg.classList.add('ocultar')
    posVetorPg.classList.add('ocultar')
    previdenciaPg.classList.remove('ocultar')
    impostoRendaPg.classList.add('ocultar')
}
const mostrarIR = () => {
    homePg.classList.add('ocultar')
    fatorialPg.classList.add('ocultar')
    vetorPg.classList.add('ocultar')
    posVetorPg.classList.add('ocultar')
    previdenciaPg.classList.add('ocultar')
    impostoRendaPg.classList.remove('ocultar')
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
    document.querySelector('.vetB').innerText = `Vetor B: [${vetB}]`
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

    }

    return document.querySelector('.posItemVet').innerHTML = `O elemento '<strong>${posElem}</strong>' não pertence ao <strong>Vetor [${Vet}]</strong>`
        
}


/* Lógica para Calcular o Salário Líquido de uma pessoa de acordo com a Alíquota Previdenciária */

const salario = document.getElementById('salario')

const calcSalLiq = () => {
    let sal = parseFloat(salario.value)
    // alert(sal)

    if (sal <= 1412) {
        document.querySelector('.aliqPrev').innerHTML = `Sua Alíquota do INSS é de <strong>7,5%</strong> que representa um desconto de <strong>R$ ${(sal*0.075).toFixed(2)}</strong>`

        document.querySelector('.salLiq').innerHTML = `Seu Salário Líquido é <strong> R$ ${(sal-(sal*0.075)).toFixed(2)} </strong>`
    } else if ((sal > 1412) && (sal <= 2666.68)) {
        document.querySelector('.aliqPrev').innerHTML = `Sua Alíquota do INSS é de <strong>9%</strong> que representa um desconto de <strong>R$ ${(sal*0.09-21.18).toFixed(2)}</strong>`

        document.querySelector('.salLiq').innerHTML = `Seu Salário Líquido é <strong> R$ ${(sal-(sal*0.09-21.18)).toFixed(2)} </strong>`
    } else if ((sal > 2666.68) && (sal <= 4000.03)) {
        document.querySelector('.aliqPrev').innerHTML = `Sua Alíquota do INSS é de <strong>12%</strong> que representa um desconto de <strong>R$ ${(sal*0.12-101.18).toFixed(2)}</strong>`

        document.querySelector('.salLiq').innerHTML = `Seu Salário Líquido é <strong> R$ ${(sal-(sal*0.12-101.18)).toFixed(2)} </strong>`
    } else if ((sal > 4000.03) && (sal <= 7786.02)) {
        document.querySelector('.aliqPrev').innerHTML = `Sua Alíquota do INSS é de <strong>14%</strong> que representa um desconto de <strong>R$ ${(sal*0.14-181.18).toFixed(2)}</strong>`

        document.querySelector('.salLiq').innerHTML = `Seu Salário Líquido é <strong> R$ ${(sal-(sal*0.14-181.18)).toFixed(2)} </strong>`
    } else {
        document.querySelector('.aliqPrev').innerHTML = `Sua Alíquota do INSS é referente ao teto do INSS, o que representa um desconto de <strong>R$ 908.86</strong>`

        document.querySelector('.salLiq').innerHTML = `Seu Salário Líquido é <strong> R$ ${(sal-908.86).toFixed(2)} </strong>`
    }

    
}

/* Lógica para Calcular o Salário Líquido de uma pessoa de acordo com o Desconto do IRPF */

const salarioIR = document.getElementById('salarioIR')

const calcSalIR = () => {
    let salIR = parseFloat(salarioIR.value)

    if (salIR <= 2259.20) {
        document.querySelector('.descIRPF').innerHTML = `Isento`

        document.querySelector('.salLiqIR').innerHTML = `Seu Salário Líquido é <strong> R$ ${(salIR).toFixed(2)} </strong>`
    } else if ((salIR > 2259.20) && (salIR <= 2826.65)) {
        document.querySelector('.descIRPF').innerHTML = `Desconto Imposto de Renda de <strong>7,5%</strong> que representa um desconto de <strong>R$ ${(salIR*0.075-169.44).toFixed(2)}</strong>`

        document.querySelector('.salLiqIR').innerHTML = `Seu Salário Líquido é <strong> R$ ${(salIR-(salIR*0.075-169.44)).toFixed(2)} </strong>`
    } else if ((salIR > 2826.65) && (salIR <= 3751.05)) {
        document.querySelector('.descIRPF').innerHTML = `Desconto Imposto de Renda de <strong>15%</strong> que representa um desconto de <strong>R$ ${(salIR*0.15-381.44).toFixed(2)}</strong>`

        document.querySelector('.salLiqIR').innerHTML = `Seu Salário Líquido é <strong> R$ ${(salIR-(salIR*0.15-381.44)).toFixed(2)} </strong>`
    } else if ((salIR > 3751.05) && (salIR <= 4664.68)) {
        document.querySelector('.descIRPF').innerHTML = `Desconto Imposto de Renda de <strong>22.5%</strong> que representa um desconto de <strong>R$ ${(salIR*0.225-662.77).toFixed(2)}</strong>`

        document.querySelector('.salLiqIR').innerHTML = `Seu Salário Líquido é <strong> R$ ${(salIR-(salIR*0.225-662.77)).toFixed(2)} </strong>`
    } else {
        document.querySelector('.descIRPF').innerHTML = `Desconto Imposto de Renda de <strong>27.5%</strong> que representa um desconto de <strong>R$ ${(salIR*0.275-896).toFixed(2)}</strong>`

        document.querySelector('.salLiqIR').innerHTML = `Seu Salário Líquido é <strong> R$ ${(salIR-(salIR*0.275-896)).toFixed(2)} </strong>`
    }

    
}
