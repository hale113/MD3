let arr = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }

];
// let male_arr=[];
// let female_arr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].gender === "female"){
//       female_arr.push(arr[i])
//   }
//   if (arr[i].gender === "male"){
//       male_arr.push(arr[i])
//   }
// }
// // let sum1 = 0;
// let sum2 = 0;
// for (let i = 0; i < male_arr.length; i++) {
//     sum1+= male_arr[i].point;
// }
// console.log(male_arr);
// console.log(sum1);
// console.log("điểm trung bình của học sinh nam là: " + (sum1/male_arr.length));
// for (let i = 0; i < female_arr.length; i++) {
//     sum2 += female_arr[i].point;
// }
// console.log(female_arr);
// console.log(sum2);
// console.log("điểm trung bình của học sinh nam là: " + (sum2/female_arr.length));
let male_arr = arr.filter((item)=>{
    return item.gender === "male"
})
console.log(male_arr);
let sum1 = 0;
for (let i = 0; i < male_arr.length; i++) {
    sum1+= male_arr[i].point;
};
console.log(sum1);
let female_arr = arr.filter((item)=>{
    return item.gender === "female";
})
console.log(female_arr);
let sum2 = 0;
for (let i = 0; i < female_arr.length; i++) {
    sum2+= female_arr[i].point;
}
console.log(sum2);
console.log("điểm trung bình của học sinh nam là: " + sum1/male_arr.length);
console.log("điểm trung bình của học sinh nữ là: " + sum2/female_arr.length);