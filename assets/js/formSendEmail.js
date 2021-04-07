// this code was taken and adapted from - https://github.com/Code-Institute-Solutions/InteractiveFrontendDevelopment-Resume/blob/master/03-SendingEmailsUsingEmailJS/06-sending_emails/assets/js/sendEmail.js

function sendEmail(contactForm) {

    emailjs.send("service_1ve87vd", "template_0oxklz3", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            alert("Your message has been sent");
            console.log("SUCCESS", response);
        },
        function(error) {
            alert("Your message failed to send");
            console.log("FAILED", error);
        }
    );
    return false;
}