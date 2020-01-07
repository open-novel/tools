const connect = require('connect'),
    serveStatic = require('serve-static'),
    fs = require('fs');

const app = connect();
app.use(serveStatic(fs.realpathSync('../')));
const port = 8090;
console.log('localhost:' + port);
app.listen(port);