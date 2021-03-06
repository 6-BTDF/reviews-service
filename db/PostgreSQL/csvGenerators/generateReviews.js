/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-await-in-loop */
const fs = require('fs');
const faker = require('faker');
const path = require('path');

const writeReviews = fs.createWriteStream(path.join(__dirname, '/dataHolder/reviews.csv'));
writeReviews.write('review_id,user_id,listing_id,accuracy,check_in,cleanliness,communication,date,text,location,value\n');

const getRandom = function makeRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
};

// generate reviews/users by listing
function generateReviews(numRecords) {
  let reviewID = 1;
  const numListings = numRecords / 100;
  const numUsers = numRecords / 10;

  function recursiveWrite() {
    if (reviewID === numRecords + 1) return writeReviews.end();
    const id = reviewID;
    const userID = getRandom(1, numUsers);
    const listingID = getRandom(1, numListings);
    const text = faker.lorem.sentences();
    const date = `${faker.date.month()} ${getRandom(2015, 2020)}`;
    const cleanliness = getRandom(1, 5);
    const communication = getRandom(1, 5);
    const check_in = getRandom(1, 5);
    const accuracy = getRandom(1, 5);
    const location = getRandom(1, 5);
    const value = getRandom(1, 5);
    const areYouOkayAndy = writeReviews.write(`${id},${userID},${listingID},${accuracy},${check_in},${cleanliness},${communication},${date},${location},${text},${value}\n`);
    reviewID += 1;
    if (!areYouOkayAndy) writeReviews.once('drain', recursiveWrite);
    else recursiveWrite();
  }
  recursiveWrite();
}

generateReviews(100000000);
