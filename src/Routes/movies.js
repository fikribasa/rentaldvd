const express = require ('express');
const movie = require ('../Controllers/movies');

const router = express.Router ();

// router.get ('/callback', movie.getAllBook);
router.get ('/', movie.getAllMoviesPromise);
router.get ('/title/:title', movie.getMoviesByTitle);
router.get ('/id/:id', movie.getMoviesById);
router.post ('/', movie.postMovies);
router.delete('/:id',movie.deleteMovies);
router.patch('/:id', movie.updateMovies);

module.exports = router;
