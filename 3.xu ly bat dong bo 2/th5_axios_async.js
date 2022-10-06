

const axios = require('axios');

async function resultAPI(){
    let result = await axios.get('http://jsonplaceholder.typicode.com/posts');
    return result.data
}
resultAPI().then(result => console.log(result)).catch((error) => console.log(error));
