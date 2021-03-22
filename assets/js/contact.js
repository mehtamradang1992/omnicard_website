(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $(document).on('submit', '#contact_form_submit', function (e) {
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();
            var message = $('#message').val();
            var phone = $('#phone').val();

            if (name && email && message && phone) {
                $.ajax({
                    type: "POST",
                    url: 'https://paymelon.in/eroute/eroute/pucw?'+"b1="+name+"&b2="+email+"&b3="+message+"&b4="+phone,
                    data: {
                        
                    },
                    success: function (data) {
                       
                      
                        $('#messageShow').html('<div class="alert alert-success email-success">' + data.message + '</div>');
                        $('#name').val('');
                        $('#email').val('');
                        $('#message').val('');
                        $('#phone').val('');
                        // $('#map').height('576px');
                        //$('.email-success').fadeOut(6000);
                    },
                    error: function (res) {

                    }
                });
            } else {
                $('#messageShow').html('<div class="alert alert-danger email-success">All Fields are Required.</div>');
                // $('#map').height('576px');
                //$('.email-success').fadeOut(6000);
            }

        });
    })

}(jQuery));