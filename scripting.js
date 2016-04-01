$(document).ready(function() {
    var maximum = $("input[name=max]").val();
    var randomNum = Math.floor((Math.random() * maximum) + 1);

    $("#submit").click(function() {
        $("#result").clear();
        $("<p>The number generated was " + randomNum + ".</p>").appendTo("#result");
    });
});
