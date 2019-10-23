const sum = require("./sum.js");

function fibonacciNth(n) {
    const nums = [1, 1];

    while(n > nums.length) {
        const lastNum = nums[nums.length -1];
        const secondLastNum = nums[nums.length -2];

        const nextNum = sum (lastNum, secondLastNum);
        nums.push(nextNum);
        //nums.push(lastNum + secondLastNum);
    }

    return nums;
    //return nums[nums.length - 1];
}  

module.exports = fibonacciNth;
