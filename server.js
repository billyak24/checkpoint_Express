const express=require('express')
const {logger} = require('./logger')
const app= express()
 





app.use(logger)
const PORT = 8080
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.listen(PORT,(err)=>{
   err? console.log(err)
   : console.log(`the server is running in port ${PORT}...`)
}
)