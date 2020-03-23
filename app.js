const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/event',(req,res)=>{
    res.sendFile(path.join(__dirname,'events.html'));
})
app.get('/dashboard',(req,res)=>{
    res.sendFile(path.join(__dirname,'dashboard.html'));
})


let count =0;
io.sockets.on('connection',(socket)=>{
    count+=1
    console.log("socket connected",count);

    socket.on('disconnect',(data)=>{
        count-=1;
        console.log("socket disconnected",count);
    })
    socket.on('message',msg=>{
        io.emit('user',msg);
    })
})

http.listen(3000);

