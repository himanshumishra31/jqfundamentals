function SlideShow(data) {
  this.slideshowUl = data.slideshowUl;
  this.slideshowImages = data.slideshowImages;
  this.slideshowLength = this.slideshowImages.length;
  this.currentSlide = 0;
  this.fadeInSeconds = data.fadeInSeconds;
  this.fadeOutSeconds = data.fadeOutSeconds;
}

SlideShow.prototype.createSlideShow = function() {
  var _this = this;
  this.slideshowImages.eq(this.currentSlide).fadeIn(_this.fadeInSeconds, _this.createNavBarDetails()).delay(_this.fadeOutSeconds).fadeOut(_this.fadeInSeconds, function() {
    _this.currentSlide < _this.slideshowLength - 1 ? _this.currentSlide++ : _this.currentSlide = 0;
    _this.createSlideShow();
  });
};

SlideShow.prototype.createNavBar = function() {
  var nav = $('<ul>', { id: "navBar" }),
      navBarli = $('<li>', { id: "currentImage" }),
      navBarlitotal = $('<li>',{ id: "totalImage" });
  nav.appendTo(this.slideshowUl);
  navBarli.appendTo('#navBar');
  navBarlitotal.appendTo('#navBar');
  this.totalImage = $('#totalImage');
  this.currentImage = $('#currentImage');
};

SlideShow.prototype.createNavBarDetails = function() {
  this.currentImage.text('Currently viewing : ' + this.slideshowImages.eq(this.currentSlide).find('h2').text() );
  this.totalImage.text('Total Images : ' + this.slideshowLength );
};

SlideShow.prototype.init = function() {
  this.slideshowUl.prependTo($('body'));
  this.slideshowImages.hide();
  this.createNavBar();
  this.createSlideShow();
};

$(document).ready(function(){
  var slideshow = $('#slideshow'),
      data = {
        slideshowUl: slideshow,
        slideshowImages: slideshow.children('li'),
        fadeInSeconds: 1000,
        fadeOutSeconds: 2000
      },
      slideshowObject = new SlideShow(data);
  slideshowObject.init();
});
