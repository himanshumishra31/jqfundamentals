$(document).ready(function(){
  // 1. Select all of the image elements on the page; log each image's alt attribute.

  $('img').each(function(index, imgElem){
    console.log('Image: ' + index + ' ,alt: ' + $(imgElem).attr('alt'));
  });

  // 2. Select the search input text box, then traverse up to the form and add a class to the form.

  $('.input_text').parent().addClass('form');

  // 3. Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.

  $('#myList li.current').removeClass('current bar').next().addClass('current');

  // 4. Select the select element inside #specials; traverse your way to the submit button.
  var button = $('#specials select').closest('form').find('.input_submit');
  console.log(button);

  // 5. Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
  $('#slideshow li:first').addClass('current').siblings().addClass('disabled');

})
