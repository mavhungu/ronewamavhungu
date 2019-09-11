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

};