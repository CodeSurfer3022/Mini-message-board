var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there",
    user: "Rama",
    added: new Date()
  },
  {
    text: "Hello World",
    user: "Chakri",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message board', messages: messages });
});

module.exports = router;
