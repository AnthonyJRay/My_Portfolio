function validateForm() {
    var x = document.getElementById('name').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Name cannot be empty";
        return false;
    }
    x = document.getElementById('email').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(x)) {
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
    }
    x = document.getElementById('subject').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Subject cannot be empty";
        return false;
    }
    x = document.getElementById('message').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Message cannot be empty";
        return false;
    }
    //  get input field values data to be sent to server
    document.getElementById('status').innerHTML = "Sending...";
    formData = {
        'name': $('input[name=name]').val(),
        'email': $('input[name=email]').val(),
        'subject': $('input[name=subject]').val(),
        'message': $('textarea[name=message]').val()
    };


    $.ajax({
        url: "mail.php",
        type: "POST",
        data: formData,
        success: function (data, textStatus, jqXHR) {

            $('#status').text(data.message);
            if (data.code) //If mail was sent successfully, reset the form.
                $('#contact-form').closest('form').find("input[type=text], textarea").val("");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#status').text(jqXHR);
        }
    })
};