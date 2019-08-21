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
router.get ('/page/:page',movie.paginationGenre);
router.get('/genre/:genre',movie.sortGenre);
router.get('/country/:country',movie.sortCountry);

module.exports = router;
