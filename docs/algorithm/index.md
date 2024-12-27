#### 不使用循环，求一个数组所有元素的和

```js
const nums = [5,1,3,2,4];
function f(i) {
  return i >= nums.length ? 0 : nums[i] + f(i + 1)
}
f(0)
```