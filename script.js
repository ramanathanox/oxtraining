/* global autofocus, checked */

function validate()
{
    var fn = document.getElementById('fn').value;
    var ln = document.getElementById('ln').value;
    var mail = document.getElementById('mail').value;
    var mobi = document.getElementById('mobi').value;
    var dd = document.getElementById('dd').value;
    var gender = document.getElementsByName('gender');
    var hob = document.getElementsByName('hob');
    var fb = document.getElementById('fb').value;
    var x = -1, y = -1;
    var atpos = mail.indexOf('@');
    var dtpos = mail.lastIndexOf('.');

    if (fn == "")
    {
        alert("please fill out the firstname");
        return false;
    } else if (ln == "")
    {
        alert("please fill out the lastname");
        return false;
    }
    else if mail == (atpos < 1 || dtpos < atpos + 2 || dtpos + 2 <= mail.length)
    {
    alert("mailid incorrect");
            return false;
    }
    else if (mobi == "")
    {
        alert("invalid mobile number");
                return false;
    }
    else if (dd == "")
    {
        alert("invalid department");
        return false;
    }
    else if (gender !== "")
    {
        alert("select gender");
        return false;
    }
    else if (hob == "")
    {
        alert("sslect hobbies");
        return false;
    }
    else if (fb == "")
    {
        alert("fill your hobbies")
        return false;
    }
    else
    {
        return true;
    }



    /*if (validateFN(fn))
     {
     if (validateLN()) {
     
     }
     }
     function validateFN()
     {
     if (fn == /[A-Za-z]/)
     {
     }
     if (fn == /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)
     {
     }
     }*/


    /* if (fn == "")
     {
     alert("please fill out the firstname");
     fn.focus();
     onload = "fn.focus();"
     return false;
     }
     if (ln == "")
     {
     window.alert("please fill out the lastname");
     ln.clear();
     ln.focus();
     onload = "ln.focus();"
     }
     if (atpos < 1 || dtpos < atpos + 2 || dtpos + 2 <= mail.length)
     {
     window.alert("mailid incorrect");
     mail.clear();
     mail.focus();
     }
     if (mobi.length !== 10)
     {
     alert("invalid mobile number");
     mobi.clear();
     mobi.focus();
     }
     for (var i = 0; i < hob.length; i++)
     {
     if (hob[i].checked)
     {
     x = i;
     }
     }
     if (x == -1)
     {
     alert("select the hobbies");
     hob.focus();
     }
     for (var i = 0; i < gender.length; i++)
     {
     if (gender[i].checked) {
     y = i;
     }
     }
     if (y == -1)
     {
     alert("select the gender");
     gender.focus();
     }
     if (fb == "")
     {
     alert("please fill the feedback");
     fb.clear();
     fb.focus();
     }*/
}

   