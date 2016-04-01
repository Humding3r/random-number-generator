$(document).ready(function() {
    var maximum = $("input[name=max]").val();
    var randomNum = Math.floor((Math.random() * maximum) + 1);

    $("#submit").click(function() {
        maximum = $("input[name=max]").val();
        randomNum = Math.floor((Math.random() * maximum) + 1);
        $("#result").empty();
        $("<p>The number generated was " + randomNum + ".</p>").appendTo("#result");
    });
});
