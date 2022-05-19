const users = require("./users.json");
const movies = require("./movies.json");
const reviews = require("./reviews.json");

const getMovie = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find((movie) => movie.id === id);
      if (movie) {
        resolve(movie);
      } else {
        reject("Not found");
      }
    }, 1000);
  });
};

const getReview = (movieId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const review = reviews.find((review) => review.movie_id === movieId);
      if (review) {
        resolve(review);
      } else {
        reject("No reviews");
      }
    }, 1000);
  });
};

const getUser = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.name === name);
      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 1000);
  });
};

// getMovie(3)
//   .then((movie) => {
//     return getReview(movie.id);
//   })
//   .then((review) => {
//     return getUser(review.reviewer);
//   })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

(async () => {
  try {
    const movie = await getMovie(3);
    const review = await getReview(movie.id);
    const user = await getUser(review.reviewer);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
})();
