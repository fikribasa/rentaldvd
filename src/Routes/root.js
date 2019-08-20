const express = require ('express');
const movies = require ('../Routes/movies');

const router = express.Router ();

router.use ('/movies', movies);

module.exports = router;
