# lang
极简前端国际化处理方案，lang.js
用于快速将界面变为多语言形式，会根据浏览器自动切换innerHtml、placeholder,同时支持语言的手动设置。

使用时先引用lang.js
然后调用lang.show()方法，改方法会将界面变为设置好的多语言形式。

"<span txt="你好,世界||Hello World">你好，世界</span>"

默认的语言为中文，当为中文简体时，不替换innerHtml。第二语言为中文繁体，为txt属性的第一个。第三语言为其他语言，是txt属性的第二个，txt属性使用||区分中文繁体和其他语言。

<input type="text"  placeholder="请输入" plh="請輸入||please enter" />

另外支持占位符，使用plh属性，同样使用||区分。

lang.fit("你好，世界","你好,世界", "Hello World");

使用lang.fit(中文简体，中文繁体，其他语言),可以根据当前选择的语言，返回相应的结果。
