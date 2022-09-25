
const btnPost = document.querySelector('#oldPost');
const container = document.querySelector('.oldPostCard');
const button = document.querySelector('#X');


const fetchData = async() => {
    axios({
        method: 'get',
        url: 'https://official-joke-api.appspot.com/random_joke',
      })
    .then(function (response) {
	    let res = response.data;
        console.dir(res);
       // const resp = response.data.map(ele => ele.setup);
        alert(res.setup);
        confirm(res.punchline);
        //document.write("<h4>`joke is : ${res.setup}`</h4>");
        
    }).catch(function (error) {
	    alert(`Error is : ${error}`);
    });

}

setTimeout(()=>{
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
},2500);



/*const encodedParams = new URLSearchParams();
encodedParams.append("url", "https://storage.googleapis.com/api4ai-static/samples/fashion-1.jpg");

const options = {
  method: 'POST',
  url: 'https://fashion4.p.rapidapi.com/v1/results',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key':  '706349c313mshcfb6540f1ec0793p15547cjsn29f6964ba421',
    'X-RapidAPI-Host': 'fashion4.p.rapidapi.com'
  },
  data: encodedParams
};
const fetchData = async() => {
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	alert(error);
});
}*/

window.onload =() =>{
    btnPost.addEventListener('click',(evt) => {
    evt.preventDefault();
    fetchData();
    container.setAttribute('class','oldPostCard show');
})

button.addEventListener('click',() => {
    container.setAttribute('class','oldPostCard hide');
})
}
