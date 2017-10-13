function LoadData(data) {
  this.blogLinks = data.blogLinks;
}

LoadData.prototype.eventHandler = function() {
  var _this = this;
  return function(event) {
    event.preventDefault();
    _this.loadContent(this);
  };
};

LoadData.prototype.loadContent = function(currentBlog) {
  var hrefValue = $(currentBlog).attr('href');
  var targetElement = $(currentBlog).closest('h3').siblings('div#targetDiv');
  this.loadContentInDiv(targetElement, hrefValue);
};

LoadData.prototype.loadContentInDiv = function(targetElement, hrefValue) {
  var contentIdIndex = hrefValue.lastIndexOf('#'),
      contentId = hrefValue.slice(contentIdIndex),
      contentUrl = hrefValue.slice(0, contentIdIndex),
      finalUrl = contentUrl + ' ' + contentId;
  targetElement.load(finalUrl);
};

LoadData.prototype.createTargetDiv = function() {
  this.blogLinks.each(function() {
    var $this = $(this);
    $('<div id="targetDiv">').data('divReference', $this.closest('h3')).insertAfter($this.parent());
    $this.attr('href', 'data/' + $this.attr('href'));
  });
};

LoadData.prototype.init = function() {
  this.createTargetDiv();
  this.blogLinks.click(this.eventHandler());
};

$(document).ready(function() {
  var data = {
    blogLinks: $('#blog').find('a')
  };

  var loadDataObject = new LoadData(data);
  loadDataObject.init();
});

