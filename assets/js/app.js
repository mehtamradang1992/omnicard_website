$(document).ready(function () {
    $('select').css('color', 'gray');
    $('.star').css('color', 'red');
    $('select').change(function () {
        var current = $('select').val();
        if (current != 'null') {
            $('select').css('color', '#555');
        } else {
            $('select').css('color', 'gray');
        }
    });
});

jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});

$('#configreset').click(function () {
    $('#myform')[0].reset();
  
});

$('.palceholder').click(function () {
    // console.log('dhdgdhd')
    $(this).siblings('input').focus();
});
$('.form-control').focus(function () {
    $(this).siblings('.palceholder').hide();
});
$('.form-control').blur(function () {
    var $this = $(this);
    if ($this.val().length == 0)
        $(this).siblings('.palceholder').show();
});
$('.form-control').blur();
//$('.before_submit').remove();
$('.after_submit').hide();
$(".fa-spinner").hide();
$(".errormessage").hide();
$('#submitApplicationButton').prop('disabled', 'disabled');

$('input').on('keyup', function () {

    if ($("#myform").valid()) {
        $('#submitApplicationButton').prop('disabled', false);

    } else {
        $('#submitApplicationButton').prop('disabled', 'disabled');
    }
});

$('.vali').on('change', function (e) {
  
    if ($("#myform").valid()) {
        $('#submitApplicationButton').prop('disabled', false);
        var me = $(this);
      
        e.preventDefault();
        // console.log('1')
        if (me.data('requestRunning')) {
            // console.log('2')
            return;
        }
        me.data('requestRunning', true);
        document.getElementById('submitApplicationButton').addEventListener('click', function () {
            // fbq('track', 'SubmitApplication');
            set();
        }, false);
    } else {
        $('#submitApplicationButton').prop('disabled', 'disabled');
    }
});


$("#myform").validate({
    // Specify validation rules
    rules: {
        name: {
            required: true,
            // lettersonly: true
        },
        lname: {
            required: false,
        },

        group: {
            required: true,
        },
        mobile: {
            required: true,
            number: true,
            maxlength: 10,
            minlength: 10
        },
        email: {
            required: false,
        }

    },
    // Specify validation error messages
    messages: {
        name: {
            // lettersonly: "Please enter characters only",
            required: "Enter your first name",
        },
        group: {
            required: "Please select age group",
        },
        mobile: {
            maxlength: "Number should be in 10 digits",
            minlength: "Number should be in 10 digits",
            number: "Phone number must be numeric digit only !!!",
            required: "Enter your mobile number",
        },

    }
});





function set() {
    $(".fa-spinner").show();
    $('#submitApplicationButton').prop('disabled', 'disabled');
    let b1 = $('#name').val()
    let b2 = $('#lname').val()
    let b3 = $('#mobile').val()
    let b4 = $('#email').val()
    let b5 = $('#group').val()
    if (b2 != "" && b4 != "") {
        var formDataRequest = {
            "b1": b1,
            "b2": b2,
            "b3": b3,
            "b4": b4,
            "b5": b5
        }
    } else if (b2 == "" && b4 == "") {
        var formDataRequest = {
            "b1": b1,
            "b3": b3,
            "b5": b5,
        }
    } else if (b2 == "") {
        var formDataRequest = {
            "b1": b1,
            "b3": b3,
            "b4": b4,
            "b5": b5,
        }
    } else if (b4 == "") {
        var formDataRequest = {
            "b1": b1,
            "b2": b2,
            "b3": b3,
            "b5": b5,
        }
    }



    $.ajax({
        //url: 'https://www.paymelon.in/omnicardcampaign/omnicard/submitinterest',
        url: 'http://103.210.73.96:8080/omnicardcampaign/omnicard/submitinterest',
        data: JSON.stringify(formDataRequest),
        type: 'POST',
        contentType: 'application/json',
        dataType: "json",
        success: function (data) {
            $(".fa-spinner").hide();
            if (data.status == 'SUCX001') {


                /* $('.before_submit').animate({
                    opacity: 0, 
        
                }, 'slow', 'linear', function() {
                    $(this).remove();
                }); */

                $('.before_submit').remove();
                $('.after_submit').show();
                // $('.after_submit').show()
                $('.data').html("<p class='f_30'>Thank You!</p><img src='./assets/image/icons/thankyou.svg' alt='thankyou' class='img-responsive pa_img_2'><p class='s_text'>We'll be contacting you soon!!</p>");
                $('#submitApplicationButton').prop('disabled', false);

            } else {
                $('.errormessage').show().html(data.message)
                $('#submitApplicationButton').prop('disabled', false);


            }
        },
        error: function (errorThrown) {
            alert("Something went Wrong", "Please try again");
            $(".fa-spinner").hide();
        }
    });
}