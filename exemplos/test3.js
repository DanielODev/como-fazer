const fs = require('fs') // filesystem

const callback = (err, content) => {
    if(err) {
        console.log('error', err)
    } else {
        console.log(new String(content))
    }
}
fs.readFile('test1.js', callback)
console.log('fim do arquivo')