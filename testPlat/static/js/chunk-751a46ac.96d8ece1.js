(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-751a46ac"],{"04d1":function(e,t,n){var c=n("342f"),o=c.match(/firefox\/(\d+)/i);e.exports=!!o&&+o[1]},"076d":function(e,t,n){"use strict";var c=n("7a23"),o=Object(c["defineComponent"])({name:"CopyDocument"});const a={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},r=Object(c["createVNode"])("path",{fill:"currentColor",d:"M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"},null,-1),l=Object(c["createVNode"])("path",{fill:"currentColor",d:"M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"},null,-1);function u(e,t,n,o,u,i){return Object(c["openBlock"])(),Object(c["createBlock"])("svg",a,[r,l])}o.render=u,o.__file="packages/components/CopyDocument.vue",t["a"]=o},"0ad7":function(e,t,n){"use strict";n("7a23")},"0ca1":function(e,t,n){"use strict";var c=n("7a23"),o=Object(c["defineComponent"])({name:"More"});const a={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},r=Object(c["createVNode"])("path",{fill:"currentColor",d:"M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"},null,-1);function l(e,t,n,o,l,u){return Object(c["openBlock"])(),Object(c["createBlock"])("svg",a,[r])}o.render=l,o.__file="packages/components/More.vue";var u=o,i=Object(c["createTextVNode"])("Action 1"),d={setup:function(e){return function(e,t){var n=Object(c["resolveComponent"])("el-icon"),o=Object(c["resolveComponent"])("el-dropdown-item"),a=Object(c["resolveComponent"])("el-dropdown-menu"),r=Object(c["resolveComponent"])("el-dropdown");return Object(c["openBlock"])(),Object(c["createBlock"])(r,{placement:"bottom-end"},{dropdown:Object(c["withCtx"])((function(){return[Object(c["renderSlot"])(e.$slots,"body",{},(function(){return[Object(c["createVNode"])(a,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(o,null,{default:Object(c["withCtx"])((function(){return[i]})),_:1})]})),_:1})]}))]})),default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(n,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(u))]})),_:1})]})),_:3})}}};const b=d;t["a"]=b},"4e82":function(e,t,n){"use strict";var c=n("23e7"),o=n("e330"),a=n("59ed"),r=n("7b0b"),l=n("07fa"),u=n("577e"),i=n("d039"),d=n("addb"),b=n("a640"),f=n("04d1"),s=n("d998"),O=n("2d00"),j=n("512c"),m=[],p=o(m.sort),v=o(m.push),V=i((function(){m.sort(void 0)})),h=i((function(){m.sort(null)})),w=b("sort"),N=!i((function(){if(O)return O<70;if(!(f&&f>3)){if(s)return!0;if(j)return j<603;var e,t,n,c,o="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(c=0;c<47;c++)m.push({k:t+c,v:n})}for(m.sort((function(e,t){return t.v-e.v})),c=0;c<m.length;c++)t=m[c].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}})),C=V||!h||!w||!N,x=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:u(t)>u(n)?1:-1}};c({target:"Array",proto:!0,forced:C},{sort:function(e){void 0!==e&&a(e);var t=r(this);if(N)return void 0===e?p(t):p(t,e);var n,c,o=[],u=l(t);for(c=0;c<u;c++)c in t&&v(o,t[c]);d(o,x(e)),n=o.length,c=0;while(c<n)t[c]=o[c++];while(c<u)delete t[c++];return t}})},"512c":function(e,t,n){var c=n("342f"),o=c.match(/AppleWebKit\/(\d+)\./);e.exports=!!o&&+o[1]},"6c52":function(e,t,n){"use strict";n("9504")},9148:function(e,t,n){},9504:function(e,t,n){},c4c3:function(e,t,n){"use strict";n("4de4"),n("d3b7"),n("caad"),n("2532"),n("b0c0");var c=n("7a23"),o={class:"tree-top"},a={class:"tree-body"},r={class:"tree-node-left",style:{width:"90%"}},l={class:"tree-node-right"},u={props:{treeData:{default:[]},defaultProps:{default:{children:"children",label:"name"}}},setup:function(e){Object(c["onBeforeMount"])((function(){var e=Object(c["getCurrentInstance"])(),n=e.proxy;Object(c["watch"])((function(){return t.value}),(function(e){n.$refs.myFilterTree.filter(e)}))}));var t=Object(c["ref"])(""),n=function(e,t){return t.name.includes(e)||""===e};return function(u,i){var d=Object(c["resolveComponent"])("el-input"),b=Object(c["resolveComponent"])("el-tree");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("div",o,[Object(c["createVNode"])(d,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=function(e){return t.value=e}),placeholder:"过滤分类名称"},null,8,["modelValue"])]),Object(c["createElementVNode"])("div",a,[Object(c["createVNode"])(b,{ref:function(e,t){t["myFilterTree"]=e},data:e.treeData,props:e.defaultProps,"node-key":"id","filter-node-method":n},{default:Object(c["withCtx"])((function(e){e.node;var t=e.data;return[Object(c["createElementVNode"])("div",r,Object(c["toDisplayString"])(t.name),1),Object(c["createElementVNode"])("div",l,[Object(c["renderSlot"])(u.$slots,"nodeRight",{nodeData:t})])]})),_:3},8,["data","props"])])],64)}}},i=(n("ff53"),n("d959")),d=n.n(i);const b=d()(u,[["__scopeId","data-v-bbfb1404"]]);t["a"]=b},c5aa:function(e,t,n){"use strict";n.r(t);n("4e82"),n("b0c0"),n("caad"),n("2532"),n("4de4"),n("d3b7"),n("a434");var c=n("7a23"),o=n("062e"),a=n("076d"),r=n("fc88"),l=n("b775"),u=n("0ca1"),i=(n("0ad7"),n("2a40")),d=n("c4c3"),b=n("b591"),f=n("aa47"),s=function(e){return Object(c["pushScopeId"])("data-v-81a6c464"),e=e(),Object(c["popScopeId"])(),e},O={id:"selenium-case"},j={id:"case-List"},m={class:"caseList-top"},p=Object(c["createTextVNode"])(" 新增分类 "),v={class:"caseList-body"},V=["onClick"],h={key:0,class:"tree-node-right"},w=Object(c["createTextVNode"])("新增文件夹"),N=Object(c["createTextVNode"])("新增用例"),C=Object(c["createTextVNode"])("编辑"),x=Object(c["createTextVNode"])("复制"),y=Object(c["createTextVNode"])("删除"),k={key:1,class:"tree-node-right"},g=Object(c["createTextVNode"])(" 复制"),_=Object(c["createTextVNode"])("删除"),E=s((function(){return Object(c["createElementVNode"])("div",{id:"resize",title:"收缩侧边栏"},null,-1)})),I={id:"case-info"},B={id:"info-top"},T={class:"caseInfo-top"},S={class:"caseInfo-top-item"},D=Object(c["createTextVNode"])("用例名称："),U={class:"caseInfo-top-item"},z=Object(c["createTextVNode"])("备注："),F={class:"caseInfo-top-item"},A=Object(c["createTextVNode"])("下载Grid"),R={class:"caseInfo-top-item"},L=Object(c["createTextVNode"])("保存"),M={class:"caseInfo-top-item"},H=Object(c["createTextVNode"])("调试"),$=s((function(){return Object(c["createElementVNode"])("div",{class:"caseInfo-total"},null,-1)})),G={class:"caseInfo-action"},P=Object(c["createTextVNode"])("添加"),W=Object(c["createTextVNode"])("插入"),J={class:"caseInfo-list"},K={id:"stepAssert"},X={class:"web-assert"},Y=Object(c["createTextVNode"])("断言方式"),q={class:"web-assert"},Q=Object(c["createTextVNode"])("断言值"),Z={style:{display:"inline-flex"}},ee={style:{"text-align":"center"}},te={style:{position:"absolute",right:"20px",top:"10px",display:"inline-flex"}},ne={style:{"margin-top":"3px"}},ce={style:{"padding-left":"5px","margin-top":"3px"}},oe={style:{"padding-left":"5px"}},ae={class:"page-web-case"},re=s((function(){return Object(c["createElementVNode"])("div",{id:"info-resize",title:"收缩侧边栏"},null,-1)})),le={id:"Info-bottom"},ue=Object(c["createTextVNode"])("上拉查看用例调式结果"),ie={class:"showConsole"},de={key:0,style:{color:"#67C23A","font-weight":"bold"}},be=Object(c["createTextVNode"])("success"),fe={key:1,style:{color:"#F56C6C","font-weight":"bold"}},se=Object(c["createTextVNode"])("success"),Oe={class:"hidden"},je={class:"dialog-footer"},me=Object(c["createTextVNode"])("取消"),pe=Object(c["createTextVNode"])("确认"),ve={class:"dialog-footer"},Ve=Object(c["createTextVNode"])("取消"),he=Object(c["createTextVNode"])("确认"),we={class:"dialog-footer"},Ne=Object(c["createTextVNode"])("取消"),Ce=Object(c["createTextVNode"])("确认"),xe={setup:function(e){var t=i["a"].tabRowStyle("center"),n=i["a"].tabRowStyle("left"),s=function(e,t,n,c){var o=document.getElementById(c),a=document.getElementById(t),r=document.getElementById(n),l=document.getElementById(e);o.onmousedown=function(e){var t=e.clientX,n=o.offsetLeft;return document.onmousemove=function(e){var c=e.clientX,u=n+(c-t),i=l.clientWidth-o.offsetWidth;u=u<15?15:u,u=u>i-150?i-150:u,a.style.width=u+"px",r.style.left=u+"px",o.style.left=u-5+"px"},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null},!1}},xe=function(e,t,n,c){var o=document.getElementById(e),a=document.getElementById(t),r=document.getElementById(c),l=document.getElementById(n);r.onmousedown=function(e){var t=e.clientY,n=r.offsetTop;return document.onmousemove=function(e){var c=e.clientY,u=n+(c-t),i=o.clientHeight-r.offsetHeight;u=u<10?10:u,u=u>i-35?i-35:u,a.style.height=u+"px",l.style.top=u+"px",r.style.top=u-5+"px"},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null},!1}},ye=function(){var e=document.querySelector("#selenium-case-drop tbody");new f["a"](e,{animation:200,onEnd:function(e){var t=e.oldIndex,n=e.newIndex,c=et.value[t],o=et.value[t].sort,a=et.value[n].sort;et.value[t]=et.value[n],et.value[n]=c,et.value[t].sort=o,et.value[n].sort=a,console.log(o,a)}})},ke=Object(c["ref"])(!1),ge=Object(c["ref"])(!1),_e=Object(c["ref"])(!1),Ee=Object(c["reactive"])({id:null,name:"",remark:"",parentId:0,type:0,children:[]}),Ie=Object(c["reactive"])({id:null,name:"",remark:"",parentId:0,type:0,children:[],actionValue:""}),Be=function(){Ie.children=[],Ie.id=null,Ie.name="",Ie.parentId=0,Ie.remark="",Ie.type=0},Te=Object(c["ref"])(null),Se=Object(c["ref"])([]),De=function(){var e={caseType:1};l["a"].post("/api/webCase/caseList",e).then((function(e){Se.value=e.data}))},Ue=Object(c["ref"])(""),ze=function(e,t){return t.name.includes(e)||""===e},Fe=Object(c["ref"])();Object(c["watch"])((function(){return Ue.value}),(function(e){Fe.value.filter(e)}));var Ae=function(e,t){Be(),Te.value=e.id,0===t?ke.value=!0:ge.value=!0},Re=function(e){Ee.children=e.children,Ee.id=e.id,Ee.name=e.name,Ee.parentId=e.parentId,Ee.remark=e.remark,Ee.type=e.type,_e.value=!0},Le=function(e){l["a"].post("/api/webCase/update",e).then((function(e){De()}))},Me=function(){Le(Ee),_e.value=!1},He=function(e){var t={children:[],id:null,caseType:1,name:Ie.name,parentId:Te.value,remark:Ie.remark,type:e};Le(t),0===e?ke.value=!1:ge.value=!1},$e=function(e){i["a"].messageBox((function(){l["a"].post("/api/webCase/delete/",e).then((function(e){De()}))}),"确定要删除吗？")},Ge=function(e){l["a"].post("/api/webCase/deepCopy",e).then((function(e){De()}))},Pe=Object(c["reactive"])({id:null,name:"",remark:"",parentId:0,type:0,children:[]}),We=function(e){1===e.type&&(Pe.name=e.name,Pe.remark=e.remark,Pe.id=e.id,Pe.parentId=e.parentId,Pe.type=e.type,Pe.children=e.children,Xe(),tt(e.id),Je.value=!0)},Je=Object(c["ref"])(!1),Ke=Object(c["ref"])([]),Xe=function(){var e={type:0};b["a"].actionTree(e,(function(e){Ke.value=e.data}))},Ye=function(e){var t={actionId:e.id,actionSummary:e.actionKey,caseId:Pe.id,elementId:null,id:null,sort:et.value[et.value.length-1].sort+1,status:0,stepDescribe:e.name,actionValue:""};et.value.push(t)},qe=function(e,t){null!==e.id?i["a"].messageBox((function(){b["a"].delCaseStep(e.id,(function(e){et.value.splice(t,1)}))})):et.value.splice(t,1)},Qe=function(e){console.log(et.value.length);var t={actionId:e.actionId,actionSummary:e.actionSummary,caseId:e.caseId,elementId:e.elementId,id:null,sort:et.value.length+1,status:e.status,stepDescribe:e.stepDescribe,actionValue:e.actionValue};et.value.push(t)},Ze=Object(c["ref"])([]),et=Object(c["ref"])([]),tt=function(e){nt.value=e;var t={current:1,size:ot.value};b["a"].getCaseStep(e,(function(e){et.value=e.data.records,ct.value=e.data.total}),t)},nt=Object(c["ref"])(),ct=Object(c["ref"])(),ot=Object(c["ref"])(10),at=function(e){var t={current:e,size:ot.value};b["a"].getCaseStep(nt.value,(function(e){et.value=e.data.records,ct.value=e.data.total}),t)},rt={children:"children",label:"name",value:"id"},lt=Object(c["ref"])([]),ut=Object(c["ref"])([]),it=function(){var e={type:1};b["a"].getElementOption((function(e){lt.value=e.data}),e),b["a"].assertType((function(e){ut.value=e.data}))},dt=function(){Le(Pe),et.value.filter((function(e){null!==e.elementId&&void 0!==e.elementId&&void 0!==e.elementId.length&&(e.elementId=e.elementId[e.elementId.length-1])})),b["a"].upWebCaseStepList(et.value,(function(e){i["a"].toast(e),tt(Pe.id)}))},bt=Object(c["ref"])(new FormData),ft=Object(c["ref"])(),st=function(){var e=ft.value.files[0];bt.value.append("file",e),l["a"].post("/api/test/upload",bt.value)},Ot=function(){b["a"].downloadGrid((function(e){i["a"].downloadFile(e,"seleniumGrid.jar")}))},jt=Object(c["ref"])(""),mt=[{name:"Chrome",value:"Chrome"},{name:"Firefox",value:"Firefox"}],pt=function(e){if(""===jt.value)i["a"].myToast("warning","请先选择执行机");else{var t={device:jt.value,type:1};b["a"].debugCase(e,t,(function(e){Vt.value=e.data,vt.value=!0}))}},vt=Object(c["ref"])(!1),Vt=Object(c["ref"])();return Object(c["onMounted"])((function(){s("selenium-case","case-List","case-info","resize"),xe("case-info","info-top","Info-bottom","info-resize"),ye()})),Object(c["onUnmounted"])((function(){})),Object(c["onBeforeMount"])((function(){De(),it()})),function(e,l){var i=Object(c["resolveComponent"])("el-button"),b=Object(c["resolveComponent"])("el-input"),f=Object(c["resolveComponent"])("el-dropdown-item"),s=Object(c["resolveComponent"])("el-dropdown-menu"),xe=Object(c["resolveComponent"])("el-tree"),ye=Object(c["resolveComponent"])("el-tag"),Be=Object(c["resolveComponent"])("el-option"),Te=Object(c["resolveComponent"])("el-select"),De=Object(c["resolveComponent"])("el-table-column"),Le=Object(c["resolveComponent"])("el-cascader"),Xe=Object(c["resolveComponent"])("el-icon"),tt=Object(c["resolveComponent"])("el-switch"),nt=Object(c["resolveComponent"])("el-table"),it=Object(c["resolveComponent"])("el-form-item"),bt=Object(c["resolveComponent"])("el-form"),ht=Object(c["resolveComponent"])("el-dialog");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("div",O,[Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("div",m,[Object(c["createVNode"])(b,{modelValue:Ue.value,"onUpdate:modelValue":l[1]||(l[1]=function(e){return Ue.value=e}),placeholder:"过滤分类名称"},{append:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,{onClick:l[0]||(l[0]=function(e){return Object(c["isRef"])(ke)?ke.value=!0:ke=!0})},{default:Object(c["withCtx"])((function(){return[p]})),_:1})]})),_:1},8,["modelValue"])]),Object(c["createElementVNode"])("div",v,[Object(c["createVNode"])(xe,{ref:function(e,t){t["treeRef"]=e,Fe.value=e},data:Se.value,"node-key":"id","filter-node-method":ze},{default:Object(c["withCtx"])((function(e){e.node;var t=e.data;return[Object(c["createElementVNode"])("div",{class:"tree-node-left",onClick:function(e){return We(t)},style:{width:"90%"}},Object(c["toDisplayString"])(t.name),9,V),0===t.type?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",h,[Object(c["createVNode"])(Object(c["unref"])(u["a"]),null,{body:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(s,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(f,{onClick:function(e){return Ae(t,0)}},{default:Object(c["withCtx"])((function(){return[w]})),_:2},1032,["onClick"]),Object(c["createVNode"])(f,{onClick:function(e){return Ae(t,1)}},{default:Object(c["withCtx"])((function(){return[N]})),_:2},1032,["onClick"]),Object(c["createVNode"])(f,{onClick:function(e){return Re(t)}},{default:Object(c["withCtx"])((function(){return[C]})),_:2},1032,["onClick"]),Object(c["createVNode"])(f,{onClick:function(e){return Ge(t)}},{default:Object(c["withCtx"])((function(){return[x]})),_:2},1032,["onClick"]),Object(c["createVNode"])(f,{onClick:function(e){return $e(t)}},{default:Object(c["withCtx"])((function(){return[y]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:2},1024)])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",k,[Object(c["createVNode"])(Object(c["unref"])(u["a"]),null,{body:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(s,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(f,{onClick:function(e){return Ge(t)}},{default:Object(c["withCtx"])((function(){return[g]})),_:2},1032,["onClick"]),Object(c["createVNode"])(f,{onClick:function(e){return $e(t)}},{default:Object(c["withCtx"])((function(){return[_]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:2},1024)]))]})),_:1},8,["data"])])]),E,Object(c["withDirectives"])(Object(c["createElementVNode"])("div",I,[Object(c["createElementVNode"])("div",B,[Object(c["createElementVNode"])("div",T,[Object(c["createElementVNode"])("div",S,[D,Object(c["createVNode"])(b,{modelValue:Object(c["unref"])(Pe).name,"onUpdate:modelValue":l[2]||(l[2]=function(e){return Object(c["unref"])(Pe).name=e}),style:{width:"200px"}},null,8,["modelValue"])]),Object(c["createElementVNode"])("div",U,[z,Object(c["createVNode"])(b,{modelValue:Object(c["unref"])(Pe).remark,"onUpdate:modelValue":l[3]||(l[3]=function(e){return Object(c["unref"])(Pe).remark=e}),style:{width:"200px"}},null,8,["modelValue"])]),Object(c["createElementVNode"])("div",F,[Object(c["createVNode"])(i,{type:"primary",onClick:Ot},{default:Object(c["withCtx"])((function(){return[A]})),_:1})]),Object(c["createElementVNode"])("div",R,[Object(c["createVNode"])(i,{type:"primary",onClick:dt},{default:Object(c["withCtx"])((function(){return[L]})),_:1})]),Object(c["createElementVNode"])("div",M,[Object(c["createVNode"])(i,{type:"warning",onClick:l[4]||(l[4]=function(e){return pt(Object(c["unref"])(Pe).id)})},{default:Object(c["withCtx"])((function(){return[H]})),_:1})])]),$,Object(c["createElementVNode"])("div",G,[Object(c["createVNode"])(Object(c["unref"])(d["a"]),{treeData:Ke.value},{nodeRight:Object(c["withCtx"])((function(e){return[0!==e.nodeData.parentId?(Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:0,type:"text",onClick:function(t){return Ye(e.nodeData)}},{default:Object(c["withCtx"])((function(){return[P]})),_:2},1032,["onClick"])):Object(c["createCommentVNode"])("",!0),0!==e.nodeData.parentId?(Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:1,type:"text",onClick:l[5]||(l[5]=function(){})},{default:Object(c["withCtx"])((function(){return[W]})),_:1})):Object(c["createCommentVNode"])("",!0)]})),_:1},8,["treeData"])]),Object(c["createElementVNode"])("div",J,[Object(c["createVNode"])(nt,{data:et.value,border:"",id:"selenium-case-drop","header-cell-style":Object(c["unref"])(t),"cell-style":Object(c["unref"])(n),"row-key":function(e){return e.id},"expand-row-keys":Ze.value},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(De,{type:"expand"},{default:Object(c["withCtx"])((function(e){return[Object(c["createElementVNode"])("div",K,[Object(c["createElementVNode"])("div",X,[Object(c["createVNode"])(ye,null,{default:Object(c["withCtx"])((function(){return[Y]})),_:1}),Object(c["createVNode"])(Te,{modelValue:e.row.assertType,"onUpdate:modelValue":function(t){return e.row.assertType=t},clearable:""},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(ut.value,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(Be,{key:e.value,label:e.name,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]),Object(c["createElementVNode"])("div",q,[Object(c["createVNode"])(ye,null,{default:Object(c["withCtx"])((function(){return[Q]})),_:1}),Object(c["createVNode"])(b,{modelValue:e.row.assertValue,"onUpdate:modelValue":function(t){return e.row.assertValue=t},clearable:"",placeholder:"请输入断言数据"},null,8,["modelValue","onUpdate:modelValue"])])])]})),_:1}),Object(c["createVNode"])(De,{width:"20"},{default:Object(c["withCtx"])((function(e){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$index+1),1)]})),_:1}),Object(c["createVNode"])(De,{prop:"describe",label:"描述",width:"250"},{default:Object(c["withCtx"])((function(e){return[Object(c["createVNode"])(b,{modelValue:e.row.stepDescribe,"onUpdate:modelValue":function(t){return e.row.stepDescribe=t}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(c["createVNode"])(De,{prop:"elementId",label:"页面元素"},{default:Object(c["withCtx"])((function(e){return[Object(c["createVNode"])(Le,{"popper-options":{boundariesElement:"viewport",removeOnDestroy:!0},"show-all-levels":!1,clearable:"",filterable:"",modelValue:e.row.elementId,"onUpdate:modelValue":function(t){return e.row.elementId=t},options:lt.value,props:rt},{default:Object(c["withCtx"])((function(e){e.node;var t=e.data;return[Object(c["createElementVNode"])("div",Z,Object(c["toDisplayString"])(t.name),1),Object(c["withDirectives"])(Object(c["createElementVNode"])("div",{style:{display:"inline-flex",color:"#409EFF"}},"("+Object(c["toDisplayString"])(t.children.length)+")",513),[[c["vShow"],0!==t.children.length]])]})),_:2},1032,["modelValue","onUpdate:modelValue","options"])]})),_:1}),Object(c["createVNode"])(De,{prop:"actionSummary",label:"Action",width:"150"},{default:Object(c["withCtx"])((function(e){return[Object(c["createElementVNode"])("div",ee,[Object(c["createVNode"])(i,{type:"success",disabled:""},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.row.actionSummary),1)]})),_:2},1024)])]})),_:1}),Object(c["createVNode"])(De,{prop:"actionValue",label:"Action参数"},{default:Object(c["withCtx"])((function(e){return["execPython"===e.row.actionSummary?(Object(c["openBlock"])(),Object(c["createElementBlock"])("input",{key:0,type:"file",onChange:st,ref:function(e,t){t["inputer"]=e,ft.value=e}},null,544)):(Object(c["openBlock"])(),Object(c["createBlock"])(b,{key:1,modelValue:e.row.actionValue,"onUpdate:modelValue":function(t){return e.row.actionValue=t}},null,8,["modelValue","onUpdate:modelValue"]))]})),_:1}),Object(c["createVNode"])(De,{label:"操作",width:"100px"},{default:Object(c["withCtx"])((function(e){return[Object(c["createElementVNode"])("div",te,[Object(c["createElementVNode"])("div",ne,[Object(c["createVNode"])(Xe,{onClick:function(t){return Qe(e.row)}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(a["a"]))]})),_:2},1032,["onClick"])]),Object(c["createElementVNode"])("div",ce,[Object(c["createVNode"])(Xe,{onClick:function(t){return qe(e.row,e.$index)}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(r["a"]))]})),_:2},1032,["onClick"])]),Object(c["createElementVNode"])("div",oe,[Object(c["createVNode"])(tt,{modelValue:e.row.status,"onUpdate:modelValue":function(t){return e.row.status=t},"active-color":"#13ce66","inactive-color":"#ff4949","active-value":0,"inactive-value":1},null,8,["modelValue","onUpdate:modelValue"])])])]})),_:1})]})),_:1},8,["data","header-cell-style","cell-style","row-key","expand-row-keys"]),Object(c["createElementVNode"])("div",ae,[Object(c["createVNode"])(Object(c["unref"])(o["a"]),{total:ct.value,pageSize:ot.value,onPaging:at},null,8,["total","pageSize"])])])]),re,Object(c["createElementVNode"])("div",le,[Object(c["createVNode"])(Te,{placeholder:"请选择执行机",modelValue:jt.value,"onUpdate:modelValue":l[6]||(l[6]=function(e){return jt.value=e})},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(mt,(function(e){return Object(c["createVNode"])(Be,{key:e.name,label:e.name,value:e.value},null,8,["label","value"])})),64))]})),_:1},8,["modelValue"]),Object(c["createVNode"])(ye,{type:"success"},{default:Object(c["withCtx"])((function(){return[ue]})),_:1}),Object(c["withDirectives"])(Object(c["createElementVNode"])("div",ie,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Vt.value,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[0===e.code?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",de,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t+1)+" ",1),Object(c["createVNode"])(ye,{type:"success"},{default:Object(c["withCtx"])((function(){return[be]})),_:1})])):Object(c["createCommentVNode"])("",!0),1===e.code?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",fe,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t+1)+" ",1),Object(c["createVNode"])(ye,{type:"danger"},{default:Object(c["withCtx"])((function(){return[se]})),_:1})])):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",null,Object(c["toDisplayString"])(e.msg),1)])})),256))],512),[[c["vShow"],vt.value]])])],512),[[c["vShow"],Object(c["unref"])(Je)]])]),Object(c["createElementVNode"])("div",Oe,[Object(c["createVNode"])(ht,{modelValue:Object(c["unref"])(ke),"onUpdate:modelValue":l[11]||(l[11]=function(e){return Object(c["isRef"])(ke)?ke.value=e:ke=e}),title:"新增文件夹",width:"30%"},{footer:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("span",je,[Object(c["createVNode"])(i,{onClick:l[9]||(l[9]=function(e){return Object(c["isRef"])(ke)?ke.value=!1:ke=!1})},{default:Object(c["withCtx"])((function(){return[me]})),_:1}),Object(c["createVNode"])(i,{type:"primary",onClick:l[10]||(l[10]=function(e){return He(0)})},{default:Object(c["withCtx"])((function(){return[pe]})),_:1})])]})),default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(bt,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(it,{label:"名称"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{modelValue:Object(c["unref"])(Ie).name,"onUpdate:modelValue":l[7]||(l[7]=function(e){return Object(c["unref"])(Ie).name=e})},null,8,["modelValue"])]})),_:1}),Object(c["createVNode"])(it,{label:"备注"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{modelValue:Object(c["unref"])(Ie).remark,"onUpdate:modelValue":l[8]||(l[8]=function(e){return Object(c["unref"])(Ie).remark=e}),rows:1,type:"textarea"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),Object(c["createVNode"])(ht,{modelValue:Object(c["unref"])(_e),"onUpdate:modelValue":l[15]||(l[15]=function(e){return Object(c["isRef"])(_e)?_e.value=e:_e=e}),title:"编辑文件夹",width:"30%"},{footer:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("span",ve,[Object(c["createVNode"])(i,{onClick:l[14]||(l[14]=function(e){return Object(c["isRef"])(_e)?_e.value=!1:_e=!1})},{default:Object(c["withCtx"])((function(){return[Ve]})),_:1}),Object(c["createVNode"])(i,{type:"primary",onClick:Me},{default:Object(c["withCtx"])((function(){return[he]})),_:1})])]})),default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(bt,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(it,{label:"名称"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{modelValue:Object(c["unref"])(Ee).name,"onUpdate:modelValue":l[12]||(l[12]=function(e){return Object(c["unref"])(Ee).name=e})},null,8,["modelValue"])]})),_:1}),Object(c["createVNode"])(it,{label:"备注"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{modelValue:Object(c["unref"])(Ee).remark,"onUpdate:modelValue":l[13]||(l[13]=function(e){return Object(c["unref"])(Ee).remark=e}),rows:1,type:"textarea"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),Object(c["createVNode"])(ht,{modelValue:Object(c["unref"])(ge),"onUpdate:modelValue":l[20]||(l[20]=function(e){return Object(c["isRef"])(ge)?ge.value=e:ge=e}),title:"新增用例",width:"30%"},{footer:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("span",we,[Object(c["createVNode"])(i,{onClick:l[18]||(l[18]=function(e){return Object(c["isRef"])(ge)?ge.value=!1:ge=!1})},{default:Object(c["withCtx"])((function(){return[Ne]})),_:1}),Object(c["createVNode"])(i,{type:"primary",onClick:l[19]||(l[19]=function(e){return He(1)})},{default:Object(c["withCtx"])((function(){return[Ce]})),_:1})])]})),default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(bt,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(it,{label:"名称"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{modelValue:Object(c["unref"])(Ie).name,"onUpdate:modelValue":l[16]||(l[16]=function(e){return Object(c["unref"])(Ie).name=e})},null,8,["modelValue"])]})),_:1}),Object(c["createVNode"])(it,{label:"备注"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{modelValue:Object(c["unref"])(Ie).remark,"onUpdate:modelValue":l[17]||(l[17]=function(e){return Object(c["unref"])(Ie).remark=e}),rows:1,type:"textarea"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])])],64)}}},ye=(n("6c52"),n("d959")),ke=n.n(ye);const ge=ke()(xe,[["__scopeId","data-v-81a6c464"]]);t["default"]=ge},d998:function(e,t,n){var c=n("342f");e.exports=/MSIE|Trident/.test(c)},ff53:function(e,t,n){"use strict";n("9148")}}]);
//# sourceMappingURL=chunk-751a46ac.96d8ece1.js.map