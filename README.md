# Herkshire Bathaway Timeshare - Reviews Service

> Project description

## Related Projects

  - https://github.com/6-BTDF/reservations-service
  - https://github.com/6-BTDF/ImageCarousel-Service
  - https://github.com/6-BTDF/more-places-service

## Table of Contents

- [Usage](#Usage)
  - [Create](#Creating_Listings)
  - [Read](#Reading_Listings)
  - [Update](#Updating_Reviews)
  - [Delete](#Deleting_Reviews)

## Usage

> Some usage instructions

This reviews service utilizes a RESTful API architecture to retrieve and modify database-hosted, site-critical information. Syntax and routes conform to common sense REST standards.

### Creating_Reviews

> POST: '/api/listings/:listing_id/reviews'

Used to create a review which is associated with an existing listing.

Given a listing id, and the content of a review in the POST body, this path will add a new review with the specified content, and ensure it is attached to a particular listing and user.

INPUT:
- listing_id, stored as a parameter in the url (see code snippet above)
- review stored as JSON in the request body in the format
>{
>  "listing_id" : Number,
>  "user_id" : Number,
>  "username" : String,
>  "name" : String,
>  "email" : String,
>  "avatar_url" : String,
>  "text" : String,
>  "date" : String,
>  "cleanliness" : Number,
>  "communication" : Number,
>  "check_in" : Number,
>  "accuracy" : Number,
>  "location" : Number,
>  "value" : Number,
>}

STATUS CODES:
- (201) on a successful request
- (404) on an unsuccessful request

RESPONSE FORMAT: the id of the created listing OR err message stringified
**JSON**
> {"id" : Number}

### Reading_Reviews_By_Listing

> GET: '/api/listings/:listing_id/'

Used to retrieve all **reviews** by a single listing id.

Given a listing id, this call will return a listing with an array of its associated reviews, and minor supplemental information.

INPUT: listing_id, stored as a parameter in the url (see code snippet above)

STATUS CODES:
- (200) on a successful request
- (404) on an unsuccessful request

RESPONSE FORMAT: a single JSON object in the format
**JSON**
>[
>  {
>    "id" : Number,
>    "listing_id" : Number,
>    "user_id" : Number,
>    "text" : String,
>    "date" : String,
>    "cleanliness :" Number,
>    "communication" : Number,
>    "check_in" : Number,
>    "accuracy" : Number,
>    "location" : Number,
>    "value" : Number,
>  },
>  ...
>]


### Reading_Reviews_By_ID

> GET: '/api/listings/:listing_id/reviews/:review_id/'

Used to retrieve a single **review** by its id number.

Given a review id, this call will return a review with its associated data.

INPUT: review_id, stored as a parameter in the url (see code snippet above)

STATUS CODES:
- (200) on a successful request
- (404) on an unsuccessful request

RESPONSE FORMAT: a single JSON object in the format
**JSON**
>{
>  "id" : Number,
>  "listing_id" : Number,
>  "user_id" : Number,
>  "text" : String,
>  "date" : String,
>  "cleanliness :" Number,
>  "communication" : Number,
>  "check_in" : Number,
>  "accuracy" : Number,
>  "location" : Number,
>  "value" : Number,
>}

### Updating_Reviews

> PUT: '/api/listings/:listing_id/reviews/:review_id/'

Used to update a **review** for a particular listing.

Given a specific listing and review, this route will update said review with information as included in the request body.

INPUT:
- listing_id & review_id, stored as a parameter in the url (see code snippet above)
- review info stored in the request body
**JSON**
>{
>  "user_id" : Number,
>  "username" : String,
>  "name" : String,
>  "email" : String,
>  "avatar_url" : String,
>  "text" : String,
>  "date" : String,
>  "cleanliness" : Number,
>  "communication" : Number,
>  "check_in" : Number,
>  "accuracy" : Number,
>  "location" : Number,
>  "value" : Number,
>}

STATUS CODES:
- (201) on a successful request
- (404) on an unsuccessful request

RESPONSE FORMAT: a single JSON object in the format
**JSON**
>{
>  "reivew_id": String,
>  "user_id" : Number,
>  "username" : String,
>  "name" : String,
>  "email" : String,
>  "avatar_url" : String,
>  "text" : String,
>  "date" : String,
>  "cleanliness" : Number,
>  "communication" : Number,
>  "check_in" : Number,
>  "accuracy" : Number,
>  "location" : Number,
>  "value" : Number,
>}

### Deleting_Review

> DELETE: '/api/listings/:listing_id/reviews/:review_id/'

Used to delete a **review**.

Given a specific review, this will delete the review in question.

INPUT: review_id stored as a parameter in the url

STATUS CODES:
- (200) on a successful request
- (400) on an unsuccessful request

RESPONSE FORMAT: status code and stringified error if any
