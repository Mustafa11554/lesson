$(document).ready(function() {
    const $input = $('#input');
    const $text = $('#text');
    
    $('#btn').on('click', function() {
    if ($input.val() === '') {
    $text.text('Поле обязательно для заполнения');
    } else if ($input.val().length < 3) {
    $text.text('Поле должно содержать не менее 3-х символов');
    }
    else{
        $text.text("")
    }
    });
    });