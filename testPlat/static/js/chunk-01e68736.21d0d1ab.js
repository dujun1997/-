(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01e68736"],{"07c8":function(e,t,n){},"646b":function(e,t,n){"use strict";n("07c8")},aae8:function(e,t,n){"use strict";n.r(t);var c=n("1da1"),a=(n("96cf"),n("fb6a"),n("4de4"),n("d3b7"),n("a434"),n("159b"),n("b0c0"),n("25f0"),n("caad"),n("2532"),n("7a23")),o=n("062e"),l=n("076d"),r=n("0480"),i=n("fc88"),u=n("f592"),d=n("2a40"),b=n("c9a1"),f=n("3ef4"),s=n("b775"),p={class:"Web-page"},j={class:"my-page"},O={class:"page-top"},m=Object(a["createTextVNode"])("添加模块"),h={class:"page-List"},w={style:{"padding-top":"10px"}},v={style:{"text-align":"right"}},V=Object(a["createTextVNode"])("save"),N=Object(a["createTextVNode"])("close"),x={class:"page-bottom"},y={class:"my-element"},g={class:"element-function",style:{display:"flex"}},C=Object(a["createTextVNode"])("查询"),k={class:"element-top"},_=Object(a["createTextVNode"])("重置"),E={class:"element-top"},B=Object(a["createTextVNode"])("保存"),T={class:"element-top"},I=Object(a["createTextVNode"])("新增元素"),U={class:"element-list"},S=Object(a["createTextVNode"])("保存"),D=Object(a["createTextVNode"])("复制　 "),z=Object(a["createTextVNode"])("删除"),W={class:"element-bottom"},P={setup:function(e){var t=Object(a["ref"])(""),n=Object(a["ref"])(!1),P=Object(a["ref"])(0),R=Object(a["ref"])(1),L=[],F=function(e){A.value;void 0===e&&(e=1),R.value=e,A.value=L.slice(10*(R.value-1),10*R.value)},J=d["a"].tabRowStyle("left"),M=Object(a["ref"])(""),A=Object(a["ref"])([]),q=Object(a["ref"])([]),G=function(){var e={type:1};s["a"].get("/api/webPage/pageList",{params:e}).then((function(e){A.value=e.data,L=e.data,P.value=e.data.length}))},H=function(e){e.show=!1,s["a"].post("/api/webPage/update",e).then((function(e){G(),d["a"].toast(e)}))},K=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].delete("/api/webPage/delete/"+t.id).then((function(e){G()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:b["a"].confirm("确定要进行删除吗?","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){Object(f["a"])({type:"success",message:"Delete completed"}),K(t),""===t.id&&X(t)})).catch((function(){Object(f["a"])({type:"info",message:"Delete canceled"})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(e){e.show=!1;var t=0,n=A.value;if(0===e.parentId)n.filter((function(n,c){n.id===e.id&&(t=c)})),n.splice(t,1);else{var c=0;n.filter((function(t,n){t.id===e.parentId&&(c=n)})),n[c].children.forEach((function(e,t){""===e.id&&n[c].children.splice(t,1)}))}},Y=function(e){var t=e.children;t.forEach((function(e){e.id="",e.parentId=""}));var n={id:"",name:e.name,show:!0,parentId:0,children:t};if(0===e.parentId)A.value.push(n);else{var c=A.value,a=0;c.filter((function(t,n){t["id"]===e.parentId&&(a=n)}));var o={id:"",name:e.name,show:!0,parentId:c[a]["id"],children:[]};c[a]["children"].push(o)}},Z=function(){A.value.push({id:"",name:"",type:1,show:!0,parentId:0,children:[]})},$=function(e){q.value[0]=e.id.toString();var t={id:"",name:"",type:1,show:!0,parentId:e["id"],children:[]};e.children.push(t)},ee=function(e){if(0!==e.parentId){n.value=!0,ue.value=e.id;var t={pageId:ue.value,current:1,size:ae};ne(t)}};Object(a["watch"])((function(){return M.value}),(function(e,t){var n=[];L.filter((function(t){t.name.includes(e)?n.push(t):t.children.forEach((function(t){t.name.includes(e)&&n.push(t)}))}));A.value=""!==e?n:L})),Object(a["watchEffect"])((function(){F(R.value)})),Object(a["onMounted"])((function(){}));var te=Object(a["ref"])([]),ne=function(e){void 0===e&&(e={pageId:ue.value,current:1,size:ae}),""!==ue.value&&s["a"].post("/api/element/list",e).then((function(e){console.log(e.data),te.value=e.data.records,ce.value=e.data.total}))},ce=Object(a["ref"])(0),ae=15,oe=Object(a["ref"])([]),le=Object(a["ref"])([]),re=Object(a["ref"])([]),ie=function(){s["a"].post("/api/config/locationWay").then((function(e){oe.value=e.data})),s["a"].post("/api/config/elementType").then((function(e){re.value=e.data})),s["a"].post("/api/webPage/conditionsWay").then((function(e){le.value=e.data}))},ue=Object(a["ref"])(null),de=function(e){var t={pageId:ue.value,current:e,size:ae};ne(t)},be=function(){var e={elementName:"",locationWay:"",locationValue:"",remark:"",pageId:ue.value,conditions:""};te.value.push(e)},fe=function(){s["a"].post("/api/element/updateAll",te.value).then((function(e){d["a"].toast(e),ne()}))},se=function(e){s["a"].post("/api/element/update",e).then((function(e){d["a"].toast(e),ne()}))},pe=function(e){var t={id:null,elementName:e.elementName,locationWay:e.locationWay,locationValue:e.locationValue,remark:e.remark,pageId:ue.value,conditions:e.conditions};te.value.push(t)},je=function(e){null==e?d["a"].messageBox((function(){te.value=te.value.filter((function(e,t){return null!==e.id}))}),"未保存确定要删除吗？"):d["a"].messageBox((function(){s["a"].delete("/api/element/delEle/"+e).then((function(e){ne()}))}))};return Object(a["onBeforeMount"])((function(){G(),ie()})),function(e,c){var d=Object(a["resolveComponent"])("el-button"),b=Object(a["resolveComponent"])("el-input"),f=Object(a["resolveComponent"])("el-table-column"),s=Object(a["resolveComponent"])("el-table"),R=Object(a["resolveComponent"])("el-option"),L=Object(a["resolveComponent"])("el-select"),G=Object(a["resolveComponent"])("el-tooltip"),K=Object(a["resolveComponent"])("el-button-group");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",p,[Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("div",O,[Object(a["createVNode"])(d,{size:"small",onClick:Z,plain:""},{default:Object(a["withCtx"])((function(){return[m]})),_:1})]),Object(a["createElementVNode"])("div",h,[Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(b,{modelValue:Object(a["unref"])(M),"onUpdate:modelValue":c[0]||(c[0]=function(e){return Object(a["isRef"])(M)?M.value=e:M=e}),placeholder:"请输入页面名称","prefix-icon":e.Search},null,8,["modelValue","prefix-icon"])]),Object(a["createElementVNode"])("div",w,[Object(a["createVNode"])(s,{data:Object(a["unref"])(A),"highlight-current-row":"",stripe:"","show-header":!1,"row-key":"id","expand-row-keys":Object(a["unref"])(q),"cell-style":Object(a["unref"])(J),onRowClick:ee,type:"expand"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(f,{label:"name"},{default:Object(a["withCtx"])((function(e){return[Object(a["withDirectives"])(Object(a["createVNode"])(b,{style:{"margin-bottom":"20px"},size:"small",placeholder:"Please input",modelValue:e.row.name,"onUpdate:modelValue":function(t){return e.row.name=t}},null,8,["modelValue","onUpdate:modelValue"]),[[a["vShow"],e.row.show]]),Object(a["withDirectives"])(Object(a["createElementVNode"])("span",{style:{width:"400px"}},Object(a["toDisplayString"])(e.row.name),513),[[a["vShow"],!e.row.show]])]})),_:1}),Object(a["createVNode"])(f,{label:"Edit",width:""},{default:Object(a["withCtx"])((function(e){return[Object(a["createElementVNode"])("div",v,[Object(a["withDirectives"])(Object(a["createVNode"])(Object(a["unref"])(l["a"]),{style:{width:"1em",height:"1em","margin-right":"8px"},onClick:function(t){return Y(e.row)}},null,8,["onClick"]),[[a["vShow"],!e.row.show]]),Object(a["withDirectives"])(Object(a["createVNode"])(Object(a["unref"])(r["a"]),{style:{width:"1em",height:"1em","margin-right":"8px"},onClick:function(t){return e.row.show=!0}},null,8,["onClick"]),[[a["vShow"],!e.row.show]]),Object(a["withDirectives"])(Object(a["createVNode"])(Object(a["unref"])(i["a"]),{style:{width:"1em",height:"1em","margin-right":"8px"},onClick:function(t){return Q(e.row)}},null,8,["onClick"]),[[a["vShow"],!e.row.show]]),Object(a["withDirectives"])(Object(a["createVNode"])(Object(a["unref"])(u["a"]),{style:{width:"1em",height:"1em","margin-right":"8px"},onClick:function(t){return $(e.row)}},null,8,["onClick"]),[[a["vShow"],!e.row.show]]),Object(a["withDirectives"])(Object(a["createVNode"])(d,{onClick:function(t){return H(e.row)},type:"primary",size:"small"},{default:Object(a["withCtx"])((function(){return[V]})),_:2},1032,["onClick"]),[[a["vShow"],e.row.show]]),Object(a["withDirectives"])(Object(a["createVNode"])(d,{onClick:function(t){return X(e.row)},type:"warning",size:"small"},{default:Object(a["withCtx"])((function(){return[N]})),_:2},1032,["onClick"]),[[a["vShow"],e.row.show]])])]})),_:1})]})),_:1},8,["data","expand-row-keys","cell-style"])])]),Object(a["createElementVNode"])("div",x,[Object(a["createVNode"])(Object(a["unref"])(o["a"]),{total:Object(a["unref"])(P),onPaging:F},null,8,["total"])])]),Object(a["withDirectives"])(Object(a["createElementVNode"])("div",y,[Object(a["createElementVNode"])("div",g,[Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(b,{modelValue:Object(a["unref"])(t),"onUpdate:modelValue":c[1]||(c[1]=function(e){return Object(a["isRef"])(t)?t.value=e:t=e}),placeholder:"Please input"},{append:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(d,null,{default:Object(a["withCtx"])((function(){return[C]})),_:1})]})),_:1},8,["modelValue"])]),Object(a["createElementVNode"])("div",k,[Object(a["createVNode"])(d,null,{default:Object(a["withCtx"])((function(){return[_]})),_:1})]),Object(a["createElementVNode"])("div",E,[Object(a["createVNode"])(d,{type:"primary",onClick:fe},{default:Object(a["withCtx"])((function(){return[B]})),_:1})]),Object(a["createElementVNode"])("div",T,[Object(a["createVNode"])(d,{type:"success",onClick:be},{default:Object(a["withCtx"])((function(){return[I]})),_:1})])]),Object(a["createElementVNode"])("div",U,[Object(a["createVNode"])(s,{data:Object(a["unref"])(te),stripe:"","row-key":"id","cell-style":Object(a["unref"])(J),"header-row-style":Object(a["unref"])(J)},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(f,{label:"elementName",prop:"elementName"},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(b,{modelValue:e.row.elementName,"onUpdate:modelValue":function(t){return e.row.elementName=t}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(a["createVNode"])(f,{label:"elementType",prop:"elementType"},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(L,{modelValue:e.row.elementType,"onUpdate:modelValue":function(t){return e.row.elementType=t},filterable:""},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(re.value,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:e.value,label:e.value,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(a["createVNode"])(f,{label:"locationWay",prop:"locationWay"},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(L,{modelValue:e.row.locationWay,"onUpdate:modelValue":function(t){return e.row.locationWay=t},filterable:""},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(oe.value,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:e.value,label:e.value,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(a["createVNode"])(f,{label:"显示等待方式",prop:"conditions"},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(L,{modelValue:e.row.conditions,"onUpdate:modelValue":function(t){return e.row.conditions=t},filterable:""},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(le.value,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:e.name,label:e.value,value:e.name},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(a["createVNode"])(f,{label:"locationValue",prop:"locationValue"},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(b,{modelValue:e.row.locationValue,"onUpdate:modelValue":function(t){return e.row.locationValue=t}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(a["createVNode"])(f,{label:"remark",prop:"remark"},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(G,{effect:"light",placement:"top"},{content:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.row.remark),1)]})),default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(b,{type:"textarea",rows:1,clearable:"",modelValue:e.row.remark,"onUpdate:modelValue":function(t){return e.row.remark=t}},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024)]})),_:1}),Object(a["createVNode"])(f,{label:"Edit"},{default:Object(a["withCtx"])((function(e){return[Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(K,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(d,{size:"mini",type:"primary",style:{width:"40%"},onClick:function(t){return se(e.row)}},{default:Object(a["withCtx"])((function(){return[S]})),_:2},1032,["onClick"]),Object(a["createVNode"])(d,{size:"mini",type:"text",onClick:function(t){return pe(e.row)}},{default:Object(a["withCtx"])((function(){return[D]})),_:2},1032,["onClick"]),Object(a["createVNode"])(d,{size:"mini",type:"text",onClick:function(t){return je(e.row.id)}},{default:Object(a["withCtx"])((function(){return[z]})),_:2},1032,["onClick"])]})),_:2},1024)])]})),_:1})]})),_:1},8,["data","cell-style","header-row-style"])]),Object(a["createElementVNode"])("div",W,[Object(a["createVNode"])(Object(a["unref"])(o["a"]),{total:Object(a["unref"])(ce),onPaging:de,pageSize:ae},null,8,["total"])])],512),[[a["vShow"],Object(a["unref"])(n)]])])}}},R=(n("646b"),n("d959")),L=n.n(R);const F=L()(P,[["__scopeId","data-v-63a5ac9e"]]);t["default"]=F}}]);
//# sourceMappingURL=chunk-01e68736.21d0d1ab.js.map