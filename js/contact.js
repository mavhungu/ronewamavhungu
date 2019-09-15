function validateForm (){
    "use strict";
    var fullname = $('#client_name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    if(fullname ===""){
    //var owk = 'empty'; 
    document.getElementById('fullnames').innerHTML =("Not valid contact number");
    $('.fullnames').addClass('status');
    return false;
    console.log(owk);
}

console.log("Button iis clicked");
};