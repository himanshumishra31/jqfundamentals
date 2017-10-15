function TabNagivation (data) {
  this.modules = data.modules;
}

TabNagivation.prototype.createUL = function() {
  $('<ul>', { id: "tabs" }).insertBefore(this.modules);
};

TabNagivation.prototype.createNavigationBar = function() {
  this.modules.each(function(index) {
    $('<li>').text($(this).children('h2').text()).data('targetDiv', $(this)).appendTo('#tabs');
  });
  this.liCollection = $('#tabs').children('li');
};

TabNagivation.prototype.showDiv = function() {
  var that = this;
  return function () {
    that.modules.removeClass('current').hide();
    $(this).data('targetDiv').addClass('current').show();
  };
};

TabNagivation.prototype.bindEvent = function() {
  this.liCollection.click(this.showDiv());
};

TabNagivation.prototype.init = function() {
  this.modules.hide();
  this.createUL();
  this.createNavigationBar();
  this.bindEvent();
};

$(document).ready(function() {
  var data = {
    modules: $('.module')
  };
  var tabNavigationObject = new TabNagivation(data);
  tabNavigationObject.init();
});
