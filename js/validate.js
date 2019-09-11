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
        if(phone_call < 10){
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
    

};