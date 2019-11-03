const connect = require('connect'),
    serveStatic = require('serve-static'),
    fs = require('fs');

const app = connect();
app.use(serveStatic(fs.realpathSync('../')));
app.listen(8090);