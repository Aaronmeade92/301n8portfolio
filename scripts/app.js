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

Blog.prototype.toHtml = function () {
  var $newBlog = $('blog.template')
  $newBlog.find('h1').text(this.title);
  $newBlog.find('body').html(this.body);
  $newBlog.find('img').attr('src', this.image);
  $newBlog.find('span.pubdate').text(this.published);
  $newBlog.find('a.link').html(this.link);
  $newBlog.find('a.link').attr('href', this.link);
  $newBlog.find('article').attr('data-category', this.category);
  $newBlog.find('article').attr('id', 'data');
  return $newBlog
};

rawData.forEach(function(blogObj) {
  blogs.push(new Blog(blogObj));
});

blogs.forEach($(function(blog) {
  $('#blogs-template').append(blog.html());
  // var theTemplate = Handlebars.compile(theTemplateScript);
}));
