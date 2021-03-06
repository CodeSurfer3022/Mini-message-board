const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Messages', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form', {title: 'Add a new message'})
});

router.post('/new', (req, res) => {
  let newMessage = {
    text: req.body.message,
    user: req.body.author,
    added: new Date()
  }
  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
