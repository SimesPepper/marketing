(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(24).concat([function(e,t,a){e.exports=a.p+"static/media/image_burned.45563178.png"},function(e,t,a){e.exports=a.p+"static/media/simes_bottle_top_burned.edebbe86.png"},function(e,t,a){e.exports=a.p+"static/media/peppers_on_board.72b4c705.jpg"},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/white_logo.22b189eb.png"},,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/simes_bottle_burned.47c77bb4.png"},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/spoons&pepper.88f6973e.jpg"},,,,,function(e,t,a){e.exports=a(129)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/bottles_of_sauce.63dc79d5.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/cuttingboard_pork.59b271f9.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/hot-peppers.75545692.jpg"},function(e,t,a){e.exports=a.p+"static/media/black_plate_pork.30dfe61b.jpg"},function(e,t,a){e.exports=a.p+"static/media/dry-flavors-herbs.10f1d129.jpg"},function(e,t,a){e.exports=a.p+"static/media/bell-pepper-left.cbdc7ddc.jpg"},function(e,t,a){e.exports=a.p+"static/media/blur-pepper.2567bc4d.jpg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a(4),s=a(2),i=a(21),o=a.n(i),m=a(3),u=a.n(m),p=(a(42),a(7)),d=a(9),E=(a(44),a(97),function(e){return Object(n.useEffect)(function(){window.addEventListener("scroll",function(){window.scrollY>=900?document.querySelector(".footer2").classList.add("slide-up"):document.querySelector(".footer2").classList.remove("slide-up")})}),c.a.createElement("div",{className:"footer2"},c.a.createElement("p",{className:"email"},"Simespepper@gmail.com"),c.a.createElement("div",{className:"contacts"},c.a.createElement("a",{href:"https://www.instagram.com/simes.pepper/",target:"_blank"},c.a.createElement("i",{class:"fab fa-instagram fa-2x"})),c.a.createElement("a",{href:"mailto:Simespepper@gmail.com?Subject=Si'me's pepper"},c.a.createElement("i",{class:"far fa-envelope fa-2x"}))),c.a.createElement("p",null,"Si'me's Pepper\xa9 | 2020"))}),f=function(e){return c.a.createElement(l.b,{to:"/"}," ",c.a.createElement("img",{src:a(35),alt:"Sime's Pepper logo, white",className:"logo"})," ")},h=a(17),b=(a(100),a(160)),v=a(158),g=a(41),N=a(157),O=a(13),j=a(5),k=a(20),y=a.n(k),C=a(22),S=a(161),x=(a(45),Object(d.injectStripe)(function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),u=m[0],p=m[1],E=Object(n.useState)({line1:"",line2:"",city:"",state:""}),f=Object(s.a)(E,2),b=f[0],v=f[1],g=Object(n.useState)(!0),N=Object(s.a)(g,2),O=N[0],k=N[1],x=function(e){v(Object(j.a)(Object(j.a)({},b),{},Object(h.a)({},e.target.name,e.target.value)))},w=function(){var t=Object(C.a)(y.a.mark(function t(a){var n,c,s;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),k(!1),n=e.total,t.prev=3,t.next=6,e.stripe.createToken({name:r});case 6:return c=t.sent,t.next=9,o.a.post("http://localhost:3003/checkout",{token:c,name:r,total:n,address:b,email:u});case 9:s=t.sent,l(""),console.log(s),e.pepperState.history.push({pathname:"/checkout-complete",state:{receipt:s.data.receipt}}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(3),console.log(t.t0);case 18:case"end":return t.stop()}},t,null,[[3,15]])}));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("form",{onSubmit:function(e){return w(e)}},c.a.createElement("input",{name:"name",type:"text",value:r,placeholder:"Name",onChange:function(e){return function(e){l(e.target.value)}(e)}}),c.a.createElement("input",{type:"email",name:"email",value:u,placeholder:"Email",onChange:function(e){return function(e){p(e.target.value)}(e)}}),c.a.createElement("input",{required:!0,type:"text",name:"line1",value:b.line1,placeholder:"Address line 1",onChange:function(e){return x(e)}}),c.a.createElement("input",{type:"text",name:"line2",value:b.line2,placeholder:"Address line 2",onChange:function(e){return x(e)}}),c.a.createElement("div",{className:"city_state"},c.a.createElement("input",{required:!0,type:"text",name:"city",placeholder:"City",value:b.city,onChange:function(e){return x(e)}}),c.a.createElement("input",{required:!0,type:"text",name:"state",placeholder:"State",value:b.state,onChange:function(e){return x(e)}})),c.a.createElement(d.CardElement,null),c.a.createElement("button",{disabled:!O},O?"Pay: $".concat(e.cart.length<1?0:e.cart.length>0&&e.cart.length<4?e.cart.reduce(function(e,t){return e+t.price},0)+5:e.cart.reduce(function(e,t){return e+t.price},0)):c.a.createElement(S.a,null)))})),w=(Object(d.injectStripe)(function(e){console.log(e);var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(0),m=Object(s.a)(i,2),u=m[0],p=m[1],E=Object(n.useState)(""),f=Object(s.a)(E,2),b=f[0],v=f[1],g=Object(n.useState)({line1:"",line2:"",city:"",state:""}),N=Object(s.a)(g,2),O=N[0],k=N[1],x=Object(n.useState)(!0),w=Object(s.a)(x,2),_=w[0],A=w[1];Object(n.useEffect)(function(){p(e.cart.length<1?e.price+5||0:e.cart.length>0&&e.cart.length<4?e.cart.reduce(function(e,t){return e+t.price},0)+5:e.cart.reduce(function(e,t){return e+t.price},0))},[]);var q=function(e){k(Object(j.a)(Object(j.a)({},O),{},Object(h.a)({},e.target.name,e.target.value)))},L=function(){var t=Object(C.a)(y.a.mark(function t(a){var n,c;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),A(!1),t.prev=2,t.next=5,e.stripe.createToken({name:r});case 5:return n=t.sent,t.next=8,o.a.post("http://localhost:3003/checkout",{token:n,name:r,amount:u,address:O,email:b});case 8:c=t.sent,l(""),console.log(c),e.setOpen&&e.setOpen(c),e.history.push({pathname:"/checkout-complete",state:{receipt:c.data.receipt}}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(2),console.log(t.t0),e.history.push("/checkout-complete");case 19:case"end":return t.stop()}},t,null,[[2,15]])}));return function(e){return t.apply(this,arguments)}}();return console.log(u),c.a.createElement("form",{onSubmit:function(e){return L(e)}},c.a.createElement("input",{name:"name",type:"text",value:r,placeholder:"Name",onChange:function(e){return function(e){l(e.target.value)}(e)}}),c.a.createElement("input",{type:"email",name:"email",value:b,placeholder:"Email",onChange:function(e){return function(e){v(e.target.value)}(e)}}),c.a.createElement("input",{required:!0,type:"text",name:"line1",value:O.line1,placeholder:"Address line 1",onChange:function(e){return q(e)}}),c.a.createElement("input",{type:"text",name:"line2",value:O.line2,placeholder:"Address line 2",onChange:function(e){return q(e)}}),c.a.createElement("div",{className:"city_state"},c.a.createElement("input",{required:!0,type:"text",name:"city",placeholder:"City",value:O.city,onChange:function(e){return q(e)}}),c.a.createElement("input",{required:!0,type:"text",name:"state",placeholder:"State",value:O.state,onChange:function(e){return q(e)}})),c.a.createElement(d.CardElement,null),c.a.createElement("button",{disabled:!_},_?"Pay: $\n                        ".concat(u,"\n                    "):c.a.createElement(S.a,null)))}),Object(p.f)(function(e){return console.log(e),c.a.createElement(d.Elements,null,c.a.createElement(x,{pepperState:Object(j.a)(Object(j.a)({},e),{},{cart:e.cart,price:e.cart.reduce(function(e,t){return e+t.price},0),setOpen:e.setOpen(),open:e.open})}))}),function(e){return c.a.createElement("div",{className:"item_container"},c.a.createElement("p",null," ",e.name," ",c.a.createElement("span",{className:"cart_delete_button",onClick:function(t){return function(t){var a=e.cart.filter(function(e){return e.id!=t});e.setCart(Object(O.a)(a))}(e.id)}},"Delete")))}),_=function(e){return e.cart.length<1?c.a.createElement("div",{className:"cart_item_container"},c.a.createElement("p",null,"Your cart is empty")):c.a.createElement("div",{className:"cart_item_container"},e.cart.map(function(t){return c.a.createElement(w,{setCart:e.setCart,cart:e.cart,name:t.name,key:t.id,id:t.id})}))},A=(a(102),Object(N.a)(function(e){return{root:{},paper:{position:"absolute",width:"35%",right:10,padding:"2%"},fake:{backgroundColor:g.a[200],height:e.spacing(1),margin:e.spacing(2),"&:nth-child(2n)":{marginRight:e.spacing(3)}}}})),q=Object(p.f)(function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],i=a[1],o=Object(n.useState)(0),m=Object(s.a)(o,2),u=m[0],p=m[1],E=Object(n.useState)(!1),f=Object(s.a)(E,2),g=f[0],N=f[1];console.log(" purchased is ".concat(g)),console.log("open is ".concat(r)),console.log(e);var O,j=A(),k=Object(n.useState)(!1),y=Object(s.a)(k,2),C=y[0],S=y[1],w=function(){i(function(e){return!e})},q=function(){i(!1),S(!1),N(!1)};j.fake;return g?(console.log("endinggg"),c.a.createElement("nav",null,c.a.createElement(l.c,{to:"/",className:"nav_links",href:"#"}," Welcome "),c.a.createElement(l.c,{to:"/about",className:"nav_links"}," About "),c.a.createElement(l.c,{to:"/fan-board",className:"nav_links"}," Fan Board "),c.a.createElement(l.c,{to:"/contact",className:"nav_links"}," Contact "),c.a.createElement("div",{className:j.root},c.a.createElement(b.a,{onClickAway:q},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-shopping-basket fa-4x",onClick:w},c.a.createElement("p",{className:"cart_count",style:{visibility:void 0==e.cart||0==e.cart.length?"hidden":"visible"}},void 0==e.cart||0==e.cart.length?0:e.cart.length)),r?c.a.createElement("div",null,c.a.createElement(v.a,{className:"cart ".concat(j.paper)},c.a.createElement("p",{style:{fontSize:"2rem"}},"Thank you for your purchase. To print your receipt, click ",c.a.createElement("a",{target:"_blank",href:u},"here")))):null))))):C?C?(console.log("checkout return"),c.a.createElement("nav",null,c.a.createElement("a",{className:"nav_links",href:"#"},"Login"),c.a.createElement("a",{className:"nav_links",href:"#"},"Register"),c.a.createElement("div",{className:j.root},c.a.createElement(b.a,{onClickAway:q},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-shopping-basket fa-4x",onClick:w},c.a.createElement("p",{className:"cart_count",style:{visibility:void 0==e.cart||0==e.cart.length?"hidden":"visible"}},void 0==e.cart||0==e.cart.length?0:e.cart.length)),r?c.a.createElement("div",null,c.a.createElement(v.a,{className:"cart ".concat(j.paper)},c.a.createElement(d.Elements,null,c.a.createElement(x,{cart:e.cart,setOpen:function(t){e.setCart([]),N(!0),p(t.data.receipt),e.history.replace("/")},open:r,history:e.history})))):null))))):void 0:(console.log("normal return"),c.a.createElement("nav",null,c.a.createElement(l.c,{to:"/",className:"nav_links",href:"#"}," Welcome "),c.a.createElement(l.c,{to:"/about",className:"nav_links"}," About "),c.a.createElement(l.c,{to:"/fan-board",className:"nav_links"}," Fan Board "),c.a.createElement(l.c,{to:"/contact",className:"nav_links"}," Contact "),c.a.createElement("div",{className:j.root},c.a.createElement(b.a,{onClickAway:q},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-shopping-basket fa-4x",style:{cursor:"pointer"},onClick:w},c.a.createElement("p",{className:"cart_count",style:{visibility:void 0==e.cart||0==e.cart.length?"hidden":"visible",cursor:"pointer"}},void 0==e.cart||0==e.cart.length?0:e.cart.length)),r?c.a.createElement("div",null,c.a.createElement(v.a,{className:"cart ".concat(j.paper)},c.a.createElement(_,{cart:e.cart,setCart:e.setCart}),c.a.createElement("p",{style:{marginTop:"15%",fontSize:"1.5rem",textAlign:"center"}},c.a.createElement("span",{style:{fontWeight:"bold"}},"Total:")," $",e.cart.length<1?0:e.cart.length>0&&e.cart.length<4?e.cart.reduce(function(e,t){return e+t.price},0)+5:e.cart.reduce(function(e,t){return e+t.price},0)),c.a.createElement("p",(O={className:"checkout_btn",style:{cursor:"pointer",borderRadius:"15px",margin:"2% auto",width:"95%",textAlign:"center",fontSize:"2rem",border:"1px solid green",color:"green"}},Object(h.a)(O,"className","checkout"),Object(h.a)(O,"onClick",function(e){return S(!0)}),O),"Checkout"))):null)))))}),L=(a(103),Object(p.f)(function(e){return c.a.createElement("div",{className:"header"},c.a.createElement(f,null),c.a.createElement(q,e))}),a(104),a(105),a(106),function(e){return Object(n.useEffect)(function(){if("mobile"===e.className){var t=document.querySelector(".hamburger");document.querySelector(".header2").classList.contains("show")?t.classList.add("close"):t.classList.remove("close")}},[e.className]),c.a.createElement("div",{className:"header2 ".concat(e.className)},c.a.createElement(u.a,{minWidth:800},c.a.createElement("img",{className:"nav-logo",src:a(35),alt:"si'me's pepper logo"})),c.a.createElement("nav",{className:"nav"},c.a.createElement(l.c,{to:"/",className:"nav-links"}," WELCOME "),c.a.createElement(l.c,{to:"/about",className:"nav-links"}," ABOUT "),c.a.createElement(l.c,{to:"/social-board",className:"nav-links"}," SOCIAL BOARD "),c.a.createElement(l.c,{to:"/contact-us",className:"nav-links"}," CONTACT ")))}),W=(a(107),function(e){var t=e.cart,r=e.setCart,i=e.history,o=e.location,m=Object(n.useState)(),p=Object(s.a)(m,2),d=p[0],f=p[1],h=Object(n.useState)(),b=Object(s.a)(h,2),v=(b[0],b[1],Object(n.useState)(0)),g=Object(s.a)(v,2),N=g[0],k=g[1],y={};Object(n.useEffect)(function(){t.forEach(function(e){return y[e.heat]?y[e.heat]++:y[e.heat]=1})},[t]),Object(n.useEffect)(function(){f(Object.keys(y).map(function(e){return{heat:e,price:7.99*y[e],quantity:y[e]}}))},[t]),Object(n.useEffect)(function(){t.length<1&&i.push("/")},[t]),Object(n.useEffect)(function(){k(t.reduce(function(e,t){return e+t.price},0)/100)},[t]),Object(n.useEffect)(function(){o.state=d},[d]);var C=function(e){var a=t.filter(function(t){return t.heat===e.heat}),n=Object(j.a)({},a[0]);r([].concat(Object(O.a)(t),[n]))},S=function(e){var a=t.find(function(t){return t.heat==e.heat});r(Object(O.a)(t.filter(function(e){return e!==a})))},x=function(e){r(Object(O.a)(t.filter(function(t){return t.heat!==e.heat})))};return c.a.createElement("div",{className:"cart-page"},c.a.createElement(u.a,{maxWidth:790},c.a.createElement(L,{className:"mobile"}),c.a.createElement("img",{src:a(108),className:"main-pic"}),c.a.createElement("div",{className:"cart-item-container"},d&&d.map(function(e){return c.a.createElement("div",{className:"cart-item"},c.a.createElement("div",{className:"remove"},c.a.createElement("i",{class:"fas fa-minus-circle",onClick:function(t){return x(e)}}),c.a.createElement("img",{src:a(46),alt:"bottle of si'me's pepper sauce, ".concat(e.heat)}),c.a.createElement("p",null," ",e.heat," ")),c.a.createElement("p",{className:"quantity"},"Quantity: ",e.quantity,c.a.createElement("i",{class:"fas fa-plus",onClick:function(t){return C(e)}}),c.a.createElement("i",{class:"fas fa-minus",onClick:function(t){return S(e)}})),c.a.createElement("p",{className:"item-total"},"Item total: $",e.price))}),c.a.createElement("div",{className:"go-back",onClick:function(e){return i.goBack()}},c.a.createElement("i",{class:"fas fa-arrow-left fa-3x"}),c.a.createElement("h1",null,"Go Back")),c.a.createElement(l.b,{to:{pathname:"/checkout",state:{cart:d,total:N}},className:"sub-total"},c.a.createElement("p",null,"Checkout: $",N)))),c.a.createElement(u.a,{minWidth:800},c.a.createElement(L,{className:"standard"}),c.a.createElement("div",{className:"go-back",onClick:function(e){return i.goBack()}},c.a.createElement("i",{class:"fas fa-arrow-left fa-3x"}),c.a.createElement("h1",null,"Go Back")),d&&d.map(function(e){return c.a.createElement("div",{className:"cart-item"},c.a.createElement("div",{className:"remove"},c.a.createElement("i",{class:"fas fa-minus-circle",onClick:function(t){return x(e)}}),c.a.createElement("img",{src:a(46),alt:"bottle of si'me's pepper sauce, ".concat(e.heat)}),c.a.createElement("p",null," ",e.heat," ")),c.a.createElement("p",{className:"quantity"},"Quantity: ",e.quantity,c.a.createElement("i",{class:"fas fa-plus",onClick:function(t){return C(e)}}),c.a.createElement("i",{class:"fas fa-minus",onClick:function(t){return S(e)}})),c.a.createElement("p",{className:"item-total"},"Item total: $",e.price))}),c.a.createElement(l.b,{to:{pathname:"/checkout",state:{cart:d,total:N}}},c.a.createElement("p",{className:"sub-total"},"Checkout: $",N)),c.a.createElement(E,null)))}),T=(a(109),a(110),a(111),a(159));a(112),a(61),a(64),c.a.forwardRef(function(e,t){return c.a.createElement(T.a,Object.assign({direction:"down",ref:t},e))});Object(N.a)(function(e){return{paper:{position:"absolute",width:400,backgroundColor:"white",border:"2px solid #000",borderRadius:"15px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),outline:"none"}}}),a(115);var P=function(e){return c.a.createElement("div",{className:"order-summary"},c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:a(25),alt:""}),c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"cat"},c.a.createElement("p",null,"Quantity"),c.a.createElement("p",null,"flavor"),c.a.createElement("p",null,"total")),e.location.state.cart.map(function(e){return c.a.createElement("div",{className:"item-description"},c.a.createElement("p",null," ",e.quantity||1," "),c.a.createElement("p",null," ",e.heat," "),c.a.createElement("p",null," $",e.price," "))}))),c.a.createElement("div",{className:"summary-results",onClick:e.openItem},c.a.createElement("p",null,"Subtotal: $",e.location.state.total,"  "),c.a.createElement("p",{style:{textDecoration:e.amount>39?"line-through":"none"}},"Shipping: ",e.amount>39?"$0.00":"$5.00"," "),c.a.createElement("h1",null,"Total: $",e.amount," "),c.a.createElement("i",{class:"fas fa-angle-down fa-2x arrow"})))},R=Object(d.injectStripe)(function(e){console.log(e);var t=Object(n.useState)(""),r=Object(s.a)(t,2),l=r[0],i=r[1],m=Object(n.useState)(0),p=Object(s.a)(m,2),f=p[0],b=p[1],v=Object(n.useState)({line1:"",line2:"",city:"",state:""}),g=Object(s.a)(v,2),N=g[0],O=g[1],k=Object(n.useState)(""),x=Object(s.a)(k,2),w=x[0],_=x[1],A=Object(n.useState)(""),q=Object(s.a)(A,2),W=q[0],T=q[1],R=Object(n.useState)(!0),$=Object(s.a)(R,2),D=$[0],B=$[1];Object(n.useEffect)(function(){b(e.location.state.total>39?e.location.state.total:e.location.state.total+5)},[]);var U=function(e){O(Object(j.a)(Object(j.a)({},N),{},Object(h.a)({},e.target.name,e.target.value)))},I=function(){var t=Object(C.a)(y.a.mark(function t(a){var n,c;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),B(!1),t.prev=2,t.next=5,e.stripe.createToken({name:"".concat(W," ").concat(w)});case 5:return n=t.sent,t.next=8,o.a.post("https://simes-pepper.herokuapp.com/checkout",{token:n,firstName:W,lastName:w,amount:f,address:N,email:l});case 8:c=t.sent,T(""),_(""),console.log(c),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),console.log(t.t0);case 17:case"end":return t.stop()}},t,null,[[2,14]])}));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"checkout"},c.a.createElement(u.a,{minWidth:800},c.a.createElement(L,{className:"standard"})),c.a.createElement(u.a,{maxWidth:790},c.a.createElement(L,{className:"mobile"})),c.a.createElement(P,{location:e.location,openItem:function(e){document.querySelector(".item").classList.toggle("item-open"),document.querySelector(".arrow").classList.toggle("arrow-open")},amount:f}),c.a.createElement("form",{onSubmit:function(e){return I(e)}},c.a.createElement("img",{src:a(35),alt:""}),c.a.createElement("div",{className:"names"},c.a.createElement("input",{name:"firstName",type:"text",value:W,placeholder:"First name",onChange:function(e){return function(e){T(e.target.value)}(e)}}),c.a.createElement("input",{name:"LastName",type:"text",value:w,placeholder:"Last name",onChange:function(e){return function(e){_(e.target.value)}(e)}})),c.a.createElement("input",{type:"email",name:"email",value:l,placeholder:"Email",onChange:function(e){return function(e){i(e.target.value)}(e)}}),c.a.createElement("input",{required:!0,type:"text",name:"line1",value:N.line1,placeholder:"Address 1",onChange:function(e){return U(e)}}),c.a.createElement("input",{type:"text",name:"line2",value:N.line2,placeholder:"Address 2",onChange:function(e){return U(e)}}),c.a.createElement("div",{className:"city_state"},c.a.createElement("input",{required:!0,type:"text",name:"city",placeholder:"City",value:N.city,onChange:function(e){return U(e)}}),c.a.createElement("input",{required:!0,type:"text",name:"state",placeholder:"State",value:N.state,onChange:function(e){return U(e)}})),c.a.createElement(d.CardElement,null),c.a.createElement("button",{disabled:!D},D?"Pay: $\n                            ".concat(f,"\n                        "):c.a.createElement(S.a,null))),c.a.createElement(u.a,{minWidth:800},c.a.createElement(E,null)))}),$=(a(116),function(e){return c.a.createElement("div",{className:"home"},c.a.createElement("h1",{className:"tag-line"},"SI'ME'S PEPPER"),c.a.createElement("h2",{className:"sub-tag"},"BE BOLD",c.a.createElement("span",{className:"exclaim"},"!")))}),D=(a(117),function(e){var t=e.choices,n=e.chosen,r=e.setChosen,s=e.cart,i=e.setCart,o=e.history,m=e.location;console.log(m);var p=function(e){o.push("/checkout")};return c.a.createElement("div",{className:"item-choice"},c.a.createElement(u.a,{maxWidth:700},c.a.createElement(l.b,{to:"/cart"},c.a.createElement("div",{className:"cart ".concat(s.length>0?"active":"not")},c.a.createElement("i",{class:"fas fa-shopping-cart"}),c.a.createElement("p",null,s.length," ",s.length>1?"items":"item"),c.a.createElement("p",null,"Total: $",s.reduce(function(e,t){return e+t.price},0)/100))),t.map(function(e){return c.a.createElement("div",{className:"choices",onClick:function(t){return r([e])}},c.a.createElement("div",{className:"description"},c.a.createElement("img",{src:a(25),alt:"bottle of pepper sauce",className:"choice"}),c.a.createElement("div",{className:"details"},c.a.createElement("h1",{className:e.heat},e.heat.toUpperCase()),c.a.createElement("h1",{className:"price ".concat(e.subClass)},"$7.99"),c.a.createElement("p",null,e.description))),c.a.createElement("div",{className:"buttons"},c.a.createElement(l.b,{to:{path:"/checkout",state:{cart:[e],total:e.price/100}},className:"purchase",onClick:function(e){return p(n[0])}},"PURCHASE"),c.a.createElement("input",{className:"add-to-cart",type:"submit",value:"ADD TO CART",onClick:function(t){return i([].concat(Object(O.a)(s),[Object(j.a)(Object(j.a)({},e),{},{id:Date.now()})]))}})))})),c.a.createElement(u.a,{minWidth:800},c.a.createElement(l.b,{to:"/cart"},c.a.createElement("div",{className:"cart ".concat(s.length>0?"active":"not")},c.a.createElement("i",{class:"fas fa-shopping-cart"}),c.a.createElement("p",null,s.length," ",s.length>1?"items":"item"),c.a.createElement("p",null,"Total: $",s.reduce(function(e,t){return e+t.price},0)/100))),n[0]?c.a.createElement("div",{className:"chosen"},c.a.createElement("div",{className:"go-back",onClick:function(e){return r([])}},c.a.createElement("i",{class:"fas fa-arrow-left fa-3x"}),c.a.createElement("h1",null,"Go Back")),c.a.createElement("div",{className:"choices"},c.a.createElement("img",{src:a(25),alt:"bottle of pepper sauce",className:"choice"}),c.a.createElement("div",{className:"description"},c.a.createElement("h1",{className:n[0].heat},n[0].heat.toUpperCase()),c.a.createElement("h1",{className:"price ".concat(n[0].subClass)},"$7.99"),c.a.createElement("p",null,n[0].description))),c.a.createElement("div",{className:"buttons"},c.a.createElement(l.b,{to:{path:"/checkout",state:{cart:n,total:n[0].price/100}},className:"purchase",onClick:function(e){return p(n[0])}},"PURCHASE"),c.a.createElement("input",{className:"add-to-cart",type:"submit",value:"ADD TO CART",onClick:function(e){return i([].concat(Object(O.a)(s),[Object(j.a)(Object(j.a)({},n[0]),{},{id:Date.now()})]))}}))):t.map(function(e){return c.a.createElement("div",{className:"choices",onClick:function(t){return r([e])}},c.a.createElement("img",{src:a(25),alt:"bottle of pepper sauce",className:"choice"}),c.a.createElement("div",{className:"description"},c.a.createElement("h1",{className:e.heat},e.heat.toUpperCase()),c.a.createElement("h1",{className:"price ".concat(e.subClass)},"$7.99"),c.a.createElement("p",null,e.description)))})))}),B=(a(118),function(e){var t=e.cart,r=e.setCart,l=e.history,i=e.location,o=e.match,m=Object(n.useState)([{id:1,price:799,subClass:"price1",heat:"mild",description:"For the big dreamers, who just need a little more time. . . "},{id:2,price:799,subClass:"price2",heat:"medium",description:"Just the right amount of kick, while still packing all the flavor."},{id:3,price:799,subClass:"price3",heat:"hott",description:"Soo hot, it needed an extra T . . ."}]),p=Object(s.a)(m,2),d=p[0],f=(p[1],Object(n.useState)([])),h=Object(s.a)(f,2),b=h[0],v=h[1],g=Object(n.useState)(""),N=Object(s.a)(g,2),O=N[0],j=N[1];return Object(n.useEffect)(function(){window.addEventListener("scroll",function(){window.scrollY>70?j("active-header2"):j("")})},[]),c.a.createElement("div",{className:"home-page"},c.a.createElement(u.a,{maxWidth:700},c.a.createElement("img",{src:a(119),className:"full-pic"}),c.a.createElement(L,{cart:t,className:"mobile",history:l,location:i,match:o})),c.a.createElement(u.a,{minWidth:800},c.a.createElement(L,{cart:t,className:O})),c.a.createElement($,null),c.a.createElement(D,{history:l,location:i,choices:d,chosen:b,setChosen:v,cart:t,setCart:r}),c.a.createElement(u.a,{minWidth:790},c.a.createElement(E,null)))}),U=(a(120),a(121),function(e){return c.a.createElement("div",{className:"about"},c.a.createElement(u.a,{minWidth:800},c.a.createElement(L,{className:"standard"})),c.a.createElement(u.a,{maxWidth:790},c.a.createElement(L,{className:"mobile"})),c.a.createElement("div",{className:"overlay"}),c.a.createElement("div",{className:"text-container"},c.a.createElement("p",{className:"text"},"The story of ",c.a.createElement("span",{class:"simes_span"},"S",c.a.createElement("span",{class:"i"},"i"),"'Me's Pepper")," starts with a young girl who strived for success at a young age by being a self taught business woman and entrepreneur in Mamfe, Cameroon. She utilized her business savvy and cookery skills to launch businesses that would provide for her growing family all with only an elementary level schooling."),c.a.createElement("p",{className:"text"},"This woman was my grandmother and her story resides and persists with influencing her grandkids to be better. ",c.a.createElement("span",{class:"simes_span"},"S",c.a.createElement("span",{class:"i"},"i"),"'Me's Pepper")," comes from that dream as it\u2019s named and influenced after her and her many recipes. Come join in the movement of fostering the footsteps of our ancestors and remember where we came from.")),c.a.createElement("div",{className:"statement"},c.a.createElement("img",{className:"middle_logo",src:a(24),alt:""}),c.a.createElement("h3",null,"PROVIDING LOVE IN A JAR FOR THOSE WHO SEEK TO BE ADVENTUROUS . . . ")),c.a.createElement(E,null))}),I=(a(122),function(e){var t=Object(n.useState)([{link:a(26)},{link:a(123)},{link:a(124)},{link:a(125)},{link:a(126)},{link:a(127)},{link:a(62)},{link:a(62)},{link:a(24)},{link:a(26)},{link:a(26)},{link:a(26)},{link:a(26)}]),r=Object(s.a)(t,2),l=r[0],i=(r[1],Object(n.useState)()),o=Object(s.a)(i,2);o[0],o[1];return window.addEventListener("scroll",function(){var e=document.querySelector(".footer2");window.scrollY>500?e.classList.add("slide-up"):e.classList.remove("slide-up")}),c.a.createElement("div",{className:"social-board"},c.a.createElement(u.a,{minWidth:800},c.a.createElement(L,{className:"standard"})),c.a.createElement(u.a,{maxWidth:790},c.a.createElement(L,{className:"mobile"})),c.a.createElement("div",{className:"board"},l.map(function(e){return c.a.createElement("div",{className:"post-item"},c.a.createElement("div",{className:"icon-container"},c.a.createElement("div",{className:"icons"},c.a.createElement("i",{class:"far fa-heart fa-3x"}),c.a.createElement("i",{class:"far fa-comment fa-3x"})),c.a.createElement("p",null," 200 Likes")),c.a.createElement("img",{src:e.link}))})),c.a.createElement("div",{className:"upload-container"},c.a.createElement("input",{type:"text",placeholder:"Your photo caption. . ."}),c.a.createElement("input",{type:"file",name:"file",id:"file"}),c.a.createElement("label",{htmlFor:"file","aria-lable":"file",for:"file"},"Choose your file . .")),c.a.createElement("a",{href:"https://www.instagram.com/simes.pepper/",target:"_blank"},c.a.createElement("i",{class:"fab fa-instagram social-insat fa-7x"})),c.a.createElement(u.a,{minWidth:800},c.a.createElement(E,null)))}),M=(a(128),function(e){return c.a.createElement("div",{className:"contact-us"},c.a.createElement(u.a,{maxWidth:790},c.a.createElement(L,{className:"mobile"})),c.a.createElement(u.a,{minWidth:800},c.a.createElement(L,{className:"standard"})),c.a.createElement("form",null,c.a.createElement("div",{className:"contact-info"},c.a.createElement("img",{src:a(35),alt:""}),c.a.createElement("div",{className:"text"},c.a.createElement("p",{className:"comp-name"},"S",c.a.createElement("span",{className:"i"},"i"),"'me's Pepper\xa9"),c.a.createElement("p",{className:"insta-name"},"@simes.pepper"),c.a.createElement("p",null,"simespepper@gmail.com"),c.a.createElement("p",null,"Minneapolis, Minnesota"))),c.a.createElement("div",{className:"name"},c.a.createElement("input",{className:"name",type:"text",name:"firstName",placeholder:"First name"}),c.a.createElement("input",{className:"name",type:"text",name:"lastName",placeholder:"Last name"})),c.a.createElement("input",{type:"email",className:"email",name:"email",placeholder:"Email"}),c.a.createElement("textarea",{name:"message",id:"",cols:"30",rows:"10",placeholder:"Tell us your thoughts . . . "}),c.a.createElement("input",{type:"submit",className:"button",value:"Submit"})),c.a.createElement(E,null))}),F=function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),m=o[0],f=o[1];Object(n.useEffect)(function(){window.Stripe?l(window.Stripe("pk_live_adoCNhh7KNUkcjSnyRScAH1A00SPJuwx04")):document.querySelector("#stripe-js").addEventListener("load",function(){l(window.Stripe("pk_live_adoCNhh7KNUkcjSnyRScAH1A00SPJuwx04"))})},[]);var h=function(e){var t=document.querySelector(".header2");document.querySelector(".hamburger").classList.toggle("close"),t.classList.toggle("show")};return c.a.createElement(d.StripeProvider,{stripe:r,apiKey:Object({NODE_ENV:"production",PUBLIC_URL:""}).APIKEY||"pk_live_adoCNhh7KNUkcjSnyRScAH1A00SPJuwx04"},c.a.createElement(d.Elements,null,c.a.createElement("div",{className:"app"},c.a.createElement(u.a,{maxWidth:790},c.a.createElement("div",{className:"hamburger",onClick:h},c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"line"}))),c.a.createElement(p.c,{className:"app"},c.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return c.a.createElement(B,Object.assign({},e,{cart:m,setCart:f,toggleMenu:h}))}}),c.a.createElement(p.a,{path:"/cart",render:function(e){return c.a.createElement(W,Object.assign({cart:m,setCart:f},e))}}),c.a.createElement(p.a,{path:"/checkout",render:function(e){return c.a.createElement(R,e)}}),c.a.createElement(p.a,{path:"/about",component:U}),c.a.createElement(p.a,{path:"/social-board",component:I}),c.a.createElement(p.a,{path:"/contact-us",component:M})),c.a.createElement(u.a,{maxWidth:790},c.a.createElement(E,null)))))},H=document.querySelector("#root");Object(r.render)(c.a.createElement(l.a,null,c.a.createElement(F,null)),H)}]),[[67,1,2]]]);
//# sourceMappingURL=main.cc0ee042.chunk.js.map