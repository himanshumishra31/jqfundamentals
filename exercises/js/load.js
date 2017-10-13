function LoadData(data) {
  this.blogLinks = data.blogLinks;
  this.divAttribute = data.divAttribute;
}

LoadData.prototype.eventHandler = function() {
  var _this = this;
  return function(event) {
    event.preventDefault();
    _this.loadContent(this);
  };
};

LoadData.prototype.loadContent = function(currentBlog) {
  var hrefValue = $(currentBlog).attr('href'),
      targetElement = $(currentBlog).parent().siblings(this.divTargetSelector);
  targetElement.load(hrefValue.replace('#', ' #'));
};

LoadData.prototype.createTargetDiv = function() {
  var _this = this;
  this.blogLinks.each(function() {
    var $this = $(this);
    $('<div>', { id: "targetDiv" }).data(_this.divAttribute, $this.parent()).insertAfter($this.parent());
    $this.attr('href', 'data/' + $this.attr('href'));
  });
};

LoadData.prototype.init = function() {
  this.createTargetDiv();
  this.divTargetSelector = 'div#targetDiv';
  this.blogLinks.click(this.eventHandler());
};

$(document).ready(function() {
  var data = {
    blogLinks: $('#blog').find('a'),
    divAttribute: 'divReference'
  };

  var loadDataObject = new LoadData(data);
  loadDataObject.init();
});

