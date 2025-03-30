const public_key = "";
const service_id = "";
const template_id = "";


emailjs.init(public_key); 
document.querySelector("form").addEventListener("submit", sendEmail);

function sendEmail(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        name: String(formData.get("name")), 
        email: String(formData.get("email")),
        message: String(formData.get("message"))
    };

    //console.log(data);
    emailjs.send(service_id, template_id, data)
        .then(function(response) {
            alert("Message sent successfully!");
            console.log('Success:', response);
        }, function(error) {
            alert("Failed to send message. Please try again.");
            console.log('Error:', error);
        });
}
