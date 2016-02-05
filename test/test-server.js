var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../lib/app');
var should = chai.should();

chai.use(chaiHttp);

describe('Express microservice starter API', function() {

  it('should return 200 if token is invalid on / GET', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });

});
