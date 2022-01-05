const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
 promoRouter.use(bodyParser.json);
 promoRouter.route('/')
.all( (req, res, next) => {
    res.statusCode(200);
    res.setHeader('Content-Type','text/plain');
    next();
})

.get( (req,res,next) => {
    res.end('Will send all the promos to you!');
})

.post( (req,res,next) => {
    res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
})

.put( (req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not suported on /promos');
})

.delete( (req,res,next) => {
    res.end('Deleting all the promos!');
})

.get('/:promoId', (req,res,next) => {
    res.end('Will send details of th promo ' + req.params.promoId + ' to you!');
})

.post('/:promoId',  (req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation not suported on promos/' + req.params.promoId);
})

.put('/:promoId',  (req,res,next) => {
    res.write('Updating th promo ' + req.params.promoId);
    res.end('Will update th promo ' + req.body.name + ' with details: ' + req.body.description)
})

.delete('/:promoId', (req,res,next) => {
    res.end('Deletin promo ' + req.params.promoId);
})

module.exports = promoRouter;