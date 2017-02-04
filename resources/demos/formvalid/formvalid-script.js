/*$.ajax("info.txt")
    .done(function(data){
        $("p").html(data);
    }).fail(function(){
        alert("failed");
    });*/

var valid = 1;
var submit_flag = 0;
var errorMessage = "";
var messageStart = "<ul>"
var messageEnd = "</ul>"

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isPhone(phone) {
    return $.isNumeric(phone);
}

var validate_email = function(){

    var email = $("#email").val().trim();

    if(!isEmail(email) || email == ""){
        $("#email").css("background-color", "pink");
        errorMessage += "<li>Invalid or empty email</li>";
        valid = 0;
    }else{
        $("#email").css("background-color", "#77dd77");
    }
}

var validate_phone = function(){
    var phone = $("#phone").val().trim();

    if(!isPhone(phone) || phone == ""){
        $("#phone").css("background-color", "pink");
        errorMessage += "<li>Invalid or empty phone</li>";
        valid = 0;
    }else{
        $("#phone").css("background-color", "#77dd77");
    }
}

var validate_pass = function(){
    var pass = $("#password").val().trim();
    var conf = $("#confirm").val().trim();

    if(pass == ""){
        $("#password").css("background-color", "pink");
        errorMessage += "<li>Password must be not empty</li>";
        valid = 0;
    }else {
        $("#password").css("background-color", "#77dd77");
        validate_conf();
    }


}

var validate_conf = function(){
    var conf = $("#confirm").val().trim();
    var pass = $("#password").val().trim();

    if(pass != conf || conf == ""){
        $("#confirm").css("background-color", "pink");
        errorMessage += "<li>Passwords must match</li>";
        valid = 0;
    }else{
        $("#confirm").css("background-color", "#77dd77");
    }

    return valid;
}

var validate_all = function(){
    valid = 1;

    validate_email();
    validate_phone();
    validate_pass();
    validate_conf();

    if(valid == 1){
        $(".error-message").html("<p>form is valid</p>").css({"background-color": "#77dd77", "border-color": "green", "padding-top": "12px"}).show();

        //alert("form is valid");
    }else{
        errorMessage = messageStart + errorMessage + messageEnd;
        $(".error-message").html(errorMessage).css({"background-color": "pink", "border-color": "red", "padding-top": "12px"}).show();

    }
}


$("input").blur(function(){

    var input_id = $(this).attr('id')
    errorMessage = "";

    if(input_id == "email"){
        validate_email();
    }else if(input_id == "phone"){
        validate_phone();
    }else if(input_id == "password"){
        validate_pass();
    }else if(input_id == "confirm"){
        validate_conf();
    }

});

$("#submit").click(function(){

    errorMessage = "";
    validate_all();

    if(valid === 1){
        alert("This form doesn't really submit anything, but if it was wehey the fields are valid");
    }else{
        alert("Please correct the fields in red");
    }
});