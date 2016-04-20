---
---
{% include_relative jquery-1.9.0.min.js %}


(function() {
  'use strict';
  $(document).ready(function() {
    $('#contact_form').submit(onSubmitForm);
  });


  function onSubmitForm(event) {
    event.preventDefault();
    var form = this;
    var btnEnviar = $(form).find('.btn-enviar');
    $.ajax({
      url: '//formspree.io/iagovelasco@hotmail.com',
      method: 'POST',
      dataType: 'json',
      data: {
        nome: $(form).find('input[name="name"]').val(),
        email: $(form).find('input[name="email"]').val(),
        mensagem: $(form).find('textarea[name="message"]').val()
      },
      success: function() {
         $('#alert')
           .removeClass('alert-danger')
           .addClass('alert-success')
           .text('Obrigado! Recebi a sua mensagem!')
           .show();
            form.reset();
      },
        error: function() {
        $('#alert')
          .removeClass('alert-success')
          .addClass('alert-danger')
          .text('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde!')
          .show();
      },     complete: function() {
        form.reset();
        btnEnviar.button('reset');
      }
    });
  }

})();
  