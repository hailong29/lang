# lang
项目背景
-------
有一天，boss和我说：“我们现在用的这个后台管理框架没有多语言功能，但是国外的客户看不懂中文，所以你看着办吧！”<br>
于是我开始了百度之旅，想要找到一个简简单单，可以轻松加上切换中英文的js插件。<br>
但是找到的插件都过于复杂了，不适合融入原本的框架，所以我决定自己写一个。<br>
1.可以自动根据浏览器语言决定显示中文还是英语<br>
2.可以手动设置语言。<br>
3.简单易用。<br>
于是就有了lang.js<br>

安装
----
直接引入即可
```<script src="../js/lang.js" type="text/javascript" charset="utf-8"></script>```
最低支持ie8

使用
----
引用lang.js后，调用lang.show()方法，该方法会根据当前的语言，替换innerHtml以及placeholder。

```<span txt="你好,世界||Hello World">你好，世界</span>```
```<input type="text"  placeholder="请输入" plh="請輸入||please enter" />```

默认的语言为中文，当当前语言为中文简体时，不替换innerHtml以及placeholder。
第二语言为中文繁体，是txt以及plh属性的第一个。
第三语言为其他语言，是txt和plh属性的第二个，两个属性都使用||区分中文繁体和其他语言。

另外也可以根据当前语言动态修改js内部的值，这里使用lang.fif()方法。
```var msg = lang.fit("简体文本", "繁體文本", "English text");```

有时候虽然是英文浏览器，但是使用者实际上更懂中文，这时候就需要拥有手动设置语言功能。
这里可以使用lang.setLang("语言缩写")方法来手动设置语言，具体可以参考index.html里面的例子。

如果需要日语、韩语等更多语言，可以自行修改lang.js内部的_langTable数组。


