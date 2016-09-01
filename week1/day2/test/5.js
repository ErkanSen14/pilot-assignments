var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
var mocha = require('mocha');

var flatten = require('../5')
chai.use(sinonChai);

describe ('Flatten an array of arrays', function() {
  it('Should make 1 array out of many arrays', function(){
    var solution = [1,2,3,4,5,6,7];

    var result = flatten();
    expect(result).to.deep.equal(solution);
  })

})
