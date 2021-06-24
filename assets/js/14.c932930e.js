(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{364:function(n,s,a){"use strict";a.r(s);var r=a(42),t=Object(r.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"jz6-旋转数组的最小数字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jz6-旋转数组的最小数字"}},[n._v("#")]),n._v(" JZ6 旋转数组的最小数字")]),n._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[n._v("#")]),n._v(" 题目")]),n._v(" "),a("p",[n._v("把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。\n输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。\n例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。\nNOTE：给出的所有元素都大于0，若数组大小为0，请返回0。")]),n._v(" "),a("h2",{attrs:{id:"解法一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法一"}},[n._v("#")]),n._v(" 解法一")]),n._v(" "),a("p",[n._v("恕我直言，好像没什么意思啊，第一直觉，O(n)扫一遍")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("while(line=readline()){\n    //将json字符串转换为JavaScript值或对象\n    let arr = JSON.parse(line);\n    print(minNumberInRotateArray(arr));\n}\nfunction minNumberInRotateArray(rotateArray)\n{\n    // write code here\n    var len = rotateArray.length;\n    if(len == 0)\n        return 0;\n    var min = rotateArray[0];\n    for(var i = 0; i < len; i++)\n    {\n        if(min > rotateArray[i]){\n            min = rotateArray[i];\n        }\n    }\n    return min;\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/22/17376ccec4afc05d?w=160&h=76&f=png&s=2029",alt:"效率"}}),n._v("\njs搜索有更简单的办法：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function minNumberInRotateArray(rotateArray)\n{\n    return Math.min(...rotateArray)\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("h2",{attrs:{id:"解法二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法二"}},[n._v("#")]),n._v(" 解法二")]),n._v(" "),a("p",[n._v("仔细观察下题目，会发现有着某种设定，输入的总是经过一次旋转的数组，也就是说会形成从小到大然后一个跌越再从小到大这样的规律。而我们要找的便是中间那个跌越点，就是整个数组的最小值。")]),n._v(" "),a("p",[n._v("也就是说实际上最小的元素就是两个子数组的分界线。")]),n._v(" "),a("p",[n._v("既然两个子数组是有序的，可以用"),a("strong",[n._v("二分查找")]),n._v("来找。")]),n._v(" "),a("ol",[a("li",[n._v("我们用两个指针left,right分别指向数组的第一个元素和最后一个元素。按照题目的旋转的规则，第一个元素应该是大于最后一个元素的")]),n._v(" "),a("li",[n._v("找到数组的中间元素。")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("(1)array[mid] > array[high]:\n出现这种情况的array类似[3,4,5,6,0,1,2]，此时最小数字一定在mid的右边。\nlow = mid + 1\n(2)array[mid] == array[high]:\n出现这种情况的array类似 [1,0,1,1,1] 或者[1,1,1,0,1]，此时最小数字不好判断在mid左边\n还是右边,这时只好一个一个试 ，把范围缩小一步\nhigh = high - 1\n(3)array[mid] < array[high]:\n出现这种情况的array类似[2,2,3,4,5,6,6],此时最小数字一定就是array[mid]或者在mid的左\n边。因为右边必然都是递增的。\nhigh = mid\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br")])]),a("p",[n._v("代码如下：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("while(line=readline()){\n    //将json字符串转换为JavaScript值或对象\n    let arr = JSON.parse(line);\n    print(minNumberInRotateArray(arr));\n}\nfunction minNumberInRotateArray(rotateArray)\n{\n    // write code here\n    var len = rotateArray.length;\n    if(len == 0)    return 0;\n    var left = 0;\n    var right = len - 1;\n    while(left < right)\n    {\n        var mid = parseInt((left + right) / 2);\n        if(rotateArray[mid] > rotateArray[right])\n        {\n            left = mid + 1;\n        }else if(rotateArray[mid] < rotateArray[right])\n        {\n            right = mid;\n        }else{\n            right--;\n        }\n    }\n    return rotateArray[left];\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/22/17376dde81ca17b9?w=181&h=71&f=png&s=2064",alt:"效率"}})]),n._v(" "),a("h1",{attrs:{id:"jz7-斐波那契数列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jz7-斐波那契数列"}},[n._v("#")]),n._v(" JZ7 斐波那契数列")]),n._v(" "),a("h2",{attrs:{id:"题目-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目-2"}},[n._v("#")]),n._v(" 题目")]),n._v(" "),a("p",[n._v("大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。\nn<=39")]),n._v(" "),a("h2",{attrs:{id:"解法一-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法一-2"}},[n._v("#")]),n._v(" 解法一")]),n._v(" "),a("p",[n._v("一个比较丑陋的解法，直接依照公式。\nF(1)=1，F(2)=1, F(n)=F(n - 1)+F(n - 2)")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function Fibonacci(n)\n{\n    // write code here\n    if(n == 0) return 0;\n    if(n == 1) return 1;\n    if(n == 2) return 1;\n    var ret = 0;\n    ret = Fibonacci(n-1) + Fibonacci(n-2);\n    return ret;\n}\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/22/17376e6c1323cae3?w=190&h=89&f=png&s=2250",alt:"可以看到效果差的出奇"}}),n._v("\n可以看到效果差的出奇。")]),n._v(" "),a("h2",{attrs:{id:"解法二-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法二-2"}},[n._v("#")]),n._v(" 解法二")]),n._v(" "),a("p",[n._v("一种动态规划方法.详细看注释")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function Fibonacci(n)\n{\n    // write code here\n    if(n == 0) return 0;\n    if(n == 1) return 1;\n    if(n == 2) return 1;\n    let a = 0, b = 1;\n    while(n--)\n    {\n        b += a;//形成新的后值\n        a = b - a;//相当于原来b的值\n    }\n    return a;\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/22/17376ee57cbadb45?w=168&h=76&f=png&s=1993",alt:"xiaolv"}}),n._v("\n这成绩进排行榜了吧可以。")]),n._v(" "),a("p",[n._v("还有一种从榜上看到的写法：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function Fibonacci(n)\n{\n    // write code here\n    const arr=[0,1]\n    for(let i=2;i<=n;i++){\n        arr[i]=arr[i-1]+arr[i-2]\n    }\n    return arr[n]\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("h1",{attrs:{id:"jz8-跳台阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jz8-跳台阶"}},[n._v("#")]),n._v(" JZ8 跳台阶")]),n._v(" "),a("h2",{attrs:{id:"题目-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目-3"}},[n._v("#")]),n._v(" 题目")]),n._v(" "),a("p",[n._v("一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。")]),n._v(" "),a("h2",{attrs:{id:"解法一-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法一-3"}},[n._v("#")]),n._v(" 解法一")]),n._v(" "),a("p",[n._v("很典型的递归啦，一般都练到过吧伙伴们？说下思路，一次跳两级或者一级，那么我们就作为青蛙站在某个台阶上思考蛙生，我只有两种可能来到这里：1.从我下面一级跳上来的2.从我下面两级那里跳上来的。")]),n._v(" "),a("p",[n._v("得到这样的表达式：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("if(n == 1)  return 1;\nif(n == 2)  return 3;\n\nF(n) = F(n-1) + F(n-2);\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("p",[n._v("代码如下：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function jumpFloor(number)\n{\n    // write code here\n    if(number == 1)  return 1;\n    if(number == 2)  return 2;\n    let ret = 0;\n    ret = jumpFloor(number - 1) + jumpFloor(number - 2);\n    return ret;\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/22/17376f367b7dbbae?w=165&h=80&f=png&s=2189",alt:"xiaolv "}}),n._v("\n一般不进行优化的递归也就这种效率了。")]),n._v(" "),a("h2",{attrs:{id:"解法二-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法二-3"}},[n._v("#")]),n._v(" 解法二")]),n._v(" "),a("p",[n._v("同样可以用动态规划进行优化。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function jumpFloor(number)\n{\n    // write code here\n    if(number == 1)  return 1;\n    if(number == 2)  return 2;\n    let ret = 0;\n    let a = 1, b = 2, c = 0;//分别表示跳上一级、二级有几种方法 三级的还没算，每次移步都算下一步的值\n    while(number > 2)\n    {\n        c = a + b;\n        a = b;\n        b = c;\n        number--;\n    }\n    return c;\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/22/17376fcd3b7967d3?w=164&h=70&f=png&s=1953",alt:"xiaolv"}})]),n._v(" "),a("p",[n._v("榜上有一种写法：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function jumpFloor(number) {\n      let dp = []\n      dp[0] = 1\n      dp[1] = 2\n      for (let i = 2; i < number; i++) {\n        dp[i]=dp[i-1]+dp[i-2]\n      }\n      return dp[number-1]\n    }\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("h1",{attrs:{id:"jz9-变态跳台阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jz9-变态跳台阶"}},[n._v("#")]),n._v(" JZ9 变态跳台阶")]),n._v(" "),a("h2",{attrs:{id:"题目-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目-4"}},[n._v("#")]),n._v(" 题目")]),n._v(" "),a("p",[n._v("一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。")]),n._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[n._v("#")]),n._v(" 解法")]),n._v(" "),a("p",[n._v("哦豁，真的变态。但是其实很简单啦。")]),n._v(" "),a("p",[n._v("每个台阶可以看作一块木板，让青蛙跳上去，n个台阶就有n块木板，最后一块木板是青蛙到达的位子， 必须存在，其他 (n-1) 块木板可以任意选择是否存在（存在即是选择了踏上这块跳板），则每个木板有存在和不存在两种选择，(n-1) 块木板 就有 [2^(n-1)] 种跳法，可以直接得到结果。")]),n._v(" "),a("p",[n._v("所要求的序列为：0,1,2,4,8,16,……")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function jumpFloorII(number)\n{\n    // write code here\n    if(number == 1)    return 1;\n    return jumpFloorII(number-1)*2;\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/22/1737731ae8d21b0c?w=173&h=70&f=png&s=2031",alt:""}}),n._v("\n这才是真的算法题吧（头秃的那种）")]),n._v(" "),a("h1",{attrs:{id:"jz10-矩形覆盖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jz10-矩形覆盖"}},[n._v("#")]),n._v(" JZ10 矩形覆盖")]),n._v(" "),a("h2",{attrs:{id:"题目-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目-5"}},[n._v("#")]),n._v(" 题目")]),n._v(" "),a("p",[n._v("我们可以用2"),a("code",[n._v("*")]),n._v("1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2"),a("code",[n._v("*")]),n._v("1的小矩形无重叠地覆盖一个2"),a("code",[n._v("*")]),n._v("n的大矩形，总共有多少种方法？")]),n._v(" "),a("p",[n._v("比如n=3时，2*3的矩形块有3种覆盖方法：")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/22/173773333d9fb587?w=767&h=586&f=png&s=39258",alt:""}})]),n._v(" "),a("h1",{attrs:{id:"解法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法-2"}},[n._v("#")]),n._v(" 解法")]),n._v(" "),a("p",[n._v("这里主要是思路的问题，我一开始用没想明白，分奇偶解决，但是不知为啥一直溢出。后面重新分析了一下。")]),n._v(" "),a("p",[n._v("n = 1时 return 1；")]),n._v(" "),a("p",[n._v("n = 2时，只有||和=两种情况；")]),n._v(" "),a("p",[n._v("n = 3时，有上面三种情况；")]),n._v(" "),a("p",[n._v("n = 4时，有从n=3出发的变形情况：和=||和||||和|=|这样三种情况，所以只在n=3的基础上往后面添加了一个竖着的。")]),n._v(" "),a("p",[n._v("从n=2出发的变形情况||=，==，=||和||||（这两种重复了），所以只在n=2的基础上往后面添加了两个横着的情况。")]),n._v(" "),a("p",[n._v("这样的话n=4的情况就是和n=2的情况+n=3的情况数量一致。")]),n._v(" "),a("p",[n._v("其他情况都是类似的。可以自然得到这样一个规律，f(n) = f(n-1) + f(n-2)，就是我们之前做过的斐波那契数列了。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function rectCover(number)\n{\n    // write code here\n    if(number == 0) return 0;\n    if(number == 1) return 1;\n    if(number == 2) return 2;\n    let a = 1, b = 2;\n    while(number-- >= 2)\n    {\n        b += a;\n        a = b - a;\n    }\n    return a;\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/23/17377605740a999c?w=156&h=74&f=png&s=1976",alt:""}}),n._v("\n注意下我们的起始值与之前的斐波那契不大一样。")])])}),[],!1,null,null,null);s.default=t.exports}}]);