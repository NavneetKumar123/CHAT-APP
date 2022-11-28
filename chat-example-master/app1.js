
const express=require('express');
const app= express();
//app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/form.html')
})
app.get('/apply',(req,res)=>{
    response={
        first:req.query.first,
        second:req.query.second,
        gender:req.query.gender
    }
    console.log(response)
    res.end(JSON.stringify(response))
})




app.listen(4000,()=>{
    console.log(`server is listening...........`)
})