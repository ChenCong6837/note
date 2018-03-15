/*
 * @Author: ChenCong 
 * @Date: 2018-03-13 18:55:11 
 * @Last Modified by: ChenCong
 * @Last Modified time: 2018-03-15 19:39:33
 */

//参考自：http://alloyteam.github.io/CodeGuide/#project-naming

/*==========目录==========

==========1.命名规则==========
    1.1 项目命名
    1.2 目录命名
    1.3 JS文件命名
    1.4 CSS,SCSS文件命名
    1.5 HTML文件命名

==========2.HTML==========
    2.1 语法
    2.2 HTML5 doctype
    2.3 lang属性
    2.4 字符编码
    2.5 IE兼容模式
    2.6 引入CSS,JS
    2.7 属性顺序
    2.8 boolean属性
    2.9 JS生成标签
    2.10 减少标签数量
    2.11 使用高于完美

==========3.CSS,SCSS==========
    3.1 缩进
    3.2 分号
    3.3 空格
    3.4 空行
    3.5 换行
    3.6 注释
    3.7 引号
    3.8 命名
    3.9 属性声明顺序
    3.10 颜色
    3.11 属性简写
    3.12 媒体查询
    3.13 SCSS相关
    3.14 杂项

==========4.JavaScript==========
    4.1 缩进
    4.2 单行长度
    4.3 分号
    4.4 空格
    4.5 空行
    4.6 换行
    4.7 单行注释
    4.8 多行注释
    4.9 文档注释
    4.10 引号
    4.11 变量命名
    4.12 变量声明
    4.13 函数
    4.14 数组、对象
    4.15 括号
    4.16 null
    4.17 undefined
    4.18 jshint
    4.19 杂项
*/

//==========内容==========
/*
==========1.命名规则==========
1.1 项目命名
    全部采用小写的方式，以下划线分隔。
    例：my_project_name

1.2 目录命名
    参照项目命名规则；
    有复数结构时，要采用复数命名法。
    例：scripts,styles,images,data_models

1.3 JS文件命名
    参照项目命名规则。
    例：account_model.js

1.4 CSS,SCSS文件命名
    参照项目命名规则。
    例：retina_sprites.scss
    
1.5 HTML文件命名
    参照项目命名规则。
    例：error_report.html

==========2.HTML==========
2.1 语法
    (1) 缩进使用soft tab(4个空格)；
    (2) 嵌套的节点应该缩进；
    (3) 在属性上，使用双引号，不要使用单引号； 
    (4) 不要在自动闭合标签结尾处使用斜线(HTML5 规范指出他们是可选的);
    (5) 不要忽略可选的关闭标签，例：</li> 和 </body> 
 

<!DOCTYPE html>
<html>
    <head>
        <title>Page title</title>
    </head>
    <body>
        <img src="images/company_logo.png" alt="Company">

        <h1 class="hello-world">Hello, world!</h1>
    </body>
</html>

2.2 HTML5 DOCTYPE
    在页面开头使用这个简单的doctype来启用标准模式，使其在每个浏览器中尽可能一致地展现；
    虽然doctype不区分大小写，但是按照惯例，DOCTYPE大写。

    <!DOCTYPE html>
    <html>
    	...
    </html>

2.3 lang属性
    根据HTML5规范：应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。
    更多关于lang属性的说明：http://w3c.github.io/html/semantics.html#the-html-element
    在sitepoint上可以查到语言列表：https://www.sitepoint.com/iso-2-letter-language-codes/
    但sitepoint只是给出了语言的大类，例如中文只给出了zh，但是没有区分香港，台湾，大陆。
    而微软给出了一份更加详细的语言列表：https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/
    其中细分了zh-cn，zh-hk，zh-tw。

    <!DOCTYPE html>
    <html lang="en-us">
        ...
    </html>

2.4 字符编码
    通过声明一个明确的字符编码，让浏览器轻松、快速的确定合适网页内容的渲染方式，通常指定为'UTF-8'。

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
        </head>
        ...
    </html>

2.5 IE兼容模式
    用<meta>标签可以指定页面应该用什么版本的IE来渲染；
    了解更多：https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do
    不同DOCTYPE在不同浏览器下会触发不同的渲染模式：https://hsivonen.fi/doctype/

    <!DOCTYPE html>
    <html>
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        </head>
        ...
    </html>

2.6 引入CSS，JS
    根据HTML5规范，通常在引入CSS和JS时不需要指明 type，因为 text/css 和 text/javascript分别是他们的默认值。
    HTML5规范链接：
        (1) 使用link：https://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-link-element
        (2) 使用style：https://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-style-element
        (3) 使用script：https://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#the-script-element

        <!-- External CSS -->
        <link rel="stylesheet" href="code_guide.css">

        <!-- In-document CSS -->
        <style>
            ...
        </style>

        <!-- External JS -->
        <script src="code_guide.js"></script>

        <!-- In-document JS -->
        <script>
            ...
        </script>

2.7 属性顺序
    属性应该按照特定的顺序出现以保证易读性；
        (1) class
        (2) id 
        (3) name
        (4) data-*
        (5) src, for, type, href, value, max-length, max, min, pattern
        (6) placeholder, title, alt
        (7) aria-*, role 
        (8) required, readonly, disabled

    class 是为高可复用性组件设计的，所以应处在第一位；
    id更加具体且应该尽量少使用，所以将它放在第二位。

    <a class="..." id="..." data-modal="toggle" href="#">Example link</a>

    <input class="form-control" type="text">

    <img src="..." alt="...">

2.8 boolean属性
    boolean属性指不需要声明取值的属性，XHTML需要每个声明取值，但是HTML5并不需要；
    更多内容可以参考：www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes
        boolean属性的存在表示取值为true，不存在则表示取值为false。

        <input type="text" disabled>

        <input type="checkbox" value="1" checked>

        <select>
            <option value="1" selected>1</option>
        </select>

2.9 JS生成标签
    在JS文件中生成标签让内容变得更难查找，更难编辑，性能更差，应该尽量避免这种情况的出现。

2.10 减少标签数量
    在编写HTML代码时，需要尽量避免多余的父节点；很多时候，需要通过迭代和重构来使HTML变得更少。

    <!-- Not well -->
    <span class="avatar">
        <img src="...">
    </span>

    <!-- Better -->
    <img class="avatar" src="...">




    
    
    
    () 


    


*/