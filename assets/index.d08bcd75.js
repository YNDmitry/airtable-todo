import{r as u,o as l,c as d,a as t,b as r,w as p,d as y,F as D,e as E,E as P,f as N,g as v,h as T,T as g,i as $,t as f,n as b,j as w,k as j,l as S,m as M,p as O,q,s as H}from"./vendor.4a80f84c.js";const B=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))h(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&h(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function h(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};B();var _=(e,a)=>{const n=e.__vccOpts||e;for(const[h,s]of a)n[h]=s;return n};const z={},K={role:"header",class:"header fixed top-0 left-0 right-0 px-6 py-2 bg-slate-900 text-white"},I={class:"flex"},R=t("a",null,[t("div",null,"Airtable todo")],-1),U={class:"ml-auto"},J=y("Home"),G=y("Profile"),Q=y("Log in");function W(e,a,n,h,s,o){const i=u("router-link");return l(),d("header",K,[t("div",I,[R,t("div",U,[r(i,{to:"/",class:"mx-2"},{default:p(()=>[J]),_:1}),r(i,{to:"/profile",class:"mx-2"},{default:p(()=>[G]),_:1}),r(i,{to:"/login",class:"mx-2"},{default:p(()=>[Q]),_:1})])])])}var k=_(z,[["render",W]]);const Z={},V=t("h1",null,"Login",-1),X=[V];function Y(e,a,n,h,s,o){return l(),d("div",null,X)}var tt=_(Z,[["render",Y]]);const L="keyEP1Ky8tJP7sodr",A="https://api.airtable.com/v0/appVgmiQc5iKntuOo/Tasks?api_key=keyEP1Ky8tJP7sodr";var et="https://yndmitry.github.io/airtable-todo/assets/times-solid.115f5fad.svg";const st={name:"DynamicForm",components:{Field:D,Form:E,ErrorMessage:P},data(){return{schema:N().shape({name:v().required(),email:v().email().required(),spent:T().required().min(10),country:v().required()}),isStatus:null}},emits:["ldData","hide","submitAlert","setStatus"],methods:{hideForm(){this.$emit("hide")},setStatus(){this.$emit("setStatus",{status:this.isStatus})},async onSubmit(e){const a={records:[{fields:{Name:e.name,Email:e.email,Spent:e.spent,Country:e.country,Avatar:[{url:e.avatar?e.avatar:""}]}}],typecast:!0};let n=await fetch(A,{method:"POST",headers:{Authorization:"Bearer "+L,"Content-Type":"application/json"},body:JSON.stringify(a)});this.isStatus=n.ok,n.ok?(this.setStatus(),this.hideForm(),this.$emit("ldData"),this.$emit("submitAlert")):this.$emit("submitAlert")}}},ot={class:"fixed z-10"},at={class:"bg-black/50 py-10 text-white text-center z-70 relative"},nt=t("h1",{class:"text-5xl"},"Add user",-1),it={class:"flex flex-wrap justify-center flex-col m-auto mb-3 mx-28 text-left"},rt={class:"flex flex-col mx-2 my-3 overflow-hidden relative"},lt={class:"flex flex-col mx-2 my-3"},ct={class:"flex flex-col mx-2 my-3"},dt={class:"flex flex-col mx-2 my-3"},ht={class:"flex flex-col mx-2 my-3"},_t=t("option",{value:""},"Select country",-1),ut=t("option",{value:"RU"},"Russia",-1),mt=t("option",{value:"NZ"},"New Zealand",-1),pt=t("option",{value:"USA"},"USA",-1),ft=t("option",{value:"AD"},"Amsterdam",-1),xt=t("option",{value:"GM"},"Germany",-1),yt=t("option",{value:"PS"},"Paris",-1),vt=t("button",{type:"submit",class:"w-1/6 m-auto bg-green-500 text-white py-2"}," Add ",-1),gt=t("img",{src:et,width:"25",class:"text-white"},null,-1),$t=[gt];function bt(e,a,n,h,s,o){const i=u("Field"),m=u("ErrorMessage"),x=u("Form");return l(),d($,null,[r(g,{name:"pop",appear:""},{default:p(()=>[t("div",ot,[t("div",at,[nt,r(x,{"validation-schema":s.schema,onSubmit:o.onSubmit,class:"flex flex-col justify-center p-4 text-black w-30 h-1/2 mt-9"},{default:p(()=>[t("div",it,[t("div",rt,[r(i,{name:"avatar",type:"text",placeholder:"Avatar"}),r(m,{name:"avatar",class:"text-red-400"})]),t("div",lt,[r(i,{name:"name",type:"text",placeholder:"Name"}),r(m,{name:"name",class:"text-red-400"})]),t("div",ct,[r(i,{name:"email",type:"email",placeholder:"Email"}),r(m,{name:"email",class:"text-red-400"})]),t("div",dt,[r(i,{name:"spent",type:"number",placeholder:"Spent"}),r(m,{name:"spent",class:"text-red-400"})]),t("div",ht,[r(i,{as:"select",name:"country"},{default:p(()=>[_t,ut,mt,pt,ft,xt,yt]),_:1}),r(m,{name:"country",class:"text-red-400"})])]),vt]),_:1},8,["validation-schema","onSubmit"])]),t("button",{onClick:a[0]||(a[0]=(...c)=>o.hideForm&&o.hideForm(...c)),type:"button",class:"h-6 absolute right-5 top-2 text-4xl text-white"},$t)])]),_:1}),r(g,{name:"fade",appear:""},{default:p(()=>[t("div",{onClick:a[1]||(a[1]=(...c)=>o.hideForm&&o.hideForm(...c)),class:"fixed top-0 bottom-0 right-0 left-0 bg-black/80"})]),_:1})],64)}var wt=_(st,[["render",bt]]);const St={data(){return{isClosed:!1}},props:{title:{type:String,required:!0},description:{type:String,required:!1},status:{type:Boolean,required:!1}},methods:{show(){this.isClosed==!1?this.isClosed=!0:this.isClosed=!1},type(e){return e===!0?"bg-green-100 border-green-400 text-green-700":"bg-red-100 border-red-400 text-red-700"}},watch:{isClosed(e){}}},kt={class:"font-bold"},Lt={class:"block sm:inline"},At=t("title",null,"Close",-1),Ct=t("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"},null,-1),Ft=[At,Ct];function Dt(e,a,n,h,s,o){return s.isClosed?(l(),d("div",{key:0,class:b(["border px-4 pr-12 py-3 rounded fixed top-4 right-4 z-10",o.type(e.$props.status)]),role:"alert"},[t("strong",kt,f(n.title),1),t("span",Lt,f(n.description?" "+n.description:""),1),t("span",{class:"absolute top-0 bottom-0 right-0 px-4 py-3",onClick:a[0]||(a[0]=(...i)=>o.show&&o.show(...i))},[(l(),d("svg",{class:b(["fill-current h-6 w-6 text-green-500",e.$props.status?"text-green-500":"text-red-500"]),role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Ft,2))])],2)):w("",!0)}var Et=_(St,[["render",Dt]]);const Pt={},Nt={width:"20",height:"20","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times",class:"svg-inline--fa fa-times fa-w-11",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},Tt=t("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},null,-1),jt=[Tt];function Mt(e,a){return l(),d("svg",Nt,jt)}var Ot=_(Pt,[["render",Mt]]);const qt={name:"Home",components:{DynamicForm:wt,TheAlert:Et,closeIco:Ot},data(){return{isLoading:!0,tableData:null,isForm:!1,alertStatus:null,alertTitle:"Done",placeholderImage:"https://api-private.atlassian.com/users/8f525203adb5093c5954b43a5b6420c2/avatar"}},mounted(){this.loadData(),this.loading()},methods:{showAlert(){this.$refs.alert.show()},getStatus(e){return this.alertStatus=e.status},loading(){this.tableData!==null?this.isLoading=!1:this.isLoading=!0},async loadData(){let e=await fetch(A);if(e.ok){let a=await e.json();this.tableData=a.records,this.isLoading=!1}else this.alertTitle="Error "+e.status,this.alertStatus=e.ok,this.showAlert()},async remove(e,a){(await fetch(`https://api.airtable.com/v0/appVgmiQc5iKntuOo/Tasks/${e}?api_key=${L}`,{method:"DELETE"})).ok?(this.tableData.splice(a,1),this.showAlert()):(this.alertTitle="Error",this.showAlert())},showForm(){this.isForm===!1?this.isForm=!0:this.isForm=!1}}},Ht={class:"antialiased bg-gray-100 text-gray-600 h-screen px-4 flex items-center justify-center"},Bt={class:"flex flex-col justify-center h-full w-max min-w-full"},zt={class:"w-full max-w-5xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200"},Kt=t("header",{class:"px-5 py-4 border-b border-gray-100"},[t("h2",{class:"font-semibold text-gray-800"},"Customers")],-1),It={class:"text-center"},Rt={class:"p-3"},Ut={class:"overflow-x-auto"},Jt={class:"table-auto w-full"},Gt=t("thead",{class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},[t("tr",null,[t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Name")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Email")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Spent")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-center"},"Country")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-center"})])])],-1),Qt={key:0,class:"p-2 m-auto"},Wt={key:1,class:"p-2 mx-auto"},Zt={key:2,class:"text-sm divide-y divide-gray-100"},Vt=["id"],Xt={class:"p-2 whitespace-nowrap"},Yt={class:"flex items-center"},te={class:"w-10 h-10 flex justify-center flex-shrink-0 mr-2 sm:mr-3"},ee=["src","alt"],se={class:"font-medium text-gray-800"},oe={class:"p-2 whitespace-nowrap"},ae={class:"text-left"},ne={class:"p-2 whitespace-nowrap"},ie={class:"text-left font-medium text-green-500"},re={class:"p-2 whitespace-nowrap"},le={class:"text-lg text-center"},ce={class:"p-2 whitespace-nowrap text-center"},de=["onClick"];function he(e,a,n,h,s,o){const i=u("close-ico"),m=u("dynamic-form"),x=u("the-alert");return l(),d("section",Ht,[t("div",Bt,[t("div",zt,[Kt,t("div",It,[t("button",{onClick:a[0]||(a[0]=(...c)=>o.showForm&&o.showForm(...c)),type:"button",class:"w-1/2 m-auto bg-green-500 text-white py-2 my-4"}," I WANT TO ADD A USER ")]),t("div",Rt,[t("div",Ut,[t("table",Jt,[Gt,s.isLoading?(l(),d("h1",Qt,"Loading...")):s.tableData.length<=0?(l(),d("h1",Wt," Customers is empty ")):(l(),d("tbody",Zt,[(l(!0),d($,null,j(s.tableData,(c,F)=>(l(),d("tr",{key:c,id:c.id},[t("td",Xt,[t("div",Yt,[t("div",te,[t("img",{class:"rounded-full object-cover",src:c.fields.Avatar?c.fields.Avatar[0].url:s.placeholderImage,width:"40",height:"40",alt:c.fields.Name},null,8,ee)]),t("div",se,f(c.fields.Name),1)])]),t("td",oe,[t("div",ae,f(c.fields.Email),1)]),t("td",ne,[t("div",ie,f("$"+c.fields.Spent),1)]),t("td",re,[t("div",le,f(c.fields.Country?c.fields.Country:"-"),1)]),t("td",ce,[t("button",{type:"button",class:"text-lg",onClick:Oe=>o.remove(c.id,F)},[r(i)],8,de)])],8,Vt))),128))]))])])])])]),s.isForm?(l(),S(m,{key:0,onLdData:o.loadData,onHide:o.showForm,onSubmitAlert:o.showAlert,onSetStatus:o.getStatus},null,8,["onLdData","onHide","onSubmitAlert","onSetStatus"])):w("",!0),r(x,{ref:"alert",title:s.alertTitle,status:s.alertStatus},null,8,["title","status"])])}var C=_(qt,[["render",he]]);const _e={name:"Main",components:{TheHeader:k,HomePage:C}};function ue(e,a,n,h,s,o){const i=u("the-header"),m=u("home-page");return l(),d("div",null,[r(i),r(m)])}var me=_(_e,[["render",ue]]);const pe={},fe=t("h1",null,"Profile",-1),xe=[fe];function ye(e,a,n,h,s,o){return l(),d("div",null,xe)}var ve=_(pe,[["render",ye]]);const ge={},$e=t("h1",null,"Empty page",-1),be=[$e];function we(e,a,n,h,s,o){return l(),d("div",null,be)}var Se=_(ge,[["render",we]]);const ke={components:{TheHeader:k,EmptyLayout:Se,Login:tt,Main:me,Profile:ve},data(){return{layout:null}},watch:{$route(e){if(e.meta.layout!==void 0)return this.layout=e.meta.layout;this.layout="Main"}}};function Le(e,a,n,h,s,o){const i=u("router-view");return l(),S(M(s.layout),null,{default:p(()=>[r(i)]),_:1})}var Ae=_(ke,[["render",Le]]);const Ce={};function Fe(e,a,n,h,s,o){return l(),d("div")}var De=_(Ce,[["render",Fe]]);const Ee={};function Pe(e,a,n,h,s,o){return l(),d("div")}var Ne=_(Ee,[["render",Pe]]);const Te=[{name:"Home",path:"/",meta:{layout:"Main"},component:C},{name:"Login",path:"/login",meta:{layout:"Login"},component:Ne},{name:"Profile",path:"/profile",meta:{layout:"Profile"},component:De}],je=O(),Me=q({history:je,routes:Te});H(Ae).use(Me).mount("#app");