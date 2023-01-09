//One of the way  to use async functions with async-await keywords
// + for await ... of


const datas = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments'
];

const getData3 = async function() {
    arrayOfPromises = datas.map(data => fetch(data));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}
getData3();