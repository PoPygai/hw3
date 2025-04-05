const http =require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const url = new URL("http://localhost:3005" + req.url);

    if (url.pathname === "/time"){
        const now = new Date().toTimeString().split(' ')[0];
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({mess:now+''}));

    } else if(url.pathname.split('/')[1] === "hello-user") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({mess:'hello ' +url.pathname.split('/')[2]}));

    } else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404");
    }

})

server.listen(3005,()=>{
    console.log('Server started on port http://localhost:3005/')
})


