$(document).ready(function() {

  // 1. Select all of the div elements that have a class of "module".
  $('div.module');

  // 2. Come up with three selectors that you could use to get the third item in the #myList unordered list. Which is the best to use?
  // id selector is best to use because it is fastest and unique

  $("#myListItem");
  $("#myList li:nth-child(3)");
  $("#myList").children().eq(2);

  // 3. Select the label for the search input using an attribute selector.
  $("label[for='q']");

  // 4. Figure out how many elements on the page are hidden
  var numberOfHiddenELements = $('body').find(':hidden').length;
  console.log(numberOfHiddenELements);

  // 5. Figure out how many image elements on the page have an alt attribute.
  var numberOfImageElements = $('img[alt]').length;
  console.log(numberOfImageElements);

  // 6. Select all of the odd table rows in the table body.
  $("tbody tr:nth-child(odd)");
})
