
const axios = require('axios');

async function getAllUser(){
    let result = await axios.get('https://jsonplaceholder.typicode.com/users')
    return result.data;
}
getAllUser().then((a)=> console.log(a)).catch((error)=> console.log(error))