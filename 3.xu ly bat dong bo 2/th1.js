
async function getSum(arr){
    if (arr instanceof Array){
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    throw new Error("Input data is incorrect")
}

async function f(){
    try {
        let a = await getSum(3,5);
        console.log(a)
    }
    catch (error){
        console.log(error);
    }
}
f();