var xmlrpc = require('xmlrpc');
var client = xmlrpc.createClient('http://www.moviemeter.nl/ws');

var doCall = function (methodName, options, callback) {
    client.methodCall(methodName, options, function (err, data) {
        if (err) {
            return callback(err, null);
        } else {
            return callback(null, data);
        }
    });
};


// SYSTEM

exports.system_listMethods = function (callback) {
    doCall("system.listMethods", [], callback);
};

exports.system_methodHelp = function (methodName, callback) {
    doCall("system.methodHelp", [methodName], callback);
};

exports.system_methodSignature = function (methodName, callback) {
    doCall("system.methodSignature", [methodName], callback);
};


// API
exports.api_startSession = function (apiKey, callback) {
    doCall("api.startSession", [apiKey], callback);
};

exports.api_closeSession = function (sessionKey, callback) {
    doCall("api.closeSession", [sessionKey], callback);
};


// Film

exports.film_search = function (sessionKey, search, callback) {
    doCall("film.search", [sessionKey, search], callback);
};

exports.film_retrieveScore = function (sessionKey, filmId, callback) {
    doCall("film.retrieveScore", [sessionKey, filmId], callback);
};

exports.film_retrieveImdb = function (sessionKey, filmId, callback) {
    doCall("film.retrieveImdb", [sessionKey, filmId], callback);
};

exports.film_retrieveByImdb = function (sessionKey, imdbCode, callback) {
    doCall("film.retrieveByImdb", [sessionKey, imdbCode], callback);
};

exports.film_retrieveDetails = function (sessionKey, filmId, callback) {
    doCall("film.retrieveDetails", [sessionKey, filmId], callback);
};

exports.film_retrieveImage = function (sessionKey, filmId, callback) {
    doCall("film.retrieveImage", [sessionKey, filmId], callback);
};

exports.film_retrieveReviews = function (sessionKey, filmId, callback) {
    doCall("film.retrieveReviews", [sessionKey, filmId], callback);
};

exports.film_retrieveReview = function (sessionKey, filmId, messageId, callback) {
    doCall("film.retrieveReview", [sessionKey, filmId, messageId], callback);
};

exports.film_retrieveCinema = function (sessionKey, callback) {
    doCall("film.retrieveCinema", [sessionKey], callback);
};

exports.film_retrieveVideo = function (sessionKey, callback) {
    doCall("film.retrieveVideo", [sessionKey], callback);
};

exports.film_retrieveTv = function (sessionKey, callback) {
    doCall("film.retrieveTv", [sessionKey], callback);
};

exports.film_retrieveTvAll = function (sessionKey, callback) {
    doCall("film.retrieveTvAll", [sessionKey], callback);
};


// Director

exports.director_search = function (sessionKey, search, callback) {
    doCall("director.search", [sessionKey, search], callback);
};

exports.director_retrieveDetails = function (sessionKey, directorId, callback) {
    doCall("director.retrieveDetails", [sessionKey, directorId], callback);
};

exports.director_retrieveFilms = function (sessionKey, directorId, callback) {
    doCall("director.retrieveFilms", [sessionKey, directorId], callback);
};

exports.director_retrieveImage = function (sessionKey, directorId, callback) {
    doCall("director.retrieveImage", [sessionKey, directorId], callback);
};


