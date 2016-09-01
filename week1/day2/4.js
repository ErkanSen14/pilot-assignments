module.exports = function toStringArray(array) {
  var newArray = array.map(function(value){
  	return value.toString();
  })
  return newArray;
}
