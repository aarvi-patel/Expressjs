// const {SSL_OP_TLS_BLOCK_PADDING_BUG} = require('constants')
const express = require('express')
var exphbs  = require('express-handlebars');

const path = require ('path');
const app = express()
const port = 3000

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname,"static")))
app.use('/', require(path.join(__dirname,'router/blog.js')))


app.listen(port, () => {
  console.log(`Blog  app listening on at http://localhost:${port}`)
})