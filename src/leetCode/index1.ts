/**
 * 88. 合并两个有序数组
 * @description: 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 思路：双指针
 */
const merge = function (nums1: Array<number>, m: number, nums2: Array<number>, n: number) {
    // 设置两个指针
    let p1 = 0, p2 = 0;
    // 根据题意最后得到的数组是长度为 m+n 长度的数组，所以这里先创建一个 m+n 长度的数组
    const sorted = new Array(m + n).fill(0);
    let cur: number;
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2++];
        } else if (p2 === n) {
            cur = nums1[p1++];
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1++];
        } else {
            cur = nums2[p2++];
        }
        // 这里 -1 是因为跑完判断之后 p1 p2 其中必有一个 +1
        sorted[p1 + p2 - 1] = cur;
    }
    for (let i = 0; i < m + n; i++) {
        nums1[i] = sorted[i];
    }
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))

