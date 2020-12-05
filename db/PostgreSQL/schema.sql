DROP DATABASE IF EXISTS reviewsDB;

CREATE DATABASE reviewsDB;

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id) NOT NULL,
  listing_id INT REFERENCES listings(listing_id) NOT NULL,
  text VARCHAR(20000) NOT NULL,
  date DATETIME NOT NULL,
  cleanliness SMALLINT DEFAULT 5,
  communication SMALLINT DEFAULT 5,
  check_in SMALLINT DEFAULT 5,
  accuracy SMALLINT DEFAULT 5,
  location SMALLINT DEFAULT 5,
  value SMALLINT DEFAULT 5,
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  avatar_url VARCHAR(255) DEFAULT NULL,
);

DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
  listing_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
);