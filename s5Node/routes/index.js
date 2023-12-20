var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function apiController(req, res, next) {
  const apiColombia = await fetch('https://api-colombia.com/api/v1/Country/Colombia')
  .then(response => response.json())
  .then(data => {
    return data     // 12345
  });
  console.log(apiColombia);
  res.render('index', { data: apiColombia });
});

module.exports = router;
