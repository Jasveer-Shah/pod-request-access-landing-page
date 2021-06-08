let bearer_token = "BQDWw2poIn8HLvayRgprpoSdKhs7GKpAldJE6KL9oxA2Zq8lawfIZvWz31ybM1mkOk9kh5IfYpuyv9VoPhzxKVE3wD1kXms3T69LJhKjn4Bx9uZ0FXPxGuCoIN5vCThFDpSc51CJ2n8xxhnntSkj6aALyPOTT78-Oj3LHuo_o7_g1BKzVxKHylYYzZAPrOkjBcDGQYvN60K8ER5NlQ_pePyL5sX1Ds2JPhlrTQznrfLFBbuounxuqute4-NaXBWsuE-A4kj8bJDo2MKFMCxtfRubTqhu0Fb5rstXNP8w";

let url = "https://api.spotify.com/v1/shows";
let bearer = "Bearer " + bearer_token;

function fetch_featured(){
    let show_id = "2nIvarXvvZcp1cePx69x9N";
    fetch(url+"?ids="+show_id+"&market=US",{
        method:"GET",
        headers: {
            'Authorization': bearer,
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
        } 
    }) 
    .then((data) =>{return data.json()})

 

    .then((data)=> {
        let show = data.shows[0];
        let featured_html = `
          <div class= 'featured'>
            <img src='${show.images[1].url}'/>
            <div>
               <h2>${show.name}</h2>
               <h4>${show.description} </h4>
               <h4>Don't forget to listen to todaysepisode! </h4>
               <button>Listen now</button>
            </div>

          </div>
        `

        document.getElementById("featured").innerHTML= featured_html;
    })
    .catch(console.log)
}


function fetch_latest(){
  let show_id = "2nIvarXvvZcp1cePx69x9N%2C5lY4b5PGOvMuOYOjOVEcb9%2C6xpiit8aJmwDHk1rKdxmri";
  fetch(url+"?ids="+show_id+"&market=US",{
      method:"GET",
      headers: {
          'Authorization': bearer,
          'Accept' : 'application/json',
          'Content-Type': 'application/json',
      } 
  }) 
  .then((data) =>{return data.json()})

  // .then(console.log)

  .then((data)=> {
    data.shows.forEach(show => {
       let show_html = `
        <div class='show' onclick='location.href = "show.html?id=${show.id}" '>
          <img src='${show.images[1].url}'/>
         <div>
             <h2>${show.name}</h2>
             <h5>${show.publisher} </h5>
             <h4>Don't forget to listen to todaysepisode! </h4>
             <button>Listen now</button>
        </div>

      </div>
    `

    document.getElementById("shows").innerHTML += show_html;

     });
  })
  .catch(console.log)
}



function fetch_all(){
  fetch_featured();
  fetch_latest();
}


function get_show(id){
  fetch(url+"/"+id+"?market=US", {
    method:"GET",
    headers:{
      'Authorization':bearer,
      'Accept':'application/json',
      'Content-Type':'application/json',
    }
  })
 .then((data) =>{ return data.json()})
 .then((data) =>{
   document.title = "pod  - "+data.name;
   let header_html = `
        <img src='${data.images[1].url}' />
        <div>
          <p>PODCAST</p>
          <h2>${data.name}</h2>
          <h5>${data.publisher}</h5>
        </div>
   `
   document.getElementById("header").innerHTML = header_html;
 })
}

function get_episodes(id){
     fetch(url+"/"+id+"/episodes?market=US", {
    method:"GET",
    headers:{
      'Authorization':bearer,
      'Accept':'application/json',
      'Content-Type':'application/json',
    }
  })
  .then((data) => {data.json()})
  .then((data)=> {
    data.items.forEach(episode => {
      let episode_html = `
         <div class="episode">
            <img src="${episode.images[1].url}" />

            <div class="episode__details">
               <h2>${episode.name}</h2>
            </div>


              <div class="audio">
                 <div class="play__button">
                   <audio src="${episode.audio_preview_url}"controls>
                   </audio>
                 </div>
                 <p>Prewiew</p>
             </div>
           
       
       </div>

      `
      document.getElementById("episodes").innerHTML += episode_html;
    });
  })
}

// 2nIvarXvvZcp1cePx69x9N%2C5lY4b5PGOvMuOYOjOVEcb9%2C6xpiit8aJmwDHk1rKdxmri

// function fetch_featured(){
//     let show_id = "2nIvarXvvZcp1cePx69x9N";
//     fetch(url+"?ids="+show_id+"&market=US",{
//         method:"GET",
//         headers:{
//             'Authorization':bearer,
//             'Accept':'application/json',
//             'Content-Type':'application/json',
//         }
//     })
//     .then((data)=>{return data.json()})
//     .then((data)=>{
//         let show = data.shows[0]
//         let featured_html = `
//             <div class='featured'>
//                 <img src='${show.images[1].url}' />
//                 <div>
//                     <h2>${show.name}</h2>
//                     <h4>${show.description}</h4>
//                     <h4>Don't forget to listen to today's episode!</h3>
//                     <button>Listen now</button>
//                 </div>
//             </div>
//         `
//         document.getElementById("featured").innerHTML = featured_html;
//     })
//     .catch(console.log)
// }

///2nIvarXvvZcp1cePx69x9N%2C5lY4b5PGOvMuOYOjOVEcb9%2C6xpiit8aJmwDHk1rKdxmri
