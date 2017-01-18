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

    if(!isEmail($("#email").val()) || $("#email").val() == ""){
        $("#email").css("background-color", "pink");
        valid = 0;
    }else{
        $("#email").css("background-color", "#77dd77");
    }

    if(!isPhone($("#phone").val()) || $("#phone").val() == ""){
        $("#phone").css("background-color", "pink");
        valid = 0;
    }else{
        $("#phone").css("background-color", "#77dd77");
    }

    if(!$("#password").val() == $("#confirm").val() || $("#password").val() == ""){
        $("#password").css("background-color", "pink");
        $("#confirm").css("background-color", "pink");
        valid = 0;
    }else {
        $("#password").css("background-color", "#77dd77");
        $("#confirm").css("background-color", "#77dd77");
    }

    if(valid == 1){
        alert("form is valid");
    }
});

