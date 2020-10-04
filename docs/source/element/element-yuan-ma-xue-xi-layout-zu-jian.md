---
title: 'element源码学习-Layout组件'
date: 2020-09-24 23:58:41
tags: [Element UI,学习系列,前端,Vue.js,Vue学习系列]
published: true
hideInList: false
feature: 
isTop: false
---
## 前言

Layout布局尝试：

![image-20200924002254419](https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20200924002254.png)

大致由两个重要组件构成，el-row与el-col

## row函数

`row`用来作为`col`的容器，通过render函数创建，上面有一些动态的`class`、`style`，以及一个`slot`用来放置`col`，相对较为简单。

### *render函数

[参考官方手册](https://cn.vuejs.org/v2/guide/render-function.html)

实际上提供了js操作渲染组件的能力（类似于React的思想），给予了组件更高的灵活性。使用JS可以完全代替模板功能（用 JavaScript 的 `if`/`else` 和 `map` 来重写），以下两段代码等价：

```html
<h1>{{ blogTitle }}</h1>
```

```js
render: function (createElement) {
  return createElement('h1', this.blogTitle)
}
```

在这两种情况下，Vue 都会自动保持页面的更新，即便 `blogTitle` 发生了改变。

Vue 的模板实际上被编译成了渲染函数。

### index.js

![image-20200924002451523](https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20200924002451.png)

这一块是按常规的组件注册和封装。

打开`index.js`,这里最后一句导出`Row`供我们`import`。

中间的`install`方法则是把这个组件当成一个Vue的插件来使用，通过`Vue.use()`来使用该组件,install方法传递一个Vue的构造器，Element的所有组件都是一个对象{...}。

之后会看到里面有个`render`函数来创建组件的html结构，`render`方法的好处很大，使得创建html模板的代码更加简洁高效，而不是冗长的各种div标签堆叠，更类似于一种配置形式来创建html。

最后通过`export default`导出,而不是常用的单文件组件形式，因此必须提供install方法。

之前讲到过`/* istanbul ignore next */`，这个是一个npm代码覆盖率的工具istanbul，在写测试的时候，有些不必要的文件，在计算覆盖率时会被计算到，所以加上这句注释就可以忽略下面的代码。

### row.js

```js
  render(h) {
    return h(this.tag, {
      class: [
        'el-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        { 'el-row--flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default);
  }
```

它的style是一个计算属性，会根据`gutter`这一`prop`来改变，栏目之间的间隔，用来抵消`col`造成的两边的`padding`。

```js
  computed: {
    style() {
      const ret = {};

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    }
  },
```

这里margin为负值的详细解释可看：[element-layout分析](https://juejin.im/post/6844903657431891975)

![img](https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20200924233307.webp)

大概就是为了消除图中最左侧和最右侧的间隔。

`class`中的justify/align/type属性都是props，由用户选择性提供

```js
    type: String,//是否采用flex布局
    justify: {//flex 布局下的水平排列方式
      type: String,
      default: 'start'
    },
    align: {// flex 布局下的垂直排列方式
      type: String,
      default: 'top'
    }
```

## col函数

### col.js

首先来看gutter这一style，与row中类似，是通过一个计算属性进行调整。

```js
    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }
```

它的计算过程，涉及父实例。如果父实例不是el-row而是直接使用了el-col将以自身为准返回0，否则返回父组件已有的gutter，然后在此基础上增加padding。

>  一般的想法是col之间用margin来间隔，其实是不行的，而用padding来间隔就很简单，width按百分比来分配就行(box-sizing要设置为border-box)

```js
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'ElRow') {//这里的componentName在row.js中有定义
        parent = parent.$parent;//如果没有被el-row包裹，继续向上查找有无el-row，直到找到el-row父组件为止。
      }
      return parent ? parent.gutter : 0;
    }
  },
```

####   *栅格系统

这里最完备也是最早最具有启发性的是[boostrap提出的栅格系统](https://v3.bootcss.com/css/)。

栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。

> - “行（row）”必须包含在 `.container` （固定宽度）或 `.container-fluid` （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
> - 通过“行（row）”在水平方向创建一组“列（column）”。
> - 你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
> - 类似 `.row` 和 `.col-xs-4` 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。
> - 通过为“列（column）”设置 `padding` 属性，从而创建列与列之间的间隔（gutter）。通过为 `.row` 元素设置负值 `margin` 从而抵消掉为 `.container` 元素设置的 `padding`，也就间接为“行（row）”所包含的“列（column）”抵消掉了`padding`。
> - 负值的 margin就是下面的示例为什么是向外突出的原因。在栅格列中的内容排成一行。
> - 栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 `.col-xs-4` 来创建。
> - 如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。
> - 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 `.col-md-*` 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 `.col-lg-*` 不存在， 也影响大屏幕设备。

![image-20200924231838614](https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20200924231845.png)

#### render函数部分

看下官网中属性的定义和效果

![image-20200924233832568](https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20200924233832.png)

再来看源代码

```js
render(h) {
    let classList = [];
    let style = {};

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }
// span 栅格占据的列数，通过 width 来实现
  // offset 栅格左侧的间隔格数，通过 margin-left 实现
  // push 栅格向右移动格数，通过 left 实现
  // pull 栅格向左移动格数，通过 right 实现
    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(
          prop !== 'span'
            ? `el-col-${prop}-${this[prop]}`
            : `el-col-${this[prop]}`
        );
      }
    });
 // 不同屏幕大小下的适配，传入数字的话只会影响 span，还可以通过传入对象进行更多的控制
  // xs <768px 响应式栅格数或者栅格属性对象
  // sm ≥768px 响应式栅格数或者栅格属性对象
  // md ≥992px 响应式栅格数或者栅格属性对象
  // lg ≥1200px 响应式栅格数或者栅格属性对象
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`el-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `el-col-${size}-${prop}-${props[prop]}`
              : `el-col-${size}-${props[prop]}`
          );
        });
      }
    });

    return h(this.tag, {
      class: ['el-col', classList],
      style
    }, this.$slots.default);
  }
```

下面解释下`['span', 'offset', 'pull', 'push']`这几个的作用，span很好理解，占父容器的列数，对应scss代码如下：

```js
[class*="el-col-"] {
  float: left;
  box-sizing: border-box;
}

.el-col-0 {
  display: none;
}

@for $i from 0 through 24 {
    //el-col-数字类型的类的宽度就是百分比
  .el-col-#{$i} {
    width: (1 / 24 * $i * 100) * 1%;
  }

  .el-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }

  .el-col-pull-#{$i} {
    position: relative;
    right: (1 / 24 * $i * 100) * 1%;
  }

  .el-col-push-#{$i} {
    position: relative;
    left: (1 / 24 * $i * 100) * 1%;
  }
}

```

- [attribute*=value] 选择器，它选择了所有类名以`el-col-`开头的类.

- `offset`实际上是`margin-left`(很好理解，相对左移就是偏移了),这可能会导致一行排列不下所有的col，会导致换行出现
- `el-col-pull`则不同，仅仅只是相对原来的位置移动，不会造成挤下去换行的情况，而会造成不同col互相覆盖

js部分大量使用模板字符串而不是字符串拼接，达到简化代码的目的。



## 参考网站

[Element分析（组件篇）——Layout](https://www.jianshu.com/p/52ae9ad78f80)

[Element源码分析系列1一Layout(布局)](https://juejin.im/post/6844903657431891975)

[Bootstrap 栅格参数](https://v3.bootcss.com/css/#grid-options)

[Element.io - layout](https://element.eleme.io/#/zh-CN/component/layout)

[图解bootstrap栅格系统](https://learnku.com/articles/21215)  --> 这一篇讲得太清楚了。。忍不住点赞