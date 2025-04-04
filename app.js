const http =require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("WELCOME")
        res.end();
    }else if (req.url === "/time"){
        const now = new Date().toTimeString().split(' ')[0];
        res.write(now+'');
        res.end();
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404");
    }
})

server.listen(3005,()=>{
    console.log('Server started on port http://localhost:3005/')
})


