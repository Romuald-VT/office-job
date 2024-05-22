//importations
const database = require('./db.config')
const express = require('express')

const app = express()
const port = process.env.SERVER_PORT

app.get('/:myValue',(req,res)=>{
    let urlValue = req.params.myValue;
    res.send("you are on my "+urlValue+" page !")
})

database.authenticate()
.then(()=>{
    console.log('database connection OK !')
    app.listen(port,()=>{console.log("server starting at port "+port+"...")})
    
})
.catch(err =>{
    console.log("database connection error "+err)
})