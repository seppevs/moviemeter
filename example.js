var moviemeter = require('./lib/moviemeter');

moviemeter.system_listMethods(function (err, result) {
    console.log(result);
});

moviemeter.system_methodHelp('film.search', function (err, result) {
    console.log(result);
});

moviemeter.system_methodSignature('film.search', function (err, result) {
    console.log(result);
});

moviemeter.api_startSession('MY_SECRET_API_KEY', function (err, session) {

    console.log(session);

    moviemeter.film_search(session.session_key, 'Wolf of Wall Street', function (err, result) {
        console.log(result);
    });

    moviemeter.film_retrieveScore(session.session_key, 88813, function (err, result) {
        console.log(result);
    });

    moviemeter.film_retrieveImdb(session.session_key, 88813, function (err, result) {
        console.log(result);
    });

    moviemeter.film_retrieveByImdb(session.session_key, '0993846', function (err, result) {
        console.log(result);
    });

    moviemeter.film_retrieveDetails(session.session_key, 88813, function (err, result) {
        console.log(result);
    });

    moviemeter.film_retrieveImage(session.session_key, 88813, function (err, result) {
        console.log(result);
    });

    moviemeter.film_retrieveReviews(session.session_key, 88813, function (err, result) {
        console.log(result);
    });

    moviemeter.film_retrieveReview(session.session_key, 88813, 4093135, function (err, result) {
        console.log(result);
    });

    moviemeter.film_retrieveCinema(session.session_key, function (err, result) {
        console.log(result);
    });

    moviemeter.film_retrieveVideo(session.session_key, function (err, result) {
        console.log(result);
    });

    moviemeter.film_retrieveTv(session.session_key, function (err, result) {
        console.log(result);
    });

    moviemeter.film_retrieveTvAll(session.session_key, function (err, result) {
        //console.log(result);
    });

    moviemeter.director_search(session.session_key, 'Stanley Kubrick', function (err, result) {
        console.log(result);
    });

    moviemeter.director_retrieveDetails(session.session_key, 13874, function (err, result) {
        console.log(result);
    });

    moviemeter.director_retrieveFilms(session.session_key, 13874, function (err, result) {
        console.log(result);
    });

    moviemeter.director_retrieveImage(session.session_key, 13874, function (err, result) {
        console.log(result);
    });

    moviemeter.api_closeSession(session.session_key, function (err, result) {
        console.log(result);
    });

});