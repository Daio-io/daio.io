'use strict';

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000/api';

var expect = require('chai').expect;
var RequestHelper = require('./helpers/request.helper');
var blogStub = require('./stubs/blog.stub');
var invalidStub = require('./stubs/invalid.stub');
var fakeId;

var req;

describe('Blog API Tests', function () {

    before(function (done){

        req = new RequestHelper(BASE_URL);
        done();
    });

    it('should be able to add a blog post to the api', function (done) {

        req.post('/blogpost', blogStub).on('success', function (data) {

            expect(data.id).to.exist;
            expect(data.status).to.eql('success');
            fakeId = data.id;
            done();

        });

    });

    it('should be able to get all blogposts from the api', function (done) {

        req.get('/blogposts').on('success', function (data) {

            expect(data).to.be.an('array');

            for (var i = 0; i < data.length; i ++){
                expect(data[i]).to.be.an('object');
                expect(data[i]._id).to.exist;
            }

            done();

        });

    });


    it('should be able to get blogposts by id', function (done) {

        req.get('/blogpost/' + fakeId).on('success', function (data) {

            expect(data).to.be.an('object');
            expect(data._id).to.exist;
            expect(data.title).to.eql(blogStub.title);
            expect(data.full).to.eql(blogStub.full);
            expect(data.short).to.eql(blogStub.short);
            expect(data.date).to.exist;
            done();


        });

    });


    it('should return failed when id does not exist', function (done) {

        var madeUpID = '12312dsd';

        req.get('/blogpost/' + madeUpID).on('complete', function (data, response) {

            expect(data).to.be.an('object');
            expect(data.status).to.eql('failed');
            expect(data.message).to.eql('Invalid request');
            expect(response.statusCode).to.eql(400);
            done();


        });

    });

    xit('should return failed if invalid data is sent', function (done) {

        req.post('/blogpost', invalidStub).on('success', function (data) {

            expect(data).to.be.an('object');
            expect(data.status).to.eql('failed');
            expect(data.message).to.eql('Missing or invalid data');

            done();


        });

    });

    it('should return the number of blogposts deleted on del request', function (done) {

        req.delete('/blogpost/' + fakeId).on('success', function (data) {

            expect(data).to.be.an('object');
            expect(data.status.ok).to.eql(1);
            expect(data.status.n).to.eql(1);
            expect(data.message).to.exist;

            done();


        });

    });


    it('should return failed when blogpost id to be deleted is not found', function (done) {

        var madeUpID = '12312dsd';

        req.delete('/blogpost/' + madeUpID).on('complete', function (data, response) {

            expect(data).to.be.an('object');
            expect(data.status).to.eql('failed');
            expect(data.message).to.eql('Invalid request');
            expect(response.statusCode).to.eql(400);

            done();


        });

    });


});