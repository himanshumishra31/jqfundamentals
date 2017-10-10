function InputHint(data) {
  this.input_area = data.field_selector;
  this.class_name = data.class_name;
  this.hint_text = data.hint_text;
}

InputHint.prototype.addClass = function(toAdd) {
  toAdd ? this.input_area.addClass(this.class_name) : this.input_area.removeClass(this.class_name);
}

InputHint.prototype.hintText = function(toAdd) {
  toAdd ? this.input_area.val(this.hint_text) : this.input_area.removeAttr('value');
}

InputHint.prototype.removeLabel = function() {
  this.input_area.prev().remove();
}

InputHint.prototype.eventHandler = function(eventName) {
  var _this = this;
  return function() {
    _this.hintText((eventName == 'focus') ? false : true);
    _this.addClass((eventName == 'focus') ? false : true);
  }
}

InputHint.prototype.bindEvent = function(eventName) {
  this.input_area.bind(eventName, this.eventHandler(eventName));
}


$(document).ready(function() {

  var data = {
    field_selector: $('input[name="q"]'),
    class_name :'hint',
    hint_text : $('input[name="q"]').prev().text()
  }

  var inputHintObject = new InputHint(data);

  // 1. Set the value of the search input to the text of the label element
  inputHintObject.hintText(true);

  // 2. Add a class of "hint" to the search input
  inputHintObject.addClass(true);

  // 3. Remove the label element
  inputHintObject.removeLabel();

  // 4. Bind a focus event to the search input that removes the hint text and the "hint" class
  inputHintObject.bindEvent('focus');

  // 5. Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered
  inputHintObject.bindEvent('blur');

})
