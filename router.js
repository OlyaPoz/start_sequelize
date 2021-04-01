const { Router } = require('express');
const UserController = require('./controller/user.controller');
const router = Router();

router.get('/', (req, res, next) => {
  res.send('ok');
});

module.exports = router;