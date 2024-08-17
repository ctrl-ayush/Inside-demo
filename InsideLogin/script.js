const scriptURL = 'https://script.google.com/macros/s/AKfycbzb7HirlvfJiyosF9NU2nfKfb060J9k-kwSM1BJMfOxH2MlYqeN4OeJ4B16yP9lDmV3/exec'
const form = document.forms['submit-to-google-sheet'];
const msg=document.getElementById("msg");
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent succesfully";
        setTimeout(function(){
            msg.innerHTML="";
        },1000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })