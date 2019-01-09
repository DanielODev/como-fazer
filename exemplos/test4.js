const fs = require('fs') // filesystem

const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, content) => {
            if (err) {
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
}
const processaArquivos = async() => {
    const file1 = await readFile('test1.js')
    console.log('historico do file 1: ', file1)
    try{
        const file2 = await readFile('test2.js')
        console.log('historico do file 2: ', file2)
    }catch(err){
        console.log('file2 Erro', err)
        }

}
processaArquivos()


/*readFile('test1.js')
    .then(content => {
        console.log(content)
    })
    .catch(err =>{
        console.log(err)
    })*/