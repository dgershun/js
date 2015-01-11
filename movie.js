//different movie types
REGULAR = 0;
NEW_RELEASE = 1;
CHILDREN = 2;

/**
 * Stores information about a movie
 */
function Movie(title, priceCode) {
  this.title = title;
  this.priceCode = priceCode;
}

/**
 * Represents information about movie rental
 */
function Rental(movie, daysRented) {
  this.movie = movie;
  this.daysRented = daysRented;
}