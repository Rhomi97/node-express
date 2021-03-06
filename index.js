const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const dishRouter = require('./routes/leaderRouter');
const dishRouter = require('./routes/promoRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json);

app.use('/dishes', dishRouter);
app.use('/leaders', dishRouter);
app.use('/promos', dishRouter);
app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {
    res.estatusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});