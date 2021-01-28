$(".toggle").click(function(){
    $(this).toggleClass("selected");
    var activeDiv=$(this).html(); 
   $("#"+activeDiv+"C").toggle();
    var numDivAct=$(".codeContainer").filter(function(){
return($(this).css("display")!="none")
    }).length;
    var width=100/numDivAct;
    $(".codeContainer").css("width",width+"%");
});
$("#run").click(function(){
    $("iframe").contents().find("html").html("<style>"+$("#cssCode").val()+"</style>"+$("#htmlCode").val());
    document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());
});