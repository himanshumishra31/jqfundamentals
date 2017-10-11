function InputHint(data) {
  this.input_area = data.field_selector;
  this.class_name = data.class_name;
  this.hint_text = data.hint_text;
  this.label = data.label;
}

InputHint.prototype.focusHandlerEvent = function() {
  var _this = this;
  return function() {
    if(_this.input_area.val() == _this.hint_text) {
      _this.input_area.removeClass(_this.class_name);
      _this.input_area.removeAttr('value');
    }
  }
}

InputHint.prototype.blurHandlerEvent = function() {
  var _this = this;
  return function() {
    if(!_this.input_area.val().trim()) {
      _this.input_area.addClass(_this.class_name);
      _this.input_area.val(_this.hint_text);
    }
  }
}

InputHint.prototype.blurHandler = function() {
  this.input_area.bind('blur', this.blurHandlerEvent());
}

InputHint.prototype.focusHandler = function() {
  this.input_area.bind('focus', this.focusHandlerEvent());
}

InputHint.prototype.init = function() {
  this.input_area.val(this.hint_text);
  this.input_area.addClass(this.class_name);
  this.label.remove();
  this.blurHandler();
  this.focusHandler();
}

$(document).ready(function() {
  var input_field_selector = $('input[name="q"]');
  var label_field_selector = input_field_selector.parent().find('label[for="q"]');
  var data = {
    field_selector: input_field_selector,
    class_name: 'hint',
    label: label_field_selector,
    hint_text: label_field_selector.text()
  }

  var inputHintObject = new InputHint(data);
  inputHintObject.init();
})
