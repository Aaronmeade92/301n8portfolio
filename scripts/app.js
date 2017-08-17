'use strict'

var blogs = [];

function Blog(rawData){
  this.title = rawData.title;
  this.category = rawData.category;
  this.link = rawData.link;
  this.published = rawData.published;
  this.image = rawData.image;
  this.body = rawData.body;
}

Blog.prototype.toHtml = function(){
var source = $('#entry-template').html();
var template = Handlebars.compile(source);
return template(this);
};

rawData.forEach(function(blogObj) {
  blogs.push(new Blog(blogObj));
});

blogs.forEach(function(blog) {
  $('#blogs').append(blog.toHtml());
  // var theTemplate = Handlebars.compile(theTemplateScript);
});

Blog.fetchAll = function() {
  if (localStorage.rawData) {
    Blog.loadAll(JSON.parse(localStorage.rawData));
    

  } else {

  }
}
