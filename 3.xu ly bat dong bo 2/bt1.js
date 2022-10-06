

 const axios = require('axios');

function getPictureOfDay(){
    return new Promise((resolve)=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(function (join){
                resolve(join.data);
            })
    })
}
getPictureOfDay().then(a=>{
    console.log(a)
 })