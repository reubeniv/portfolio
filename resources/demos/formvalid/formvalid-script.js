/*$.ajax("info.txt")
    .done(function(data){
        $("p").html(data);
    }).fail(function(){
        alert("failed");
    });*/



function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isPhone(phone) {
    return $.isNumeric(phone);
}

$("#submit").click(function(){

    var valid = 1;
    var errorMessage = "";
    var messageStart = "<ul>"
    var messageEnd = "</ul>"

    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var pass = $("#password").val().trim();
    var conf = $("#confirm").val().trim();

    if(!isEmail(email) || email == ""){
        $("#email").css("background-color", "pink");
        errorMessage += "<li>Invalid or empty email</li>";
        valid = 0;
    }else{
        $("#email").css("background-color", "#77dd77");
    }

    if(!isPhone(phone) || phone == ""){
        $("#phone").css("background-color", "pink");
        errorMessage += "<li>Invalid or empty phone</li>";
        valid = 0;
    }else{
        $("#phone").css("background-color", "#77dd77");
    }

    if(pass == ""){
        $("#password").css("background-color", "pink");
        errorMessage += "<li>Password must be not empty</li>";
        valid = 0;
    }else {
        $("#password").css("background-color", "#77dd77");
        $("#confirm").css("background-color", "#77dd77");
    }

    if(pass != conf){
        $("#confirm").css("background-color", "pink");
        errorMessage += "<li>Passwords must match</li>";
        valid = 0;
    }

    if(valid == 1){
        $(".error-message").html("<p>form is valid</p>").css({"background-color": "#77dd77", "border-color": "green"}).show();

        //alert("form is valid");
    }else{
        errorMessage = messageStart + errorMessage + messageEnd;
        $(".error-message").html(errorMessage).css({"background-color": "pink", "border-color": "red"}).show();

    }

});

