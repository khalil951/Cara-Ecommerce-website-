
//** declarations

//const bar =  document.querySelector('#bar');
        const upperContent = document.getElementById('upper-content');
        const bar =  document.getElementById('bar');
        const nav  = document.getElementById('navbar');
        const cart = document.querySelector('#mobile i');


//class (testing)

class concat {
    constructor (s1,s2,s3){
        //console.dir(this);
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
    }

    cat() {
        const {s1,s2,s3} = this;
        return `the result is : ${s1+s2+s3}`;
    }
        
    }

    const numbers = new concat (1,2,3);




//** functions

    function func(data) {
    return (console.log(` ${data}   , problem here !`));
    }


    const toggle = (bar) =>{
        if (bar){
            console.log(this);
            bar.addEventListener('click', () => {
            nav.classList.add("active");
            bar.style.display="none";
            cart.style.display="none";   
            })
        }
    }
  

    const cancelToggle = (nav,bar,cart) => {
                    nav.classList.remove("active");
                    nav.style.transition = "0.5s";
                    //nav.setAttribute("active", "unactive");
                    bar.style.display="inline-block";
                    cart.style.display="inline-block";
    }

    
    toggle(bar);

    upperContent.addEventListener('click', (evt) => {
        if(nav.classList.contains("active") ){
            cancelToggle(nav,bar,cart);
        }
        console.dir(evt);
    })
    
    
    let LIS = nav.children;

    LIS[0].onclick = (evt) =>{
        evt.preventDefault();
        H4=document.createElement("h4");
        H4.innerText= "Hello ..)";
        upperContent.prepend(H4);
        setTimeout(() =>{
            H4.remove();
        }
        ,2500);

        alert("You're Home , Welcome !");
    } 
    
    LIS[5].onclick = (evt) =>{
        evt.preventDefault();
        window.scrollTo(0,800);
    } 

    cart.onclick = (evt) =>{
        evt.preventDefault();
        window.scrollTo(0,800);
    } 






