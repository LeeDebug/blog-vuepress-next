---
title: Vue源码解读（知识点总结）
categories:
  - Vue
tags:
  - Vue
keywords: Vue
description: Vue源码解读（知识点总结）
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210706123716.png'
date: 2021-07-05 23:55:11
---

> 为了方便自己对知识点的巩固和理解，整理了李永宁大佬 12 篇《Vue源码解读》的文末知识点总结，在这里可以一览天下。如果想看详细文章，可点击标题下方的“阅读原文”即可。

# （1）前言

[阅读原文](https://juejin.cn/post/6949370458793836580)


# （2）Vue 初始化过程

[阅读原文](https://juejin.cn/post/6950084496515399717)

### Vue 的初始化过程（new Vue(options)）都做了什么？

- 处理组件配置项
    - 初始化根组件时进行了选项合并操作，将全局配置合并到根组件的局部配置上
    - 初始化每个子组件时做了一些性能优化，将组件配置对象上的一些深层次属性放到 vm.$options 选项中，以提高代码的执行效率
- 初始化组件实例的关系属性，比如 $parent、$children、$root、$refs 等
- 处理自定义事件
- 调用 beforeCreate 钩子函数
- 初始化组件的 inject 配置项，得到 ret[key] = val 形式的配置对象，然后对该配置对象进行响应式处理，并代理每个 key 到 vm 实例上
- 数据响应式，处理 props、methods、data、computed、watch 等选项
- 解析组件配置项上的 provide 对象，将其挂载到 vm._provided 属性上
- 调用 created 钩子函数
- 如果发现配置项上有 el 选项，则自动调用 `$mount` 方法，也就是说有了 el 选项，就不需要再手动调用 `$mount` 方法，反之，没提供 el 选项则必须调用 `$mount`
- 接下来则进入挂载阶段



# （3）响应式原理

[阅读原文](https://juejin.cn/post/6950826293923414047)

### Vue 响应式原理是怎么实现的？

- 响应式的核心是通过 Object.defineProperty 拦截对数据的访问和设置
- 响应式的数据分为两类：
    - 对象，循环遍历对象的所有属性，为每个属性设置 getter、setter，以达到拦截访问和设置的目的，如果属性值依旧为对象，则递归为属性值上的每个 key 设置 getter、setter
        - 访问数据时（obj.key)进行依赖收集，在 dep 中存储相关的 watcher
        - 设置数据时由 dep 通知相关的 watcher 去更新
    - 数组，增强数组的那 7 个可以更改自身的原型方法，然后拦截对这些方法的操作
        - 添加新数据时进行响应式处理，然后由 dep 通知 watcher 去更新
        - 删除数据时，也要由 dep 通知 watcher 去更新

### methods、computed 和 watch 有什么区别？

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>methods、computed、watch 有什么区别</title>
</head>

<body>
  <div id="app">
    <!-- methods -->
    <div>{{ returnMsg() }}</div>
    <div>{{ returnMsg() }}</div>
    <!-- computed -->
    <div>{{ getMsg }}</div>
    <div>{{ getMsg }}</div>
  </div>
  <script src="../../dist/vue.js"></script>
  <script>
    new Vue({
    el: '#app',
    data: {
      msg: 'test'
    },
    mounted() {
      setTimeout(() => {
        this.msg = 'msg is changed'
      }, 1000)
    },
    methods: {
      returnMsg() {
        console.log('methods: returnMsg')
        return this.msg
      }
    },
    computed: {
      getMsg() {
        console.log('computed: getMsg')
        return this.msg + ' hello computed'
      }
    },
    watch: {
      msg: function(val, oldVal) {
        console.log('watch: msg')
        new Promise(resolve => {
          setTimeout(() => {
            this.msg = 'msg is changed by watch'
          }, 1000)
        })
      }
    }
  })
  </script>
</body>

</html>
```

![methodsComputedWatch.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c957654bb484ae7ba4ace1b912cff03~tplv-k3u1fbpfcp-watermark.image)

示例其实就是答案了
- 使用场景
    - methods 一般用于封装一些较为复杂的处理逻辑（同步、异步）
    - computed 一般用于封装一些简单的同步逻辑，将经过处理的数据返回，然后显示在模版中，以减轻模版的重量
    - watch 一般用于当需要在数据变化时执行异步或开销较大的操作
- 区别
    - methods VS computed
        - 通过示例会发现，如果在一次渲染中，有多个地方使用了同一个 methods 或 computed 属性，methods 会被执行多次，而 computed 的回调函数则只会被执行一次。
        - 通过阅读源码我们知道，在一次渲染中，多次访问 computedProperty，只会在第一次执行 computed 属性的回调函数，后续的其它访问，则直接使用第一次的执行结果（watcher.value），而这一切的实现原理则是通过对 watcher.dirty 属性的控制实现的。而 methods，每一次的访问则是简单的方法调用（this.xxMethods）。
    - computed VS watch
        - 通过阅读源码我们知道，computed 和 watch 的本质是一样的，内部都是通过 Watcher 来实现的，其实没什么区别，非要说区别的化就两点：1、使用场景上的区别，2、computed 默认是懒执行的，切不可更改。
    - methods VS watch
        - methods 和 watch 之间其实没什么可比的，完全是两个东西，不过在使用上可以把 watch 中一些逻辑抽到 methods 中，提高代码的可读性。



# （4）异步更新

[阅读原文](https://juejin.cn/post/6951568091893465102)

### Vue 的异步更新机制是如何实现的？

- Vue 的异步更新机制的核心是利用了浏览器的异步任务队列来实现的，首选微任务队列，宏任务队列次之。
- 当响应式数据更新后，会调用 dep.notify 方法，通知 dep 中收集的 watcher 去执行 update 方法，watcher.update 将 watcher 自己放入一个 watcher 队列（全局的 queue 数组）。
- 然后通过 nextTick 方法将一个刷新 watcher 队列的方法（flushSchedulerQueue）放入一个全局的 callbacks 数组中。
- 如果此时浏览器的异步任务队列中没有一个叫 flushCallbacks 的函数，则执行 timerFunc 函数，将 flushCallbacks 函数放入异步任务队列。如果异步任务队列中已经存在 flushCallbacks 函数，等待其执行完成以后再放入下一个 flushCallbacks 函数。
- flushCallbacks 函数负责执行 callbacks 数组中的所有 flushSchedulerQueue 函数。
- flushSchedulerQueue 函数负责刷新 watcher 队列，即执行 queue 数组中每一个 watcher 的 run 方法，从而进入更新阶段，比如执行组件更新函数或者执行用户 watch 的回调函数。
- 完整的执行过程其实就是今天源码阅读的过程。

### Vue 的 nextTick API 是如何实现的？

Vue.nextTick 或者 vm.$nextTick 的原理其实很简单，就做了两件事：
- 将传递的回调函数用 try catch 包裹然后放入 callbacks 数组
- 执行 timerFunc 函数，在浏览器的异步任务队列放入一个刷新 callbacks 数组的函数



# （5）全局 API

[阅读原文](https://juejin.cn/post/6952643167715852319)

### Vue.use(plugin) 做了什么？

负责安装 plugin 插件，其实就是执行插件提供的 install 方法。
- 首先判断该插件是否已经安装过
- 如果没有，则执行插件提供的 install 方法安装插件，具体做什么有插件自己决定

### Vue.mixin(options) 做了什么？

负责在 Vue 的全局配置上合并 options 配置。然后在每个组件生成 vnode 时会将全局配置合并到组件自身的配置上来。
- 标准化 options 对象上的 props、inject、directive 选项的格式
- 处理 options 上的 extends 和 mixins，分别将他们合并到全局配置上
- 然后将 options 配置和全局配置进行合并，选项冲突时 options 配置会覆盖全局配置

### Vue.component(compName, Comp) 做了什么？

负责注册全局组件。其实就是将组件配置注册到全局配置的 components 选项上（options.components），然后各个子组件在生成 vnode 时会将全局的 components 选项合并到局部的 components 配置项上。
- 如果第二个参数为空，则表示获取 compName 的组件构造函数
- 如果 Comp 是组件配置对象，则使用 Vue.extend 方法得到组件构造函数，否则直接进行下一步
- 在全局配置上设置组件信息，this.options.components.compName = CompConstructor

### Vue.directive('my-directive', {xx}) 做了什么？

在全局注册 my-directive 指令，然后每个子组件在生成 vnode 时会将全局的 directives 选项合并到局部的 directives 选项中。原理同 Vue.component 方法：
- 如果第二个参数为空，则获取指定指令的配置对象
- 如果不为空，如果第二个参数是一个函数的话，则生成配置对象 { bind: 第二个参数, update: 第二个参数 }
- 然后将指令配置对象设置到全局配置上，this.options.directives['my-directive'] = {xx}

### Vue.filter('my-filter', function(val) {xx}) 做了什么？

负责在全局注册过滤器 my-filter，然后每个子组件在生成 vnode 时会将全局的 filters 选项合并到局部的 filters 选项中。原理是：
- 如果没有提供第二个参数，则获取 my-filter 过滤器的回调函数
- 如果提供了第二个参数，则是设置 this.options.filters['my-filter'] = function(val) {xx}。

### Vue.extend(options) 做了什么？

Vue.extend 基于 Vue 创建一个子类，参数 options 会作为该子类的默认全局配置，就像 Vue 的默认全局配置一样。所以通过 Vue.extend 扩展一个子类，一大用处就是内置一些公共配置，供子类的子类使用。
- 定义子类构造函数，这里和 Vue 一样，也是调用 _init(options)
- 合并 Vue 的配置和 options，如果选项冲突，则 options 的选项会覆盖 Vue 的配置项
- 给子类定义全局 API，值为 Vue 的全局 API，比如 Sub.extend = Super.extend，这样子类同样可以扩展出其它子类
- 返回子类 Sub

### Vue.set(target, key, val) 做了什么？

由于 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = 'hi')，所以通过 Vue.set 为向响应式对象中添加一个 property，可以确保这个新 property 同样是响应式的，且触发视图更新。
- 更新数组指定下标的元素：Vue.set(array, idx, val)，内部通过 splice 方法实现响应式更新
- 更新对象已有属性：Vue.set(obj, key ,val)，直接更新即可 => obj[key] = val
- 不能向 Vue 实例或者 $data 动态添加根级别的响应式数据
- Vue.set(obj, key, val)，如果 obj 不是响应式对象，会执行 obj[key] = val，但是不会做响应式处理
- Vue.set(obj, key, val)，为响应式对象 obj 增加一个新的 key，则通过 defineReactive 方法设置响应式，并触发依赖更新

### 面试官 问：Vue.delete(target, key) 做了什么？

删除对象的 property。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到 property 被删除的限制，但是你应该很少会使用它。当然同样不能删除根级别的响应式属性。
- Vue.delete(array, idx)，删除指定下标的元素，内部是通过 splice 方法实现的
- 删除响应式对象上的某个属性：Vue.delete(obj, key)，内部是执行 delete obj.key，然后执行依赖更新即可

### Vue.nextTick(cb) 做了什么？

Vue.nextTick(cb) 方法的作用是延迟回调函数 cb 的执行，一般用于 this.key = newVal 更改数据后，想立即获取更改过后的 DOM 数据：

```javascript
this.key = 'new val'

Vue.nextTick(function() {
  // DOM 更新了
})
```

其内部的执行过程是：
- this.key = 'new val，触发依赖通知更新，将负责更新的 watcher 放入 watcher 队列
- 将刷新 watcher 队列的函数放到 callbacks 数组中
- 在浏览器的异步任务队列中放入一个刷新 callbacks 数组的函数
- Vue.nextTick(cb) 来插队，将 cb 函数放入 callbacks 数组
- 待将来的某个时刻执行刷新 callbacks 数组的函数
- 然后执行 callbacks 数组中的众多函数，触发 watcher.run 的执行，更新 DOM
- 由于 cb 函数是在后面放到 callbacks 数组，所以这就保证了先完成的 DOM 更新，再执行 cb 函数



# （6）实例方法

[阅读原文](https://juejin.cn/post/6953503236254859294)

### 面试官 问：vm.$set(obj, key, val) 做了什么？

`vm.$set` 用于向响应式对象添加一个新的 property，并确保这个新的 property 同样是响应式的，并触发视图更新。由于 Vue 无法探测对象新增属性或者通过索引为数组新增一个元素，比如：`this.obj.newProperty = 'val'`、`this.arr[3] = 'val'`。所以这才有了 `vm.$set`，它是 `Vue.set` 的别名。
- 为对象添加一个新的响应式数据：调用 defineReactive 方法为对象增加响应式数据，然后执行 dep.notify 进行依赖通知，更新视图
- 为数组添加一个新的响应式数据：通过 splice 方法实现

### vm.$delete(obj, key)  做了什么？

vm.$delete 用于删除对象上的属性。如果对象是响应式的，且能确保能触发视图更新。该方法主要用于避开 Vue 不能检测属性被删除的情况。它是 Vue.delete 的别名。
- 删除数组指定下标的元素，内部通过 splice 方法来完成
- 删除对象上的指定属性，则是先通过 delete 运算符删除该属性，然后执行 dep.notify 进行依赖通知，更新视图

### vm.$watch(expOrFn, callback, [options]) 做了什么？

vm.$watch 负责观察 Vue 实例上的一个表达式或者一个函数计算结果的变化。当其发生变化时，回调函数就会被执行，并为回调函数传递两个参数，第一个为更新后的新值，第二个为老值。

这里需要 注意 一点的是：如果观察的是一个对象，比如：数组，当你用数组方法，比如 push 为数组新增一个元素时，回调函数被触发时传递的新值和老值相同，因为它们指向同一个引用，所以在观察一个对象并且在回调函数中有新老值是否相等的判断时需要注意。

`vm.$watch` 的第一个参数只接收简单的响应式数据的键路径，对于更复杂的表达式建议使用函数作为第一个参数。

至于 `vm.$watch` 的内部原理是：
- 设置 options.user = true，标志是一个用户 watcher
- 实例化一个 Watcher 实例，当检测到数据更新时，通过 watcher 去触发回调函数的执行，并传递新老值作为回调函数的参数
- 返回一个 unwatch 函数，用于取消观察

### vm.$on(event, callback) 做了什么？

监听当前实例上的自定义事件，事件可由 `vm.$emit` 触发，回调函数会接收所有传入事件触发函数`vm.$emit`的额外参数。

`vm.$on` 的原理很简单，就是处理传递的 event 和 callback 两个参数，将注册的事件和回调函数以键值对的形式存储到 vm._event 对象中，`vm._events = { eventName: [cb1, cb2, ...], ... }`。

### vm.$emit(eventName, [...args]) 做了什么？

触发当前实例上的指定事件，附加参数都会传递给事件的回调函数。

其内部原理就是执行 vm._events[eventName] 中所有的回调函数。

> 备注：从 on和on 和 on和emit 的实现原理也能看出，组件的自定义事件其实是谁触发谁监听，所以在这会儿再回头看 [Vue 源码解读（2）—— Vue 初始化过程](https://juejin.cn/post/6950084496515399717) 中关于 initEvent 的解释就会明白在说什么，因为组件自定义事件的处理内部用的就是 vm.on、vm.on、vm.on、vm.emit。

### vm.$off([event, callback]) 做了什么？

移除自定义事件监听器，即移除 `vm._events` 对象上相关数据。
- 如果没有提供参数，则移除实例的所有事件监听
- 如果只提供了 event 参数，则移除实例上该事件的所有监听器
- 如果两个参数都提供了，则移除实例上该事件对应的监听器

### vm.$once(event, callback)  做了什么？

监听一个自定义事件，但是该事件只会被触发一次。一旦触发以后监听器就会被移除。

其内部的实现原理是：
- 包装用户传递的回调函数，当包装函数执行的时候，除了会执行用户回调函数之外还会执行 vm.$off(event, 包装函数) 移除该事件
- 用 vm.$on(event, 包装函数) 注册事件

### vm._update(vnode, hydrating)  做了什么？

官方文档没有说明该 API，这是一个用于源码内部的实例方法，负责更新页面，是页面渲染的入口，其内部根据是否存在 prevVnode 来决定是首次渲染，还是页面更新，从而在调用 __patch__ 函数时传递不同的参数。该方法在业务开发中不会用到。

### vm.$forceUpdate()  做了什么？

迫使 Vue 实例重新渲染，它仅仅影响组件实例本身和插入插槽内容的子组件，而不是所有子组件。其内部原理到也简单，就是直接调用 vm._watcher.update()，它就是 watcher.update() 方法，执行该方法触发组件更新。

### vm.$destroy()  做了什么？

负责完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令和事件监听器。在执行过程中会调用 beforeDestroy 和 destroy 两个钩子函数。在大多数业务开发场景下用不到该方法，一般都通过 v-if 指令来操作。其内部原理是：
- 调用 beforeDestroy 钩子函数
- 将自己从老爹肚子里（$parent）移除，从而销毁和老爹的关系
- 通过 watcher.teardown() 来移除依赖监听
- 通过 vm._ _ patch _ _(vnode, null) 方法来销毁节点
- 调用 destroyed 钩子函数
- 通过 vm.$off 方法移除所有的事件监听

### vm.$nextTick(cb)  做了什么？

vm.$nextTick 是 Vue.nextTick 的别名，其作用是延迟回调函数 cb 的执行，一般用于 this.key = newVal 更改数据后，想立即获取更改过后的 DOM 数据：

```javascript
this.key = 'new val'

Vue.nextTick(function() {
  // DOM 更新了
})
```

其内部的执行过程是：
- this.key = 'new val'，触发依赖通知更新，将负责更新的 watcher 放入 watcher 队列
- 将刷新 watcher 队列的函数放到 callbacks 数组中
- 在浏览器的异步任务队列中放入一个刷新 callbacks 数组的函数
- vm.$nextTick(cb) 来插队，直接将 cb 函数放入 callbacks 数组
- 待将来的某个时刻执行刷新 callbacks 数组的函数
- 然后执行 callbacks 数组中的众多函数，触发 watcher.run 的执行，更新 DOM
- 由于 cb 函数是在后面放到 callbacks 数组，所以这就保证了先完成的 DOM 更新，再执行 cb 函数

### vm._render 做了什么？

官方文档没有提供该方法，它是一个用于源码内部的实例方法，负责生成 vnode。其关键代码就一行，执行 render 函数生成 vnode。不过其中加了大量的异常处理代码。




# （7）Hook Event

[阅读原文](https://juejin.cn/post/6954923081462710309)

### 什么是 Hook Event？

Hook Event 是 Vue 的自定义事件结合生命周期钩子实现的一种从组件外部为组件注入额外生命周期方法的功能。

### Hook Event 是如果实现的？

```html
<comp @hook:lifecycleMethod="method" />
```

- 处理组件自定义事件的时候（vm.$on) 如果发现组件有 hook:xx 格式的事件（xx 为 Vue 的生命周期函数），则将 vm._hasHookEvent 置为 true，表示该组件有 Hook Event

- 在组件生命周期方法被触发的时候，内部会通过 callHook 方法来执行这些生命周期函数，在生命周期函数执行之后，如果发现 vm._hasHookEvent 为 true，则表示当前组件有 Hook Event，通过 vm.$emit('hook:xx') 触发 Hook Event 的执行



# （8）编译器 之 解析

[阅读原文（上篇）](https://juejin.cn/post/6959019076983209992)

[阅读原文（下篇）](https://juejin.cn/post/6959019174215548935)

### 面试官 问：简单说一下 Vue 的编译器都做了什么？

Vue 的编译器做了三件事情：
- 将组件的 html 模版解析成 AST 对象
- 优化，遍历 AST，为每个节点做静态标记，标记其是否为静态节点，然后进一步标记出静态根节点，这样在后续更新的过程中就可以跳过这些静态节点了；标记静态根用于生成渲染函数阶段，生成静态根节点的渲染函数
- 从 AST 生成运行时的渲染函数，即大家说的 render，其实还有一个，就是 staticRenderFns 数组，里面存放了所有的静态节点的渲染函数

### 详细说一说编译器的解析过程，它是怎么将 html 字符串模版变成 AST 对象的？

- 遍历 HTML 模版字符串，通过正则表达式匹配 "<"
- 跳过某些不需要处理的标签，比如：注释标签、条件注释标签、Doctype。
    - 备注：整个解析过程的核心是处理开始标签和结束标签
- 解析开始标签
    - 得到一个对象，包括 标签名（tagName）、所有的属性（attrs）、标签在 html 模版字符串中的索引位置
    - 进一步处理上一步得到的 attrs 属性，将其变成 [{ name: attrName, value: attrVal, start: xx, end: xx }, ...] 的形式
    - 通过标签名、属性对象和当前元素的父元素生成 AST 对象，其实就是一个 普通的 JS 对象，通过 key、value 的形式记录了该元素的一些信息
    - 接下来进一步处理开始标签上的一些指令，比如 v-pre、v-for、v-if、v-once，并将处理结果放到 AST 对象上
    - 处理结束将 ast 对象存放到 stack 数组
    - 处理完成后会截断 html 字符串，将已经处理掉的字符串截掉
- 解析闭合标签
    - 如果匹配到结束标签，就从 stack 数组中拿出最后一个元素，它和当前匹配到的结束标签是一对。
    - 再次处理开始标签上的属性，这些属性和前面处理的不一样，比如：key、ref、scopedSlot、样式等，并将处理结果放到元素的 AST 对象上
        - 备注：视频中说这块儿有误，回头看了下，没有问题，不需要改，确实是这样
    - 然后将当前元素和父元素产生联系，给当前元素的 ast 对象设置 parent 属性，然后将自己放到父元素的 ast 对象的 children 数组中
- 最后遍历完整个 html 模版字符串以后，返回 ast 对象



# （9）编译器 之 优化

[阅读原文](https://juejin.cn/post/6960465810682806308)

### 简单说一下 Vue 的编译器都做了什么？

Vue 的编译器做了三件事情：
- 将组件的 html 模版解析成 AST 对象
- 优化，遍历 AST，为每个节点做静态标记，标记其是否为静态节点，然后进一步标记出静态根节点，这样在后续更新的过程中就可以跳过这些静态节点了；标记静态根用于生成渲染函数阶段，生成静态根节点的渲染函数
- 从 AST 生成运行渲染函数，即大家说的 render，其实还有一个，就是 staticRenderFns 数组，里面存放了所有的静态节点的渲染函数

### 详细说一下静态标记的过程

- 标记静态节点
    - 通过递归的方式标记所有的元素节点
    - 如果节点本身是静态节点，但是存在非静态的子节点，则将节点修改为非静态节点
- 标记静态根节点，基于静态节点，进一步标记静态根节点
    - 如果节点本身是静态节点 && 而且有子节点 && 子节点不全是文本节点，则标记为静态根节点
    - 如果节点本身不是静态根节点，则递归的遍历所有子节点，在子节点中标记静态根

### 什么样的节点才可以被标记为静态节点？

- 文本节点
- 节点上没有 v-bind、v-for、v-if 等指令
- 非组件



# （10）编译器 之 生成渲染函数

[阅读原文](https://juejin.cn/post/6961545472204865572)

### 简单说一下 Vue 的编译器都做了什么？

Vue 的编译器做了三件事情：
- 将组件的 html 模版解析成 AST 对象
- 优化，遍历 AST，为每个节点做静态标记，标记其是否为静态节点，然后进一步标记出静态根节点，这样在后续更新的过程中就可以跳过这些静态节点了；标记静态根用于生成渲染函数阶段，生成静态根节点的渲染函数
- 从 AST 生成运行渲染函数，即大家说的 render，其实还有一个，就是 staticRenderFns 数组，里面存放了所有的静态节点的渲染函数

### 详细说一下渲染函数的生成过程

大家一说到渲染函数，基本上说的就是 render 函数，其实编译器生成的渲染有两类：
- 第一类就是一个 render 函数，负责生成动态节点的 vnode
- 第二类是放在一个叫 staticRenderFns 数组中的静态渲染函数，这些函数负责生成静态节点的 vnode
渲染函数生成的过程，其实就是在遍历 AST 节点，通过递归的方式，处理每个节点，最后生成形如：`_c(tag, attr, children, normalizationType)` 的结果。tag 是标签名，attr 是属性对象，children 是子节点组成的数组，其中每个元素的格式都是 `_c(tag, attr, children, normalizationTYpe)` 的形式，normalization 表示节点的规范化类型，是一个数字 0、1、2，不重要。

在处理 AST 节点过程中需要大家重点关注也是面试中常见的问题有：
- 静态节点是怎么处理的（静态节点的处理分为两步）？
    - 将生成静态节点 vnode 函数放到 staticRenderFns 数组中
    - 返回一个 `_m(idx)` 的可执行函数，意思是执行 staticRenderFns 数组中下标为 idx 的函数，生成静态节点的 vnode
- v-once、v-if、v-for、组件 等都是怎么处理的？
    - 单纯的 v-once 节点处理方式和静态节点一致
    - v-if 节点的处理结果是一个三元表达式
    - v-for 节点的处理结果是可执行的 `_l` 函数，该函数负责生成 v-for 节点的 vnode
    - 组件的处理结果和普通元素一样，得到的是形如 `_c(compName)` 的可执行代码，生成组件的 vnode

### 碎碎念

到这里，Vue 编译器 的源码解读就结束了。相信大家在阅读的过程中不免会产生云里雾里的感觉。这个没什么，编译器这块儿确实是比较复杂，可以说是整个框架最难理解也是代码量最大的一部分了。一定要静下心来多读几遍，遇到无法理解的地方，一定要勤动手，通过示例代码加断点调试的方式帮助自己理解。

当你读完几遍以后，这时候情况可能就会好一些，但是有些地方可能还会有些晕，这没事，正常。毕竟这是一个框架的编译器，要处理的东西太多太多了，你只需要理解其核心思想（模版解析、静态标记、代码生成）就可以了。后面会有 手写 Vue 系列，编译器这部分会有一个简版的实现，帮助加深对这部分知识的理解。

编译器读完以后，会发现有个不明白的地方：编译器最后生成的代码都是经过 with 包裹的，比如:

```html
<div id="app">
  <div v-for="item in arr" :key="item">{{ item }}</div>
</div>
```

经过编译后生成：

```javascript
with (this) {
  return _c(
    'div',
    {
      attrs:
      {
        "id": "app"
      }
    },
    _l(
      (arr),
      function (item) {
        return _c(
          'div',
          {
            key: item
          },
          [_v(_s(item))]
        )
      }
    ),
    0
  )
}
```

都知道，with 语句可以扩展作用域链，所以生成的代码中的 `_c`、`_l`、`_v`、`_s` 都是 this 上一些方法，也就是说在运行时执行这些方法可以生成各个节点的 vnode。

所以联系前面的知识，响应式数据更新的整个执行过程就是：
- 响应式拦截到数据的更新
- dep 通知 watcher 进行异步更新
- watcher 更新时执行组件更新函数 updateComponent
- 首先执行 vm._render 生成组件的 vnode，这时就会执行编译器生成的函数

问题：
- 渲染函数中的 _c、_l、、_v、_s 等方法是什么？
- 它们是如何生成 vnode 的？

下一篇文章 [Vue 源码解读（11）—— render helper]() 将会带来这部分知识的详细解读，也是面试经常被问题的：比如：v-for 的原理是什么？



# （11）render helper

[阅读原文](https://juejin.cn/post/6963048982079602696)

### 一个组件是如何变成 VNode？

- 组件实例初始化，最后执行 $mount 进入挂载阶段
- 如果是只包含运行时的 vue.js，只直接进入挂载阶段，因为这时候的组件已经变成了渲染函数，编译过程通过模块打包器 + vue-loader + vue-template-compiler 完成的
- 如果没有使用预编译，则必须使用全量的 vue.js
- 挂载时如果发现组件配置项上没有 render 选项，则进入编译阶段
- 将模版字符串编译成 AST 语法树，其实就是一个普通的 JS 对象
- 然后优化 AST，遍历 AST 对象，标记每一个节点是否为静态静态；然后再进一步标记出静态根节点，在组件后续更新时会跳过这些静态节点的更新，以提高性能
- 接下来从 AST 生成渲染函数，生成的渲染函数有两部分组成：
    - 负责生成动态节点 VNode 的 render 函数
    - 还有一个 staticRenderFns 数组，里面每一个元素都是一个生成静态节点 VNode 的函数，这些函数会作为 render 函数的组成部分，负责生成静态节点的 VNode
- 接下来将渲染函数放到组件的配置对象上，进入挂载阶段，即执行 mountComponent 方法
- 最终负责渲染组件和更新组件的是一个叫 updateComponent 方法，该方法每次执行前首先需要执行 `vm._render` 函数，该函数负责执行编译器生成的 render，得到组件的 VNode
- 将一个组件生成 VNode 的具体工作是由 render 函数中的 `_c`、`_o`、`_l`、`_m` 等方法完成的，这些方法都被挂载到 Vue 实例上面，负责在运行时生成组件 VNode

> 提示：到这里首先要明白什么是 VNode，一句话描述就是 —— 组件模版的 JS 对象表现形式，它就是一个普通的 JS 对象，详细描述了组件中各节点的信息

> 下面说的有点多，其实记住一句就可以了，设置组件配置信息，然后通过 new VNode(组件信息) 生成组件的 VNode

- `_c`，负责生成组件或 HTML 元素的 VNode，`_c` 是所有 render helper 方法中最复杂，也是最核心的一个方法，其它的 `_xx` 都是它的组成部分
    - 接收标签、属性 JSON 字符串、子节点数组、节点规范化类型作为参数
    - 如果标签是平台保留标签或者一个未知的元素，则直接 new VNode(标签信息) 得到 VNode
    - 如果标签是一个组件，则执行 createComponent 方法生成 VNode
        - 函数式组件执行自己的 render 函数生成 VNode
        - 普通组件则实例化一个 VNode，并且在在 data.hook 对象上设置 4 个方法，在组件的 patch 阶段会被调用，从而进入子组件的实例化、挂载阶段，然后进行编译生成渲染函数，直至完成渲染
        - 当然生成 VNode 之前会进行一些配置处理比如：
            - 子组件选项合并，合并全局配置项到组件配置项上
            - 处理自定义组件的 v-model
            - 处理组件的 props，提取组件的 props 数据，以组件的 props 配置中的属性为 key，父组件中对应的数据为 value 生成一个 propsData 对象；当组件更新时生成新的 VNode，又会进行这一步，这就是 props 响应式的原理
            - 处理其它数据，比如监听器
            - 安装内置的 init、prepatch、insert、destroy 钩子到 data.hooks 对象上，组件 patch 阶段会用到这些钩子方法
- `_l`，运行时渲染 v-for 列表的帮助函数，循环遍历 val 值，依次为每一项执行 render 方法生成 VNode，最终返回一个 VNode 数组
- `_m`，负责生成静态节点的 VNode，即执行 staticRenderFns 数组中指定下标的函数

**简单总结 render helper 的作用**就是：在 Vue 实例上挂载一些运行时的工具方法，这些方法用在编译器生成的渲染函数中，用于生成组件的 VNode。

好了，到这里，一个组件从初始化开始到最终怎么变成 VNode 就讲完了，最后剩下的就是 patch 阶段了，下一篇文章将讲述如何将组件的 VNode 渲染到页面上。



# （12）patch

[阅读原文](https://juejin.cn/post/6964141635856760868)

### 你能说一说 Vue 的 patch 算法吗？

Vue 的 patch 算法有三个作用：负责首次渲染和后续更新或者销毁组件
- 如果老的 VNode 是真实元素，则表示首次渲染，创建整棵 DOM 树，并插入 body，然后移除老的模版节点
- 如果老的 VNode 不是真实元素，并且新的 VNode 也存在，则表示更新阶段，执行 patchVnode
    - 首先是全量更新所有的属性
    - 如果新老 VNode 都有孩子，则递归执行 updateChildren，进行 diff 过程
        - 针对前端操作 DOM 节点的特点进行如下优化：
        - 同层比较（降低时间复杂度）深度优先（递归）
        - 而且前端很少有完全打乱节点顺序的情况，所以做了四种假设，假设新老 VNode 的开头结尾存在相同节点，一旦命中假设，就避免了一次循环，降低了 diff 的时间复杂度，提高执行效率。如果不幸没有命中假设，则执行遍历，从老的 VNode 中找到新的 VNode 的开始节点
        - 找到相同节点，则执行 patchVnode，然后将老节点移动到正确的位置
        - 如果老的 VNode 先于新的 VNode 遍历结束，则剩余的新的 VNode 执行新增节点操作
        - 如果新的 VNode 先于老的 VNode 遍历结束，则剩余的老的 VNode 执行删除操纵，移除这些老节点
    - 如果新的 VNode 有孩子，老的 VNode 没孩子，则新增这些新孩子节点
    - 如果老的 VNode 有孩子，新的 VNode 没孩子，则删除这些老孩子节点
    - 剩下一种就是更新文本节点
- 如果新的 VNode 不存在，老的 VNode 存在，则调用 destroy，销毁老节点

### 碎碎念

好了，到这里，Vue 源码解读系列就结束了，如果你认认真真的读完整个系列的文章，相信你对 Vue 源码已经相当熟悉了，不论是从宏观层面理解，还是某些细节方面的详解，应该都没问题。即使有些细节现在不清楚，但是当遇到问题时，你也能一眼看出来该去源码的什么位置去找答案。

到这里你可以试着在自己的脑海中复述一下 Vue 的整个执行流程。过程很重要，但 总结 才是最后的升华时刻。如果在哪个环节卡住了，可再回去读相应的部分就可以了。

还记得系列的第一篇文章中提到的目标吗？相信阅读几遍下来，你一定可以在自己的简历中写到：**精通 Vue 框架的源码原理**。

接下来会开始 Vue 的手写系列。


> 作者：李永宁
>
> 链接：https://juejin.cn/user/1028798616461326
>
> 来源：掘金
>
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


# 作者介绍
- [个人博客](https://leedebug.github.io/)
- [Github](https://github.com/LeeDebug)
- [掘金](https://juejin.cn/user/2189882894323975/posts)
- [语雀](https://www.yuque.com/LeeDebug)
- [简书](https://www.jianshu.com/u/fc47eb26e53c)
- [开源中国](https://my.oschina.net/LeeDebug)
- [博客园](https://www.cnblogs.com/LeeDebug/)
- 微信二维码:
<table>
  <tr>
    <td>
      <img src="https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210527113237.png" width="200px" title="微信" alt="WeChat:lcc961150665">
    </td>
  </tr>
</table>


# 祝君无Bug~