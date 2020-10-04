---
title: 'element源码学习-Alert组件'
date: 2020-09-10 15:02:09
tags: [前端,Element UI,JavaScript,Vue.js,学习系列]
published: true
hideInList: false
feature: https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20200910150246.png
isTop: false
---
# 🤓前言
一直受到element组件库的照顾，觉得其中有很多值得分析的点和前端设计思想，遂开始整理这个系列。可能会有点乱，资料和分析参考我会附链接，后期可以再做一次整理。也算是对自己前端的一次提升能力学习。

<!-- more -->

# 结构分析
![element结构](https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20200911112128.png)
- .github：github生成文件
- .idea：编译器文件
- build：建构相关
- examples：官网例子相关
- node_modules: node相关包
- packages：组件相关源码
- src：公共工具函数

# Alert组件分析
## Alert目录结构
![Alert目录结构](https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20200911112130.png)
可以注意到每个package里面的组件文件夹中都有一个 index.js

## index.js

![index.js](https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20200911112134.png)
添加install方法来方便作为插件使用，如果单独引用这个组件，就注册这个单独的组件

/* istanbul ignore next */，这个是一个npm代码覆盖率的工具istanbul，在写测试的时候，有些不必要的文件，在计算覆盖率时会被计算到，所以加上这句注释就可以忽略下面的代码。

## main.vue

```html
<template>
  <transition name="el-alert-fade">
    <div
      class="el-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      v-show="visible"
      role="alert"
    >
      <i class="el-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="el-alert__content">
        <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="el-alert__description" v-if="$slots.default && !description"><slot></slot></p>
        <p class="el-alert__description" v-if="description && !$slots.default">{{ description }}</p>
        <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>
```
这里就是alert函数的主体部分

### transition组件
常规的template模块里面包裹的是vue提供的transition组件：[官方transition文档](https://cn.vuejs.org/v2/guide/transitions.html)

![transition功能展示](https://user-gold-cdn.xitu.io/2020/7/11/1733e940ead5ac72?w=728&h=158&f=png&s=14070)

Vue在元素显示与隐藏的过渡中，提供了 6 个 class 来切换：

- v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

- v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

- v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

- v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

- v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

- v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。

```
 <transition name="el-alert-fade">
 ...
 </transition>
```
定位它的过渡动画，位于packages/theme-chalk/src/alert.scss

```css
.el-alert-fade-enter,
.el-alert-fade-leave-active {
  opacity: 0;
}
```
可以看到它从进入到退出只是改变了透明度。

### div部分
查看transition中的div部分。
```
    <div
      class="el-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      v-show="visible"
      role="alert"
    >
    //props
    effect: {
        type: String,
        default: 'light',
        validator: function(value) {
          return ['light', 'dark'].indexOf(value) !== -1;
        }
    }
```
- 运用了[vue 的 class 的数组语法](https://cn.vuejs.org/v2/guide/class-and-style.html#%E6%95%B0%E7%BB%84%E8%AF%AD%E6%B3%95)。始终添加typeClass,以及在is-center = true时添加center，根据父组件传入的value进行校验（light or dark）并添加is-light or is-dark。

- typeClass：通过外部传入的 props 的 type 属性来拼接成 el-alert--${ this.type }，默认值为 info
```
      typeClass() {
        return `el-alert--${ this.type }`;// 根据传递的type返回不同的类
      },
        //props
        type: {
                type: String,
                default: 'info'
            },
      
```
- role属性作用是告诉Accessibility类应用（比如屏幕朗读程序，为盲人提供的访问网络的便利程序），这个元素所扮演的角色，主要是供残疾人使用。使用role可以增强文本的可读性和语义化。
- 根据visible来决定该div是否可见。

### i标签部分-图标

```
<i class="el-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
 
    iconClass() {
        return TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
      },

      isBigIcon() {
        return this.description || this.$slots.default ? 'is-big' : '';
      },
```
- iconClass：用来判断如果在显示 icon 的情况下，根据 type 来决定显示哪个 icon，默认为 el-icon-info。决定图标类型。
- isBigIcon：当有辅助性文字介绍的时候，返回 is-big。决定图标大小。
这两个都是计算属性。

这里对应的就是alert的相应图标

小标签
![小标签](https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20200911112138.png)
大标签
![大标签](https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20200911112139.png)
其中TYPE_CLASSES_MAP是一个常量对象，根据传递的type来map到相应的类名。
```
  const TYPE_CLASSES_MAP = {
    'success': 'el-icon-success',
    'warning': 'el-icon-warning',
    'error': 'el-icon-error'
  };
```
而大图标是由this.description决定的

```
//props
      description: {
        type: String,
        default: ''
      },
```
当存在描述性内容（description传入）或者用 this.$slots.default 来判断是否是通过默认 slot 传入的，如果有值（为 VNode），就设为相应的class，如果为undefined，就为空。

slots部分可以参考相关文档：[插槽——vuejs官方文档](https://cn.vuejs.org/v2/guide/components-slots.html#%E6%8F%92%E6%A7%BD%E5%86%85%E5%AE%B9)

这里占个坑先。后续开vue的源码详解再附加链接。

### 主体部分

```html
 <div class="el-alert__content">
        <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="el-alert__description" v-if="$slots.default && !description"><slot></slot></p>
        <p class="el-alert__description" v-if="description && !$slots.default">{{ description }}</p>
        <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
```
内容部分，包括标题、内容和关闭按钮三个部分。

- 标题：由名为title的props决定，包括一个isBoldTitle的计算属性判断是否是粗体，显示与否根据title是否存在进行显示
- 警告描述slot：可以是自定义，也可以传递description的props内容来决定。
- 关闭按钮i：存在closeText这一prop的内容的话，会自定义关闭内容；
会根据closable这一prop决定是否显示该关闭按钮；
绑定单击时触发事件close()

```
    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    },
```
将按钮显示关闭，并且触发close事件。
