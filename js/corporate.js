$(document).ready(function () {

    //update this with your $form selector
    var form_id = "corporate";
    console.log('corporate initiated');

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

    var sendButton = $("#" + form_id + " [name='send2']");

    function send() {
        sendButton.val('Sending…');
        sendButton.prop('disabled', true);
        console.log('corporate sent');

        var typeOfService = $("#" + form_id + " [name='typeOfService2']").val();
        var name = $("#" + form_id + " [name='name2']").val();
        var email = $("#" + form_id + " [name='email2']").val();
        var number = $("#" + form_id + " [name='number2']").val();
        var service = $("#" + form_id + " [name='service2']").val();
        var deadline = $("#" + form_id + " [name='deadline2']").val();
        data['subject'] = 'Request for '+ typeOfService +' Service';
        data['text'] = 'Name: ' + name + ', Email: ' + email + ', Phone number: ' + number + ', Specific Service: ' + service + ', deadline: ' + deadline;
        console.log('form data: ' + JSON.stringify(data));
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