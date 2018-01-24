webpackJsonp([10],{MiE5:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o("Vo7i");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this.year=e,this.team=t,this.one=o,this.two=l,this.three=a}var n={data:function(){return{tableData:[],dialogFormVisible:!1,resetDialogFormVisible:!1,editDialogFormVisible:!1,addDialogFormVisible:!1,resetId:"",uploadId:"",form:{id:"",year:"",team:"",one:"",two:"",three:""},newform:new a}},methods:{fetchData:function(){var e=this;Object(l.a)({url:"/api/session",method:"get"}).then(function(t){for(var o=t.data,l=o.length,a=0;a<l;a++)1==o[a].team?o[a].team="上学期":2==o[a].team&&(o[a].team="下学期");e.tableData=o}).catch(function(){})},add:function(){this.addDialogFormVisible=!0},edit:function(e){var t=this,o=e.id;this.uploadId=o,(a=o,Object(l.a)({url:"/api/session/"+a,method:"get"})).then(function(e){var o=e.data;t.form=o,t.editDialogFormVisible=!0});var a},saveData:function(){var e=this;(t=this.uploadId,o=this.form,Object(l.a)({url:"/api/session/"+t,method:"patch",data:{year:o.year,team:o.team,one:o.one,two:o.two,three:o.three},headers:{"Content-Type":"application/x-www-form-urlencoded"}})).then(function(t){if(200==t.status_code){var o=e.form.id,l=0;l=e.tableData.findIndex(function(e,t){return e.id==o}),e.tableData.splice(l,1,e.form),e.editDialogFormVisible=!1}}).catch(function(){});var t,o},resetForm:function(){this.newform=new a,this.resetDialogFormVisible=!0},submitForm:function(){var e=this;(t=this.newform,Object(l.a)({url:"/api/session",method:"post",data:t,headers:{"Content-Type":"application/x-www-form-urlencoded"}})).then(function(t){console.log(t),e.$alert("新建成功","友情提示",{callback:function(t){e.newform=new a}})}).catch(function(e){console.log(e.response)});var t},del:function(e){var t=this;this.$confirm("此操作将永久删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var o=e.id,a=null;a=t.tableData.findIndex(function(e){return e.id==o}),(n=o,Object(l.a)({url:"/api/session/"+n,method:"delete"})).then(function(e){200==e.status_code&&(t.$message({type:"success",message:"删除成功!"}),t.tableData.splice(a,1))}).catch(function(){});var n}).catch(function(){})}},mounted:function(){this.fetchData()},created:function(){}},r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-button",{attrs:{type:"primary",plain:"",size:"large",icon:"el-icon-document"},on:{click:function(t){e.add()}}},[e._v("添加")]),e._v(" "),o("div",{staticStyle:{"margin-bottom":"10px"}}),e._v(" "),o("el-table",{staticStyle:{width:"80%"},attrs:{data:e.tableData,border:!0,scope:"scope"}},[o("el-table-column",{attrs:{prop:"id",label:"序号",width:"80"}}),e._v(" "),o("el-table-column",{attrs:{prop:"year",label:"学年"}}),e._v(" "),o("el-table-column",{attrs:{prop:"team",label:"学期"}}),e._v(" "),o("el-table-column",{attrs:{prop:"one",label:"高一班级数"}}),e._v(" "),o("el-table-column",{attrs:{prop:"two",label:"高二班级数"}}),e._v(" "),o("el-table-column",{attrs:{prop:"three",label:"高三班级数"}}),e._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-tooltip",{attrs:{content:"编辑",placement:"top"}},[o("el-button",{attrs:{plain:"",icon:"el-icon-edit",type:"info",size:"small"},on:{click:function(o){e.edit(t.row)}}})],1),e._v(" "),o("el-tooltip",{attrs:{content:"删除",placement:"top"}},[o("el-button",{attrs:{plain:"",icon:"el-icon-delete",type:"danger",size:"small"},on:{click:function(o){e.del(t.row)}}})],1)]}}])})],1),e._v(" "),o("el-dialog",{attrs:{title:"学期信息",visible:e.editDialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editDialogFormVisible=t}}},[o("el-form",{attrs:{model:e.form,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"学年",prop:"year"}},[o("el-date-picker",{attrs:{align:"right",type:"year",placeholder:"选择年"},model:{value:e.form.year,callback:function(t){e.$set(e.form,"year",t)},expression:"form.year"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"学期",prop:"team"}},[o("el-select",{attrs:{placeholder:"请选择学期"},model:{value:e.form.team,callback:function(t){e.$set(e.form,"team",t)},expression:"form.team"}},[o("el-option",{attrs:{label:"上学期",value:1}},[e._v("上学期")]),e._v(" "),o("el-option",{attrs:{label:"下学期",value:2}},[e._v("下学期")])],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"高一班级数",prop:"one"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.one,callback:function(t){e.$set(e.form,"one",t)},expression:"form.one"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"高二班级数",prop:"two"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.two,callback:function(t){e.$set(e.form,"two",t)},expression:"form.two"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"高三班级数",prop:"three"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.three,callback:function(t){e.$set(e.form,"three",t)},expression:"form.three"}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.editDialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.saveData()}}},[e._v("确 定")])],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"学期信息",visible:e.addDialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addDialogFormVisible=t}}},[o("el-form",{attrs:{model:e.newform,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"学年",prop:"year"}},[o("el-date-picker",{attrs:{align:"right",type:"year",placeholder:"选择年"},model:{value:e.newform.year,callback:function(t){e.$set(e.newform,"year",t)},expression:"newform.year"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"学期",prop:"team"}},[o("el-select",{attrs:{placeholder:"请选择学期"},model:{value:e.newform.team,callback:function(t){e.$set(e.newform,"team",t)},expression:"newform.team"}},[o("el-option",{attrs:{label:"上学期",value:1}},[e._v("上学期")]),e._v(" "),o("el-option",{attrs:{label:"下学期",value:2}},[e._v("下学期")])],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"高一班级数",prop:"one"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.newform.one,callback:function(t){e.$set(e.newform,"one",t)},expression:"newform.one"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"高二班级数",prop:"two"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.newform.two,callback:function(t){e.$set(e.newform,"two",t)},expression:"newform.two"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"高三班级数",prop:"three"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.newform.three,callback:function(t){e.$set(e.newform,"three",t)},expression:"newform.three"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("newform")}}},[e._v("立即创建")]),e._v(" "),o("el-button",{on:{click:function(t){e.resetForm("newform")}}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]},i=o("VU/8")(n,r,!1,null,null,null);t.default=i.exports}});