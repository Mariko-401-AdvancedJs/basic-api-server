'use strict';

const express = require('express');
const Music = require('../models/music');
const music = new Music();
const validator = require('../middleware/validator');

const router = express.Router();

//RESTful movie routes

router.post('/music', createMusic);
router.get('/music/:id', validator, getOneMusic);
router.get('/music', getAllMusic);
router.put('/music/:id', validator, updateMusic);
router.delete('/music/:id', validator, deleteMusic);

//RESTful route handlers
function createMusic(req, res) {
  const obj = req.body;
  const newMusic = music.create(obj);
  res.status(200).send(newMusic);
}

function getOneMusic(req, res) {
  const id = req.params.id;
  const oneMusic = music.get(id);
  res.status(200).send(oneMusic);
}

function getAllMusic(req, res) {
  const allMusic = music.get();
  res.status(200).send(allMusic);
}

function updateMusic(req, res) {
  const obj = req.body;
  const findMusic = music.update(req.params.id, obj)
  res.status(200).send(findMusic);
}

function deleteMusic(req, res) {
  //figure out how to delete music!!
  res.status(200).send('deleting music');
}

module.exports = router;