var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var rp = document.getElementById('fres')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var op = document.createElement('option')
        op.text = (`Valor ${num.value} adicionado`)
        lista.appendChild(op)
        rp.innerHTML = ''
    } else {
        window.alert(' Valor invalido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('adicione valores antes de finalizar')
    } else {
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    var media = 0
    var qnt = valores.length
    for(var pos in valores) {
        soma += valores[pos]
        if (valores[pos] > maior) {
            maior = valores[pos]
        }
        if (valores[pos < menor]) {
            menor = valores[pos]
        }
        media = soma / qnt
    }
    rp.innerHTML = ''
    rp.innerHTML += (`<p>Ao todo, temos ${qnt} números cadastrados.</p>`)
    rp.innerHTML += (`<p> O maior valor informado foi ${maior} </p>`)
    rp.innerHTML += (`<p> O menor valor informado foi ${menor} </p>`)
    rp.innerHTML += (`<p> Somando todos os valores, temos ${soma} </p>`)
    rp.innerHTML += (`<p> A media dos valores digitados é ${media} </p>`)
    }
}