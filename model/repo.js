'use strict'
var app = app || {};

(function(module) {
const repos = {};

repos.all = [];

repos.requestRepos = function(callback) {
  // $.get('github/user/repos')
$.ajax({
url: 'https://api.github.com/aaronmeade92/repos'
method:'GET'
headers: {'Authorization': `token ${githubToken}`
      }
    })
  }
});


var coreRepos = repos.reduce(function(repos, ){
  if (repo ===  ) {

  }
});
