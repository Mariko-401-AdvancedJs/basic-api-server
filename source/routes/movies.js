'use strict';

const express = require('express');
const Movies = require('../models/movies');
const movies = new Movies();
const validator = require('../middleware/validator');

const router = express.Router();

//RESTful movie routes

router.post('/movies', createMovie);
router.get('/movies/:id', validator, getOneMovie);
router.get('/movies', getAllMovies);
router.put('/movies/:id', validator, updateMovie);
router.delete('/movies/:id', validator, deleteMovie);

//RESTful route handlers
function createMovie(req, res) {
  const obj = req.body;
  const newMovie = movies.create(obj);
  res.status(200).send(newMovie);
}

function getOneMovie(req, res) {
  const id = req.params.id;
  const oneMovie = movies.get(id);
  res.status(200).send(oneMovie);
}

function getAllMovies(req, res) {
  console.log('HITTING GET All MOVIES:', req.body)
  const allMovies = movies.get();
  res.status(200).send(allMovies);
}

function updateMovie(req, res) {
  // console.log('HITTING UPDATE MOVIE:', req.params.id)
  const obj = req.body;
  const findMovie = movies.update(req.params.id, obj)
  res.status(200).send(findMovie);
}

function deleteMovie(req, res) {
  console.log('HITTING DELETE MOVIE:', req.params)
  //figure out how to delete movie!!
  res.status(200).send('deleting movie');
}

module.exports = router;