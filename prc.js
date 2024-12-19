
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


function perform(params) {
    document.getElementById('click')
        .addEventListener('click', function () {
            params();
            if (!document.getElementById('unique-paragraph')) {
                var p = document.createElement('p');
                p.textContent = "Paragraph Created";
                p.id = 'unique-paragraph'; 
                document.body.appendChild(p);
            } else {
                console.log("Paragraph already exists");
            }
        });
}

function x() {
    console.log('I am clicked');
}

perform(x);

