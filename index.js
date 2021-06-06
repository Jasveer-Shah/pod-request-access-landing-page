let bearer_token = "BQCvTkvrnavz7LwR0vX8vbFzqpCrkaHRKdtovS1-_3wjsVON_r0azJ1k3K0hU3_ZNw2utLj_9jRj2QVDl-SkN9hTgEGfiPdBde7ca_E6xbRcL2Cha_3ivU4oiGcNDlAVdKzHPOGdi4nT5MLI2Wcars1jI8UToau6Rsbh4bzvlr-Q9zD28y8oe5bX9RqBuUm4oC5bH_bq0p7_t8-kexX52iAsE3tsBiOb1xq_cc3LR7pG3S91oVs30EreBn1wjqmHQb1dHI-alB6szWC9ZkLGwwvV0m2_7XKS3YWk3Eq5";

let url = "https://api.spotify.com/v1/shows";
let bearer = "Bearer" + bearer_token;

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

    .then(console.log)

    .then((data)=> {
        let show = data.shows[0];
        let featured_html = `
          <div class= 'featured'>
            <img src='${data.shows[0].images[1].url}'/>
            <div>
            <h2>
            </h2>
            <h3>
            </h3>
            <h4>
            </h4>
            </div>

          </div>
        `

        document.getElementById("featured").innerHTML= featured_html;
    })
    .catch(console.log)
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
//                     <h3>Don't forget to listen to today's episode!</h3>
//                     <button>Listen now</button>
//                 </div>
//             </div>
//         `
//         document.getElementById("featured").innerHTML = featured_html;
//     })
//     .catch(console.log)
// }

///2nIvarXvvZcp1cePx69x9N%2C5lY4b5PGOvMuOYOjOVEcb9%2C6xpiit8aJmwDHk1rKdxmri
