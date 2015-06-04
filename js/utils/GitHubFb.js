var GitHubFb = (function(){
	var scope = {};

	scope.getAllRepo =function (){
		return fetch('https://api.github.com/users/facebook/repos')
		  .then(function(response) {
		    return response.json()
		  }).then(function(json) {
		    console.log('-- parsed json', json);
		    return json
		    // return json;
		  })

		  // .catch(function(ex) {
		  //   console.log('parsing failed', ex)
		  // })

	}

	return scope;

})();

export default GitHubFb;
