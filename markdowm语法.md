# markdown常用语法

## 一. 标题

### 1. 用 `#`的个数来表示不同级别的标题，如下所示:

* `# 标题1 #` 显示为：

  # 标题1 #

* `## 标题2 ##` 显示为：

  ## 标题2 ##

  依此类推，其中后面的`#`可以省略。

### 2. 用`====`和`----`来表示标题

如下例子:

  `标题1`  
  `====`  
  显示为： 

标题1
====

  `标题2`  
  `----`  
 显示为：

标题2
----
使用方法为：先标题一行，然后另起一行加`=`或`-`。其中`=`和`-`的个数一个以上即可。

## 二. 换行

&emsp;&emsp;在行末加两个以上的空格，然后再回车即可换行编辑。

## 三. 代码

1. 高亮某个函数名或关键字，用 \`function_name\` 的方式，例如：  
\`function_name\` 显示为：`function_name` ；  
这种方法会将代码块在一行显示。
2. 通过 \`\`\`language code \`\`\` 的方式来包裹一段代码，并指定一种语言，此方法会按照该语言的特性来对代码着色。例如：  
\`\`\` javascript  
var name = 'ChenCong';  
function sayHello() {  
  console.log('hello!');  
}  
\`\`\`  
显示为：  
```javascript
var name = 'ChenCong';  
function sayHello() {  
  console.log('hello!');  
} 
```
&emsp;&emsp;**支持的语言有**：1c, abnf, accesslog, actionscript, ada, apache, applescript, arduino, armasm, asciidoc, aspectj, autohotkey, autoit, avrasm, awk, axapta, bash, basic, bnf, brainfuck, cal, capnproto, ceylon, clean, clojure, clojure-repl, cmake, coffeescript, coq, cos, cpp, crmsh, crystal, cs, csp, css, d, dart, delphi, diff, django, dns, dockerfile, dos, dsconfig, dts, dust, ebnf, elixir, elm, erb, erlang, erlang-repl, excel, fix, flix, fortran, fsharp, gams, gauss, gcode, gherkin, glsl, go, golo, gradle, groovy, haml, handlebars, haskell, haxe, hsp, htmlbars, http, hy, inform7, ini, irpf90, java, javascript, json, julia, kotlin, lasso, ldif, leaf, less, lisp, livecodeserver, livescript, llvm, lsl, lua, makefile, markdown, mathematica, matlab, maxima, mel, mercury, mipsasm, mizar, mojolicious, monkey, moonscript, n1ql, nginx, nimrod, nix, nsis, objectivec, ocaml, openscad, oxygene, parser3, perl, pf, php, pony, powershell, processing, profile, prolog, protobuf, puppet, purebasic, python, q, qml, r, rib, roboconf, rsl, ruby, ruleslanguage, rust, scala, scheme, scilab, scss, smali, smalltalk, sml, sqf, sql, stan, stata, step21, stylus, subunit, swift, taggerscript, tap, tcl, tex, thrift, tp, twig, typescript, vala, vbnet, vbscript, vbscript-html, verilog, vhdl, vim, x86asm, xl, xml, xquery, yaml, zephir  
&emsp;&emsp;如果不需要代码高亮的话，可以用下面的方法禁用：  
\`\`\` nohighlight  
code  
\`\`\`  
例如：  
 \`\`\` nohighlight  
var name = 'ChenCong';  
function sayHello() {  
  console.log('hello!');  
}  
\`\`\`  
显示为：
```nohighlight
var name = 'ChenCong';  
function sayHello() {  
  console.log('hello!');  
}
```

## 四. 粗体和斜体

* 斜体：用`*斜体字体*`表示，效果为 *斜体字体*
* 粗体：用`**粗体字体**`表示，效果为 **粗体字体**
* 粗斜体：用`***粗斜体***`表示，效果为 ***粗斜体***

## 五. 列表

1. 有序列表，通过`序号.（空格）内容`的形式表达  
  例如：
  ```  
  1. A  
  2. B  
  3. C
  ```
显示为：  
    1. A  
    2. B  
    3. C  

2. 无序列表，通过 `*（空格）内容` 或 `+（空格）内容` 或 `-（空格）内容` 来表示，例如：  
  ```
  * A
  * B
  * C
  + AA
  + BB
  + CC
  - AAA
  - BBB
  - CCC
  ```
  显示为：
* A
* B
* C
+ AA
+ BB
+ CC
- AAA
- BBB
- CCC

## 六. 中文段落中的首行缩进

&emsp;&emsp;通过HTML的空格实体来实现缩进效果。一个汉字占两个空格大小，所以使用四个空格就可以达到首行缩进两个汉字。

1. 一个空格大小的表示：`&ensp;`或`&#8194;`，此时只要在相应需要缩进的段落前加上 **4个** 如上的标记即可，**注意要带上分号**。

2. 两个空格的大小表示：`&emsp;`或`&#8195;`，同理，使用2个即可缩进2个汉字。

3. 不换行空格：`&nbsp;`或`&#160;`，使用4个`&#160;`即可。

## 七. 设置文字的字体、颜色及大小

&emsp;&emsp;markdown本身没有提供修改文字字体、颜色及大小的功能，同样需要内嵌HTML的方式来实现，为需要设置样式的文字添加`<font>`标签，然后再标签中添加属性**face、color、size**分别设置字体、颜色以及大小。

如下例子：
```
<font face="黑体">我是黑体字</font>
<font face="微软雅黑">我是微软雅黑</font>
<font face="STCAIYUN">我是华文彩云</font>
<font color=#00ffff>颜色为#00ffff</font>
<font color=red>颜色为red</font>
<font size=1>字体大小为1</font>
<font size=2>字体大小为2</font>
<font size=3>字体大小为3</font>
<font size=4>字体大小为4</font>
<font size=5>字体大小为5</font>
<font size=6>字体大小为6</font>
<font size=7>字体大小为7</font>
<font size=8>字体大小为8</font>
<font color=#0099ff size=5 face="STCAIYUN">颜色为#0099ff、大小为72、字体为"华文彩云"</font>
```
显示的效果为：

&emsp;&emsp;<font face="黑体">我是黑体字</font>

&emsp;&emsp;<font face="微软雅黑">我是微软雅黑</font>

&emsp;&emsp;<font face="STCAIYUN">我是华文彩云</font>

&emsp;&emsp;<font color=#00ffff>颜色为#00ffff</font>

&emsp;&emsp;<font color=red>颜色为red</font>

&emsp;&emsp;<font size=1>字体大小为1</font>

&emsp;&emsp;<font size=2>字体大小为2</font>

&emsp;&emsp;<font size=3>字体大小为3</font>

&emsp;&emsp;<font size=4>字体大小为4</font>

&emsp;&emsp;<font size=5>字体大小为5</font>

&emsp;&emsp;<font size=6>字体大小为6</font>

&emsp;&emsp;<font size=7>字体大小为7</font>

&emsp;&emsp;<font size=8>字体大小为8</font>

&emsp;&emsp;<font color=#0099ff size=5 face="STCAIYUN">颜色为#0099ff、大小为72、字体为"华文彩云"</font>

&emsp;&emsp;**备注：** 字体的size取值为1到7的整数，超过7则设置为7的大小，系统默认大小为3。字体的color值可为颜色的英文名或以16进制形式来表示。当然，以上的几个属性可以组合使用。