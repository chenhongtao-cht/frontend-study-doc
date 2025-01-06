# [剑指 Offer 18. 删除链表的节点](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/)

🟢 <font color=#15bd66>Esay</font>&emsp; 🔖&ensp; [`链表`](/leetcode/outline/tag/linked-list.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/)

## 题目

给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

**示例 1**:

> 输入: head = [4,5,1,9], val = 5
>
> 输出: [4,1,9]
>
> 解释: 给定你链表中值为 `5` 的第二个节点，那么在调用了你的函数之后，该链表应变为 `4 -> 1 -> 9`.

**示例 2**:

> 输入: head = [4,5,1,9], val = 1
>
> 输出: [4,5,9]
>
> 解释: 给定你链表中值为 `1` 的第三个节点，那么在调用了你的函数之后，该链表应变为 `4 -> 5 -> 9`.

**说明**：

- 题目保证链表中节点的值互不相同
- 若使用 C 或 C++ 语言，你不需要 `free` 或 `delete` 被删除的节点

::: warning

本题与 LeetCode [第 203 题](./0203.md) 类似，区别是链表中节点的值可能重复；升级版为[第 237 题](./0237.md)，无法访问链表的 `head` 节点。

:::

## 解题思路

遍历链表，找到相应节点删除，然后返回 head 即可。需要注意删除头节点的特殊情况。

## 代码

```javascript
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val == val) return head.next;
  let prev = head;
  while (prev.next) {
    if (prev.next.val == val) {
      prev.next = prev.next.next;
      return head;
    }
    prev = prev.next;
  }
};
```
