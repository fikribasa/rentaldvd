const db = require ('../Configs/dbConnects');
module.exports = {
//   getAllBook: callback => {
//     db.query ('SELECT * FROM books', (error, response) => {
//       if (error) console.log (error);
//       callback (error, response);
//     });
//   },
  getAllMoviesPromise: () => {
    return new Promise ((resolve, reject) => {
      db.query ('SELECT * FROM movie', (error, response) => {
        if (!error) {
          resolve (response);
        } else {
          reject (error);
        }
      });
    });
  },
  getMoviesByTitle: title => {
    return new Promise ((resolve, reject) => {
      db.query (
        'SELECT * FROM movie WHERE title=?',
        [title],
        (error, response) => {
          if (!error) {
            resolve (response);
          } else {
            reject (error);
          }
        }
      );
    });
  },
  getMoviesById: id => {
    return new Promise ((resolve, reject) => {
      db.query ('SELECT * FROM movie WHERE id=?', [id], (error, response) => {
        if (!error) {
          resolve (response);
        } else {
          reject (error);
        }
      });
    });
  },
  postMovies: body => {
    return new Promise ((resolve, reject) => {
      db.query (
        'INSERT INTO movie SET title=?, genre=?, country=?',
        [body.title, body.genre, body.country],
        (error, response) => {
          if (!error) {
            resolve (response);
          } else {
            reject (error);
          }
        }
      );
    });
  },
  deleteMovies: id => {
      return new Promise ((resolve,reject) =>{
          db.query('DELETE FROM movie WHERE id=?',
          [id],
          (error,response) => {
            if (!error) {
                resolve (response);
              } else {
                reject (error);
              }
          });
      });
  },

  updateMovies: req  => {
    return new Promise ((resolve, reject) => {
      
      db.query (`UPDATE movie SET ? WHERE id=?`, 
      [req.body, req.id], 
      
      (error, response) => {
        if (!error) {
          resolve (response);
        } else {
          reject (error);
        }
      });
    });
  },

};
