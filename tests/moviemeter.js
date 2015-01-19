var expect = require('chai').expect,
    sinon = require('sinon'),
    proxyquire = require('proxyquire');


// spies to test that callback is called
// stub to control method behaviour and/or avoid 'real' invocation
//

describe('system_listMethods', function () {
    var moviemeter, xmlrpcStub, methodCallStub;

    before(function () {
        methodCallStub = sinon.stub();
        methodCallStub.yields(null, ['list', 'of', 'methods']);

        xmlrpcStub = {
            createClient: function () {
                return {
                    methodCall: methodCallStub
                }
            }
        };
        moviemeter = proxyquire('../lib/moviemeter', {'xmlrpc': xmlrpcStub});
    });


    it('returns callback with result', function (done) {
        moviemeter.system_listMethods(function (err, result) {
            expect(result).to.include('list','of','methods');
            done();
        });
    });
});