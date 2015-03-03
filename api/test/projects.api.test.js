var expect = require('chai').expect;
var RequestHelper = require('./helpers/request.helper');
const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

var req;

describe('Projects API Tests', function () {
    
    before(function (done){
       
        req = new RequestHelper(BASE_URL);
        done();
    });
   
    it('should be able to add a project to the api', function (done) {
        
        req.post('/project', {}).on('success', function (data) {

            expect(data._id).to.exist;
            expect(data.success).to.be.true;
            done();

        });
        
        
    });
    
    it('should be able to get all projects from the api', function (done) {
        
        req.get('/projects').on('success', function (data) {
           
            expect(data).to.be.an('object');
            done();

        });
        
    });
   
    
    it('should be able to get a project by id', function (done) {
        
        req.get('/projects').on('success', function (data) {
           
            expect(data).to.be.an('object');
            done();


        });

    });
    
    
});