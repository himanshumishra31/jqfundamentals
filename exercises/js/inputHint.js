function InputHint(data) {
  this.inputArea = data.field_selector;
  this.className = data.className;
  this.hintText = data.hintText;
  this.label = data.label;
}

InputHint.prototype.focusHandlerEvent = function() {
  var _this = this;
  return function() {
    if(_this.inputArea.val() == _this.hintText) {
      _this.inputArea.removeClass(_this.className);
      _this.inputArea.removeAttr('value');
    }
  }
}

InputHint.prototype.blurHandlerEvent = function() {
  var _this = this;
  return function() {
    if(!_this.inputArea.val().trim()) {
      _this.inputArea.addClass(_this.className);
      _this.inputArea.val(_this.hintText);
    }
  }
}

InputHint.prototype.blurHandler = function() {
  this.inputArea.bind('blur', this.blurHandlerEvent());
}

InputHint.prototype.focusHandler = function() {
  this.inputArea.bind('focus', this.focusHandlerEvent());
}

InputHint.prototype.init = function() {
  this.inputArea.val(this.hintText);
  this.inputArea.addClass(this.className);
  this.label.remove();
  this.blurHandler();
  this.focusHandler();
}

$(document).ready(function() {
  var input_field_selector = $('input[name="q"]');
  var label_field_selector = input_field_selector.parent().find('label[for="q"]');
  var data = {
    field_selector: input_field_selector,
    className: 'hint',
    label: label_field_selector,
    hintText: label_field_selector.text()
  }

  var inputHintObject = new InputHint(data);
  inputHintObject.init();
})
