$("#calculate-tip-btn").on("click", function(event) {
    event.preventDefault();

const billTotal = $("#bill-input").val().trim();
const excellentTip = (20 / 100) * billTotal;
const goodTip = (15 / 100) * billTotal;
const badTip = (10 / 100) * billTotal;

$("#excellent").append(excellentTip.toFixed(2));
$("#good").append(goodTip.toFixed(2));
$("#bad").append(badTip.toFixed(2));
});

$("#reset").on("click", function () {
   
    $("#billInput").empty();
    $("#excellent-input").empty();
    $("#good-tip").empty();
    $("#bad-tip").empty();
});