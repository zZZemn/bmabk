$(document).ready(function () {
    $('#txt-input').keyup(function () {
        var current_value = $(this).val();
        var response = current_value.split(" ").join('🤸');

        $('#txt-input-response').val(response);
    })

    $('#txt-input-response').click(function () {
        var inputText = $(this).val();

        navigator.permissions.query({ name: 'clipboard-write' }).then(function (result) {
            if (result.state === 'granted' || result.state === 'prompt') {
                navigator.clipboard.writeText(inputText).then(function () {
                    $('.copied-notif').css('opacity', '1');
                    setTimeout(function() {
                        $('.copied-notif').css('opacity', '0');
                      }, 1000);
                }).catch(function () {
                    console.error('Unable to copy text.');
                });
            } else {
                console.error('Permission to access clipboard denied.');
            }
        });
    })

    $('#reset').click(function(){
        $('#txt-input').val('');
        $('#txt-input-response').val(''); 
    })
})