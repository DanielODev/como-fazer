console.log('Primeira mensagem no JS')
//linguagem C-like

//exemplos arrow function
const soma = (num1, num2) => num1 + num2 //pure function

const sub = (num1, num2) => num1 - num2

const mult = (num1, num2) => {   //
    return num1 * num2
}

const div = (num1, num2) => num1 / num2

const operacao = (operacao, num1 , num2) => {
    return operacao(num1, num2)
}

console.log('soma: ', operacao(soma, 10, 20))
console.log('multiplicação: ', operacao(mult, 10, 20))
console.log('Divisão: ' , operacao(div, 10, 2) )
console.log('subtração: ', (sub, 10, 5))