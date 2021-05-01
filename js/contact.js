"use strict";

console.log("$randomnum");

window.addEventListener('load',newSubmittext)

let submit_text = [
  'Send with the speed of a pack of wolves',
  'Just send it',
  'Speed Post with SMTP',
  'Catapault your message across the internet',
  'Dont be cheesy just a "submit" would have been enough'
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
