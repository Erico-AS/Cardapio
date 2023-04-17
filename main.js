window.addEventListener("load", start);

var diasAlimentos = {
    segunda: [],
    terca: [],
    quarta: [],
    quinta: [],
    sexta:[]
}

var isEditing = false
var tabela = document.getElementById("tabela")
var select = document.getElementById("dia-semana")
var dia = select.options[select.selectedIndex].value
var enviar = document.getElementById("enviar")

function start() {
    inputAlimento = document.querySelector("#inputAlimento").value //armazena o valor do input na variavel
}

enviar.addEventListener('click', e => {
    if (inputAlimento.value!=' ') {
        if (isEditing) {
        "funcaoDeAtualizarNome"(inputAlimento.value);
        } else {
            diasAlimentos[dia].push(inputAlimento.value)
            criarTabela()
        }
        criarTabela()
    }

})

function criarTabela() {
    for (var i = 0; i < 5; i++) {
        tabela.innerHTML += `<td>
            <tr>${diasAlimentos[dia[i]]}</tr>
        </td>`
    }
}

function clearInput() {
    inputAlimento.value = " ";

}