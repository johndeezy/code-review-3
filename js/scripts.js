//business logic
function pingPong(num) {
    var ret = [];
    for (var i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            ret.push('pingPong');
        }
        else if (i % 3 === 0) {
            ret.push('ping');
        }
        else if (i % 5 === 0) {
            ret.push('pong');
        }
        else {
            ret.push(i);
        }
    }
    return ret;
}



//user interface logic
$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        var inputNumber = parseInt($('#inputNumber').val())
        var result = pingPong(inputNumber);
        $('#output').empty();
        result.forEach(function(item) {
            $('#output').append('<li>' + item + '</li>');
        });
    });
});
