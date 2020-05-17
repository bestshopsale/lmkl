var tns=function(){var t=window,Ei=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Bi=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function ki(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function Ni(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Li(t,e,n,i){return i&&t.setItem(e,n),n}function Di(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Ii(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Oi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Si(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Hi(t){return("insertRule"in t?t.cssRules:t.rules).length}function Pi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Ri=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},zi=i?function(t,e){Ri(t,e)||t.classList.add(e)}:function(t,e){Ri(t,e)||(t.className+=" "+e)},Wi=i?function(t,e){Ri(t,e)&&t.classList.remove(e)}:function(t,e){Ri(t,e)&&(t.className=t.className.replace(e,""))};function qi(t,e){return t.hasAttribute(e)}function ji(t,e){return t.getAttribute(e)}function r(t){return void 0!==t.item}function Fi(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Qi(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Vi(t,e){"none"!==t.style.display&&(t.style.display="none")}function Xi(t,e){"none"===t.style.display&&(t.style.display="")}function Yi(t){return"none"!==window.getComputedStyle(t).display}function Ki(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Ui(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function Gi(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function Ji(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function _i(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var Zi=function(m){m=ki({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},m||{});var L=document,h=window,s=13,u=32,l=33,c=34,f=35,d=36,v=37,p=38,y=39,g=40,e={},n=m.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=h.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}for(var a,r,o,x,b,w,C,M=e.tC?Ni(e.tC):Li(e,"tC",function(){var t=document,e=Di(),n=Ii(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],u=0;u<3;u++)if(r=s[u],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?Oi(e,n):i.remove(),a}(),n),A=e.tPL?Ni(e.tPL):Li(e,"tPL",function(){var t,e=document,n=Di(),i=Ii(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?Oi(n,i):a.remove(),t}(),n),D=e.tMQ?Ni(e.tMQ):Li(e,"tMQ",(r=document,o=Di(),x=Ii(o),b=r.createElement("div"),w=r.createElement("style"),C="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",w.type="text/css",b.className="tns-mq-test",o.appendChild(w),o.appendChild(b),w.styleSheet?w.styleSheet.cssText=C:w.appendChild(r.createTextNode(C)),a=window.getComputedStyle?window.getComputedStyle(b).position:b.currentStyle.position,o.fake?Oi(o,x):b.remove(),"absolute"===a),n),T=e.tTf?Ni(e.tTf):Li(e,"tTf",Ki("transform"),n),E=e.t3D?Ni(e.t3D):Li(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Di(),a=Ii(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?Oi(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(T),n),B=e.tTDu?Ni(e.tTDu):Li(e,"tTDu",Ki("transitionDuration"),n),k=e.tTDe?Ni(e.tTDe):Li(e,"tTDe",Ki("transitionDelay"),n),N=e.tADu?Ni(e.tADu):Li(e,"tADu",Ki("animationDuration"),n),I=e.tADe?Ni(e.tADe):Li(e,"tADe",Ki("animationDelay"),n),O=e.tTE?Ni(e.tTE):Li(e,"tTE",Ui(B,"Transition"),n),S=e.tAE?Ni(e.tAE):Li(e,"tAE",Ui(N,"Animation"),n),H=h.console&&"function"==typeof h.console.warn,P=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],R={},z=P.length;z--;){var W=P[z];if("string"==typeof m[W]){var q=m[W],j=L.querySelector(q);if(R[W]=q,!j||!j.nodeName)return void(H&&console.warn("Can't find",m[W]));m[W]=j}}if(!(m.container.children.length<1)){var F=m.responsive,Q=m.nested,V="carousel"===m.mode;if(F){0 in F&&(m=ki(m,F[0]),delete F[0]);var X={};for(var Y in F){var K=F[Y];K="number"==typeof K?{items:K}:K,X[Y]=K}F=X,X=null}if(V&&"outer"!==Q||function t(e){for(var n in e)V||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"outer"===Q&&"autoHeight"===n&&(e[n]=!0),"responsive"===n&&t(e[n])}(m),!V){m.axis="horizontal",m.slideBy="page",m.edgePadding=!1;var U=m.animateIn,G=m.animateOut,J=m.animateDelay,_=m.animateNormal}var Z,$="horizontal"===m.axis,tt=L.createElement("div"),et=L.createElement("div"),nt=m.container,it=nt.parentNode,at=nt.outerHTML,rt=nt.children,ot=rt.length,st=pn(),ut=!1;F&&Dn();var lt,ct,ft,dt,vt,pt,mt,ht=m.autoWidth,yt=yn("fixedWidth"),gt=yn("edgePadding"),xt=yn("gutter"),bt=mn(),wt=ht?1:Math.floor(yn("items")),Ct=yn("slideBy"),Mt=m.viewportMax||m.fixedWidthViewportWidth,At=yn("arrowKeys"),Tt=yn("speed"),Et=m.rewind,Bt=!Et&&m.loop,kt=yn("autoHeight"),Nt=yn("controls"),Lt=yn("controlsText"),Dt=yn("nav"),It=yn("touch"),Ot=yn("mouseDrag"),St=yn("autoplay"),Ht=yn("autoplayTimeout"),Pt=yn("autoplayText"),Rt=yn("autoplayHoverPause"),zt=yn("autoplayResetOnVisibility"),Wt=(mt=document.createElement("style"),pt&&mt.setAttribute("media",pt),document.querySelector("head").appendChild(mt),mt.sheet?mt.sheet:mt.styleSheet),qt=m.lazyload,jt=m.lazyloadSelector,Ft=[],Qt=Bt?(dt=function(){{if(ht||yt&&!Mt)return ot-1;var t=yt?"fixedWidth":"items",e=[];if((yt||m[t]<ot)&&e.push(m[t]),F)for(var n in F){var i=F[n][t];i&&(yt||i<ot)&&e.push(i)}return e.length||e.push(0),Math.ceil(yt?Mt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),vt=V?Math.ceil((5*dt-ot)/2):4*dt-ot,vt=Math.max(dt,vt),hn("edgePadding")?vt+1:vt):0,Vt=V?ot+2*Qt:ot+Qt,Xt=!(!yt&&!ht||Bt),Yt=yt?Zn():null,Kt=!V||!Bt,Ut=$?"left":"top",Gt="",Jt="",_t=yt?function(){return Math.floor(-Yt/(yt+xt))+1}:ht?function(){for(var t=Vt,e=t-1;t--;)lt[t]>-Yt&&(e=t);return e}:function(){return Bt||V?Math.max(0,Vt-Math.ceil(wt)):Vt-1},Zt=dn(yn("startIndex")),$t=Zt,te=0,ee=ht?null:_t(),ne=m.swipeAngle,ie=!ne||"?",ae=!1,re=m.onInit,oe=new _i,se=" tns-slider tns-"+m.mode,ue=nt.id||(ft=window.tnsId,window.tnsId=ft?ft+1:1,"tns"+window.tnsId),le=yn("disable"),ce=!1,fe=m.freezable,de=!(!fe||ht)&&Ln(),ve=!1,pe={click:si,keydown:function(t){switch((t=mi(t)).keyCode){case v:case p:case l:Se.disabled||si(t,-1);break;case y:case g:case c:He.disabled||si(t,1);break;case d:oi("first",t);break;case f:oi("last",t)}}},me={click:function(t){ae&&ri();var e=(t=mi(t)).target||t.srcElement;for(;e!==We&&!qi(e,"data-nav");)e=e.parentNode;qi(e,"data-nav")&&oi(Qe=[].indexOf.call(ze,e),t)},keydown:function(t){var e=L.activeElement;if(!qi(e,"data-nav"))return;var n=(t=mi(t)).keyCode,i=[].indexOf.call(ze,e),a=je.length,r=je.indexOf(i);m.navContainer&&(a=ot,r=i);function o(t){return m.navContainer?t:je[t]}switch(n){case v:case l:0<r&&pi(ze[o(r-1)]);break;case p:case d:0<r&&pi(ze[o(0)]);break;case y:case c:r<a-1&&pi(ze[o(r+1)]);break;case g:case f:r<a-1&&pi(ze[o(a-1)]);break;case s:case u:oi(Qe=i,t)}}},he={mouseover:function(){Ue&&(li(),Ge=!0)},mouseout:function(){Ge&&(ui(),Ge=!1)}},ye={visibilitychange:function(){L.hidden?Ue&&(li(),_e=!0):_e&&(ui(),_e=!1)}},ge={keydown:function(t){switch((t=mi(t)).keyCode){case v:si(t,-1);break;case y:si(t,1)}}},xe={touchstart:xi,touchmove:bi,touchend:Ci,touchcancel:Ci},be={mousedown:xi,mousemove:bi,mouseup:Ci,mouseleave:Ci},we=hn("controls"),Ce=hn("nav"),Me=!!ht||m.navAsThumbnails,Ae=hn("autoplay"),Te=hn("touch"),Ee=hn("mouseDrag"),Be="tns-slide-active",ke="tns-complete",Ne={load:Rn,error:Rn};if(we)var Le,De,Ie=m.controlsContainer,Oe=m.controlsContainer?m.controlsContainer.outerHTML:"",Se=m.prevButton,He=m.nextButton,Pe=m.prevButton?m.prevButton.outerHTML:"",Re=m.nextButton?m.nextButton.outerHTML:"";if(Ce)var ze,We=m.navContainer,qe=m.navContainer?m.navContainer.outerHTML:"",je=[],Fe=je,Qe=-1,Ve=vn(),Xe=Ve,Ye="tns-nav-active";if(Ae)var Ke,Ue,Ge,Je,_e,Ze="forward"===m.autoplayDirection?1:-1,$e=m.autoplayButton,tn=m.autoplayButton?m.autoplayButton.outerHTML:"",en=["<span class='tns-visually-hidden'>"," animation</span>"];if(Te||Ee)var nn,an={},rn={},on=!1,sn=0,un=$?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};ht||fn(le||de),T&&(Ut=T,Gt="translate",E?(Gt+=$?"3d(":"3d(0px, ",Jt=$?", 0px, 0px)":", 0px)"):(Gt+=$?"X(":"Y(",Jt=")")),function(){F&&Dn();!function(){hn("gutter");tt.className="tns-outer",et.className="tns-inner",tt.id=ue+"-ow",et.id=ue+"-iw",kt&&(et.className+=" tns-ah");""===nt.id&&(nt.id=ue);if(se+=A||ht?" tns-subpixel":" tns-no-subpixel",se+=M?" tns-calc":" tns-no-calc",se+=" tns-"+m.axis,nt.className+=se,V){var t=L.createElement("div");t.className="tns-ovh",tt.appendChild(t),t.appendChild(et)}else tt.appendChild(et);it.insertBefore(tt,nt),et.appendChild(nt)}();for(var t=0;t<ot;t++){var e=rt[t];e.id||(e.id=ue+"-item"+t),zi(e,"tns-item"),!V&&_&&zi(e,_),Fi(e,{"aria-hidden":"true",tabindex:"-1"})}if(Qt){for(var n=L.createDocumentFragment(),i=L.createDocumentFragment(),a=Qt;a--;){var r=a%ot,o=rt[r].cloneNode(!0);if(Qi(o,"id"),i.insertBefore(o,i.firstChild),V){var s=rt[ot-1-r].cloneNode(!0);Qi(s,"id"),n.appendChild(s)}}nt.insertBefore(n,nt.firstChild),nt.appendChild(i),rt=nt.children}(function(){for(var t=Zt,e=Zt+Math.min(ot,wt);t<e;t++){var n=rt[t];Fi(n,{"aria-hidden":"false"}),Qi(n,["tabindex"]),zi(n,Be),V||(n.style.left=100*(t-Zt)/wt+"%",zi(n,U),Wi(n,_))}$&&(A||ht?(Si(Wt,"#"+ue+" > .tns-item","font-size:"+h.getComputedStyle(rt[0]).fontSize+";",Hi(Wt)),Si(Wt,"#"+ue,"font-size:0;",Hi(Wt))):V&&Pi(rt,function(t,e){var n;t.style.marginLeft=(n=e,M?M+"("+100*n+"% / "+Vt+")":100*n/Vt+"%")}));if(D){var i=gn(m.edgePadding,m.gutter,m.fixedWidth,m.speed,m.autoHeight);Si(Wt,"#"+ue+"-iw",i,Hi(Wt)),V&&(i=$&&!ht?"width:"+xn(m.fixedWidth,m.gutter,m.items)+";":"",B&&(i+=Mn(Tt)),Si(Wt,"#"+ue,i,Hi(Wt))),i=$&&!ht?bn(m.fixedWidth,m.gutter,m.items):"",m.gutter&&(i+=wn(m.gutter)),V||(B&&(i+=Mn(Tt)),N&&(i+=An(Tt))),i&&Si(Wt,"#"+ue+" > .tns-item",i,Hi(Wt))}else{et.style.cssText=gn(gt,xt,yt,kt),V&&$&&!ht&&(nt.style.width=xn(yt,xt,wt));var i=$&&!ht?bn(yt,xt,wt):"";xt&&(i+=wn(xt)),i&&Si(Wt,"#"+ue+" > .tns-item",i,Hi(Wt))}if(F&&D)for(var a in F){a=parseInt(a);var r=F[a],i="",o="",s="",u="",l=ht?null:yn("items",a),c=yn("fixedWidth",a),f=yn("speed",a),d=yn("edgePadding",a),v=yn("autoHeight",a),p=yn("gutter",a);("edgePadding"in r||"gutter"in r)&&(o="#"+ue+"-iw{"+gn(d,p,c,f,v)+"}"),V&&$&&!ht&&("fixedWidth"in r||"items"in r||yt&&"gutter"in r)&&(s="width:"+xn(c,p,l)+";"),B&&"speed"in r&&(s+=Mn(f)),s&&(s="#"+ue+"{"+s+"}"),("fixedWidth"in r||yt&&"gutter"in r||!V&&"items"in r)&&(u+=bn(c,p,l)),"gutter"in r&&(u+=wn(p)),!V&&"speed"in r&&(B&&(u+=Mn(f)),N&&(u+=An(f))),u&&(u="#"+ue+" > .tns-item{"+u+"}"),(i=o+s+u)&&Wt.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",Wt.cssRules.length)}})(),Tn()}();var ln=Bt?V?function(){var t=te,e=ee;t+=Ct,e-=Ct,gt?(t+=1,e-=1):yt&&bt%(yt+xt)&&(e-=1),Qt&&(e<Zt?Zt-=ot:Zt<t&&(Zt+=ot))}:function(){if(ee<Zt)for(;te+ot<=Zt;)Zt-=ot;else if(Zt<te)for(;Zt<=ee-ot;)Zt+=ot}:function(){Zt=Math.max(te,Math.min(ee,Zt))},cn=V?function(){var e,n,i,a,t,r,o,s,u,l,c;Jn(nt,""),B||!Tt?(ei(),Tt&&Yi(nt)||ri()):(e=nt,n=Ut,i=Gt,a=Jt,t=$n(),r=Tt,o=ri,s=Math.min(r,10),u=0<=t.indexOf("%")?"%":"px",t=t.replace(u,""),l=Number(e.style[n].replace(i,"").replace(a,"").replace(u,"")),c=(t-l)/r*s,setTimeout(function t(){r-=s,l+=c,e.style[n]=i+l+u+a,0<r?setTimeout(t,s):o()},s)),$||Mi()}:function(){Ft=[];var t={};t[O]=t[S]=ri,Ji(rt[$t],t),Gi(rt[Zt],t),ni($t,U,G,!0),ni(Zt,_,U),O&&S&&Tt&&Yi(nt)||ri()};return{version:"2.8.7",getInfo:Ti,events:oe,goTo:oi,play:function(){St&&!Ue&&(fi(),Je=!1)},pause:function(){Ue&&(di(),Je=!0)},isOn:ut,updateSliderHeight:Qn,refresh:Tn,destroy:function(){if(Wt.disabled=!0,Wt.ownerNode&&Wt.ownerNode.remove(),Ji(h,{resize:kn}),At&&Ji(L,ge),Ie&&Ji(Ie,pe),We&&Ji(We,me),Ji(nt,he),Ji(nt,ye),$e&&Ji($e,{click:vi}),St&&clearInterval(Ke),V&&O){var t={};t[O]=ri,Ji(nt,t)}It&&Ji(nt,xe),Ot&&Ji(nt,be);var r=[at,Oe,Pe,Re,qe,tn];for(var e in P.forEach(function(t,e){var n="container"===t?tt:m[t];if("object"==typeof n){var i=!!n.previousElementSibling&&n.previousElementSibling,a=n.parentNode;n.outerHTML=r[e],m[t]=i?i.nextElementSibling:a.firstElementChild}}),P=U=G=J=_=$=tt=et=nt=it=at=rt=ot=Z=st=ht=yt=gt=xt=bt=wt=Ct=Mt=At=Tt=Et=Bt=kt=Wt=qt=lt=Ft=Qt=Vt=Xt=Yt=Kt=Ut=Gt=Jt=_t=Zt=$t=te=ee=ne=ie=ae=re=oe=se=ue=le=ce=fe=de=ve=pe=me=he=ye=ge=xe=be=we=Ce=Me=Ae=Te=Ee=Be=ke=Ne=ct=Nt=Lt=Ie=Oe=Se=He=Le=De=Dt=We=qe=ze=je=Fe=Qe=Ve=Xe=Ye=St=Ht=Ze=Pt=Rt=$e=tn=zt=en=Ke=Ue=Ge=Je=_e=an=rn=nn=on=sn=un=It=Ot=null,this)"rebuild"!==e&&(this[e]=null);ut=!1},rebuild:function(){return Zi(ki(m,R))}}}function fn(t){t&&(Nt=Dt=It=Ot=At=St=Rt=zt=!1)}function dn(t){return t=t?Math.max(0,Math.min(Bt?ot-1:ot-wt,t)):0,V?t+Qt:t}function vn(t){for(null==t&&(t=Zt),V&&(t-=Qt);t<0;)t+=ot;return Math.floor(t%ot)}function pn(){return h.innerWidth||L.documentElement.clientWidth||L.body.clientWidth}function mn(){return function t(e){return e.clientWidth||t(e.parentNode)}(it)-(2*gt-xt)}function hn(t){if(m[t])return!0;if(F)for(var e in F)if(F[e][t])return!0;return!1}function yn(t,e){if(null==e&&(e=st),"items"===t&&yt)return Math.floor(bt/(yt+xt))||1;var n=m[t];if(F)for(var i in F)e>=parseInt(i)&&t in F[i]&&(n=F[i][t]);return"slideBy"===t&&"page"===n&&(n=yn("items")),V||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function gn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=$?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var s="-"+e+"px";r="margin: 0 "+($?s+" 0 0":"0 "+s+" 0")+";"}return a&&B&&i&&(r+=Mn(i)),r}function xn(t,e,n){return t?(t+e)*Vt+"px":M?M+"("+100*Vt+"% / "+n+")":100*Vt/n+"%"}function bn(t,e,n){var i;if(t)i=t+e+"px";else{V||(n=Math.floor(n));var a=V?Vt:n;i=M?M+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==Q?i+";":i+" !important;"}function wn(t){var e="";!1!==t&&(e=($?"padding-":"margin-")+($?"right":"bottom")+": "+t+"px;");return e}function Cn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Mn(t){return Cn(B,18)+"transition-duration:"+t/1e3+"s;"}function An(t){return Cn(N,17)+"animation-duration:"+t/1e3+"s;"}function Tn(){if(hn("autoHeight")||ht||!$){var t=nt.querySelectorAll("img");Pi(t,function(t){var e=t.src;e.indexOf("data:image")<0?(Gi(t,Ne),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e):zi(t,ke)}),Ei(function(){qn(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(t),function(){if(ct=!0,ht){var e=Bt?Zt:ot-1;!function t(){rt[e-1].getBoundingClientRect().right.toFixed(2)===rt[e].getBoundingClientRect().left.toFixed(2)?n():setTimeout(function(){t()},16)}()}else n();function n(){$&&!ht||(Vn(),ht?(Yt=Zn(),fe&&(de=Ln()),ee=_t(),fn(le||de)):Mi()),V&&ti(),En(),Bn()}})})}else V&&ti(),En(),Bn()}function En(){if(Ae){var t=St?"stop":"start";$e?Fi($e,{"data-action":t}):m.autoplayButtonOutput&&(tt.insertAdjacentHTML("afterbegin",'<button data-action="'+t+'" type="button">'+en[0]+t+en[1]+Pt[0]+"</button>"),$e=tt.querySelector("[data-action]")),$e&&Gi($e,{click:vi}),St&&(fi(),Rt&&Gi(nt,he),zt&&Gi(nt,ye))}if(Ce){var e=V?Qt:0;if(We){Fi(We,{"aria-label":"Carousel Pagination"}),ze=We.children;for(var n=0;n<ot;n++){var i=ze[n];i&&Fi(i,{"data-nav":n,tabindex:"-1","aria-selected":"false","aria-controls":rt[e+n].id,"aria-label":"Carousel Page "+(n+1)})}}else{var a="",r=Me?"":'style="display:none"';for(n=0;n<ot;n++)a+='<button data-nav="'+n+'" tabindex="-1" aria-selected="false" aria-controls="'+rt[e+n].id+'" '+r+' type="button" aria-label="Carousel Page '+(n+1)+'"></button>';a='<div class="tns-nav" aria-label="Carousel Pagination">'+a+"</div>",tt.insertAdjacentHTML("afterbegin",a),We=tt.querySelector(".tns-nav"),ze=We.children}if(Ai(),B){var o=B.substring(0,B.length-18).toLowerCase(),s="transition: all "+Tt/1e3+"s";o&&(s="-"+o+"-"+s),Si(Wt,"[aria-controls^="+ue+"-item]",s,Hi(Wt))}Fi(ze[Ve],{tabindex:"0","aria-selected":"true"}),zi(ze[Ve],Ye),Gi(We,me)}we&&(Ie&&Se&&He||(tt.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+ue+'" type="button">'+Lt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+ue+'" type="button">'+Lt[1]+"</button></div>"),Ie=tt.querySelector(".tns-controls"),Se=Ie.children[0],He=Ie.children[1]),m.controlsContainer&&(Fi(Ie,{"aria-label":"Carousel Navigation",tabindex:"0"}),Fi(Ie.children,{"aria-controls":ue,tabindex:"-1"})),(m.controlsContainer||m.prevButton&&m.nextButton)&&(Fi(Se,{"data-controls":"prev"}),Fi(He,{"data-controls":"next"})),Le=Yn(Se),De=Yn(He),Gn(),Ie?Gi(Ie,pe):(Gi(Se,pe),Gi(He,pe))),In()}function Bn(){if(V&&O){var t={};t[O]=ri,Gi(nt,t)}It&&Gi(nt,xe),Ot&&Gi(nt,be),At&&Gi(L,ge),"inner"===Q?oe.on("outerResized",function(){Nn(),oe.emit("innerLoaded",Ti())}):(F||yt||ht||kt||!$)&&Gi(h,{resize:kn}),"outer"===Q?oe.on("innerLoaded",Wn):kt&&!le&&Wn(),Pn(),le?Hn():de&&Sn(),oe.on("indexChanged",jn),"inner"===Q&&oe.emit("innerLoaded",Ti()),"function"==typeof re&&re(Ti()),ut=!0}function kn(t){Ei(function(){Nn(mi(t))})}function Nn(t){if(ut){"outer"===Q&&oe.emit("outerResized",Ti(t)),st=pn();var e,n=Z,i=!1;F&&(Dn(),(e=n!==Z)&&oe.emit("newBreakpointStart",Ti(t)));var a,r,o,s,u=wt,l=le,c=de,f=At,d=Nt,v=Dt,p=It,m=Ot,h=St,y=Rt,g=zt,x=Zt;if(e){var b=yt,w=kt,C=Lt,M=Pt;if(!D)var A=xt,T=gt}if(At=yn("arrowKeys"),Nt=yn("controls"),Dt=yn("nav"),It=yn("touch"),Ot=yn("mouseDrag"),St=yn("autoplay"),Rt=yn("autoplayHoverPause"),zt=yn("autoplayResetOnVisibility"),e&&(le=yn("disable"),yt=yn("fixedWidth"),Tt=yn("speed"),kt=yn("autoHeight"),Lt=yn("controlsText"),Pt=yn("autoplayText"),Ht=yn("autoplayTimeout"),D||(gt=yn("edgePadding"),xt=yn("gutter"))),fn(le),bt=mn(),$&&!ht||le||(Vn(),$||(Mi(),i=!0)),(yt||ht)&&(Yt=Zn(),ee=_t()),(e||yt)&&(wt=yn("items"),Ct=yn("slideBy"),(r=wt!==u)&&(yt||ht||(ee=_t()),ln())),e&&le!==l&&(le?Hn():function(){if(!ce)return;if(Wt.disabled=!1,nt.className+=se,ti(),Bt)for(var t=Qt;t--;)V&&Xi(rt[t]),Xi(rt[Vt-t-1]);if(!V)for(var e=Zt,n=Zt+ot;e<n;e++){var i=rt[e],a=e<Zt+wt?U:_;i.style.left=100*(e-Zt)/wt+"%",zi(i,a)}On(),ce=!1}()),fe&&(e||yt||ht)&&(de=Ln())!==c&&(de?(ei($n(dn(0))),Sn()):(!function(){if(!ve)return;gt&&D&&(et.style.margin="");if(Qt)for(var t="tns-transparent",e=Qt;e--;)V&&Wi(rt[e],t),Wi(rt[Vt-e-1],t);On(),ve=!1}(),i=!0)),fn(le||de),St||(Rt=zt=!1),At!==f&&(At?Gi(L,ge):Ji(L,ge)),Nt!==d&&(Nt?Ie?Xi(Ie):(Se&&Xi(Se),He&&Xi(He)):Ie?Vi(Ie):(Se&&Vi(Se),He&&Vi(He))),Dt!==v&&(Dt?(Xi(We),Ai()):Vi(We)),It!==p&&(It?Gi(nt,xe):Ji(nt,xe)),Ot!==m&&(Ot?Gi(nt,be):Ji(nt,be)),St!==h&&(St?($e&&Xi($e),Ue||Je||fi()):($e&&Vi($e),Ue&&di())),Rt!==y&&(Rt?Gi(nt,he):Ji(nt,he)),zt!==g&&(zt?Gi(L,ye):Ji(L,ye)),e&&(yt!==b&&(i=!0),kt!==w&&(kt||(et.style.height="")),Nt&&Lt!==C&&(Se.innerHTML=Lt[0],He.innerHTML=Lt[1]),$e&&Pt!==M)){var E=St?1:0,B=$e.innerHTML,k=B.length-M[E].length;B.substring(k)===M[E]&&($e.innerHTML=B.substring(0,k)+Pt[E])}if((a=Zt!==x)&&(oe.emit("indexChanged",Ti()),i=!0),r&&(a||jn(),V||function(){for(var t=Zt+Math.min(ot,wt),e=Vt;e--;){var n=rt[e];Zt<=e&&e<t?(zi(n,"tns-moving"),n.style.left=100*(e-Zt)/wt+"%",zi(n,U),Wi(n,_)):n.style.left&&(n.style.left="",zi(n,_),Wi(n,U)),Wi(n,G)}setTimeout(function(){Pi(rt,function(t){Wi(t,"tns-moving")})},300)}()),!le&&!de){if(e&&!D&&(gt===T&&xt===A||(et.style.cssText=gn(gt,xt,yt,Tt,kt)),$)){V&&(nt.style.width=xn(yt,xt,wt));var N=bn(yt,xt,wt)+wn(xt);s=Hi(o=Wt)-1,"deleteRule"in o?o.deleteRule(s):o.removeRule(s),Si(Wt,"#"+ue+" > .tns-item",N,Hi(Wt))}kt&&Wn(),i&&(ti(),$t=Zt)}e&&oe.emit("newBreakpointEnd",Ti(t))}}function Ln(){return yt||ht?yt?(yt+xt)*ot<=bt+2*gt:(Bt?lt[ot]:_n())<=bt+2*gt:ot<=wt}function Dn(){for(var t in Z=0,F)(t=parseInt(t))<=st&&(Z=t)}function In(){!St&&$e&&Vi($e),!Dt&&We&&Vi(We),Nt||(Ie?Vi(Ie):(Se&&Vi(Se),He&&Vi(He)))}function On(){St&&$e&&Xi($e),Dt&&We&&Xi(We),Nt&&(Ie?Xi(Ie):(Se&&Xi(Se),He&&Xi(He)))}function Sn(){if(!ve){if(gt&&(et.style.margin="0px"),Qt)for(var t="tns-transparent",e=Qt;e--;)V&&zi(rt[e],t),zi(rt[Vt-e-1],t);In(),ve=!0}}function Hn(){if(!ce){if(Wt.disabled=!0,nt.className=nt.className.replace(se.substring(1),""),Qi(nt,["style"]),Bt)for(var t=Qt;t--;)V&&Vi(rt[t]),Vi(rt[Vt-t-1]);if($&&V||Qi(et,["style"]),!V)for(var e=Zt,n=Zt+ot;e<n;e++){var i=rt[e];Qi(i,["style"]),Wi(i,U),Wi(i,_)}In(),ce=!0}}function Pn(){if(qt&&!le){var t=Zt;if(ht)for(var e=Zt+1,n=e,i=lt[Zt]+bt+gt-xt;lt[e]<i;)n=++e;else n=Zt+wt;for(gt&&(t-=1,ht||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,Vt));t<n;t++)Pi(rt[t].querySelectorAll(jt),function(t){var e={};if(e[O]=function(t){t.stopPropagation()},Gi(t,e),!Ri(t,"loading")&&!Ri(t,"loaded")){t.onload=function(){zi(t,"loaded"),Wi(t,"loading")},t.onerror=function(){zi(t,"failed"),Wi(t,"loading")};var n=ji(t,"data-srcset");n&&(t.srcset=n),t.src=ji(t,"data-src"),zi(t,"loading"),t.complete&&t.onload()}})}}function Rn(t){var e=hi(t);zi(e,ke),Ji(e,Ne)}function zn(t,e){for(var n=[],i=t,a=Math.min(t+e,Vt);i<a;i++)Pi(rt[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Wn(){var t=kt?zn(Zt,wt):zn(Qt,ot);Ei(function(){qn(t,Qn)})}function qn(n,t){return ct?t():(n.forEach(function(t,e){Ri(t,ke)&&n.splice(e,1)}),n.length?void Ei(function(){qn(n,t)}):t())}function jn(){Pn(),function(){for(var t=Zt+Math.min(ot,wt),e=Vt;e--;){var n=rt[e];Zt<=e&&e<t?qi(n,"tabindex")&&(Fi(n,{"aria-hidden":"false"}),Qi(n,["tabindex"]),zi(n,Be)):(qi(n,"tabindex")||Fi(n,{"aria-hidden":"true",tabindex:"-1"}),Ri(n,Be)&&Wi(n,Be))}}(),Gn(),Ai(),function(){if(Dt&&(Ve=-1!==Qe?Qe:vn(),Qe=-1,Ve!==Xe)){var t=ze[Xe],e=ze[Ve];Fi(t,{tabindex:"-1","aria-selected":"false"}),Fi(e,{tabindex:"0","aria-selected":"true"}),Wi(t,Ye),zi(e,Ye),Xe=Ve}}()}function Fn(t,e){for(var n=[],i=t,a=Math.min(t+e,Vt);i<a;i++)n.push(rt[i].offsetHeight);return Math.max.apply(null,n)}function Qn(){var t=kt?Fn(Zt,wt):Fn(Qt,ot);et.style.height!==t&&(et.style.height=t+"px")}function Vn(){lt=[0];for(var t,e=$?"left":"top",n=rt[0].getBoundingClientRect()[e],i=1;i<Vt;i++)t=rt[i].getBoundingClientRect()[e],lt.push(t-n)}function Xn(t){return t.nodeName.toLowerCase()}function Yn(t){return"button"===Xn(t)}function Kn(t){return"true"===t.getAttribute("aria-disabled")}function Un(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Gn(){if(Nt&&!Et&&!Bt){var t=Le?Se.disabled:Kn(Se),e=De?He.disabled:Kn(He),n=Zt<=te,i=!Et&&ee<=Zt;n&&!t&&Un(Le,Se,!0),!n&&t&&Un(Le,Se,!1),i&&!e&&Un(De,He,!0),!i&&e&&Un(De,He,!1)}}function Jn(t,e){B&&(t.style[B]=e)}function _n(){return yt?(yt+xt)*Vt:lt[Vt-1]+rt[Vt-1].getBoundingClientRect().width}function Zn(){var t=bt-(_n()-xt);return gt&&(t+=gt-xt),0<t&&(t=0),t}function $n(t){var e;(null==t&&(t=Zt),$&&!ht)?e=yt?-(yt+xt)*t:100*-t/(T?Vt:wt):e=-lt[t];return Xt&&(e=Math.max(e,Yt)),e+=!$||ht||yt?"px":"%"}function ti(t){Jn(nt,"0s"),ei(t)}function ei(t){null==t&&(t=$n()),nt.style[Ut]=Gt+t+Jt}function ni(t,e,n,i){var a=t+wt;Bt||(a=Math.min(a,Vt));for(var r=t;r<a;r++){var o=rt[r];i||(o.style.left=100*(r-Zt)/wt+"%"),J&&k&&(o.style[k]=o.style[I]=J*(r-t)/1e3+"s"),Wi(o,e),zi(o,n),i&&Ft.push(o)}}function ii(t,e){Kt&&ln(),(Zt!==$t||e)&&(oe.emit("indexChanged",Ti()),oe.emit("transitionStart",Ti()),kt&&Wn(),Ue&&t&&0<=["click","keydown"].indexOf(t.type)&&di(),ae=!0,cn())}function ai(t){return t.toLowerCase().replace(/-/g,"")}function ri(t){if(V||ae){if(oe.emit("transitionEnd",Ti(t)),!V&&0<Ft.length)for(var e=0;e<Ft.length;e++){var n=Ft[e];n.style.left="",I&&k&&(n.style[I]="",n.style[k]=""),Wi(n,G),zi(n,_)}if(!t||!V&&t.target.parentNode===nt||t.target===nt&&ai(t.propertyName)===ai(Ut)){if(!Kt){var i=Zt;ln(),Zt!==i&&(oe.emit("indexChanged",Ti()),ti())}"inner"===Q&&oe.emit("innerLoaded",Ti()),ae=!1,$t=Zt}}}function oi(t,e){if(!de)if("prev"===t)si(e,-1);else if("next"===t)si(e,1);else{ae&&ri();var n=vn(),i=0;if("first"===t?i=-n:"last"===t?i=V?ot-wt-n:ot-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(ot-1,t))),i=t-n)),!V&&i&&Math.abs(i)<wt){var a=0<i?1:-1;i+=te<=Zt+i-ot?ot*a:2*ot*a*-1}Zt+=i,V&&Bt&&(Zt<te&&(Zt+=ot),ee<Zt&&(Zt-=ot)),vn(Zt)!==vn($t)&&ii(e)}}function si(t,e){var n;if(ae&&ri(),!e){for(var i=(t=mi(t)).target||t.srcElement;i!==Ie&&[Se,He].indexOf(i)<0;)i=i.parentNode;var a=[Se,He].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(Et){if(Zt===te&&-1===e)return void oi("last",t);if(Zt===ee&&1===e)return void oi("first",t)}e&&(Zt+=Ct*e,ht&&(Zt=Math.floor(Zt)),ii(n||t&&"keydown"===t.type?t:null))}function ui(){Ke=setInterval(function(){si(null,Ze)},Ht),Ue=!0}function li(){clearInterval(Ke),Ue=!1}function ci(t,e){Fi($e,{"data-action":t}),$e.innerHTML=en[0]+t+en[1]+e}function fi(){ui(),$e&&ci("stop",Pt[1])}function di(){li(),$e&&ci("start",Pt[0])}function vi(){Ue?(di(),Je=!0):(fi(),Je=!1)}function pi(t){t.focus()}function mi(t){return yi(t=t||h.event)?t.changedTouches[0]:t}function hi(t){return t.target||h.event.srcElement}function yi(t){return 0<=t.type.indexOf("touch")}function gi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function xi(t){ae&&ri(),St&&Ue&&li(),on=!0,V&&(Bi(sn),sn=0);var e=mi(t);oe.emit(yi(t)?"touchStart":"dragStart",Ti(t)),!yi(t)&&0<=["img","a"].indexOf(Xn(hi(t)))&&gi(t),rn.x=an.x=parseInt(e.clientX),rn.y=an.y=parseInt(e.clientY),V&&(nn=parseFloat(nt.style[Ut].replace(Gt,"").replace(Jt,"")),Jn(nt,"0s"))}function bi(t){if(on){var e=mi(t);rn.x=parseInt(e.clientX),rn.y=parseInt(e.clientY),V&&!sn&&(sn=Ei(function(){!function t(e){if(!ie)return void(on=!1);Bi(sn);on&&(sn=Ei(function(){t(e)}));wi();if(ie){try{e.type&&oe.emit(yi(e)?"touchMove":"dragMove",Ti(e))}catch(t){}var n=nn,i=un(rn,an);if(!$||yt||ht)n+=i,n+="px";else{var a=T?i*wt*100/(bt*Vt):100*i/bt;n+=a,n+="%"}nt.style[Ut]=Gt+n+Jt}}(t)}))}}function wi(){var t,e,n,i,a,r;"?"===ie&&rn.x!==an.x&&rn.y!==an.y&&(a=rn.y-an.y,r=rn.x-an.x,t=Math.atan2(a,r)*(180/Math.PI),e=ne,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),ie=n===m.axis)}function Ci(i){if(on){V&&(Bi(sn),Jn(nt,"")),on=!1;var t=mi(i);rn.x=parseInt(t.clientX),rn.y=parseInt(t.clientY);var a=un(rn,an);if(5<=Math.abs(a)){if(!yi(i)){var n=hi(i);Gi(n,{click:function t(e){gi(e),Ji(n,{click:t})}})}V?sn=Ei(function(){if($&&!ht){var t=-a*wt/bt;t=0<a?Math.floor(t):Math.ceil(t),Zt+=t}else{var e=-(nn+a);if(e<=0)Zt=te;else if(e>=lt[lt.length-1])Zt=ee;else for(var n=0;n<Vt&&e>=lt[n];)e>lt[Zt=n]&&a<0&&(Zt+=1),n++}ii(i,a),oe.emit(yi(i)?"touchEnd":"dragEnd",Ti(i))}):(wi(),ie&&si(i,0<a?-1:1))}}ne&&(ie="?"),St&&!Ue&&ui()}function Mi(){et.style.height=lt[Zt+wt]-lt[Zt]+"px"}function Ai(){Dt&&!Me&&(!function(){je=[];for(var t=vn()%wt;t<ot;)V&&!Bt&&ot<t+wt&&(t=ot-wt),je.push(t),t+=wt;(Bt&&je.length*wt<ot||!Bt&&0<je[0])&&je.unshift(0)}(),je!==Fe&&(Pi(ze,function(t,e){je.indexOf(e)<0?Vi(t):Xi(t)}),Fe=je))}function Ti(t){return{container:nt,slideItems:rt,navContainer:We,navItems:ze,controlsContainer:Ie,hasControls:we,prevButton:Se,nextButton:He,items:wt,slideBy:Ct,cloneCount:Qt,slideCount:ot,slideCountNew:Vt,index:Zt,indexCached:$t,navCurrentIndex:Ve,navCurrentIndexCached:Xe,visibleNavIndexes:je,visibleNavIndexesCached:Fe,sheet:Wt,isOn:ut,event:t||{}}}H&&console.warn("No slides found in",m.container)};return Zi}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map