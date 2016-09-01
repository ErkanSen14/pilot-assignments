module.exports = function flatten(arrays){

var thing = arrays.reduce(function(prev,current,index,array){
	var result = [];
		result = result.concat(prev)
		result = result.concat(current)
	return result
});

return thing;

}
