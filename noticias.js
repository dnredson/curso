var http = require('http');

var server = http.createServer(function (req,res){

var categoria = req.url;

if(categoria== '/tecno'){
    res.end("<html><body>Portal de tecno </body></html>")
}
else if(categoria== '/moda'){
    res.end("<html><body>Portal de moda </body></html>")
} else{

res.end("<html><body>Portal de Notícias </body></html>")
}

});

server.listen(3000);



