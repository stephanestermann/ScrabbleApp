(function(e){function t(t){for(var i,r,l=t[0],o=t[1],u=t[2],g=0,h=[];g<l.length;g++)r=l[g],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);c&&c(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/ScrabbleApp/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"05ba":function(e,t,n){},"0600":function(e,t,n){"use strict";n("af98")},"12b5":function(e,t,n){"use strict";n("05ba")},"378a":function(e,t,n){"use strict";n("d786")},"51a2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"root",attrs:{id:"app"}},[i("md-toolbar",{staticClass:"md-primary outer-toolbar"},[i("md-button",{staticClass:"md-icon-button",on:{click:function(t){e.menuVisible=!e.menuVisible}}},[i("md-icon",[e._v("menu")])],1),i("div",{staticClass:"md-title"},[e._v("Steph's Scrabble-App")]),i("div",{staticClass:"md-toolbar-section-end"},[i("img",{attrs:{alt:"Steph's Scrabble-App",src:n("7af7")}})])],1),i("md-drawer",{staticClass:"scrabble-toolbar",attrs:{"md-active":e.menuVisible,"md-swipeable":""},on:{"update:mdActive":function(t){e.menuVisible=t},"update:md-active":function(t){e.menuVisible=t}}},[i("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[e._v("Menu")]),i("md-list",[i("md-list-item",{on:{click:function(t){e.menuVisible=!e.menuVisible}}},[i("md-icon",[e._v("casino")]),i("router-link",{staticClass:"md-list-item-text",attrs:{to:"/"}},[e._v("Spielen")])],1),i("md-list-item",{on:{click:function(t){e.menuVisible=!e.menuVisible}}},[i("md-icon",[e._v("insert_chart_outlined")]),i("router-link",{staticClass:"md-list-item-text",attrs:{to:"/statistik"}},[e._v("Statistik")])],1)],1)],1),i("md-content",{staticClass:"first-content"},[i("router-view")],1)],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container"},[n("div",{staticClass:"inner-toolbar"},[e.spielGeschlossen?e._e():n("form",{on:{submit:function(t){return t.preventDefault(),e.addNewScrabblezug(t)}}},[n("EingabeTitel",{attrs:{spielzug:e.spielzug},on:{changed:e.onBeginnChange}}),n("div",{staticClass:"inputArea"},[n("div",[n("label",[e._v("Wortpunkte für diesen Zug: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.zug.punkteZug,expression:"zug.punkteZug"}],attrs:{maxlength:"3"},domProps:{value:e.zug.punkteZug},on:{input:function(t){t.target.composing||e.$set(e.zug,"punkteZug",t.target.value)}}})]),n("br"),n("label",[e._v("Bingo: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.zug.bingo,expression:"zug.bingo"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.zug.bingo)?e._i(e.zug.bingo,null)>-1:e.zug.bingo},on:{change:function(t){var n=e.zug.bingo,i=t.target,a=!!i.checked;if(Array.isArray(n)){var s=null,r=e._i(n,s);i.checked?r<0&&e.$set(e.zug,"bingo",n.concat([s])):r>-1&&e.$set(e.zug,"bingo",n.slice(0,r).concat(n.slice(r+1)))}else e.$set(e.zug,"bingo",a)}}})]),n("label",[e._v(" Gegner hat angezweifelt: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.zug.hatAngezweifelt,expression:"zug.hatAngezweifelt"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.zug.hatAngezweifelt)?e._i(e.zug.hatAngezweifelt,null)>-1:e.zug.hatAngezweifelt},on:{change:function(t){var n=e.zug.hatAngezweifelt,i=t.target,a=!!i.checked;if(Array.isArray(n)){var s=null,r=e._i(n,s);i.checked?r<0&&e.$set(e.zug,"hatAngezweifelt",n.concat([s])):r>-1&&e.$set(e.zug,"hatAngezweifelt",n.slice(0,r).concat(n.slice(r+1)))}else e.$set(e.zug,"hatAngezweifelt",a)}}})]),n("label",[e._v(" Spiel beendet: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.zug.hatSpielBeendet,expression:"zug.hatSpielBeendet"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.zug.hatSpielBeendet)?e._i(e.zug.hatSpielBeendet,null)>-1:e.zug.hatSpielBeendet},on:{change:function(t){var n=e.zug.hatSpielBeendet,i=t.target,a=!!i.checked;if(Array.isArray(n)){var s=null,r=e._i(n,s);i.checked?r<0&&e.$set(e.zug,"hatSpielBeendet",n.concat([s])):r>-1&&e.$set(e.zug,"hatSpielBeendet",n.slice(0,r).concat(n.slice(r+1)))}else e.$set(e.zug,"hatSpielBeendet",a)}}})])]),e.zug.hatAngezweifelt?n("div",[n("label",[e._v("Wort korrekt "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.zug.angezweifeltKorrekt,expression:"zug.angezweifeltKorrekt"}],attrs:{type:"radio",id:"Wort korrekt",value:"0"},domProps:{checked:e._q(e.zug.angezweifeltKorrekt,"0")},on:{change:function(t){return e.$set(e.zug,"angezweifeltKorrekt","0")}}})]),e._v(" "),n("label",[e._v("Wort falsch "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.zug.angezweifeltKorrekt,expression:"zug.angezweifeltKorrekt"}],attrs:{type:"radio",id:"Wort falsch",value:"1"},domProps:{checked:e._q(e.zug.angezweifeltKorrekt,"1")},on:{change:function(t){return e.$set(e.zug,"angezweifeltKorrekt","1")}}})])]):e._e(),e.zug.hatSpielBeendet?n("div",[n("label",[e._v("Restpunkte Gegner: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.zug.restpunkteGegner,expression:"zug.restpunkteGegner"}],attrs:{maxlength:"2"},domProps:{value:e.zug.restpunkteGegner},on:{input:function(t){t.target.composing||e.$set(e.zug,"restpunkteGegner",t.target.value)}}})])]):e._e(),n("br"),e.beginnEins||e.beginnZwei?n("button",{attrs:{type:"submit"}},[e._v("Scrabblezug eingeben")]):e._e(),n("br"),n("br")])],1),n("div",[n("md-dialog-confirm",{attrs:{"md-active":e.saveConfirm,"md-title":"Spiel wirklich beenden?","md-content":"Willst Du das Spiel wirklich beenden und es in die Datenbank schreiben?<br>Das Spiel kann danach nicht wieder aufgenommen werden.","md-confirm-text":"Ja","md-cancel-text":"Nein"},on:{"update:mdActive":function(t){e.saveConfirm=t},"update:md-active":function(t){e.saveConfirm=t},"md-cancel":e.onNoEnd,"md-confirm":e.onYesEnd}})],1)]),n("md-content",{staticClass:"md-scrollbar"},[n("TableZuege",{attrs:{scrabbleZuege:e.scrabbleZuege,spielGeschlossen:e.spielGeschlossen}})],1)],1)},l=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"eingabeTitel"},[e.spielzug<=1?n("label",{staticClass:"nameLabel"},[e._v("Beginn Anica")]):e.getIsSpielerAmZug(1)?n("label",{staticClass:"nameLabel"},[e._v("Anica's Zug")]):e._e(),1==e.spielzug?n("input",{directives:[{name:"model",rawName:"v-model",value:e.beginner,expression:"beginner"}],attrs:{type:"radio",id:"Anica",value:"1"},domProps:{checked:e._q(e.beginner,"1")},on:{change:[function(t){e.beginner="1"},e.onBeginnChange]}}):e._e(),e._v(" "),e.spielzug<=1?n("label",{staticClass:"nameLabel"},[e._v("Beginn Steph")]):e.getIsSpielerAmZug(2)?n("label",{staticClass:"nameLabel"},[e._v("Steph's Zug")]):e._e(),1==e.spielzug?n("input",{directives:[{name:"model",rawName:"v-model",value:e.beginner,expression:"beginner"}],attrs:{type:"radio",id:"Steph",value:"2"},domProps:{checked:e._q(e.beginner,"2")},on:{change:[function(t){e.beginner="2"},e.onBeginnChange]}}):e._e(),n("br"),n("br")])},u=[],c=(n("c5f6"),{name:"EingabeTitel",props:{spielzug:Number},data:function(){return{beginner:0}},methods:{onBeginnChange:function(){this.$emit("changed",this.beginner)},getIsSpielerAmZug:function(e){return 1==this.beginner?1==e?this.spielzug%2!=0:this.spielzug%2==0:2==e?this.spielzug%2!=0:this.spielzug%2==0}}}),g=c,h=(n("e6ac"),n("2877")),b=Object(h["a"])(g,o,u,!1,null,null,null),d=b.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rTable",attrs:{disabled:e.spielGeschlossen}},[n("TitelRow"),e.anzInTable>0?n("div",{ref:"tableZuege",staticClass:"rTableRow"},[n("div",{staticClass:"rTableCell"},[e._v("...")]),n("div",{staticClass:"rTableCell"},[e._v("...")]),n("div",{staticClass:"rTableCell"},[e._v("...")])]):e._e(),e._l(e.scrabbleZuege,(function(t,i){return n("div",{key:i,staticClass:"rTableRow"},[e.anzInTable<=0||i+1+e.anzInTable>e.scrabbleZuege.length?n("div",{staticClass:"rTableCell"},[e._v(e._s(i+1))]):e._e(),e.anzInTable<=0||i+1+e.anzInTable>e.scrabbleZuege.length?n("div",{staticClass:"rTableCell"},[e._v(e._s(e.getPunkteProZugString(t[0],t[1],1)))]):e._e(),e.anzInTable<=0||i+1+e.anzInTable>e.scrabbleZuege.length?n("div",{staticClass:"rTableCell"},[e._v(e._s(e.getPunkteProZugString(t[1],t[0],2)))]):e._e()])})),n("TotalRow",{attrs:{scrabbleZuege:e.scrabbleZuege}})],2)},f=[],v=(n("6b54"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rTableHeading"},[n("div",{staticClass:"rTableHead"},[n("strong",[e._v("Zug")])]),n("div",{staticClass:"rTableHead"},[n("strong",[e._v("Anica")])]),n("div",{staticClass:"rTableHead"},[n("strong",[e._v("Steph")])])])}],z={name:"TitelRow"},k=z,_=Object(h["a"])(k,v,m,!1,null,null,null),w=_.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rTableFoot"},[n("div",{staticClass:"rTableCell"},[e._v("Total")]),n("div",{staticClass:"rTableCell"},[n("div",[e._v("Punkte: "+e._s(e.getBetragSpieler(1)[0]))]),e.getBetragSpieler(1)[1]>0?n("div",[e._v("Anzahl Bingos: "+e._s(e.getBetragSpieler(1)[1]))]):e._e(),e.getBetragSpieler(1)[2]>0?n("div",[e._v("Anzahl angezweifelt: "+e._s(e.getBetragSpieler(1)[2]))]):e._e(),e.getBetragSpieler(1)[3]>0?n("div",[e._v("Davon falsch angezweifelt: "+e._s(e.getBetragSpieler(1)[3]))]):e._e()]),n("div",{staticClass:"rTableCell"},[n("div",[e._v("Punkte: "+e._s(e.getBetragSpieler(2)[0]))]),e.getBetragSpieler(2)[1]>0?n("div",[e._v("Anzahl Bingos: "+e._s(e.getBetragSpieler(2)[1]))]):e._e(),e.getBetragSpieler(2)[2]>0?n("div",[e._v("Anzahl angezweifelt: "+e._s(e.getBetragSpieler(2)[2]))]):e._e(),e.getBetragSpieler(2)[3]>0?n("div",[e._v("Davon falsch angezweifelt: "+e._s(e.getBetragSpieler(2)[3]))]):e._e()])])},S=[],C=n("7618");function Z(e,t){var n=[];n[0]=0,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=0,n[6]=0;for(var i=0;i<t.length;i++){var a=t[i];void 0!==Object(C["a"])(a[e-1])&&(n[0]+=parseInt(a[e-1].totalPunkteZug),a[e-1].bingo&&n[1]++,a[e-1].hatAngezweifelt&&(n[2]++,0==a[e-1].hatKorrektAngezweifelt&&n[3]++),n[4]=a[e-1].hatSpielBeendet,n[5]=a[e-1].restpunkte,n[6]=a[e-1].bonusPunkte)}return n}var y={name:"TotalRow",props:{scrabbleZuege:{type:Array,default:function(){return[]}}},methods:{getBetragSpieler:function(e){return Z(e,this.scrabbleZuege)}}},B=y,T=Object(h["a"])(B,A,S,!1,null,null,null),P=T.exports,O={name:"ZugCells",props:{anzInTable:{type:Number,default:0},scrabbleZuege:{type:Array,default:function(){return[]}},spielGeschlossen:{type:Boolean,required:!0}},methods:{getPunkteProZugString:function(e){var t="Punkte:"+e.punkteZug.toString();return e.bingo&&(t+=" + Bingo:50"),e.hatAngezweifelt&&(t="(Z) | "+t,0==e.hatKorrektAngezweifelt&&(t+=" -10")),e.hatSpielBeendet&&(t="(Beendet) | "+t+" + "+e.bonusPunkte.toString()),e.restpunkte<0&&(t=t+" "+e.restpunkte.toString()),t}},components:{TitelRow:w,TotalRow:P}},x=O,j=Object(h["a"])(x,p,f,!1,null,null,null),E=j.exports;function G(e,t,n){var i;return i=e?[t,n]:[n,t],i}function I(e){N(e[0]),N(e[1])}function N(e){var t=parseInt(e.punkteZug);e.bingo&&(t+=50),e.hatAngezweifelt&&0==e.hatKorrektAngezweifelt&&(t-=10);var n=parseInt(e.restpunkte);n<0&&(t+=n);var i=parseInt(e.bonusPunkte);i>0&&(t+=i),e.totalPunkteZug=t}n("96cf");var $=n("3b8d"),D=n("d225"),L=n("b0b4"),K=n("bc3a"),V=n.n(K),W=(n("ac6a"),function(){function e(t){Object(D["a"])(this,e),this.scrabblerId=t,this.totBegins=0,this.totPoints=0,this.totWins=0,this.totBingos=0,this.totDoubtes=0,this.totWrongDoubtes=0,this.totCorrectDoubtes=0,this.totGamesEnded=0,this.totLeftPoints=0}return Object(L["a"])(e,[{key:"addStatistikResponse",value:function(e){var t=this;e.forEach((function(e){e.scrabblerId===t.scrabblerId&&(t.totBegins=e.totBegins,t.totPoints=e.totPoints,t.totWins=e.totWins,t.totBingos=e.totBingos,t.totDoubtes=e.totDoubtes,t.totCorrectDoubtes=e.totCorrectDoubtes,t.totWrongDoubtes=e.totWrongDoubtes,t.totGamesEnded=e.totGamesEnded,t.totLeftPoints=e.totLeftPoints)}))}},{key:"createStatistikTableWithHeaderOnTheLeftForTwoPlayers",value:function(e){var t=[];return t.push(this.getLabelValueObject("Name",this.getName(),e.getName())),t.push(this.getLabelValueObject("Anzahl begonnen",this.totBegins,e.totBegins)),t.push(this.getLabelValueObject("Punktetotal",this.totPoints,e.totPoints)),t.push(this.getLabelValueObject("Anzahl Siege",this.totWins,e.totWins)),t.push(this.getLabelValueObject("Anzahl Bingos",this.totBingos,e.totBingos)),t.push(this.getLabelValueObject("Anzahl Anzweiflungen",this.totDoubtes,e.totDoubtes)),t.push(this.getLabelValueObject("Anzahl richtige Anzweiflungen",this.totCorrectDoubtes,e.totCorrectDoubtes)),t.push(this.getLabelValueObject("Anzahl falsche Anzweiflungen",this.totWrongDoubtes,e.totWrongDoubtes)),t.push(this.getLabelValueObject("Anzahl Spielbeendungen",this.totGamesEnded,e.totGamesEnded)),t.push(this.getLabelValueObject("Total übrige Punkte",this.totLeftPoints,e.totLeftPoints)),t}},{key:"getLabelValueObject",value:function(e,t,n){return{label:e,valueOne:t,valueTwo:n}}},{key:"getName",value:function(){return 1===this.scrabblerId?"Anica":"Stephan"}}]),e}()),R="https://stephs-scrabbleapp-server.glitch.me/",H=R+"api/result/",M=R+"api/results/",q=function(){function e(){Object(D["a"])(this,e)}return Object(L["a"])(e,[{key:"loadAllresults",value:function(){var e=Object($["a"])(regeneratorRuntime.mark((function e(){var t,n,i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V.a.get(M);case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,i=new W(1),i.addStatistikResponse(n.data),a=new W(2),a.addStatistikResponse(n.data),s=i.createStatistikTableWithHeaderOnTheLeftForTwoPlayers(a),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"saveGame",value:function(e){V.a.post(H,e)}}]),e}(),F=new q,J={name:"UebersichtsBereich",components:{EingabeTitel:d,TableZuege:E},data:function(){return{spielzug:1,beginnEins:!1,beginnZwei:!1,scrabbleZuege:[],lastZug:[],spielGeschlossen:!1,zug:{totalPunkteZug:0,punktezug:"",bingo:!1,hatAngezweifelt:!1,angezweifeltKorrekt:0,hatSpielBeendet:!1,restpunkteGegner:0},tableBottomWithTitelAndTotal:0,anzInTable:0,serverDomain:"https://stephs-scrabbleapp-server.glitch.me/",saveConfirm:!1}},mounted:function(){var e=this;window.addEventListener("resize",(function(){return e.handleResize()}))},destroyed:function(){var e=this;document.removeEventListener("resize",(function(){return e.handleResize()}))},methods:{onBeginnChange:function(e){this.beginnEins=1==e,this.beginnZwei=!this.beginnEins},saveGame:function(){var e=Z(1,this.scrabbleZuege),t=Z(2,this.scrabbleZuege),n={scrabbler_ids:[1,2],beginner:[this.beginnEins,this.beginnZwei],points:[e[0],t[0]],won:[e[0]>t[0],t[0]>e[0]],number_bingos:[e[1],t[1]],number_doubtes:[e[2],t[2]],number_wrong_doubtes:[e[3],t[3]],number_correct_doubtes:[e[2]-e[3],t[2]-t[3]],game_ended:[e[4],t[4]],left_points:[e[5],t[5]]};F.saveGame(n)},addNewScrabblezug:function(){var e=this.zug.punkteZug;if(!(""===e||0===e.length||null===e||isNaN(e)||!1===this.beginnEins&&!1===this.beginnZwei)&&(!this.showEndingConfirm()||this.spielGeschlossen)){var t={punkteZug:e,bingo:this.zug.bingo,hatAngezweifelt:!1,hatKorrektAngezweifelt:0,hatSpielBeendet:this.zug.hatSpielBeendet,restpunkte:0,bonusPunkte:this.zug.restpunkteGegner};if(this.spielzug%2==0){var n={punkteZug:this.lastZug.punkteZug,bingo:this.lastZug.bingo,hatAngezweifelt:this.zug.hatAngezweifelt,hatKorrektAngezweifelt:this.zug.angezweifeltKorrekt,hatSpielBeendet:!1,restpunkte:-this.zug.restpunkteGegner,bonusPunkte:0};t.hatAngezweifelt=this.lastZug.gegnerHatAngezweifelt,t.hatKorrektAngezweifelt=this.lastZug.gegnerHatKorrektAngezweifelt;var i=G(this.beginnEins,n,t);this.scrabbleZuege=this.scrabbleZuege.slice(0,this.scrabbleZuege.length-1),I(i),this.scrabbleZuege.push(i)}else{var a={punkteZug:0,bingo:!1,hatAngezweifelt:this.zug.hatAngezweifelt,hatKorrektAngezweifelt:this.zug.angezweifeltKorrekt,hatSpielBeendet:!1,restpunkte:-this.zug.restpunkteGegner,bonusPunkte:0},s=G(this.beginnEins,t,a);I(s),this.scrabbleZuege.push(s)}this.lastZug.punkteZug=t.punkteZug,this.lastZug.bingo=t.bingo,this.lastZug.gegnerHatAngezweifelt=this.zug.hatAngezweifelt,this.lastZug.gegnerHatKorrektAngezweifelt=this.zug.angezweifeltKorrekt,this.zug.punkteZug="",this.zug.bingo=!1,this.zug.hatAngezweifelt=!1,this.spielzug++,this.calcAnzInTableSichtbar(),this.spielGeschlossen&&this.saveGame()}},handleResize:function(){this.anzInTable=0,this.calcAnzInTableSichtbar()},calcAnzInTableSichtbar:function(){this.anzInTable=0},showEndingConfirm:function(){return!!this.zug.hatSpielBeendet&&(this.saveConfirm=!0,!0)},onYesEnd:function(){this.spielGeschlossen=this.zug.hatSpielBeendet,this.addNewScrabblezug()},onNoEnd:function(){}}},U=J,Y=(n("12b5"),Object(h["a"])(U,r,l,!1,null,"c297b61a",null)),Q=Y.exports,X={name:"app",components:{UebersichtsBereich:Q},data:function(){return{menuVisible:!1}}},ee=X,te=(n("034f"),Object(h["a"])(ee,a,s,!1,null,null,null)),ne=te.exports,ie=n("43f9"),ae=n.n(ie),se=n("8c4f"),re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("AnsichtsSwitch",{staticClass:"ansichtsAuswahl",attrs:{aktAnsicht:e.aktAnsicht},on:{changed:e.onAnsichtChange}}),n("md-table",{attrs:{"md-card":""},scopedSlots:e._u([{key:"md-table-row",fn:function(t){var i=t.item;return n("md-table-row",{},[n("md-table-head",[e._v(e._s(i.label))]),"Name"===i.label?n("md-table-head",[e._v(e._s(i.valueOne))]):n("md-table-cell",[e._v(e._s(i.valueOne))]),"Name"===i.label?n("md-table-head",[e._v(e._s(i.valueTwo))]):n("md-table-cell",[e._v(e._s(i.valueTwo))])],1)}}]),model:{value:e.results,callback:function(t){e.results=t},expression:"results"}},[n("md-table-toolbar",[n("h1",{staticClass:"md-title"},[e._v("Gesamtstatistik")])])],1)],1)},le=[],oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ansichtsSwitch"},[n("md-radio",{attrs:{value:"1"},on:{change:e.onAnsichtChange},model:{value:e.ansicht,callback:function(t){e.ansicht=t},expression:"ansicht"}},[e._v("Gesamtstatistik")]),n("md-radio",{attrs:{value:"2"},on:{change:e.onAnsichtChange},model:{value:e.ansicht,callback:function(t){e.ansicht=t},expression:"ansicht"}},[e._v("Monatsstatistik")]),n("md-radio",{attrs:{value:"3"},on:{change:e.onAnsichtChange},model:{value:e.ansicht,callback:function(t){e.ansicht=t},expression:"ansicht"}},[e._v("Jahresstatistik")]),e.showPicker?n("month-picker",{attrs:{lang:"de","year-only":"3"===e.ansicht},on:{change:e.showDate}}):e._e(),n("br")],1)},ue=[],ce=n("7b25"),ge={name:"AnsichtsSwitch",components:{MonthPicker:ce["a"]},props:{aktAnsicht:Number},data:function(){return{ansicht:"1",selected:"",date:{from:null,to:null,month:null,year:null},showPicker:!1}},mounted:function(){this.ansicht=this.aktAnsicht},methods:{onAnsichtChange:function(){this.showPicker="2"===this.ansicht||"3"===this.ansicht,this.$emit("changed",parseInt(this.ansicht))},showDate:function(e){this.date=e}}},he=ge,be=(n("378a"),Object(h["a"])(he,oe,ue,!1,null,null,null)),de=be.exports,pe=new q,fe={name:"ZugCells",components:{AnsichtsSwitch:de},props:{anzInTable:{type:Number,default:0},resultForMonth:{type:Array,default:function(){return[]}}},data:function(){return{aktAnsicht:1,results:[],fault:void 0}},methods:{getPunkteProZugString:function(e){var t="Punkte:"+e.punkteZug.toString();return e.bingo&&(t+=" + Bingo:50"),e.hatAngezweifelt&&(t="(Z) | "+t,0==e.hatKorrektAngezweifelt&&(t+=" -10")),t},onAnsichtChange:function(e){var t=this;this.aktAnsicht=e,2===e&&pe.loadAllresults().then((function(e){t.results=e})).catch((function(e){t.fault=e}))}}},ve=fe,me=(n("0600"),Object(h["a"])(ve,re,le,!1,null,"1d9e8d6e",null)),ze=me.exports;i["default"].use(se["a"]);var ke=new se["a"]({routes:[{path:"/",name:"UebersichtsBereich",component:Q},{path:"/statistik",name:"Statistik",component:ze}]});n("51de"),n("e094");i["default"].use(ae.a),i["default"].use(ce["a"]),i["default"].prototype.$http=V.a,i["default"].config.productionTip=!1,i["default"].filter("uppercase",(function(e){return e.toUpperCase()})),i["default"].filter("truncate",(function(e){var t=60;return e.length<=t?e:e.substring(0,t)+"..."})),new i["default"]({router:ke,render:function(e){return e(ne)}}).$mount("#app")},"7af7":function(e,t,n){e.exports=n.p+"img/scrabble.8c44c62b.png"},"85ec":function(e,t,n){},af98:function(e,t,n){},d786:function(e,t,n){},e6ac:function(e,t,n){"use strict";n("51a2")}});
//# sourceMappingURL=app.673ee047.js.map