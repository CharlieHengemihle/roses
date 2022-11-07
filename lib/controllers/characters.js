const { Router } = require('express');
const { Character } = require('../models/Character');

module.exports = Router().get('/', async (req, res) => {
  const characters = await Character.getAll();
  //   const characterArray = await characters.map(
  //     ({ id, first_name, last_name, quotes }) => ({
  //       id,
  //       first_name,
  //       last_name,
  //       quotes,
  //     })
  //   );
  res.json(characters);
});
