const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
 leaderRouter.use(bodyParser.json);
 leaderRouter.route('/')
.all( (req, res, next) => {
    res.statusCode(200);
    res.setHeader('Content-Type','text/plain');
    next();
})

.get( (req,res,next) => {
    res.end('Will send all the leaders to you!');
})

.post( (req,res,next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})

.put( (req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not suported on /leaders');
})

.delete( (req,res,next) => {
    res.end('Deleting all the leaders!');
})

.get('/:leaderId', (req,res,next) => {
    res.end('Will send details of th leader ' + req.params.leaderId + ' to you!');
})

.post('/:leaderId',  (req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation not suported on leaders/' + req.params.leaderId);
})

.put('/:leaderId',  (req,res,next) => {
    res.write('Updating th leader ' + req.params.leaderId);
    res.end('Will update th leader ' + req.body.name + ' with details: ' + req.body.description)
})

.delete('/:leaderId', (req,res,next) => {
    res.end('Deletin leader ' + req.params.leaderId);
})

module.exports = leaderRouter;