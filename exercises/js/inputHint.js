function InputHint(data) {
  this.input_area = data.field_selector;
  this.class_name = data.class_name;
  this.hint_text = data.hint_text;
  this.label = data.label;
}

InputHint.prototype.hintText = function(toAdd) {
  if(toAdd) {
    if(!this.input_area.val().trim()) {
      this.input_area.val(this.hint_text);
      this.input_area.addClass(this.class_name);
    }
  } else {
    if(this.input_area.val() == this.hint_text) {
      this.input_area.removeAttr('value');
      this.input_area.removeClass(this.class_name);
    }
  }
}

InputHint.prototype.removeLabel = function() {
}

InputHint.prototype.eventHandler = function(eventName) {
  var _this = this;
  return function() {
    _this.hintText((eventName == 'focus') ? false : true);
  }
}

InputHint.prototype.bindEvent = function(eventName) {
  this.input_area.bind(eventName, this.eventHandler(eventName));
}

InputHint.prototype.init = function() {
  this.hintText(true);
  this.label.remove();
  this.bindEvent('focus');
  this.bindEvent('blur');

}

$(document).ready(function() {
  var input_field_selector = $('input[name="q"]');
  var label_field_selector = input_field_selector.parent().find('label[for="q"]');
  var data = {
    field_selector: input_field_selector,
    class_name :'hint',
    label : label_field_selector,
    hint_text : label_field_selector.text()
  }

  var inputHintObject = new InputHint(data);
  inputHintObject.init();
})
