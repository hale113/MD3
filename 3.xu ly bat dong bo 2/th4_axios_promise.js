

axios  = require('axios');
// const resultAPI = axios.get('http://jsonplaceholder.typicode.com/posts/2')
//
// console.log(resultAPI)
// resultAPI
//     .then((response)=>{
//         console.log(response.data);
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
function getJSONAPI() {
    return new Promise(function (resolve) {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
            .then(function (json) {
                resolve(json.data);
            });
    });
}
getJSONAPI().then(result => {
    console.log(result);
})
