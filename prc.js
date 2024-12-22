
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

function data(){
    a = b = 5; 
}
data();
console.log(a);
console.log(b);

/* */




