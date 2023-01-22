 require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function (req,res){
    res.send(`
        <body style="margin:0;">
             <div style="border: 1px solid black; height:10vh; background-color: white;">
                   <h2 style="text-align: center;">NAV BAR</h2>
            <div>
            <h1>WHite Page</h1>
        <body>    
    `)
})
app.get('/teal',function(req,res){
    res.send(`
    <body style="margin:;"> 
          <div style= "border: 1px solid black; height: 10vh;background-color: teal;">
           <h2 style= "text-align: center;">NAV BAR</h2>
        </div>
        <h1 style="color : teal;">Teal Page</h1>
        <body>
    
    `)
})
app.post('/:color',(req,res)=>{
    res.send('Hello world')
})
app.listen(process.env.PORT)