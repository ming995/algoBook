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