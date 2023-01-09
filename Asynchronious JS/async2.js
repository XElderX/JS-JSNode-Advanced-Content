//One of the way  to use async functions with async-await keywords.

const data = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments'
];

getData2 = async function () {
    try {
        const [users, posts, comments] = await Promise.all(data.map(elem =>
            fetch(elem)
                .then(res => res.json())
        ))
        console.log('users', users);
        console.log('posts', posts);
        console.log('comments', comments);

    } catch (error) {
        console.log(`ha error ${error}`);
    }
}