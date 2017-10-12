function SlideShow(data) {
  this.slideshowUl = data.slideshowUl;
  this.slideshowImages = data.slideshowImages;
  this.slideshowLength = this.slideshowImages.length;
  this.currentSlide = 0;
}

SlideShow.prototype.createSlideShow = function() {
  var _this = this;
  this.slideshowImages.eq(this.currentSlide).fadeIn(1000, _this.createNavBarDetails()).delay(2000).fadeOut(1000, function() {
    _this.currentSlide < _this.slideshowLength - 1 ? _this.currentSlide++ : _this.currentSlide = 0;
    _this.createSlideShow();
  });
};

SlideShow.prototype.createNavBar = function() {
  var nav = $('<ul id="navBar">');
  var navBarli = $('<li id="currentImage">');
  var navBarlitotal = $('<li id="totalImage">');
  nav.appendTo(this.slideshowUl);
  navBarli.appendTo('#navBar');
  navBarlitotal.appendTo('#navBar');
};

SlideShow.prototype.createNavBarDetails = function() {
  $('#currentImage').text('Currently viewing : ' + this.slideshowImages.eq(this.currentSlide).find('h2').text() );
  $('#totalImage').text('Total Images : ' + this.slideshowLength );
};

SlideShow.prototype.init = function() {
  this.slideshowUl.prependTo($('body'));
  this.slideshowImages.hide();
  this.createNavBar();
  this.createSlideShow();
};

$(document).ready(function(){
  var slideshow = $('#slideshow');
  var data = {
    slideshowUl: slideshow,
    slideshowImages: slideshow.children('li')
  };
  var slideshowObject = new SlideShow(data);
  slideshowObject.init();
});
