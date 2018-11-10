const express = require('express')
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

const app = express()
const port = process.env.PORT || 3000

app.get('/', async(req, res) => {
  res.render('index')
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)

app.listen(port, (err) => {
  if(err){
    console.log('Error')
  }else{
    console.log('Como-fazer Server in running on port:', port)
  }
})