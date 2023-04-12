(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{411:function(s,t,a){"use strict";a.r(t);var e=a(14),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"继承主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#继承主题"}},[s._v("#")]),s._v(" 继承主题")]),s._v(" "),t("p",[t("code",[s._v("VuePress")]),s._v("为开发者提供了一个默认主题，它能在大多数场景下满足了文档边写者的需求。但是有的需求不太满足，比如文章我希望能显示标题，比如我想做一个归档页面等等，"),t("code",[s._v("VuePress")]),s._v("允许我们继承一个主题。")]),s._v(" "),t("h3",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("原子主题")]),s._v("，\n即父主题，类似默认主题这种完全从头实现的主题。")]),s._v(" "),t("li",[t("strong",[s._v("派生主题")]),s._v("，\n即子主题，基于父主题创建的主题")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("主题继承暂时不支持高阶继承，也就是说，一个派生主题无法被继承")])]),s._v(" "),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("p",[s._v("假设你想创建一个继承自VuePress默认主题的派生主题，你只需要在你的主题配置种配置extend"),t("code",[s._v("选项")]),s._v("：")]),s._v(" "),t("ol",[t("li",[s._v("在"),t("code",[s._v(".vuepress")]),s._v("文件夹下新建"),t("code",[s._v("theme")]),s._v("文件夹")]),s._v(" "),t("li",[s._v("配置"),t("code",[s._v("index.js")])])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("    module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ctx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("extend")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vuepress/theme-default'")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"继承策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#继承策略"}},[s._v("#")]),s._v(" 继承策略")]),s._v(" "),t("p",[s._v("父主题的所有能力都会“传递”给子主题，对于文件级别的约定，子主题可以通过在同样的位置创建同名文件来覆盖它；对于某些主题配置选项，如"),t("code",[s._v("gloabalLayout")]),s._v("，子主题也可以通过同名配置来覆盖它。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("全局组件")]),s._v("，即放置在 "),t("code",[s._v("theme/global-components")]),s._v(" 中的 "),t("code",[s._v("Vue")]),s._v(" 组件。")]),s._v(" "),t("li",[t("strong",[s._v("组件")]),s._v("，即放置在 "),t("code",[s._v("theme/components")]),s._v(" 中的 "),t("code",[s._v("Vue")]),s._v(" 组件。")]),s._v(" "),t("li",[t("strong",[s._v("全局的样式和调色板")]),s._v("，即放置在 "),t("code",[s._v("theme/styles")]),s._v(" 中的 "),t("code",[s._v("index.styl")]),s._v(" 和 "),t("code",[s._v("palette.styl")]),s._v("。")]),s._v(" "),t("li",[t("strong",[s._v("HTML 模板")]),s._v("，即放置在 "),t("code",[s._v("theme/templates")]),s._v(" 中的 "),t("code",[s._v("dev.html")]),s._v(" 和 "),t("code",[s._v("ssr.html")]),s._v("。")]),s._v(" "),t("li",[t("strong",[s._v("主题水平的客户端增强文件")]),s._v("，即 "),t("code",[s._v("theme/enhanceApp")]),s._v(".")])]),s._v(" "),t("h3",{attrs:{id:"组件的覆盖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件的覆盖"}},[s._v("#")]),s._v(" 组件的覆盖")]),s._v(" "),t("p",[s._v("你可能想要在子主题中覆盖父主题中的同名组件，默认情况下，当父主题中的组件都使用相对路径引用其他组件时，你将不可能做到这一点，因为你无法在运行时修改父主题的代码。")]),s._v(" "),t("p",[t("code",[s._v("VuePress")]),s._v(" 则通过一种巧妙的方式实现了这种需求，但这对父主题有一定的要求——所有的组件都必须使用 "),t("code",[s._v("@theme")]),s._v(" 别名来引用其他组件。\n例如：")]),s._v(" "),t("div",{staticClass:"language-vue line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}},[t("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Navbar "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@theme/components/Navbar.vue'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    ")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("ol",[t("li",[s._v("组件的覆盖，最好直接基于父主题中对应组件的代码来修改；")]),s._v(" "),t("li",[s._v("目前，在本地开发子主题，每次创建或移除组件时，你需要手动重启 Dev Server。")])])]),s._v(" "),t("h2",{attrs:{id:"覆盖默认主题样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#覆盖默认主题样式"}},[s._v("#")]),s._v(" 覆盖默认主题样式")]),s._v(" "),t("p",[s._v("默认主题的样式都在 "),t("code",[s._v("theme/styles")]),s._v(" 中的 "),t("code",[s._v("index.styl")]),s._v(" 和 "),t("code",[s._v("palette.styl")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"palette-style"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#palette-style"}},[s._v("#")]),s._v(" palette.style")]),s._v(" "),t("p",[s._v("默认主题的"),t("code",[s._v("palette.styl")]),s._v("里定义了一些变量，我们可以在"),t("code",[s._v("theme")]),s._v("下相同位置创建"),t("code",[s._v("palette.styl")]),s._v("，用来覆盖变量\n你可以调整的一些变量如下:")]),s._v(" "),t("div",{staticClass:"language-stylus line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-stylus"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 颜色")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$accentColor")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#3eaf7c")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$textColor")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#2c3e50")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$borderColor")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#eaecef")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$codeBgColor")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#282c34")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$arrowBgColor")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#ccc")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$badgeTipColor")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#42b983")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$badgeWarningColor")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token func"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("darken")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#ffe564")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),t("span",{pre:!0,attrs:{class:"token unit"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$badgeErrorColor")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#DA5961")])]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 布局")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$navbarHeight")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.6")]),t("span",{pre:!0,attrs:{class:"token unit"}},[s._v("rem")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sidebarWidth")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token unit"}},[s._v("rem")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$contentWidth")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("740")]),t("span",{pre:!0,attrs:{class:"token unit"}},[s._v("px")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$homePageWidth")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("960")]),t("span",{pre:!0,attrs:{class:"token unit"}},[s._v("px")])]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 响应式变化点")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MQNarrow")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("959")]),t("span",{pre:!0,attrs:{class:"token unit"}},[s._v("px")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MQMobile")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("719")]),t("span",{pre:!0,attrs:{class:"token unit"}},[s._v("px")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable-declaration"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MQMobileNarrow")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("419")]),t("span",{pre:!0,attrs:{class:"token unit"}},[s._v("px")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("你应该"),t("strong",[s._v("只在")]),s._v("这个文件中定义变量。因为 palette.styl 将在根的 stylus 配置文件的末尾引入，作为配置，它将被多个文件使用，所以一旦你在这里写了样式，你的样式就会被多次复制。")])]),s._v(" "),t("h3",{attrs:{id:"index-styl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#index-styl"}},[s._v("#")]),s._v(" index.styl")]),s._v(" "),t("p",[t("code",[s._v("VuePress")]),s._v(" 提供了一种添加额外样式的简便方法。你可以创建一个 "),t("code",[s._v(".vuepress/styles/index.styl")]),s._v(" 文件。这是一个 "),t("code",[s._v("Stylus")]),s._v(" 文件，但你也可以使用正常的 "),t("code",[s._v("CSS")]),s._v(" 语法。")]),s._v(" "),t("h2",{attrs:{id:"全局计算属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局计算属性"}},[s._v("#")]),s._v(" 全局计算属性")]),s._v(" "),t("p",[s._v("在 VuePress 中，内置了一些核心的计算属性 (opens new window)，以供默认主题 或自定义主题使用。\n在 VuePress 中，内置了一些核心的"),t("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[s._v("计算属性"),t("OutboundLink")],1),s._v("，以供"),t("RouterLink",{attrs:{to:"/vuePress/theme/default-theme-config.html"}},[s._v("默认主题")]),s._v(" 或自定义主题使用。")],1),s._v(" "),t("h3",{attrs:{id:"site"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#site"}},[s._v("#")]),s._v(" $site")]),s._v(" "),t("p",[s._v("这是你现在看到的这个网站的 "),t("code",[s._v("$site")]),s._v(" 的值：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"刀刀的知识积累"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"description: '立志不再懒懒散散的小前端的知识库',\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"base"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/daodao-knowledge/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    ...\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[s._v("#")]),s._v(" $page")]),s._v(" "),t("p",[s._v("这是你现在看到的这个页面的 "),t("code",[s._v("$page")]),s._v(" 的值：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"frontmatter"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"link"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/Ostask"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ostask"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"date"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-02-07T15:38:36.000Z"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"permalink"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/pages/jdagee/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"修改默认主题"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        .....\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"frontmatter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter"}},[s._v("#")]),s._v(" $frontmatter")]),s._v(" "),t("p",[t("a",{attrs:{href:"#page"}},[s._v("$page")]),s._v(".frontmatter 的引用。")]),s._v(" "),t("h3",{attrs:{id:"lang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lang"}},[s._v("#")]),s._v(" $lang")]),s._v(" "),t("p",[s._v("当前页面的语言，默认值为 "),t("code",[s._v("en-US")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"localepath"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#localepath"}},[s._v("#")]),s._v(" $localePath")]),s._v(" "),t("p",[s._v("当前页面的 locale 路径前缀，默认值为 "),t("code",[s._v("/")]),s._v("，当前页面为 "),t("code",[s._v("/")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[s._v("#")]),s._v(" $title")]),s._v(" "),t("p",[s._v("用于当前页面的 "),t("code",[s._v("<title>")]),s._v(" 标签的值。")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" $description")]),s._v(" "),t("p",[s._v("用于当前页面的 "),t("code",[s._v('<meta name="description" content="...">')]),s._v(" 的 "),t("code",[s._v("content")]),s._v(" 值。")]),s._v(" "),t("h3",{attrs:{id:"themeconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig"}},[s._v("#")]),s._v(" $themeConfig")]),s._v(" "),t("p",[s._v("即 "),t("code",[s._v("siteConfig.themeConfig")]),s._v("。")])])}),[],!1,null,null,null);t.default=r.exports}}]);