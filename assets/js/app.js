jQuery(document).ready(function() {
  var
    payForm = $('.js-checkout-pay'),
    inputs = payForm.find('input');
      
  // Input fields in form
  inputs.on('blur', function() {
    var
      currentLabel = $(this).next('label'),
      currentInput = $(this).val();
    
    if (currentInput) {
      currentLabel.addClass('on-focus');
      $(this).addClass('on-focus');
    } else {
      currentLabel.removeClass('on-focus');
     $(this).removeClass('on-focus');
    }
  });

  // Catch the submit event
  payForm.on('submit', function(e) {
    // do not submit the form. We're going to send data via ajax request
    e.preventDefault();
    // $.ajax({url: $(this).prop('action'), data: $(this).serialize(), method: 'post'}).then(function() {
      // order has been completed
      $('body').addClass('completed-order');
    // }, function(){
    //  $('body').addClass('error');
    // });
  });
});