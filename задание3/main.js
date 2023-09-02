$(document).ready(function(){
    const $input = $('#input');
    const $text = $('#text');
    
    $('#btn').on('click', function(){
    let number = parseInt($input.val());
    
    if(isNaN(number)){
    $text.text('Введите число');
    } else {
    number = number ** 2;
    $input.val(number);
    $text.text("");
    }
    });
    });