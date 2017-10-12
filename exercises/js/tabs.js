function TabNagivation (data) {
  this.modules = data.modules;
  this.className = data.className;
}

TabNagivation.prototype.createUL = function() {
  $('<ul id="tabs">').insertBefore(this.modules.eq(0));
};

TabNagivation.prototype.createNavigationBar = function() {
  var _this = this;
  this.modules.each(function(index) {
    $('<li>').text(_this.modules.eq(index).children('h2').text()).appendTo('#tabs');
  });
  this.list = $('#tabs').children('li');
};

TabNagivation.prototype.eventHandler = function() {
  var _this = this;
  return function() {
    var that = this;
    _this.modules.each(function(index) {
      if(_this.modules.eq(index).children('h2').text() == $(that).text()) {
        _this.modules.eq(index).show();
        _this.modules.eq(index).addClass(_this.className);
      } else {
        _this.modules.eq(index).hide();
        _this.modules.eq(index).removeClass(_this.className);
      }
    });
  };
};

TabNagivation.prototype.createNavigator = function() {
  this.list.click(this.eventHandler());
};

TabNagivation.prototype.init = function() {
  this.modules.hide();
  this.createUL();
  this.createNavigationBar();
  this.createNavigator();
};

$(document).ready(function() {
  var data = {
    modules: $('.module'),
    className: 'current'
  };

  var tabNavigationObject = new TabNagivation(data);
  tabNavigationObject.init();
});
