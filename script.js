// .........About.....

var tablinks = document.getElementsByClassName("tab-links")
  var tabcontents = document.getElementsByClassName("tab-contents")
  function opentab(tabname){
    for(link of tablinks){
      link.classList.remove("active-link");
    }

    for(content of tabcontents){
      content.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

// ............navmenu..........

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right= "0";
}
function closemenu(){
  sidemenu.style.right= "-200px";
}

// .........Contact form...........
  const scriptURL = 'https://script.google.com/macros/s/AKfycby8BaPAFd_ZDAfJ57loVRSJP26mbckDr3f1SEH6OvcFCzrZI-muLVW11_Rmqt4GB9xC/exec'
  const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent Successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
