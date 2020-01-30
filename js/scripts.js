//business logic
function Player(name, mark) {
    this.name = name;
    this.mark = mark;
}


//user interface
var xPlayer = "";
var oPlayer = "";
$(document).ready(function() {
    $("form").submit(function() {
        event.preventDefault();
        xPlayer = new Player(($("#xplayer-name").val()), ("X"));
        oPlayer = new Player(($("#oplayer-name").val()), ("O"));
        $("#start-screen").hide();
        $("#play-screen").fadeIn();
    });
});