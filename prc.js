
// function perform(params){
//     document.getElementById('click')
//     .addEventListener('click', function(){
//         params();
//         var p = document.createElement('p');
//         p.textContent = "Paragraph Created";
//         document.body.appendChild(p)
//     });
// }

// function x() {
//     console.log(' I am clicked')
// }

// perform(x)


/* call back function */

// function perform(params) {
//     document.getElementById('click')
//         .addEventListener('click', function () {
//             params();
//             if (!document.getElementById('unique-paragraph')) {
//                 var p = document.createElement('p');
//                 p.textContent = "Paragraph Created";
//                 p.id = 'unique-paragraph'; 
//                 document.body.appendChild(p);
//             } else {
//                 console.log("Paragraph already exists");
//             }
//         });
// }

// function x() {
//     console.log('I am clicked');
// }

// perform(x);




/* for loop */
 
// var i = 1

// for(i; i <=5; i++){
//     console.log(i)
// }



/* call back in loop */

// var num = [1,2,4,3]

// for(let i of num){
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }


/* Promise */

// const cart = ['shoe', 'tshirt', 'jeans']

// const pr = createOrder(cart).then(
//     function(orderId){
//         console.log('oder id is', orderId);
//         return makePayment(orderId)
//     }
// )
// .then(function(paymentStatus){
//     return placeOrder(paymentStatus)
// }
// )
// .catch(function(err){
//     console.log(err.message);
// })

// function createOrder(cart){
//     return new Promise(function(reslove, reject){
//         let orderId = '1';
//         reslove('Order Created!!')
//     })
// }

// function makePayment(orderId){
//     return new Promise(function(reslove, reject){
//         let paymentStatus = true;
//         if(paymentStatus){
//             reslove(paymentStatus)
//         }
//         else{
//             const err = Error("Payment Failed")
//             reject(err)
//         }
//     })
// }



/* */

// for ( var i=1; i<=5; i++){
// function a(i){
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }a(i);
// }



/* interview question */

// function data(){
//     a = b = 5; 
// }
// data();
// console.log(a);
// console.log(b);

/* */

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }
  
//   asyncCall();

  
  /* */

//   const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Resolved p1');
//     }, 5000);
//   })

//   const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Resolved p2');
//     }, 10000);
//   })

//   async function asyncCall() {
//     console.log('calling p1');
//     const result1 = await p1;
//     console.log('Hello');
//     console.log(result1);

//     console.log('calling p2');
//     const result2 = await p2;
//     console.log(result2);
//   }
// //   asyncCall();

// function getData() {
//     console.log('calling p1');

//     p1.then(
//         (res) => {console.log(res)}
//     )
//     console.log('Hello');
    
// }
// getData()



/* 
fetch(url) ==> Response(Promise) ==> response.json()(Promise) ==> result
*/

/*

"login": "Amar0911",
  "id": 171808590,
  "node_id": "U_kgDOCj2XTg",
  "avatar_url": "https://avatars.githubusercontent.com/u/171808590?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Amar0911",
  "html_url": "https://github.com/Amar0911",
  "followers_url": "https://api.github.com/users/Amar0911/followers",
  "following_url": "https://api.github.com/users/Amar0911/following{/other_user}",
  "gists_url": "https://api.github.com/users/Amar0911/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Amar0911/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Amar0911/subscriptions",
  "organizations_url": "https://api.github.com/users/Amar0911/orgs",
  "repos_url": "https://api.github.com/users/Amar0911/repos",
  "events_url": "https://api.github.com/users/Amar0911/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Amar0911/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Amarshankar Gupta",
  "company": null,
  "blog": "",
  "location": "mumbai",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-06-05T11:25:25Z",
  "updated_at": "2024-12-08T18:22:03Z"

*/

const api = 'https://api.github.com/users/amar0911'

async function fetchProfile(url) {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed Network Call");
    }
    const Data = await response.json();
    return Data
  }
  async function dispayProfile() {
    try {
      const profileResponse = await fetchProfile(api);
      createProfile(profileResponse)
    } catch (error) {
      const profileDiv = document.getElementById('profile').innerText(error.message);
    }
  }
  function createProfile(data) {
    const profileDiv = document.getElementById('profile')
    const avatar = document.createElement('img')
    avatar.src = data.avatar_url;
    avatar.alt = `${data.login}'s Avatar`;
    avatar.style.width = "150px";
    avatar.style.height = "150px";
    avatar.style.borderRadius = "50%";
    
  
    profileDiv.appendChild(avatar)


    const nameDiv = document.createElement('div');
    nameDiv.className = 'detail';
    nameDiv.innerHTML = `<strong>Name:</strong> ${data.name}`;
    nameDiv.style.border = "2px solid black";
    profileDiv.appendChild(nameDiv);

      
    const usernameDiv = document.createElement('div');
    usernameDiv.className = 'detail';
    usernameDiv.innerHTML = `<strong>Username:</strong> ${data.login}`;
    profileDiv.appendChild(usernameDiv);
  }
  
  
  dispayProfile();


