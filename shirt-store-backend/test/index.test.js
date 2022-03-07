var chai= require('chai')
var expect= chai.expect;
var server=require('../index')

let chaiHttp=require('chai-http')
chai.use(chaiHttp)

describe('Shirt API', function(){

    it('should retrieve shirt data successfully', function(done){
        chai.request(server)
        .get('/shirts')
        .end((err,response)=>{
            if(err) done(err);
            expect(response).to.have.status(200);
            done();
            
        });
    });
});

describe('Page not found unit test', function(){
//sh
    it('should return 404', function(done){
        chai.request(server)
        .get('/shirt')
        .end((err,response)=>{
            if(err) done(err);
            expect(response).to.have.status(404);
            done();
            
        });
    });
})