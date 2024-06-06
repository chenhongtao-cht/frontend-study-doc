# 状态压缩

::: details 全部标签

**数据结构**

[`数组`](/leetcode/outline/tag/array.md) [`矩阵`](/leetcode/outline/tag/matrix.md) [`链表`](/leetcode/outline/tag/linked-list.md) [`双向链表`](/leetcode/outline/tag/doubly-linked-list.md) [`栈`](/leetcode/outline/tag/stack.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) [`队列`](/leetcode/outline/tag/queue.md) [`单调队列`](/leetcode/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/leetcode/outline/tag/heap-priority-queue.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) [`最小生成树`](/leetcode/outline/tag/minimum-spanning-tree.md) [`图`](/leetcode/outline/tag/graph.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`最短路`](/leetcode/outline/tag/shortest-path.md) [`强连通分量`](/leetcode/outline/tag/strongly-connected-components.md) [`欧拉回路`](/leetcode/outline/tag/eulerian-circuit.md) [`双连通分量`](/leetcode/outline/tag/biconnected-components.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) [`字典树`](/leetcode/outline/tag/trie.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md)

**算法**

[`枚举`](/leetcode/outline/tag/enumeration.md) [`递归`](/leetcode/outline/tag/recursion.md) [`分治`](/leetcode/outline/tag/divide-and-conquer.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`排序`](/leetcode/outline/tag/sorting.md) [`桶排序`](/leetcode/outline/tag/bucket-sort.md) [`计数排序`](/leetcode/outline/tag/counting-sort.md) [`基数排序`](/leetcode/outline/tag/radix-sort.md) [`归并排序`](/leetcode/outline/tag/merge-sort.md) [`快速选择`](/leetcode/outline/tag/quick-select.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`前缀和`](/leetcode/outline/tag/prefix-sum.md) [`计数`](/leetcode/outline/tag/counting.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) <span class="blue">状态压缩</span> [`哈希函数`](/leetcode/outline/tag/hash-function.md) [`滚动哈希`](/leetcode/outline/tag/rolling-hash.md) [`扫描线`](/leetcode/outline/tag/sweep-line.md)

**其他**

[`数学`](/leetcode/outline/tag/mathematics.md) [`数论`](/leetcode/outline/tag/number-theory.md) [`几何`](/leetcode/outline/tag/geometry.md) [`博弈`](/leetcode/outline/tag/game-theory.md) [`模拟`](/leetcode/outline/tag/simulation.md) [`组合数学`](/leetcode/outline/tag/combinatorics.md) [`随机化`](/leetcode/outline/tag/randomized-algorithms.md) [`概率与统计`](/leetcode/outline/tag/probability-and-statistics.md) [`水塘抽样`](/leetcode/outline/tag/reservoir-sampling.md) [`拒绝采样`](/leetcode/outline/tag/rejection-sampling.md) [`数据库`](/leetcode/outline/tag/database.md) [`设计`](/leetcode/outline/tag/design.md) [`数据流`](/leetcode/outline/tag/data-streams.md) [`脑筋急转弯`](/leetcode/outline/tag/brain-teasers.md) [`交互`](/leetcode/outline/tag/interaction.md) [`迭代器`](/leetcode/outline/tag/iterators.md) [`多线程`](/leetcode/outline/tag/multithreading.md)

:::

---

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0464 | [我能赢吗](https://leetcode.com/problems/can-i-win/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/mathematics.md) `3+` | <font color=#ffb800>Medium</font> |
| 0465 | [最优账单平衡](https://leetcode.com/problems/optimal-account-balancing/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 0473 | [火柴拼正方形](https://leetcode.com/problems/matchsticks-to-square/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 0526 | [优美的排列](https://leetcode.com/problems/beautiful-arrangement/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 0638 | [大礼包](https://leetcode.com/problems/shopping-offers/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 0691 | [贴纸拼词](https://leetcode.com/problems/stickers-to-spell-word/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) `3+` | <font color=#ff334b>Hard</font> |
| 0698 | [划分为k个相等的子集](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 0805 | [数组的均值分割](https://leetcode.com/problems/split-array-with-same-average/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`数学`](/leetcode/outline/tag/mathematics.md) `2+` | <font color=#ff334b>Hard</font> |
| 0847 | [访问所有节点的最短路径](https://leetcode.com/problems/shortest-path-visiting-all-nodes/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `2+` | <font color=#ff334b>Hard</font> |
| 0943 | [最短超级串](https://leetcode.com/problems/find-the-shortest-superstring/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) `2+` | <font color=#ff334b>Hard</font> |
| 0996 | [正方形数组的数目](https://leetcode.com/problems/number-of-squareful-arrays/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`数学`](/leetcode/outline/tag/mathematics.md) `3+` | <font color=#ff334b>Hard</font> |
| 1066 | [校园自行车分配 II](https://leetcode.com/problems/campus-bikes-ii/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1125 | [最小的必要团队](https://leetcode.com/problems/smallest-sufficient-team/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1255 | [得分最高的单词集合](https://leetcode.com/problems/maximum-score-words-formed-by-letters/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) `3+` | <font color=#ff334b>Hard</font> |
| 1349 | [参加考试的最大学生数](https://leetcode.com/problems/maximum-students-taking-exam/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 1434 | [每个人戴不同帽子的方案数](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1494 | [并行课程 II](https://leetcode.com/problems/parallel-courses-ii/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`图`](/leetcode/outline/tag/graph.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1595 | [连通两组点的最小成本](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 1617 | [统计子树中城市之间最大距离](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`树`](/leetcode/outline/tag/tree.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 1655 | [分配重复整数](https://leetcode.com/problems/distribute-repeating-integers/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 1659 | [最大化网格幸福感](https://leetcode.com/problems/maximize-grid-happiness/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1681 | [最小不兼容性](https://leetcode.com/problems/minimum-incompatibility/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1723 | [完成所有工作的最短时间](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 1755 | [最接近目标值的子序列和](https://leetcode.com/problems/closest-subsequence-sum/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) `2+` | <font color=#ff334b>Hard</font> |
| 1799 | [N 次操作后的最大分数和](https://leetcode.com/problems/maximize-score-after-n-operations/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`数学`](/leetcode/outline/tag/mathematics.md) `4+` | <font color=#ff334b>Hard</font> |
| 1815 | [得到新鲜甜甜圈的最多组数](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1879 | [两个数组最小的异或值之和](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1947 | [最大兼容性评分和](https://leetcode.com/problems/maximum-compatibility-score-sum/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1986 | [完成任务的最少工作时间段](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1994 | [好子集的数目](https://leetcode.com/problems/the-number-of-good-subsets/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`数学`](/leetcode/outline/tag/mathematics.md) `2+` | <font color=#ff334b>Hard</font> |
| 2002 | [两个回文子序列长度的最大乘积](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`字符串`](/leetcode/outline/tag/string.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 2035 | [将数组分成两个数组并最小化数组和的差](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) `4+` | <font color=#ff334b>Hard</font> |
| 2152 | [穿过所有点的所需最少直线数量](https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`几何`](/leetcode/outline/tag/geometry.md) [`数组`](/leetcode/outline/tag/array.md) `5+` | <font color=#ffb800>Medium</font> |
| 2172 | [数组的最大与和](https://leetcode.com/problems/maximum-and-sum-of-array/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 2184 | [建造坚实的砖墙的方法数](https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 2247 | [K 条高速公路的最大旅行费用](https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`图`](/leetcode/outline/tag/graph.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 2305 | [公平分发饼干](https://leetcode.com/problems/fair-distribution-of-cookies/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 2403 | [杀死所有怪物的最短时间](https://leetcode.com/problems/minimum-time-to-kill-all-monsters/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 2572 | [无平方子集计数](https://leetcode.com/problems/count-the-number-of-square-free-subsets/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`数学`](/leetcode/outline/tag/mathematics.md) `2+` | <font color=#ffb800>Medium</font> |
| 2741 | [特别的排列](https://leetcode.com/problems/special-permutations/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`状态压缩`](/leetcode/outline/tag/state-compression.md) | <font color=#ffb800>Medium</font> |
| LCP 04 | [覆盖](https://leetcode.cn/problems/broken-board-dominoes/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`图`](/leetcode/outline/tag/graph.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| LCP 13 | [寻宝](https://leetcode.cn/problems/xun-bao/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| LCP 53 | [守护太空城](https://leetcode.cn/problems/EJvmW4/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| LCP 69 | [Hello LeetCode!](https://leetcode.cn/problems/rMeRt2/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) `2+` | <font color=#ff334b>Hard</font> |

<style>
.blue {
    background-color: #096dd9;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-size: 0.85em;
    border-radius: 3px;
    color: white;
    font-weight: 500;
}
table th:first-of-type { width: 10%; }
table th:nth-of-type(2) { width: 35%; }
table th:nth-of-type(3) { width: 10%; }
table th:nth-of-type(4) { width: 35%; }
table th:nth-of-type(5) { width: 10%; }
</style>
