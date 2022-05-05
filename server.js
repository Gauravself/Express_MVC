const express = require('express');
const path = require('path');
const app = express();

//HandleBars template engine
app.set('view engine','hbs');
app.set('views',path.join(__dirname, 'views'));


const friendsRouter = require('./router/friends.router');
const messagesRouter = require('./router/messages.router');

const PORT = 3000;

app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now()-start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

//render data using Template
app.get('/',(req,res)=>{
    res.render('index',{
        title:'This Title comes from HBS',
        caption:'I am very very Knowledge Hungry',
    });
});

//Path if we run express from another directory
app.use('/static',express.static(path.join(__dirname,'public')));
app.use(express.json());

//Req,res can be treated as Controllers
app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter);


app.listen(PORT,()=>{
    console.log(`Listening at Port : ${PORT}`);
})