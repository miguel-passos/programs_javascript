var num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
//num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é ${num[0]}`)
var pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor esta na posição ${pos}`)    
}