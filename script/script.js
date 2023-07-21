function validateForm() {
  let name = document.forms.form.name.value;
  if (name == "") {
    return alert("Name must be filled out. It is blank");
  }

  let email = document.forms.form.email.value;
  if (email == "") {
    return alert("Email must be filled out. It is blank");
  }

  let enq = document.forms.form.enquiry.value;
  if (enq == "") {
    return alert("Text box must be filled out. It is blank");
  }
  let data = [];

  document.querySelectorAll("#enquiry-form > input:not(.btn), textarea").forEach((input) => {
    data.push(input.value);
    input.value = "";
  });

  alert("Success!");

  return data;
}

window.addEventListener("scroll", () => {
  var cards = document.getElementsByClassName("card");
  for (var card of cards) {
    if (card.getBoundingClientRect().top + 50 < window.innerHeight) {
      card.classList.add("loaded");
    } else {
      card.classList.remove("loaded");
    }
  }
});
