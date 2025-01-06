# [剑指 Offer 53 - II. 0 ～ n-1 中缺失的数字](https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/)

🟢 <font color=#15bd66>Esay</font>&emsp; 🔖&ensp; [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`二分查找`](/leetcode/outline/tag/binary-search.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/)

## 题目

某班级 `n` 位同学的学号为 `0 ~ n-1`。点名结果记录于升序数组 `records`。假定仅有一位同学缺席，请返回他的学号。

**示例 1:**

> 输入: records = [0,1,2,3,5]
>
> 输出: 4

**示例 2:**

> 输入: records = [0, 1, 2, 3, 4, 5, 6, 8]
>
> 输出: 7

**提示：**

- `1 <= records.length <= 10000`

## 解题思路

# 缺席同学的学号

给定一个升序数组 `records`，表示某班级 `n` 位同学的学号，假定仅有一位同学缺席，请返回他的学号。

## 解题思路

由于学号是升序排列的，我们可以通过对学号进行二分查找来确定缺席的同学。如果缺席同学的学号为 `x`，那么在学号数组中，缺席同学之前的学号应该是连续的，缺席同学之后的学号也应该是连续的。因此，我们可以通过比较学号与下标的关系，来确定缺席同学的学号。

1. 初始化左右指针 `left` 和 `right` 分别指向数组的起始和末尾。
2. 在每一步迭代中，计算中间位置 `mid`，并比较 `records[mid]` 和 `mid` 的值。
   - 如果 `records[mid] == mid`，说明缺席同学的学号在 `mid` 的右侧，将左指针 `left` 更新为 `mid + 1`。
   - 如果 `records[mid] > mid`，说明缺席同学的学号在 `mid` 的左侧，将右指针 `right` 更新为 `mid - 1`。
3. 最终，`left` 指针所指的位置即为缺席同学的学号。

## 代码

```javascript
/**
 * @param {number[]} records
 * @return {number}
 */
var takeAttendance = function (records) {
	let left = 0;
	let right = records.length - 1;
	while (left <= right) {
		const mid = Math.floor((right + left) / 2);
		if (mid == records[mid]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return left;
};
```
