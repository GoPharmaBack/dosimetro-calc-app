(this["webpackJsonpdosimetro-calc-app"]=this["webpackJsonpdosimetro-calc-app"]||[]).push([[0],{11:function(e,c,s){"use strict";s.r(c);var a=s(1),t=s.n(a),l=s(4),r=s.n(l),i=(s(9),s.p+"static/media/eisai-logo.92e070d8.png"),n=s(2),j=s(0);var o=function(){var e=Object(a.useState)(!1),c=Object(n.a)(e,2),s=c[0],t=c[1],l=Object(a.useState)(0),r=Object(n.a)(l,2),i=r[0],o=r[1],d=Object(a.useState)(0),b=Object(n.a)(d,2),h=b[0],p=b[1],m=Object(a.useState)(0),O=Object(n.a)(m,2),S=O[0],x=O[1],u=Object(a.useState)(0),U=Object(n.a)(u,2),J=U[0],Q=U[1],g=Object(a.useState)(0),I=Object(n.a)(g,2),F=I[0],K=I[1];return Object(a.useEffect)((function(){document.querySelector(".result").value="0"}),[]),Object(a.useEffect)((function(){s&&(document.querySelector(".result").value="0")})),console.log(h),console.log(i),Object(j.jsx)("section",{className:"calculadora",children:Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"contenedor-form",children:[Object(j.jsxs)("div",{className:"bloque-rosa",children:[Object(j.jsxs)("div",{className:"datos-usuario",children:[Object(j.jsxs)("div",{className:"group-usuario",children:[Object(j.jsx)("label",{children:" Altura: "}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",id:"altura",placeholder:"Ingresa la altura"}),Object(j.jsx)("p",{children:"cm"})]})]}),Object(j.jsxs)("div",{className:"group-usuario",children:[Object(j.jsx)("label",{children:" Peso: "}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",id:"peso",placeholder:"Ingresa el peso"}),Object(j.jsx)("p",{children:" kg"})]})]})]}),Object(j.jsxs)("div",{className:"botones-form",children:[Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),s&&t(!1);var c=document.querySelector("#altura").value,a=document.querySelector("#peso").value,l=Math.pow(c,.725)*Math.pow(a,.425)*.7184/100;x(l.toFixed(4)),console.log(l);var r=parseFloat(1.4*l);Q(r.toFixed(4)),console.log(r.toFixed(4)),K((2*r/1).toFixed(4))},children:Object(j.jsx)("strong",{children:"Calcular dosis"})}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),document.querySelector("form").reset(),t(!0),o(0),p(0),Q(0),K(0)},children:"Borrar datos"})]})]}),Object(j.jsxs)("div",{className:"bloque-azul",children:[Object(j.jsxs)("div",{className:"datos-bsa",children:[Object(j.jsx)("label",{children:" BSA (Superficie Corporal): "}),Object(j.jsxs)("div",{children:[" ",Object(j.jsx)("input",{type:"text",className:"result",value:S,readOnly:!0}),Object(j.jsxs)("p",{children:["m",Object(j.jsx)("sup",{children:"2"})]})]})]}),Object(j.jsx)("div",{className:"datos-viales",children:Object(j.jsxs)("div",{className:"caja-azul",children:[Object(j.jsxs)("div",{className:"grupo-viales",children:[Object(j.jsx)("label",{children:"Dosis: "}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",className:"result",value:J,readOnly:!0}),"mg"]})]}),Object(j.jsxs)("div",{className:"grupo-viales",children:[Object(j.jsx)("label",{children:"No. de viales: "}),Object(j.jsx)("input",{type:"text",className:"result",value:F,readOnly:!0})]})]})})]})]})})})};var d=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:Object(j.jsxs)("h1",{children:["Dos\xedmetro ",Object(j.jsx)("strong",{children:"Eribulina"})]})}),Object(j.jsxs)("div",{className:"app-contenedor",children:[Object(j.jsx)(o,{}),Object(j.jsxs)("section",{className:"datos",children:[Object(j.jsxs)("div",{className:"informacion",children:[Object(j.jsx)("p",{className:"titulo",children:"Informaci\xf3n"}),Object(j.jsx)("p",{className:"parrafo",children:"Esta calculadora est\xe1 basada en la f\xf3rmula cl\xe1sica de DuBois y DuBois."}),Object(j.jsx)("p",{children:"Se ha intentado que los c\xe1lculos sean lo m\xe1s exactos posibles. Por supuesto, se encontrar\xe1n ligeras diferencias en las cifras si se comparan ambos, pero en general, escasamente significativas. La valoraci\xf3n es tambi\xe9n similar:"}),Object(j.jsx)("section",{className:"tabla",children:Object(j.jsx)("table",{children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("strong",{children:"Normal"})}),Object(j.jsxs)("td",{children:["1.7 m",Object(j.jsx)("sup",{children:"2"})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("strong",{children:"Media Varones"})}),Object(j.jsxs)("td",{children:["1.9 m",Object(j.jsx)("sup",{children:"2"})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("strong",{children:"Media Mujeres"})}),Object(j.jsxs)("td",{children:["1.6 m",Object(j.jsx)("sup",{children:"2"})]})]})]})})}),Object(j.jsx)("small",{children:Object(j.jsx)("strong",{children:"Referencias:"})}),Object(j.jsx)("small",{children:"Dubois D, Dubois EF. A formula to estimate the approximate surface area if height and weight be known. Arch Intern Med. 1916; 17:863-871."}),Object(j.jsx)("small",{children:"Wang Y., Moss, J, Thisted R. Predictors of Body Surface Area. J Clin Anesth 1992; 4(1): 4-10."})]}),Object(j.jsxs)("div",{className:"formulas",children:[Object(j.jsx)("p",{className:"titulo",children:"formulas"}),Object(j.jsxs)("div",{className:"contenedor-formulas",children:[Object(j.jsxs)("div",{className:"formula",children:[Object(j.jsx)("p",{children:"F\xf3rmula de DuBois y DuBois:"}),Object(j.jsxs)("strong",{children:["BSA = 0.007184 x Peso ",Object(j.jsx)("sup",{children:"0.425"})," x altura ",Object(j.jsx)("sup",{children:"0.725"})]})]}),Object(j.jsxs)("div",{className:"formula",children:[Object(j.jsx)("p",{children:"F\xf3rmula para determinar dosis:"}),Object(j.jsxs)("strong",{children:[" Dosis = 1.4 mg/m",Object(j.jsx)("sup",{children:"2"})," "]})]})]})]})]}),Object(j.jsxs)("section",{className:"logos-footer",children:[Object(j.jsx)("img",{src:i,alt:"logo-eisai"}),Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"logo-halaven"})]}),Object(j.jsx)("div",{className:"color"})]})]})},b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,12)).then((function(c){var s=c.getCLS,a=c.getFID,t=c.getFCP,l=c.getLCP,r=c.getTTFB;s(e),a(e),t(e),l(e),r(e)}))};r.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),b()},9:function(e,c,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.776e6f96.chunk.js.map