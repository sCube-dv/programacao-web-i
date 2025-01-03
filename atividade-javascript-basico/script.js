/* Armazena em 'itemMenu' os indices de todos os itens da lista */
let itemMenu = document.querySelectorAll('.item-menu')

/* Função que adiciona a classe 'ativo' no item de menu selecionado */
function selectedItem() {
    itemMenu.forEach ((item) => 
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

/* Pega o click do item selecionado e executa a função 'selectedLink' */ 
itemMenu.forEach((item) => 
    item.addEventListener('click', selectedItem)
)

/* Lógica para calcular o fatorial do número informado */

let n = document.getElementById('nFat')

const btnCalc = document.getElementById('calcFat')

btnCalc.addEventListener('click', () => {
    let fat = parseInt(n.value) /* converte para numero int */

    /* Verifica se é um valor válido */
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


/* Lógica para Expandir o Menu */

/* Armazena o botão de expandir e o menu lateral */
// let btnExp = document.querySelector('#btn-exp')
// let sideMenu = document.querySelector('.menu-lateral')

/* Adiciona evento de 'click' ao botão expandir e alterna a inserção da classe 'expandir' ao elemento 'nav' e assim é realizada a exibição/ocultação do menu */

/* Obs.: Função anônima `function(){}` */
// btnExp.addEventListener('click', function(){
//     sideMenu.classList.toggle('expandir')
// })