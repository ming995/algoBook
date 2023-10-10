/**
 * @description 189.轮转数组
 * https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
 * @param nums 
 * @param k 
 */
let rotate = function (nums: number[], k: number): void {
    let n = nums.length
    const temp = new Array(n);
    for (let i = 0; i < n; ++i) {
        temp[(i + k) % n] = nums[i];
    }
    for (let i = 0; i < n; i++) {
        nums[i] = temp[i];
    }

};