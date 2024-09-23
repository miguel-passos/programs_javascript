function tabuada() {
    var n = document.getElementById('multx')
    var tabela = document.getElementById('tab')
    if (n.value.length == 0) {
        window.alert('Por favor, digite um numero')
    } else {
        var num = Number(n.value)
        var cont = 1
        while (cont <= 10) {
            var txt = document.createElement('option')
            txt.text = `${num} x ${cont} = ${num*cont}`
            tabela.appendChild(txt)
            cont++
        }
    }
}