let arr =["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu","thứ bảy"];
let date = new Date();
let index = date.getDay();
for (let i = 0; i < arr.length; i++) {
    if (index===i){
        console.log("hôm nay là: "+arr[i]);
    }
}
