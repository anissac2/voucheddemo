var express = require('express');
const Client = require('@vouched/client');

var router = express.Router();
// const client = Client("Ph8I4agAM-peMgyLV.#~go.#K8R7FW");
//
// const secretClientKey = "Ph8I4agAM-peMgyLV.#~go.#K8R7FW";
// const data = client.updateSecretClientKey(secretClientKey);
/* GET home page. */

router.get('/', function(req, res, next) {
    res.sendFile('index.html', {root: __dirname })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
