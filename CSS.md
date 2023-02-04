## 选择器
+ 简单选择器（名称、id、类）
+ 组合器选择器（特定关系）
+ 伪类选择器（特定状态）
    + 一般选择
        1. `:enabled`：已启用状态
        2. `:checked`：选中状态
        3. `:disabled`：禁用状态
        4. `:empty`：没有子元素的状态
        + `<a>`标签状态——hover必须在link和visited之后，active必须在hover之后
            5. `:active`：活动状态
            6. `:link`：未被访问状态
            7. `:hover`：鼠标悬停状态
            8. `:visited`：已访问状态
        9. `:focus`：获得焦点状态
        10. `:lang(language)`：lang属性值为language（参数）的状态
        11. `:not(selector)`：非selector的元素
        12. `:target`：选择目标url跳转到的元素
        13. `:root`：选择根元素
    + 根据元素父子关系选择
        1. `:first-child`：是其父元素的首个子元素时的状态
        2. `:last-child`：是其父元素的首个子元素时的状态
        3. `:nth-child(n)`：是其父元素的第n子元素时的状态
        4. `:nth-last-child(n)`：是其父元素的倒数第n子元素时的状态
        5. `:first-of-type`：是其父元素这一特定类型中的首个元素的状态
        6. `:last-of-type`：是其父元素这一特定类型中的首个元素的状态
        7. `:nth-of-type(n)`：是其父元素这一特定类型中的第n个元素的状态
        8. `:nth-last-of-child(n)`：是其父元素这一特定类型中的倒数第n个元素的状态
    + 用于表单元素
        1. `:in-range`：input输入值具有指定范围内的状态
            + 仅适用于带有min和max属性的input元素
        2. `:out-of-range`：input输入值超出指定范围的状态
            + 仅适用于带有min和max属性的input元素
        3. `:invalid`：表单元素输入值无效的状态
            + 仅适用于有限制的表单元素
        4. `:invalid`：表单元素输入值有效的状态
            + 仅适用于有限制的表单元素
        5. `:valid`：所有具有有效值的表单元素
            + 仅适用于有限制的表单元素
        6. `:optional`：选择可选（非必填）的表单元素（即不带required属性的表单元素）
+ 伪元素选择器（某元素的一部分）
    1. `::after`：元素之后插入新内容
        + `content`属性指定要插入的内容
    2. `::before`：元素之前插入新内容
        + `content`属性指定要插入的内容
    3. `::first-letter`：首字母
    4. `::first-line`：首行
    5. `::selection`：用户选择的部分（长按鼠标左键选择）
+ 属性选择器（属性或属性值）

## 盒模型
+ 标准盒模型：`height/width = content`
    + 长和宽只定义内容区域，不包含内外边距`padding`和`margin`
+ 怪异盒模型：`height/width = content + margin + padding`
    + 长和宽定义内容区域和内外边距

## 对齐和居中
+ 文本对齐
    + 水平对齐：`text-align`
        + `center/left/right`：水平居中/左/右对齐
        + `justify`：使每一行都具有相等的宽度，且左右边距是直的
    + 垂直对齐：`vertical-align`
        + `top/middle/bottom`：上/垂直居中/下对齐

## 画三角形
+ 用`border`（宽度设置大一点）包裹一个`div`，然后将`div`宽和高设置为0，最后将不想要的三角形`border-xxx-color`设置为透明`transparent`
    ```
    .trangle1 {
            height: 0px;
            width: 0px;
            border:100px solid #000;
            border-top-color: transparent;
            border-bottom-color: red;
            border-left-color:transparent ;
            border-right-color: transparent;
    }
    ```

## 其他
+ 轮廓`outline-_/style/color/width/offset`
    + 绘制在元素边框之外，可能与其他内容重叠，不算在元素总宽度和总高度里面