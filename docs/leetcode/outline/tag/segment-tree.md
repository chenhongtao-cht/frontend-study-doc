# 线段树

::: details 全部标签

**数据结构**

[`数组`](/leetcode/outline/tag/array.md) [`矩阵`](/leetcode/outline/tag/matrix.md) [`链表`](/leetcode/outline/tag/linked-list.md) [`双向链表`](/leetcode/outline/tag/doubly-linked-list.md) [`栈`](/leetcode/outline/tag/stack.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) [`队列`](/leetcode/outline/tag/queue.md) [`单调队列`](/leetcode/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/leetcode/outline/tag/heap-priority-queue.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) [`最小生成树`](/leetcode/outline/tag/minimum-spanning-tree.md) [`图`](/leetcode/outline/tag/graph.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`最短路`](/leetcode/outline/tag/shortest-path.md) [`强连通分量`](/leetcode/outline/tag/strongly-connected-components.md) [`欧拉回路`](/leetcode/outline/tag/eulerian-circuit.md) [`双连通分量`](/leetcode/outline/tag/biconnected-components.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) [`字典树`](/leetcode/outline/tag/trie.md) <span class="blue">线段树</span> [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md)

**算法**

[`枚举`](/leetcode/outline/tag/enumeration.md) [`递归`](/leetcode/outline/tag/recursion.md) [`分治`](/leetcode/outline/tag/divide-and-conquer.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`排序`](/leetcode/outline/tag/sorting.md) [`桶排序`](/leetcode/outline/tag/bucket-sort.md) [`计数排序`](/leetcode/outline/tag/counting-sort.md) [`基数排序`](/leetcode/outline/tag/radix-sort.md) [`归并排序`](/leetcode/outline/tag/merge-sort.md) [`快速选择`](/leetcode/outline/tag/quick-select.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`前缀和`](/leetcode/outline/tag/prefix-sum.md) [`计数`](/leetcode/outline/tag/counting.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) [`状态压缩`](/leetcode/outline/tag/state-compression.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) [`滚动哈希`](/leetcode/outline/tag/rolling-hash.md) [`扫描线`](/leetcode/outline/tag/sweep-line.md)

**其他**

[`数学`](/leetcode/outline/tag/mathematics.md) [`数论`](/leetcode/outline/tag/number-theory.md) [`几何`](/leetcode/outline/tag/geometry.md) [`博弈`](/leetcode/outline/tag/game-theory.md) [`模拟`](/leetcode/outline/tag/simulation.md) [`组合数学`](/leetcode/outline/tag/combinatorics.md) [`随机化`](/leetcode/outline/tag/randomized-algorithms.md) [`概率与统计`](/leetcode/outline/tag/probability-and-statistics.md) [`水塘抽样`](/leetcode/outline/tag/reservoir-sampling.md) [`拒绝采样`](/leetcode/outline/tag/rejection-sampling.md) [`数据库`](/leetcode/outline/tag/database.md) [`设计`](/leetcode/outline/tag/design.md) [`数据流`](/leetcode/outline/tag/data-streams.md) [`脑筋急转弯`](/leetcode/outline/tag/brain-teasers.md) [`交互`](/leetcode/outline/tag/interaction.md) [`迭代器`](/leetcode/outline/tag/iterators.md) [`多线程`](/leetcode/outline/tag/multithreading.md)

:::

---

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0218 | [天际线问题](https://leetcode.com/problems/the-skyline-problem/) |  |  [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0307 | [区域和检索 - 数组可修改](https://leetcode.com/problems/range-sum-query-mutable/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0307) |  [`设计`](/leetcode/outline/tag/design.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) `1+` | <font color=#ffb800>Medium</font> |
| 0308 | [二维区域和检索 - 可变](https://leetcode.com/problems/range-sum-query-2d-mutable/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) `2+` | <font color=#ff334b>Hard</font> |
| 0315 | [计算右侧小于当前元素的个数](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) |  |  [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0327 | [区间和的个数](https://leetcode.com/problems/count-of-range-sum/) |  |  [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0406 | [根据身高重建队列](https://leetcode.com/problems/queue-reconstruction-by-height/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) `2+` | <font color=#ffb800>Medium</font> |
| 0493 | [翻转对](https://leetcode.com/problems/reverse-pairs/) |  |  [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0673 | [最长递增子序列的个数](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) |  |  [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 0699 | [掉落的方块](https://leetcode.com/problems/falling-squares/) |  |  [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) | <font color=#ff334b>Hard</font> |
| 0715 | [Range 模块](https://leetcode.com/problems/range-module/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) | <font color=#ff334b>Hard</font> |
| 0729 | [我的日程安排表 I](https://leetcode.com/problems/my-calendar-i/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 0731 | [我的日程安排表 II](https://leetcode.com/problems/my-calendar-ii/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 0732 | [我的日程安排表 III](https://leetcode.com/problems/my-calendar-iii/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `1+` | <font color=#ff334b>Hard</font> |
| 0850 | [矩形面积 II](https://leetcode.com/problems/rectangle-area-ii/) |  |  [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) `1+` | <font color=#ff334b>Hard</font> |
| 1157 | [子数组中占绝大多数的元素](https://leetcode.com/problems/online-majority-element-in-subarray/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) `2+` | <font color=#ff334b>Hard</font> |
| 1505 | [最多 K 次交换相邻数位后得到的最小整数](https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) `1+` | <font color=#ff334b>Hard</font> |
| 1521 | [找到最接近目标值的函数值](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 1622 | [奇妙序列](https://leetcode.com/problems/fancy-sequence/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数学`](/leetcode/outline/tag/mathematics.md) | <font color=#ff334b>Hard</font> |
| 1649 | [通过指令创建有序数组](https://leetcode.com/problems/create-sorted-array-through-instructions/) |  |  [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 1687 | [从仓库到码头运输箱子](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/) |  |  [`线段树`](/leetcode/outline/tag/segment-tree.md) [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2031 | [1 比 0 多的子数组个数](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/) |  |  [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ffb800>Medium</font> |
| 2080 | [区间内查询数字的频率](https://leetcode.com/problems/range-frequency-queries/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 2158 | [每天绘制新区域的数量](https://leetcode.com/problems/amount-of-new-area-painted-each-day/) |  |  [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) | <font color=#ff334b>Hard</font> |
| 2179 | [统计数组中好三元组数目](https://leetcode.com/problems/count-good-triplets-in-an-array/) |  |  [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2213 | [由单个字符重复的最长子字符串](https://leetcode.com/problems/longest-substring-of-one-repeating-character/) |  |  [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ff334b>Hard</font> |
| 2276 | [统计区间中的整数数目](https://leetcode.com/problems/count-integers-in-intervals/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) | <font color=#ff334b>Hard</font> |
| 2286 | [以组为单位订音乐会的门票](https://leetcode.com/problems/booking-concert-tickets-in-groups/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) `1+` | <font color=#ff334b>Hard</font> |
| 2407 | [最长递增子序列 II](https://leetcode.com/problems/longest-increasing-subsequence-ii/) |  |  [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`队列`](/leetcode/outline/tag/queue.md) `4+` | <font color=#ff334b>Hard</font> |
| 2424 | [最长上传前缀](https://leetcode.com/problems/longest-uploaded-prefix/) |  |  [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) [`设计`](/leetcode/outline/tag/design.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) `4+` | <font color=#ffb800>Medium</font> |
| 2426 | [满足不等式的数对数目](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/) |  |  [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2519 | [统计 K-Big 索引的数量](https://leetcode.com/problems/count-the-number-of-k-big-indices/) |  |  [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2569 | [更新数组后处理求和查询](https://leetcode.com/problems/handling-sum-queries-after-update/) |  |  [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) | <font color=#ff334b>Hard</font> |
| 2617 | [网格图中最少访问的格子数](https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) `4+` | <font color=#ff334b>Hard</font> |
| 2659 | [将数组清空](https://leetcode.com/problems/make-array-empty/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) `4+` | <font color=#ff334b>Hard</font> |
| 2736 | [最大和查询](https://leetcode.com/problems/maximum-sum-queries/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) `4+` | <font color=#ff334b>Hard</font> |
| LCP 05 | [发 LeetCoin](https://leetcode.cn/problems/coin-bonus/) |  |  [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) | <font color=#ff334b>Hard</font> |
| LCP 09 | [最小跳跃次数](https://leetcode.cn/problems/zui-xiao-tiao-yue-ci-shu/) |  |  [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| LCP 27 | [黑盒光线反射](https://leetcode.cn/problems/IQvJ9i/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数学`](/leetcode/outline/tag/mathematics.md) `1+` | <font color=#ff334b>Hard</font> |
| LCP 52 | [二叉搜索树染色](https://leetcode.cn/problems/QO5KpG/) |  |  [`树`](/leetcode/outline/tag/tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) `4+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 51 | [数组中的逆序对](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/) |  |  [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 058 | [日程表](https://leetcode.cn/problems/fi9suh/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |

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
