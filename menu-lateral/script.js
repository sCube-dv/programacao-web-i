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


/* Lógica para Expandir o Menu */

/* Armazena o botão de expandir e o menu lateral */
let btnExp = document.querySelector('#btn-exp')
let sideMenu = document.querySelector('.menu-lateral')

/* Adiciona evento de 'click' ao botão expandir e alterna a inserção da classe 'expandir' ao elemento 'nav' e assim é realizada a exibição/ocultação do menu */

/* Obs.: Função anônima `function(){}` */
btnExp.addEventListener('click', function(){
    sideMenu.classList.toggle('expandir')
})