(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){e.exports=a.p+"static/media/white_logo.22b189eb.png"},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},115:function(e,t,a){e.exports=a.p+"static/media/simes_bottle_top_burned.edebbe86.png"},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a(24),i=a(18),o=a(63),s=a(2),m=a(19),u=a(8),p=a(66),d=a(30),E=a.n(d),h=a(14),f=a.n(h),v=a(12),g=(a(103),function(e){return r.a.createElement("img",{src:a(104),alt:"",className:"logo"})}),b=a(17),y=(a(105),a(149)),N=a(150),S=a(43),O=a(148),w=a(26),j=a(27),_=a.n(j),k=a(38),C=a(147),x=(a(60),Object(v.injectStripe)(function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),m=o[0],u=o[1],p=Object(n.useState)({line1:"",line2:"",city:"",state:""}),d=Object(s.a)(p,2),h=d[0],f=d[1],g=Object(n.useState)(!0),y=Object(s.a)(g,2),N=y[0],S=y[1],O=function(e){l(e.target.value),f(Object(b.a)({},e.target.name,e.target.value)),u(e.target.value)},w=function(){var t=Object(k.a)(_.a.mark(function t(a){var n,r,i;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),S(!1),n=e.total,t.prev=3,t.next=6,e.stripe.createToken({name:c});case 6:return r=t.sent,t.next=9,E.a.post("http://localhost:3003/checkout",{token:r,name:c,total:n,address:h,email:m});case 9:i=t.sent,l(""),console.log(i),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),console.log(t.t0);case 17:case"end":return t.stop()}},t,null,[[3,14]])}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:function(e){return w(e)}},r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",id:"",value:c,onChange:function(e){return O(e)}}),r.a.createElement("input",{type:"email",name:"email",value:m,onChange:function(e){return O(e)}}),r.a.createElement("input",{type:"text",name:"line1",value:h.line1,placeholder:"Address line 1",required:!0}),r.a.createElement("input",{type:"text",name:"line2",value:h.line2,placeholder:"Address line 2"}),r.a.createElement("div",{className:"city_state"},r.a.createElement("input",{type:"text",name:"city",value:h.city,placeholder:"City",required:!0}),r.a.createElement("input",{type:"text",name:"state",value:h.state,placeholder:"State",required:!0})),r.a.createElement(v.CardElement,null),r.a.createElement("button",{disabled:!N},N?"Pay: $".concat(e.cart.length<1?0:e.cart.length>1&&e.cart.length<4?e.cart.reduce(function(e,t){return e+t.price},0)+5:e.cart.reduce(function(e,t){return e+t.price},0)):r.a.createElement(C.a,null)))})),T=function(e){return r.a.createElement(v.Elements,null,r.a.createElement(x,{cart:e.cart}))},D=function(e){console.log(e);return r.a.createElement("div",{className:"item_container"},r.a.createElement("p",null," ",e.name," ",r.a.createElement("span",{className:"cart_delete_button",onClick:function(t){return function(t){console.log(t);var a=e.cart.filter(function(e){return e.id!=t});e.setCart(Object(w.a)(a)),console.log(a)}(e.id)}},"Delete")))},M=(a(108),function(e){return e.cart.length<1?r.a.createElement("div",{className:"cart_item_container"},r.a.createElement("p",null,"Your cart is empty")):r.a.createElement("div",{className:"cart_item_container"},e.cart.map(function(t){return r.a.createElement(D,{setCart:e.setCart,cart:e.cart,name:t.name,key:t.id,id:t.id})}))}),H=Object(O.a)(function(e){return{root:{},paper:{position:"absolute",width:"35%",right:10,padding:"2%"},checkout_btn:{color:"red"},fake:{backgroundColor:S.a[200],height:e.spacing(1),margin:e.spacing(2),"&:nth-child(2n)":{marginRight:e.spacing(3)}}}}),A=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(0),o=Object(s.a)(i,2),m=(o[0],o[1],Object(n.useState)(!0)),u=Object(s.a)(m,2),p=(u[0],u[1],H()),d=Object(n.useState)(!1),E=Object(s.a)(d,2),h=E[0],f=E[1];console.log(e);var v,g=function(){l(function(e){return!e})},S=function(){l(!1),f(!1)};r.a.createElement("div",{className:p.fake});return h?r.a.createElement("nav",null,r.a.createElement("a",{className:"nav_links",href:"#"},"Login"),r.a.createElement("a",{className:"nav_links",href:"#"},"Register"),r.a.createElement("div",{className:p.root},r.a.createElement(y.a,{onClickAway:S},r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-shopping-basket fa-4x",onClick:g},r.a.createElement("p",{className:"cart_count",style:{visibility:void 0==e.cart||0==e.cart.length?"hidden":"visible"}},void 0==e.cart||0==e.cart.length?0:e.cart.length)),c?r.a.createElement("div",null,r.a.createElement(N.a,{className:p.paper},r.a.createElement(T,{cart:e.cart}))):null)))):r.a.createElement("nav",null,r.a.createElement("a",{className:"nav_links",href:"#"},"Login"),r.a.createElement("a",{className:"nav_links",href:"#"},"Register"),r.a.createElement("div",{className:p.root},r.a.createElement(y.a,{onClickAway:S},r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-shopping-basket fa-4x",style:{cursor:"pointer"},onClick:g},r.a.createElement("p",{className:"cart_count",style:{visibility:void 0==e.cart||0==e.cart.length?"hidden":"visible",cursor:"pointer"}},void 0==e.cart||0==e.cart.length?0:e.cart.length)),c?r.a.createElement("div",null,r.a.createElement(N.a,{className:p.paper},r.a.createElement(M,{cart:e.cart,setCart:e.setCart}),r.a.createElement("p",{style:{marginTop:"15%",fontSize:"1.5rem",textAlign:"center"}},r.a.createElement("span",{style:{fontWeight:"bold"}},"Total:")," $",e.cart.length<1?0:e.cart.length>1&&e.cart.length<4?e.cart.reduce(function(e,t){return e+t.price},0)+5:e.cart.reduce(function(e,t){return e+t.price},0)),r.a.createElement("p",(v={className:"checkout_btn",style:{cursor:"pointer",borderRadius:"15px",margin:"2% auto",width:"95%",textAlign:"center",fontSize:"2rem",border:"1px solid green",color:"green"}},Object(b.a)(v,"className","checkout"),Object(b.a)(v,"onClick",function(e){return f(!0)}),v),"Checkout"))):null))))},L=(a(109),function(e){return console.log(e),r.a.createElement("div",{className:"header"},r.a.createElement(g,null),r.a.createElement(A,{cart:e.cart,setCart:e.setCart}))}),I=(a(110),a(111),a(23)),R=a(151),U=a(152),P=(a(112),a(61),Object(v.injectStripe)(function(e){console.log(e);var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),m=o[0],u=o[1],p=Object(n.useState)({line1:"",line2:"",city:"",state:""}),d=Object(s.a)(p,2),h=d[0],f=d[1],g=Object(n.useState)(!0),y=Object(s.a)(g,2),N=y[0],S=y[1],O=function(e){f(Object(I.a)({},h,Object(b.a)({},e.target.name,e.target.value)))},w=function(){var t=Object(k.a)(_.a.mark(function t(a){var n,r;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.pepperState.pepperState.price,S(!1),console.log(e),t.prev=4,t.next=7,e.stripe.createToken({name:c});case 7:return r=t.sent,console.log(r),t.next=11,E.a.post("http://localhost:3003/checkout",{token:r,name:c,amount:n,address:h,email:m});case 11:t.sent,l(""),e.pepperState.history.push("/checkout-complete"),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(4),console.log(t.t0),e.pepperState.history.push("/checkout-complete");case 20:case"end":return t.stop()}},t,null,[[4,16]])}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:function(e){return w(e)}},r.a.createElement("input",{name:"name",type:"text",value:c,placeholder:"Name",onChange:function(e){return function(e){l(e.target.value)}(e)}}),r.a.createElement("input",{type:"email",name:"email",value:m,placeholder:"Email",onChange:function(e){return function(e){u(e.target.value)}(e)}}),r.a.createElement("input",{required:!0,type:"text",name:"line1",value:h.line1,placeholder:"Address line 1",onChange:function(e){return O(e)}}),r.a.createElement("input",{type:"text",name:"line2",value:h.line2,placeholder:"Address line 2",onChange:function(e){return O(e)}}),r.a.createElement("div",{className:"city_state"},r.a.createElement("input",{required:!0,type:"text",name:"city",placeholder:"City",value:h.city,onChange:function(e){return O(e)}}),r.a.createElement("input",{required:!0,type:"text",name:"state",placeholder:"State",value:h.state,onChange:function(e){return O(e)}})),r.a.createElement(v.CardElement,null),r.a.createElement("button",{disabled:!N},N?"Pay: $".concat(e.pepperState.pepperState.price+5):r.a.createElement(C.a,null)))})),W=function(e){return console.log(e),r.a.createElement(v.Elements,null,r.a.createElement(P,{pepperState:e}))},Y=a(64),q=a.n(Y),F=function(e){console.log(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"description"},e.pepperState.description),r.a.createElement("h1",{className:"display",style:{color:"".concat(e.pepperState.color),textShadow:"1px 1px 5px black"}},e.pepperState.flavor),r.a.createElement("img",{src:a(115)}),r.a.createElement("h1",null,"Price: $",e.pepperState.price),r.a.createElement("h2",null,"Shipping: $",e.pepperState.shipping),r.a.createElement("h2",{className:"total"},"Total: $",e.pepperState.price+e.pepperState.shipping),r.a.createElement("p",{className:"add_to_cart",onClick:function(t){e.cart.length>0?e.setCart([].concat(Object(w.a)(e.cart),[Object(I.a)({},e.pepperState,{id:q()()})])):e.setCart([e.pepperState])}},"Add To Cart"),r.a.createElement(l.b,{to:"/checkout",component:W},r.a.createElement("p",{className:"checkout"},"Checkout")))},V=(a(117),function(e){return r.a.createElement("div",{className:"payment_screen"},r.a.createElement("h1",null,"Thank you for your order. Please check email for receipt"))}),B=function(e){var t=e.pepperState,a=e.cart,n=e.setCart;return console.log(a),r.a.createElement("div",{className:"modal_container"},r.a.createElement(i.a,{path:"/item",render:function(e){return r.a.createElement(F,Object.assign({},e,{pepperState:t,cart:a,setCart:n}))}}),r.a.createElement(i.a,{path:"/checkout",render:function(e){return r.a.createElement(W,Object.assign({},e,{pepperState:t}))}}),r.a.createElement(i.a,{path:"/checkout-complete",component:V}))};r.a.forwardRef(function(e,t){return r.a.createElement(U.a,Object.assign({direction:"down",ref:t},e))});function G(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var $=Object(O.a)(function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",borderRadius:"15px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),outline:"none"}}}),J=function(e){console.log(e);var t=$(),c=Object(n.useState)(G),l=Object(s.a)(c,1)[0],i=Object(n.useState)(!1),o=Object(s.a)(i,2),p=o[0],d=o[1],E=Object(n.useState)({}),h=Object(s.a)(E,2),v=h[0],g=h[1],b=Object(n.useState)({}),y=Object(s.a)(b,2),N=y[0],S=y[1],O=Object(n.useState)("white"),w=Object(s.a)(O,2),j=w[0],_=w[1],k=Object(n.useState)(0),C=Object(s.a)(k,2),x=C[0],T=C[1],D=function(t){d(!0),g(Object(I.a)({},t)),e.history.push("/item"),T(t.price+t.shipping)},M=function(e){S(Object(I.a)({},e)),_(e.color)},H=function(e){S({color:"white"}),_("white")},A=function(){d(!1),g(),e.history.push("/"),T(0)};return r.a.createElement("div",{className:"picture_window component_container"},r.a.createElement(f.a,{maxWidth:700},r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,r.a.createElement("span",{className:"three"},"3")," WAYS TO CHALLENGE YOURSELF"),r.a.createElement("div",{className:"image_div"},r.a.createElement("img",{src:a(37),alt:""}),r.a.createElement("p",{className:"hot",onClick:function(e){return D({name:"Si'me's hot chilli pepper",price:7.99,shipping:5,flavor:"HOT",color:"red",description:"Si'me's hot chilli sauce. Are you ready for the heat?"})}},"HOT"),r.a.createElement("p",{className:"medium",onClick:function(e){return D({name:"Si'me's medium chilli sauce",price:7.99,shipping:5,flavor:"MEDIUM",color:"yellow",description:"Si'me's medium chilli sauce, more punch than you'd think."})}},"MEDIUM"),r.a.createElement("p",{className:"mild",onClick:function(e){return D({name:"Si'me's mild chilli sauce",price:7.99,shipping:5,flavor:"MILD",color:"#28842B",description:"Si'me's mild sauce. For those with fragile pallets."})}},"MILD")),r.a.createElement(R.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:p,onClose:A},r.a.createElement("div",{style:l,className:t.paper},r.a.createElement(B,{pepperState:v,setCart:e.setCart,cart:e.cart}))),r.a.createElement("h1",null,"CHOOSE YOUR OWN ADVENTURE",r.a.createElement("span",{className:"exclaim"},"!")))),r.a.createElement(f.a,{minWidth:701},r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,r.a.createElement("span",{className:"three"},"3")," WAYS TO CHALLENGE YOURSELF"),r.a.createElement("div",{className:"content_display",style:{color:"".concat(N.color)}},r.a.createElement("p",null,N.text)),r.a.createElement(m.a,null,r.a.createElement(m.b,{triggerElement:"1",triggerHook:"0",duration:"600%"},r.a.createElement(u.a,{wrapper:r.a.createElement("div",{className:"animation_div"})},r.a.createElement(u.b,{from:{y:"100%",x:"-100%",width:"400%"},to:{y:"1%",x:"0%",width:"20%"}},r.a.createElement("img",{style:{borderColor:"".concat(j)},className:"jar jar1",src:a(37),alt:"",onMouseEnter:function(e){return M({text:"MEDIUM",color:"yellow"})},onMouseLeave:H,onClick:function(e){return D({name:"Si'me's medium chilli sauce",price:7.99,shipping:5,flavor:"MEDIUM",color:"yellow",description:"Si'me's medium sauce, more punch than you'd think."})}})))),r.a.createElement(m.b,{triggerElement:"1",triggerHook:"0",duration:"600%"},r.a.createElement(u.a,{wrapper:r.a.createElement("div",{className:"animation_div"})},r.a.createElement(u.b,{from:{y:"100%",x:"-100%",width:"400%"},to:{y:"1%",x:"100%",width:"20%"}},r.a.createElement("img",{style:{borderColor:"".concat(j)},className:"jar jar2",src:a(37),alt:"",onMouseEnter:function(e){return M({text:"MILD",color:"#2D892F"})},onMouseLeave:H,onClick:function(e){return D({name:"Si'me's mild chilli sauce",price:7.99,shipping:5,flavor:"MILD",color:"#28842B",description:"Si'me's mild sauce. For those with fragile pallets."})}})))),r.a.createElement(m.b,{triggerElement:"1",triggerHook:"0",duration:"600%"},r.a.createElement(u.a,{wrapper:r.a.createElement("div",{className:"animation_div"})},r.a.createElement(u.b,{from:{y:"0%",x:"0%",width:"400%"},to:{y:"1%",x:"-100%",width:"20%"}},r.a.createElement("img",{style:{borderColor:"".concat(j)},className:"jar jar3",src:a(37),alt:"",onMouseEnter:function(e){return M({text:"HOT",color:"red"})},onMouseLeave:H,onClick:function(e){return D({name:"Si'me's HOT chilli sauce",price:7.99,shipping:5,flavor:"HOT",color:"red",description:"Si'me's HOT sauce. Are you ready for the heat?"})}}))))),r.a.createElement(R.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:p,onClose:A},r.a.createElement("div",{style:l,className:t.paper},r.a.createElement(B,{pepperState:v,setCart:e.setCart,total:x,cart:e.cart}))),r.a.createElement("h2",null,"CHOOSE YOUR OWN ADVENTURE",r.a.createElement("span",{className:"exclaim"},"!")))))},z=function(e){return r.a.createElement("div",{className:"middle_card component_container"},r.a.createElement("p",null,"The story of ",r.a.createElement("span",{class:"simes_span"},"S",r.a.createElement("span",{class:"i"},"i"),"'Me's Pepper")," starts with a young girl who strived for success at a young age by being a self taught business woman and entrepreneur in Mamfe, Cameroon. She utilized her business savvy and cookery skills to launch businesses that would provide for her growing family all with only an elementary level schooling. This woman was my grandmother and her story resides and persists with influencing her grandkids to be better. ",r.a.createElement("span",{class:"simes_span"},"S",r.a.createElement("span",{class:"i"},"i"),"'Me's Pepper")," comes from that dream as it\u2019s named and influenced after her and her many recipes. Come join in the movement of fostering the footsteps of our ancestors and remember where we came from."),r.a.createElement("div",{className:"statement"},r.a.createElement("img",{className:"middle_logo",src:a(62),alt:""}),r.a.createElement("h3",null,"PROVIDING LOVE IN A JAR FOR THOSE WHO SEEK TO BE ADVENTUROUS WITH THEIR PALETTES",r.a.createElement("span",{className:"dot1"},"."),r.a.createElement("span",{className:"dot2"},"."),r.a.createElement("span",{className:"dot3"},"."))))},K=function(e){return r.a.createElement("div",{className:"intro_card_div component_container"},r.a.createElement(f.a,{maxWidth:700},r.a.createElement("div",{className:"bottle_logo"})),r.a.createElement(f.a,{minWidth:701},r.a.createElement(L,{cart:e.cart,setCart:e.setCart,history:e.history}),r.a.createElement("div",{className:"bottle_logo"})))},X=(a(118),function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"link_container"},r.a.createElement("a",{className:"nav_links",href:"#"},"Login"),r.a.createElement("a",{className:"nav_links",href:"#"},"Register")),r.a.createElement("div",{className:"footer_copy"},r.a.createElement(g,null),r.a.createElement("p",null,"\xa92019 by Si'Me's Pepper")))}),Q=(a(119),function(e){return r.a.createElement("div",{className:"contact_div bordeaux"},r.a.createElement("div",{className:"contact component_container"},r.a.createElement("div",{className:"contact_text"},r.a.createElement("h2",null,"GET IN TOUCH"),r.a.createElement("h3",null,"Interested in doing business with ",r.a.createElement("span",{className:"simes_span"},"S",r.a.createElement("span",{className:"i"},"i"),"'Me's Pepper"),"?"),r.a.createElement("p",null,"Contact us to see what we can do for you."),r.a.createElement("p",null,"Our business hours are M - F: 8am - 8pm"),r.a.createElement("div",{className:"contact_info"},r.a.createElement("p",null,"St.Paul, MN, USA"),r.a.createElement("a",{href:"mailto:Simespepper@gmail.com?Subject=Si'me's pepper",className:"sims_email_link"},r.a.createElement("span",{className:"simes_span"},"S",r.a.createElement("span",{class:"i"},"i"),"mespepper"),"@gmail.com"),r.a.createElement("div",{className:"social_media"},r.a.createElement("a",{href:"https://www.instagram.com/simes.pepper/",target:"_blank"},r.a.createElement("i",{className:"fab fa-instagram fa-5x instagram_logo"})))))))}),Z=(a(120),function(e){var t=e.name,n=e.comment,c=e.postedDate;return r.a.createElement("div",{className:"review_div"},r.a.createElement("div",{className:"user_info"},r.a.createElement("img",{src:a(62),alt:""}),r.a.createElement("h2",{className:"user_name"},t),r.a.createElement("h2",{className:"title"},c)),r.a.createElement("p",{className:"comment"},n))}),ee=(a(121),function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)([{name:"Amy Smalls",pictureName:"",comment:"This was great!! I love it. Thank you!",postedDate:Date.now()},{name:"James Bigs",pictureName:"",comment:"Shit was lit",postedDate:Date.now()},{name:"Becky Medium",pictureName:"",comment:"Thank you for the fast delivery",postedDate:Date.now()},{name:"Ben Xlarge",pictureName:"",comment:"Party time",postedDate:Date.now()},{name:"Kevin Huge",pictureName:"",comment:"Today was a good day",postedDate:Date.now()},{name:"Dan Man",pictureName:"",comment:"i will be ordering again soon",postedDate:Date.now()}]),o=Object(s.a)(i,2),m=o[0],u=o[1],p=function(e){l(e.target.value)},d=function(e){e.preventDefault(),console.log(e.target.value),""!==c&&(!function(e){var t={name:"Guest",comment:e,postedDate:Date.now()};u([].concat(Object(w.a)(m),[t]))}(c),l(""))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{maxWidth:700},r.a.createElement("div",{className:"review_main_div"},r.a.createElement("h1",null,"Nope "),r.a.createElement("div",{className:"review"},r.a.createElement("div",{className:"review_display"},m.map(function(e){return r.a.createElement(Z,{pictureName:e.pictureName,name:e.name,comment:e.comment})})),r.a.createElement("form",null,r.a.createElement("textarea",{onChange:function(e){return p(e)},className:"input-box",placeholder:"Leave us your thoughts",type:"text",value:c}),r.a.createElement("i",{class:"fas fa-paper-plane fa-5x",onClick:function(e){return d(e)}}))))),r.a.createElement(f.a,{minWidth:701},r.a.createElement("div",{className:"review_main_div"},r.a.createElement("h1",null,"LEAVE US YOUR THOUGHTS "),r.a.createElement("div",{className:"review"},r.a.createElement("div",{className:"review_display"},m.map(function(e){return r.a.createElement(Z,{pictureName:e.pictureName,name:e.name,comment:e.comment})})),r.a.createElement("form",null,r.a.createElement("textarea",{onChange:function(e){return p(e)},className:"input-box",placeholder:"Leave us your thoughts",type:"text",value:c}),r.a.createElement("i",{class:"fas fa-paper-plane fa-5x",onClick:function(e){return d(e)}}))),r.a.createElement(X,null))))});function te(){var e=Object(o.a)(["\n  overflow: hidden;\n  #pinContainer {\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n  }\n  #pinContainer .panel {\n    height: 100vh;\n    width: 100vw;\n    position: absolute;\n    overflow: hidden;\n    \n  }\n  \n\n  .turqoise {\n    background-color: white;\n  }\n  \n"]);return te=function(){return e},e}var ae=p.a.div(te()),ne=function(e){var t=Object(n.useState)({name:"simes mild",price:7.99,description:"simes mild chilli sauce"}),a=Object(s.a)(t,1)[0],c=Object(n.useState)(null),l=Object(s.a)(c,2),i=l[0],o=l[1],p=Object(n.useState)([]),d=Object(s.a)(p,2),E=d[0],h=d[1];return Object(n.useEffect)(function(){window.Stripe?o(window.Stripe("pk_test_6olVHcdmYI1PU8613u9RYIlS00iTxjp7ip")):document.querySelector("#stripe-js").addEventListener("load",function(){o(window.Stripe("pk_test_6olVHcdmYI1PU8613u9RYIlS00iTxjp7ip"))})},[]),r.a.createElement(v.StripeProvider,{stripe:i,apiKey:"pk_test_6olVHcdmYI1PU8613u9RYIlS00iTxjp7ip"},r.a.createElement("div",{className:"app"},r.a.createElement(f.a,{maxWidth:700},r.a.createElement(L,{cart:E,history:e.history,setCart:h}),r.a.createElement(K,null),r.a.createElement(z,null),r.a.createElement(J,{product:a,history:e.history,setCart:h,cart:E}),r.a.createElement(Q,null),r.a.createElement(ee,null),r.a.createElement(X,null)),r.a.createElement(f.a,{minWidth:701},r.a.createElement(ae,null,r.a.createElement(m.a,null,r.a.createElement(m.b,{triggerElement:"#pinContainer",triggerHook:"onLeave",duration:"900%",pin:"#pinContainer"},r.a.createElement(u.a,{wrapper:r.a.createElement("div",{id:"pinContainer"})},r.a.createElement("section",{className:"panel blue"},r.a.createElement(K,{setCart:h,cart:E,history:e.history})),r.a.createElement(u.b,{from:{x:"-100%"},to:{x:"0%"}},r.a.createElement("section",{className:"panel turqoise"},r.a.createElement(z,null))),r.a.createElement(u.b,{from:{y:"-100%"},to:{y:"0%"}},r.a.createElement("section",{className:"panel green"},r.a.createElement(J,{products:a,history:e.history,setCart:h,cart:E}))),r.a.createElement(u.b,{from:{y:"1600%"},to:{y:"0%"}},r.a.createElement("section",{className:"panel bordeaux"},r.a.createElement(Q,null)," ")),r.a.createElement(u.b,{from:{x:"100%"},to:{x:"0%"}},r.a.createElement("section",{className:"panel bordeaux"},r.a.createElement(ee,null)," ")))))))))},re=document.querySelector("#root");Object(c.render)(r.a.createElement(l.a,null,r.a.createElement(i.a,{path:"/",render:function(e){return r.a.createElement(ne,e)}})),re)},37:function(e,t,a){e.exports=a.p+"static/media/simes_bottle_burned.47c77bb4.png"},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){e.exports=a.p+"static/media/image_burned.45563178.png"},74:function(e,t,a){e.exports=a(122)}},[[74,1,2]]]);
//# sourceMappingURL=main.6f03376f.chunk.js.map