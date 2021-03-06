/*!
 * =====================================================
 * lang.js v1.0.2
 * 简易版国际化方案
 * 自动适配语言
 * 推荐与vue.js一起使用
 * =====================================================
 */
(function(lang) {

	/**
	 * 将浏览器语言储存到本地，方便读取。
	 * 要刷新语言时调取一次
	 */
	lang.init = function() {
		//langfix存在时，lan不变
		if (localStorage.lang && localStorage.langfix) {
			lang.langName = localStorage.lang;
		} else {
			lang.langName = (navigator.language || navigator.browserLanguage).toLowerCase();
			localStorage.lang = lang.langName;
		}

		//不在语言字典里面,则默认为其他, "ja":3, "ja-JP":3
		if (langTable.hasOwnProperty(lang.langName)) {
			localStorage.langNum = langTable[lang.langName];
		} else {
			localStorage.langNum = 1;
			localStorage.lang = "other";
		}
		lang.langNum = Number(localStorage.langNum);
	}

	//这个暂时不做
	//思路是增加一个localStorage.langfix == True;
	//存在这个时，不进行真正的初始化
	lang.setLang = function(langName) {
		localStorage.lang = langName;
		//不在语言字典里面,则设为英文, "ja":3, "ja-JP":3
		if (langTable.hasOwnProperty(langName)) {
			localStorage.langNum = langTable[langName];
		} else {
			localStorage.langNum = 1;
		}
		localStorage.langfix = true;
	}

	/**
	 * 多语言选项，用于手动切换语言
	 * @param {Object} name
	 */
	lang.fitOption = function(name) {
		name || (name = "lang-option");
		var langOptions = document.getElementsByName("lang-option");
		if (!langOptions) {
			return;
		}
		langOptions.length > 0 && (langOptions[lang.langNum].selected = true); //radio    .checked = "true"
	}

	/**
	 * 按語言显示文本
	 * 例子：<h txt="搜索歷史||Search history">搜索历史</h> 然后最下方的js里调用lang.show();
	 * 數組使用||做分割;只需要設置默認語言外的語言
	 * 提示：被txt标记的元素不能有子代，否则子代文本会被删除。可以用span将文本提出
	 */
	lang.show = function() {
		if (Number(localStorage.langNum) != 0) {
			// var _langList = document.getElementsByClassName("lang-txt");
			var _langList = document.querySelectorAll("[txt]"); //选择全部具有txt属性的标签,ie8及以上兼容
			for (var i = 0; i < _langList.length; i++) {
				var _strs = _langList[i].getAttribute("txt").split("||");
				var _str = _strs[Number(localStorage.langNum) - 1];
				// 如只一个节点,直接改变,多个则改变第一个有值文本节点
				if (_langList[i].childNodes.length <= 1) {
					_langList[i].innerText = _str;
				} else {
					for (var j = 0; j < _langList[i].childNodes.length; j++) {
						if (_langList[i].childNodes[j].nodeType == 3 && /[^\s]+/.test(_langList[i].childNodes[j].nodeValue)) {
							_langList[i].childNodes[j].nodeValue = _str;
							break;
						}
					}
				}
			}
			var _lanPlhList = document.querySelectorAll("[plh]"); //选择全部具有plh属性的标签,ie8及以上兼容
			for (var i = 0; i < _lanPlhList.length; i++) {
				var _strs = _lanPlhList[i].getAttribute("plh").split("||");
				var _str = _strs[Number(localStorage.langNum) - 1];
				_lanPlhList[i].placeholder = _str;
			}

			lang.fitOption(); //更新手动切换选项
		}
	}

	/**
	 * 适应多语言
	 *  @param 使用多参数，为保证es5兼容，不使用...vars
	 */
	lang.fit = function() {
		return arguments[Number(localStorage.langNum)];
	}

	//编码表,0为默认语言
	var langTable = {
		"zh": 0
	}

	lang.langNum = 0;
	if (localStorage.langNum) {
		lang.langNum = Number(localStorage.langNum);
	} else {
		lang.init();
	}
})(window.lang = {})
