(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c413b00"],{5757:function(e,t,c){"use strict";c("e754")},cbd1:function(e,t,c){"use strict";c.r(t);c("b0c0");var o=c("7a23"),a=function(e){return Object(o["pushScopeId"])("data-v-2fd35019"),e=e(),Object(o["popScopeId"])(),e},l={class:"reportDetail"},n={class:"top"},r=a((function(){return Object(o["createElementVNode"])("span",{style:{"font-size":"13px",color:"#303133","font-weight":"bold"}},"测试报告概述",-1)})),s={class:"top-left"},i={class:"top-right"},d={class:"case_statistics"},u={class:"bottom"},b={class:"bottom-left"},p=a((function(){return Object(o["createElementVNode"])("span",null,"自动化场景用例",-1)})),O={id:"caseDataStep"},j={key:0,id:"assert-detail"},f={class:"web-case-console"},m={key:0,style:{color:"#67C23A","font-weight":"bold"}},w=Object(o["createTextVNode"])("success"),h={key:1,style:{color:"#F56C6C","font-weight":"bold"}},V=Object(o["createTextVNode"])("success"),N=a((function(){return Object(o["createElementVNode"])("div",{style:{height:"20px"}},null,-1)})),C={id:"webCase-assert"};function y(e,t,c,a,y,v){var _=Object(o["resolveComponent"])("planReportTab"),x=Object(o["resolveComponent"])("pieTools"),R=Object(o["resolveComponent"])("el-collapse-item"),g=Object(o["resolveComponent"])("el-collapse"),k=Object(o["resolveComponent"])("el-badge"),T=Object(o["resolveComponent"])("ApiTree"),D=Object(o["resolveComponent"])("el-tab-pane"),S=Object(o["resolveComponent"])("el-tabs"),E=Object(o["resolveComponent"])("el-tag"),I=Object(o["resolveComponent"])("el-table-column"),B=Object(o["resolveComponent"])("el-table"),U=Object(o["resolveComponent"])("el-option"),A=Object(o["resolveComponent"])("el-select");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[Object(o["createElementVNode"])("div",n,[Object(o["createVNode"])(g,{"model-value":"first",accordion:""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(R,{name:"first"},{title:Object(o["withCtx"])((function(){return[r]})),default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",s,[Object(o["createVNode"])(_,{resultDetail:y.report_planResult},null,8,["resultDetail"])]),Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("div",d,[y.showPie?(Object(o["openBlock"])(),Object(o["createBlock"])(x,{key:0,title:"场景用例数据统计",series_name:"个数",legend_data:y.legend_data,series_data:y.series_dataCase},null,8,["legend_data","series_data"])):Object(o["createCommentVNode"])("",!0)])])]})),_:1})]})),_:1})]),Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("div",b,[Object(o["createVNode"])(S,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(D,null,{label:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(k,{value:y.caseRunResult.length,type:"primary",class:"item"},{default:Object(o["withCtx"])((function(){return[p]})),_:1},8,["value"])])]})),default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(T,{TreeData:y.caseRunResult,labelName:"caseName",onApiInfo:v.reportInfo},null,8,["TreeData","onApiInfo"])]})),_:1})]})),_:1})]),Object(o["createElementVNode"])("div",{class:"bottom-right",style:Object(o["normalizeStyle"])(y.showReportInfo)},[Object(o["createVNode"])(S,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(D,{label:"用例信息"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",O,[Object(o["createVNode"])(B,{data:y.caseDataStep,style:{width:"100%"},"header-cell-style":y.commonUtils.tabRowStyle("left"),"row-style":y.commonUtils.tabRowStyle("left")},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(I,{type:"expand"},{default:Object(o["withCtx"])((function(e){return[null!==e.row.assertType?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",j,[Object(o["createVNode"])(E,null,{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])("断言方式:"+Object(o["toDisplayString"])(e.row.assertType),1)]})),_:2},1024),Object(o["createVNode"])(E,null,{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])("断言值:"+Object(o["toDisplayString"])(e.row.assertValue),1)]})),_:2},1024)])):Object(o["createCommentVNode"])("",!0)]})),_:1}),Object(o["createVNode"])(I,{prop:"sort",label:"步骤ID"},{default:Object(o["withCtx"])((function(e){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.row.id),1)]})),_:1}),Object(o["createVNode"])(I,{prop:"stepDescribe",label:"步骤描述",width:"180"}),Object(o["createVNode"])(I,{prop:"actionSummary",label:"操作描述"}),Object(o["createVNode"])(I,{prop:"elementId",label:"操作元素"}),Object(o["createVNode"])(I,{prop:"actionValue",label:"操作值"})]})),_:1},8,["data","header-cell-style","row-style"])])]})),_:1}),Object(o["createVNode"])(D,{label:"用例执行信息"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",f,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(y.consoleData,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[0===e.code?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",m,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t+1)+" ",1),Object(o["createVNode"])(E,{type:"success"},{default:Object(o["withCtx"])((function(){return[w]})),_:1})])):Object(o["createCommentVNode"])("",!0),1===e.code?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",h,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t+1)+" ",1),Object(o["createVNode"])(E,{type:"danger"},{default:Object(o["withCtx"])((function(){return[V]})),_:1})])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",null,Object(o["toDisplayString"])(e.msg),1),N])})),256))])]})),_:1}),Object(o["createVNode"])(D,{label:"断言结果"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",C,[Object(o["createVNode"])(B,{data:y.assertConsole,style:{width:"100%"},"header-cell-style":y.commonUtils.tabRowStyle("left"),"row-style":y.commonUtils.tabRowStyle("left")},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(I,{prop:"stepId",label:"步骤ID"},{default:Object(o["withCtx"])((function(e){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.row.stepId),1)]})),_:1}),Object(o["createVNode"])(I,{prop:"assertType",label:"断言方式"},{default:Object(o["withCtx"])((function(e){return[Object(o["createVNode"])(A,{disabled:"",modelValue:e.row.assertType,"onUpdate:modelValue":function(t){return e.row.assertType=t}},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(y.assertTypeOptions,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(U,{key:e.value,label:e.name,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(o["createVNode"])(I,{prop:"expectValue",label:"期望值"}),Object(o["createVNode"])(I,{prop:"realityValue",label:"断言值"}),Object(o["createVNode"])(I,{prop:"result",label:"断言结果"},{default:Object(o["withCtx"])((function(e){return[Object(o["withDirectives"])(Object(o["createVNode"])(E,{type:"success",effect:"dark"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.row.result),1)]})),_:2},1536),[[o["vShow"],!0===e.row.result]]),Object(o["withDirectives"])(Object(o["createVNode"])(E,{type:"danger",effect:"dark"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.row.result),1)]})),_:2},1536),[[o["vShow"],!1===e.row.result]])]})),_:1}),Object(o["createVNode"])(I,{prop:"msg",label:"msg"})]})),_:1},8,["data","header-cell-style","row-style"])])]})),_:1})]})),_:1})],4)])])}var v=c("5c04"),_=c("2a09"),x=c("4274"),R=c("7a40"),g=c("b775"),k=c("b6c0"),T=c("ce63"),D=c("2a40"),S=c("b591"),E={name:"planReport",components:{planReportTab:x["a"],ApiTree:R["a"],responseLine:k["a"],debugApi_response:T["a"],caseTree:_["a"],pieTools:v["a"]},data:function(){return{commonUtils:D["a"],showPie:!1,series_dataCase:[],legend_data:["成功","失败"],report_planResult:{},planResultId:null,caseRunResult:[],showReportInfo:"display: none",consoleData:[],caseDataStep:[],assertConsole:[],assertTypeOptions:[]}},watch:{$route:"getRouterParam"},created:function(){this.getRouterParam()},methods:{getRouterParam:function(){var e=this;this.planResultId=this.$route.query.id,void 0!==this.planResultId&&g["a"].post("/api/planResult/web/report/"+this.planResultId).then((function(t){e.report_planResult=t.data.planResult,e.caseRunResult=t.data.caseRunResult;var c=t.data.planResult.caseFailedCount,o=t.data.planResult.caseSuccessCount;e.series_dataCase.push({value:o,name:"成功"}),e.series_dataCase.push({value:c,name:"失败"}),e.showPie=!0})),S["a"].assertType((function(t){e.assertTypeOptions=t.data}))},reportInfo:function(e){this.assertConsole=e.assertResult,this.caseDataStep=e.caseSteps,this.consoleData=e.resultConsole,this.showReportInfo="display: block"},reportTabsClick:function(e){this.showReportInfo=e}}},I=(c("5757"),c("d959")),B=c.n(I);const U=B()(E,[["render",y],["__scopeId","data-v-2fd35019"]]);t["default"]=U},e754:function(e,t,c){}}]);
//# sourceMappingURL=chunk-8c413b00.f807cb53.js.map