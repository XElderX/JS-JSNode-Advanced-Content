//One of the way  to use async functions with async-await keywords

const data = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments'
];

getData = async function () {
    await Promise.all(data.map(element =>
        fetch(element)
            .then(response => response.json())
    )).then(array => {
        console.log('users', array[0]);
        console.log('posts', array[1]);
        console.log('comments', array[2]); 
    }).catch(console.log('error'));
}