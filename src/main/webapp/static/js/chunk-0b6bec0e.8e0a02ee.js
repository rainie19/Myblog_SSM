(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b6bec0e"],{"498a":function(e,t,r){"use strict";var a=r("23e7"),i=r("58a8").trim,l=r("c8d2");a({target:"String",proto:!0,forced:l("trim")},{trim:function(){return i(this)}})},"52d5":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mavon-editor",e._b({ref:"md",staticClass:"md-editor-class",style:{"z-index":e.zindex},on:{imgAdd:e.imgAdd,imgDel:e.imgDel,fullScreen:e.fullScreen},model:{value:e.editor.value,callback:function(t){e.$set(e.editor,"value",t)},expression:"editor.value"}},"mavon-editor",e.editor,!1))},i=[],l=r("6f2f"),n=(r("b2ab"),r("2423")),o={name:"MarkdownEditor",props:{editor:Object},data:function(){return{zindex:6}},mounted:function(){this.$set(this.editor,"ref",this.$refs.md)},methods:{fullScreen:function(e,t){this.zindex=!0===e?1500:10},imgAdd:function(e,t){var r=this,a=new a;a.append("image",t),Object(n["h"])(a).then((function(t){console.log(e),r.$refs.md.$img2Url(e,t.imageUrl)})).catch((function(e){r.$message.error({message:e,showClose:!0})}))},imgDel:function(e){console.log("imgDel:",e[0])}},components:{mavonEditor:l["mavonEditor"]}},c=o,s=(r("a566"),r("c920"),r("2877")),u=Object(s["a"])(c,a,i,!1,null,"13cbc47c",null);t["a"]=u.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("1d80"),i=r("5899"),l="["+i+"]",n=RegExp("^"+l+l+"*"),o=RegExp(l+l+"*$"),c=function(e){return function(t){var r=String(a(t));return 1&e&&(r=r.replace(n,"")),2&e&&(r=r.replace(o,"")),r}};e.exports={start:c(1),end:c(2),trim:c(3)}},"90ee":function(e,t,r){"use strict";var a=r("aa8f"),i=r.n(a);i.a},"997d":function(e,t,r){},a434:function(e,t,r){"use strict";var a=r("23e7"),i=r("23cb"),l=r("a691"),n=r("50c4"),o=r("7b0b"),c=r("65f0"),s=r("8418"),u=r("1dde"),m=r("ae40"),d=u("splice"),g=m("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,p=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d||!g},{splice:function(e,t){var r,a,u,m,d,g,v=o(this),y=n(v.length),T=i(e,y),F=arguments.length;if(0===F?r=a=0:1===F?(r=0,a=y-T):(r=F-2,a=p(f(l(t),0),y-T)),y+r-a>h)throw TypeError(b);for(u=c(v,a),m=0;m<a;m++)d=T+m,d in v&&s(u,m,v[d]);if(u.length=a,r<a){for(m=T;m<y-a;m++)d=m+a,g=m+r,d in v?v[g]=v[d]:delete v[g];for(m=y;m>y-a+r;m--)delete v[m-1]}else if(r>a)for(m=y-a;m>T;m--)d=m+a-1,g=m+r-1,d in v?v[g]=v[d]:delete v[g];for(m=0;m<r;m++)v[m+T]=arguments[m+2];return v.length=y-a+r,u}})},a566:function(e,t,r){"use strict";var a=r("997d"),i=r.n(a);i.a},aa8f:function(e,t,r){},bffa:function(e,t,r){},c8d2:function(e,t,r){var a=r("d039"),i=r("5899"),l="​᠎";e.exports=function(e){return a((function(){return!!i[e]()||l[e]()!=l||i[e].name!==e}))}},c920:function(e,t,r){"use strict";var a=r("bffa"),i=r.n(a);i.a},cf5e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.authCheck?r("div",[r("el-form",{ref:"articleForm",attrs:{model:e.articleForm,rules:e.rules,"label-position":"top","label-width":"80px"}},[r("div",{staticClass:"editor-header"},[r("div",{staticClass:"input-title"},[r("el-form-item",{staticStyle:{"margin-bottom":"0",width:"100%"},attrs:{prop:"articleTitle"}},[r("el-input",{staticStyle:{border:"none"},attrs:{placeholder:"请输入标题"},model:{value:e.articleForm.articleTitle,callback:function(t){e.$set(e.articleForm,"articleTitle",t)},expression:"articleForm.articleTitle"}})],1)],1),r("div",{staticClass:"publish-popover"},[r("el-popover",{attrs:{placement:"bottom",width:"300",trigger:"click"}},[r("el-form-item",{attrs:{label:"英文标题",prop:"articleSlug"}},[r("el-input",{attrs:{placeholder:"请输入英文标题"},model:{value:e.articleForm.articleSlug,callback:function(t){e.$set(e.articleForm,"articleSlug",t)},expression:"articleForm.articleSlug"}})],1),r("el-form-item",{attrs:{label:"一句话摘要",prop:"articleSummary"}},[r("el-input",{attrs:{autosize:{minRows:2},placeholder:"请简洁的概述一下此文章的主要内容",type:"textarea"},model:{value:e.articleForm.articleSummary,callback:function(t){e.$set(e.articleForm,"articleSummary",t)},expression:"articleForm.articleSummary"}})],1),r("el-form-item",{attrs:{label:"选择分类",prop:"categoryName"}},[r("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:"请新建或选择文章分类"},model:{value:e.articleForm.categoryName,callback:function(t){e.$set(e.articleForm,"categoryName",t)},expression:"articleForm.categoryName"}},e._l(e.allCategories,(function(e){return r("el-option",{key:e.categoryId,attrs:{label:e.categoryName,value:e.categoryName}})})),1)],1),r("el-form-item",{attrs:{label:"选择标签",prop:"dynamicTags"}},[r("br"),e.inputVisible?r("el-autocomplete",{ref:"saveTagInput",staticClass:"input-new-tag inline-input",attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入内容",size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm(t)}},model:{value:e.inputNewTag,callback:function(t){e.inputNewTag=t},expression:"inputNewTag"}}):r("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v("+ New Tag")]),e._l(e.articleForm.dynamicTags,(function(t){return r("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(r){return e.handleClose(t)}}},[e._v(e._s(t))])}))],2),r("div",{staticStyle:{"text-align":"center"}},[r("el-button",{attrs:{type:"primary",loading:e.loading},nativeOn:{click:function(t){return t.preventDefault(),e.publish(t)}}},[e._v("确定并发布")])],1),r("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[e._v("发布"),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})])],1)],1)]),r("div",{staticClass:"editor-body"},[r("el-form-item",{attrs:{prop:"editor"}},[r("markdown-editor",{attrs:{editor:e.articleForm.editor}})],1)],1)])],1):e._e()},i=[],l=(r("4de4"),r("c975"),r("d81d"),r("a434"),r("b0c0"),r("498a"),r("2423")),n=r("52d5"),o={components:{MarkdownEditor:n["a"]},inject:["reload"],data:function(){var e=function(e,t,r){t.value?r():r(new Error("正文不能为空"))},t=function(e,t,r){for(var a in(0==t.length||t.length>3)&&r(new Error("请选择1-3个标签")),t)t[a].length>6&&r("标签长度小于6个字符");r()};return{articleForm:{articleTitle:"",articleSlug:"",articleAuthor:"",categoryName:"",articleSummary:"",articleContentHtml:"",articleContentMd:"",dynamicTags:[],editor:{value:"",default_open:"edit",placeholder:"请输入正文",toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,imagelink:!0,code:!0,fullscreen:!0,readmodel:!0,help:!0,undo:!0,redo:!0,trash:!0,navigation:!0,preview:!0,htmlcode:!0,alignleft:!0,aligncenter:!0,alignright:!0}}},loading:!1,allCategories:[],allTags:[],publishType:"create",inputVisible:!1,inputNewTag:"",rules:{articleTitle:[{required:!0,message:"标题不能为空",trigger:"blur"},{min:3,max:30,message:"长度为3-30个字符",trigger:"blur"}],articleSlug:[{required:!0,message:"英文标题不能为空",trigger:"blur"},{min:3,max:40,message:"长度为3-40个字符",trigger:"blur"}],articleSummary:[{required:!0,message:"请输入摘要",trigger:"blur"},{max:200,message:"不能大于 200 个字符",trigger:"blur"}],categoryName:[{required:!0,message:"请选择文章分类",trigger:"change"},{max:10,message:"不能大于 10 个字符",trigger:"change"}],dynamicTags:[{required:!0,type:"array",validator:t,trigger:"change"}],editor:[{required:!0,validator:e,trigger:"blur"}]}}},computed:{authCheck:function(){return!this.$route.params.articleId||this.$store.state.user.token&&this.$store.state.user.name===this.articleForm.articleAuthor}},created:function(){this.getCategoryAndTagInfo(),this.$route.params.articleId&&this.getArticleInfo(this.$route.params.articleId)},methods:{querySearch:function(e,t){var r=this.allTags.map((function(e){return{value:e}})),a=e?r.filter(this.createFilter(e)):r;t(a)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},handleClose:function(e){this.articleForm.dynamicTags.splice(this.articleForm.dynamicTags.indexOf(e),1)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick((function(){e.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var e=this;setTimeout((function(){var t=e.inputNewTag;t&&-1===e.articleForm.dynamicTags.indexOf(t.trim())&&e.articleForm.dynamicTags.push(t),e.inputVisible=!1,e.inputNewTag="",e.$refs.articleForm.validateField("dynamicTags")}),400)},publish:function(){var e=this;this.$refs.articleForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0;var r={articleTitle:e.articleForm.articleTitle,articleSlug:e.articleForm.articleSlug,articleAuthor:e.$store.state.user.name,categoryName:e.articleForm.categoryName,articleSummary:e.articleForm.articleSummary,dynamicTags:e.articleForm.dynamicTags,articleContentMd:e.articleForm.editor.value};e.$route.params.articleId&&(r["articleId"]=e.$route.params.articleId,e.publishType="modify",console.log(JSON.stringify(r))),Object(l["g"])(r,e.publishType).then((function(t){e.loading=!1,e.$message.success({message:"文章发布成功",showClose:!0}),e.$router.push({name:"articleDetail",params:{articleId:t.article.articleId,slug:t.article.articleSlug}}),e.reload()})).catch((function(t){e.loading=!1,console.log(t)}))}))},getCategoryAndTagInfo:function(){var e=this;Object(l["b"])().then((function(t){e.allCategories=t.categories})),Object(l["d"])().then((function(t){e.allTags=t.tags.map((function(e){return e.tagName}))}))},getArticleInfo:function(e){var t=this;Object(l["e"])(e).then((function(e){var r=e.article;t.articleForm.dynamicTags=e.tags.map((function(e){return e.tagName})),t.articleForm.articleTitle=r.articleTitle,t.articleForm.articleAuthor=r.articleAuthor,t.articleForm.articleSlug=r.articleSlug.replaceAll("-"," "),t.articleForm.articleSummary=r.articleSummary,t.articleForm.editor.value=r.articleContentMd,t.articleForm.articleContentHtml=r.articleContentHtml,t.articleForm.categoryName=r.categoryName}))}}},c=o,s=(r("90ee"),r("2877")),u=Object(s["a"])(c,a,i,!1,null,"5ec3791a",null);t["default"]=u.exports},d81d:function(e,t,r){"use strict";var a=r("23e7"),i=r("b727").map,l=r("1dde"),n=r("ae40"),o=l("map"),c=n("map");a({target:"Array",proto:!0,forced:!o||!c},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);