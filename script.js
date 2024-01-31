const form = document.getElementById('registrationForm');
const clearFormButton = document.getElementById('clearForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const college = document.getElementById('college');
  const link = document.getElementById('link');

  if (name.value.length < 3) {
    alert('Please enter a valid name.');
    return;
  }

  if (!validateEmail(email.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validatePhoneNumber(phone.value)) {
    alert('Please enter a valid phone number.');
    return;
  }

  if (college.value.length < 3) {
    alert('Please enter a valid college name.');
    return;
  }

  if (!validateUrl(link.value)) {
    alert('Please enter a valid drive link.');
    return;
  }

  alert('Form submitted successfully!');

  name.value = '';
  email.value = '';
  phone.value = '';
  college.value = '';
  link.value = '';
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phone) {
  const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  return re.test(phone);
}

function validateUrl(url) {
  const re = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:\d+)?(\/|\/(\w+\.\w+)+(\w+(\/\w+)*)?(\?(\w+)=(\w+))?(&(\w+)=(\w+))*)?/;
  return re.test(url);
}

clearFormButton.addEventListener('click', () => {
  name.value = '';
  email.value = '';
  phone.value = '';
  college.value = '';
  link.value = '';
});