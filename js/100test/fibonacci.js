function fibonacci(n,) {
    if(n ===1 || n === 2) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(5));
// 尾调用
function fibonacciTail(n, v1=1, v2=1){
    if(n === 1) return v1;
    if(n === 2) return v2;
    return fibonacciTail(n-1, v2, v1 + v2);
}
console.log(fibonacciTail(5));

function fibonacci2(n){
    if (n===0) return 0;
    let [pre, curr] = [0n,1n];
    for (let index = 1; index < n; index++) {
        [pre, curr] = [curr, pre + curr]
        // console.log(curr);
    }
    return curr % 1000000007n;
}
fibonacci2(5)

/**
 * 题目：字符串出现的不重复最长长度
 * 整体思路：
 * 用一个滑动窗口装没有重复的字符，枚举字符记录最大值即可
 * 对于遇到重复字符如何收缩窗口大小？
 * 我们可以用 map 维护字符的索引，遇到相同的字符，把左边界移动过去即可
 * 挪动的过程中记录最大长度
 */
var lengthOfLongestSubstring = function (s) {
    let map = new Map();
    let i = -1
    let res = 0
    let n = s.length
    for (let j = 0; j < n; j++) {
        if (map.has(s[j])) {
            i = Math.max(i, map.get(s[j]))
        }
        res = Math.max(res, j - i)
        map.set(s[j], j)
        console.log(i, res,map)
    }
    return res
};
lengthOfLongestSubstring('aabbjshajjksjkwjalka')

function lengthOfLongestSubstring(s) {
    let arr = [...s];
    let map = new Map();
    let i = -1;
    let result = 0;
    let len = arr.length;
    for (let index = 0; index < arr.length; index++) {
        if(map.has(arr[index])){
            i = Math.max(i, map.get(arr[index]))
        }
        result = Math.max(result, index-i);
        map.set(arr[index], index);
        console.log(i, result, map)
    }
    return result
}
lengthOfLongestSubstring('aabbjshajjksjkwjalka')
