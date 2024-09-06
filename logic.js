
function sendInfo(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "umang.gpt143@gmail.com",
        Password : "9B86446E0C8121820B2E2D5D8A89404B6C1C",
        To : "ankitgwin@gmail.com",
        From : "umang.gpt143@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert("your info has been send")
    );
}