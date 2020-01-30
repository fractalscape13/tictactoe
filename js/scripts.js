//business logic
function Player(name, mark) {
    this.name = name;
    this.mark = mark;
}


//user interface
var xPlayer = "";
var oPlayer = "";
var turn = 0;
$(document).ready(function() {
    //button click to start game
    $("form").submit(function() {
        event.preventDefault();
        xPlayer = new Player(($("#xplayer-name").val()), ("X"));
        oPlayer = new Player(($("#oplayer-name").val()), ("O"));
        $("#xname").text(xPlayer.name);
        $("#oname").text(oPlayer.name);
        $("#start-screen").hide();
        $("#play-screen").fadeIn();
    });
    //button click to add X or O to board
    $("#game-board").on("click", "td", function() {
        if (($(this).html()) == "") {
            if (turn % 2 === 0) {
            $(this).text(xPlayer.mark);
            turn++;
            } else {
            $(this).text(oPlayer.mark);
            turn++;
            }
        }     
    });
});