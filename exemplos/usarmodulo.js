const calc = require('./meumodulo')

const animal = require('./moduloanimal')
/*console.log('soma', 'número', calc.retorna1(10), '+   número', calc.retorna2(20), '=', calc.soma(10, 20))
console.log('Multiplicacao', calc.mult(10, 20))
console.log('Subtração', calc.sub(100, 20))
console.log('Divisão', calc.div(1000, 20))*/
//calculo
const num1 = 100
const num2 = 10

console.log('Soma ', calc.soma(num1, num2))
console.log('Multiplicação ', calc.mult(num1, num2))
console.log('Subtração ', calc.sub(num1, num2))
console.log('Divisão ', calc.div(num1, num2))

//animal
const nome = 'Pipoca'
const classificacao = 'cachorro'

console.log(animal.animal(nome, classificacao))

