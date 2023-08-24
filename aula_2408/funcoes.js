function somar(...n) {
    let soma = 0

    for(let i = 0; i < n.langht; i++){

        soma += n[i]
    }

    return soma
}

function contarAteN(n) {
    if(n > 0){
    contarAteN(n-1)
    console.log(n)
    }
}

const calculadora = {
    somar: function(a, b) {
        return a+b
    },
    subtrair: function(a, b) {
        return a-b
    }
}

console.log(calculadora.subtrair(1, 3))