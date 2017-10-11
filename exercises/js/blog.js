function HeadlineEffect(data) {
  this.links = data.links;
  this.pClass = data.pClass;
}

HeadlineEffect.prototype.eventHandler = function(blogLinkNumber) {
  var _this = this;
  return function(event) {
    event.preventDefault();
    _this.links.parent().siblings(_this.pClass).slideUp();
    _this.links.eq(blogLinkNumber).parent().siblings(_this.pClass).slideDown();
  }
}

HeadlineEffect.prototype.init = function() {
  var _this = this;
  this.links.each(function(index) {
    _this.links.eq(index).bind('click', _this.eventHandler(index));
  })
}

$(document).ready(function() {
  var data = {
    links: $('#blog a'),
    pClass : 'p.excerpt'
  }
  var headlineEffectObject = new HeadlineEffect(data);
  headlineEffectObject.init();
})
