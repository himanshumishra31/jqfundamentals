function LoadContentJson(data) {
  this.specialsDiv = data.specialsDiv;
}

LoadContentJson.prototype.init = function() {
  $('<div>', { id:"checkBoxTarget" }).insertAfter(this.specialsDiv.find('form'));
  this.specialsDiv.find('li.buttons').remove();
  this.specialsDiv.find('form').find('select').change(this.eventHandler());
  this.targetDiv = $('#checkBoxTarget');
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
  }).fail(function(xhr, status, errorThrown) {
    alert("Error occured");
  });
};

LoadContentJson.prototype.targetDivValue = function(jsonResponseInfo) {
  if(jsonResponseInfo) {
    this.targetDiv.css('color', jsonResponseInfo.color);
    this.targetDiv.attr('title', jsonResponseInfo.title);
    this.targetDiv.text(jsonResponseInfo.text);
    this.targetDiv.append($('<img>', {src : jsonResponseInfo.image.slice(1)}));
  }
};


$(document).ready(function() {
  var data = {
    specialsDiv: $('#specials')
  };
  var loadContentJsonObject = new LoadContentJson(data);
  loadContentJsonObject.init();
});
