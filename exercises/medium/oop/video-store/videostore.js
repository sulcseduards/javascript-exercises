class Video {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
    this.user = null;
    this.allUserRatings = [];
    this.allUserRatings.push(rating);
  }

  get print() {
    let movieInfo = `${this.name}, ${this.getAverageUserRating().toFixed(
      1
    )}, ${this.likedMovies().toFixed(1)}% users liked it. `;
    return this.isRented
      ? `${movieInfo}Movie is not available.`
      : `${movieInfo}Movie is available`;
  }

  rent(user) {
    this.user = user;
  }

  get isRented() {
    return this.user !== null;
  }

  return() {
    this.user = null;
  }

  updateUserRating(userRating) {
    this.allUserRatings.push(userRating);
  }

  getAverageUserRating() {
    return (
      this.allUserRatings.reduce((a, b) => a + b) / this.allUserRatings.length
    );
  }

  likedMovies() {
    let userLikedMovies = this.allUserRatings.filter(rating => rating > 3);
    return (userLikedMovies.length / this.allUserRatings.length) * 100;
  }
}

class VideoStore {
  constructor() {
    this.movies = [];
    this.userRatingChoice = [1, 2, 3, 4, 5];
  }

  addMovie(name, rating) {
    this.movies.push(new Video(name, rating));
  }

  get printContent() {
    return this.movies.map(m => m.print).join("\n ");
  }

  get asChoices() {
    return this.movies
      .filter(movie => !movie.isRented)
      .map(movie => ({ name: movie.print, value: movie }));
  }

  rentMovies(movies, user) {
    for (const movie of movies) {
      movie.rent(user);
    }
  }

  get asChoicesToReturn() {
    return this.movies
      .filter(movie => movie.isRented)
      .map(movie => ({ name: movie.print, value: movie }));
  }

  returnMovie(movie, userRating) {
    movie.return();
    movie.getUserRating(userRating);
  }

  getUserMoviesAsChoices(user) {
    return this.movies
      .filter(movie => movie.user === user)
      .map(movie => ({ name: movie.print, value: movie }));
  }

  getUserRatingChoice() {
    return this.userRatingChoice;
  }
}

exports.Video = Video;
exports.VideoStore = VideoStore;
