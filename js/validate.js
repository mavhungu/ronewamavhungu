function validateForm (){
    "use strict";

    var fname = $('#fname').val();
    var pick = $('#pick').val();
    var phone_call = $('#cell_call').val();

    if(fname === ""){
        document.getElementById('status').innerHTML = "Name cannot be empty";
        $('.stat').addClass('status');
        return false;
    }
    if(phone_call ===""){
        document.getElementById('status').innerHTML = "Contact number cannot be empty";
        $('.stat').addClass('status');
        return false;
    }
    else{
        if(phone_call <= 9){
            document.getElementById('status').innerHTML = "less than ten";
            $('.stat').addClass('status');
            return false;
        }else{
            if(isNaN(phone_call)){
                document.getElementById('status').innerHTML = "Not valid contact number";
                $('.stat').addClass('status');
                return false;
            }
        }
    }

    document.getElementById('contact-form').submit();
    
    formData = {
    'fullname'     : $('input[name=fullname]').val(),
    'pick'         : $('select[name=pick]').val(),
    'cell_call'    : $('input[name=cell_call]').val()
};

$.ajax({
    url : "mail.php",
    type: "POST",
    data : formData,
    success: function(data, textStatus, jqXHR)
    {

        $('#status').text(data.message);
        if (data.code) //If mail was sent successfully, reset the form.
            $('#contact-form').closest('form').find("input[type=text]").val("");
    },
    error: function (jqXHR, textStatus, errorThrown)
    {
        $('#status').text(jqXHR);
    }
});
    

};