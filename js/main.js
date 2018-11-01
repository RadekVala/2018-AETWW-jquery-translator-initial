// jquery syntax:
               //selector & method
// var userInput = $('input').val('my value from JS');

// click event handler
$('.btn').click(function(){
  // event handler statements
  // getting user input
  var userInput = $('input').val();    
  console.log(userInput);

  if(userInput.length > 0) {
     // show the progress alert
    $('.alert').removeClass('d-none');

    var url = 'https://api.mymemory.translated.net/get?q='+userInput+'&langpair=en|it';
    $.getJSON(url, function(response){
        console.log(response);
        var translation = response.responseData.translatedText;
        $('.translation-result .card-body').text(translation);
        $('.translation-result').removeClass('d-none');

        // hide the progress alert
        $('.alert').addClass('d-none');
    });
  }
 
});