'use strict';

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

var expect = require('chai').expect;
var RequestHelper = require('./helpers/request.helper');
var projectStub = require('./stubs/project.stub');
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
    
    
});