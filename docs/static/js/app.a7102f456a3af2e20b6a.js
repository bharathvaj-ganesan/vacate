webpackJsonp([0],{NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("/5sW"),n={props:{website:{type:Object,required:!0}},computed:{url:function(){return this.website.url.trim()}}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("img",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{src:this.url}})},staticRenderFns:[]};var l=e("VU/8")(n,s,!1,function(t){e("h0jg")},null,null).exports,u=e("zZOc"),r=e.n(u),i=e("RUzx"),c={name:"vacate",data:function(){return{display:!1,selectedWebsites:[],websitesList:r.a}},components:{appWebsite:l,Multiselect:e.n(i).a},methods:{logout:function(){this.selectedWebsites&&0===this.selectedWebsites.length?this.$popup({message:"Please select atleast one service to proceed",color:"#FFFFFF",backgroundColor:"#F44336",delay:8}):(this.display=!0,this.$popup({message:"Yay!! You Have Been Logged Out",color:"#FFFFFF",backgroundColor:"#FFC107",delay:8}))},clearDisplay:function(){this.display=!1}}},m={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"vacate"},[e("vue-up"),t._v(" "),t._m(0),t._v(" "),e("multiselect",{staticClass:"vacate__multiselect",attrs:{options:t.websitesList,label:"name",multiple:!0,trackBy:"name",placeholder:"I want to log out from ...","preserve-search":!1,"clear-on-select":!1,"aria-placeholder":"Choose Websites","hide-selected":!0},on:{open:t.clearDisplay},model:{value:t.selectedWebsites,callback:function(o){t.selectedWebsites=o},expression:"selectedWebsites"}}),t._v(" "),e("div",{staticClass:"vacate__btn"},[e("a",{staticClass:"btn btn__white",on:{click:t.logout}},[t._v("Logout")])]),t._v(" "),t.display?e("div",t._l(t.selectedWebsites,function(t){return e("app-website",{key:t.name,attrs:{website:t}})})):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("header",{staticClass:"vacate__header"},[o("h1",{staticClass:"heading-primary"},[o("span",{staticClass:"heading-primary--main"},[this._v("Vacate")]),this._v(" "),o("span",{staticClass:"heading-primary--sub"},[this._v("Vacate yourself before you leave the browser")])])])}]};var p={name:"app",components:{Home:e("VU/8")(c,m,!1,function(t){e("v/xT")},"data-v-ef76fac4",null).exports}},h={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",[this._m(0),this._v(" "),o("div",{attrs:{id:"app"}},[o("Home")],1)])},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("a",{attrs:{href:"https://github.com/bharathvaj1995/vacate"}},[o("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0"},attrs:{src:"https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67",alt:"Hit Star on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"}})])}]};var g=e("VU/8")(p,h,!1,function(t){e("WCWa")},null,null).exports,w=e("cXVI"),d=e.n(w);e("tLvy");a.default.config.productionTip=!1,a.default.use(d.a),new a.default({el:"#app",render:function(t){return t(g)}})},WCWa:function(t,o){},h0jg:function(t,o){},tLvy:function(t,o){},"v/xT":function(t,o){},zZOc:function(t,o){t.exports=[{name:"Chargebee",url:"https://app.chargebee.com/logout"},{name:"Instagram",url:"https://www.instagram.com/accounts/logout/"},{name:"Meetup",url:"https://www.meetup.com/logout/"},{name:"Product Hunt",url:"https://www.producthunt.com/logout"},{name:"Periscope",url:"https://www.pscp.tv/i/logout"},{name:"Zoho",url:"https://mail.zoho.com/biz/logout"},{name:"Zomato",url:"https://www.zomato.com/logout?noReturnOnLogout=FALSE"},{name:"Pizzhut",url:"https://online.pizzahut.co.in/user-logout"},{name:"Starbucks",url:"https://www.starbucks.com/account/signin"},{name:"Dominoz",url:"https://pizzaonline.dominos.co.in/logout?flag=true"},{name:"Uber",url:"https://riders.uber.com/logout"},{name:"Flipkart",url:"https://www.flipkart.com/api/2/user/logout"},{name:"Pocket",url:"https://getpocket.com/logout"},{name:"Google",url:"https://www.google.com/accounts/Logout"},{name:"Typeform",url:"https://admin.typeform.com/login/logout"},{name:"NetFlix",url:"https://www.netflix.com/logout"},{name:"Tumblr",url:"https://www.tumblr.com/logout"},{name:"IFTTT",url:"https://ifttt.com/session/logout"},{name:"Zapier",url:"https://zapier.com/logout"},{name:"Hotstar",url:"https://account.hotstar.com/AVS/besc?action=Logout&channel=PCTV&appVersion=5.0.40"},{name:"Amazon",url:"https://www.amazon.in/gp/flex/sign-out.html/ref=nav_youraccount_nav_youraccount_signout?ie=UTF8&action=sign-out"},{name:"Vimeo",url:"http://vimeo.com/log_out"},{name:"Threadless",url:"http://www.threadless.com/logout"},{name:"Dropbox",url:"https://www.dropbox.com/logout"},{name:"Blogger",url:"http://www.blogger.com/logout.g"},{name:"Delicious",url:"http://www.delicious.com/logout"},{name:"Instapaper",url:"http://www.instapaper.com/user/logout"},{name:"Slashdot",url:"http://slashdot.org/my/logout"},{name:"ThinkGeek",url:"https://www.thinkgeek.com/brain/account/login.cgi?a=lo"},{name:"Woot",url:"https://account.woot.com/logout"},{name:"Linkedin",url:"https://www.linkedin.com/m/logout/"},{name:"Yahoo!",url:"https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=http://www.yahoo.com/"},{name:"Photobucket",url:"http://photobucket.com/logout"},{name:"Skype",url:"https://secure.skype.com/account/logout"},{name:"Gandi",url:"https://www.gandi.net/login/out"},{name:"SBI Bank",url:"https://www.onlinesbi.com/retail/logout.htm"},{name:"Coutts Bank",url:"https://www.coutts.com/logout.html"},{name:"Atlassian",url:"https://id.atlassian.com/logout"},{name:"HDFC Bank",url:"https://www.hdfcbank.com/htdocs/common/NetBanking/logout.html"},{name:"Clydesdale Bank",url:"https://home.cbonline.co.uk/pkmslogout"},{name:"Fifth Third Bank",url:"www.53.com/content/fifth-third/en/logout.html"},{name:"New York Times",url:"https://myaccount.nytimes.com/gst/signout"},{name:"Office 365",url:"https://login.microsoftonline.com/logout.srf"},{name:"Gumtree",url:"https://my.gumtree.com/logout"},{name:"Fitbit",url:"https://www.fitbit.com/logout"},{name:"StatCounter",url:"https://statcounter.com/logout/"},{name:"irctc",url:"https://www.irctc.co.in/eticketing/logout?out"},{name:"Poloniex",url:"https://poloniex.com/logout"},{name:"M&T Bank",url:"https://onlinebanking.mtb.com/Information/LogOut"},{name:"South State Bank",url:"https://www.southstatebank.com/logout/"},{name:"Singapore Airlines",url:"https://www.singaporeair.com/en_UK/krisshop-logout.form/"},{name:"Pepsico",url:"https://sso.mypepsico.com/login/logout.jsp"},{name:"Vodafone India",url:"https://myvodafone.vodafone.in/customerselfcare/logout"},{name:"Naukri.com",url:"login.naukri.com/nLogin/Logout.php"},{name:"Ticketmaster",url:"https://www.ticketmaster.com/member/logout"},{name:"IDFC Bank",url:"https://www.idfcbank.com/logout-app.html"},{name:"Geni",url:"https://www.geni.com/logout"},{name:"Beyond Bank",url:"https://online.beyondbank.com.au/logout"},{name:"Verizon",url:"https://login.vzw.com/cdsso/public/c/logout"},{name:"American Funds",url:"https://www.americanfunds.com/individual/accounts/logout.htm"},{name:"Cisco",url:"https://www.cisco.com/c/m/en_us/about/logout.html"},{name:"Freshbooks",url:"https://my.freshbooks.com/#/logout"},{name:"Paypal",url:"https://www.paypal.com/uk/webapps/mpp/logout/act"},{name:"AGS Cinemas",url:"https://www.agscinemas.com/logout.php"},{name:"Bigbasket",url:"https://www.bigbasket.com/auth/logout/"},{name:"Yatra",url:"https://www.yatra.com/social/common/user/doLogout.htm"},{name:"99acres",url:"https://www.99acres.com/do/logout/out"},{name:"Snapdeal",url:"https://www.snapdeal.com/logout"},{name:"Swiggy",url:"https://www.swiggy.com/dapi/auth/logout"},{name:"Ulster Bank",url:"https://digital.ulsterbank.ie/globals/anytime-logout.html"},{name:"Udemy",url:"https://www.udemy.com/user/logout/"},{name:"Freecodecamp",url:"https://www.freecodecamp.org/signout"},{name:"Jsfiddle",url:"https://jsfiddle.net/user/logout/"},{name:"JsBin",url:"https://jsbin.com/logout"},{name:"PickYourTrail",url:"https://pickyourtrail.com/user/logout"}]}},["NHnr"]);
//# sourceMappingURL=app.a7102f456a3af2e20b6a.js.map