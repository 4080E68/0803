"use strict";(self["webpackChunkfinal_project"]=self["webpackChunkfinal_project"]||[]).push([[398],{4926:function(t,e,l){l.d(e,{Z:function(){return f}});var a=l(3396),o=l(9242);const d={class:"modal",tabindex:"-1",ref:"modal"},n={class:"modal-dialog"},s={class:"modal-content"},c=(0,a._)("div",{class:"modal-header"},[(0,a._)("h5",{class:"modal-title"},"Modal title"),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),r=(0,a._)("div",{class:"modal-body"},[(0,a._)("p",null,"Modal body text goes here.")],-1),i={class:"modal-footer"},u=(0,a._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1);function h(t,e,l,h,_,b){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",n,[(0,a._)("div",s,[c,r,(0,a._)("div",i,[u,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(0,o.iM)((e=>t.hideModal()),["prevent"]))}," Save changes ")])])])],512)}var _=l(5741),b={data(){return{modal:{}}},mixins:[_.Z]},m=l(89);const p=(0,m.Z)(b,[["render",h]]);var f=p},3702:function(t,e,l){l.r(e),l.d(e,{default:function(){return y}});var a=l(3396),o=l(7139),d=l(9242);const n={class:"container-fluid"},s={class:"table-responsive"},c={class:"table mt-4"},r=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{width:"120"},"訂單日期"),(0,a._)("th",null,"Email"),(0,a._)("th",{width:"200"},"購買款項"),(0,a._)("th",{width:"120"},"應付金額"),(0,a._)("th",{width:"120"},"是否付款"),(0,a._)("th",{width:"120"},"編輯")])],-1),i=(0,a._)("td",null,"2022/08/08",-1),u=(0,a._)("td",null,"zxcv96197@gmail.com",-1),h=(0,a._)("td",null,"...",-1),_={class:"form-check form-switch"},b={class:"btn-group"};function m(t,e,l,m,p,f){const v=(0,a.up)("Loading"),k=(0,a.up)("OrderModal"),w=(0,a.up)("DelOrderModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(v,{active:p.isLoading},null,8,["active"]),(0,a._)("div",n,[(0,a._)("div",s,[(0,a._)("table",c,[r,(0,a._)("tbody",null,[(0,a._)("tr",null,[i,u,h,(0,a._)("td",null,(0,o.zw)(t.$filters.currency(2e3)),1),(0,a._)("td",null,[(0,a._)("div",_,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked","onUpdate:modelValue":e[0]||(e[0]=t=>p.checkPay=t)},null,512),[[d.e8,p.checkPay]]),(0,a._)("label",{class:(0,o.C_)(["form-check-label",{"text-success":p.checkPay,"text-danger":!p.checkPay}]),for:"flexSwitchCheckChecked"},(0,o.zw)(p.checkPay?"已付款":"未付款"),3)])]),(0,a._)("td",null,[(0,a._)("div",b,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e[1]||(e[1]=t=>f.openModal())}," 編輯 "),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e[2]||(e[2]=t=>f.DelModal())}," 刪除 ")])])])])])])]),(0,a.Wm)(k,{ref:"orderModal"},null,512),(0,a.Wm)(w,{ref:"DelOrderModal"},null,512)],64)}var p=l(4926),f=l(3694),v={data(){return{orders:"",isLoading:!1,checkPay:!1}},components:{OrderModal:p.Z,DelOrderModal:f.Z},methods:{getOrder(){const t="https://vue3-course-api.hexschool.io/api/toad-api/admin/orders";this.isLoading=!0,this.$http.get(t).then((t=>{t.data.success&&(this.isLoading=!1,console.log(t),this.order=t.data.orders)}))},openModal(){this.$refs.orderModal.showModal()},DelModal(){this.$refs.DelOrderModal.showDelModal()}},created(){}},k=l(89);const w=(0,k.Z)(v,[["render",m]]);var y=w}}]);
//# sourceMappingURL=398.8e681e18.js.map