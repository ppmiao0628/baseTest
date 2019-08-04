/**
 * Created by kellerme on 2019/8/4
 */
/*
在一个长度为 n 的数组里的所有数字都在 0 到 n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字是重复的，也不知道每个数字重复几次。请找出数组中任意一个重复的数字。

Input:
{2, 3, 1, 0, 2, 5}

Output:
2
 */

(function () {
    let arrs = [2,3,1,0,8,5];
    let newArr = [];
    let repeatFlag = false;
    let len = arrs.length;
    for (let i=0;i<len;i++){
        if (typeof newArr[arrs[i]] !== 'undefined') {
            console.log(`第一个重复的数字是：${arrs[i]}`);
            repeatFlag = true;
            break;
        } else {
            newArr[arrs[i]] = arrs[i];
        }
    }
    if (!repeatFlag){
        console.log('没有重复的数字');
    }
})()