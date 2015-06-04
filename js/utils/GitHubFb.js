var GitHubFb = (function(){
	var scope = {};

	scope.getAllRepo =function (){
		return fetch('https://api.github.com/users/facebook/repos')
		  .then(function(response) {
		    return response.json()
		  }).then(function(json) {
		    return json
		  })

	}

	return scope;

})();

export default GitHubFb;
