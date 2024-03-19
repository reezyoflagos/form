const btn = document.getElementById("button");


document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();
   const params = {
    full_name: document.getElementById("full_name").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    region: document.getElementById("region").value,
    zip: document.getElementById("postal_zipcode").value,
    phone: document.getElementById("phonenumber").value,
    bestsport: document.getElementById("sss").value,
    dob: document.getElementById("DoB").value,
    bestfood: document.getElementById("bestfood").value,
    hobbies: document.getElementById("hobbies").value,

  }
  
   btn.value = 'Sending...';

   const serviceID = 'service_u8cgvcd';
   const templateID = 'template_ewpz97w';

   emailjs.send(serviceID, templateID, params)
    .then((res) => {
      btn.value = 'Send Email';
      alert('Sent!');
      console.log(res)
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});