var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var unObj = {
    code: 100,
    when: new Date().toISOString(),
    where: 'ici'
  };
  if (req.query.message){
    unObj.code = 1;
    unObj.data = 'Traitement de ' + req.query.message + ' OK';
  } else {
    unObj.code = -1;
    unObj.data = 'Traitement de msg KO';
  }
  res.setHeader('Access-Control-Allow-Origin','*');
  res.send(unObj);
});

module.exports = router;
