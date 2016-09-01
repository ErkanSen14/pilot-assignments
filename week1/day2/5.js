module.exports = function flatten(){

var arrays = [[1,2],[3,4,5],[6,7]];

var thing = arrays.reduce(function(prev,current,index,array){
	var result = [];
		result = result.concat(prev)
		result = result.concat(current)
	return result
});

return thing;

}
