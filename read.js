const { Chara, Skill } = require('./models');

Chara
  .findAll({
    // include: [{
    //   model: Skill
    // }]
  })
  .then(result => {
    let stringed = JSON.stringify(result);
    let parsed = JSON.parse(stringed);
    console.log(parsed);
  })
  .catch(error => console.log(error));
