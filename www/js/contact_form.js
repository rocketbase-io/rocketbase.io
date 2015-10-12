/**
 * Created by nilo on 16.01.15.
 */
$(document).ready(function() {
    $("#submitcontactform").click(function() {
        var name = $("#name_contact").val();
        var email = $("#email_contact").val();
        var message = $("#message_contact").val();
        var contact = $("#contact").val();
        $("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
        if (name == '' || email == '' || contact == '') {
        } else {
// Returns successful data submission message when the entered information is stored in database.
            $.post("contact_form.php", {
                name1: name,
                email1: email,
                message1: message,
                contact1: contact
            }, function(data) {
                $("#returnmessage").append(data); // Append returned message to message paragraph.
                if (data == "Your Query has been received, We will contact you soon.") {
                    $("#form")[0].reset(); // To reset form fields on success.
                }
            });
        }
    });
});