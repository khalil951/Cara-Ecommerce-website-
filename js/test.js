

/*
const searchShow=async(query)=>{
    //console.log(this);
    try{
  const res=await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
  const results=res.data.map(element => element.show.name) ;
  console.log(results);
  let firstShows=results.slice(0,4);
  appendShow(firstShows,sideBar);
  
    }catch(e){
        alert('Error',func(e) );
    }
}

*/


/*jQuery
jQuery(document).click(function (event) {
                var clickover = jQuery(event.target);
                var _opened = jQuery(".navbar-collapse").hasClass("in");
                if (_opened === true && !clickover.is('.bs-navbar-collapse') && !clickover.hasClass("navbar-toggle")) {
                    jQuery("button.navbar-toggle").click();
                }
            });
            */

/*const obj = {
    cat : "meow",
    dog : "habhabn",
    cow : "moumou"
}
 
function asign(obj) {
    let {cat,dog,cow} = this;
    console.log(`cat : ${cat} , dog : ${dog} , cow : ${cow}`);
}

asign(obj);
*/


/*var menuEl = document.querySelector('#menu');
var entriesEl = document.querySelector('#entries');

function fetchSubreddit(url) {
  if (url) {
    fetch('https://www.reddit.com/r/' + url + '.json').then(function(response) {
      return response.json();
    }).then(function(json) {
      var links = '';
      for (var i = 0; i < json.data.children.length; i++) {
        links += '<li><a href="' + json.data.children[i].data.url + '">' +
          json.data.children[i].data.url + '</a></li>';
      }
      entriesEl.innerHTML = '<ul>' + links + '</ul>';
    });
  }
}

var subredditsByTopicUrl = 'https://www.reddit.com/api/subreddits_by_topic.json?query=javascript';
fetch(subredditsByTopicUrl).then(function(response) {
  return response.json();
}).then(function(json) {
  var select = document.createElement('select');
  var links = '';
  for (var k = 0; k < json.length; k++) {
    links += '<option value="' + json[k].name + '">' + json[k].name +
      '</option>';
  }
  select.innerHTML = links;
  select.addEventListener('change', function(e) {
    fetchSubreddit(e.target.value);
  });
  menuEl.appendChild(select);
}).catch(function(ex) {
  ChromeSamples.log('Parsing failed:', ex);
});
*/

/*
let searchTimeoutToken=0;

window.onload =() =>{
    
    searchSection.addEventListener('keyup', (evt,sideBarContent,showContainer) => {
       
        clearTimeout(searchTimeoutToken);
        if(searchSection.value.trim().length===0){
            //console.log(this);
           showContainer.innerHTML="";
            sideBarContent.style.display='block';
            return;
        }
        searchTimeoutToken=setTimeout( () =>{
            searchShow(searchSection.value);
        },250); 
    } )
*/


/*const fetchData=async()=>{
    //console.log(this);
    try{
  const res=await axios.get('https://official-joke-api.appspot.com/random_joke');
  console.dir(res.data);
  //const results=res.data.slice(4).map(element => ) ;
  
    }catch(err){
        alert(`Error is : ${err}` );
    }
}
 axios.post('https://wsapi.simsimi.com/190410/talk' , {
    })
    .then(function (response) {
	    console.log(response.data);
    }).catch(function (error) {
	    console.error(error);
    });

//https://www.reddit.com/api/subreddits_by_topic.json?query=
//https://www.reddit.com/api/v1/authorize?client_id=CLIENT_ID&response_type=TYPE&state=RANDOM_STRING&redirect_uri=URI&duration=DURATION&scope=

*/


