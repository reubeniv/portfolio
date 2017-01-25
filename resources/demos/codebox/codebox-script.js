/**
 * Created by Shaun on 25/01/2017.
 */
function updateOutput() {

    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());

}

$(".toggleButton").hover(function(){
    $(this).addClass("highlighted");
}, function(){
    $(this).removeClass("highlighted");
});

$(".toggleButton").click(function(){
    $(this).toggleClass("active");
    var panelId = $(this).attr("id") + "Panel";
    $("#"+panelId).toggleClass("hidden");
    var numberOfPanels = 4 - ($(".hidden").length);
    $(".panel").width(($(window).width() / numberOfPanels) - 10);
});

$(".panel").height($(window).height() - $("#header").height() - 15);
$(".panel").width(($(window).width() / 2) - 10);

updateOutput();

$("textarea").on('change keyup paste', function(){
    updateOutput();
});






