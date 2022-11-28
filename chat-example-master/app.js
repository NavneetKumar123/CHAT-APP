const { response } = require('express');
const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/button.html')
})
app.get('/downloads',(req,res)=>{
    res.download('./demo.txt',function(err){
        if(err){
            console.log("no such file ")
        }else{
            console.log("file download successfully ")
        }
    })
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})