# [剑指 Offer 3. 数组中重复的数字](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

🟢 <font color=#15bd66>Esay</font>&emsp; 🔖&ensp; [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`排序`](/leetcode/outline/tag/sorting.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

## 题目

在一个长度为 `n` 的数组里的所有数字都在 `0` 到 `n-1` 的范围内。数组中某些数字是重复的，但不知道有几个数字是重复的，也不知道每个数字重复几次，请找出数组中任意一个重复的数字。

例如，如果输入长度为 `7` 的数组`[2,3,1,0,2,5,3]`，那么对应的输出是 `2` 或者 `3`。存在不合法的输入的话输出`-1`.

**Example:**

> 输入：[2, 5, 3, 0, 5, 0]
>
> 输出：0 或 5

**Constraints:**

- 数据范围：`0 ≤ n ≤ 10000`
- 进阶：时间复杂度 `O(n)` ，空间复杂度 `O(n)`

## 解题思路

使用哈希表，遍历数组，如果 `map` 中不存在该元素则保存它，如果 `map` 中已经存在该元素，立即返回。

## 代码

```javascript
/**
 * @param {number[]} documents
 * @return {number}
 */
var findRepeatDocument = function (documents) {
  let map = new Map();
  for (let i of documents) {
    if (map.has(i)) return i;
    map.set(i, true);
  }
  return -1;
};
```
