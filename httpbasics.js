const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send("Hi")
})

app.post('/contact',(req,res)=>{
    res.send(req.body)
})

app.post('/login',(req,res)=>{
    if(!req.header('x-auth-token')){
        return res.status(400).send('No Token');
    }
    if(req.header('x-auth-token')!=='123456'){
        return res.status(401).send('Not authorized');
    }
    res.send('Logged in');
})

app.put('/post/:id',(req,res)=>{

    res.json({
        id:req.params.id,
        title:req.body.title
    });
});

app.delete('/post/:id',(req,res)=>{

    res.send(`Item with id ${req.params.id} is deleted successfully`)
});

app.listen(5000, ()=>console.log(`Server started on 5000`))