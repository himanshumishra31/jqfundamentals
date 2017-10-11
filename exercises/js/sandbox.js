$(document).ready(function() {
  // 1. Add five new list items to the end of the unordered list #myList.
  for(var i=1 ; i<=5; i++) {
    $("<li> List item " + (i + 7) + " </li>").appendTo('#myList');
  }

  // 2. Remove the odd list items
  $('#myList li:nth-child(odd)').remove();

  // 3. Add another h2 and another paragraph to the last div.module
  var lastDiv = $('div.module').last();
  var domElementH2 = $('<h2>').text('Another Heading');
  var domElementPara = $('<p>').text('Another paragraph');
  lastDiv.append(domElementH2);
  lastDiv.append(domElementPara);

  // 4. Add another option to the select element; give the option the value "Wednesday"
  var domElementOption = $('<option>').text('Wednesday');
  domElementOption.appendTo('select[name="day"]');

  // 5. Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  $('div.module:last').clone().insertAfter('div.module:last');

})
