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
            if (($("#a").html()) !== "" && ($("#b").html()) !== "" && ($("#a").html()) == ($("#b").html()) && ($("#b").html()) == ($("#c").html()) || ($("#d").html()) !== "" && ($("#e").html()) !== "" && ($("#d").html()) == ($("#e").html()) && ($("#e").html()) == ($("#f").html()) || ($("#g").html()) !== "" && ($("#h").html()) !== "" && ($("#g").html()) == ($("#h").html()) && ($("#h").html()) == ($("#i").html()) || ($("#a").html()) !== "" && ($("#d").html()) !== "" && ($("#a").html()) == ($("#d").html()) && ($("#d").html()) == ($("#g").html()) || ($("#b").html()) !== "" && ($("#e").html()) !== "" && ($("#b").html()) == ($("#e").html()) && ($("#e").html()) == ($("#h").html()) || ($("#c").html()) !== "" && ($("#f").html()) !== "" && ($("#c").html()) == ($("#f").html()) && ($("#f").html()) == ($("#i").html()) || ($("#a").html()) !== "" && ($("#e").html()) !== "" && ($("#a").html()) == ($("#e").html()) && ($("#e").html()) == ($("#i").html()) || ($("#c").html()) !== "" && ($("#e").html()) !== "" && ($("#c").html()) == ($("#e").html()) && ($("#e").html()) == ($("#g").html())) {
                var winner = ""
                if (turn % 2 === 0) {
                    winner = oPlayer.name;
                } else {
                    winner = xPlayer.name;
                }
                $("#win-screen").text("And the winner is... " + winner + "!");
                $("#win-screen").addClass("winner");
                $("td").addClass("nonclick");
            }
    });
});