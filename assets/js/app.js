jQuery(document).ready(function() {
  var input = $('.cd-fields').find('input'),
      payButton = $('.js-checkout-pay');
  
  input.each(function() {
    $(this).on('blur', function() {
      var currentLabel = $(this).next('label'),
          currentInput = $(this).val();
      
      if ( currentInput != "" ) {
        currentLabel.addClass('on-focus');
        $(this).addClass('on-focus');
      } else {
        current.removeClass('on-focus');
       $(this).removeClass('on-focus');
      }
    });
  });

  payButton.on('click', function(e) {
    e.preventDefault();
    $('body').addClass('completed-order');
  });
});