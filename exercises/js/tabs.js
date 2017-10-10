function TabNagivation (data) {
  this.modules = data.modules;
  this.className = data.className;
}

TabNagivation.prototype.createUL = function() {
  $('<ul id="tabs"></ul>').insertBefore(this.modules.eq(0));
}

TabNagivation.prototype.createNavigationBar = function() {
  var _this = this;
  this.modules.each(function(index) {
    $('<li>' + _this.modules.eq(index).children('h2').text() + '</li>').appendTo('#tabs');
  })
  this.list = $('#tabs').children();
}

TabNagivation.prototype.eventHandler = function(index) {
  var _this = this;
  return function() {
    _this.modules.each(function(index_module) {
      if(_this.modules.eq(index_module).children('h2').text() == _this.list.eq(index).text()) {
        _this.modules.eq(index_module).show();
        _this.modules.eq(index_module).addClass(_this.className);
      } else {
        _this.modules.eq(index_module).hide();
        _this.modules.eq(index_module).removeClass(_this.className);
      }
    })
  }
}

TabNagivation.prototype.createNavigator = function() {
  var _this = this;
  this.list.each(function(index) {
    _this.list.eq(index).bind('click',_this.eventHandler(index));
  })
}

TabNagivation.prototype.init = function() {
  this.modules.hide();
  this.createUL();
  this.createNavigationBar();
  this.createNavigator();
}

$(document).ready(function() {

  var data = {
    modules: $('.module'),
    className: 'current'
  }

  var tabNavigationObject = new TabNagivation(data);
  tabNavigationObject.init();
})
