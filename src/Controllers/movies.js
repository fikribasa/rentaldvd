const modelMovies = require("../Models/movies");
const formResponse = require("../Helpers/formResponse");
module.exports = {
  // getAllBook: (req, res) => {
  //   modelBook.getAllBook ((error, response) => {
  //     const formResponse = {
  //       status: 200,
  //       data: response,
  //     };
  //     if (error) {
  //       console.log (error);
  //     } else {
  //       res.json (formResponse);
  //     }
  //   });
  // },
  getAllMoviesPromise: (req, res) => {
    modelMovies
      .getAllMoviesPromise()
      .then(response => {
        formResponse.success(res, 200, response);
      }) //resolve
      .catch(error => console.log(error)); //reject
  },
  getMoviesByTitle: (req, res) => {
    const title = req.params.title;
    modelMovies
      .getMoviesByTitle(title)
      .then(response => {
        formResponse.success(res, 200, response);
      })
      .catch(error => console.log(error));
  },
  getMoviesById: (req, res) => {
    const id = req.params.id;
    modelMovies
      .getMoviesById(id)
      .then(response => {
        formResponse.success(res, 200, response);
      })
      .catch(error => console.log(error));
  },
  postMovies: (req, res) => {
    const reqBody = {
      title: req.body.title,
      genre: req.body.genre,
      country: req.body.country
    };
    modelMovies
      .postMovies(reqBody)
      .then(response => {
        formResponse.success(res, 200, response);
      })
      .catch(error => console.log(error));
  },

  deleteMovies: (req, res) => {
    const id = req.params.id;
    modelMovies
      .deleteMovies(id)
      .then(response => {
        formResponse.success(res, 200, response);
      })
      .catch(error => console.log(error));
  },

  updateMovies: (req, res) => {
    const data = { body: req.body, id: req.params.id };
    modelMovies
      .updateMovies(data)
      .then(response => {
        formResponse.success(res, 200, response);
      })
      .catch(error => console.log(error));
  },

  sortGenre: (req, res) => {
    const genre = req.params.genre;
    modelMovies
      .sortByGenre(genre)
      .then(response => {
        formResponse.success(res, 200, response);
      })
      .catch(error => console.log(error));
  },

  sortCountry: (req, res) => {
    const country = req.params.country;
    modelMovies
      .sortByCountry(country)
      .then(response => {
        formResponse.success(res, 200, response);
      })
      .catch(error => console.log(error));
  },

  paginationShow: (req, res) => {
    const page = req.params.page;
    modelMovies
      .paginationShow(page)
      .then(response => {
        formResponse.success(res, 200, response);
      })
      .catch(error => console.log(error));
  }
};
