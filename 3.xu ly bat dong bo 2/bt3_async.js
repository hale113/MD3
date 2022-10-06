async function maxArray(arr) {
    if (arr instanceof Array) {
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        return max;
    }
    throw new Error("lỗi")
}

async function f() {
    try {
        let max = await maxArray([1, 4, 5,1111.7])
        console.log(max)
    } catch (error) {
        console.log(error);
    }

}

f();