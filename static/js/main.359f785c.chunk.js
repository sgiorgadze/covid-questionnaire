(this["webpackJsonpcovid-questionnaire"]=this["webpackJsonpcovid-questionnaire"]||[]).push([[0],{33:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(23),i=a.n(s),r=(a(33),a(20)),o=a(14),j=Object(r.b)({name:"CovidQuestionnaire",initialState:{},reducers:{setUserInfo:function(e,t){var a=t.payload;e.userInfo=a},setCovidInfo:function(e,t){var a=t.payload;e.covidInfo=a},setVaccinationInfo:function(e,t){var a=t.payload;e.vaccinationInfo=a},setRecommendations:function(e,t){var a=t.payload;e.recommendations=a}}}),l=j.actions,d=l.setUserInfo,b=l.setCovidInfo,u=l.setVaccinationInfo,m=l.setRecommendations,O=j.reducer,h=Object(o.b)({CovidQuestionnaire:O}),v=Object(r.a)({reducer:h}),x=a(8),g=a(12),f=a(6),p={required:{value:!0,message:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8"},letters:{value:/^[\u10d0-\u10f0A-Za-z]+$/,message:" \u10d5\u10d4\u10da\u10d8 \u10e3\u10dc\u10d3\u10d0 \u10e8\u10d4\u10d8\u10ea\u10d0\u10d5\u10d3\u10d4\u10e1 \u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10d0\u10dc\u10d1\u10d0\u10dc\u10d8\u10e1 \u10d0\u10e1\u10dd\u10d4\u10d1\u10e1"},email:{value:/([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@redberry([\.])ge/,message:"\u10db\u10d4\u10d8\u10da\u10d8\u10e1 \u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10d8 \u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8\u10d0"},number:{value:/^[0-9]*$/,message:"\u10e8\u10d4\u10d8\u10e7\u10d5\u10d0\u10dc\u10d4\u10d7 \u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10d7\u10d8 \u10db\u10dc\u10d8\u10e8\u10dc\u10d4\u10da\u10dd\u10d1\u10d0"},date:{value:/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,message:"\u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10da\u10d0\u10d3 \u10e3\u10dc\u10d3\u10d0 \u10d8\u10e7\u10dd\u10e1 Date"}},N="covid-questionnaire",_=(a(37),a(0)),k=function(){return Object(_.jsxs)("div",{className:"start_page_wrapper",children:[Object(_.jsx)("div",{className:"main_logo",children:Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/main logo.png"),alt:""})}),Object(_.jsxs)(g.b,{to:"/".concat(N,"/\u10d9\u10d8\u10d7\u10ee\u10d5\u10d0\u10e0\u10d8/page1"),className:"start_link",children:["\u10d9\u10d8\u10d7\u10ee\u10d5\u10d0\u10e0\u10d8\u10e1 ",Object(_.jsx)("br",{}),"\u10d3\u10d0\u10ec\u10e7\u10d4\u10d1\u10d0"]})]})},B=a(2),w=a(4),y=a(13),C=a(16),S=function(e){return e.CovidQuestionnaire.userInfo},q=function(e){return e.CovidQuestionnaire.covidInfo},R=function(e){return e.CovidQuestionnaire.vaccinationInfo},V=function(e){return e.CovidQuestionnaire.recommendations},T=a(17),I=(a(42),["name","label"]),D=Object(n.forwardRef)((function(e,t){var a=e.name,n=e.label,c=Object(T.a)(e,I);return Object(_.jsxs)("div",{className:"form_block",children:[Object(_.jsxs)("label",{htmlFor:a,children:[n,n&&"*"]}),Object(_.jsx)("input",Object(B.a)(Object(B.a)({ref:t},c),{},{name:a,id:a}))]})})),F=(a(43),function(e){var t=e.history,a=Object(y.b)({mode:"all"}),c=a.register,s=a.formState,i=s.errors,r=s.isValid,o=a.setValue,j=a.handleSubmit,l=Object(x.b)(),b=Object(x.c)(S),u=Object(n.useState)(!1),m=Object(w.a)(u,2),O=m[0],h=m[1];Object(n.useEffect)((function(){h(!0),b&&(o("name",b.name,{shouldValidate:!0}),o("surname",b.surname,{shouldValidate:!0}),o("email",b.email,{shouldValidate:!0}))}),[b]);return Object(_.jsxs)("form",{onSubmit:j((function(e){window.scrollTo(0,0),l(d(e)),t.push("/".concat(N,"/\u10d9\u10d8\u10d7\u10ee\u10d5\u10d0\u10e0\u10d8/page2"))})),className:"form_wrapper",children:[Object(_.jsxs)("div",{className:"top_path",children:[Object(_.jsxs)("div",{className:"input_content",children:[Object(_.jsxs)("div",{className:"form_group",children:[Object(_.jsx)(D,Object(B.a)({name:"name",label:"\u10e1\u10d0\u10ee\u10d4\u10da\u10d8"},c("name",{required:"\u10e1\u10d0\u10ee\u10d4\u10da\u10d8\u10e1 \u10d5\u10d4\u10da\u10d8 \u10e1\u10d0\u10d5\u10d0\u10da\u10d3\u10d4\u10d1\u10e3\u10da\u10dd\u10d0",minLength:{value:3,message:"\u10e1\u10d0\u10ee\u10d4\u10da\u10d8\u10e1 \u10d5\u10d4\u10da\u10d8 \u10e3\u10dc\u10d3\u10d0 \u10e8\u10d4\u10d3\u10d2\u10d4\u10d1\u10dd\u10d3\u10d4\u10e1 \u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 3 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd\u10d2\u10d0\u10dc "},maxLength:{value:255,message:"\u10e1\u10d0\u10ee\u10d4\u10da\u10d8\u10e1 \u10d5\u10d4\u10da\u10d8 \u10e3\u10dc\u10d3\u10d0 \u10e8\u10d4\u10d3\u10d2\u10d4\u10d1\u10dd\u10d3\u10d4\u10e1 \u10db\u10d0\u10e5\u10e1\u10d8\u10db\u10e3\u10db 255 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd\u10e1\u10d2\u10d0\u10dc"},pattern:{value:p.letters.value,message:"\u10e1\u10d0\u10ee\u10d4\u10da\u10d8\u10e1 \u10d5\u10d4\u10da\u10d8 \u10e3\u10dc\u10d3\u10d0 \u10e8\u10d4\u10d8\u10ea\u10d0\u10d5\u10d3\u10d4\u10e1 \u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10d0\u10da\u10e4\u10d0\u10d1\u10d4\u10e2\u10d8\u10e1 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd\u10d4\u10d1\u10e1(\u10d0-\u10f0, a-z, A-Z)"}}))),Object(_.jsx)(C.a,{errors:i,name:"name",render:function(e){var t=e.message;return Object(_.jsx)("span",{children:t})}})]}),Object(_.jsxs)("div",{className:"form_group",children:[Object(_.jsx)(D,Object(B.a)({name:"surname",label:"\u10d2\u10d5\u10d0\u10e0\u10d8"},c("surname",{required:"\u10d2\u10d5\u10d0\u10e0\u10d8\u10e1 \u10d5\u10d4\u10da\u10d8 \u10e1\u10d0\u10d5\u10d0\u10da\u10d3\u10d4\u10d1\u10e3\u10da\u10dd\u10d0",pattern:{value:p.letters.value,message:"\u10d2\u10d5\u10d0\u10e0\u10d8\u10e1 \u10d5\u10d4\u10da\u10d8 \u10e3\u10dc\u10d3\u10d0 \u10e8\u10d4\u10d8\u10ea\u10d0\u10d5\u10d3\u10d4\u10e1 \u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10d0\u10da\u10e4\u10d0\u10d1\u10d4\u10e2\u10d8\u10e1 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd\u10d4\u10d1\u10e1(\u10d0-\u10f0, a-z, A-Z)"},minLength:{value:3,message:"\u10d2\u10d5\u10d0\u10e0\u10d8\u10e1 \u10d5\u10d4\u10da\u10d8 \u10e3\u10dc\u10d3\u10d0 \u10e8\u10d4\u10d3\u10d2\u10d4\u10d1\u10dd\u10d3\u10d4\u10e1 \u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 3 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd\u10d2\u10d0\u10dc"},maxLength:{value:255,message:"\u10d2\u10d5\u10d0\u10e0\u10d8\u10e1 \u10d5\u10d4\u10da\u10d8 \u10e3\u10dc\u10d3\u10d0 \u10e8\u10d4\u10d3\u10d2\u10d4\u10d1\u10dd\u10d3\u10d4\u10e1 \u10db\u10d0\u10e5\u10e1\u10d8\u10db\u10e3\u10db 255 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd\u10e1\u10d2\u10d0\u10dc"}}))),Object(_.jsx)(C.a,{errors:i,name:"surname",render:function(e){var t=e.message;return Object(_.jsx)("span",{children:t})}})]}),Object(_.jsxs)("div",{className:"form_group",children:[Object(_.jsx)(D,Object(B.a)({name:"email",label:"\u10db\u10d4\u10d8\u10da\u10d8"},c("email",{required:"\u10db\u10d4\u10d8\u10da\u10d8\u10e1 \u10d5\u10d4\u10da\u10d8 \u10e1\u10d0\u10d5\u10d0\u10da\u10d3\u10d4\u10d1\u10e3\u10da\u10dd\u10d0",pattern:{value:p.email.value,message:"\u10d7\u10e5\u10d5\u10d4\u10dc\u10e1 \u10db\u10d8\u10d4\u10e0 \u10e8\u10d4\u10e7\u10d5\u10d0\u10dc\u10d8\u10da\u10d8 \u10db\u10d4\u10d8\u10da\u10d8 \u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8\u10d0, \u10d2\u10d7\u10ee\u10dd\u10d5\u10d7 \u10d3\u10d0\u10e0\u10d4\u10d2\u10d8\u10e1\u10e2\u10e0\u10d8\u10e0\u10d3\u10d4\u10d7 \u10e0\u10d4\u10d3\u10d1\u10d4\u10e0\u10d8\u10e1 \u10db\u10d4\u10d8\u10da\u10d8\u10d7(youremail@redberry.ge)"}}))),Object(_.jsx)(C.a,{errors:i,name:"email",render:function(e){var t=e.message;return Object(_.jsx)("span",{children:t})}})]}),Object(_.jsx)("div",{className:"attention_block",children:Object(_.jsxs)("p",{children:["*-\u10d8\u10d7 \u10db\u10dd\u10dc\u10d8\u10e8\u10dc\u10e3\u10da\u10d8 \u10d5\u10d4\u10da\u10d4\u10d1\u10d8\u10e1 \u10e8\u10d4\u10d5\u10e1\u10d4\u10d1\u10d0 ",Object(_.jsx)("br",{})," \u10e1\u10d0\u10d5\u10d0\u10da\u10d3\u10d4\u10d1\u10e3\u10da\u10dd\u10d0"]})})]}),Object(_.jsx)("div",{className:"img_container",children:Object(_.jsxs)("div",{className:"user",children:[Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/scan2-tr.png"),alt:"img"}),Object(_.jsx)("div",{className:O?"shadow show ":"shadow",children:Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/userShadow.png"),alt:""})})]})})]}),Object(_.jsx)("button",{className:"submit_btn",children:Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/Vector 2.png"),alt:"",className:r?"":"disabled "})})]})}),M=(a(44),["name","text","linkText","handleRadioButton","error"]),A=Object(n.forwardRef)((function(e,t){var a=e.name,n=void 0===a?"haveCovid":a,c=e.text,s=(e.linkText,e.handleRadioButton),i=(e.error,Object(T.a)(e,M));return Object(_.jsxs)("div",{className:"checked_block",children:[Object(_.jsx)("input",Object(B.a)(Object(B.a)({type:"radio",id:n,name:n,ref:t},i),{},{onChange:function(e){return s(e)}})),Object(_.jsx)("label",{children:c})]})})),H=function(e){var t=e.handleRadioButton,a=e.register;return Object(_.jsxs)("div",{className:"input_content test_question",children:[Object(_.jsx)("p",{className:"title",children:" \u10d0\u10dc\u10e2\u10d8\u10e1\u10ee\u10d4\u10e3\u10da\u10d4\u10d1\u10d8\u10e1 \u10e2\u10d4\u10e1\u10e2\u10d8 \u10d2\u10d0\u10e5\u10d5\u10e1 \u10d2\u10d0\u10d9\u10d4\u10d7\u10d4\u10d1\u10e3\u10da\u10d8?*"}),Object(_.jsx)(A,Object(B.a)({text:"\u10d9\u10d8",handleRadioButton:function(e){return t(e)},value:"yesTest",name:"antiBodyTest"},a("antiBodyTest",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"\u10d0\u10e0\u10d0",handleRadioButton:function(e){return t(e)},value:"noTest",name:"antiBodyTest"},a("antiBodyTest",{required:!0})))]})},P=function(e){var t=e.register,a=e.errors;return Object(_.jsxs)("div",{className:"haveTest_content input_content",children:[Object(_.jsx)("p",{className:"title",children:"\u10db\u10d8\u10e3\u10d7\u10d8\u10d7\u10d4 \u10db\u10d8\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7\u10d8 \u10d7\u10d0\u10e0\u10d8\u10e6\u10d8(\u10d3\u10e6\u10d4/\u10d7\u10d5\u10d4/\u10ec\u10d4\u10da\u10d8) \u10d3\u10d0 \u10e0\u10d0\u10dd\u10d3\u10d4\u10dc\u10dd\u10d1\u10d0 \u10d0\u10dc\u10e2\u10d8\u10e1\u10ee\u10d4\u10e3\u10da\u10d4\u10d1\u10d8\u10e1*"}),Object(_.jsxs)("div",{className:"input_line",children:[Object(_.jsx)(D,Object(B.a)({name:"date",placeholder:"\u10d7\u10d0\u10e0\u10d8\u10e6\u10d8"},t("date",{required:"\u10d7\u10d0\u10e0\u10d8\u10e6\u10d8\u10e1 \u10e8\u10d4\u10e7\u10d5\u10d0\u10dc\u10d0 \u10e1\u10d0\u10d5\u10d0\u10da\u10d3\u10d4\u10d1\u10e3\u10da\u10dd\u10d0",pattern:{value:p.date.value,message:p.date.message}}))),Object(_.jsx)(C.a,{errors:a,name:"date",render:function(e){var t=e.message;return Object(_.jsx)("span",{children:t})}})]}),Object(_.jsxs)("div",{className:"input_line",children:[Object(_.jsx)(D,Object(B.a)({name:"antiBodiesCount",placeholder:"\u10d0\u10dc\u10e2\u10d8\u10e1\u10ee\u10d4\u10e3\u10da\u10d4\u10d1\u10d8\u10e1 \u10e0\u10d0\u10dd\u10d3\u10d4\u10dc\u10dd\u10d1\u10d0"},t("antiBodiesCount",{required:"\u10d0\u10dc\u10e2\u10d8\u10e1\u10ee\u10d4\u10e3\u10da\u10d4\u10d1\u10d8\u10e1 \u10e0\u10d0\u10dd\u10d3\u10d4\u10dc\u10dd\u10d1\u10d8\u10e1 \u10e8\u10d4\u10e7\u10d5\u10d0\u10dc\u10d0 \u10e1\u10d0\u10d5\u10d0\u10da\u10d3\u10d4\u10d1\u10e3\u10da\u10dd\u10d0",pattern:{value:p.number.value,message:p.number.message}}))),Object(_.jsx)(C.a,{errors:a,name:"antiBodiesCount",render:function(e){var t=e.message;return Object(_.jsx)("span",{children:t})}})]})]})},E=function(e){var t=e.register,a=e.errors;return Object(_.jsxs)("div",{className:"haveTest_content input_content",children:[Object(_.jsx)("p",{className:"title",children:"\u10db\u10d8\u10e3\u10d7\u10d8\u10d7\u10d4 \u10db\u10d8\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7\u10d8 \u10de\u10d4\u10e0\u10d8\u10dd\u10d3\u10d8 (\u10d3\u10e6\u10d4/\u10d7\u10d5\u10d4/\u10ec\u10d4\u10da\u10d8), \u10e0\u10dd\u10d3\u10d8\u10e1 \u10d2\u10e5\u10dd\u10dc\u10d3\u10d0 \u10d9\u10dd\u10d5\u10d8\u10d319*"}),Object(_.jsxs)("div",{className:"input_line",children:[Object(_.jsx)(D,Object(B.a)({name:"whenHadCovid",placeholder:"\u10d7\u10d0\u10e0\u10d8\u10e6\u10d8"},t("whenHadCovid",{required:"\u10d7\u10d0\u10e0\u10d8\u10e6\u10d8\u10e1 \u10e8\u10d4\u10e7\u10d5\u10d0\u10dc\u10d0 \u10e1\u10d0\u10d5\u10d0\u10da\u10d3\u10d4\u10d1\u10e3\u10da\u10dd\u10d0",pattern:{value:p.date.value,message:p.date.message}}))),Object(_.jsx)(C.a,{errors:a,name:"whenHadCovid",render:function(e){var t=e.message;return Object(_.jsx)("span",{children:t})}})]})]})},L=(a(45),function(e){var t=e.history,a=Object(y.b)({mode:"all"}),c=a.register,s=a.formState,i=s.errors,r=s.isValid,o=a.setValue,j=a.handleSubmit,l=Object(x.b)(),d=Object(x.c)(q),u=Object(n.useState)(!1),m=Object(w.a)(u,2),O=m[0],h=m[1],v=Object(n.useState)(!1),g=Object(w.a)(v,2),f=g[0],p=g[1],k=Object(n.useState)(!1),C=Object(w.a)(k,2),S=C[0],R=C[1],V=Object(n.useState)(!1),T=Object(w.a)(V,2),I=T[0],D=T[1],F=Object(n.useState)(!1),M=Object(w.a)(F,2),L=M[0],Q=M[1];Object(n.useEffect)((function(){if(window.scrollTo(0,0),h(!0),d){var e=d.haveCovid,t=d.antiBodyTest,a=d.whenHadCovid,n=d.date,c=d.antiBodiesCount;o("haveCovid",e,{shouldValidate:!0}),"yes"===e&&(p(!0),o("antiBodyTest",t),"noTest"===t&&(D(!0),o("whenHadCovid",a)),"yesTest"===t&&(R(!0),o("date",n),o("antiBodiesCount",c)))}}),[]);var z=function(e){var t;"no"!==(t=e.target.value)&&"now"!==t||(p(!1),R(!1),D(!1),Q(!0)),"yes"===t&&(p(!0),Q(!1)),"yesTest"===t&&(R(!0),D(!1)),"noTest"===t&&(R(!1),D(!0))};return Object(_.jsxs)("form",{onSubmit:j((function(e){var a={};"no"==e.haveCovid||"now"===e.haveCovid?(a={haveCovid:e.haveCovid},l(b(a))):"yes"===e.haveCovid&&"noTest"===e.antiBodyTest?(a={haveCovid:e.haveCovid,antiBodyTest:e.antiBodyTest,whenHadCovid:e.whenHadCovid},l(b(a))):(a={haveCovid:e.haveCovid,antiBodyTest:e.antiBodyTest,date:e.date,antiBodiesCount:e.antiBodiesCount},l(b(a))),t.push("/".concat(N,"/\u10d9\u10d8\u10d7\u10ee\u10d5\u10d0\u10e0\u10d8/page3"))})),className:"form_wrapper",children:[Object(_.jsxs)("div",{className:"top_path",children:[Object(_.jsxs)("div",{className:"input_content ",children:[Object(_.jsx)("p",{className:"title",children:"\u10d7\u10e3 \u10d2\u10d0\u10e5\u10d5\u10e1 \u10d2\u10d0\u10d3\u10d0\u10e2\u10d0\u10dc\u10d8\u10da\u10d8 \u10d9\u10dd\u10d5\u10d8\u10d319*"}),Object(_.jsx)(A,Object(B.a)({text:"\u10d9\u10d8",handleRadioButton:z,value:"yes"},c("haveCovid",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"\u10d0\u10e0\u10d0",handleRadioButton:z,value:"no"},c("haveCovid",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"\u10d0\u10ee\u10da\u10d0 \u10db\u10d0\u10e5\u10d5\u10e1",handleRadioButton:z,value:"now"},c("haveCovid",{required:!0}))),f&&Object(_.jsx)(H,{handleRadioButton:z,register:c}),S&&Object(_.jsx)(P,{register:c,errors:i}),I&&Object(_.jsx)(E,{register:c,errors:i})]}),Object(_.jsx)("div",{className:"img_container",children:Object(_.jsxs)("div",{className:"user",children:[Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/vaccinate2.png"),alt:"img"}),Object(_.jsx)("div",{className:O?"ball show_ball":"ball  ",children:Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/main logo-ball.png"),alt:"img"})})]})})]}),Object(_.jsxs)("button",{className:"submit_btn",children:[Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/Vector 2.png"),alt:"img",className:"back_btn",onClick:function(){t.goBack()}}),Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/Vector 2.png"),className:L||r?"":"disabled ",alt:"img"})]})]})}),Q=function(e){var t=e.handleRadioButton,a=e.register;return Object(_.jsxs)("div",{className:"input_content test_question",children:[Object(_.jsx)("p",{className:"title",children:"\u10d0\u10d8\u10e0\u10e9\u10d8\u10d4 \u10e0\u10d0 \u10d4\u10e2\u10d0\u10de\u10d6\u10d4 \u10ee\u10d0\u10e0*"}),Object(_.jsx)(A,Object(B.a)({text:"\u10de\u10d8\u10e0\u10d5\u10d4\u10da\u10d8 \u10d3\u10dd\u10d6\u10d0 \u10d3\u10d0 \u10d3\u10d0\u10e0\u10d4\u10d2\u10d8\u10e1\u10e2\u10e0\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10d8 \u10d5\u10d0\u10e0 \u10db\u10d4\u10dd\u10e0\u10d4\u10d6\u10d4",handleRadioButton:function(e){return t(e)},value:"firstDose",name:"vaccinationStage"},a("vaccinationStage",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"\u10e1\u10e0\u10e3\u10da\u10d0\u10d3 \u10d5\u10d0\u10e5\u10ea\u10d8\u10dc\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10d8 \u10d5\u10d0\u10e0",handleRadioButton:function(e){return t(e)},value:"FullyVaccinated",name:"vaccinationStage"},a("vaccinationStage",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"\u10de\u10d8\u10e0\u10d5\u10d4\u10da\u10d8 \u10d3\u10dd\u10d6\u10d0 \u10d3\u10d0 \u10d0\u10e0 \u10d3\u10d0\u10d5\u10e0\u10d4\u10d2\u10d8\u10e1\u10e2\u10e0\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10d5\u10d0\u10e0 \u10db\u10d4\u10dd\u10e0\u10d4\u10d6\u10d4",handleRadioButton:function(e){return t(e)},value:"onlyFirstDose",name:"vaccinationStage"},a("vaccinationStage",{required:!0})))]})},z=function(){return Object(_.jsxs)("div",{className:"reg_link_content",children:[Object(_.jsxs)("p",{children:["\u10e0\u10dd\u10db \u10d0\u10e6\u10d0\u10e0 \u10d2\u10d0\u10d3\u10d0\u10d3\u10dd, ",Object(_.jsx)("br",{}),"\u10d1\u10d0\u10e0\u10d4\u10db \u10d4\u10ee\u10da\u10d0\u10d5\u10d4 \u10d3\u10d0\u10e0\u10d4\u10d2\u10d8\u10e1\u10e2\u10e0\u10d8\u10e0\u10d3\u10d8"]}),Object(_.jsx)(g.b,{to:{pathname:"https://booking.moh.gov.ge"},className:"link",target:"_blank",rel:"noopener noreferrer",children:"https://booking.moh.gov.ge"})]})},Z=function(e){var t=e.handleRadioButton,a=e.register;return Object(_.jsxs)("div",{className:"input_content test_question dont_plan_blocks",children:[Object(_.jsx)("p",{className:"title",children:"\u10e0\u10d0\u10e1 \u10d4\u10da\u10dd\u10d3\u10d4\u10d1\u10d8?*"}),Object(_.jsx)(A,Object(B.a)({text:"\u10d3\u10d0\u10e0\u10d4\u10d2\u10d8\u10e1\u10e2\u10e0\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10d8 \u10d5\u10d0\u10e0 \u10d3\u10d0 \u10d5\u10d4\u10da\u10dd\u10d3\u10d4\u10d1\u10d8 \u10d7\u10d0\u10e0\u10d8\u10e6\u10e1",handleRadioButton:function(e){return t(e)},value:"waitingVacData",name:"reason"},a("reason",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"\u10d0\u10e0 \u10d5\u10d2\u10d4\u10d2\u10db\u10d0\u10d5",handleRadioButton:function(e){return t(e)},value:"dontPlan",name:"reason"},a("reason",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"\u10d2\u10d0\u10d3\u10d0\u10e2\u10d0\u10dc\u10d8\u10da\u10d8 \u10db\u10d0\u10e5\u10d5\u10e1 \u10d3\u10d0 \u10d5\u10d2\u10d4\u10d2\u10db\u10d0\u10d5 \u10d0\u10ea\u10e0\u10d0\u10e1",handleRadioButton:function(e){return t(e)},value:"PlanVaccinated",name:"reason"},a("reason",{required:!0})))]})},$=(a(46),function(e){var t=e.history,a=Object(y.b)(),c=a.register,s=a.formState.isValid,i=a.setValue,r=a.handleSubmit,o=Object(x.b)(),j=Object(x.c)(R),l=Object(n.useState)(!1),d=Object(w.a)(l,2),b=d[0],m=d[1],O=Object(n.useState)(!1),h=Object(w.a)(O,2),v=h[0],f=h[1],p=Object(n.useState)(!1),k=Object(w.a)(p,2),C=k[0],S=k[1],q=Object(n.useState)(!1),V=Object(w.a)(q,2),T=V[0],I=V[1],D=Object(n.useState)(!1),F=Object(w.a)(D,2),M=F[0],H=F[1],P=Object(n.useState)(!1),E=Object(w.a)(P,2),L=E[0],$=E[1],J=Object(n.useState)(!1),U=Object(w.a)(J,2),W=U[0],G=U[1];Object(n.useEffect)((function(){if(window.scrollTo(0,0),m(!0),j){var e=j.vaccinated,t=j.vaccinationStage,a=j.reason;i("vaccinated",e),"yes"===e&&(S(!0),i("vaccinationStage",t)),"no"===e&&(H(!0),i("reason",a))}}),[]);var K=function(e){"yes"===e.target.value&&(i("vaccinationStage",""),S(!0),$(!1),H(!1),G(!1)),"no"===e.target.value&&(i("reason",""),S(!1),H(!0),f(!1),I(!1)),"firstDose"!==e.target.value&&"FullyVaccinated"!==e.target.value||(I(!1),f(!0)),"onlyFirstDose"===e.target.value&&(I(!0),f(!0)),"dontPlan"===e.target.value&&($(!0),G(!1),f(!0)),"waitingVacData"===e.target.value&&($(!1),G(!1),f(!0)),"PlanVaccinated"===e.target.value&&(G(!0),$(!1),f(!0))};return Object(_.jsxs)("form",{onSubmit:r((function(e){var a={};a="no"==e.vaccinated?{vaccinated:e.vaccinated,reason:e.reason}:{vaccinated:e.vaccinated,vaccinationStage:e.vaccinationStage},o(u(a)),t.push("/".concat(N,"/\u10d9\u10d8\u10d7\u10ee\u10d5\u10d0\u10e0\u10d8/page4"))})),className:"form_wrapper",children:[Object(_.jsxs)("div",{className:"top_path",children:[Object(_.jsxs)("div",{className:"input_content ",children:[Object(_.jsx)("p",{className:"title",children:"\u10e3\u10d9\u10d5\u10d4 \u10d0\u10ea\u10e0\u10d8\u10da\u10d8 \u10ee\u10d0\u10e0?*"}),Object(_.jsx)(A,Object(B.a)({text:"\u10d9\u10d8",handleRadioButton:K,value:"yes"},c("vaccinated",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"\u10d0\u10e0\u10d0",handleRadioButton:K,value:"no"},c("vaccinated",{required:!0}))),C&&Object(_.jsx)(Q,{handleRadioButton:K,register:c}),T&&Object(_.jsx)(z,{}),M&&Object(_.jsx)(Z,{handleRadioButton:K,register:c}),L&&Object(_.jsx)(g.b,{to:{pathname:"https://booking.moh.gov.ge"},className:"link",target:"_blank",rel:"noopener noreferrer",children:"\ud83d\udc49 https://booking.moh.gov.ge/"}),W&&Object(_.jsxs)("div",{className:"vacInfo",children:[Object(_.jsxs)("p",{children:["\u10d0\u10ee\u10d0\u10da\u10d8 \u10de\u10e0\u10dd\u10e2\u10dd\u10d9\u10dd\u10da\u10d8\u10d7 \u10d9\u10dd\u10d5\u10d8\u10d3\u10d8\u10e1 \u10d2\u10d0\u10d3\u10d0\u10e2\u10d0\u10dc\u10d8\u10d3\u10d0\u10dc 1 ",Object(_.jsx)("br",{})," \u10d7\u10d5\u10d8\u10e1 \u10e8\u10d4\u10db\u10d3\u10d4\u10d2 \u10e8\u10d4\u10d2\u10d8\u10eb\u10da\u10d8\u10d0\u10d7 \u10d5\u10d0\u10e5\u10ea\u10d8\u10dc\u10d8\u10e1 \u10d2\u10d0\u10d9\u10d4\u10d7\u10d4\u10d1\u10d0."]}),Object(_.jsx)("p",{className:"text",children:"\ud83d\udc49 \u10e0\u10d4\u10d2\u10d8\u10e1\u10e2\u10e0\u10d0\u10ea\u10d8\u10d8\u10e1 \u10da\u10d8\u10dc\u10d9\u10d8"}),Object(_.jsx)(g.b,{to:{pathname:"https://booking.moh.gov.ge"},className:"link",target:"_blank",rel:"noopener noreferrer",children:"https://booking.moh.gov.ge/"})]})]}),Object(_.jsx)("div",{className:"img_container",children:Object(_.jsxs)("div",{className:"user",children:[Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/doctor2-tr.png"),alt:"img"}),Object(_.jsx)("div",{className:b?"star show_star":"star  ",children:Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/main logo-2-tr.png"),alt:"img"})})]})})]}),Object(_.jsxs)("button",{className:"submit_btn",children:[Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/Vector 2.png"),alt:"img",className:"back_btn",onClick:function(){return t.goBack()}}),Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/Vector 2.png"),className:v||s?"":"disabled ",alt:"img"})]})]})}),J=(a(47),function(e){var t=e.history,a=Object(y.b)(),c=a.register,s=a.setValue,i=a.formState.isValid,r=a.handleSubmit,o=Object(n.useState)(!1),j=Object(w.a)(o,2),l=j[0],d=j[1],b=Object(n.useState)(!1),u=Object(w.a)(b,2),O=u[0],h=u[1],v=Object(x.b)(),g=Object(x.c)(V);Object(n.useEffect)((function(){if(h(!0),g){var e=g.onlineMeetings,t=g.workDayInOffice,a=g.gatherings,n=g.environment;s("onlineMeetings",e),s("workDayInOffice",t),s("gatherings",a,{shouldValidate:!0}),s("environment",n,{shouldValidate:!0})}}),[]);var f="",p="",k=function(e){"onlineMeetings"===e.target.name?f="onlineMeetings":"workDayInOffice"===e.target.name&&(p="workDayInOffice"),f&&p&&d(!0)};return Object(_.jsxs)(n.Fragment,{children:[Object(_.jsx)("form",{onSubmit:r((function(e){v(m(e)),t.push("/".concat(N,"/\u10d9\u10d8\u10d7\u10ee\u10d5\u10d0\u10e0\u10d8/complete"))})),className:"form_wrapper",children:Object(_.jsxs)("div",{className:"top_path",children:[Object(_.jsxs)("div",{className:"input_content ",children:[Object(_.jsxs)("div",{className:"head_text",children:[Object(_.jsx)("p",{children:"\u10e0\u10d4\u10d3\u10d1\u10d4\u10e0\u10d8\u10e1 \u10db\u10d7\u10d0\u10d5\u10d0\u10e0\u10d8 \u10e6\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10d4\u10d1\u10d0 \u10e9\u10d5\u10d4\u10dc\u10d8 \u10d2\u10e3\u10dc\u10d3\u10d8\u10e1 \u10d7\u10d8\u10d7\u10dd\u10d4\u10e3\u10da\u10d8 \u10ec\u10d4\u10d5\u10e0\u10d8\u10d0. \u10d2\u10d0\u10e0\u10d4\u10db\u10dd, \u10e0\u10dd\u10db\u10d4\u10da\u10e1\u10d0\u10ea \u10e9\u10d5\u10d4\u10dc\u10d8 \u10d7\u10d0\u10dc\u10d0\u10db\u10e8\u10e0\u10dd\u10db\u10da\u10d4\u10d1\u10d8 \u10e5\u10db\u10dc\u10d8\u10d7 \u10d1\u10d4\u10d5\u10e0\u10d8\u10e1\u10d7\u10d5\u10d8\u10e1 \u10d0\u10e0\u10d8\u10e1 \u10d3\u10d0 \u10e7\u10dd\u10e4\u10d8\u10da\u10d0 \u10ec\u10da\u10d4\u10d1\u10d8\u10e1 \u10d2\u10d0\u10dc\u10db\u10d0\u10d5\u10da\u10dd\u10d1\u10d0\u10e8\u10d8 \u10d4\u10e0\u10d7\u10d0\u10d3 \u10db\u10d8\u10d6\u10dc\u10d4\u10d1\u10d8\u10e1\u10d7\u10d5\u10d8\u10e1 \u10d1\u10e0\u10eb\u10dd\u10da\u10d8\u10e1 \u10db\u10d8\u10d6\u10d4\u10d6\u10d8, \u10d1\u10d4\u10d5\u10e0\u10d8\u10e1\u10d7\u10d5\u10d8\u10e1 \u10d9\u10d8 - \u10e9\u10d5\u10d4\u10dc\u10d7\u10d0\u10dc \u10d2\u10d0\u10d3\u10db\u10dd\u10e1\u10d5\u10da\u10d8\u10e1."}),Object(_.jsx)("p",{children:"\u10de\u10d0\u10dc\u10d3\u10d4\u10db\u10d8\u10d8\u10e1 \u10de\u10d4\u10e0\u10d8\u10dd\u10d3\u10e8\u10d8 \u10d4\u10e0\u10d7\u10db\u10d0\u10dc\u10d4\u10d7\u10e1\u10d0\u10ea \u10d8\u10e8\u10d5\u10d8\u10d0\u10d7\u10d0\u10d3 \u10d5\u10dc\u10d0\u10ee\u10e3\u10da\u10dd\u10d1\u10d7 \u10de\u10d8\u10e0\u10d8\u10e1\u10de\u10d8\u10e0 \u10d3\u10d0 \u10e7\u10dd\u10d5\u10d4\u10da\u10d3\u10e6\u10d8\u10e3\u10e0\u10d8 \u10d9\u10dd\u10db\u10e3\u10dc\u10d8\u10d9\u10d0\u10ea\u10d8\u10d0\u10ea \u10d2\u10d0\u10d8\u10e8\u10d5\u10d8\u10d0\u10d7\u10d3\u10d0."})]}),Object(_.jsxs)("div",{className:"chechkbox_block",children:[Object(_.jsx)("p",{className:"title",children:"\u10e0\u10d0 \u10e1\u10d8\u10ee\u10e8\u10d8\u10e0\u10d8\u10d7 \u10e8\u10d4\u10d8\u10eb\u10da\u10d4\u10d1\u10d0 \u10d2\u10d5\u10e5\u10dd\u10dc\u10d3\u10d4\u10e1 \u10e1\u10d0\u10d4\u10e0\u10d7\u10dd \u10d0\u10e0\u10d0\u10e4\u10dd\u10e0\u10db\u10d0\u10da\u10e3\u10e0\u10d8 \u10dd\u10dc\u10da\u10d0\u10d8\u10dc \u10e8\u10d4\u10ee\u10d5\u10d4\u10d3\u10e0\u10d4\u10d1\u10d8, \u10e1\u10d0\u10d3\u10d0\u10ea \u10e7\u10d5\u10d4\u10da\u10d0 \u10e1\u10e3\u10e0\u10d5\u10d8\u10da\u10d8\u10e1\u10d0\u10db\u10d4\u10d1\u10e0 \u10e9\u10d0\u10d4\u10e0\u10d7\u10d5\u10d4\u10d1\u10d0?*"}),Object(_.jsx)(A,Object(B.a)({text:" \u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8 \u10dd\u10e0\u10ef\u10d4\u10e0",handleRadioButton:k,value:"twiceAWeek"},c("onlineMeetings",{required:!0,checked:!0}))),Object(_.jsx)(A,Object(B.a)({text:"\u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8 \u10d4\u10e0\u10d7\u10ee\u10d4\u10da",handleRadioButton:k,value:"onceAWeek"},c("onlineMeetings",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"\u10dd\u10e0 \u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8 \u10d4\u10e0\u10d7\u10ee\u10d4\u10da",handleRadioButton:k,value:"fortnightly"},c("onlineMeetings",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"\u10d7\u10d5\u10d4\u10e8\u10d8 \u10d4\u10e0\u10d7\u10ee\u10d4\u10da",handleRadioButton:k,value:"onceAMonth"},c("onlineMeetings",{required:!0})))]}),Object(_.jsxs)("div",{className:"chechkbox_block",children:[Object(_.jsx)("p",{className:"title",children:"\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8 \u10d3\u10e6\u10d4 \u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8 \u10d8\u10e1\u10e3\u10e0\u10d5\u10d4\u10d1\u10d3\u10d8 \u10dd\u10e4\u10d8\u10e1\u10d8\u10d3\u10d0\u10dc \u10db\u10e3\u10e8\u10d0\u10dd\u10d1\u10d0\u10e1?*"}),Object(_.jsx)(A,Object(B.a)({text:"0",handleRadioButton:k,value:"0"},c("workDayInOffice",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"1",handleRadioButton:k,value:"1"},c("workDayInOffice",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"2",handleRadioButton:k,value:"2"},c("workDayInOffice",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"3",handleRadioButton:k,value:"3"},c("workDayInOffice",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"4",handleRadioButton:k,value:"4"},c("workDayInOffice",{required:!0}))),Object(_.jsx)(A,Object(B.a)({text:"5",handleRadioButton:k,value:"5"},c("workDayInOffice",{required:!0})))]}),Object(_.jsxs)("div",{className:"chechkbox_block",children:[Object(_.jsx)("p",{className:"title",children:"\u10e0\u10d0\u10e1 \u10e4\u10d8\u10e5\u10e0\u10dd\u10d1 \u10e4\u10d8\u10d6\u10d8\u10d9\u10e3\u10e0 \u10e8\u10d4\u10d9\u10e0\u10d4\u10d1\u10d4\u10d1\u10d6\u10d4?"}),Object(_.jsx)("textarea",Object(B.a)({},c("gatherings")))]}),Object(_.jsxs)("div",{className:"chechkbox_block",children:[Object(_.jsx)("p",{className:"title",children:"\u10e0\u10d0\u10e1 \u10e4\u10d8\u10e5\u10e0\u10dd\u10d1 \u10d0\u10e0\u10e1\u10d4\u10d1\u10e3\u10da \u10d2\u10d0\u10e0\u10d4\u10db\u10dd\u10d6\u10d4: \u10e0\u10d0 \u10db\u10dd\u10d2\u10ec\u10dd\u10dc\u10e1, \u10e0\u10d0\u10e1 \u10d3\u10d0\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d3\u10d8, \u10e0\u10d0\u10e1 \u10e8\u10d4\u10ea\u10d5\u10da\u10d8\u10d3\u10d8?"}),Object(_.jsx)("textarea",Object(B.a)({},c("environment")))]}),Object(_.jsx)("button",{className:l||i?"finish_btn ":"finish_btn  disabled",children:"\u10d3\u10d0\u10e1\u10e0\u10e3\u10da\u10d4\u10d1\u10d0"})]}),Object(_.jsx)("div",{className:"img_container",children:Object(_.jsxs)("div",{className:"user",children:[Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/bike2 1.png"),alt:"img"}),Object(_.jsx)("div",{className:O?"heart show_heart":"heart",children:Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/main logo-heart.png"),alt:""})})]})})]})}),Object(_.jsx)("button",{className:"submit_btn",children:Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/Vector 2.png"),alt:"img",className:"back_btn",onClick:function(){return t.goBack()}})})]})}),U=(a(48),function(){var e=Object(n.useState)(!1),t=Object(w.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){c(!0)})),Object(_.jsx)("div",{className:"lastPage_content",children:Object(_.jsxs)("div",{className:"thanks_text",children:[Object(_.jsx)("p",{children:"\u10db\u10d0\u10d3\u10da\u10dd\u10d1\u10d0"}),Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/Vector-1.png"),alt:"img",className:a?"star1 show_star1":"star1"}),Object(_.jsx)("img",{src:"/".concat(N,"/assets/img/Vector-1.png"),alt:"img",className:a?"star2 show_star2":"star2"})]})})}),W=(a(49),function(){var e=window.location.pathname.split("/").pop(),t=e[e.length-1];return Object(_.jsxs)("div",{className:"header",children:[Object(_.jsx)("div",{className:"img_text",children:Object(_.jsx)("img",{src:"/covid-questionnaire/assets/img/Group.png",alt:""})}),Object(_.jsxs)("div",{className:"pages",children:["".concat(t),"/4"]})]})}),G=["component"],K=["component"],X=function(e){var t=e.component,a=Object(T.a)(e,G);return Object(_.jsx)(f.a,Object(B.a)(Object(B.a)({},a),{},{render:function(e){return Object(_.jsx)(t,Object(B.a)({},e))}}))},Y=function(e){var t=e.component,a=Object(T.a)(e,K);return Object(_.jsx)(f.a,Object(B.a)(Object(B.a)({},a),{},{render:function(e){return Object(_.jsx)(ee,{children:Object(_.jsx)(t,Object(B.a)({},e))})}}))},ee=function(e){var t=e.children;return Object(_.jsxs)("div",{className:"main_wrapper",children:[Object(_.jsx)(W,{}),Object(_.jsxs)("div",{className:"questionnaire_wrapper",children:[" ",t]})]})},te=function(){return Object(_.jsxs)(f.c,{children:[Object(_.jsx)(X,{path:"/".concat(N),exact:!0,component:k}),Object(_.jsx)(Y,{path:"/".concat(N,"/\u10d9\u10d8\u10d7\u10ee\u10d5\u10d0\u10e0\u10d8/page1"),component:F}),Object(_.jsx)(Y,{path:"/".concat(N,"/\u10d9\u10d8\u10d7\u10ee\u10d5\u10d0\u10e0\u10d8/page2"),component:L}),Object(_.jsx)(Y,{path:"/".concat(N,"/\u10d9\u10d8\u10d7\u10ee\u10d5\u10d0\u10e0\u10d8/page3"),component:$}),Object(_.jsx)(Y,{path:"/".concat(N,"/\u10d9\u10d8\u10d7\u10ee\u10d5\u10d0\u10e0\u10d8/page4"),component:J}),Object(_.jsx)(X,{path:"/".concat(N,"/\u10d9\u10d8\u10d7\u10ee\u10d5\u10d0\u10e0\u10d8/complete"),component:U})]})};a(50);var ae=function(){return Object(_.jsx)(x.a,{store:v,children:Object(_.jsx)(g.a,{children:Object(_.jsx)(te,{})})})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(ae,{})}),document.getElementById("root")),ne()}},[[51,1,2]]]);
//# sourceMappingURL=main.359f785c.chunk.js.map