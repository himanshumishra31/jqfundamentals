function DropDownMenu(data) {
  this.nav = data.nav;
}

DropDownMenu.prototype.hoverIn = function(index) {
  var _this = this;
  return function() {
    _this.nav.eq(index).children('ul').show();
    _this.nav.eq(index).addClass('hover');
  }
}

DropDownMenu.prototype.hoverOut = function(index) {
  var _this = this;
  return function() {
    _this.nav.eq(index).children('ul').hide();
    _this.nav.eq(index).removeClass('hover');
  }
}

DropDownMenu.prototype.init = function() {
  var _this = this;
  this.nav.each(function(index) {
    _this.nav.eq(index).hover(_this.hoverIn(index), _this.hoverOut(index));
  })
}

$(document).ready(function() {
  var data = { nav : $('#nav > li') }
  var dropDownMenuObject = new DropDownMenu(data);
  dropDownMenuObject.init();
})
