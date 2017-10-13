function TabNagivation (data) {
  this.modules = data.modules;
  this.className = data.className;
}

TabNagivation.prototype.createUL = function() {
  $('<ul id="tabs">').insertBefore(this.modules);
};

TabNagivation.prototype.createNavigationBar = function() {
  this.modules.each(function(index) {
    $('<li>').text($(this).children('h2').text()).data('divReference', $(this)).appendTo('#tabs');
  });
  this.list = $('#tabs').children('li');
};

TabNagivation.prototype.eventHandler = function() {
  $(this).siblings().data('divReference').removeClass('current').hide();
  $(this).data('divReference').addClass('current').show();
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
