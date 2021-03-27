const express = require('express');
const routes = express();
const CharaController = require('../controllers/chara');
const charaController = new CharaController();

routes.get('/', charaController.getAllCharacter);

module.exports = routes;
