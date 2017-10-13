function TabNagivation (data) {
  this.modules = data.modules;
  this.className = data.className;
}

TabNagivation.prototype.createUL = function() {
  $('<ul id="tabs">').insertBefore(this.modules);
};

TabNagivation.prototype.createNavigationBar = function() {
  this.modules.each(function(index) {
    $('<li>').text($(this).children('h2').text()).data("name", $(this)).appendTo('#tabs');
  });
  this.list = $('#tabs').children('li');
};

TabNagivation.prototype.eventHandler = function() {
  $(this).siblings().data('name').removeClass('current').hide();
  $(this).data('name').addClass('current').show();
};

TabNagivation.prototype.createNavigator = function() {
  this.list.click(this.eventHandler);
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
