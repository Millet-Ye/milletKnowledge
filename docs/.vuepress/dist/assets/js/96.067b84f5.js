(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{430:function(t,o,r){"use strict";r.r(o);var a=r(14),s=Object(a.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("昨天产品经理提需求说公司的3d场景编辑器需要支持多选模型，然后一起移动缩放旋转选中的模型。这把我难到了，我使用的"),o("code",[t._v("TransformControls")]),t._v("明确一次只能控制一个物体的，不过今天早上来公司突然就想通了")]),t._v(" "),o("h2",{attrs:{id:"解决思路"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#解决思路"}},[t._v("#")]),t._v(" 解决思路")]),t._v(" "),o("ol",[o("li",[t._v("准备两个Group(),一个叫做 normalGroup,一个叫做 selectedGroup，顾名思义，一个是存放未选中的寻常模型的，另一个是放选中的模型的")]),t._v(" "),o("li",[t._v("然后使用"),o("code",[t._v("TransformControls")]),t._v("去控制selectedGroup就可以一次性移动多个模型了")]),t._v(" "),o("li",[t._v("然后保存模型位置的时候，将selectGroup中的children通过normalGroup().attach(object)方法添加到normalGroup中。使用attach方法添加可以保留模型世界坐标的影响。")])]),t._v(" "),o("h3",{attrs:{id:"来看下效果"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#来看下效果"}},[t._v("#")]),t._v(" 来看下效果")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://daodaoblogpicgo.oss-cn-shanghai.aliyuncs.com/img/2021020304.gif",alt:""}})])])}),[],!1,null,null,null);o.default=s.exports}}]);