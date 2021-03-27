const { Chara, Skill } = require('../models');

class CharaController {
  async getAllCharacter(req, res, next) {
    try {
      let result = await Chara.findAll({
        attributes: ['id', 'name'],
        include: {
          model: Skill,
          attributes: ['element']
        }
      });

      let stringed = JSON.stringify(result);
      let parsed = JSON.parse(stringed);
      
      res.status(200).json({
        result: parsed
      });
    } catch (error) {
      res.status(400).json({
        error: error
      });
    }
  }
}

module.exports = CharaController;
