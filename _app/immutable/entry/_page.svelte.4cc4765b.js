import{S as _l,i as pl,s as vl,k as p,l as v,m as k,h as f,b as V,I as il,K as Ge,q as A,r as $,n as N,D as s,E as ue,L as Oe,u as Be,a as U,y as Ce,e as rl,c as z,z as Me,p as oe,A as we,g as D,v as ge,d as R,f as be,B as Ue,M as ot,N as dt,O as sl,P as ht,Q as Ml,o as mt,R as _t,T as cl,U as ul,V as dl,W as pt,X as vt}from"../chunks/index.90e9d8dd.js";import{n as ft,l as wl,g as kt,a as gt,t as ct,b as ut,c as bt,d as Et,e as yt,h as It,r as Tt}from"../chunks/utils.d9c65141.js";import{j as Je}from"../chunks/singletons.dfdaeee6.js";function Ul(r,e,l){const n=r.slice();return n[6]=e[l],n[8]=l,n}function zl(r){let e,l=(r[8]<r[0].length-1?r[6]+".":r[6])+"",n,a,t,i,h,I;return{c(){e=p("a"),n=A(l),t=p("span"),i=A("​"),this.h()},l(u){e=v(u,"A",{class:!0,href:!0});var B=k(e);n=$(B,l),B.forEach(f),t=v(u,"SPAN",{class:!0});var g=k(t);i=$(g,"​"),g.forEach(f),this.h()},h(){N(e,"class","idlink"),N(e,"href",a="#"+r[1][r[8]]),N(t,"class","prevent-select")},m(u,B){V(u,e,B),s(e,n),V(u,t,B),s(t,i),h||(I=ue(e,"click",Oe(ft)),h=!0)},p(u,B){B&1&&l!==(l=(u[8]<u[0].length-1?u[6]+".":u[6])+"")&&Be(n,l),B&2&&a!==(a="#"+u[1][u[8]])&&N(e,"href",a)},d(u){u&&f(e),u&&f(t),h=!1,I()}}}function Nt(r){let e,l=r[0],n=[];for(let a=0;a<l.length;a+=1)n[a]=zl(Ul(r,l,a));return{c(){e=p("span");for(let a=0;a<n.length;a+=1)n[a].c()},l(a){e=v(a,"SPAN",{});var t=k(e);for(let i=0;i<n.length;i+=1)n[i].l(t);t.forEach(f)},m(a,t){V(a,e,t);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null)},p(a,[t]){if(t&3){l=a[0];let i;for(i=0;i<l.length;i+=1){const h=Ul(a,l,i);n[i]?n[i].p(h,t):(n[i]=zl(h),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=l.length}},i:il,o:il,d(a){a&&f(e),Ge(n,a)}}}function Lt(r,e,l){let{markerId:n}=e,a,t,i=[];function h(u){return t==null?l(3,t=u):l(3,t+=u),""}function I(u){return u<a.length-1&&l(3,t+="."),""}return r.$$set=u=>{"markerId"in u&&l(2,n=u.markerId)},r.$$.update=()=>{r.$$.dirty&13&&(l(3,t=""),l(1,i=[]),l(0,a=n.split(".")),a.forEach((u,B)=>{h(u),l(1,i[B]=t,i),I(B)}))},[a,i,n,t]}class hl extends _l{constructor(e){super(),pl(this,e,Lt,Nt,vl,{markerId:2})}}function Dl(r,e,l){const n=r.slice();return n[14]=e[l],n}function jl(r,e,l){const n=r.slice();return n[17]=e[l],n[19]=l,n}function Fl(r,e,l){const n=r.slice();return n[17]=e[l],n[19]=l,n}function Hl(r){let e,l,n,a,t;return{c(){e=p("button"),l=p("b"),n=A("BODY"),this.h()},l(i){e=v(i,"BUTTON",{class:!0});var h=k(e);l=v(h,"B",{style:!0});var I=k(l);n=$(I,"BODY"),I.forEach(f),h.forEach(f),this.h()},h(){oe(l,"pointer-events","none"),N(e,"class","smbutton svelte-1nzivjk")},m(i,h){V(i,e,h),s(e,l),s(l,n),a||(t=ue(e,"click",Oe(r[10])),a=!0)},p:il,d(i){i&&f(e),a=!1,t()}}}function Vl(r){let e,l,n,a,t;return{c(){e=p("button"),l=p("b"),n=A("MD"),this.h()},l(i){e=v(i,"BUTTON",{class:!0});var h=k(e);l=v(h,"B",{style:!0});var I=k(l);n=$(I,"MD"),I.forEach(f),h.forEach(f),this.h()},h(){oe(l,"pointer-events","none"),N(e,"class","smbutton svelte-1nzivjk")},m(i,h){V(i,e,h),s(e,l),s(l,n),a||(t=ue(e,"click",Oe(r[11])),a=!0)},p:il,d(i){i&&f(e),a=!1,t()}}}function ql(r){let e,l,n,a,t,i,h,I,u,B,g=r[0].markerLinksToThis,d=[];for(let _=0;_<g.length;_+=1)d[_]=Wl(Fl(r,g,_));const L=_=>R(d[_],1,1,()=>{d[_]=null});return{c(){e=p("span"),l=p("span"),n=p("b"),a=A("📥Inlinks:"),t=A(`
					 `),i=U(),h=p("span");for(let _=0;_<d.length;_+=1)d[_].c();this.h()},l(_){e=v(_,"SPAN",{class:!0});var T=k(e);l=v(T,"SPAN",{class:!0});var E=k(l);n=v(E,"B",{});var P=k(n);a=$(P,"📥Inlinks:"),P.forEach(f),t=$(E,`
					 `),E.forEach(f),i=z(T),h=v(T,"SPAN",{});var j=k(h);for(let O=0;O<d.length;O+=1)d[O].l(j);j.forEach(f),T.forEach(f),this.h()},h(){N(l,"class","idlink svelte-1nzivjk"),N(e,"class","sminfoitem svelte-1nzivjk")},m(_,T){V(_,e,T),s(e,l),s(l,n),s(n,a),s(l,t),s(e,i),s(e,h);for(let E=0;E<d.length;E+=1)d[E]&&d[E].m(h,null);I=!0,u||(B=ue(e,"click",Oe(r[8])),u=!0)},p(_,T){if(T&1){g=_[0].markerLinksToThis;let E;for(E=0;E<g.length;E+=1){const P=Fl(_,g,E);d[E]?(d[E].p(P,T),D(d[E],1)):(d[E]=Wl(P),d[E].c(),D(d[E],1),d[E].m(h,null))}for(ge(),E=g.length;E<d.length;E+=1)L(E);be()}},i(_){if(!I){for(let T=0;T<g.length;T+=1)D(d[T]);I=!0}},o(_){d=d.filter(Boolean);for(let T=0;T<d.length;T+=1)R(d[T]);I=!1},d(_){_&&f(e),Ge(d,_),u=!1,B()}}}function Rl(r){let e,l,n;return{c(){e=A(", "),l=p("span"),n=A("​"),this.h()},l(a){e=$(a,", "),l=v(a,"SPAN",{class:!0});var t=k(l);n=$(t,"​"),t.forEach(f),this.h()},h(){N(l,"class","prevent-select svelte-1nzivjk")},m(a,t){V(a,e,t),V(a,l,t),s(l,n)},d(a){a&&f(e),a&&f(l)}}}function Wl(r){let e,l,n;e=new hl({props:{markerId:r[17]}});let a=r[19]<r[0].markerLinksToThis.length-1&&Rl();return{c(){Ce(e.$$.fragment),a&&a.c(),l=rl()},l(t){Me(e.$$.fragment,t),a&&a.l(t),l=rl()},m(t,i){we(e,t,i),a&&a.m(t,i),V(t,l,i),n=!0},p(t,i){const h={};i&1&&(h.markerId=t[17]),e.$set(h),t[19]<t[0].markerLinksToThis.length-1?a||(a=Rl(),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){Ue(e,t),a&&a.d(t),t&&f(l)}}}function Kl(r){let e,l,n,a,t,i,h,I,u,B,g=r[0].markerLinks,d=[];for(let _=0;_<g.length;_+=1)d[_]=Gl(jl(r,g,_));const L=_=>R(d[_],1,1,()=>{d[_]=null});return{c(){e=p("span"),l=p("span"),n=p("b"),a=A("📤Outlinks:"),t=A(`
					 `),i=U(),h=p("span");for(let _=0;_<d.length;_+=1)d[_].c();this.h()},l(_){e=v(_,"SPAN",{class:!0});var T=k(e);l=v(T,"SPAN",{class:!0});var E=k(l);n=v(E,"B",{});var P=k(n);a=$(P,"📤Outlinks:"),P.forEach(f),t=$(E,`
					 `),E.forEach(f),i=z(T),h=v(T,"SPAN",{});var j=k(h);for(let O=0;O<d.length;O+=1)d[O].l(j);j.forEach(f),T.forEach(f),this.h()},h(){N(l,"class","idlink svelte-1nzivjk"),N(e,"class","sminfoitem svelte-1nzivjk")},m(_,T){V(_,e,T),s(e,l),s(l,n),s(n,a),s(l,t),s(e,i),s(e,h);for(let E=0;E<d.length;E+=1)d[E]&&d[E].m(h,null);I=!0,u||(B=ue(e,"click",Oe(r[7])),u=!0)},p(_,T){if(T&1){g=_[0].markerLinks;let E;for(E=0;E<g.length;E+=1){const P=jl(_,g,E);d[E]?(d[E].p(P,T),D(d[E],1)):(d[E]=Gl(P),d[E].c(),D(d[E],1),d[E].m(h,null))}for(ge(),E=g.length;E<d.length;E+=1)L(E);be()}},i(_){if(!I){for(let T=0;T<g.length;T+=1)D(d[T]);I=!0}},o(_){d=d.filter(Boolean);for(let T=0;T<d.length;T+=1)R(d[T]);I=!1},d(_){_&&f(e),Ge(d,_),u=!1,B()}}}function Xl(r){let e,l,n;return{c(){e=A(", "),l=p("span"),n=A("​"),this.h()},l(a){e=$(a,", "),l=v(a,"SPAN",{class:!0});var t=k(l);n=$(t,"​"),t.forEach(f),this.h()},h(){N(l,"class","prevent-select svelte-1nzivjk")},m(a,t){V(a,e,t),V(a,l,t),s(l,n)},d(a){a&&f(e),a&&f(l)}}}function Gl(r){let e,l,n;e=new hl({props:{markerId:r[17]}});let a=r[19]<r[0].markerLinks.length-1&&Xl();return{c(){Ce(e.$$.fragment),a&&a.c(),l=rl()},l(t){Me(e.$$.fragment,t),a&&a.l(t),l=rl()},m(t,i){we(e,t,i),a&&a.m(t,i),V(t,l,i),n=!0},p(t,i){const h={};i&1&&(h.markerId=t[17]),e.$set(h),t[19]<t[0].markerLinks.length-1?a||(a=Xl(),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){Ue(e,t),a&&a.d(t),t&&f(l)}}}function Jl(r){let e,l,n,a,t,i=r[0].metatags.join(", ")+"",h;return{c(){e=p("span"),l=p("span"),n=p("b"),a=A("🏷Meta:"),t=A(`
					 `),h=A(i),this.h()},l(I){e=v(I,"SPAN",{class:!0});var u=k(e);l=v(u,"SPAN",{class:!0});var B=k(l);n=v(B,"B",{});var g=k(n);a=$(g,"🏷Meta:"),g.forEach(f),t=$(B,`
					 `),h=$(B,i),B.forEach(f),u.forEach(f),this.h()},h(){N(l,"class","idlink svelte-1nzivjk"),N(e,"class","sminfoitem svelte-1nzivjk")},m(I,u){V(I,e,u),s(e,l),s(l,n),s(n,a),s(l,t),s(l,h)},p(I,u){u&1&&i!==(i=I[0].metatags.join(", ")+"")&&Be(h,i)},d(I){I&&f(e)}}}function Yl(r){let e,l,n;return{c(){e=p("div"),this.h()},l(a){e=v(a,"DIV",{id:!0,class:!0}),k(e).forEach(f),this.h()},h(){N(e,"id","mdbody"+r[3]),N(e,"class","mdbody svelte-1nzivjk")},m(a,t){V(a,e,t),l||(n=ue(e,"click",Oe(r[5])),l=!0)},p:il,d(a){a&&f(e),l=!1,n()}}}function Ql(r){let e,l,n,a,t,i,h,I=r[1],u=[];for(let g=0;g<I.length;g+=1)u[g]=Zl(Dl(r,I,g));const B=g=>R(u[g],1,1,()=>{u[g]=null});return{c(){e=p("ul"),l=p("button"),n=A("↓"),a=U();for(let g=0;g<u.length;g+=1)u[g].c();this.h()},l(g){e=v(g,"UL",{});var d=k(e);l=v(d,"BUTTON",{class:!0});var L=k(l);n=$(L,"↓"),L.forEach(f),a=z(d);for(let _=0;_<u.length;_+=1)u[_].l(d);d.forEach(f),this.h()},h(){N(l,"class","expander svelte-1nzivjk")},m(g,d){V(g,e,d),s(e,l),s(l,n),s(e,a);for(let L=0;L<u.length;L+=1)u[L]&&u[L].m(e,null);t=!0,i||(h=ue(e,"click",dt(r[13])),i=!0)},p(g,d){if(d&6){I=g[1];let L;for(L=0;L<I.length;L+=1){const _=Dl(g,I,L);u[L]?(u[L].p(_,d),D(u[L],1)):(u[L]=Zl(_),u[L].c(),D(u[L],1),u[L].m(e,null))}for(ge(),L=I.length;L<u.length;L+=1)B(L);be()}},i(g){if(!t){for(let d=0;d<I.length;d+=1)D(u[d]);t=!0}},o(g){u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)R(u[d]);t=!1},d(g){g&&f(e),Ge(u,g),i=!1,h()}}}function Zl(r){let e,l;return e=new ol({props:{value:r[14].value,children:r[14].children,indent:r[2]+1}}),{c(){Ce(e.$$.fragment)},l(n){Me(e.$$.fragment,n)},m(n,a){we(e,n,a),l=!0},p(n,a){const t={};a&2&&(t.value=n[14].value),a&2&&(t.children=n[14].children),a&4&&(t.indent=n[2]+1),e.$set(t)},i(n){l||(D(e.$$.fragment,n),l=!0)},o(n){R(e.$$.fragment,n),l=!1},d(n){Ue(e,n)}}}function St(r){let e,l,n,a,t,i=r[0].title+"",h,I,u,B,g=r[0].metatags!=null&&r[0].metatags.includes("MD"),d,L,_,T,E,P,j,O,F,S,m,W=r[0].primaryMarkerType+"",Y,M,de,re,q,he=(r[0].progressTag==null?"NUL":r[0].progressTag)+"",o,y,c,J,fe,_e=r[0].priorityTag+"",X,Ye,Te=r[0].priorityNum+"",ze,pe,G,Ee,De,je,me,Ne,Qe,Le,Se=wl(r[0].fileLastModified)+"",Fe,Ae,ke,Ze,$e=r[0].metatags!=null&&r[0].metatags.includes("MD"),He,Ve,ye,qe,Re,ve,le,xe,We,ae=r[0].markerBody!=null&&Hl(r),se=g&&Vl(r);j=new hl({props:{markerId:r[0].markerId}});let Q=r[0].markerLinksToThis!=null&&ql(r),Z=r[0].markerLinks!=null&&Kl(r),ne=r[0].metatags!=null&&Jl(r),x=$e&&Yl(r),ee=r[1]!=null&&r[1].length>0&&Ql(r);return{c(){e=p("li"),l=p("section"),n=p("div"),a=p("a"),t=A("🔗"),h=A(i),u=U(),ae&&ae.c(),B=U(),se&&se.c(),d=U(),L=p("span"),_=p("b"),T=p("span"),E=A("🆔:"),P=U(),Ce(j.$$.fragment),O=U(),F=p("span"),S=p("b"),m=A("🔖@"),Y=A(W),M=U(),de=p("span"),re=p("b"),q=A("📈@"),o=A(he),y=U(),c=p("span"),J=p("b"),fe=A("🎚@"),X=A(_e),Ye=A("("),ze=A(Te),pe=A(")"),G=U(),Q&&Q.c(),Ee=U(),Z&&Z.c(),De=U(),ne&&ne.c(),je=U(),me=p("span"),Ne=p("b"),Qe=A("⌚Mod:"),Le=A(`
			 `),Fe=A(Se),Ae=U(),ke=p("div"),Ze=U(),x&&x.c(),Re=U(),ee&&ee.c(),ve=rl(),this.h()},l(b){e=v(b,"LI",{class:!0,"data-indent":!0,"data-title":!0,"data-markerid":!0,"data-sectioncolor":!0});var C=k(e);l=v(C,"SECTION",{class:!0});var K=k(l);n=v(K,"DIV",{class:!0});var ce=k(n);a=v(ce,"A",{class:!0,href:!0,style:!0});var Ie=k(a);t=$(Ie,"🔗"),h=$(Ie,i),Ie.forEach(f),u=z(ce),ae&&ae.l(ce),B=z(ce),se&&se.l(ce),ce.forEach(f),d=z(K),L=v(K,"SPAN",{class:!0});var tl=k(L);_=v(tl,"B",{});var el=k(_);T=v(el,"SPAN",{});var te=k(T);E=$(te,"🆔:"),te.forEach(f),P=z(el),Me(j.$$.fragment,el),el.forEach(f),tl.forEach(f),O=z(K),F=v(K,"SPAN",{class:!0});var H=k(F);S=v(H,"B",{});var w=k(S);m=$(w,"🔖@"),Y=$(w,W),w.forEach(f),H.forEach(f),M=z(K),de=v(K,"SPAN",{class:!0,style:!0});var Ke=k(de);re=v(Ke,"B",{});var nl=k(re);q=$(nl,"📈@"),o=$(nl,he),nl.forEach(f),Ke.forEach(f),y=z(K),c=v(K,"SPAN",{class:!0,style:!0});var Xe=k(c);J=v(Xe,"B",{});var Pe=k(J);fe=$(Pe,"🎚@"),X=$(Pe,_e),Ye=$(Pe,"("),ze=$(Pe,Te),pe=$(Pe,")"),Pe.forEach(f),Xe.forEach(f),G=z(K),Q&&Q.l(K),Ee=z(K),Z&&Z.l(K),De=z(K),ne&&ne.l(K),je=z(K),me=v(K,"SPAN",{class:!0});var ll=k(me);Ne=v(ll,"B",{});var al=k(Ne);Qe=$(al,"⌚Mod:"),al.forEach(f),Le=$(ll,`
			 `),Fe=$(ll,Se),ll.forEach(f),Ae=z(K),ke=v(K,"DIV",{id:!0,class:!0}),k(ke).forEach(f),Ze=z(K),x&&x.l(K),K.forEach(f),C.forEach(f),Re=z(b),ee&&ee.l(b),ve=rl(),this.h()},h(){N(a,"class","smtitle svelte-1nzivjk"),N(a,"href",I="idea:~/bin/idea ~/eradeo/eradeoroot "+encodeURIComponent(r[0].file)+":"+r[0].fileLine),oe(a,"color","#"+r[0].priorityColorHex),N(n,"class","topsticker sminfoitem svelte-1nzivjk"),N(L,"class","sminfoitem svelte-1nzivjk"),N(F,"class","sminfoitem svelte-1nzivjk"),N(de,"class","sminfoitem svelte-1nzivjk"),oe(de,"color","#"+r[0].progressColorHex),N(c,"class","sminfoitem svelte-1nzivjk"),oe(c,"color","#"+r[0].priorityColorHex),N(me,"class","sminfoitem svelte-1nzivjk"),N(ke,"id","smbody"+r[3]),N(ke,"class","mdbody svelte-1nzivjk"),N(l,"class","sminfo svelte-1nzivjk"),N(e,"class",He="smentry expanded "+(r[1]!=null&&r[1].length>0?"parent":"")+" svelte-1nzivjk"),N(e,"data-indent",r[2]),N(e,"data-title",Ve=r[0].title),N(e,"data-markerid",ye=r[0].markerId),N(e,"data-sectioncolor",qe=r[0].sectionColor)},m(b,C){V(b,e,C),s(e,l),s(l,n),s(n,a),s(a,t),s(a,h),s(n,u),ae&&ae.m(n,null),s(n,B),se&&se.m(n,null),s(l,d),s(l,L),s(L,_),s(_,T),s(T,E),s(_,P),we(j,_,null),s(l,O),s(l,F),s(F,S),s(S,m),s(S,Y),s(l,M),s(l,de),s(de,re),s(re,q),s(re,o),s(l,y),s(l,c),s(c,J),s(J,fe),s(J,X),s(J,Ye),s(J,ze),s(J,pe),s(l,G),Q&&Q.m(l,null),s(l,Ee),Z&&Z.m(l,null),s(l,De),ne&&ne.m(l,null),s(l,je),s(l,me),s(me,Ne),s(Ne,Qe),s(me,Le),s(me,Fe),s(l,Ae),s(l,ke),s(l,Ze),x&&x.m(l,null),V(b,Re,C),ee&&ee.m(b,C),V(b,ve,C),le=!0,xe||(We=[ue(a,"click",Oe(r[9])),ue(T,"click",Oe(r[12])),ue(ke,"click",Oe(r[6]))],xe=!0)},p(b,[C]){(!le||C&1)&&i!==(i=b[0].title+"")&&Be(h,i),(!le||C&1&&I!==(I="idea:~/bin/idea ~/eradeo/eradeoroot "+encodeURIComponent(b[0].file)+":"+b[0].fileLine))&&N(a,"href",I),(!le||C&1)&&oe(a,"color","#"+b[0].priorityColorHex),b[0].markerBody!=null?ae?ae.p(b,C):(ae=Hl(b),ae.c(),ae.m(n,B)):ae&&(ae.d(1),ae=null),C&1&&(g=b[0].metatags!=null&&b[0].metatags.includes("MD")),g?se?se.p(b,C):(se=Vl(b),se.c(),se.m(n,null)):se&&(se.d(1),se=null);const K={};C&1&&(K.markerId=b[0].markerId),j.$set(K),(!le||C&1)&&W!==(W=b[0].primaryMarkerType+"")&&Be(Y,W),(!le||C&1)&&he!==(he=(b[0].progressTag==null?"NUL":b[0].progressTag)+"")&&Be(o,he),(!le||C&1)&&oe(de,"color","#"+b[0].progressColorHex),(!le||C&1)&&_e!==(_e=b[0].priorityTag+"")&&Be(X,_e),(!le||C&1)&&Te!==(Te=b[0].priorityNum+"")&&Be(ze,Te),(!le||C&1)&&oe(c,"color","#"+b[0].priorityColorHex),b[0].markerLinksToThis!=null?Q?(Q.p(b,C),C&1&&D(Q,1)):(Q=ql(b),Q.c(),D(Q,1),Q.m(l,Ee)):Q&&(ge(),R(Q,1,1,()=>{Q=null}),be()),b[0].markerLinks!=null?Z?(Z.p(b,C),C&1&&D(Z,1)):(Z=Kl(b),Z.c(),D(Z,1),Z.m(l,De)):Z&&(ge(),R(Z,1,1,()=>{Z=null}),be()),b[0].metatags!=null?ne?ne.p(b,C):(ne=Jl(b),ne.c(),ne.m(l,je)):ne&&(ne.d(1),ne=null),(!le||C&1)&&Se!==(Se=wl(b[0].fileLastModified)+"")&&Be(Fe,Se),C&1&&($e=b[0].metatags!=null&&b[0].metatags.includes("MD")),$e?x?x.p(b,C):(x=Yl(b),x.c(),x.m(l,null)):x&&(x.d(1),x=null),(!le||C&2&&He!==(He="smentry expanded "+(b[1]!=null&&b[1].length>0?"parent":"")+" svelte-1nzivjk"))&&N(e,"class",He),(!le||C&4)&&N(e,"data-indent",b[2]),(!le||C&1&&Ve!==(Ve=b[0].title))&&N(e,"data-title",Ve),(!le||C&1&&ye!==(ye=b[0].markerId))&&N(e,"data-markerid",ye),(!le||C&1&&qe!==(qe=b[0].sectionColor))&&N(e,"data-sectioncolor",qe),b[1]!=null&&b[1].length>0?ee?(ee.p(b,C),C&2&&D(ee,1)):(ee=Ql(b),ee.c(),D(ee,1),ee.m(ve.parentNode,ve)):ee&&(ge(),R(ee,1,1,()=>{ee=null}),be())},i(b){le||(D(j.$$.fragment,b),D(Q),D(Z),D(ee),le=!0)},o(b){R(j.$$.fragment,b),R(Q),R(Z),R(ee),le=!1},d(b){b&&f(e),ae&&ae.d(),se&&se.d(),Ue(j),Q&&Q.d(),Z&&Z.d(),ne&&ne.d(),x&&x.d(),b&&f(Re),ee&&ee.d(b),b&&f(ve),xe=!1,ot(We)}}}function At(r,e,l){let{value:n}=e,{children:a=[]}=e,{indent:t=0}=e,i=kt();function h(P,j,O){var F=j+n.markerId,S=document.getElementById(F);if(S==null)S=document.createElement("div"),S.id=F,j=="mdbody"?S.innerHTML=O:S.appendChild(O);else{var m=S.parentNode;if(m.removeChild(S),S.lastButton!=null&&(S.lastButton.style.backgroundColor="#fff"),m.id===j+i){gt(m==null?void 0:m.parentNode),ct(m==null?void 0:m.parentNode);return}}var W=document.getElementById(j+i);W.appendChild(S),S.lastButton=P.target,P.target.style.backgroundColor="#00bfff"}function I(P){sl.call(this,r,P)}function u(P){sl.call(this,r,P)}function B(P){sl.call(this,r,P)}function g(P){sl.call(this,r,P)}function d(P){sl.call(this,r,P)}const L=P=>{let j=document.createElement("pre");j.textContent=n.markerBody,h(P,"smbody",j)},_=P=>h(P,"mdbody",n.mdMarkerBody),T=P=>navigator.clipboard.writeText(n.markerId),E=()=>ut(this);return r.$$set=P=>{"value"in P&&l(0,n=P.value),"children"in P&&l(1,a=P.children),"indent"in P&&l(2,t=P.indent)},[n,a,t,i,h,I,u,B,g,d,L,_,T,E]}class ol extends _l{constructor(e){super(),pl(this,e,At,St,vl,{value:0,children:1,indent:2})}}Je.disable_scroll_handling;Je.goto;Je.invalidate;Je.invalidateAll;Je.preload_data;Je.preload_code;Je.before_navigate;Je.after_navigate;const{Boolean:fl}=vt;function xl(r,e,l){const n=r.slice();return n[18]=e[l],n}function et(r,e,l){const n=r.slice();return n[18]=e[l],n}function lt(r,e,l){const n=r.slice();return n[18]=e[l],n}function tt(r,e,l){const n=r.slice();return n[18]=e[l],n}function nt(r){let e,l,n,a,t,i,h,I,u,B,g,d,L,_,T,E,P,j=r[0].markers,O=[];for(let o=0;o<j.length;o+=1)O[o]=rt(tt(r,j,o));const F=o=>R(O[o],1,1,()=>{O[o]=null});let S=r[2]?r[0].markersbypriority.slice().reverse():r[0].markersbypriority,m=[];for(let o=0;o<S.length;o+=1)m[o]=at(lt(r,S,o));const W=o=>R(m[o],1,1,()=>{m[o]=null});let Y=r[2]?r[0].markersbyprogress.slice().reverse():r[0].markersbyprogress,M=[];for(let o=0;o<Y.length;o+=1)M[o]=st(et(r,Y,o));const de=o=>R(M[o],1,1,()=>{M[o]=null});let re=r[2]?r[0].markersbyrecency.slice().reverse():r[0].markersbyrecency,q=[];for(let o=0;o<re.length;o+=1)q[o]=it(xl(r,re,o));const he=o=>R(q[o],1,1,()=>{q[o]=null});return{c(){e=p("ul"),l=p("button"),n=A("↓"),a=U();for(let o=0;o<O.length;o+=1)O[o].c();i=U(),h=p("ul");for(let o=0;o<m.length;o+=1)m[o].c();u=U(),B=p("ul");for(let o=0;o<M.length;o+=1)M[o].c();d=U(),L=p("ul");for(let o=0;o<q.length;o+=1)q[o].c();this.h()},l(o){e=v(o,"UL",{id:!0});var y=k(e);l=v(y,"BUTTON",{class:!0});var c=k(l);n=$(c,"↓"),c.forEach(f),a=z(y);for(let X=0;X<O.length;X+=1)O[X].l(y);y.forEach(f),i=z(o),h=v(o,"UL",{id:!0});var J=k(h);for(let X=0;X<m.length;X+=1)m[X].l(J);J.forEach(f),u=z(o),B=v(o,"UL",{id:!0});var fe=k(B);for(let X=0;X<M.length;X+=1)M[X].l(fe);fe.forEach(f),d=z(o),L=v(o,"UL",{id:!0});var _e=k(L);for(let X=0;X<q.length;X+=1)q[X].l(_e);_e.forEach(f),this.h()},h(){N(l,"class","expander"),N(e,"id","smbyid"),e.hidden=t=r[1]!=="sortbyid",N(h,"id","smbypriority"),h.hidden=I=r[1]!=="smbypriority",N(B,"id","smbyprogress"),B.hidden=g=r[1]!=="smbyprogress",N(L,"id","smbyrecency"),L.hidden=_=r[1]!=="smbyrecency"},m(o,y){V(o,e,y),s(e,l),s(l,n),s(e,a);for(let c=0;c<O.length;c+=1)O[c]&&O[c].m(e,null);V(o,i,y),V(o,h,y);for(let c=0;c<m.length;c+=1)m[c]&&m[c].m(h,null);V(o,u,y),V(o,B,y);for(let c=0;c<M.length;c+=1)M[c]&&M[c].m(B,null);V(o,d,y),V(o,L,y);for(let c=0;c<q.length;c+=1)q[c]&&q[c].m(L,null);T=!0,E||(P=_t(r[5].call(null,e)),E=!0)},p(o,y){if(y&1){j=o[0].markers;let c;for(c=0;c<j.length;c+=1){const J=tt(o,j,c);O[c]?(O[c].p(J,y),D(O[c],1)):(O[c]=rt(J),O[c].c(),D(O[c],1),O[c].m(e,null))}for(ge(),c=j.length;c<O.length;c+=1)F(c);be()}if((!T||y&2&&t!==(t=o[1]!=="sortbyid"))&&(e.hidden=t),y&5){S=o[2]?o[0].markersbypriority.slice().reverse():o[0].markersbypriority;let c;for(c=0;c<S.length;c+=1){const J=lt(o,S,c);m[c]?(m[c].p(J,y),D(m[c],1)):(m[c]=at(J),m[c].c(),D(m[c],1),m[c].m(h,null))}for(ge(),c=S.length;c<m.length;c+=1)W(c);be()}if((!T||y&2&&I!==(I=o[1]!=="smbypriority"))&&(h.hidden=I),y&5){Y=o[2]?o[0].markersbyprogress.slice().reverse():o[0].markersbyprogress;let c;for(c=0;c<Y.length;c+=1){const J=et(o,Y,c);M[c]?(M[c].p(J,y),D(M[c],1)):(M[c]=st(J),M[c].c(),D(M[c],1),M[c].m(B,null))}for(ge(),c=Y.length;c<M.length;c+=1)de(c);be()}if((!T||y&2&&g!==(g=o[1]!=="smbyprogress"))&&(B.hidden=g),y&5){re=o[2]?o[0].markersbyrecency.slice().reverse():o[0].markersbyrecency;let c;for(c=0;c<re.length;c+=1){const J=xl(o,re,c);q[c]?(q[c].p(J,y),D(q[c],1)):(q[c]=it(J),q[c].c(),D(q[c],1),q[c].m(L,null))}for(ge(),c=re.length;c<q.length;c+=1)he(c);be()}(!T||y&2&&_!==(_=o[1]!=="smbyrecency"))&&(L.hidden=_)},i(o){if(!T){for(let y=0;y<j.length;y+=1)D(O[y]);for(let y=0;y<S.length;y+=1)D(m[y]);for(let y=0;y<Y.length;y+=1)D(M[y]);for(let y=0;y<re.length;y+=1)D(q[y]);T=!0}},o(o){O=O.filter(fl);for(let y=0;y<O.length;y+=1)R(O[y]);m=m.filter(fl);for(let y=0;y<m.length;y+=1)R(m[y]);M=M.filter(fl);for(let y=0;y<M.length;y+=1)R(M[y]);q=q.filter(fl);for(let y=0;y<q.length;y+=1)R(q[y]);T=!1},d(o){o&&f(e),Ge(O,o),o&&f(i),o&&f(h),Ge(m,o),o&&f(u),o&&f(B),Ge(M,o),o&&f(d),o&&f(L),Ge(q,o),E=!1,P()}}}function rt(r){let e,l;const n=[r[18]];let a={};for(let t=0;t<n.length;t+=1)a=cl(a,n[t]);return e=new ol({props:a}),{c(){Ce(e.$$.fragment)},l(t){Me(e.$$.fragment,t)},m(t,i){we(e,t,i),l=!0},p(t,i){const h=i&1?ul(n,[dl(t[18])]):{};e.$set(h)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){Ue(e,t)}}}function at(r){let e,l;const n=[r[18]];let a={};for(let t=0;t<n.length;t+=1)a=cl(a,n[t]);return e=new ol({props:a}),{c(){Ce(e.$$.fragment)},l(t){Me(e.$$.fragment,t)},m(t,i){we(e,t,i),l=!0},p(t,i){const h=i&5?ul(n,[dl(t[18])]):{};e.$set(h)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){Ue(e,t)}}}function st(r){let e,l;const n=[r[18]];let a={};for(let t=0;t<n.length;t+=1)a=cl(a,n[t]);return e=new ol({props:a}),{c(){Ce(e.$$.fragment)},l(t){Me(e.$$.fragment,t)},m(t,i){we(e,t,i),l=!0},p(t,i){const h=i&5?ul(n,[dl(t[18])]):{};e.$set(h)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){Ue(e,t)}}}function it(r){let e,l;const n=[r[18]];let a={};for(let t=0;t<n.length;t+=1)a=cl(a,n[t]);return e=new ol({props:a}),{c(){Ce(e.$$.fragment)},l(t){Me(e.$$.fragment,t)},m(t,i){we(e,t,i),l=!0},p(t,i){const h=i&5?ul(n,[dl(t[18])]):{};e.$set(h)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){Ue(e,t)}}}function $t(r){let e,l,n,a,t,i,h,I,u,B,g,d,L,_,T,E,P,j,O=r[2]?"Ascending":"Descending",F,S,m,W,Y,M,de,re,q,he,o,y,c,J,fe,_e,X,Ye,Te,ze,pe,G,Ee,De,je,me,Ne,Qe,Le,Se,Fe,Ae,ke,Ze,$e,He,Ve,ye,qe,Re,ve,le,xe,We,ae,se,Q,Z,ne,x,ee,b,C,K,ce,Ie,tl,el;X=new hl({props:{markerId:r[4]}});let te=r[0].markers!=null&&nt(r);return{c(){e=p("nav"),l=p("button"),n=A("TOP"),a=U(),t=p("label"),i=A("View:"),h=U(),I=p("select"),u=p("option"),B=A("Sort by ID"),g=p("option"),d=A("Sort by Priority"),L=p("option"),_=A("Sort by Progress"),T=p("option"),E=A("Sort by Recency"),P=U(),j=p("button"),F=A(O),S=U(),m=p("label"),W=A("Hide index:"),Y=U(),M=p("input"),de=U(),re=p("input"),q=U(),he=p("button"),o=A("Load"),y=U(),c=p("br"),J=U(),fe=p("span"),_e=A("» "),Ce(X.$$.fragment),Ye=U(),Te=p("br"),ze=U(),pe=p("div"),G=p("div"),Ee=p("span"),De=A("UNKNOWN(1000)"),je=U(),me=p("span"),Ne=A("NO(100)"),Qe=U(),Le=p("span"),Se=A("VLO(45)"),Fe=U(),Ae=p("span"),ke=A("LO(35)"),Ze=U(),$e=p("span"),He=A("MED(25)"),Ve=U(),ye=p("span"),qe=A("HI(15)"),Re=U(),ve=p("span"),le=A("EX(5)"),xe=U(),We=p("span"),ae=A("TOP(0)"),se=U(),Q=p("span"),Z=A("NEG(-n)"),ne=U(),x=p("div"),ee=A("&zwsp;"),b=U(),C=p("nav"),K=U(),ce=p("main"),te&&te.c(),this.h()},l(H){e=v(H,"NAV",{id:!0});var w=k(e);l=v(w,"BUTTON",{class:!0});var Ke=k(l);n=$(Ke,"TOP"),Ke.forEach(f),a=z(w),t=v(w,"LABEL",{for:!0});var nl=k(t);i=$(nl,"View:"),nl.forEach(f),h=z(w),I=v(w,"SELECT",{id:!0});var Xe=k(I);u=v(Xe,"OPTION",{});var Pe=k(u);B=$(Pe,"Sort by ID"),Pe.forEach(f),g=v(Xe,"OPTION",{});var ll=k(g);d=$(ll,"Sort by Priority"),ll.forEach(f),L=v(Xe,"OPTION",{});var al=k(L);_=$(al,"Sort by Progress"),al.forEach(f),T=v(Xe,"OPTION",{});var kl=k(T);E=$(kl,"Sort by Recency"),kl.forEach(f),Xe.forEach(f),P=z(w),j=v(w,"BUTTON",{class:!0});var gl=k(j);F=$(gl,O),gl.forEach(f),S=z(w),m=v(w,"LABEL",{for:!0});var bl=k(m);W=$(bl,"Hide index:"),bl.forEach(f),Y=z(w),M=v(w,"INPUT",{type:!0,id:!0}),de=z(w),re=v(w,"INPUT",{type:!0,id:!0}),q=z(w),he=v(w,"BUTTON",{});var El=k(he);o=$(El,"Load"),El.forEach(f),y=z(w),c=v(w,"BR",{}),J=z(w),fe=v(w,"SPAN",{style:!0});var ml=k(fe);_e=$(ml,"» "),Me(X.$$.fragment,ml),ml.forEach(f),Ye=z(w),Te=v(w,"BR",{}),ze=z(w),pe=v(w,"DIV",{class:!0,style:!0});var yl=k(pe);G=v(yl,"DIV",{style:!0});var ie=k(G);Ee=v(ie,"SPAN",{});var Il=k(Ee);De=$(Il,"UNKNOWN(1000)"),Il.forEach(f),je=z(ie),me=v(ie,"SPAN",{});var Tl=k(me);Ne=$(Tl,"NO(100)"),Tl.forEach(f),Qe=z(ie),Le=v(ie,"SPAN",{});var Nl=k(Le);Se=$(Nl,"VLO(45)"),Nl.forEach(f),Fe=z(ie),Ae=v(ie,"SPAN",{});var Ll=k(Ae);ke=$(Ll,"LO(35)"),Ll.forEach(f),Ze=z(ie),$e=v(ie,"SPAN",{});var Sl=k($e);He=$(Sl,"MED(25)"),Sl.forEach(f),Ve=z(ie),ye=v(ie,"SPAN",{});var Al=k(ye);qe=$(Al,"HI(15)"),Al.forEach(f),Re=z(ie),ve=v(ie,"SPAN",{});var $l=k(ve);le=$($l,"EX(5)"),$l.forEach(f),xe=z(ie),We=v(ie,"SPAN",{});var Pl=k(We);ae=$(Pl,"TOP(0)"),Pl.forEach(f),se=z(ie),Q=v(ie,"SPAN",{});var Bl=k(Q);Z=$(Bl,"NEG(-n)"),Bl.forEach(f),ie.forEach(f),yl.forEach(f),w.forEach(f),ne=z(H),x=v(H,"DIV",{id:!0});var Ol=k(x);ee=$(Ol,"&zwsp;"),Ol.forEach(f),b=z(H),C=v(H,"NAV",{id:!0,class:!0}),k(C).forEach(f),K=z(H),ce=v(H,"MAIN",{id:!0});var Cl=k(ce);te&&te.l(Cl),Cl.forEach(f),this.h()},h(){N(l,"class","mdbutton"),N(t,"for","modes"),u.__value="sortbyid",u.value=u.__value,g.__value="smbypriority",g.value=g.__value,L.__value="smbyprogress",L.value=L.__value,T.__value="smbyrecency",T.value=T.__value,N(I,"id","modes"),r[1]===void 0&&ht(()=>r[8].call(I)),N(j,"class","mdbutton"),N(m,"for","indexactivecheckbox"),N(M,"type","checkbox"),N(M,"id","indexactivecheckbox"),N(re,"type","file"),N(re,"id","file-input"),oe(fe,"padding-left","1rem"),oe(fe,"font-size","1.5rem"),oe(G,"display","flex"),oe(G,"justify-content","space-between"),oe(G,"font-size","0.5rem"),oe(G,"color","black"),N(pe,"class","fullwidth"),oe(pe,"background-image","linear-gradient(to right, black, #00bfff, #00bfff, #00CC00, #00FF00, #FFFF00, #FFA728, #DD0000, #FF0000, #FF00FF, #FFFFFF)"),oe(pe,"line-height","0.6rem"),N(e,"id","topbar"),N(x,"id","topbarpad"),N(C,"id","smindex"),N(C,"class","fullwidth"),C.hidden=r[3],N(ce,"id","smmain")},m(H,w){V(H,e,w),s(e,l),s(l,n),s(e,a),s(e,t),s(t,i),s(e,h),s(e,I),s(I,u),s(u,B),s(I,g),s(g,d),s(I,L),s(L,_),s(I,T),s(T,E),Ml(I,r[1],!0),s(e,P),s(e,j),s(j,F),s(e,S),s(e,m),s(m,W),s(e,Y),s(e,M),M.checked=r[3],s(e,de),s(e,re),s(e,q),s(e,he),s(he,o),s(e,y),s(e,c),s(e,J),s(e,fe),s(fe,_e),we(X,fe,null),s(e,Ye),s(e,Te),s(e,ze),s(e,pe),s(pe,G),s(G,Ee),s(Ee,De),s(G,je),s(G,me),s(me,Ne),s(G,Qe),s(G,Le),s(Le,Se),s(G,Fe),s(G,Ae),s(Ae,ke),s(G,Ze),s(G,$e),s($e,He),s(G,Ve),s(G,ye),s(ye,qe),s(G,Re),s(G,ve),s(ve,le),s(G,xe),s(G,We),s(We,ae),s(G,se),s(G,Q),s(Q,Z),V(H,ne,w),V(H,x,w),s(x,ee),V(H,b,w),V(H,C,w),V(H,K,w),V(H,ce,w),te&&te.m(ce,null),Ie=!0,tl||(el=[ue(l,"click",r[7]),ue(I,"change",r[8]),ue(j,"click",r[9]),ue(M,"change",r[10]),ue(he,"click",r[6])],tl=!0)},p(H,[w]){w&2&&Ml(I,H[1]),(!Ie||w&4)&&O!==(O=H[2]?"Ascending":"Descending")&&Be(F,O),w&8&&(M.checked=H[3]);const Ke={};w&16&&(Ke.markerId=H[4]),X.$set(Ke),(!Ie||w&8)&&(C.hidden=H[3]),H[0].markers!=null?te?(te.p(H,w),w&1&&D(te,1)):(te=nt(H),te.c(),D(te,1),te.m(ce,null)):te&&(ge(),R(te,1,1,()=>{te=null}),be())},i(H){Ie||(D(X.$$.fragment,H),D(te),Ie=!0)},o(H){R(X.$$.fragment,H),R(te),Ie=!1},d(H){H&&f(e),Ue(X),H&&f(ne),H&&f(x),H&&f(b),H&&f(C),H&&f(K),H&&f(ce),te&&te.d(),tl=!1,ot(el)}}}const Pt=4;function Bt(r){r.onclick=()=>{console.log("Clicked on marker section `%s`",r.dataset.markerid);let e=r.classList.toggle("expanded");var l=r.nextElementSibling;l==null||l.tagName!="UL"||(l.hidden=!e)}}function Ot(r,e,l){for(;e.length>0&&!l.getAttribute("data-sectionid").startsWith(e[e.length-1].getAttribute("data-sectionid"));)e.pop();const n=document.createElement("ul");n.setAttribute("data-sectionid",l.getAttribute("data-sectionid")),n.appendChild(l),e.length===0?(n.classList.add("expand-hover"),r.appendChild(n)):(n.classList.add("child-hover"),e[e.length-1].appendChild(n)),e.push(n)}function Ct(r){let e=r.dataset.expander!=null;const l=r.closest("ul");l.querySelectorAll(".smentry.parent").forEach(n=>{e?n.classList.add("expanded"):n.classList.remove("expanded");var a=n.nextElementSibling;a!=null&&(a.hidden=!e)}),l.querySelectorAll(".expander").forEach(n=>{e?(delete n.dataset.expander,n.innerHTML="↓"):(n.dataset.expander=!0,n.innerHTML="→")})}function Mt(r,e,l){let{data:n}=e,a="sortbyid",t=!1,i=!1,h="";mt(async()=>{u(),B(),window.addEventListener("popstate",I),console.log("onMount setup finished...")});function I(F){if(document.location.hash!=null){let S=document.location.hash.substring(1);console.log("Navigating to: "+S),bt(S,null,!1)}}function u(){let F=new window.IntersectionObserver(([S])=>{let m=S.target.dataset.markerid;l(4,h=m)},{root:null,rootMargin:"-50% 0% -50% 0%",threshold:0});document.querySelectorAll(".smentry").forEach(S=>{F.observe(S)})}function B(){document.addEventListener("click",function(F){var S=F.target;if(S.tagName!="UL")return!0;var m=null,W=S.previousElementSibling;if(W!=null&&W.tagName=="LI")m=W;else{for(var Y=S.firstElementChild;Y!=null&&Y.tagName!="LI";)Y=Y.nextElementSibling;m=Y}m==null&&(m=S.firstElementChild),m!=null&&(ut(m),ct(m)),F.preventDefault()})}function g(F,S){const m=document.createElement("a");m.classList.add("indexlink","fullwidth"),m.style.paddingLeft=`${S}rem`,m.style.textIndent=`${-S}rem`;var W=It(F.dataset.sectioncolor,-5*F.dataset.indent);return m.style.backgroundColor="#"+W,m.style.color="#"+Tt(W,"ffffff","000000"),m.href=`#${F.dataset.markerid}`,m.innerHTML=`&sect; ${F.dataset.title} (${F.dataset.markerid})`,m.onclick=ft,m}function d(F,S,m){var W=parseInt(m.dataset.indent);if(W>Pt)return;const Y=g(m,W),M=document.createElement("li");M.setAttribute("data-sectionid",m.dataset.markerid),M.appendChild(Y),Ot(F,S,M)}function L(F,S,m){yt(m,"ul")&&(Bt(m),d(F,S,m))}function _(F){console.log("Initializing marker tree, node is a %s...",F.tagName);var S=document.getElementById("smindex");S==null||S.replaceChildren();const m=[];F.querySelectorAll(".smentry").forEach(W=>{L(S,m,W)}),document.querySelectorAll(".expander").forEach(W=>{var M;var Y=(M=W.parentElement)==null?void 0:M.querySelectorAll("ul");Y.length===0?W.remove():W.onclick=()=>{Ct(W)}})}function T(){const F=document.getElementById("file-input").files[0],S=new FileReader;S.addEventListener("load",()=>{const m=S.result;console.log(m),l(0,n=Et(JSON.parse(m)))}),S.readAsText(F)}const E=()=>{window.scrollTo(0,0)};function P(){a=pt(this),l(1,a)}const j=()=>{l(2,t=!t)};function O(){i=this.checked,l(3,i)}return r.$$set=F=>{"data"in F&&l(0,n=F.data)},[n,a,t,i,h,_,T,E,P,j,O]}class Dt extends _l{constructor(e){super(),pl(this,e,Mt,$t,vl,{data:0})}}export{Dt as default};
