$(document).ready(function () {
    $('#txt-input').keyup(function () {
        var current_value = $(this).val();
        var response = current_value.split(" ").join('🤸');

        $('#txt-input-response').val(response);
    })

    $('#txt-input-response').on('click touchend', function () {
        var inputText = $(this).val();
    
        if ('clipboard' in navigator && 'writeText' in navigator.clipboard) {
            navigator.clipboard.writeText(inputText).then(function () {
                $('.copied-notif').css('opacity', '1');
                setTimeout(function() {
                    $('.copied-notif').css('opacity', '0');
                }, 1000);
            }).catch(function () {
                console.error('Unable to copy text.');
            });
        } else {
            console.error('Clipboard API not supported in this browser.');
        }
    });
    

    $('#reset').click(function(){
        $('#txt-input').val('');
        $('#txt-input-response').val(''); 
    })
})