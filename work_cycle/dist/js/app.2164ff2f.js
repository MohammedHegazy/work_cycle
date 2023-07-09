(function(){"use strict";var e={6953:function(e,o,t){var n=t(9242),a=t(3396);function r(e,o){const t=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(t)}var s=t(89);const l={},i=(0,s.Z)(l,[["render",r]]);var c=i,d=t(2483),u=t.p+"img/logo.5d7eff08.png",m=t.p+"img/Background2.98989e6d.jpeg";const p=e=>((0,a.dD)("data-v-60dcc47e"),e=e(),(0,a.Cn)(),e),g={class:"home"},_=p((()=>(0,a._)("img",{alt:"Vue logo",src:u,class:"logo"},null,-1))),w=p((()=>(0,a._)("img",{src:m,alt:"",class:"bgimg"},null,-1)));function f(e,o,t,n,r,s){const l=(0,a.up)("NavBar"),i=(0,a.up)("HelloWorld");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",g,[(0,a.Wm)(l),_,(0,a.Wm)(i,{msg:"Work cycle application"})]),w],64)}var h=t(7139),v=t.p+"img/get_from_google.d06a8fce.png",y=t.p+"img/get_from_appstore.81061463.png";const b=e=>((0,a.dD)("data-v-78cf0f5f"),e=e(),(0,a.Cn)(),e),k={class:"hello"},x=b((()=>(0,a._)("p",null,[(0,a.Uk)(" Application for human resources management. "),(0,a._)("br"),(0,a.Uk)(" It helps companies to manage employees by check in and out using a QR code, salary management, tasks management and vacation management. "),(0,a._)("br"),(0,a.Uk)(" Our Application is smooth, easy to use and understandable. ")],-1))),C=b((()=>(0,a._)("h3",null,"Get our application",-1))),I=b((()=>(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",{href:"",target:"_blank",rel:"noopener"},[(0,a._)("img",{src:v,alt:"",class:"getapp"})])]),(0,a._)("li",null,[(0,a._)("a",{href:"",target:"_blank",rel:"noopener"},[(0,a._)("img",{src:y,alt:"",class:"getapp"})])])],-1)));function D(e,o,t,n,r,s){return(0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("h1",null,(0,h.zw)(t.msg),1),x,C,I])}var j={name:"HelloWorld",props:{msg:String}};const S=(0,s.Z)(j,[["render",D],["__scopeId","data-v-78cf0f5f"]]);var B=S;function W(e,o,t,n,r,s){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",null,[(0,a.Wm)(l,{to:"/login",class:"d-flex justify-content-flex-start"},{default:(0,a.w5)((()=>[(0,a.Uk)("Login")])),_:1}),(0,a.Wm)(l,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(l,{to:"/register"},{default:(0,a.w5)((()=>[(0,a.Uk)("Register")])),_:1})])}var U={name:"nav-bar"};const z=(0,s.Z)(U,[["render",W]]);var P=z,O={name:"HomeView",components:{HelloWorld:B,NavBar:P}};const A=(0,s.Z)(O,[["render",f],["__scopeId","data-v-60dcc47e"]]);var E=A;const q=e=>((0,a.dD)("data-v-6c5e3046"),e=e(),(0,a.Cn)(),e),Z={class:"register-vue"},H={class:"container"},V={class:"content"},$={class:"card"},Y={class:"login_form form-group"},M=q((()=>(0,a._)("h1",{class:"text_align"},"welcome to work cycle application",-1))),R=q((()=>(0,a._)("h3",{class:"text_align"}," If you want to be part of this application please register now ",-1))),L={class:"login_form form-group"},N={class:"login_form form-group"},K={class:"login_form form-group"},T={class:"login_form form-group"},J={class:"login_form form-group"},Q={class:"login_form form-group d-flex align-items-center"},F={class:"login_form form-group d-flex align-items-center"},G={class:"login_form form-group"},X=q((()=>(0,a._)("div",{class:"login_form form-group"},[(0,a._)("button",{type:"submit",class:"btn btn-primary form-control"}," Register ")],-1))),ee=q((()=>(0,a._)("img",{src:m,alt:"",class:"bgimg"},null,-1)));function oe(e,o,t,r,s,l){const i=(0,a.up)("NavBar"),c=(0,a.up)("Icon");return(0,a.wg)(),(0,a.iD)("div",Z,[(0,a.Wm)(i),(0,a._)("div",null,[(0,a._)("div",H,[(0,a._)("div",V,[(0,a._)("div",$,[(0,a._)("form",{onSubmit:o[10]||(o[10]=(0,n.iM)((e=>l.register()),["prevent"]))},[(0,a._)("div",Y,[M,R,(0,a._)("div",L,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Enter company name","onUpdate:modelValue":o[0]||(o[0]=e=>s.company_name=e),class:"form-control login_inp",required:""},null,512),[[n.nr,s.company_name]])]),(0,a._)("div",N,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=e=>s.phnum=e),placeholder:"Enter phone number",class:"form-control login_inp",required:""},null,512),[[n.nr,s.phnum]])]),(0,a._)("div",K,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=e=>s.comm_num=e),placeholder:"Enter Commercial Record",class:"form-control login_inp",required:""},null,512),[[n.nr,s.comm_num]])]),(0,a._)("div",T,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=e=>s.idnum=e),placeholder:"Enter ID Number",class:"form-control login_inp",required:""},null,512),[[n.nr,s.idnum]])]),(0,a._)("div",J,[(0,a.wy)((0,a._)("input",{type:"email","onUpdate:modelValue":o[4]||(o[4]=e=>s.email=e),placeholder:"Enter E-mail",class:"form-control login_inp",required:""},null,512),[[n.nr,s.email]])]),(0,a._)("div",Q,[(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":o[5]||(o[5]=e=>s.password=e),placeholder:"Enter your password",class:"form-control login_inp",id:"id_password",required:""},null,512),[[n.nr,s.password]]),(0,a.Wm)(c,{icon:"solar:eye-broken",color:"rgb(150, 150, 150)",id:"togglePassword",style:{"margin-left":"-30px","z-index":"2",cursor:"pointer"},onClick:o[6]||(o[6]=e=>l.showpass(1))})]),(0,a._)("div",F,[(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":o[7]||(o[7]=e=>s.confpassword=e),placeholder:"Confirm your password",class:"form-control login_inp",id:"id_confpassword",required:""},null,512),[[n.nr,s.confpassword]]),(0,a.Wm)(c,{icon:"solar:eye-broken",color:"rgb(150, 150, 150)",id:"toggleconfPassword",style:{"margin-left":"-30px","z-index":"2",cursor:"pointer"},onClick:o[8]||(o[8]=e=>l.showpass(0))})]),(0,a._)("div",G,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":o[9]||(o[9]=e=>s.num_users=e),placeholder:"Enter number of users",class:"form-control login_inp",required:""},null,512),[[n.nr,s.num_users]])]),X])],32)])])])]),ee])}t(7658);var te=t(4161),ne=t(6088),ae={name:"register-vue",data(){return{url_route:"",company_name:"",phnum:"",comm_num:"",idnum:"",email:"",password:"",confpassword:"",num_users:""}},components:{NavBar:P,Icon:ne.JO},methods:{showpass(e){const o=document.getElementById("id_password"),t=document.getElementById("id_confpassword"),n=document.getElementById("togglePassword"),a=document.getElementById("toggleconfPassword");1==e?"password"==o.getAttribute("type")?(o.setAttribute("type","text"),n.style.color="rgb(240, 240, 240)"):(o.setAttribute("type","password"),n.style.color="rgb(150, 150, 150)"):"password"==t.getAttribute("type")?(t.setAttribute("type","text"),a.style.color="rgb(240, 240, 240)"):(t.setAttribute("type","password"),a.style.color="rgb(150, 150, 150)")},register:function(){""!=this.password?""!=this.confpassword?this.password==this.confpassword?(0,te.Z)({method:"post",url:"https://1-taqdeer.com/ServicesProject/public/api/add-company",data:{name:this.company_name,phone:this.phnum,commercial_number:this.comm_num,ID_number:this.idnum,email:this.email,password:this.password,num_of_users:this.num_users}}).then((function(e){window.alert(e.data.name+" regestir succesful"),Mo.push("/")})).catch((function(e){window.alert(e.response.data.message)})):window.alert("password don't match"):window.alert("confirm passwod is empty"):window.alert("password is empty")}}};const re=(0,s.Z)(ae,[["render",oe],["__scopeId","data-v-6c5e3046"]]);var se=re;const le=e=>((0,a.dD)("data-v-7d64253b"),e=e(),(0,a.Cn)(),e),ie={class:"login"},ce={class:"container"},de={class:"content"},ue={class:"card"},me={class:"login_form form-group"},pe=le((()=>(0,a._)("h1",{class:"text_align"},"welcome to work cycle application",-1))),ge=le((()=>(0,a._)("h3",{class:"text_align"},"Login as superadmin",-1))),_e={class:"login_form form-group"},we={class:"login_form form-group d-flex align-items-center"},fe=le((()=>(0,a._)("div",{class:"login_form form-group"},[(0,a._)("button",{type:"submit",class:"btn btn-primary form-control"}," Login ")],-1))),he=le((()=>(0,a._)("img",{src:m,alt:"",class:"bgimg"},null,-1)));function ve(e,o,t,r,s,l){const i=(0,a.up)("NavBar"),c=(0,a.up)("Icon");return(0,a.wg)(),(0,a.iD)("div",ie,[(0,a.Wm)(i),(0,a._)("div",null,[(0,a._)("div",ce,[(0,a._)("div",de,[(0,a._)("div",ue,[(0,a._)("form",{onSubmit:o[3]||(o[3]=(0,n.iM)((e=>l.login()),["prevent"]))},[(0,a._)("div",me,[pe,ge,(0,a._)("div",_e,[(0,a.wy)((0,a._)("input",{name:"number",type:"text",placeholder:"Enter Phone number",class:"form-control login_inp","onUpdate:modelValue":o[0]||(o[0]=e=>s.phnum=e),required:""},null,512),[[n.nr,s.phnum]])]),(0,a._)("div",we,[(0,a.wy)((0,a._)("input",{name:"password",type:"password",id:"id_password",placeholder:"Enter your password",class:"form-control login_inp","onUpdate:modelValue":o[1]||(o[1]=e=>s.password=e),required:""},null,512),[[n.nr,s.password]]),(0,a.Wm)(c,{icon:"solar:eye-broken",color:"rgb(150, 150, 150)",id:"togglePassword",style:{"margin-left":"-30px","z-index":"2",cursor:"pointer"},onClick:o[2]||(o[2]=e=>l.showpass())})]),fe])],32)])])])]),he])}var ye={name:"login-vue",data(){return{phnum:"",password:"",route:""}},components:{NavBar:P,Icon:ne.JO},methods:{showpass(){const e=document.getElementById("id_password"),o=document.getElementById("togglePassword");"password"==e.getAttribute("type")?(e.setAttribute("type","text"),o.style.color="rgb(240, 240, 240)"):(e.setAttribute("type","password"),o.style.color="rgb(150, 150, 150)")},login(){(0,te.Z)({method:"post",url:"https://1-taqdeer.com/ServicesProject/public/api/user-login",data:{phone:this.phnum,password:this.password}}).then((function(e){"super_admin"==e.data.role?(Mo.push("/home"),window.localStorage.setItem("token",e.data.token)):window.alert("Sorry this dashboard is just for super admin")})).catch((function(e){Mo.push("/login"),window.alert(e.response.data.message)}))}}};const be=(0,s.Z)(ye,[["render",ve],["__scopeId","data-v-7d64253b"]]);var ke=be,xe=t.p+"img/Background3.01d55037.jpg";const Ce=e=>((0,a.dD)("data-v-2754d5cc"),e=e(),(0,a.Cn)(),e),Ie={class:"dashboard"},De={class:"container"},je={class:"grey-bg container-fluid"},Se={id:"minimal-statistics"},Be={class:"row"},We={class:"card my_card"},Ue={class:"card-content"},ze={class:"card-body"},Pe={class:"media d-flex"},Oe={class:"align-self-center valign-self-right"},Ae={class:"media-body",style:{"text-align":"right",width:"100%"}},Ee=Ce((()=>(0,a._)("img",{src:xe,class:"bgimg",alt:""},null,-1)));function qe(e,o,t,n,r,s){const l=(0,a.up)("Icon"),i=(0,a.up)("RouterLink"),c=(0,a.up)("SideBar");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",Ie,[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a._)("div",De,[(0,a._)("div",je,[(0,a._)("section",Se,[(0,a._)("div",Be,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.Companies,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"col-xl-3 col-sm-6 col-12 p-card",key:e.name},[(0,a.Wm)(i,{to:"/companyinfo",onClick:o=>s.changeid(e.id)},{default:(0,a.w5)((()=>[(0,a._)("div",We,[(0,a._)("div",Ue,[(0,a._)("div",ze,[(0,a._)("div",Pe,[(0,a._)("div",Oe,[(0,a.Wm)(l,{icon:"mdi:company",color:"royalblue",width:"40",height:"40"})]),(0,a._)("div",Ae,[(0,a._)("h3",null,(0,h.zw)(e.name),1),(0,a._)("span",null,"Users:"+(0,h.zw)(e.num_of_users),1)])])])])])])),_:2},1032,["onClick"])])))),128))])])])])])),_:1})]),Ee],64)}var Ze=t.p+"img/pngtree-employee-icon-design-template-vector-isolated-png-image_856368.32125841.png";const He=e=>((0,a.dD)("data-v-4d8876a3"),e=e(),(0,a.Cn)(),e),Ve={class:"sidebar"},$e={id:"wrapper"},Ye=He((()=>(0,a._)("div",{class:"overlay"},null,-1))),Me={class:"navbar navbar-inverse fixed-top",id:"sidebar-wrapper",role:"navigation"},Re={class:"nav sidebar-nav"},Le=He((()=>(0,a._)("div",{class:"sidebar-header"},[(0,a._)("div",{class:"sidebar-brand"},[(0,a._)("a",{href:"#"},[(0,a._)("img",{src:Ze,alt:"",style:{height:"100px",width:"100px"}})])])],-1))),Ne={class:"d-flex justify-content-start"},Ke={class:"d-flex justify-content-start"},Te={class:"d-flex justify-content-start"},Je={id:"page-content-wrapper"},Qe=He((()=>(0,a._)("button",{type:"button",class:"hamburger animated fadeInLeft is-closed","data-toggle":"offcanvas"},[(0,a._)("span",{class:"hamb-top"}),(0,a._)("span",{class:"hamb-middle"}),(0,a._)("span",{class:"hamb-bottom"})],-1))),Fe={class:"container"},Ge={class:"row"},Xe={class:"col-lg-12 col-lg-offset-2"};function eo(e,o,t,n,r,s){const l=(0,a.up)("Icon"),i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Uk)((0,h.zw)(s.sidebar())+" ",1),(0,a._)("div",Ve,[(0,a._)("div",$e,[Ye,(0,a._)("nav",Me,[(0,a._)("ul",Re,[Le,(0,a._)("li",Ne,[(0,a.Wm)(i,{to:"/home"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{icon:"mdi:company",width:"25",height:"25"}),(0,a.Uk)(" Companies")])),_:1})]),(0,a._)("li",Ke,[(0,a.Wm)(i,{to:"/orders"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{icon:"material-symbols:order-approve-outline",width:"25",height:"25"}),(0,a.Uk)(" Orders")])),_:1})]),(0,a._)("li",Te,[(0,a.Wm)(i,{to:"/login",onClick:o[0]||(o[0]=e=>s.cleartoken())},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{icon:"grommet-icons:logout",width:"25",height:"25"}),(0,a.Uk)(" Logut")])),_:1})])])]),(0,a._)("div",Je,[Qe,(0,a._)("div",Fe,[(0,a._)("div",Ge,[(0,a._)("div",Xe,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])])])])])])],64)}var oo={name:"SideBar",components:{Icon:ne.JO},methods:{sidebar(){window.$(document).ready((function(){var e=window.$(".hamburger"),o=window.$(".overlay"),t=!1;function n(){1==t?(o.hide(),e.removeClass("is-open"),e.addClass("is-closed"),t=!1):(o.show(),e.removeClass("is-closed"),e.addClass("is-open"),t=!0)}e.click((function(){n()})),window.$('[data-toggle="offcanvas"]').click((function(){window.$("#wrapper").toggleClass("toggled")}))}))},cleartoken(){window.localStorage.removeItem("token")}},mounted(){this.sidebar()}};const to=(0,s.Z)(oo,[["render",eo],["__scopeId","data-v-4d8876a3"]]);var no=to,ao=t(65),ro=(0,ao.MT)({state(){return{id:0}},getters:{},mutations:{},actions:{},modules:{}}),so={name:"DashBoard",data(){return{Companies:[]}},components:{SideBar:no,Icon:ne.JO},methods:{changeid(e){ro.state.id=e},getdata(){const e=window.localStorage.getItem("token");(0,te.Z)({url:"https://1-taqdeer.com/ServicesProject/public/api/get-companies",method:"get",headers:{Authorization:`Bearer ${e}`}}).then((e=>{this.Companies=e.data})).catch((e=>{window.alert(e.respnose)}))}},beforeMount(){this.getdata()}};const lo=(0,s.Z)(so,[["render",qe],["__scopeId","data-v-2754d5cc"]]);var io=lo;const co={class:"oreders"},uo={class:"container"},mo={class:"table-responsive",style:{opacity:"0.8"}},po={class:"table table-dark"},go=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Compny name"),(0,a._)("th",null,"Phone number"),(0,a._)("th",null,"ID number"),(0,a._)("th",null,"Commercial record"),(0,a._)("th",null,"Email"),(0,a._)("th",null,"Accept"),(0,a._)("th",null,"Reject")])],-1),_o=["onClick"],wo=["onClick"],fo=(0,a._)("img",{src:xe,class:"bgimg",alt:""},null,-1);function ho(e,o,t,n,r,s){const l=(0,a.up)("SideBar");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",co,[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a._)("div",uo,[(0,a._)("div",mo,[(0,a._)("table",po,[go,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.companies,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,h.zw)(e.name),1),(0,a._)("td",null,(0,h.zw)(e.phone),1),(0,a._)("td",null,(0,h.zw)(e.ID_number),1),(0,a._)("td",null,(0,h.zw)(e.commercial_number),1),(0,a._)("td",null,(0,h.zw)(e.email),1),(0,a._)("td",null,[(0,a._)("button",{class:"btn btn-primary",onClick:o=>s.accepted(e.id)}," Accept ",8,_o)]),(0,a._)("td",null,[(0,a._)("button",{class:"btn btn-primary",onClick:o=>s.rejected(e.id)}," reject ",8,wo)])])))),128))])])])])])),_:1})]),fo],64)}var vo={name:"OrdersView",data(){return{companies:[]}},components:{SideBar:no},methods:{getorders(){const e=window.localStorage.getItem("token");(0,te.Z)({method:"get",url:"https://1-taqdeer.com/ServicesProject/public/api/get-all-orders",headers:{Authorization:`Bearer ${e}`}}).then((e=>{this.companies=e.data})).catch((function(e){window.alert(e.response)}))},accepted(e){const o=window.localStorage.getItem("token");(0,te.Z)({method:"post",url:"https://1-taqdeer.com/ServicesProject/public/api/acc-rej/"+e,headers:{Authorization:`Bearer ${o}`},data:{status:1}}).then((e=>{window.alert(e.data),Mo.go(Mo.currentRoute)})).catch((e=>{window.alert(e.response.data.message)}))},rejected(e){const o=window.localStorage.getItem("token");(0,te.Z)({method:"post",url:"https://1-taqdeer.com/ServicesProject/public/api/acc-rej/"+e,headers:{Authorization:`Bearer ${o}`},data:{status:0}}).then((e=>{window.alert(e.data),Mo.go(Mo.currentRoute)})).catch((e=>{window.alert(e.response.data.message)}))}},beforeMount(){this.getorders()}};const yo=(0,s.Z)(vo,[["render",ho]]);var bo=yo;const ko=e=>((0,a.dD)("data-v-8de7ad76"),e=e(),(0,a.Cn)(),e),xo={class:"companyinfo",style:{color:"black"}},Co={class:"container",style:{"max-width":"50rem"}},Io={class:"card bg-dark",style:{opacity:"0.8"}},Do={class:"card-title",style:{color:"white"}},jo={class:"list-group list-group-flush"},So={class:"list-group-item"},Bo={class:"list-group-item"},Wo={class:"list-group-item"},Uo={class:"row"},zo={class:"card-body"},Po={class:"card-title",style:{color:"white"}},Oo={class:"list-group list-group-flush"},Ao={class:"list-group-item"},Eo=ko((()=>(0,a._)("img",{src:xe,class:"bgimg",alt:""},null,-1)));function qo(e,o,t,n,r,s){const l=(0,a.up)("SideBar");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",xo,[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a._)("div",Co,[(0,a._)("div",Io,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.company_details,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"card-body",key:e.id},[(0,a._)("div",Do," Company name: "+(0,h.zw)(e.name),1),(0,a._)("ul",jo,[(0,a._)("li",So," Company Phone number: "+(0,h.zw)(e.phone),1),(0,a._)("li",Bo," Company Commercial record: "+(0,h.zw)(e.commercial_number),1),(0,a._)("li",Wo,"Company email: "+(0,h.zw)(e.email),1)])])))),128))]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.company_details,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"m-3",style:{opacity:"0.8"},key:e.id},[(0,a._)("div",Uo,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.users,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"col-12 card bg-dark",key:e.id},[(0,a._)("div",zo,[(0,a._)("div",Po," Users name: "+(0,h.zw)(e.name),1),(0,a._)("ul",Oo,[(0,a._)("li",Ao," User Phone number: "+(0,h.zw)(e.phone),1)])])])))),128))])])))),128))])])),_:1})]),Eo],64)}var Zo={data(){return{company_details:[]}},components:{SideBar:no},methods:{loaddata(){const e=window.localStorage.getItem("token");(0,te.Z)({url:"https://1-taqdeer.com/ServicesProject/public/api/get-company/"+ro.state.id,method:"get",headers:{Authorization:`Bearer ${e}`}}).then((e=>{this.company_details=e.data})).catch((e=>{window.alert(e.response)}))}},beforeMount(){this.loaddata()}};const Ho=(0,s.Z)(Zo,[["render",qo],["__scopeId","data-v-8de7ad76"]]);var Vo=Ho;const $o=[{path:"/",name:"home",component:E},{path:"/register",name:"register",component:se},{path:"/login",name:"login",component:ke},{path:"/home",name:"dashboard",component:io},{path:"/orders",name:"orders",component:bo},{path:"/companyinfo",name:"companyinfo",component:Vo}],Yo=(0,d.p7)({history:(0,d.PO)("/"),routes:$o});var Mo=Yo,Ro=(t(2166),t(7387)),Lo=t.n(Ro);window.$=window.jQuery=Lo(),(0,n.ri)(c).use(ro).use(Mo).mount("#app")}},o={};function t(n){var a=o[n];if(void 0!==a)return a.exports;var r=o[n]={exports:{}};return e[n].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(o,n,a,r){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],r=e[d][2];for(var l=!0,i=0;i<n.length;i++)(!1&r||s>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[i])}))?n.splice(i--,1):(l=!1,r<s&&(s=r));if(l){e.splice(d--,1);var c=a();void 0!==c&&(o=c)}}return o}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,a,r]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var a,r,s=n[0],l=n[1],i=n[2],c=0;if(s.some((function(o){return 0!==e[o]}))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(i)var d=i(t)}for(o&&o(n);c<s.length;c++)r=s[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},n=self["webpackChunkwork_cycle"]=self["webpackChunkwork_cycle"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(6953)}));n=t.O(n)})();
//# sourceMappingURL=app.2164ff2f.js.map