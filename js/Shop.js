
const products = document.querySelectorAll('.card');
const containers = document.querySelectorAll('.container-lg');
const container = document.getElementById('container-1');
const container2 = document.getElementById('container-2');
const container3 = document.getElementById('container-3');
const buttons = document.querySelectorAll('.page-link');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');


const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
  
        function failureCallback(err){
            console.log(`This is failure callback , error is coming from : ${err}`);
        }
  
        function createButton (parent){
            let btn = document.createElement("button");
            btn.innerText= "Buy";
            btn.setAttribute('class','btn btn-success btn-sm custom-btn');
            parent.append(btn);
            return btn;
        }
        
        const showButton = (evt , parentEle) =>{
            let newButton = createButton(parentEle);
            wait(2000).then(() => {
                newButton.remove();
                throw new Error("error occurred");
            }).catch((err) => {
                failureCallback(err);
                evt.stopPropagation();
            });
        }



    if ( window.innerWidth > 999)
    {
        products.forEach(product => {
            product.addEventListener('click', evt => {
            evt.preventDefault();
           let res =  prompt('This product is not available right now ! Would you like to place an order ?');
           if(res === 'yes' || res === 'YES' || res === 'OK' || res === 'ok' )
           {
            alert('Order placed successfully');
           }
        });
    
        product.addEventListener('mouseover', evt => {
            showButton(evt,product);
        });
    })
    
    } else {
        products.forEach(product => {
            product.addEventListener('click', evt => {
            evt.preventDefault();
            })
        })
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', function showMore(evt){
            evt.preventDefault();
            console.dir(evt);
            let id = this.id;
            console.log(id);
            if(id === "next")
            {
                containers.forEach(container => {
                    const prevContainer =  document.getElementsByClassName('container-lg show');
                    console.dir(prevContainer[0].id.slice(10));
                    id =  parseInt(prevContainer[0].id.slice(10));
                    id++;
                    console.log(id);    
                })
                
                if(id>3)
                {
                    id = 1;
                }  
            }
    
            else if(id === "prev")
            {
                containers.forEach(container => {
                    const nextContainer = document. getElementsByClassName('container-lg show');
                    console.dir(nextContainer[0].id.slice(10));
                    id = ( parseInt(nextContainer[0].id.slice(10)) );
                    id--;
                    console.log(id);
                })
                if(id<1)
                    {
                        id = 3;
                    }
            }
                 
            containers.forEach(container => {
                container.setAttribute('class','container-lg hide');
            })
            let chosenContainer = document.getElementById(`container-${id}`);
            chosenContainer.setAttribute('class','container-lg show');
            console.dir(chosenContainer);
    
        } )
    })
    
    
   

