const button = document.getElementById('button');

// Longer way:

/*button.addEventListener('click', getText);

function getText(){
    fetch('someText.txt')
    .then(function(resp){
        return resp.text()
    })
    .then(function(data){
        console.log(data)
    })
} */

button.addEventListener('click', () =>{
    fetch('someText.txt')
    .then((resp) => resp.text())
    .then((data) => {
        const textArea =document.getElementById('textConatainer');
        textArea.innerHTML = data;
    })
    .catch((error)=>console.log('Error'))
});


