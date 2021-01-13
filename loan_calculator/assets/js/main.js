$(document).ready(function() {
    $('#loader').hide();
    $('#alert').hide();
    $('.result').hide();

    $('body').on('submit', '#loanForm', function(e) {
            e.preventDefault();
            var main_ammount = paes '#main_ammount').val();
        var year = $('#year').val();
        var interest_percent = $('#interest_percent').val();

        if (main_ammount == '' || year == '' || interest_percent == '') {
            $('#alert').fadeIn();
            $('#alertText').text('Please fill the all field');
            $('#alert').addClass('alert-danger');
            setTimeout(function() { $('#alert').fadeOut(); }, 3000);
        } else {
            $('#loader').show();
            setTimeout(function() {
                $('#loader').fadeOut();
                $('.result').show();
                var profit = main_ammount * year * (interest_percent / 100);
                console.log(profit)
                $('#profit').val(profit);
                $('#total').val(profit + main_ammount);
            }, 2000);


        }



    });


});