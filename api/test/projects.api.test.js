'use strict';

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

var expect = require('chai').expect;
var RequestHelper = require('./helpers/request.helper');
var projectStub = require('./stubs/project.stub');
var invalidStub = require('./stubs/invalid.stub');
var fakeId;

var req;

describe('Projects API Tests', function () {
    
    before(function (done){
       
        req = new RequestHelper(BASE_URL);
        done();
    });
   
    it('should be able to add a project to the api', function (done) {
        
        req.post('/project', projectStub).on('success', function (data) {
            
            expect(data.id).to.exist;
            expect(data.status).to.eql('success');
            fakeId = data.id;
            done();

        });
        
    });
    
    it('should be able to get all projects from the api', function (done) {
        
        req.get('/projects').on('success', function (data) {
           
            expect(data).to.be.an('array');
            
            for (var i = 0; i < data.length; i ++){
                expect(data[i]).to.be.an('object');
                expect(data[i]._id).to.exist;
            }

            done();

        });
        
    });
   
    
    it('should be able to get a project by id', function (done) {
        
        req.get('/project/' + fakeId).on('success', function (data) {
           
            expect(data).to.be.an('object');
            expect(data._id).to.exist;
            expect(data.name).to.eql(projectStub.name);
            expect(data.description).to.eql(projectStub.description);
            expect(data.projectURL).to.eql(projectStub.projectURL);
            expect(data.platform).to.eql(projectStub.platform);
            expect(data.imageURL).to.eql(projectStub.imageURL);

            done();


        });

    });


    xit('should return 0 projects when id does not exist', function (done) {

        var madeUpID = '12312dsd';

        req.get('/project/' + madeUpID).on('success', function (data) {

            expect(data).to.be.an('object');
            expect(data.status).to.eql('failed');
            expect(data.message).to.exist;

            done();


        });

    });
    
    xit('should return failed if invalid data is sent', function (done) {

        req.post('/project', invalidStub).on('success', function (data) {

            expect(data).to.be.an('object');
            expect(data.status).to.eql('failed');
            expect(data.message).to.eql('Missing or invalid data');

            done();


        });

    });    
    
    it('should return the number of projects deleted on del request', function (done) {

        req.delete('/project/' + fakeId).on('success', function (data) {

            expect(data).to.be.an('object');
            expect(data.status).to.eql(1);
            expect(data.message).to.exist;

            done();


        });

    });
    
        
    xit('should return 0 when project has not been deleted', function (done) {
        
        var madeUpID = '12312dsd';

        req.delete('/project/' + madeUpID).on('success', function (data) {

            expect(data).to.be.an('object');
            expect(data.status).to.eql(0);
            expect(data.message).to.exist;

            done();


        });

    });

    
});