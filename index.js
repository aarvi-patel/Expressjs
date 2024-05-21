
const express = require('express')
const path = require ('path');
const app = express()
const port = 3000
// 
// const aarviMiddleware = (req,res,next)=>{
  // console.log(req)
  // next()
// }
// show folder file
app.use(express.static(path.join(__dirname,"public")))
// app.use(aarviMiddleware)


app.get('/home:name', (req, res) => {
  res.send('Hello World! aarvi..............'+ req.params.name)
})


app.get('/about', (req, res) => {
  // res.send('Hello about the page,..............')
  res.sendFile(path.join(__dirname,'index.html'))
  // res.status(500)
  // res.json({'aaarvi':255})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})