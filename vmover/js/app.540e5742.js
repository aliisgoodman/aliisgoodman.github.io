(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],d=0,h=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2395:function(t,e,a){},"505f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=(a("d3b7"),a("bc3a")),o=a.n(s),i={},r=o.a.create(i);r.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=r,window.axios=r,Object.defineProperties(t.prototype,{axios:{get:function(){return r}},$axios:{get:function(){return r}}})},n["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("van-nav-bar",{attrs:{"left-text":t.days,"right-text":t.times},scopedSlots:t._u([{key:"title",fn:function(){return[a("van-tabs",{attrs:{background:"#2c3e50",color:"#fff"},on:{click:t.gorouter},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("van-tab",{attrs:{title:"发现",name:"home"}}),a("van-tab",{attrs:{title:"频道",name:"channel"}}),a("van-tab",{attrs:{title:"我的",name:"me"}})],1)]},proxy:!0}])})],1),a("router-view"),t.showplayingpage?a("Playingpage",{attrs:{datas:t.playingpagedatas}}):t._e(),t.showloading?a("div",{staticClass:"loading"},[a("van-icon",{attrs:{name:"arrow-left"},on:{click:t.hideplayingpage}}),a("van-loading",{attrs:{size:"36px",vertical:"",color:"rgb(44, 197, 197)"}},[t._v("加载中...")])],1):t._e()],1)},l=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.datas?a("div",{staticClass:"playingpage"},[a("div",{staticClass:"videowrap"},[a("div",{staticClass:"b"},[a("van-icon",{attrs:{name:"arrow-left"},on:{click:t.hideplayingpage}})],1),t.datas.content_video?a("video",{attrs:{src:t.datas.content_video[0].progressive[2].url,controls:""}}):t._e()]),a("div",{staticClass:"a",style:{height:t.hei}}),a("div",{staticClass:"context"},[a("h3",[t._v(t._s(t.datas.title))]),t.datas.cate?a("h4",[t._v(t._s(t.datas.cate[0])+" / "+t._s(t.counttime(t.datas.duration)))]):t._e(),a("p",[t._v(t._s(t.datas.intro))]),t.datas.author?a("div",{staticClass:"author"},[a("div",[a("img",{attrs:{src:t.datas.author.profile.avatar}}),a("div",[a("span",[t._v(t._s(t.datas.author.profile.username))]),a("p",[t._v(" 片中职务： "),t._l(t.datas.author.roles,(function(e,n){return a("span",{key:n},[t._v(t._s(e))])}))],2)])]),a("van-icon",{attrs:{name:"arrow-right"}})],1):t._e(),a("h5",[t._v(t._s(t.datas.comment.total)+" 条评论")]),t._l(t.datas.comment.list,(function(e,n){return a("div",{key:n,staticClass:"comment"},[a("div",[a("div",[a("img",{attrs:{src:e.userinfo.avatar}}),a("div",[a("p",[t._v(t._s(e.userinfo.username))]),a("a",[t._v(t._s(n+1)+"小时前")])])]),a("span",[a("van-icon",{attrs:{name:"good-job-o"}}),t._v(" "+t._s(e.count_approve)+" ")],1)]),a("p",[t._v(t._s(e.content))])])}))],2)]):t._e()},d=[],h={name:"Playingpage",props:["datas"],data:function(){return{hei:0,a:0}},computed:{},methods:{counttime:function(t){return parseInt(t/60)+"'"+(t%60>9?t%60:"0"+t%60)+'"'},hideplayingpage:function(){this.$store.state.showrouter=!0,this.$store.state.showplayingpage=!1}},watch:{a:function(){this.$nextTick((function(){var t=document.getElementsByClassName("videowrap");this.hei=t[0].offsetHeight+"px"}))}},created:function(){var t=this,e=setInterval((function(){t.a+=1}),300);setTimeout((function(){clearInterval(e)}),2e3)}},p=h,m=(a("d55b"),a("2877")),f=Object(m["a"])(p,u,d,!1,null,"c1f3c9d8",null),g=f.exports,v={data:function(){return{activeName:"home",days:null,times:null}},components:{Playingpage:g},computed:{showplayingpage:function(){return this.$store.state.showplayingpage},playingpagedatas:function(){return this.$store.state.playingpagedatas},showloading:function(){return this.$store.state.showloading}},created:function(){var t=this;this.$data.days=(new Date).getMonth()+1+"月"+(new Date).getDay()+"日",this.$data.times=(new Date).getHours()+":"+((new Date).getMinutes()>9?(new Date).getMinutes():"0"+(new Date).getMinutes()),setInterval((function(){t.$data.days=(new Date).getMonth()+1+"月"+(new Date).getDay()+"日",t.$data.times=(new Date).getHours()+":"+((new Date).getMinutes()>9?(new Date).getMinutes():"0"+(new Date).getMinutes())}),6e4);var e=JSON.parse(window.localStorage.getItem("homedata"));e&&e.endtime>Date.now()?this.$store.state.homedatas=e.datas:this.gethomedatas();var a=JSON.parse(window.localStorage.getItem("channeldata"));a&&a.endtime>Date.now()?this.$store.state.channeldatas=a.datas:this.getchanneldatas()},methods:{hideplayingpage:function(){this.$store.state.showloading=!1,this.$store.state.showrouter=!0},gorouter:function(){var t=this.$data.activeName;"home"==t?this.$router.push("/"):"channel"==t?this.$router.push("/channel"):this.$router.push("/me")},gethomedatas:function(){var t=this;this.axios.get("https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/index/index").then((function(e){t.$store.state.homedatas=e.data.data,window.localStorage.setItem("homedata",JSON.stringify({endtime:Date.now()+36e5,datas:e.data.data}))}))},getchanneldatas:function(){var t=this;this.axios.get("https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/cate/getList").then((function(e){t.$store.state.channeldatas=e.data.data,window.localStorage.setItem("channeldata",JSON.stringify({endtime:Date.now()+36e5,datas:e.data.data}))}))}}},w=v,_=(a("7c55"),Object(m["a"])(w,c,l,!1,null,null,null)),y=_.exports,b=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.showrouter,expression:"showrouter"}],staticClass:"home"},[t.banners?[a("Homeswipe",{attrs:{banners:t.banners.list}}),a("Homelist",{attrs:{lists:t.todays.list,hshow:!0}},[t._v("今日")]),a("Homelist",{attrs:{lists:t.hots.list,mode:!0,hshow:!0}},[t._v("热门")]),a("Homeswipe",{attrs:{banners:t.albums.list,modes:!0}},[t._v("专题")]),a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.posts,(function(e,n){return a("van-cell",{key:n},[a("Homelist",{attrs:{lists:e.list,hshow:!0}},[t._v(t._s(e.selection_title))])],1)})),1)]:t._e()],2)},x=[],k=(a("fb6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homelist"},[t.hshow?a("h3",[t._t("default")],2):t._e(),a("ul",t._l(t.lists,(function(e,n){return a("li",{key:n,class:{modes:t.mode},on:{click:function(a){return t.goplayingpage(e)}}},[a("img",{attrs:{src:e.image}}),a("div",[a("span",[t._l(e.cates,(function(e,n){return a("a",{key:n},[t._v(t._s(e.catename))])})),t._v(" / "+t._s(t.counttime(e.duration))+" ")],2),a("p",[t._v(t._s(e.title))])])])})),0)])}),O=[],C={name:"Homelist",props:["lists","mode","hshow"],data:function(){return{}},computed:{},methods:{goplayingpage:function(t){var e=this;this.$store.state.showloading=!0,this.$store.state.showrouter=!1,this.axios.get("https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/view?postid="+t.postid).then((function(t){e.$store.commit("changeplayingpagedatas",t.data.data),e.$store.state.showplayingpage=!0,e.$store.state.showloading=!1}))},counttime:function(t){return parseInt(t/60)+"'"+(t%60>9?t%60:"0"+t%60)+'"'}}},j=C,S=(a("fffa"),Object(m["a"])(j,k,O,!1,null,"39ac60c4",null)),D=S.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homeswipe"},[t.modes?a("h3",[t._t("default")],2):t._e(),a("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.banners,(function(e,n){return a("van-swipe-item",{key:n,class:{modes:t.modes},on:{click:function(a){return t.toplayingpage(e)}}},[a("img",{attrs:{src:e.image}}),t.modes?a("div",[t._l(e.cates,(function(e,n){return a("span",{key:n},[t._v(t._s(e.catename))])})),a("h4"),a("h5",[t._v(t._s(e.wx_small_app_title))]),a("p",[t._v(t._s(e.app_fu_title))])],2):t._e()])})),1)],1)},H=[],N={name:"Homeswipe",props:["banners","modes"],methods:{toplayingpage:function(t){var e,a=this;this.$store.state.showloading=!0,e=t.extra_data?t.extra_data.app_banner_param:t.postid,this.$store.state.showrouter=!1,this.playingpagedatas=JSON.parse(window.localStorage.getItem("playingpagedatas")),this.axios.get("https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/view?postid="+e).then((function(t){console.log(t),a.$store.commit("changeplayingpagedatas",t.data.data),a.$store.state.showloading=!1,a.$store.state.showplayingpage=!0}))}}},I=N,M=(a("9215"),Object(m["a"])(I,P,H,!1,null,null,null)),E=M.exports,J={name:"Home",components:{Homelist:D,Homeswipe:E},data:function(){return{loading:!1,finished:!1}},methods:{onLoad:function(){var t=this,e=this.posts.slice(this.posts.length-1)[0].lastid;this.axios.get("https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/index/getIndexPosts/lastid/"+e).then((function(e){t.posts.push(e.data.data),t.loading=!1})).catch((function(){t.finished=!0}))}},computed:{albums:function(){return this.$store.state.homedatas.album},banners:function(){return this.$store.state.homedatas.banner},hots:function(){return this.$store.state.homedatas.hot},posts:function(){return[this.$store.state.homedatas.posts]},todays:function(){return this.$store.state.homedatas.today},showplayingpage:function(){return this.$store.state.showplayingpage},showrouter:function(){return this.$store.state.showrouter}}},L=J,T=(a("de16"),Object(m["a"])(L,$,x,!1,null,null,null)),z=T.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.showrouter,expression:"showrouter"}],staticClass:"channel"},[a("ul",t._l(t.channeldatas,(function(e,n){return a("li",{key:n,on:{click:function(a){return t.gochannellist(e,e.catename)}}},[a("img",{attrs:{src:e.icon}}),a("p",[a("span",[t._v("#"+t._s(e.catename)+"#")])])])})),0),t.showchannellist?a("Channellist",{attrs:{lists:t.channellistdatas,loadid:t.channeldatas.cateid}},[t._v(t._s(t.name))]):t._e()],1)},B=[],A=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:!t.showplayingpage,expression:"!showplayingpage"}],staticClass:"channellist"},[a("p",[a("van-icon",{attrs:{name:"arrow-left"},on:{click:t.hidechannellist}}),t._t("default"),a("van-icon",{staticClass:"kongbai",attrs:{name:"arrow-left"}})],2),a("Homelist",{attrs:{lists:t.lists.data,mode:!1}}),a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.loaddatas,(function(t,e){return a("van-cell",{key:e},[a("Homelist",{attrs:{lists:t,mode:!1}})],1)})),1)],1)}),F=[],G=(a("99af"),{name:"Channellist",props:["lists","loadid"],data:function(){return{loading:!1,finished:!1,pages:2,loaddatas:[]}},computed:{showplayingpage:function(){return this.$store.state.showplayingpage}},components:{Homelist:D},methods:{hidechannellist:function(){this.$store.state.showchannellist=!1},onLoad:function(){var t=this;this.pages+=1,this.axios.get(" https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/getPostInCate?p=".concat(this.pages,"&size=10&cateid=").concat(this.loadid)).then((function(e){t.loaddatas.push(e.data.data),t.loading=!1}))}}}),K=G,Q=(a("d49e"),Object(m["a"])(K,A,F,!1,null,"6af46301",null)),R=Q.exports,U={name:"Channel",data:function(){return{channellistdatas:[],name:null}},computed:{showchannellist:function(){return this.$store.state.showchannellist},channeldatas:function(){return this.$store.state.channeldatas},showplayingpage:function(){return this.$store.state.showplayingpage},showrouter:function(){return this.$store.state.showrouter}},components:{Channellist:R},methods:{gochannellist:function(t,e){var a=this;this.$store.state.showchannellist=!0,this.$store.state.showloading=!0,this.$store.state.showrouter=!1,this.name=e;var n=JSON.parse(window.localStorage.getItem("channellistdata".concat(t.cateid)));n&&n.endtime>Date.now()?this.channellistdatas=n.datas:this.axios.get("https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/getPostInCate?p=1&size=10&cateid="+t.cateid).then((function(e){a.channellistdatas=e.data,a.$store.state.showloading=!1,a.$store.state.showrouter=!0,window.localStorage.setItem("channellistdata"+t.cateid,JSON.stringify({endtime:Date.now()+36e5,datas:e.data}))}))}}},V=U,W=(a("e718"),Object(m["a"])(V,q,B,!1,null,"e25b5170",null)),X=W.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"me"},[t._m(0),a("ul",[a("li",[a("a",[a("van-icon",{attrs:{name:"like-o"}}),t._v("我的喜欢 ")],1),a("span",[a("van-icon",{attrs:{name:"arrow"}})],1)]),a("li",[a("a",[a("van-icon",{attrs:{name:"down"}}),t._v("离线缓存 ")],1),a("span",[a("van-icon",{attrs:{name:"arrow"}})],1)]),a("li",[a("a",[a("van-icon",{attrs:{name:"clock-o"}}),t._v("播放历史 ")],1),a("span",[a("van-icon",{attrs:{name:"arrow"}})],1)]),a("li",[a("a",[a("van-icon",{attrs:{name:"chat-o"}}),t._v("我的消息 ")],1),a("span",[a("van-icon",{attrs:{name:"arrow"}})],1)])]),a("ol",[a("li",[a("a",[a("van-icon",{attrs:{name:"discount"}}),t._v("设置 ")],1),a("span",[a("van-icon",{attrs:{name:"arrow"}})],1)]),a("li",[a("a",[a("van-icon",{attrs:{name:"edit"}}),t._v("问题反馈 ")],1),a("span",[a("van-icon",{attrs:{name:"arrow"}})],1)])])])},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("div",[n("img",{attrs:{src:a("cf05")}}),n("span",[t._v("点击登录")])])])}],tt={name:"Me"},et=tt,at=(a("ff00"),Object(m["a"])(et,Y,Z,!1,null,null,null)),nt=at.exports;n["a"].use(b["a"]);var st=[{path:"/",name:"Home",component:z},{path:"/channel",name:"Channel",component:X},{path:"/me",name:"Me",component:nt}],ot=new b["a"]({routes:st}),it=ot,rt=a("2f62");n["a"].use(rt["a"]);var ct=new rt["a"].Store({state:{showrouter:!0,showloading:!1,showplayingpage:!1,showchannellist:!1,homedatas:[],channeldatas:[],playingpagedatas:[]},mutations:{changeplayingpagedatas:function(t,e){t.playingpagedatas=e}},actions:{},modules:{}}),lt=a("b970");a("157a");n["a"].use(lt["a"]),n["a"].config.productionTip=!1,new n["a"]({router:it,store:ct,render:function(t){return t(y)}}).$mount("#app")},"7c55":function(t,e,a){"use strict";var n=a("2395"),s=a.n(n);s.a},"82f0":function(t,e,a){},"8d91":function(t,e,a){},"8e0c":function(t,e,a){},9215:function(t,e,a){"use strict";var n=a("d5d1"),s=a.n(n);s.a},b573:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d49e:function(t,e,a){"use strict";var n=a("505f"),s=a.n(n);s.a},d55b:function(t,e,a){"use strict";var n=a("8e0c"),s=a.n(n);s.a},d5d1:function(t,e,a){},de16:function(t,e,a){"use strict";var n=a("8d91"),s=a.n(n);s.a},e718:function(t,e,a){"use strict";var n=a("b573"),s=a.n(n);s.a},f99e:function(t,e,a){},ff00:function(t,e,a){"use strict";var n=a("82f0"),s=a.n(n);s.a},fffa:function(t,e,a){"use strict";var n=a("f99e"),s=a.n(n);s.a}});
//# sourceMappingURL=app.540e5742.js.map