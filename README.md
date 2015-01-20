#moviemeter
A node wrapper module for the [Moviemeter.nl](http://moviemeter.nl) [API](http://wiki.moviemeter.nl/index.php/API).

##Installing
```javascript
npm install moviemeter
```
Note: You need to [request an API key](http://www.moviemeter.nl/site/registerclient/) in order to use most functionality of this the API (and this module).


##Basic Usage

Most API calls need an active session key to be passed. You can retrieve one with your API key. See the example below.

```javascript
var moviemeter = require('moviemeter');

var apiKey = 'MY_SUPER_SECRET_API_KEY';

moviemeter.api_startSession(apiKey, function(err, session) {
	var sessionKey = session.session_key;

	// EXAMPLE: Search a film with terms 'Wolf of Wall Street'
	moviemeter.film_search(sessionKey, 'Wolf of Wall Street', function(err, data) {
      console.log(data); // prints out search results (it's a JSON object)
	});

	// Be nice, and inform Moviemeter.nl that you want to close the session when you're done
	moviemeter.api_closeSession(sessionKey, function(err, isClosed) {
		// ...
	});
});
```

### Full List of methods

#### Session
```javascript

// start a session. It will invoked the callback with an array with sessionkey 
// and unix timestamp for session's expiration date
moviemeter.api_startSession(apiKey, callback)

// close a session. The callback will get invoked with a boolean indicating success.
moviemeter.api_closeSession(sessionKey, callback)
```

### Films
```javascript
// retrieves an array with films
moviemeter.film_search(sessionkey, search, callback)

// retrieves array with information about the current score (average, total, amount of votes)
moviemeter.film_retrieveScore(sessionkey, filmId, callback)

// retrieves array with imdb code, url, score and votes for this film
moviemeter.film_retrieveImdb(sessionkey, filmId, callback)

// retrieves filmId corresponding to the imdb code supplied
moviemeter.film_retrieveByImdb(sessionkey, imdbCode, callback) 

// retrieves array with information about the film
moviemeter.film_retrieveDetails(sessionkey, filmId, callback)

// retrieves array with information and base64 encoded contents of poster and its thumbnail
moviemeter.film_retrieveImage(sessionkey, filmId, callback)

// retrieves summarized reviews for the film
moviemeter.film_retrieveReviews(sessionkey, filmId, callback)

// retrieves full review
moviemeter.film_retrieveReview(sessionkey, filmId, messageId, callback)

// retrieve cinema data
moviemeter.film_retrieveCinema(sessionkey, callback)

// retrieve video data
moviemeter.film_retrieveVideo(sessionkey, callback)

// retrieve TV data
moviemeter.film_retrieveTv(sessionkey, callback)

// retrieve all TV data
moviemeter.film_retrieveTvAll(sessionkey, callback)
```

### Directors
```javascript
// returns array with directors
moviemeter.director_search(sessionkey, search, callback)

// returns array with director's information
moviemeter.director_retrieveDetails(sessionkey, directorId, callback)

// returns array with director's films
moviemeter.director_retrieveFilms(sessionkey, directorId, callback)

// returns array with information 
// and base64 encoded contents of director image (if exists) and its thumbnail
moviemeter.director_retrieveImage(sessionkey, directorId, callback)

```
### System
```javascript
// retrieve al ist of methods known to the Moviemeter.nl Web service
moviemeter.system_listMethods(callback)

// get help on a certain web service method
moviemeter.system_methodHelp(methodName, callback)

// get the signature of a method
moviemeter.system_methodSignature(methodName, callback)

```

## Build status
<img src="https://api.travis-ci.org/seppevs/moviemeter.svg" />

-------

## License

(The MIT License)

Copyright (c) by Sebastian Van Sande <sebastian@vansande.org>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
