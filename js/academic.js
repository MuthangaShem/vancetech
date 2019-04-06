$(document).ready(function () {

    //update this with your $form selector
    var form_id = "academic";
    console.log('academics initiated');

    var data = {
        "access_token": "7s18w2qcki2ravfchpw0ycjw"
    };

    function onSuccess() {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    }

    function onError(error) {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    }

    var sendButton = $("#" + form_id + " [name='send']");

    function send() {
        sendButton.val('Sending…');
        sendButton.prop('disabled', true);
        console.log('academic clicked');

        var typeOfService = $("#" + form_id + " [name='typeOfService']").val();
        var name = $("#" + form_id + " [name='name']").val();
        var email = $("#" + form_id + " [name='email']").val();
        var number = $("#" + form_id + " [name='number']").val();
        var service = $("#" + form_id + " [name='service']").val();
        var deadline = $("#" + form_id + " [name='deadline']").val();
        data['subject'] = 'Request for '+ typeOfService +' Service';
        data['text'] = 'Name: ' + name + ', Email: ' + email + ', Phone number: ' + number + ', Specific Service: ' + service + ', deadline: ' + deadline;
        $.post('https://postmail.invotes.com/send',
            data,
            onSuccess
        ).fail(onError);

        return false;
    }

    sendButton.on('click', send);

    var $form = $("#" + form_id);
    $form.submit(function (event) {
        event.preventDefault();
    });
})