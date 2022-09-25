


// CommonJS
const Swal = require('sweetalert2');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })

const buttonAlert= document.querySelector(".alert");

buttonAlert.addEventListener('click', (evt)=>{
            console.log(evt);
            Swal.fire('Any fool can use a computer');
            cowsay('hey');
    })


//styling button
//including the sweetalert script