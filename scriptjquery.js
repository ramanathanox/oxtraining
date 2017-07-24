
/* global firstName */

$(document).ready(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var emailID = $('#emailID').val();
    var mobileNumber = $('#mobileNumber').val();
    var department = $('#department option:selected').val();
    var gender = $('input[name=gender]:checked').length;
    var hobbies = $('input[name="hobbies"]:checked').length;
    var feedBack = $('#feedBack').val();

    $("#firstName").keyup(function ()
    {
        var firstName = $('#firstName').val();
        var firstnameREGEX = /^[A-Za-z]{3,16}$/;
        if (firstName == "" || !firstnameREGEX.test(firstName))
        {
            $('.message-display.firstName').html("<span>Please type Firstname (or) incorrect!!</span>");
           //$('.message-display.firstName').removeClass('hidden');
            return false;
        } else
        {
//            $('.message-display.firstName').addClass('hidden');
            $('.message-display.firstName.hidden').html("<span>Ok!</span>");
            return false;
        }
    });

    $("#lastName").keyup(function ()
    {
        var lastName = $('#lastName').val();
        var lastnameREGEX = /^[A-Za-z]+([\._ ]?$)/;
        if (lastName == "" || !lastnameREGEX.test(lastName))
        {
            $('.message-display.lastName').html("<span>Please type Firstname (or) incorrect!!</span>");
//            $('.message-display.lastName').addClass('hidden');
            return false;
        } else
        {
//            $('.message-display.lastName').removeClass('hidden');
            $('.message-display.lastName').html("<span>Ok!</span>");
            return false;
        }
    });

    $("#emailID").keyup(function ()
    {
        var emailID = $('#emailID').val();
        var emailREGEX = /^\w+([\._ ]?\w+)*@\w+([\._]?\w+)*(\.\w{2,3})$/;
        if (emailID == "" || !emailREGEX.test(emailID))
        {
            $('.message-display.emailID').html("<span>Enter your email (or) Your email is invalid</span>");
//            $('.message-display.emailID').addClass('hidden');
            return false;
        } else
        {
//            $('.message-display.emailID').removeClass('hidden');
            $('.message-display.emailID').html("<span>Ok!</span>");
            return false;
        }
    });

    $("#mobileNumber").keyup(function ()
    {
        var mobileNumber = $('#mobileNumber').val();
        mobilenumberREGEX = /^[0-9]{10}$/;
        if (mobileNumber == "" || !mobilenumberREGEX.test(mobileNumber))
        {
            $('.message-display.mobileNumber').html("<span> Please type valid number (or) incorrect!!</span>");
//            $('.message-display.mobileNumber').addClass('hidden');
            return false;
        } else
        {
//            $('.message-display.mobileNumber').removeClass('hidden');
            $('.message-display.mobileNumber').html("<span>Ok!</span>");
            return false;
        }
    });

    $("#department").keyup(function ()
    {
        var department = $('#department option:selected').val();
        if (department == "--------select--------")
        {
            $('.message-display.department').html("<span> Please select your department!!</span>");
//            $('.message-display.department').addClass('hidden');
            return false;
        } else
        {
//            $('.message-display.department').removeClass('hidden');
            $('.message-display.department').html("<span>Ok!</span>");
            return false;
        }
    });

 /*   var gender = $('input[name=gender]:checked').length;
    if (gender <= 0)
    {

        alert("Select your gender");
        return false;
    }

    var hobbies = $('input[name="hobbies"]:checked').length;
    if (hobbies <= 0)
    {
        alert("Select your hobbies");
        return false;
    }*/
    $("#feedBack").keyup(function ()
    {
        var feedBack = $('#feedBack').val();
        var feedbackREGEX = /^[A-Za-z]*$/;
        if (feedBack == "" || !feedbackREGEX.test(feedBack))
        {
            $('.message-display.feedBack').html("<span> Please type your feedback!!</span>");
//            $('.message-display.feedBack').addClass('hidden');
            return false;
        } else
        {
//            $('.message-display.feedBack').removeClass('hidden');
            $('.message-display.feedBack').html("<span>Ok!</span>");
            return false;
        }
    });

});
