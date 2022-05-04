const button = document.getElementById('getText');

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
        const textArea =document.getElementById('textContainer');
        textArea.innerHTML = data;
    })
    .catch((error)=>console.log('Error'))
});

const getUser = document.getElementById('getUser');

getUser.addEventListener('click', () =>{
 fetch('users.json')
 .then((resp) => resp.json())
 .then((data) => {
     let output = `<h2>Users</h2>`
     data.forEach((user) => {
         output += `
         <ul>
         <li>ID: ${user.id} </li>
         <li>Name: ${user.name} </li>
         <li>Email: ${user.email} </li>
         </ul>
         `
     })
     document.getElementById('textContainer').innerHTML = output;
 })
});

const getPosts = document.getElementById('getPosts');

getPosts.addEventListener('click', ()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((resp) => resp.json())
    .then((data) => {
        let output = `<h2>Posts</h2>`
        data.forEach((posts)=>{
            output += `
            <div>
            <h3>Title: ${posts.title} </h3>
            <p>Body: ${posts.body} </p>
            </div>
            `;
        })
        document.getElementById('textContainer').innerHTML = output;
    })
})


const addPost = document.getElementById('addPost')
addPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('postTitle').value;
    const body = document.getElementById('postBody').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body: JSON.stringify({title:title, body:body})
        })
        .then((resp) => resp.json())
        .then((data) =>
            console.log(data)
        )

})