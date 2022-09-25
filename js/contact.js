 
 //contact form

 const input = document.querySelectorAll('#contactForm div input');
 const submitButton = document.querySelector('#submitButton');

    //listen for input section click
    for(i in [0,1])
    {
        input[i].addEventListener('click', function func(evt)
        {
            console.dir(this);
            this.classList.toggle('border-bottom');
        });
        
    }

    var group_=(el,callback)=>{
        el.forEach((checkbox)=>{
        callback(checkbox)
             })
        }
        
        group_(document.getElementsByName('check'),(item)=>{
        item.onclick=(e)=>{
        group_(document.getElementsByName('check'),(item)=>{
        item.checked=false;
        })
        e.target.checked=true;  
        }
        })


        const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
  
        function failureCallback(){
            console.log("This is failure callback");
        }
  
        const redirect = (evt) =>{
            wait(2*1000).then(() => {
                window.location.replace("file:///Users/pc/Desktop/project1-Ecommerce/index.html");
                throw new Error("error occurred");
            }).catch(() => {
                failureCallback();
            });
        }
       
        
    submitButton.addEventListener('click', redirect);
        
    
     

