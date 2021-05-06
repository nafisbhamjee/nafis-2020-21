"use strict";

submit_inner.addEventListener("click", function valid() {
  if (validate_form)
  {
  alert ( "Thank you for your interest, Hope to speak to you soon" );
  }
});

function validate_form()
{
    let valid = true;

    if ( document.getElementById('email').value == "" ){
        valid = false;
    } if ( document.getElementById('message').value == "" ){
        valid = false;
    } if ( document.getElementById('name').value == "" ){
        valid = false;
    }

    return valid;
}


window.addEventListener('load',newSubmittext)

let submit_text = [
  'Send with the speed of a pack of wolves',
  'Just send it',
  'Speed Post with SMTP',
  'Catapault your message across the internet',
  'Dont be cheesy just a "submit" would have been enough',
  'Send it please "Stay Home Stay Safe"'
]

function newSubmittext() {
  let randomnum = Math.floor(Math.random() * (submit_text.length));
  document.getElementById('submit_inner').innerHTML = submit_text[randomnum];
}

const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});
