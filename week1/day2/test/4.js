var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
var mocha = require('mocha');

var toStringArray = require('../4')
chai.use(sinonChai);

describe ('Returns array in string form', function() {
  it('Should return [1,2,3,4,5] as an array of strings', function(){
    var solution = ['1','2','3','4','5'];

    var result = toStringArray([1,2,3,4,5]);
    expect(result).to.deep.equal(solution);
  })

  it('Should return array of objects as an array of strings', function(){
    var x = {
      value: 5,
      key: 30,
      thing: 'thing'
    }
    var solution = [x.toString(),x.toString(),x.toString()];

    var result = toStringArray([x,x,x]);
    expect(result).to.deep.equal(solution);
  })
})
