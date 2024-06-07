# [剑指 Offer 12. 矩阵中的路径](https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`矩阵`](/leetcode/outline/tag/matrix.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/)

## 题目

字母迷宫游戏初始界面记作 m x n 二维字符串数组 grid，请判断玩家是否能在 grid 中找到目标单词 target。
注意：寻找单词时 必须 按照字母顺序，通过水平或垂直方向相邻的单元格内的字母构成，同时，同一个单元格内的字母 不允许被重复使用 。

![](https://assets.leetcode.com/uploads/2020/11/04/word2.jpg)

**示例 1：**

> 输入：grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], target = "ABCCED"
>
> 输出：true

**示例 2：**

> 输入：grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], target = "SEE"
>
> 输出：true

**示例 3：**

> 输入：grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], target = "ABCB"
>
> 输出：false

**提示：**

- `m == grid.length`
- `n = grid[i].length`
- `1 <= m, n <= 6`
- `1 <= target.length <= 15`
- `grid` 和 `target` 仅由大小写英文字母组成

::: warning

本题与 LeetCode [第 79 题](./0079.md) 相同。

:::

## 解题思路

1. 遍历整个二维字符网格，找到与单词的首字母匹配的位置。
2. 对于每一个匹配的位置，从这个位置出发进行深度优先搜索（DFS），尝试构建出给定的单词。
3. 在 DFS 的过程中，需要标记已经访问过的单元格，防止重复访问。
4. 如果在 DFS 的过程中成功构建出给定的单词，则返回`true`，否则返回`false`。

这个算法的时间复杂度主要由两部分组成：

1. 对于每个可能的起始位置，都进行了一次 DFS 搜索，DFS 的时间复杂度为 `O(4^L)` ，其中 L 是给定单词的长度。
2. 遍历整个二维字符网格，时间复杂度为 `O(m*n)`，其中 `m` 和 `n` 分别为网格的行数和列数。

综合考虑，总的时间复杂度为 `O(m*n*4^L)` 。

空间复杂度则主要由 DFS 的递归调用栈所占用的空间，最坏情况下为 `O(L)`。

## 代码

```javascript
/**
 * @param {character[][]} grid
 * @param {string} target
 * @return {boolean}
 */
var wordPuzzle = function (grid, target) {
  const m = grid.length;
  const n = grid[0].length;

  const dp = (i, j, index) => {
    // 边界条件
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != target[index]) {
      return false;
    }

    // 匹配成功的情况
    if (index == target.length - 1) {
      return true;
    }

    // 标记当前单元格已访问
    const temp = grid[i][j];
    grid[i][j] = "/";

    // 沿四个方向进行DFS
    const found =
      dp(i + 1, j, index + 1) ||
      dp(i - 1, j, index + 1) ||
      dp(i, j + 1, index + 1) ||
      dp(i, j - 1, index + 1);

    // 恢复当前单元格状态
    grid[i][j] = temp;
    return found;
  };

  // 遍历整个二维字符网格
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 如果找到匹配的首字母，开始DFS
      if (grid[i][j] == target[0] && dp(i, j, 0)) {
        return true;
      }
    }
  }
  // 没有找到匹配的情况
  return false;
};
```
