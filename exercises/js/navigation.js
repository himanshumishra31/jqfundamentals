function DropDownMenu(data) {
  this.nav = data.nav;
}

DropDownMenu.prototype.hoverIn = function(index) {
  $(this).children('ul').show();
  $(this).addClass('hover');
}

DropDownMenu.prototype.hoverOut = function(index) {
  $(this).children('ul').hide();
  $(this).removeClass('hover');
}

DropDownMenu.prototype.init = function() {
  this.nav.hover(this.hoverIn,this.hoverOut);
}

$(document).ready(function() {
  var data = { nav : $('#nav > li') }
  var dropDownMenuObject = new DropDownMenu(data);
  dropDownMenuObject.init();
})
