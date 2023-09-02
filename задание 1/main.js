$(document).ready(function() {
    $('#btn').on('click', function() {
    var numberx = $('#numberx').val();
    var numbery = $('#numbery').val();
    
    $("#divblock").css('left', numberx + "px");
    $("#divblock").css('top', numbery + "px");
    });
    });