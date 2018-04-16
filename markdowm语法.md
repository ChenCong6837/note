# markdown常用语法  
## 一. 标题  
### 1. 用 `#`的个数来表示不同级别的标题，如下所示：  
* `# 标题1 #` 显示为：
  # 标题1 #
* `## 标题2 ##` 显示为：  
  ## 标题2 ## 
  依此类推，其中后面的`#`可以省略。
### 2. 用`====`和`----`来表示标题，如下所示：  
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
在行末加两个以上的空格，然后再回车即可换行编辑。 
## 三. 代码  
1.高亮某个函数名或关键字，用 \`function_name\` 的方式，例如：  
\`function_name\` 显示为：`function_name`  
2.通过 \`\`\`language code \`\`\` 的方式来包裹一段代码，并指定一种语言。例如：  
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
**支持的语言有**：1c, abnf, accesslog, actionscript, ada, apache, applescript, arduino, armasm, asciidoc, aspectj, autohotkey, autoit, avrasm, awk, axapta, bash, basic, bnf, brainfuck, cal, capnproto, ceylon, clean, clojure, clojure-repl, cmake, coffeescript, coq, cos, cpp, crmsh, crystal, cs, csp, css, d, dart, delphi, diff, django, dns, dockerfile, dos, dsconfig, dts, dust, ebnf, elixir, elm, erb, erlang, erlang-repl, excel, fix, flix, fortran, fsharp, gams, gauss, gcode, gherkin, glsl, go, golo, gradle, groovy, haml, handlebars, haskell, haxe, hsp, htmlbars, http, hy, inform7, ini, irpf90, java, javascript, json, julia, kotlin, lasso, ldif, leaf, less, lisp, livecodeserver, livescript, llvm, lsl, lua, makefile, markdown, mathematica, matlab, maxima, mel, mercury, mipsasm, mizar, mojolicious, monkey, moonscript, n1ql, nginx, nimrod, nix, nsis, objectivec, ocaml, openscad, oxygene, parser3, perl, pf, php, pony, powershell, processing, profile, prolog, protobuf, puppet, purebasic, python, q, qml, r, rib, roboconf, rsl, ruby, ruleslanguage, rust, scala, scheme, scilab, scss, smali, smalltalk, sml, sqf, sql, stan, stata, step21, stylus, subunit, swift, taggerscript, tap, tcl, tex, thrift, tp, twig, typescript, vala, vbnet, vbscript, vbscript-html, verilog, vhdl, vim, x86asm, xl, xml, xquery, yaml, zephir  
如果不需要代码高亮的话，可以用下面的方法禁用：  
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