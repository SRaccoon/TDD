var express = require('express');
const { UserManager } = require('../class/UserManger');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addUser', function(req, res, next) {
  let userManager = UserManager.getInstance();
  userManager.addUser(req.body.id, req.body.pw, req.body.name);
  let user = userManager.getUser(req.body.id);
  res.json(user);
});

router.post('/removeUser', function(req, res, next) {
  let userManager = UserManager.getInstance();
  userManager.removeUser(req.body.id);
  res.json({msg:'successs'});
});

module.exports = router;
