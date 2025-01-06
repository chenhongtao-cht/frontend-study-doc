# [剑指 Offer 49. 丑数](https://leetcode.cn/problems/chou-shu-lcof/)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`哈希表`](/leetcode/outline/tag/hash-table.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`堆（优先队列）`](/leetcode/outline/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/chou-shu-lcof/)

## 题目

给你一个整数 `n` ，请你找出并返回第 `n` 个 **丑数** 。

说明：丑数是只包含质因数 `2`、`3` 和/或 `5` 的正整数；`1` 是丑数。

**示例 1：**

> 输入: n = 10
>
> 输出: 12
>
> 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。

**提示：**

- `1 <= n <= 1690`

::: warning
本题与 LeetCode [第 264 题](./0264.md) 相同。
:::

## 解题思路

这道题很精妙，你看着它好像是道数学题，实际上它却是一个合并多个有序链表的问题，同时用到了筛选素数的思路。

类似 **如何高效寻找素数** 的思路：如果一个数 x 是丑数，那么 `x * 2`, `x * 3`, `x * 5` 都一定是丑数。

我们把所有丑数想象成一个从小到大排序的链表，就是这个样子：

`1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 8 -> ...`

然后，我们可以把丑数分为三类：`2` 的倍数、`3` 的倍数、`5` 的倍数（按照题目的意思，`1` 算作特殊的丑数，放在开头），这三类丑数就好像三条有序链表，如下：

- 能被 `2` 整除的丑数：

`1 -> 1*2 -> 2*2 -> 3*2 -> 4*2 -> 5*2 -> 6*2 -> 8*2 ->...`

- 能被 `3` 整除的丑数：

`1 -> 1*3 -> 2*3 -> 3*3 -> 4*3 -> 5*3 -> 6*3 -> 8*3 ->...`

- 能被 `5` 整除的丑数：

`1 -> 1*5 -> 2*5 -> 3*5 -> 4*5 -> 5*5 -> 6*5 -> 8*5 ->...`

我们其实就是想把这三条「有序链表」合并在一起并去重，合并的结果就是丑数的序列，然后求合并后的这条有序链表中第 `n` 个元素是什么。

## 代码

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
	let index2 = 0,
		index3 = 0,
		index5 = 0;
	let val2 = 1,
		val3 = 1,
		val5 = 1;
	let ugly = new Array(n);
	let index = 0;
	while (index < n) {
		let min = Math.min(val2, val3, val5);
		ugly[index] = min;
		index++;
		if (min == val2) {
			val2 = 2 * ugly[index2];
			index2++;
		}
		if (min == val3) {
			val3 = 3 * ugly[index3];
			index3++;
		}
		if (min == val5) {
			val5 = 5 * ugly[index5];
			index5++;
		}
	}
	return ugly[n - 1];
};
```

## 相关题目

:::: md-demo 相关题目

- [23. 合并 K 个升序链表](./0023.md)
- [204. 计数质数](https://leetcode.com/problems/count-primes)
- [263. 丑数](https://leetcode.com/problems/ugly-number)
- [279. 完全平方数](./0279.md)
- [313. 超级丑数](https://leetcode.com/problems/super-ugly-number)
- [1201. 丑数 III](https://leetcode.com/problems/ugly-number-iii)

::::
