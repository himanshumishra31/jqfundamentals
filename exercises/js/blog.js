function HeadlineEffect(data) {
  this.links = data.links;
}

HeadlineEffect.prototype.eventHandler = function(event) {
  event.preventDefault();
  var $this = $(this);
  $this.closest('li').siblings('li').find('p.excerpt').slideUp();
  $this.closest('h3').siblings('p.excerpt').slideDown();
};

HeadlineEffect.prototype.init = function() {
  this.links.click(this.eventHandler);
};

$(document).ready(function() {
  var data = {
    links: $('#blog a'),
  };
  var headlineEffectObject = new HeadlineEffect(data);
  headlineEffectObject.init();
});
