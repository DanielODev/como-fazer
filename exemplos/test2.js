// mono thread
// nunca trave a main thread

console.log('Passo 1')
const  ola = () => console.log('olá')
    setTimeout(ola, 2000)

console.log('Passo2')