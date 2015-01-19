var expect = require('chai').expect,
    sinon = require('sinon'),
    proxyquire = require('proxyquire');


describe('xmlrpc client', function () {
    var moviemeter, xmlrpcStub;

    before(function () {
        xmlrpcStub = {
            createClient: sinon.spy()
        };
        moviemeter = proxyquire('../lib/moviemeter', {'xmlrpc': xmlrpcStub});
    });

    it('is created for the expected url', function () {
        expect(xmlrpcStub.createClient.calledWith('http://www.moviemeter.nl/ws'));
    });

});

describe('moviemeter', function () {
    var moviemeter, xmlrpcStub, methodCallStub;

    before(function () {
        methodCallStub = sinon.stub();
        xmlrpcStub = {
            createClient: function () {
                return {
                    methodCall: methodCallStub
                }
            }
        };
        moviemeter = proxyquire('../lib/moviemeter', {'xmlrpc': xmlrpcStub});
    });

    describe('system_listMethods', function () {
        it('invokes callback with result', function (done) {
            methodCallStub.withArgs('system.listMethods').yields(null, ['list', 'of', 'methods']);
            moviemeter.system_listMethods(function (err, result) {
                expect(result).to.include('list', 'of', 'methods');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('system.listMethods').yields('error', null);
            moviemeter.system_listMethods(function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });

    });

    describe('system_methodHelp', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('system.methodHelp', ['system.listMethods']).yields(null, 'result of system_methodHelp');
            moviemeter.system_methodHelp('system.listMethods', function (err, result) {
                expect(result).to.equal('result of system_methodHelp');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('system.methodHelp', ['system.listMethods']).yields('error', null);
            moviemeter.system_methodHelp('system.listMethods', function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('system_methodSignature', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('system.methodSignature', ['system.listMethods']).yields(null, 'result');
            moviemeter.system_methodSignature('system.listMethods', function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('system.methodSignature', ['system.listMethods']).yields('error', null);
            moviemeter.system_methodSignature('system.listMethods', function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('api_startSession', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('api.startSession', ['my_api_key']).yields(null, 'result');
            moviemeter.api_startSession('my_api_key', function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('api.startSession', ['my_api_key']).yields('error', null);
            moviemeter.api_startSession('my_api_key', function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('api_closeSession', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('api.closeSession', ['my_api_key']).yields(null, 'result');
            moviemeter.api_closeSession('my_api_key', function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('api.closeSession', ['my_api_key']).yields('error', null);
            moviemeter.api_closeSession('my_api_key', function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('film_search', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('film.search', ['session_key', 'wolf of wallstreet']).yields(null, 'result');
            moviemeter.film_search('session_key', 'wolf of wallstreet', function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('film.search', ['session_key', 'wolf of wallstreet']).yields('error', null);
            moviemeter.film_search('session_key', 'wolf of wallstreet', function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('film_retrieveScore', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('film.retrieveScore', ['session_key', 1]).yields(null, 'result');
            moviemeter.film_retrieveScore('session_key', 1, function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('film.retrieveScore', ['session_key', 1]).yields('error', null);
            moviemeter.film_retrieveScore('session_key', 1, function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('film_retrieveImdb', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('film.retrieveImdb', ['session_key', 1]).yields(null, 'result');
            moviemeter.film_retrieveImdb('session_key', 1, function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('film.retrieveImdb', ['session_key', 1]).yields('error', null);
            moviemeter.film_retrieveImdb('session_key', 1, function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('film_retrieveByImdb', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('film.retrieveByImdb', ['session_key', '01']).yields(null, 'result');
            moviemeter.film_retrieveByImdb('session_key', '01', function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('film.retrieveByImdb', ['session_key', '01']).yields('error', null);
            moviemeter.film_retrieveByImdb('session_key', '01', function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('film_retrieveDetails', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('film.retrieveDetails', ['session_key', 1]).yields(null, 'result');
            moviemeter.film_retrieveDetails('session_key', 1, function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('film.retrieveDetails', ['session_key', 1]).yields('error', null);
            moviemeter.film_retrieveDetails('session_key', 1, function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('film_retrieveImage', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('film.retrieveImage', ['session_key', 1]).yields(null, 'result');
            moviemeter.film_retrieveImage('session_key', 1, function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('film.retrieveImage', ['session_key', 1]).yields('error', null);
            moviemeter.film_retrieveImage('session_key', 1, function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('film_retrieveReviews', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('film.retrieveReviews', ['session_key', 1]).yields(null, 'result');
            moviemeter.film_retrieveReviews('session_key', 1, function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('film.retrieveReviews', ['session_key', 1]).yields('error', null);
            moviemeter.film_retrieveReviews('session_key', 1, function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('film_retrieveReview', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('film.retrieveReview', ['session_key', 1, 2]).yields(null, 'result');
            moviemeter.film_retrieveReview('session_key', 1, 2, function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('film.retrieveReview', ['session_key', 1, 2]).yields('error', null);
            moviemeter.film_retrieveReview('session_key', 1, 2, function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('film_retrieveCinema', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('film.retrieveCinema', ['session_key']).yields(null, 'result');
            moviemeter.film_retrieveCinema('session_key', function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('film.retrieveCinema', ['session_key']).yields('error', null);
            moviemeter.film_retrieveCinema('session_key', function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('film_retrieveVideo', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('film.retrieveVideo', ['session_key']).yields(null, 'result');
            moviemeter.film_retrieveVideo('session_key', function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('film.retrieveVideo', ['session_key']).yields('error', null);
            moviemeter.film_retrieveVideo('session_key', function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('film_retrieveTv', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('film.retrieveTv', ['session_key']).yields(null, 'result');
            moviemeter.film_retrieveTv('session_key', function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('film.retrieveTv', ['session_key']).yields('error', null);
            moviemeter.film_retrieveTv('session_key', function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('film_retrieveTvAll', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('film.retrieveTvAll', ['session_key']).yields(null, 'result');
            moviemeter.film_retrieveTvAll('session_key', function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('film.retrieveTvAll', ['session_key']).yields('error', null);
            moviemeter.film_retrieveTvAll('session_key', function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('director_search', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('director.search', ['session_key', 'stanley kubrick']).yields(null, 'result');
            moviemeter.director_search('session_key', 'stanley kubrick', function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('director.search', ['session_key', 'stanley kubrick']).yields('error', null);
            moviemeter.director_search('session_key', 'stanley kubrick', function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('director_retrieveDetails', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('director.retrieveDetails', ['session_key', 82]).yields(null, 'result');
            moviemeter.director_retrieveDetails('session_key', 82, function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('director.retrieveDetails', ['session_key', 82]).yields('error', null);
            moviemeter.director_retrieveDetails('session_key', 82, function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('director_retrieveFilms', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('director.retrieveFilms', ['session_key', 82]).yields(null, 'result');
            moviemeter.director_retrieveFilms('session_key', 82, function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('director.retrieveFilms', ['session_key', 82]).yields('error', null);
            moviemeter.director_retrieveFilms('session_key', 82, function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

    describe('director_retrieveImage', function () {
        it('invokes callback with expected result', function (done) {
            methodCallStub.withArgs('director.retrieveImage', ['session_key', 82]).yields(null, 'result');
            moviemeter.director_retrieveImage('session_key', 82, function (err, result) {
                expect(result).to.equal('result');
                done();
            });
        });

        it('invokes callback with error', function (done) {
            methodCallStub.withArgs('director.retrieveImage', ['session_key', 82]).yields('error', null);
            moviemeter.director_retrieveImage('session_key', 82, function (err, result) {
                expect(err).to.equal('error');
                done();
            });
        });
    });

});