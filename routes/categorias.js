const express = require('express')
const router = express.Router()
//const api = require('../api')
const controller = require('../controllers/categorias')

// **** abrir tela de inclusão de categorias ****
router.get('/nova', controller.novaForm)

// **** salvar uma nova categoria ****
router.post('/nova', controller.nova)

// **** listar todas as categorias salvas ****
router.get('/', controller.list)

// **** excluir uma categoria ****
router.get('/excluir/:id', controller.apagar)

// **** abrir tela de edição de categoria ****
router.get('/editar/:id', controller.editarForm)

// **** salvar edição de categoria **** 
router.post('/editar/:id', controller.editar)

module.exports = router











//rotas antigas

/*router.get('/nova', (req, res) => {
    res.render('categorias/nova')
    })

router.post('/nova', async (req, res) => {
    await api.create('categorias', {
        categoria: req.body.categoria
    })
    
    res.redirect('/categorias')
})

router.get('', async (req, res) => {
    const categorias = await api.list('categorias')
    res.render('categorias/index', { categorias })              
})

router.get('/excluir/:id', async (req, res) => {
    await api.apagar('categorias', req.params.id)
    res.redirect('/categorias')
})

router.get('/editar/:id', async (req, res) => {
    const categoria = await api.get('categorias', req.params.id)
    console.log(categoria.id, categoria.categoria)
    res.render('categorias/editar', {
           categoria 
        })
       
 })

 router.post('/editar/:id', async (req, res) => {
    await api.update('categorias', req.params.id, {
        categoria: req.body.categoria
    })    
    res.redirect('/categorias')
})*/


module.exports = router