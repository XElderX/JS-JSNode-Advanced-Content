//Promises content

const data = [
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/comments'
];
//
Promise.all(data.map(elem => {
    return fetch(elem).then(response => response.json())
})).then(results => {
        console.log(results[0])
        console.log(results[1])
        console.log(results[2])
    })
    .catch(() => console.log('error'))
