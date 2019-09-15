function validateForm (){
    "use strict";
    var fullname = $('#client_name').val();
    var email = $('#emails').val();
    var message = $('#message').val();

if(fullname ===""){ 
    document.getElementById('fullnames').innerHTML =("Name can't be empty");
    $('.fullnames').addClass('status');
    return false;
}
if(email ===""){
    document.getElementById('e-mail').innerHTML =("Email cannot be empty");
    $('.e-mail').addClass('status');
    $('.fullnames').hide();
    return false;
} else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
        document.getElementById('e-mail').innerHTML = ("Email format invalid");
        $('.e-mail').addClass('status');
        $('.fullnames').hide();
        return false;
    }
}
if(message ===""){
    document.getElementById('messages').innerHTML =("Mesasage is empty");
    $('.messages').addClass('status');
    $('.fullnames').hide();
    $('.e-mail').hide();
    return false;
}
    
};