(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dc38fe5"],{1560:function(e,t,n){},"397e":function(e,t,n){"use strict";var c=n("b775");function o(e,t){c["a"].post("/api/prt/update",e).then((function(e){t(e)}))}function a(e,t){c["a"].get("/api/prt/list",{params:t}).then((function(t){e(t)}))}function r(e,t){c["a"].delete("/api/prt/delete/"+e).then((function(e){t(e)}))}function u(e){c["a"].get("/api/env/list").then((function(t){e(t)}))}function l(e,t){c["a"].post("/api/prt/domain/update",e).then((function(e){t(e)}))}function i(e,t){c["a"].delete("/api/prt/domain/del/"+e).then((function(e){t(e)}))}function d(e,t){c["a"].get("/api/mobilePhone/list",{params:t}).then((function(t){e(t)}))}function b(e,t){c["a"].get("/api/appConfig/list",{params:t}).then((function(t){e(t)}))}function f(e,t){c["a"].delete("/api/appConfig/del/"+t).then((function(t){return e(t)}))}function j(e,t){c["a"].post("/api/appConfig/update",t).then((function(t){e(t)}))}function O(e,t){c["a"].get("/api/dingRobot/list",{params:t}).then((function(t){return e(t)}))}function p(e,t){c["a"].post("/api/dingRobot/update",t).then((function(t){return e(t)}))}function s(e,t){c["a"].delete("/api/dingRobot/delete/"+t).then((function(t){return e(t)}))}t["a"]={addPrt:o,prtList:a,delPrt:r,envList:u,updatePrtDomain:l,delPrtDomain:i,mobilePhoneList:d,appConfigList:b,delAppConfig:f,updateAppConfig:j,dingRobotList:O,updateRobot:p,delRobot:s}},"3c34":function(e,t,n){"use strict";n("b766")},"7eed":function(e,t,n){"use strict";var c=n("7a23"),o=function(e){return Object(c["pushScopeId"])("data-v-1d448798"),e=e(),Object(c["popScopeId"])(),e},a={id:"layout-one"},r={id:"layout-describe"},u=o((function(){return Object(c["createElementVNode"])("div",null,"描述",-1)})),l=Object(c["createTextVNode"])("添加"),i={id:"layout-fun"},d={class:"fun-item"},b=Object(c["createTextVNode"])(" 项目名称:   "),f={class:"fun-item"},j=Object(c["createTextVNode"])("查询"),O={class:"fun-item"},p=Object(c["createTextVNode"])("重置"),s={id:"layout-list"},V=Object(c["createTextVNode"])(" 列表区域 "),m={id:"layout-pag"},N=Object(c["createTextVNode"])("分页");function C(e,t){var n=Object(c["resolveComponent"])("el-col"),o=Object(c["resolveComponent"])("el-button"),C=Object(c["resolveComponent"])("el-divider"),h=Object(c["resolveComponent"])("el-row"),x=Object(c["resolveComponent"])("el-input");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createElementVNode"])("div",r,[Object(c["createVNode"])(h,{gutter:3},{default:Object(c["withCtx"])((function(){return[Object(c["renderSlot"])(e.$slots,"title",{},(function(){return[Object(c["createVNode"])(n,{span:22},{default:Object(c["withCtx"])((function(){return[u]})),_:1}),Object(c["createVNode"])(n,{span:2},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(o,{type:"primary"},{default:Object(c["withCtx"])((function(){return[l]})),_:1})]})),_:1})]}),!0),Object(c["createVNode"])(n,{span:24},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C)]})),_:1})]})),_:3})]),Object(c["createElementVNode"])("div",i,[Object(c["renderSlot"])(e.$slots,"fun",{},(function(){return[Object(c["createVNode"])(h,{gutter:3},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(n,{span:5},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",d,[b,Object(c["createVNode"])(x,{style:{width:"200px"},modelValue:e.filterAccount,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.filterAccount=t}),placeholder:"Please input"},null,8,["modelValue"])])]})),_:1}),Object(c["createVNode"])(n,{span:1},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",f,[Object(c["createVNode"])(o,{type:"primary"},{default:Object(c["withCtx"])((function(){return[j]})),_:1})])]})),_:1}),Object(c["createVNode"])(n,{span:1},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",O,[Object(c["createVNode"])(o,{type:"warning",onClick:t[1]||(t[1]=function(){})},{default:Object(c["withCtx"])((function(){return[p]})),_:1})])]})),_:1})]})),_:1})]}),!0)]),Object(c["createElementVNode"])("div",s,[Object(c["renderSlot"])(e.$slots,"list",{},(function(){return[V]}),!0)]),Object(c["createElementVNode"])("div",m,[Object(c["renderSlot"])(e.$slots,"page",{},(function(){return[N]}),!0)])])}n("db6c");var h=n("d959"),x=n.n(h);const v={},w=x()(v,[["render",C],["__scopeId","data-v-1d448798"]]);t["a"]=w},b766:function(e,t,n){},db6c:function(e,t,n){"use strict";n("1560")},e52e:function(e,t,n){"use strict";n.r(t);n("a434"),n("b0c0");var c=n("7a23"),o=n("7eed"),a=n("062e"),r=n("2a40"),u=n("397e"),l=(n("3908"),function(e){return Object(c["pushScopeId"])("data-v-476f876e"),e=e(),Object(c["popScopeId"])(),e}),i=l((function(){return Object(c["createElementVNode"])("div",null,"APP启动配置",-1)})),d=Object(c["createTextVNode"])("添加APP"),b={class:"fun-item"},f=Object(c["createTextVNode"])(" APP名称:  "),j={class:"fun-item"},O=Object(c["createTextVNode"])("查询"),p={class:"fun-item"},s=Object(c["createTextVNode"])("重置"),V={class:"app-others-fun"},m=Object(c["createTextVNode"])("添加配置"),N=Object(c["createTextVNode"])("保存"),C={class:"app-others-fun"},h=Object(c["createTextVNode"])("KEY："),x=Object(c["createTextVNode"])(),v=Object(c["createTextVNode"])("VALUE："),w=Object(c["createTextVNode"])(),_=Object(c["createTextVNode"])("删除"),g=l((function(){return Object(c["createElementVNode"])("br",null,null,-1)})),y=Object(c["createTextVNode"])("编辑"),k=Object(c["createTextVNode"])("删除"),P={class:"dialog-footer"},A=Object(c["createTextVNode"])("取消"),E=Object(c["createTextVNode"])("保存"),T={setup:function(e){var t=r["a"].tabRowStyle(),n=Object(c["ref"])([]),l=function(e){var t={key:"",value:""};e.push(t)},T=function(e,t){e.splice(t,1)},B=[{name:"appium"},{name:"uiaotomator1"},{name:"uiaotomator2"}],R=[{name:"false",value:0},{name:"true",value:1}],U=Object(c["ref"])(!1),S=Object(c["reactive"])({name:"",appPackage:"",appActivity:"",automationName:"",noReset:null,others:null}),L=function(e){u["a"].updateAppConfig((function(t){for(var n in F(),U.value=!1,e)S[n]=null}),e)},I=function(e){for(var t in e)S[t]=e[t];U.value=!0},$=Object(c["ref"])([]),F=function(e){u["a"].appConfigList((function(e){$.value=e.data.records,K.value=e.data.size,M.value=e.data.total}),e)},z=function(e){r["a"].messageBox((function(){u["a"].delAppConfig((function(e){r["a"].toast(e),F()}),e)}))},D=Object(c["ref"])(null),J=function(){if(null!=D.value){var e={name:D.value};F(e)}},K=Object(c["ref"])(0),M=Object(c["ref"])(0),Y=function(e){var t={current:e};F(t)};return Object(c["watch"])(U,(function(e,t){if(!1===e)for(var n in S)S[n]=null})),Object(c["onBeforeMount"])((function(){F()})),function(e,r){var u=Object(c["resolveComponent"])("el-col"),q=Object(c["resolveComponent"])("el-button"),G=Object(c["resolveComponent"])("el-input"),H=Object(c["resolveComponent"])("el-row"),Q=Object(c["resolveComponent"])("el-tag"),W=Object(c["resolveComponent"])("el-table-column"),X=Object(c["resolveComponent"])("el-table"),Z=Object(c["resolveComponent"])("el-form-item"),ee=Object(c["resolveComponent"])("el-option"),te=Object(c["resolveComponent"])("el-select"),ne=Object(c["resolveComponent"])("el-form"),ce=Object(c["resolveComponent"])("el-dialog");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(Object(c["unref"])(o["a"]),null,{title:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{span:22},{default:Object(c["withCtx"])((function(){return[i]})),_:1}),Object(c["createVNode"])(u,{span:2},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(q,{type:"primary",onClick:r[0]||(r[0]=function(e){return Object(c["isRef"])(U)?U.value=!0:U=!0})},{default:Object(c["withCtx"])((function(){return[d]})),_:1})])]})),_:1})]})),fun:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(H,{gutter:4},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{span:6},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",b,[f,Object(c["createVNode"])(G,{placeholder:"请输入APP名称",modelValue:D.value,"onUpdate:modelValue":r[1]||(r[1]=function(e){return D.value=e}),style:{width:"200px"}},null,8,["modelValue"])])]})),_:1}),Object(c["createVNode"])(u,{span:2},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",j,[Object(c["createVNode"])(q,{type:"primary",onClick:r[2]||(r[2]=function(e){return J()})},{default:Object(c["withCtx"])((function(){return[O]})),_:1})])]})),_:1}),Object(c["createVNode"])(u,{span:2},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",p,[Object(c["createVNode"])(q,{type:"warning",onClick:r[3]||(r[3]=function(e){return F()})},{default:Object(c["withCtx"])((function(){return[s]})),_:1})])]})),_:1})]})),_:1})])]})),list:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(X,{data:$.value,stripe:"",border:"","cell-style":Object(c["unref"])(t),"header-cell-style":Object(c["unref"])(t),"row-key":function(e){return e.id},"expand-row-keys":n.value},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(W,{type:"expand"},{default:Object(c["withCtx"])((function(e){return[Object(c["createElementVNode"])("div",V,[Object(c["createVNode"])(H,{gutter:1},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{span:2},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(q,{type:"warning",onClick:function(t){return l(e.row.others)}},{default:Object(c["withCtx"])((function(){return[m]})),_:2},1032,["onClick"])]})),_:2},1024),Object(c["createVNode"])(u,{span:2},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(q,{type:"primary",onClick:function(t){return L(e.row)}},{default:Object(c["withCtx"])((function(){return[N]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:2},1024)]),Object(c["createElementVNode"])("div",C,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.row.others,(function(t,n){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(H,{gutter:3},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{span:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Q,null,{default:Object(c["withCtx"])((function(){return[h]})),_:1}),x,Object(c["createVNode"])(G,{modelValue:t.key,"onUpdate:modelValue":function(e){return t.key=e},style:{width:"200px"}},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),Object(c["createVNode"])(u,{span:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Q,null,{default:Object(c["withCtx"])((function(){return[v]})),_:1}),w,Object(c["createVNode"])(G,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},style:{width:"200px"}},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),Object(c["createVNode"])(u,{span:1},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(q,{type:"danger",onClick:function(t){return T(e.row.others,n)}},{default:Object(c["withCtx"])((function(){return[_]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:2},1024),g])})),256))])]})),_:1}),Object(c["createVNode"])(W,{prop:"id",label:"序号"},{default:Object(c["withCtx"])((function(e){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$index+1),1)]})),_:1}),Object(c["createVNode"])(W,{prop:"name",label:"APP名称"}),Object(c["createVNode"])(W,{prop:"appPackage",label:"APP包名"}),Object(c["createVNode"])(W,{prop:"appActivity",label:"App启动页"}),Object(c["createVNode"])(W,{prop:"automationName",label:"APP启动引擎"}),Object(c["createVNode"])(W,{prop:"noReset",label:"是否重置"}),Object(c["createVNode"])(W,{fixed:"right",label:"操作"},{default:Object(c["withCtx"])((function(e){return[Object(c["createVNode"])(q,{type:"primary",onClick:function(t){return I(e.row)}},{default:Object(c["withCtx"])((function(){return[y]})),_:2},1032,["onClick"]),Object(c["createVNode"])(q,{type:"warning",onClick:function(t){return z(e.row.id)}},{default:Object(c["withCtx"])((function(){return[k]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data","cell-style","header-cell-style","row-key","expand-row-keys"])]})),page:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(a["a"]),{total:M.value,pageSize:K.value,onPaging:Y},null,8,["total","pageSize"])]})),_:1}),Object(c["createVNode"])(ce,{modelValue:Object(c["unref"])(U),"onUpdate:modelValue":r[11]||(r[11]=function(e){return Object(c["isRef"])(U)?U.value=e:U=e}),title:"添加修改App配置",width:"30%"},{footer:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("span",P,[Object(c["createVNode"])(q,{onClick:r[9]||(r[9]=function(e){return Object(c["isRef"])(U)?U.value=!1:U=!1})},{default:Object(c["withCtx"])((function(){return[A]})),_:1}),Object(c["createVNode"])(q,{type:"primary",onClick:r[10]||(r[10]=function(e){return L(Object(c["unref"])(S))})},{default:Object(c["withCtx"])((function(){return[E]})),_:1})])]})),default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(ne,{model:Object(c["unref"])(S),"label-width":"120px"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Z,{label:"App名称"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(G,{placeholder:"app名称",modelValue:Object(c["unref"])(S).name,"onUpdate:modelValue":r[4]||(r[4]=function(e){return Object(c["unref"])(S).name=e})},null,8,["modelValue"])]})),_:1}),Object(c["createVNode"])(Z,{label:"App包名"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(G,{placeholder:"App包名",modelValue:Object(c["unref"])(S).appPackage,"onUpdate:modelValue":r[5]||(r[5]=function(e){return Object(c["unref"])(S).appPackage=e})},null,8,["modelValue"])]})),_:1}),Object(c["createVNode"])(Z,{label:"App启动页"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(G,{placeholder:"App启动页",modelValue:Object(c["unref"])(S).appActivity,"onUpdate:modelValue":r[6]||(r[6]=function(e){return Object(c["unref"])(S).appActivity=e})},null,8,["modelValue"])]})),_:1}),Object(c["createVNode"])(Z,{label:"自动化执行引擎"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(te,{modelValue:Object(c["unref"])(S).automationName,"onUpdate:modelValue":r[7]||(r[7]=function(e){return Object(c["unref"])(S).automationName=e})},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(B,(function(e,t){return Object(c["createVNode"])(ee,{label:e.name,value:e.name},null,8,["label","value"])})),64))]})),_:1},8,["modelValue"])]})),_:1}),Object(c["createVNode"])(Z,{label:"是否重置APP"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(te,{modelValue:Object(c["unref"])(S).noReset,"onUpdate:modelValue":r[8]||(r[8]=function(e){return Object(c["unref"])(S).noReset=e})},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(R,(function(e,t){return Object(c["createVNode"])(ee,{label:e.name,value:e.value},null,8,["label","value"])})),64))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["model"])]})),_:1},8,["modelValue"])],64)}}},B=(n("3c34"),n("d959")),R=n.n(B);const U=R()(T,[["__scopeId","data-v-476f876e"]]);t["default"]=U}}]);
//# sourceMappingURL=chunk-1dc38fe5.ad456379.js.map