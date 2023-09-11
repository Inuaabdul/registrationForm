const formelement = document.querySelector('.form')

formelement.addEventListener('submit', e => {
    e.preventDefault();
    const formdata = new FormData(formelement);
    /*  console.log(formdata.get('name')); */
    const data = new URLSearchParams(formdata)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: data
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    // console.log(data);
})














/*  let url = 'https://jsonplaceholder.typicode.com/posts'
 const getPosts = async () => {
     const response = await fetch(url)
     const json = await response.json()
     console.log(json)
 }
 const sendPost = async (formdata) => {
     const response = await fetch(url, {
         method: 'POST',
         headers: {
             'Content-type': 'application/json; charset=UTF-8',
         },
         body: JSON.stringify(formdata)
     })
     const json = await response.json()
 
     console.log(response)
     console.log(json)
 
     sendPost(formdata)
 } */
/* }) */