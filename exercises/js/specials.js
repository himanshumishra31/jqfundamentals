function LoadContentJson(data) {
  this.specialsDiv = data.specialsDiv;
}

LoadContentJson.prototype.init = function() {
  var divElement = $('<div>', { id:"checkBoxTarget" });
  divElement.insertAfter(this.specialsDiv.find('form'));
  this.specialsDiv.find('li.buttons').remove();
  this.specialsDiv.find('form').find('select').change(this.eventHandler());
};


LoadContentJson.prototype.eventHandler = function() {
  var _this = this;
  return function() {
    _this.getInfo($(this).val());
  };
};

LoadContentJson.prototype.getInfo = function(selectedVal) {
  var _this = this;
  $.ajax({
    url : "data/specials.json",
    type : "GET",
    dataType : 'json',
  }).done(function(jsonResponse) {
    _this.targetDivValue(jsonResponse[selectedVal]);
  }).fail(function() {
    alert("Error occured");
  });
};

LoadContentJson.prototype.targetDivValue = function(jsonResponseInfo) {
  if(jsonResponseInfo) {
    $('#checkBoxTarget').css('color', jsonResponseInfo.color)
             .attr('title', jsonResponseInfo.title)
             .text(jsonResponseInfo.text)
             .append($('<img>', {src : jsonResponseInfo.image.slice(1)}));
  }
};


$(document).ready(function() {
  var data = {
    specialsDiv: $('#specials')
  };
  var loadContentJsonObject = new LoadContentJson(data);
  loadContentJsonObject.init();
});
