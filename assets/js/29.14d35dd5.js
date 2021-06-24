(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{379:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("《JS权威指南》第四章第二部分，涉及运算符（优先级、结合性等）、算术表达式（基本运算符加减乘除等，位运算符）、关系表达式（"),a("code",[s._v("==")]),s._v("和"),a("code",[s._v("===")]),s._v("，比较运算符，in和instanceof）")]),s._v(" "),a("h2",{attrs:{id:"运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[s._v("#")]),s._v(" 运算符")]),s._v(" "),a("p",[s._v("大多数运算符是由标点符号表示的："),a("code",[s._v("+")]),s._v("和"),a("code",[s._v("=")]),s._v("等")]),s._v(" "),a("p",[s._v("另外一些是由关键字表示的："),a("code",[s._v("delete")]),s._v("和"),a("code",[s._v("instanceof")]),s._v("等")]),s._v(" "),a("p",[s._v("下表是运算符优先级，前面的优先级高于后面的优先级，剩下一些参数详情见书本P65")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20201006223952.png",alt:"image-20201006223952172"}})]),s._v(" "),a("h3",{attrs:{id:"操作数个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作数个数"}},[s._v("#")]),s._v(" 操作数个数")]),s._v(" "),a("p",[s._v("大多数运算符是二元运算符，也支持一些一元运算符（"),a("code",[s._v("-")]),s._v("等），也支持三元运算符（"),a("code",[s._v("?:")]),s._v("）")]),s._v(" "),a("h3",{attrs:{id:"操作数类型和结果类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作数类型和结果类型"}},[s._v("#")]),s._v(" 操作数类型和结果类型")]),s._v(" "),a("p",[s._v("一些运算符可以作用于任何数据类型，但仍希望它们的操作数是指定类型的数据（可详见上表）。")]),s._v(" "),a("p",[s._v("JS运算符通常会根据需要对操作数进行类型转换。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("举例来说")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("乘法运算符"),a("code",[s._v("*")]),s._v("会将操作数转换为数字。")])]),s._v(" "),a("li",[a("p",[s._v("那些希望操作数是布尔类型的操作符，它们的操作数可以是任意类型（因为JS中所有值不是真值就是假值）")])])])]),s._v(" "),a("p",[s._v("有一些操作符对操作数类型有着不同程度的依赖。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("举例来说")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("+")]),s._v("可以对数字进行加法，也可以对字符串作连接")]),s._v(" "),a("li",[a("code",[s._v("<")]),s._v("比较运算符可以对数字进行大小值的比较，也可以比较字符在字母表中的次序先后")])])]),s._v(" "),a("h3",{attrs:{id:"左值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#左值"}},[s._v("#")]),s._v(" 左值")]),s._v(" "),a("blockquote",[a("p",[s._v("左值：指的是表达式只能出现在赋值运算符的左侧")])]),s._v(" "),a("p",[s._v("在JS中，变量、对象属性和数组元素均是左值。")]),s._v(" "),a("p",[s._v("ECMA规范允许内置函数返回一个左值，但自定义的函数则不能返回左值。")]),s._v(" "),a("h3",{attrs:{id:"运算符的副作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符的副作用"}},[s._v("#")]),s._v(" 运算符的副作用")]),s._v(" "),a("p",[s._v("有一些表达式具有副作用，前后的表达式运算会互相影响。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("举例来说")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("++")]),s._v("和"),a("code",[s._v("--")]),s._v("包含隐式的赋值")]),s._v(" "),a("li",[s._v("delete运算符：删除一个属性就像（但不完全一样）给这个属性赋值undefined")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20201006225329.png",alt:"image-20201006225329619"}})]),s._v(" "),a("p",[s._v("其他JS运算符都没有副作用，如果任何用在"),a("strong",[s._v("函数调用表达式和对象创建表达式")]),s._v("中的运算符带有副作用，函数调用表达式和对象创建表达式将会带有副作用。（可以理解成每次调用或者创建时，副作用都会随着表达式的使用而发挥作用）")]),s._v(" "),a("h3",{attrs:{id:"运算符优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符优先级"}},[s._v("#")]),s._v(" 运算符优先级")]),s._v(" "),a("p",[s._v("详情可见上表。")]),s._v(" "),a("ul",[a("li",[s._v("优先级高的运算符的执行总是先于优先级低的运算符")]),s._v(" "),a("li",[s._v("运算符的优先级可以通过显式使用圆括号来重写")]),s._v(" "),a("li",[s._v("赋值运算的优先级非常低，通常总是最后执行的")])]),s._v(" "),a("h3",{attrs:{id:"运算符的结合性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符的结合性"}},[s._v("#")]),s._v(" 运算符的结合性")]),s._v(" "),a("blockquote",[a("p",[s._v("从左至右结合：运算的执行是按照从左到右的顺序进行的")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y\nw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" z\nq "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("g\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\n\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nq "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("一元操作符、赋值和三元条件运算符都具有从右至左的结合性。")])]),s._v(" "),a("h3",{attrs:{id:"运算顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算顺序"}},[s._v("#")]),s._v(" 运算顺序")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("运算符优先级和结合性规定了它们在复杂表达式中的运算顺序。")])]),s._v(" "),a("li",[a("p",[s._v("JS总是严格按照从左至右的顺序来计算表达式。")])]),s._v(" "),a("li",[a("p",[s._v("只有在任何一个表达式具有副作用而影响到其他表达式的时候，其求职顺序才会看上去有所不同。")])])]),s._v(" "),a("p",[s._v("一个比较重要的例子：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20201006230132.png",alt:"image-20201006230132784"}})]),s._v(" "),a("h2",{attrs:{id:"算术表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算术表达式"}},[s._v("#")]),s._v(" 算术表达式")]),s._v(" "),a("h3",{attrs:{id:"基本运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本运算符"}},[s._v("#")]),s._v(" 基本运算符")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("*、/、%、-")]),s._v("在必要的时候"),a("strong",[s._v("将操作数转为数字")]),s._v("。")])]),s._v(" "),a("p",[s._v("所有那些无法转换为数字的都转换成NaN，算数运算结果也是NaN")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在JS中，所有数字都是浮点型的，默认得到的除法运算结果也是浮点型。")]),s._v(" "),a("ul",[a("li",[s._v("除数为0的运算结果为正无穷大或负无穷大")]),s._v(" "),a("li",[s._v("0/0结果是NaN")]),s._v(" "),a("li",[s._v("所有这些运算均不会报错")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("%")]),s._v("结果的符号和第一个操作数（被除数）的符号保持一致。")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-5 % 2  // -1\n5 % -2  // 1\n5 % 2   // 1\n-5 % -2 // -1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"运算符-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符-2"}},[s._v("#")]),s._v(' "+"运算符')]),s._v(" "),a("p",[s._v("加号的转换规则优先考虑字符串连接。")]),s._v(" "),a("p",[s._v("如果两个操作数都不是类字符串（字符串或者转换为字符串的对象）的，那么都将进行算术加法运算")]),s._v(" "),a("p",[s._v("运算规则如下：")]),s._v(" "),a("ul",[a("li",[s._v("如果其中一个操作数是对象，对象会遵循对象到原始值的转换规则转换为原始值\n"),a("ul",[a("li",[s._v("日期通过toString()，其他对象通过valueOf()\n"),a("ul",[a("li",[s._v("如果valueOf方法不返回原始值，其他对象也采用toString()")])])])])]),s._v(" "),a("li",[s._v("对象转换为原始值后，如果其中一个操作数是字符串，另一个操作数也转换为字符串，然后进行字符串连接")]),s._v(" "),a("li",[s._v("否则，两个操作数都将转换为数字（或者NaN），然后进行加法操作")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20201006232153.png",alt:"image-20201006232153541"}})]),s._v(" "),a("blockquote",[a("p",[s._v("这里"),a("code",[s._v("1+{} === 1[object Object]")]),s._v("的原因是{}.valueOf() = {}并不是原始值，于是调用的是toString()函数")])]),s._v(" "),a("ul",[a("li",[s._v("当加号运算符和字符串和数字一起使用时，需要考虑加法的结合性（从左到右）对运算顺序的影响。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20201006232247.png",alt:"image-20201006232247282"}})]),s._v(" "),a("h3",{attrs:{id:"一元算术运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一元算术运算符"}},[s._v("#")]),s._v(" 一元算术运算符")]),s._v(" "),a("p",[s._v("在JS中，一元运算符作用域一个单独的操作数，并产生一个新值，具有很高的优先级，而且都是"),a("strong",[s._v("右结合")]),s._v("。")]),s._v(" "),a("p",[s._v("必要时，他们会将操作数转换为数字。")]),s._v(" "),a("h4",{attrs:{id:"一元加法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一元加法"}},[s._v("#")]),s._v(" 一元加法+")]),s._v(" "),a("p",[s._v("把操作数转换为数字或者NaN,并返回这个转换后的数字")]),s._v(" "),a("h4",{attrs:{id:"一元减法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一元减法"}},[s._v("#")]),s._v(" 一元减法-")]),s._v(" "),a("p",[s._v("把操作数转换为数字，并改变运算结果的符号")]),s._v(" "),a("h4",{attrs:{id:"递增"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递增"}},[s._v("#")]),s._v(" 递增++")]),s._v(" "),a("p",[s._v("对操作数进行增量加一操作，操作数是一个左值（变量、数组元素或对象属性）。")]),s._v(" "),a("p",[s._v("运算符将操作数转换为数字，然后给数字加一，并将加一后的数值重新赋值。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("++x")]),s._v("称为前增量运算符，返回计算后的值")]),s._v(" "),a("li",[s._v("x++称为后增量，返回未做增量计算的值")])]),s._v(" "),a("p",[s._v("需要注意的是“++”从不进行字符串连接操作，它总是会将操作数转换为数字并增一。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("++x与x=x+1的区别")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => 2")]),s._v("\nx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => 11")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("h4",{attrs:{id:"递减"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递减"}},[s._v("#")]),s._v(" 递减--")]),s._v(" "),a("p",[s._v("与递增类似，操作数是一个左值，把操作数转换为数字，然后-1，然后重新赋值。")]),s._v(" "),a("h3",{attrs:{id:"位运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位运算符"}},[s._v("#")]),s._v(" 位运算符")]),s._v(" "),a("p",[s._v("位运算符可以对由数字表示的二进制数据进行更低层级的按位运算。")]),s._v(" "),a("p",[s._v("位运算符要求它的操作数是整数，这些整数表示为32位整数而不是64位浮点型。")]),s._v(" "),a("ul",[a("li",[s._v("位运算符首先将操作数转换为数字（必要时），并将数字强制表示为32位整数、\n"),a("ul",[a("li",[s._v("这会忽略原格式中的小数部分和任何超过32位的二进制位。")])])])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("移位运算符要求右操作数在0~31之间，在其操作数转换为无符号32位整数后，"),a("u",[s._v("右操作数将舍弃第5位之后的二进制位（相当于超过31的数字将会进行mod32的操作）")]),s._v("，以便生成一个位数正确的数字（0~31）")])]),s._v(" "),a("li",[a("p",[s._v("位运算符会将NaN、Infinity和-Infinity都转换为0")])])]),s._v(" "),a("p",[s._v("感谢stackoverflow的大佬解答了问题（原谅我真的没看懂书上的“它们”是什么意思，以及在中文各问答平台中搜索无果，我太笨了555）：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20201012172730.png",alt:"image-20201012172730715"}})])]),s._v(" "),a("h4",{attrs:{id:"按位与"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按位与"}},[s._v("#")]),s._v(" 按位与&")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1&1 = 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"按位或"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按位或"}},[s._v("#")]),s._v(" 按位或|")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1 | 0 = 1\n1 | 1 = 1\n1 | 1 = 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"按位异或"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按位异或"}},[s._v("#")]),s._v(" 按位异或^")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1 ^ 0 = 1\n0 ^ 1 = 1\n0 ^ 0 = 0\n1 ^ 1 = 0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"按位非"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按位非"}},[s._v("#")]),s._v(" 按位非~")]),s._v(" "),a("p",[s._v("将操作数的所有为取反")]),s._v(" "),a("p",[a("u",[s._v("根据JS中带符号的整数的表示方法，对一个值使用~运算符相当于改变它的符号并减一。")])]),s._v(" "),a("h4",{attrs:{id:"左移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#左移"}},[s._v("#")]),s._v(" 左移<<")]),s._v(" "),a("p",[s._v("将操作数所有的二进制位数进行左移，移动的位数是0~31之间的一个整数（超过将进行mod32运算）")]),s._v(" "),a("p",[a("u",[s._v("在数字没有溢出的前提下，对于正数和负数，左移一位都相当于乘以2的1次方，左移n位就相当于乘以2的n次方。")])]),s._v(" "),a("h4",{attrs:{id:"带符号右移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带符号右移"}},[s._v("#")]),s._v(" 带符号右移>>")]),s._v(" "),a("p",[s._v("将一个操作数的所有位进行右移操作，移动的位数是0~31之间的一个整数（超过将进行mod32运算）")]),s._v(" "),a("p",[s._v("右边溢出的位将忽略，填补在左边的位由原操作数的符号决定，正数补零，负数补1，以便保持结果的符号与原操作数一直。")]),s._v(" "),a("p",[a("u",[s._v("将一个值右移1位，相当于用它除以2（忽略余数），以此类推")])]),s._v(" "),a("h4",{attrs:{id:"无符号右移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无符号右移"}},[s._v("#")]),s._v(" 无符号右移>>>")]),s._v(" "),a("p",[s._v("与>>一样，只是左边的高位总是填补0，与原来的操作数符号无关。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("运用移位符号进行整数转换")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" signed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" unsigned "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" signed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// >>> 0 转换为无符号数")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("unsigned"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4294967295")]),s._v("\nsigned "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" unsigned "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// << 0 转换为有符号数")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("signed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("h4",{attrs:{id:"溢出相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#溢出相关"}},[s._v("#")]),s._v(" 溢出相关")]),s._v(" "),a("p",[s._v("在 JavaScript 中，所有整数字变量默认都是有符号整数。")]),s._v(" "),a("p",[s._v("有符号整数使用 31 位表示整数的数值，用第 32 位表示整数的符号，0 表示正数，1 表示负数。\n数值范围从 - 2^31 ~ 2^31 - 1 即 "),a("strong",[s._v("- 2147483648 到 2147483647")]),s._v("。")]),s._v(" "),a("p",[s._v("对于 Javascript 移位操作来说，默认的左移 << 和右移 >> 操作都是"),a("strong",[s._v("有符号数移位操作")]),s._v("，于是有了二进制表示第 31 位为 1 的整数左移后结果成了负数、二进制表示第 32 位为 1 的整数右移后结果成了负数的情况")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2147483647")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -2 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4294967294")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("建议，除非必要，避免使用位移运算符。你能想到的简单优化，编译器也很容易做到。")]),s._v(" "),a("h2",{attrs:{id:"关系表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系表达式"}},[s._v("#")]),s._v(" 关系表达式")]),s._v(" "),a("h3",{attrs:{id:"相等和不等运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相等和不等运算符"}},[s._v("#")]),s._v(" 相等和不等运算符")]),s._v(" "),a("p",[s._v("“"),a("code",[s._v("==")]),s._v("”和“"),a("code",[s._v("===")]),s._v("”运算符允许任意类型的操作符。")]),s._v(" "),a("p",[s._v("“"),a("code",[s._v("!=")]),s._v('"和"'),a("code",[s._v("!==")]),s._v('"检测规则是“'),a("code",[s._v("==")]),s._v("”和“"),a("code",[s._v("===")]),s._v("”运算符的求反。")]),s._v(" "),a("p",[s._v("如果是对象的比较，之前已有详细说明，JS对象的比较是引用的比较，而不是值的比较，对象和其本身是相等的，但和其他任何对象都不相等。")]),s._v(" "),a("p",[s._v("这块参照ECMA标准即可："),a("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.4",target:"_blank",rel:"noopener noreferrer"}},[s._v("ECMAScript® Language Specification"),a("OutboundLink")],1)]),s._v(" "),a("h4",{attrs:{id:"严格相等运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严格相等运算符"}},[s._v("#")]),s._v(" 严格相等运算符===")]),s._v(" "),a("p",[s._v("首先计算其操作数的值，然后比较这两个值，比较过程没有任何类型转换。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20201012152041.png",alt:"image-20201012152034067"}})]),s._v(" "),a("h4",{attrs:{id:"相等运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相等运算符"}},[s._v("#")]),s._v(" 相等运算符==")]),s._v(" "),a("p",[s._v("如果两个操作数不是同一类型，那么相等运算符会尝试进行一些类型转换，然后进行比较：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20201012152328.png",alt:"image-20201012152327957"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20201012152338.png",alt:"image-20201012152337881"}})]),s._v(" "),a("p",[s._v("对象转换比较那里我们之前已经提到过了。")]),s._v(" "),a("h3",{attrs:{id:"比较运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符"}},[s._v("#")]),s._v(" 比较运算符")]),s._v(" "),a("p",[s._v("比较运算符用来检测两个操作数的大小关系（数值大小或者字母表的顺序）")]),s._v(" "),a("p",[s._v("有如下：< > <= >=")]),s._v(" "),a("p",[s._v("比较操作符的操作数可能是任意类型，然而只有数字和字符串才能真正执行比较操作，因此那些不是数字和字符串的操作数都将进行类型转换，类型转换规则如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20201012162116.png",alt:"image-20201012162116832"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20201012162107.png",alt:"image-20201012162107189"}})]),s._v(" "),a("p",[a("u",[s._v("字符串比较是区分大小写的，所有大写ASCII字母都“小于”小写ASCII字母。")])]),s._v(" "),a("blockquote",[a("p",[s._v("参照"),a("code",[s._v("String.localCompare()")]),s._v("方法更加健壮可靠，这个方法参照本地语言的字母表定义的字符次序。")]),s._v(" "),a("p",[s._v("对于那些不区分字母大小写的比较，需要先通过"),a("code",[s._v("String.toLowerCase()")]),s._v("和"),a("code",[s._v("String.toUpperCase()")]),s._v("做大小写转换。")])]),s._v(" "),a("p",[s._v("前面我们知道，"),a("u",[s._v("加法运算符更偏爱字符串，而比较运算符则更偏爱数字")]),s._v("，只有在两个操作数都是字符串的时候，才会进行字符串的比较：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20201012163841.png",alt:"image-20201012163841725"}})]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("关于<=和>=需要注意的")]),s._v(" "),a("p",[s._v("<=和>=在判断相等时，并不会依赖于"),a("code",[s._v("==")]),s._v("和"),a("code",[s._v("===")]),s._v("的比较规则。")]),s._v(" "),a("p",[s._v("<=只是简单的不大于（即>结果取反），<=也只是简单的不小于。")]),s._v(" "),a("p",[a("strong",[s._v("只有一个例外，当其中一个操作数（或者转换后是）NaN时，所有四个比较运算符均返回false")])])]),s._v(" "),a("h3",{attrs:{id:"in运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in运算符"}},[s._v("#")]),s._v(" in运算符")]),s._v(" "),a("p",[s._v("in运算符希望它的左操作数是"),a("u",[s._v("一个字符串或可以转换为字符串")]),s._v("，希望它的右操作数是一个"),a("u",[s._v("对象")]),s._v("。")]),s._v(" "),a("p",[s._v("如果右侧对象拥有一个名为左操作数值的属性名，那么表达式返回true。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" test "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("222")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" test "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// VM874:1 Uncaught ReferenceError: x is not defined")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\ntoString "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"toString"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true 对象继承了toString()方法")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true 数字会被转换为字符串")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h3",{attrs:{id:"instanceof运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instanceof运算符"}},[s._v("#")]),s._v(" instanceof运算符")]),s._v(" "),a("p",[s._v("instanceof运算符希望"),a("u",[s._v("左操作数是一个对象，右操作数标识对象的类")]),s._v("。")]),s._v(" "),a("p",[s._v("如果左侧对象是右侧类的实例，则表达式返回true，否则返回false。")]),s._v(" "),a("p",[s._v("由于JS中对象的类是通过初始化它们的构造函数来定义的，所以也可以说"),a("u",[s._v("instanceof的右操作数应当是一个函数。")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("特殊处理")]),s._v(" "),a("p",[s._v("如果左操作数不是对象的话，instanceof返回false，如果右操作数不是函数，则会抛出一个类型错误异常。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://giriawsh-bucket.oss-cn-beijing.aliyuncs.com/img/20201012165551.png",alt:"image-20201012165551517"}})]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("所有的对象都是Object的实例。")])]),s._v(" "),a("p",[a("u",[s._v("当通过instanceof判断一个对象是否是一个类的实例的时候，这个判断也会包含对“父类”的检测。")])]),s._v(" "),a("p",[s._v("instanceof的工作原理将会涉及“原型链”，JS的继承机制等。后面将会进行详细描述。")]),s._v(" "),a("p",[s._v("为了计算表达式"),a("code",[s._v("o instanceof f")]),s._v("， JS会首先计算"),a("code",[s._v("f.prototype")]),s._v("，然后在原型链中查找o。如果找到，那么o是f（或者f的父类）的一个实例，表达式返回true，如果f.prototype不在o的原型链中，那么o就不是f的实例，instanceof返回false。（？翻译好绕，我真的没看懂……等第六章以后再来回顾吧）")])])}),[],!1,null,null,null);t.default=e.exports}}]);