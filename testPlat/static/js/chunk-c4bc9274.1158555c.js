(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4bc9274"],{"0f57":function(e,t,a){"use strict";a("5cf7")},"218b":function(e,t,a){"use strict";var n=a("7a23"),c=Object(n["defineComponent"])({name:"Document"});const o={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},r=Object(n["createVNode"])("path",{fill:"currentColor",d:"M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"},null,-1);function l(e,t,a,c,l,i){return Object(n["openBlock"])(),Object(n["createBlock"])("svg",o,[r])}c.render=l,c.__file="packages/components/Document.vue",t["a"]=c},"349e":function(e,t,a){"use strict";a("8433")},"5cf7":function(e,t,a){},8433:function(e,t,a){},"919b":function(e,t,a){"use strict";var n=a("7a23"),c=Object(n["defineComponent"])({name:"RefreshRight"});const o={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},r=Object(n["createVNode"])("path",{fill:"currentColor",d:"M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"},null,-1);function l(e,t,a,c,l,i){return Object(n["openBlock"])(),Object(n["createBlock"])("svg",o,[r])}c.render=l,c.__file="packages/components/RefreshRight.vue",t["a"]=c},"9c12":function(e,t,a){"use strict";a("b0c0");var n=a("7a23"),c={style:{"text-align":"right",float:"left"}},o={style:{float:"right"}},r=Object(n["createTextVNode"])("成功"),l=Object(n["createTextVNode"])(" 失败 ");function i(e,t,a,i,s,d){var u=Object(n["resolveComponent"])("el-tag"),p=Object(n["resolveComponent"])("el-table-column"),b=Object(n["resolveComponent"])("el-table");return Object(n["openBlock"])(),Object(n["createBlock"])(b,{data:a.stepList,"show-header":!1,onRowClick:d.rowClick,"row-class-name":d.tableRowClassName,border:"","highlight-current-row":!0,ref:"multipleTable"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,{label:"result"},{default:Object(n["withCtx"])((function(e){return[Object(n["createElementVNode"])("div",c,Object(n["toDisplayString"])(e.row.name),1),Object(n["createElementVNode"])("div",o,[!0===e.row.result?(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:0,effect:"plain",type:"success"},{default:Object(n["withCtx"])((function(){return[r]})),_:1})):(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:1,type:"danger",effect:"plain",plain:""},{default:Object(n["withCtx"])((function(){return[l]})),_:1}))])]})),_:1})]})),_:1},8,["data","onRowClick","row-class-name"])}var s={name:"caseStep",props:{stepList:{type:Array,default:[]}},data:function(){return{}},methods:{tableRowClassName:function(e){var t=e.row,a=e.rowIndex;t.index=a},rowClick:function(e,t,a){var n=e.index;this.$emit("stepIndex",n),this.getListChannel()},getListChannel:function(){var e=this;this.$nextTick((function(){e.$refs.multipleTable.setCurrentRow(e.resStep[e.rowIndex],!0)}))}}},d=(a("349e"),a("d959")),u=a.n(d);const p=u()(s,[["render",i],["__scopeId","data-v-2bf76efc"]]);t["a"]=p},ba08:function(e,t,a){"use strict";a("c29f")},c29f:function(e,t,a){},e5ac:function(e,t,a){"use strict";a.r(t);a("b0c0"),a("a4d3"),a("e01a"),a("a434");var n=a("7a23"),c=function(e){return Object(n["pushScopeId"])("data-v-45823c9c"),e=e(),Object(n["popScopeId"])(),e},o={class:"box",ref:"box"},r={class:"left"},l=c((function(){return Object(n["createElementVNode"])("div",{class:"resize",title:"收缩侧边栏"},null,-1)})),i={class:"right",ref:"rightCaseInfo",style:{display:"none"}},s={class:"caseTop"},d={class:"grid-content"},u=Object(n["createTextVNode"])(" 用例名称："),p={class:"grid-content"},b=Object(n["createTextVNode"])("保存"),f={class:"grid-content"},O=Object(n["createTextVNode"])("调试"),j={class:"grid-content"},m=Object(n["createTextVNode"])(" 用例状态： "),h={class:"grid-content"},C=Object(n["createTextVNode"])(" 用例等级： "),V={class:"grid-content"},g=Object(n["createTextVNode"])(" 责任人: "),w={class:"grid-content"},v=Object(n["createTextVNode"])(" 描述:"),N={class:"caseBody"},x={class:"grid-content"},y=Object(n["createTextVNode"])("用例参数"),_=Object(n["createTextVNode"])(" name "),I={class:"grid-content"},k=Object(n["createTextVNode"])("调试用例参数"),E={class:"grid-content"},D=Object(n["createTextVNode"])(" 迭代次数： "),A={class:"grid-content"},B=Object(n["createTextVNode"])("添加API用例"),T={class:"caseBottom"},S=Object(n["createTextVNode"])("API引用"),R=Object(n["createTextVNode"])("API复制"),z={key:0},P={key:0},U={style:{float:"left"}},L={style:{float:"left","margin-left":"10px",border:"1px solid #dcdfe6"}},$=c((function(){return Object(n["createElementVNode"])("span",null,"此操作将永久删除该步骤, 是否继续?",-1)})),F={class:"dialog-footer"},H=Object(n["createTextVNode"])("关闭"),q=Object(n["createTextVNode"])("确认"),M={class:"hide"},J={class:"dialog_body"},G={id:"dialog_left",style:{float:"left",height:"100%",width:"40%",border:"1px solid #EEE"}},W={id:"dialog_right",style:{float:"right",height:"100%",width:"60%",border:"1px solid #EEE"}},X={class:"dialog-footer"},Y=Object(n["createTextVNode"])("关闭"),K=Object(n["createTextVNode"])("引用"),Q={class:"debugCase"},Z={class:"caseLeft",style:{float:"left",width:"30%",height:"100%"}},ee={class:"caseInfo",style:{height:"15%"}},te={class:"caseStep",style:{height:"85%"}},ae=Object(n["createTextVNode"])("测试步骤"),ne={class:"caseRight",style:{float:"left",width:"70%",height:"100%","padding-left":"20px"}};function ce(e,t,a,c,ce,oe){var re=this,le=Object(n["resolveComponent"])("category-list"),ie=Object(n["resolveComponent"])("el-input"),se=Object(n["resolveComponent"])("el-col"),de=Object(n["resolveComponent"])("el-button"),ue=Object(n["resolveComponent"])("el-row"),pe=Object(n["resolveComponent"])("el-option"),be=Object(n["resolveComponent"])("el-select"),fe=Object(n["resolveComponent"])("Plus"),Oe=Object(n["resolveComponent"])("el-icon"),je=Object(n["resolveComponent"])("el-table-column"),me=Object(n["resolveComponent"])("Delete"),he=Object(n["resolveComponent"])("el-table"),Ce=Object(n["resolveComponent"])("el-popover"),Ve=Object(n["resolveComponent"])("el-badge"),ge=Object(n["resolveComponent"])("el-input-number"),we=Object(n["resolveComponent"])("el-tag"),ve=Object(n["resolveComponent"])("el-switch"),Ne=Object(n["resolveComponent"])("el-dialog"),xe=Object(n["resolveComponent"])("category"),ye=Object(n["resolveComponent"])("debug-api"),_e=Object(n["resolveComponent"])("el-drawer"),Ie=Object(n["resolveComponent"])("caseInfo"),ke=Object(n["resolveComponent"])("el-divider"),Ee=Object(n["resolveComponent"])("caseStep"),De=Object(n["resolveComponent"])("ResponseLine"),Ae=Object(n["resolveComponent"])("DebugApi_response");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(le,{onCaseInfo:oe.sonData_caseInfo,onCategory:oe.sonData_category},null,8,["onCaseInfo","onCategory"])]),l,Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("div",s,[Object(n["createVNode"])(ue,{gutter:20},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(se,{span:10},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",d,[u,Object(n["createVNode"])(ie,{modelValue:ce.sonCategory.categoryName,"onUpdate:modelValue":t[0]||(t[0]=function(e){return ce.sonCategory.categoryName=e}),style:{width:"300px"}},null,8,["modelValue"])])]})),_:1}),Object(n["createVNode"])(se,{span:3},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",p,[Object(n["createVNode"])(de,{type:"primary",onClick:t[1]||(t[1]=function(e){return oe.saveCase()}),size:"small"},{default:Object(n["withCtx"])((function(){return[b]})),_:1})])]})),_:1}),Object(n["createVNode"])(se,{span:3,pull:1},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",f,[Object(n["createVNode"])(de,{type:"warning",onClick:t[2]||(t[2]=function(e){return oe.debugCase()})},{default:Object(n["withCtx"])((function(){return[O]})),_:1})])]})),_:1})]})),_:1}),Object(n["createVNode"])(ue,{gutter:20},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(se,{span:6},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",j,[m,Object(n["createVNode"])(be,{modelValue:ce.caseInfo.caseType,"onUpdate:modelValue":t[3]||(t[3]=function(e){return ce.caseInfo.caseType=e}),clearable:"",placeholder:"Select"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.apiType_select,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(pe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])])]})),_:1}),Object(n["createVNode"])(se,{span:6},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",h,[C,Object(n["createVNode"])(be,{modelValue:ce.caseInfo.caseGrade,"onUpdate:modelValue":t[4]||(t[4]=function(e){return ce.caseInfo.caseGrade=e}),clearable:"",placeholder:"Select"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.caseGrade_select,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(pe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])])]})),_:1}),Object(n["createVNode"])(se,{span:10},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",V,[g,Object(n["createVNode"])(ie,{modelValue:ce.caseInfo.casePerson,"onUpdate:modelValue":t[5]||(t[5]=function(e){return ce.caseInfo.casePerson=e}),style:{width:"200px"}},null,8,["modelValue"])])]})),_:1})]})),_:1}),Object(n["createVNode"])(ue,{gutter:20},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(se,{span:15},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",w,[v,Object(n["createVNode"])(ie,{modelValue:ce.sonCategory.remark,"onUpdate:modelValue":t[6]||(t[6]=function(e){return ce.sonCategory.remark=e}),type:"textarea"},null,8,["modelValue"])])]})),_:1})]})),_:1})]),Object(n["createElementVNode"])("div",N,[Object(n["createVNode"])(ue,{gutter:20,style:{border:"1px solid #EEE"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(Ve,{value:ce.caseInfo.params.length,class:"item",type:"primary"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(se,{span:2},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",x,[Object(n["createVNode"])(Ce,{placement:"bottom-start",width:400,trigger:"click"},{reference:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(de,{type:"text",size:"small"},{default:Object(n["withCtx"])((function(){return[y]})),_:1})]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(he,{data:ce.caseInfo.params,"header-cell-style":re.$root.tabStyle()},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(je,{prop:"name",label:"name"},{header:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(Oe,{onClick:t[7]||(t[7]=function(e){return ce.caseInfo.params.push({})}),style:{color:"#64ABF5"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(fe)]})),_:1}),_]})),default:Object(n["withCtx"])((function(e){return[Object(n["createVNode"])(ie,{modelValue:e.row.name,"onUpdate:modelValue":function(t){return e.row.name=t}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(n["createVNode"])(je,{prop:"value",label:"Value"},{default:Object(n["withCtx"])((function(e){return[Object(n["createVNode"])(ie,{modelValue:e.row.value,"onUpdate:modelValue":function(t){return e.row.value=t}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(n["createVNode"])(je,{prop:"description",label:"描述"},{default:Object(n["withCtx"])((function(e){return[Object(n["createVNode"])(ie,{modelValue:e.row.description,"onUpdate:modelValue":function(t){return e.row.description=t}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(n["createVNode"])(je,{prop:"right",label:"操作"},{default:Object(n["withCtx"])((function(e){return[Object(n["createVNode"])(Oe,{onClick:function(t){return ce.caseInfo.params.splice(e.$index,1)}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(me)]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data","header-cell-style"])]})),_:1})])]})),_:1})]})),_:1},8,["value"]),Object(n["createVNode"])(Ve,{value:0,class:"item",type:"primary"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(se,{span:2,push:1},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",I,[Object(n["createVNode"])(Ce,{placement:"bottom-start",width:400,trigger:"click"},{reference:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(de,{type:"text"},{default:Object(n["withCtx"])((function(){return[k]})),_:1})]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(he,{data:ce.caseInfo.allParams},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(je,{prop:"key",label:"key"}),Object(n["createVNode"])(je,{prop:"value",label:"value"})]})),_:1},8,["data"])]})),_:1})])]})),_:1})]})),_:1}),Object(n["createVNode"])(se,{span:10,push:1},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",E,[D,Object(n["createVNode"])(ge,{style:{width:"80px"},size:"mini",modelValue:ce.caseInfo.loopCount,"onUpdate:modelValue":t[8]||(t[8]=function(e){return ce.caseInfo.loopCount=e}),min:1,max:10,"controls-position":"right"},null,8,["modelValue"])])]})),_:1})]})),_:1}),Object(n["createVNode"])(ue,{gutter:20},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(se,{span:1},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",A,[Object(n["createVNode"])(de,{onClick:t[9]||(t[9]=function(t){return e.addApiCaseDialog=!0}),type:"text",size:"small"},{default:Object(n["withCtx"])((function(){return[B]})),_:1})])]})),_:1})]})),_:1})]),Object(n["createElementVNode"])("div",T,[Object(n["createVNode"])(he,{data:ce.apiCase_relation,border:"",style:{width:"100%"},"header-cell-style":{background:"#F3F4F7",color:"#555"},"row-style":{fontSize:"13px",color:"#555",fontFamily:"MicrosoftYaHeiUI"},"row-key":"id"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(je,{type:"index",width:"50"}),Object(n["createVNode"])(je,{label:"Name",width:"180"},{default:Object(n["withCtx"])((function(e){return[Object(n["createVNode"])(de,{onClick:function(t){return oe.apiDetail(e.row.id,e.row.apiId)},type:"text",size:"large"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.row.apiInfo.name),1)]})),_:2},1032,["onClick"])]})),_:1}),Object(n["createVNode"])(je,{label:"type",width:"100"},{default:Object(n["withCtx"])((function(e){return[0===e.row.type?(Object(n["openBlock"])(),Object(n["createBlock"])(we,{key:0},{default:Object(n["withCtx"])((function(){return[S]})),_:1})):(Object(n["openBlock"])(),Object(n["createBlock"])(we,{key:1,type:"danger"},{default:Object(n["withCtx"])((function(){return[R]})),_:1}))]})),_:1}),Object(n["createVNode"])(je,{label:"URL",width:"600"},{default:Object(n["withCtx"])((function(e){return[void 0!==e.row.apiInfo?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",z,Object(n["toDisplayString"])(e.row.apiInfo.domain)+" "+Object(n["toDisplayString"])(e.row.apiInfo.path),1)):Object(n["createCommentVNode"])("",!0)]})),_:1}),Object(n["createVNode"])(je,{label:"操作"},{default:Object(n["withCtx"])((function(a){return[void 0!==a.row.apiInfo?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",P,[Object(n["createElementVNode"])("div",U,[Object(n["createVNode"])(ve,{modelValue:a.row.status,"onUpdate:modelValue":function(e){return a.row.status=e},"active-color":"#13ce66"},null,8,["modelValue","onUpdate:modelValue"])]),Object(n["createElementVNode"])("div",L,[Object(n["createVNode"])(Oe,{onClick:t[10]||(t[10]=function(t){return e.deleteCaseApiVisible=!0})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(me)]})),_:1})]),Object(n["createVNode"])(Ne,{modelValue:e.deleteCaseApiVisible,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.deleteCaseApiVisible=t}),title:"Tips",width:"30%"},{footer:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("span",F,[Object(n["createVNode"])(de,{onClick:t[11]||(t[11]=function(t){return e.deleteCaseApiVisible=!1})},{default:Object(n["withCtx"])((function(){return[H]})),_:1}),Object(n["createVNode"])(de,{type:"primary",onClick:function(e){return oe.deleteCaseApi(a.$index,a.row.id)}},{default:Object(n["withCtx"])((function(){return[q]})),_:2},1032,["onClick"])])]})),default:Object(n["withCtx"])((function(){return[$]})),_:2},1032,["modelValue"])])):Object(n["createCommentVNode"])("",!0)]})),_:1})]})),_:1},8,["data"])]),Object(n["createElementVNode"])("div",M,[Object(n["createVNode"])(Ne,{modelValue:e.addApiCaseDialog,"onUpdate:modelValue":t[15]||(t[15]=function(t){return e.addApiCaseDialog=t}),title:"添加API用例",width:"50%"},{footer:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("span",X,[Object(n["createVNode"])(de,{onClick:t[13]||(t[13]=function(t){return e.addApiCaseDialog=!1})},{default:Object(n["withCtx"])((function(){return[Y]})),_:1}),Object(n["createVNode"])(de,{type:"primary",onClick:t[14]||(t[14]=function(e){return oe.addCaseStep()})},{default:Object(n["withCtx"])((function(){return[K]})),_:1})])]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",J,[Object(n["createElementVNode"])("div",G,[Object(n["createVNode"])(xe,{onFinalCheckApi:oe.getCheckApi,checkedApi:ce.checkedApi},null,8,["onFinalCheckApi","checkedApi"])]),Object(n["createElementVNode"])("div",W,[Object(n["createVNode"])(he,{data:ce.checkedApi,border:"",style:{width:"100%"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(je,{label:"id",width:"180"},{default:Object(n["withCtx"])((function(e){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$index+1),1)]})),_:1}),Object(n["createVNode"])(je,{prop:"name",label:"用例名称",width:"180"}),Object(n["createVNode"])(je,{label:"操作"},{default:Object(n["withCtx"])((function(e){return[Object(n["createVNode"])(Oe,{onClick:function(t){return ce.checkedApi.splice(e.$index,1)},style:{color:"indianred"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(me)]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])])])]})),_:1},8,["modelValue"]),Object(n["createVNode"])(_e,{modelValue:e.apiDetail_drawer,"onUpdate:modelValue":t[16]||(t[16]=function(t){return e.apiDetail_drawer=t}),title:"测试步骤",direction:"rtl",size:"75%"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(ye,{apiId:ce.apiId},null,8,["apiId"])]})),_:1},8,["modelValue"]),Object(n["createVNode"])(_e,{modelValue:e.debugCase_drawer,"onUpdate:modelValue":t[17]||(t[17]=function(t){return e.debugCase_drawer=t}),title:"用例调试",direction:"rtl",size:"90%"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",Q,[Object(n["createElementVNode"])("div",Z,[Object(n["createElementVNode"])("div",ee,[Object(n["createVNode"])(Ie,{caseCategory:ce.sonCategory},null,8,["caseCategory"])]),Object(n["createElementVNode"])("div",te,[Object(n["createVNode"])(ke,{"content-position":"left"},{default:Object(n["withCtx"])((function(){return[ae]})),_:1}),Object(n["createVNode"])(Ee,{stepList:ce.resStep,onStepIndex:oe.apiIndex},null,8,["stepList","onStepIndex"])])]),Object(n["createElementVNode"])("div",ne,[Object(n["createElementVNode"])("div",null,[Object(n["createVNode"])(De,{debugResponse:ce.resStep[ce.currentIndex]},null,8,["debugResponse"]),Object(n["createVNode"])(Ae,{apiDetail:ce.resStep[ce.currentIndex],debugResponse:ce.resStep[ce.currentIndex]},null,8,["apiDetail","debugResponse"])])])])]})),_:1},8,["modelValue"])])],512)],512)}var oe=a("5530"),re=(a("d3b7"),a("159b"),a("b64b"),a("4de4"),a("cd71")),le=a("a1e9"),ie=a("f592"),se=a("fc88"),de=a("bc95"),ue=a("c7e8"),pe=a("aa47"),be=a("b775"),fe={class:"runApi"},Oe={class:"top",style:{height:"10%"}},je=Object(n["createTextVNode"])("发送"),me=Object(n["createTextVNode"])("保存"),he={class:"body",style:{padding:"20px 0"}},Ce={class:"bottom"};function Ve(e,t,a,c,o,r){var l=Object(n["resolveComponent"])("el-input"),i=Object(n["resolveComponent"])("el-button"),s=Object(n["resolveComponent"])("apiInfoViewTabs"),d=Object(n["resolveComponent"])("responseLine"),u=Object(n["resolveComponent"])("debugApi_response");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",fe,[Object(n["createElementVNode"])("div",Oe,[Object(n["createElementVNode"])("span",null,[Object(n["createVNode"])(l,{modelValue:e.ApiURI,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.ApiURI=t}),placeholder:"暂无数据",style:{width:"80%"},disabled:"",size:"large"},{prepend:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.apiDetail.method),1)]})),_:1},8,["modelValue"]),Object(n["createVNode"])(i,{onClick:t[1]||(t[1]=function(e){return r.debugApi()}),style:{"margin-left":"10px"},type:"primary",size:"large"},{default:Object(n["withCtx"])((function(){return[je]})),_:1}),Object(n["createVNode"])(i,{style:{width:"5%","margin-left":"15px"},onClick:t[2]||(t[2]=function(e){return r.saveAPI()}),size:"large"},{default:Object(n["withCtx"])((function(){return[me]})),_:1})])]),Object(n["createElementVNode"])("div",he,[Object(n["createVNode"])(s,{apiDetail:o.apiDetail},null,8,["apiDetail"])]),Object(n["withDirectives"])(Object(n["createElementVNode"])("div",Ce,[Object(n["createVNode"])(d,{debugResponse:o.debugResponse},null,8,["debugResponse"]),Object(n["createVNode"])(u,{apiDetail:o.apiDetail,debugResponse:o.debugResponse},null,8,["apiDetail","debugResponse"])],512),[[n["vShow"],e.showDebugApi]])])}var ge=a("4b93"),we=a("5cb2"),ve=a("d0b5"),Ne=a("1753"),xe=a("2a1b"),ye=a("b6c0"),_e=a("ce63"),Ie={name:"debugApi",components:{assertOption:ve["a"],assertExpectRelation:Ne["a"],beforeOperation:xe["a"],responseLine:ye["a"],debugApi_response:_e["a"],afterOperation:we["a"],apiInfoViewTabs:ge["a"]},props:{apiId:{default:0}},setup:function(){var e=Object(le["p"])({ApiURI:""}),t=Object(le["p"])({showDebugApi:!1});return Object(oe["a"])(Object(oe["a"])({},Object(le["z"])(e)),Object(le["z"])(t))},data:function(){return{apiDetail:{domainSwitch:!0,id:null,name:"",labels:null,projectId:null,apiSuiteId:null,method:null,envId:null,domain:"",path:"",type:null,remark:null,status:null,beforeExec:[{}],afterExec:[{}],reqHeader:[{}],reqParams:[{}],reqBodyData:[{}],reqBodyJson:"",reqBodyType:0,reqExtract:[{dataSource:"bodyJson",extractExpress:"",realType:null,realValue:"",varName:""}],reqAssert:[{dataSource:"bodyJson",extractType:"string",extractExpress:"",expectRelation:"等于",expectValue:""}],reqCookies:[{}],debugRsp:null,createBy:"system",createTime:null,updateBy:"system",updateTime:null,virtualResBody:[{}],virtualResBodyJson:"",virtualBodyType:""},debugResponse:{rspBodyJson:"",rspHeaders:"",textBody:"",rspStatusCode:404,rspTime:0,rspBodySize:0,rspAsserts:[],rspExtract:null,log:null}}},watch:{apiId:function(){this.currentApi()}},created:function(){this.currentApi()},methods:{saveAPI:function(){var e=this;be["a"].post("/api/interface/save",this.apiDetail).then((function(t){"1"===t.code?e.$message({type:"error",message:t.msg}):e.$message({type:"success",message:"操作成功"})}))},debugApi:function(){var e=this;this.showDebugApi=!0,be["a"].post("/api/interface/debug",this.apiDetail).then((function(t){"1"===t.code&&e.$message({type:"error",message:t.msg}),e.debugResponse=t.data}))},currentApi:function(){var e=this;be["a"].get("/api/interface/info/"+this.apiId).then((function(t){e.apiDetail=t.data,e.ApiURI=t.data.domain+t.data.path}))},preFix:function(e){this.apiDetail.beforeExec=e},PostFix:function(e){this.apiDetail.afterExec=e}}},ke=a("d959"),Ee=a.n(ke);const De=Ee()(Ie,[["render",Ve]]);var Ae=De,Be=a("ec1b"),Te=a("9c12"),Se={name:"testCase",inject:["reload"],components:{ResponseLine:ye["a"],DebugApi_response:_e["a"],categoryList:re["a"],Plus:ie["a"],Delete:se["a"],category:ue["a"],DocumentCopy:de["a"],debugApi:Ae,caseInfo:Be["a"],caseStep:Te["a"]},setup:function(){var e=Object(le["p"])({caseGrade_select:[{label:"P0",value:"P0"},{label:"P1",value:"P1"},{label:"P2",value:"P2"},{label:"P3",value:"P3"}],addApiCaseDialog:!1,deleteCaseApiVisible:!1}),t=Object(le["p"])({apiType_select:[{label:"未完成",value:"未完成"},{label:"已完成",value:"已完成"}],apiDetail_drawer:!1,debugCase_drawer:!1});return Object(oe["a"])(Object(oe["a"])({},Object(le["z"])(e)),Object(le["z"])(t))},data:function(){return{apiId:null,sonCategory:{categoryName:"",remark:""},caseInfo:{id:"",caseType:"",caseGrade:"",casePerson:"",loopCount:1,params:[],allParams:[],step:[]},checkedApi:[],apiCase_relation:[],resStep:[{}],ResponseLine:{},currentIndex:0}},watch:{"caseInfo.id":function(e){var t=this;this.$refs.rightCaseInfo.style.setProperty("display","block"),be["a"].post("/api/case/caseApiDetail",e).then((function(e){t.apiCase_relation=e.data}))}},mounted:function(){this.dragControllerDiv(),this.initSort()},methods:{dragControllerDiv:function(){for(var e=document.getElementsByClassName("resize"),t=document.getElementsByClassName("left"),a=document.getElementsByClassName("right"),n=document.getElementsByClassName("box"),c=function(c){e[c].onmousedown=function(o){e[c].style.background="#818181";var r=o.clientX;return document.onmousemove=function(o){e[c].left=r;var l=o.clientX,i=e[c].left+(l-r),s=n[c].clientWidth-e[c].offsetWidth;i<32&&(i=32),i>s-150&&(i=s-150),e[c].style.left=i;for(var d=0;d<t.length;d++)t[d].style.width=i/document.body.clientWidth*100+"%",a[d].style.width=100*((n[c].clientWidth+200-i)/document.body.clientWidth-.008)+"%"},document.onmouseup=function(t){e[c].style.background="#d6d6d6",document.onmousemove=null,document.onmouseup=null,e[c].releaseCapture&&e[c].releaseCapture()},e[c].setCapture&&e[c].setCapture(),!1}},o=0;o<e.length;o++)c(o)},sonData_category:function(e){this.sonCategory=e},sonData_caseInfo:function(e){null===e.params&&(e.params=[]),this.caseInfo=e},getCheckApi:function(e){this.checkedApi=e},initSort:function(){var e=this,t=document.querySelectorAll(".el-table__body-wrapper > table > tbody")[0];new pe["a"](t,{animation:1e3,onEnd:function(t){var a=e.apiCase_relation.splice(t.oldIndex,1)[0];e.apiCase_relation.splice(t.newIndex,0,a);var n=[],c=[];e.apiCase_relation.forEach((function(e,t){n[t]={id:e.id,number:t+1,caseId:e.caseId,apiId:e.apiId,apiInfo:e.apiInfo,status:e.status},c[t]=e.apiId})),e.apiCase_relation=n,be["a"].post("/api/case/apiCase",n).then((function(t){"1"===t.code?e.$message({type:"error",message:t.msg}):e.$message({type:"success",message:"保存成功"})}))}})},addCaseStep:function(){var e,t=this,a=[];this.checkedApi.forEach((function(e,t){a.push(e.id)})),be["a"].post("/api/case/relation",a).then((function(a){for(e=0;e<a.data.length;e++)void 0===t.apiCase_relation[e]&&t.apiCase_relation.push({id:null,apiId:null,caseId:null,status:!0,apiInfo:null,number:e+1,type:0}),t.apiCase_relation[e].caseId=t.caseInfo.id,t.apiCase_relation[e].apiId=a.data[e].id,t.apiCase_relation[e].apiInfo=a.data[e],t.apiCase_relation[e].status=!0,t.apiCase_relation[e].number=e+1,t.apiCase_relation[e].type=0})),this.addApiCaseDialog=!1},saveCase:function(){var e=this;this.caseInfo.params.forEach((function(t,a){var n=Object.keys(t);0===n.length&&e.caseInfo.params.splice(a,1)})),be["a"].post("/api/caseCategory/add",this.sonCategory).then((function(e){})),be["a"].post("/api/case/update",this.caseInfo).then((function(e){})),be["a"].post("/api/case/apiCase",this.apiCase_relation).then((function(t){"1"===t.code?e.$message({type:"error",message:t.msg}):e.$message({type:"success",message:"保存成功"})}))},deleteCaseApi:function(e,t){this.apiCase_relation.splice(e,1),be["a"].delete("/api/case/deleteCaseApi/"+t).then((function(e){})),this.deleteCaseApiVisible=!1},apiDetail:function(e,t){this.apiDetail_drawer=!0,this.apiId=t},debugCase:function(){var e=this;this.debugCase_drawer=!0;var t=[];this.apiCase_relation.filter((function(e,a){t.push(e.apiInfo)})),this.caseInfo.step=t;var a=localStorage.getItem("envId");be["a"].post("/api/case/debugCase/"+a,this.caseInfo).then((function(t){e.resStep=t.data.step,e.ResponseLine=t.data.step}))},apiIndex:function(e){this.currentIndex=e}}};a("0f57");const Re=Ee()(Se,[["render",ce],["__scopeId","data-v-45823c9c"]]);t["default"]=Re},ec1b:function(e,t,a){"use strict";var n=a("7a23"),c=function(e){return Object(n["pushScopeId"])("data-v-b742a3e4"),e=e(),Object(n["popScopeId"])(),e},o=c((function(){return Object(n["createElementVNode"])("span",{class:"my_label"},"用例名称",-1)})),r=c((function(){return Object(n["createElementVNode"])("span",{class:"my_label"},"执行时间",-1)})),l=c((function(){return Object(n["createElementVNode"])("span",{class:"my_label"},"耗时",-1)}));function i(e,t,a,c,i,s){var d=Object(n["resolveComponent"])("el-descriptions-item"),u=Object(n["resolveComponent"])("el-descriptions");return Object(n["openBlock"])(),Object(n["createBlock"])(u,{title:"基本信息",column:1,border:""},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{"label-align":"center",align:"center",width:"100px","class-name":"myContent"},{label:Object(n["withCtx"])((function(){return[o]})),default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(a.caseCategory.categoryName),1)]})),_:1}),Object(n["createVNode"])(d,{"label-align":"center",align:"center","class-name":"myContent",width:"100px"},{label:Object(n["withCtx"])((function(){return[r]})),default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(i.currentTime),1)]})),_:1}),Object(n["createVNode"])(d,{"label-align":"center",align:"center","class-name":"myContent",width:"100px"},{label:Object(n["withCtx"])((function(){return[l]})),default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(a.caseCategory.categoryName),1)]})),_:1})]})),_:1})}var s=(new Date).getFullYear(),d=(new Date).getMonth()+1,u=(new Date).getDate(),p=(new Date).getHours(),b=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),f=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds(),O=s+"-"+d+"-"+u+" "+p+":"+b+":"+f,j=O,m={name:"caseInfo",props:{caseCategory:{caseGrade:null,casePerson:null,caseType:null,categoryId:null,categoryName:"",createTime:null,failContinue:null,id:null,loopCount:null,params:null,result:!1}},data:function(){return{currentTime:j}},methods:{}},h=(a("ba08"),a("d959")),C=a.n(h);const V=C()(m,[["render",i],["__scopeId","data-v-b742a3e4"]]);t["a"]=V}}]);
//# sourceMappingURL=chunk-c4bc9274.1158555c.js.map