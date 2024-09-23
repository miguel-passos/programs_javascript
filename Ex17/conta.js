function contar() {
    var cont = document.getElementById('inicio')
    var fin = document.getElementById('fim')
    var passo = document.getElementById('pulo')
    var txt = document.getElementById('msg')
    if (passo == 0) {
        window.alert('Passo invalido! Considerando PASSO 1')
    } else if (cont.value.length == 0 || fin.value.length == 0 || passo.value.length == 0) {
        txt.innerText = '<p>Impossivel contar!</p>'
    } else {
        txt.innerText = 'Contando:'
        var contagem = Number(cont.value)
        var f = Number(fin.value)
        var p = Number(passo.value)
        for(var c = contagem; c <= f; c += p) {
        txt.innerHTML += `${c}👉`
        }
        txt.innerHTML += '🏁' 
    }
}