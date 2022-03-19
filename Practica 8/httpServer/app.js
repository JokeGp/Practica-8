const http = require("http");

// con esta fucion haceos uso de la dependencia http
// donde le damos 1 parametro de peticion y una respuesta
// donde se espceifica que se escribira un hola mundo en el
//body del http en cuanto se escuche acceso a la direccion localhost
// desde la ruta 1337
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end(`Hello World\n`);
//   })
//   .listen(1337, "127.0.0.1");
//
// refactor usando function flecha

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(`Hello World\n`);
  })
  .listen(1337, `127.0.0.1`);
// al acceder a localhost:1337 desde el navegador se utiliza la dependencia
// para crear un servidor con el metodo createServer
// donde se imprime hola mundo
// al revisar la seccion headers se observa información pertinente de
// el contenido de estos
