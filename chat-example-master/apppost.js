const express=require('express')
const app=express();
const fs = require('fs')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/form.html')
})
app.post('/apply',(req,res)=>{
    response={
        first:req.query.first,
        second:req.query.second,
        gender:req.query.gender
    }
    // console.log(response)
    // res.end(JSON.stringify(response))
    fs.write('<table boreder=2>')
    fs.write('<tr><th>>Firest Name</th><th>LastName</th>Gender<th></th>')
    fs.write('<tr>')
    fs.write('<td>' +req.query.first +'</td>')
    fs.write('<td>' +req.query.second +'</td>')
    fs.write('<td>' +req.query.gender +'</td>')
    
    fs.write('</tr>')
    fs.write('</table>')
    res.end()
})  
app.listen(5000,()=>{
    console.log('dsfghjk')
})