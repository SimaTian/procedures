(function(t){function e(e){for(var i,s,o=e[0],c=e[1],d=e[2],p=0,u=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(u.length)u.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},r={app:0},n=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/procedures/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"095d":function(t,e,a){t.exports=a.p+"img/poliklinika_logo.f32bb562.png"},"0ca6":function(t,e,a){},"131d":function(t,e,a){"use strict";a("9f61")},"196d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"no-print"},[a("div",{staticClass:"radio-row"},[a("label",{attrs:{for:"tens"}},[t._v(" TENS proudy ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"tens",value:"tens"},domProps:{checked:t._q(t.picked,"tens")},on:{change:function(e){t.picked="tens"}}}),a("label",{attrs:{for:"trab"}},[t._v(" Trabertovy proudy ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"trab",value:"trab"},domProps:{checked:t._q(t.picked,"trab")},on:{change:function(e){t.picked="trab"}}})]),a("hr"),a("div",{staticClass:"radio-row"},[a("label",{attrs:{for:"dd"}},[t._v(" DD proudy ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"dd",value:"dd"},domProps:{checked:t._q(t.picked,"dd")},on:{change:function(e){t.picked="dd"}}}),a("label",{attrs:{for:"btl9"}},[t._v(" BTL09 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"btl9",value:"btl9"},domProps:{checked:t._q(t.picked,"btl9")},on:{change:function(e){t.picked="btl9"}}})]),a("hr"),a("div",{staticClass:"radio-row"},[a("label",{attrs:{for:"btl8"}},[t._v(" BTL08 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"btl8",value:"btl8"},domProps:{checked:t._q(t.picked,"btl8")},on:{change:function(e){t.picked="btl8"}}}),a("label",{attrs:{for:"iontoforesa"}},[t._v(" iontoforesa ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"iontoforesa",value:"iontoforesa"},domProps:{checked:t._q(t.picked,"iontoforesa")},on:{change:function(e){t.picked="iontoforesa"}}})]),a("hr"),a("div",{staticClass:"radio-row"},[a("label",{attrs:{for:"magnet"}},[t._v(" Magnetoterapie ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"magnet",value:"magnet"},domProps:{checked:t._q(t.picked,"magnet")},on:{change:function(e){t.picked="magnet"}}}),a("label",{attrs:{for:"ultrazvuk"}},[t._v(" ultrazvuk ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"ultrazvuk",value:"ultrazvuk"},domProps:{checked:t._q(t.picked,"ultrazvuk")},on:{change:function(e){t.picked="ultrazvuk"}}})]),a("hr"),a("div",{staticClass:"radio-row"},[a("label",{attrs:{for:"cabin"}},[t._v(" Kabinka ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],attrs:{id:"cabin"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?a:a[0]}}},t._l(t.options,(function(e){return a("option",{key:e.value},[t._v(" "+t._s(e.value)+" ")])})),0)]),a("hr"),a("div",{staticClass:"radio-row"},[a("span",[t._v("Picked: "+t._s(t.selected))])])]),"tens"==t.picked?a("div",[a("Tens",{attrs:{msg:"Test01",procedureName:"ET - TENS proudy",cabin:t.selected}})],1):t._e(),"trab"==t.picked?a("div",[a("Tens",{attrs:{msg:"Test02",procedureName:"traub",cabin:t.selected}})],1):t._e(),"dd"==t.picked?a("div",[a("div",{attrs:{msg:"Test03",procedureName:"DD proudy"}})]):t._e(),"btl9"==t.picked?a("div",[a("BTL09",{attrs:{msg:"Test04",procedureName:"ET - BTL09"}})],1):t._e(),"btl8"==t.picked?a("div",[a("BTL09",{attrs:{msg:"Test05",procedureName:"ET - BTL08"}})],1):t._e(),"iontoforesa"==t.picked?a("div",[a("div",{attrs:{msg:"Test06",procedureName:"Iontoforesa"}})]):t._e(),"magnetoterapie"==t.picked?a("div",[a("div",{attrs:{msg:"Test07",procedureName:"magnetoterapie"}})]):t._e(),"ultrazvuk"==t.picked?a("div",[a("div",{attrs:{msg:"Test07",procedureName:"ultrazvuk"}})]):t._e()])},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"no-print"},[a("div",{staticClass:"row"},[t._v(" Jméno pacienta: "),a("input",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{input:function(e){return t.patientChange(e.target.value)}}})]),a("div",{staticClass:"row"},[t._v(" Rodné číslo: "),a("input",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{input:function(e){return t.rcChange(e.target.value)}}})]),a("div",{staticClass:"row"},[t._v(" Pojišťovna: "),a("input",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{input:function(e){return t.pojChange(e.target.value)}}})]),a("div",{staticClass:"row"},[t._v(" místo aplikace: "),a("input",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{input:function(e){return t.applicationChange(e.target.value)}}})]),a("div",{staticClass:"row"},[t._v(" uložení elektrod: "),a("input",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{input:function(e){return t.electrodeChange(e.target.value)}}})]),a("div",{staticClass:"row"},[t._v(" doba aplikace: "),a("input",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{input:function(e){return t.timeChange(e.target.value)}}})]),a("hr",{staticStyle:{"margin-bottom":"20%"}})]),a("div",{staticClass:"main_form"},[a("clinic-header"),a("div",{staticClass:"main_body"},[a("GeneralInfo",{attrs:{data:t.data,procedureName:t.procedureName}}),a("div",{staticClass:"blank"}),a("table",{staticClass:"table",staticStyle:{"page-break-after":"always"}},[t._m(0),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}})],1),a("table",{staticClass:"table"},[t._m(1),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}})],1)],1)],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticClass:"table_first_row init"},[a("b",[t._v("datum ")])]),a("th",{staticClass:"table_first_row middle"},[a("b",[t._v("popis")])]),a("th",{staticClass:"table_first_row last"},[a("b",[t._v("razítko a podpis")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticClass:"table_first_row init"},[a("b",[t._v("datum ")])]),a("th",{staticClass:"table_first_row middle"},[a("b",[t._v("popis")])]),a("th",{staticClass:"table_first_row last"},[a("b",[t._v("razítko a podpis")])])])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticClass:"table_row init"}),a("td",{staticClass:"table_row middle"},[a("div",{staticClass:"inside_row"},[a("div",[t._v("BTL prog.")]),"traub"==t.procedure?a("div",{staticStyle:{"margin-left":"5%"}},[t._v(" 002, Träbertovy proudy")]):t._e(),"traub"!=t.procedure?a("div",{staticStyle:{"margin-left":"5%"}},[t._v(" "+t._s(t.procedure))]):t._e()]),a("div",{staticClass:"inside_row"},[a("div",[t._v(" místo aplikace : ")]),a("div",[t._v(t._s(t.data.application))])]),a("div",{staticClass:"inside_row"},[a("div",[t._v(" uložení elektrod : ")]),a("div",[t._v(" "+t._s(t.data.electrodes))])]),a("div",{staticClass:"inside_row"},[a("div",[t._v(" intensita : ")]),a("div",{staticStyle:{"margin-left":"5%",width:"20%"}},[a("div",[t._v(" "+t._s(t.data.intensity)+" mA ")])])]),a("div",{staticClass:"inside_row"},[a("div",[t._v(" doba aplikace : ")]),a("div",{staticStyle:{"margin-left":"5%"}},[t._v(" "+t._s(t.data.time)+" minut ")])]),t._m(0)]),a("th",{staticClass:"table_row last"},[a("Stamps",{attrs:{stamp:t.cabin}})],1)])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inside_row"},[a("div",[t._v(" kód výkonu : ")]),a("div",{staticStyle:{"margin-left":"5px"}},[t._v(" 21113 ")])])}],l=a("af87"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[4==t.stamp?a("div",[a("div",[t._v("BTL VAC")]),a("div",[t._v("v.č. 0326232")]),a("hr"),a("div",[t._v("BTL 4000-Profes")]),a("div",[t._v("v.č. 028-B-00803")])]):t._e(),5==t.stamp?a("div",[a("div",[t._v("BTL VAC")]),a("div",[t._v("v.č. 028-B-00478")]),a("hr"),a("div",[t._v("BTL 4625 Premium")]),a("div",[t._v("v.č. 8016559")])]):t._e(),6==t.stamp?a("div",[a("div",[t._v("BTL VAC II")]),a("div",[t._v("v.č. 042-B-00621")]),a("hr"),a("div",[t._v("BTL 4625 Premium")]),a("div",[t._v("v.č. 8016386")])]):t._e(),9==t.stamp?a("div",[a("div",[t._v("BTL 4000-Profes")]),a("div",[t._v("v.č. 028-B-00830")])]):t._e(),7==t.stamp||8==t.stamp?a("div",[a("div",[t._v("BTL 5000 Series")]),a("div",[t._v("v.č. 03800B011787")])]):t._e(),1==t.stamp||2==t.stamp||3==t.stamp?a("div",[a("div",[t._v("BTL 5940 Magnet")]),a("div",[t._v("v.č. 03800B10872")])]):t._e(),10==t.stamp?a("div",[a("div",[t._v("BTL 4000-Premium")]),a("div",[t._v("v.č. 058P0B014040")])]):t._e(),11==t.stamp?a("div",[a("div",[t._v("BTL 5000 Sono")]),a("div",[t._v("v.č. 5710-0103")])]):t._e()])},u=[],v={name:"Stamps",props:{stamp:String},data:function(){return{}},computed:{},watch:{},methods:{mounted:function(){}}},m=v,_=a("2877"),f=Object(_["a"])(m,p,u,!1,null,null,null),b=f.exports,h={name:"DataRow",components:{Stamps:b},props:{procedure:l["String"],data:{time:"",application:"",electrodes:"",intensity:"",stamp:""},cabin:l["String"]},data:function(){return{}},computed:{},watch:{},methods:{mounted:function(){}}},g=h,C=(a("ec11"),Object(_["a"])(g,c,d,!1,null,null,null)),w=C.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hr",{attrs:{size:"2"}}),a("div",{staticStyle:{display:"flex"}},[a("div",{staticClass:"half"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col_init"},[t._v(" procedura: ")]),"traub"!=t.procedureName?a("div",{staticClass:"col_center"},[a("b",[t._v(t._s(t.procedureName))])]):t._e(),"traub"==t.procedureName?a("div",{staticClass:"col_center"},[a("b",[t._v("ET - Träbertovy proudy")])]):t._e()]),a("div",{staticClass:"row"},[a("div",{staticClass:"col_init"},[t._v(" Jméno pacienta: ")]),a("div",{staticClass:"col_2_large"},[t._v(" "+t._s(t.data.patientName)+" ")])]),a("div",{staticClass:"row"},[a("div",{staticStyle:{width:"10%"}},[t._v(" R.Č.: ")]),a("div",{staticStyle:{width:"30%"}},[t._v(" "+t._s(t.data.rc)+" ")]),a("div",{staticClass:"col_3_small"},[t._v(" Poj.: ")]),a("div",{staticClass:"col_4_rest"},[t._v(" "+t._s(t.data.poj)+" ")])])]),a("div",{staticClass:"half"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col_init",staticStyle:{width:"150px",display:"flex"}},[t._v(" kabinka č. "+t._s(t.data.stamp)+" ")]),a("div",{staticClass:"col_2_med"},[t._v(" počet procedur: ")]),a("div",{staticClass:"col_3_med"},[t._v(" ............. ")])]),t._m(1)])]),t._m(2)])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boldBig align_left"},[a("div",[t._v("Záznam o průběhu RHB péče")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col_init"},[t._v(" datum od: ................ ")]),a("div",{staticClass:"col_2_med"},[t._v(" dny: ")]),a("div",{staticClass:"col_3_med"},[t._v(" ............. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"block"}},[a("div",{staticClass:"row boldBig marginleft"},[t._v("Omluvy:")]),a("div",{staticClass:"row boldBig marginleft",staticStyle:{"margin-top":"10%"}},[t._v(" Závěr terapie: ")])])}],S={name:"GeneralInfo",props:{procedureName:String,data:{patientName:"",rc:"",poj:"",stamp:""}},data:function(){return{}},computed:{},watch:{},methods:{mounted:function(){}}},x=S,N=(a("695a"),Object(_["a"])(x,y,k,!1,null,null,null)),T=N.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"procedure"},[i("div",{staticClass:"header"},[i("img",{attrs:{src:a("095d"),height:"80px"}}),i("h1",[t._v(" Poliklinika Prosek a.s.")])]),t._m(0)])])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"smallerFont"},[a("b",[a("i",[t._v("prim. MUDr. Marek Paneš, odd. rehabilitace a léčby bolesti, Lovosická 40/440, 19000, Praha9, tel. 266 010 189")])])])}],D={name:"ClinicHeader",props:{data:{time:"",application:"",electrodes:"",intensity:""}},data:function(){return{}},computed:{},watch:{},methods:{mounted:function(){}}},P=D,E=(a("8baf"),Object(_["a"])(P,B,j,!1,null,null,null)),R=E.exports,L={name:"Tens",components:{DataRow:w,ClinicHeader:R,GeneralInfo:T},props:{msg:String,procedureName:String,cabin:String},data:function(){return{data:{time:"",application:"",electrodes:"",intensity:"",patientName:"",rc:"",poj:""},update:0}},methods:{applicationChange:function(t){this.data.application=t},electrodeChange:function(t){this.data.electrodes=t},intensityChange:function(t){this.data.intensity=t},timeChange:function(t){this.data.time=t},patientChange:function(t){this.data.patientName=t},rcChange:function(t){this.data.rc=t},pojChange:function(t){this.data.poj=t}}},O=L,$=(a("131d"),Object(_["a"])(O,s,o,!1,null,"6618116e",null)),z=$.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"no-print"},[a("div",{staticClass:"row"},[t._v(" Jméno pacienta: "),a("input",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{input:function(e){return t.patientChange(e.target.value)}}})]),a("div",{staticClass:"row"},[t._v(" Rodné číslo: "),a("input",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{input:function(e){return t.rcChange(e.target.value)}}})]),a("div",{staticClass:"row"},[t._v(" Pojišťovna: "),a("input",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{input:function(e){return t.pojChange(e.target.value)}}})]),a("div",{staticClass:"row"},[t._v(" místo aplikace: "),a("input",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{input:function(e){return t.applicationChange(e.target.value)}}})]),a("div",{staticClass:"row"},[t._v(" uložení elektrod: "),a("input",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{input:function(e){return t.electrodeChange(e.target.value)}}})]),a("div",{staticClass:"row"},[t._v(" doba aplikace: "),a("input",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{input:function(e){return t.timeChange(e.target.value)}}})]),a("hr",{staticStyle:{"margin-bottom":"20%"}})]),a("div",{staticClass:"main_form"},[a("clinic-header"),a("div",{staticClass:"main_body"},[t._v(" "+t._s(t.procedureName)+" "),a("GeneralInfo",{attrs:{data:t.data,procedure:t.procedureName}}),a("div",{staticClass:"blank"}),a("table",{staticClass:"table",staticStyle:{"page-break-after":"always"}},[t._m(0),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}})],1),a("table",{staticClass:"table"},[t._m(1),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}}),a("DataRow",{attrs:{data:t.data,cabin:t.cabin,procedure:t.procedureName}})],1)],1)],1)])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticClass:"table_first_row init"},[a("b",[t._v("datum ")])]),a("th",{staticClass:"table_first_row middle"},[a("b",[t._v("popis")])]),a("th",{staticClass:"table_first_row last"},[a("b",[t._v("razítko a podpis")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticClass:"table_first_row init"},[a("b",[t._v("datum ")])]),a("th",{staticClass:"table_first_row middle"},[a("b",[t._v("popis")])]),a("th",{staticClass:"table_first_row last"},[a("b",[t._v("razítko a podpis")])])])}],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticClass:"table_row init"}),a("td",{staticClass:"table_row middle"},[a("div",{staticClass:"inside_row"},[a("div",[t._v(t._s(t.progName)+" "+t._s(t.prog)+" ........ "+t._s(t.poles)+" polová interference")]),a("div",{staticStyle:{"margin-left":"20%"}},[t._v(" -TENS")])]),a("div",{staticClass:"inside_row"},[a("div",[t._v(" místo aplikace : "+t._s(t.data.application))])]),a("div",{staticClass:"inside_row",staticStyle:{"margin-top":"3%"}},[a("div",[t._v(" uložení elektrod : ")]),a("div",[t._v(" "+t._s(t.data.electrodes))])]),t._m(0),a("div",{staticClass:"inside_row"},[a("div",[t._v(" doba aplikace : ")]),a("div",{staticStyle:{"margin-left":"8%"}},[t._v(" "+t._s(t.data.time)+" minut ")]),a("div",{staticStyle:{"margin-left":"5%"}},[t._v(" doba aplikace : ")]),a("div",{staticStyle:{"margin-left":"8%"}},[t._v(" minut ")])]),t._m(1),a("Stamps")],1),a("th",{staticClass:"table_row last"})])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inside_row"},[a("div",{staticStyle:{width:"150px",display:"flex"}},[t._v(" intensita : ")]),a("div",{staticStyle:{"margin-left":"5%",width:"30%",display:"flex"}},[a("div",{staticStyle:{"margin-left":"10%"}},[t._v(" mA ")])]),a("div",{staticStyle:{width:"150px",display:"flex"}},[t._v(" intensita : ")]),a("div",{staticStyle:{"margin-left":"5%",width:"30%",display:"flex"}},[a("div",{staticStyle:{"margin-left":"10%"}},[t._v(" mA ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inside_row"},[a("div",[t._v(" kód výkonu : ")]),a("div",{staticStyle:{"margin-left":"5px"}},[t._v(" 21113 ")])])}],G={name:"DataRow",components:{Stamps:b},props:{prog:String,procedure:String,data:{time:"",application:"",electrodes:"",intensity:""}},data:function(){return{}},computed:{poles:function(){return"ET - BTL08"==this.procedure?4:2},progName:function(){return"ET - BTL08"==this.procedure?"BTL prog. 08, ":"BTL prog. 09, "}},watch:{},methods:{mounted:function(){}}},J=G,H=(a("aba1"),Object(_["a"])(J,I,M,!1,null,null,null)),V=H.exports,Z={name:"BTL09",components:{DataRow:V,ClinicHeader:R,GeneralInfo:T},props:{msg:String,procedureName:String},data:function(){return{data:{time:"",application:"",electrodes:"",intensity:"",patientName:"",rc:"",poj:""},update:0}},methods:{applicationChange:function(t){this.data.application=t},electrodeChange:function(t){this.data.electrodes=t},intensityChange:function(t){this.data.intensity=t},timeChange:function(t){this.data.time=t},patientChange:function(t){this.data.patientName=t},rcChange:function(t){this.data.rc=t},pojChange:function(t){this.data.poj=t}}},F=Z,K=(a("8241"),Object(_["a"])(F,q,A,!1,null,"884664a4",null)),U=K.exports,Q={name:"App",components:{Tens:z,BTL09:U},data:function(){return{picked:"",selected:"",options:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"}]}}},W=Q,X=(a("034f"),Object(_["a"])(W,r,n,!1,null,null,null)),Y=X.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(Y)}}).$mount("#app")},6860:function(t,e,a){},"695a":function(t,e,a){"use strict";a("7f83")},"7f83":function(t,e,a){},8241:function(t,e,a){"use strict";a("8cc5")},"85ec":function(t,e,a){},"8baf":function(t,e,a){"use strict";a("6860")},"8cc5":function(t,e,a){},"9f61":function(t,e,a){},aba1:function(t,e,a){"use strict";a("0ca6")},ec11:function(t,e,a){"use strict";a("196d")}});
//# sourceMappingURL=app.7e286b91.js.map