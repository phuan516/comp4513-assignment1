(this["webpackJsonpcomp4513-assignment1"]=this["webpackJsonpcomp4513-assignment1"]||[]).push([[0],{40:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n,r=c(1),a=c.n(r),i=c(21),s=c.n(i),l=(c(40),c(11)),o=c(12),d=c.n(o),j=c(17),u=c(2),h=c(4),b=c(0),p=function(e){var t=Object(r.useState)(),c=Object(u.a)(t,2),n=c[0],a=c[1];return Object(b.jsxs)("div",{id:"searchContainer",children:[Object(b.jsx)("div",{id:"homeTitleInput",children:Object(b.jsx)("input",{type:"text",id:"title",placeholder:"Search Play Here",onChange:function(e){a(e.target.value)}})}),Object(b.jsxs)("div",{id:"homeButtons",children:[Object(b.jsx)(h.c,{to:{pathname:"/default",state:{title:n}},children:Object(b.jsx)("div",{id:"matchingButton",children:Object(b.jsx)("button",{type:"button","data-inline":"true",children:"Show matching Plays"})})}),Object(b.jsx)(h.c,{to:{pathname:"/default",state:{title:""}},children:Object(b.jsx)("div",{id:"showAllButton",children:Object(b.jsx)("button",{type:"button","data-inline":"true",children:"Show All Plays"})})})]})]})},x=function(e){return Object(r.useEffect)((function(){var e=setTimeout((function(){console.log("This will run after 5 seconds!")}),5e3);clearTimeout(e)}),[]),Object(b.jsxs)("div",{className:"homePage",children:[Object(b.jsxs)("div",{id:"homeSearch",children:[" ",Object(b.jsx)(p,{})]}),Object(b.jsxs)("div",{id:"heroCredit",children:["Photo by"," ",Object(b.jsx)("a",{href:"https://unsplash.com/@maxmuselmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Max Muselmann"})," ","on"," ",Object(b.jsx)("a",{href:"https://unsplash.com/s/photos/shakespeare?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})},O=c(30),f=c.n(O),m=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),c=t[0],n=t[1],a=function(){n(!1)};return Object(b.jsxs)("div",{id:"headerBar",children:[Object(b.jsx)("div",{id:"homeLogoButton",children:Object(b.jsx)(h.c,{to:"/",children:Object(b.jsx)("img",{src:"https://img.icons8.com/office/30/000000/home--v1.png",alt:"homeLogo"})})}),Object(b.jsx)("div",{id:"aboutButton",children:Object(b.jsx)("button",{onClick:function(){n(!0)},type:"button",children:"About"})}),Object(b.jsxs)(f.a,{id:"modal",isOpen:c,onRequestClose:a,children:[Object(b.jsx)("button",{id:"modalButton",onClick:a,children:"close"}),Object(b.jsxs)("div",{id:"modalBackground",children:[Object(b.jsx)("h1",{children:"About"}),Object(b.jsx)("h3",{children:"Team Members"}),Object(b.jsx)("p",{children:"Anro Tran"}),Object(b.jsx)("p",{children:"Peter Huang"}),Object(b.jsx)("p",{children:"Mohamed Aly"}),Object(b.jsx)("h3",{children:"Github Repo"}),Object(b.jsx)("a",{href:"https://github.com/phuan516/comp4513-assignment1",children:Object(b.jsx)("p",{children:"Link to Repository"})}),Object(b.jsx)("h3",{children:"Reference Links"}),Object(b.jsx)("a",{href:"https://blog.logrocket.com/how-to-build-tab-component-react/",children:Object(b.jsx)("p",{children:"Building your own tab components"})}),Object(b.jsx)("a",{href:"https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react",children:Object(b.jsx)("p",{children:"How to hide or show elements in react"})}),Object(b.jsx)("a",{href:"https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_scrollbar",children:Object(b.jsx)("p",{children:"Custom scrollbars with webkit"})}),Object(b.jsx)("a",{href:"https://www.w3schools.com/howto/howto_css_full_page.asp",children:Object(b.jsx)("p",{children:"How to add full page background image"})}),Object(b.jsx)("a",{href:"https://stackoverflow.com/questions/4137255/checkboxes-in-web-pages-how-to-make-them-bigger",children:Object(b.jsx)("p",{children:"How to make checkboxes bigger with webkit"})})]})]})]})},v=function(e){return Object(b.jsxs)("div",{id:"favoriteItem",children:[Object(b.jsx)(h.c,{to:"/playDetails",children:Object(b.jsxs)("p",{onClick:function(){e.updateCurrent(e.play);var t="https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name="+e.play.id;fetch(t).then((function(e){return e.json()})).then((function(e){localStorage.setItem("playInfo",JSON.stringify(e))}))},children:[" "," ",e.play.title," "," "]})}),Object(b.jsx)("button",{type:"button",id:"deleteButton",onClick:function(){e.removeFromLike(e.play),alert(e.play.title+" has been removed from favorite")},children:"Remove"})]})},y=function(e){return Object(b.jsxs)("div",{id:"favoritesBox",children:[Object(b.jsx)("h1",{children:"Favorites"}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{id:"favoritesList",children:e.plays.map((function(t,c){return Object(b.jsx)(v,{play:t,removeFromLike:e.removeFromLike,updateCurrent:e.updateCurrent,updateTab:e.updateTab},c)}))})]})},g=c(24),k=function(e){var t=Object(r.useState)({}),c=Object(u.a)(t,2),n=c[0],a=c[1],i=Object(r.useState)({status:!0}),s=Object(u.a)(i,2),l=s[0],o=s[1],d=Object(r.useState)({status:!0}),j=Object(u.a)(d,2),h=j[0],p=j[1];Object(r.useEffect)((function(){e.title?(a({title:e.title}),e.updateFilteredData({title:e.title})):e.updateFilteredData({})}),[]);var x=function(e){var t=Object(g.a)({},n);""===e.target.value?delete t[e.target.name]:(t[e.target.name]=e.target.value,"before"===e.target.name&&o({status:!1,value:e.target.value}),"after"===e.target.name&&p({status:!1,value:e.target.value})),a(t)},O=function(e){var t=Object(g.a)({},n);"before"===e.target.name&&!1===l.status?(o({status:!0,value:l.value}),delete t.before):"before"===e.target.name&&!0===l.status?(o({status:!1,value:l.value}),t.before=l.value):"after"===e.target.name&&!1===h.status?(p({status:!0,value:h.value}),delete t.after):"after"===e.target.name&&!0===h.status&&(p({status:!1,value:h.value}),t.after=h.value),a(t)};return Object(b.jsxs)("div",{id:"filterBox",children:[Object(b.jsxs)("div",{id:"filtersAndCheck",children:[Object(b.jsxs)("div",{id:"checkBoxDiv",children:[" ",Object(b.jsx)("input",{type:"checkbox",className:"checkboxFave",onChange:function(){e.updateFaveBox(),e.updateIsChecked()}})," "]}),Object(b.jsx)("h1",{id:"filterTitle",children:"Play Filters"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{id:"filterContentBox",children:Object(b.jsxs)("form",{onSubmit:function(t){e.updateFilteredData(n),t.preventDefault()},children:[Object(b.jsxs)("div",{id:"searchTitleBox",children:[Object(b.jsx)("label",{htmlFor:"title",children:"Title"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"title",id:"searchTitleInput",placeholder:"Search Title",onChange:x})]}),Object(b.jsxs)("div",{id:"searchYearBox",children:[Object(b.jsx)("label",{htmlFor:"year",id:"yearTitle",children:" Year "})," ",Object(b.jsx)("br",{}),Object(b.jsxs)("div",{id:"beforeSearch",children:[Object(b.jsx)("div",{id:"beforeCheckBox",children:Object(b.jsx)("input",{type:"checkbox",name:"before",onChange:O})}),Object(b.jsxs)("label",{htmlFor:"before",name:"before",id:"labelBefore",children:["Before",Object(b.jsx)("input",{type:"text",name:"before",id:"inputBefore",disabled:l.status,onChange:x})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{id:"afterSearch",children:Object(b.jsxs)("div",{id:"afterCheckBox",children:[Object(b.jsx)("input",{type:"checkbox",name:"after",onChange:O}),Object(b.jsxs)("label",{htmlFor:"after",name:"after",id:"labelAfter",children:["After",Object(b.jsx)("input",{type:"text",name:"after",id:"inputAfter",disabled:h.status,onChange:x})]})]})})]}),Object(b.jsxs)("div",{id:"genreBox",children:[Object(b.jsx)("label",{htmlFor:"genre",children:"Genre"}),Object(b.jsx)("br",{}),Object(b.jsxs)("select",{name:"genre",id:"genre",onChange:x,children:[Object(b.jsx)("option",{defaultValue:""}),Object(b.jsx)("option",{name:"genre",value:"comedy",children:"comedy"}),Object(b.jsx)("option",{name:"genre",value:"tragedy",children:"tragedy"}),Object(b.jsx)("option",{name:"genre",value:"history",children:"history"})]})]}),Object(b.jsxs)("div",{id:"filterButtons",children:[Object(b.jsx)("button",{type:"submit",id:"filterButton",children:" Filter "}),Object(b.jsx)("button",{type:"reset",id:"clearButton",onClick:function(e){a({}),o({status:!0}),p({status:!0})},children:" Clear "})]})]})})]})},C=c(31),w=function(e){return Object(b.jsxs)("div",{id:"listBoxItems",children:[Object(b.jsx)("p",{id:"playInfoTitle",children:e.play.title}),Object(b.jsx)("p",{id:"playDate",children:e.play.likelyDate}),Object(b.jsxs)("div",{id:"playListButtons",children:[Object(b.jsx)("button",{type:"button",id:"likeButton",onClick:function(){e.addToLike(e.play)},children:"\u2764"}),Object(b.jsx)(h.c,{to:"/playDetails",children:Object(b.jsx)("button",{type:"button",onClick:function(){e.updateCurrent(e.play);var t="https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name="+e.play.id;fetch(t).then((function(e){return e.json()})).then((function(e){localStorage.setItem("playInfo",JSON.stringify(e))}))},children:"View"})})]})]})},S=c(32).a.h1(n||(n=Object(C.a)(["\n  font-style: italic;\n  color: red;\n"]))),B=function(e){return Object(b.jsxs)("div",{id:"listBox",children:[Object(b.jsx)("h1",{id:"listTitle",children:"List / Match"}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{id:"listPlayInfo",children:!0===e.matchesBoolean?Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{id:"listHeader",children:[Object(b.jsx)("h2",{id:"titleLabel",style:{cursor:"pointer"},onClick:function(){e.sortTitle()},children:"Title"})," ",Object(b.jsx)("h2",{id:"listLabel",style:{cursor:"pointer"},onClick:function(){e.sortYear()},children:"Year"})," ",Object(b.jsx)("p",{})]}),Object(b.jsx)("div",{id:"listPlayBox",children:e.plays.map((function(t,c){return Object(b.jsx)(w,{play:t,addToLike:e.addToLike,updateCurrent:e.updateCurrent},c)}))})]}):Object(b.jsx)(S,{children:"No Matches Found. Please Try Again! "})})]})},T=c(3),D=function(e){var t=Object(T.e)();Object(r.useEffect)((function(){t.state.filters&&e.setFilteredData(t.state.filters)}),[]);var c="";t.state.title&&(c=t.state.title);var n=Object(r.useState)(!0),a=Object(u.a)(n,2),i=a[0],s=a[1],o=Object(r.useState)(e.plays),d=Object(u.a)(o,2),j=(d[0],d[1]);return Object(b.jsxs)("div",{className:"defaultPage",children:[Object(b.jsx)(m,{}),Object(b.jsxs)("div",{id:"defaultPageInfoBox",children:[e.showFavorites&&!1===e.isChecked?Object(b.jsxs)("div",{id:"defaultFavoriteBox",children:[" ",Object(b.jsx)(y,{plays:e.likedPlays,removeFromLike:e.removeFromLike,updateCurrent:e.updateCurrent})," "]}):Object(b.jsx)("div",{id:"hiddenFaveBox",children:" "}),Object(b.jsx)(k,{updateFilteredData:function(t){var c=[];0===Object.keys(t).length?c=Object(l.a)(e.mainData):(t.title&&(t.title=t.title.toLowerCase()),e.mainData.forEach((function(e){t.title&&t.genre&&t.before&&t.after?e.title.toLowerCase().includes(t.title)&&e.genre===t.genre&&e.likelyDate<t.before&&e.likelyDate>t.after&&c.push(e):t.title&&t.genre&&t.before?e.title.toLowerCase().includes(t.title)&&e.genre===t.genre&&e.likelyDate<t.before&&c.push(e):t.title&&t.before&&t.after?e.title.toLowerCase().includes(t.title)&&e.likelyDate<t.before&&e.likelyDate>t.after&&c.push(e):t.title&&t.after&&t.genre?e.title.toLowerCase().includes(t.title)&&e.likelyDate>t.after&&e.genre===t.genre&&c.push(e):t.genre&&t.before&&t.after?e.genre===t.genre&&e.likelyDate<t.before&&e.likelyDate>t.after&&c.push(e):t.title&&t.genre?e.title.toLowerCase().includes(t.title)&&e.genre===t.genre&&c.push(e):t.title&&t.after?e.title.toLowerCase().includes(t.title)&&e.likelyDate>t.after&&c.push(e):t.title&&t.before?e.title.toLowerCase().includes(t.title)&&e.likelyDate<t.before&&c.push(e):t.genre&&t.before?e.genre===t.genre&&e.likelyDate<t.before&&c.push(e):t.genre&&t.after?e.genre===t.genre&&e.likelyDate>t.after&&c.push(e):t.before&&t.after?e.likelyDate<t.before&&e.likelyDate>t.after&&c.push(e):t.genre?e.genre===t.genre&&c.push(e):t.title?e.title.toLowerCase().includes(t.title)&&c.push(e):t.before?e.likelyDate<t.before&&c.push(e):t.after&&e.likelyDate>t.after&&c.push(e)}))),0===c.length?s(!1):s(!0),e.setFilteredData(c)},title:c,matchesFound:i,updateIsChecked:e.updateIsChecked,updateFaveBox:e.updateFaveBox}),Object(b.jsx)(B,{plays:e.plays,addToLike:e.addToLike,removeFromLike:e.removeFromLike,updateCurrent:e.updateCurrent,matchesBoolean:i,sortTitle:function(){var t=e.plays.sort((function(e,t){var c=e.title.toLowerCase(),n=t.title.toLowerCase();return c<n?-1:c>n?1:0}));j(t),console.log(Object(l.a)(t))},sortYear:function(){var t=e.plays.sort((function(e,t){var c=parseInt(e.likelyDate,10),n=parseInt(t.likelyDate,10);return c<n?-1:c>n?1:0}));j(Object(l.a)(t))}})]})]})},F=function(e){return Object(b.jsxs)("div",{id:"favoriteItem",children:[Object(b.jsx)(h.c,{to:"/playDetails",children:Object(b.jsxs)("p",{onClick:function(){e.updateCurrent(e.play);var t="https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name="+e.play.id;fetch(t).then((function(e){return e.json()})).then((function(e){localStorage.setItem("playInfo",JSON.stringify(e))})),e.updateTab()},children:[" "," ",e.play.title," "," "]})}),Object(b.jsx)("button",{type:"button",id:"deleteButton",onClick:function(){e.removeFromLike(e.play),alert(e.play.title+" has been removed from favorite")},children:"Remove"})]})},L=function(e){return Object(b.jsxs)("div",{id:"favoritesBox",children:[Object(b.jsx)("h1",{children:"Favorites"}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{id:"favoritesList",children:e.plays.map((function(t,c){return Object(b.jsx)(F,{play:t,removeFromLike:e.removeFromLike,updateCurrent:e.updateCurrent,updateTab:e.updateTab},c)}))})]})},I=function(e){return Object(b.jsxs)("div",{className:"DetailsTab",children:[Object(b.jsx)("h1",{children:" Play Info "}),Object(b.jsxs)("p",{children:[" Likely date of composition: ",e.current.likelyDate]}),Object(b.jsxs)("p",{children:[" Genre: ",e.current.genre]}),Object(b.jsx)("h1",{children:" Web Links"}),Object(b.jsxs)("p",{children:[" Wiki Link: ",e.current.wiki]}),Object(b.jsxs)("p",{children:[" Gutenberg Link: ",e.current.gutenberg]}),Object(b.jsxs)("p",{children:[" Shakespear.org Link: ",e.current.shakespeareOrg]}),Object(b.jsx)("h1",{children:" Description "}),Object(b.jsxs)("p",{children:[" ",e.current.desc," "]})]})},N=function(e){var t=JSON.parse(localStorage.getItem("playInfo")).persona;return Object(b.jsx)("div",{className:"CharactersTab",children:t.map((function(e,t){return Object(b.jsxs)("div",{className:"allPlayers",children:[Object(b.jsxs)("p",{className:"position",children:["Position: ",e.position]},t),Object(b.jsxs)("p",{className:"player",children:[" ",e.player," "]},e.player),Object(b.jsxs)("p",{className:"desc",children:[" ",e.desc," "]},e.desc)]},t)}))})},P=c(23),A=c.n(P),_=function(e){return""===e.currentSpeaker?Object(b.jsxs)("div",{className:"TextTab",children:[Object(b.jsx)("h1",{children:e.playInfo.title}),Object(b.jsxs)("h2",{children:[" ",e.currentAct]}),Object(b.jsxs)("h3",{children:[" ",e.currentScene]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{id:"sceneSpeeches",children:e.playInfo.acts.map((function(t){if(t.name===e.currentAct)return t.scenes.map((function(t,c){if(t.name===e.currentScene)return Object(b.jsxs)("div",{id:"actSceneDirection",children:[Object(b.jsxs)("h4",{children:[" ",t.title," "]}),Object(b.jsxs)("h4",{children:[" ",t.stageDirection]})]},c)}))}))})]}):Object(b.jsxs)("div",{className:"TextTab",children:[Object(b.jsx)("h1",{children:e.playInfo.title}),Object(b.jsxs)("h2",{children:[" ",e.currentAct]}),Object(b.jsxs)("h3",{children:[" ",e.currentScene]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{id:"speakerSpeeches",children:e.playInfo.acts.map((function(t){if(t.name===e.currentAct)return t.scenes.map((function(t){if(t.name===e.currentScene)return t.speeches.map((function(t,c){if(t.speaker===e.currentSpeaker)return Object(b.jsxs)("div",{children:[Object(b.jsx)(A.a,{searchWords:[e.highlightedWord],textToHighlight:String(t.speaker)}),":",Object(b.jsx)("br",{}),Object(b.jsx)(A.a,{searchWords:[e.highlightedWord],textToHighlight:String(t.lines)}),Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{})]},c)}))}))}))})]})},E=function(e){return""===e.current.filename?Object(b.jsxs)("div",{className:"Tabs",children:[Object(b.jsx)("ul",{className:"nav",children:Object(b.jsx)("li",{className:"Details"===e.tab?"active":"",children:"Details"})}),Object(b.jsx)("div",{className:"outlet",children:Object(b.jsx)(I,{current:e.current})})]}):Object(b.jsxs)("div",{className:"Tabs",children:[Object(b.jsxs)("ul",{className:"nav",children:[Object(b.jsxs)("li",{className:"Details"===e.tab?"active":"",onClick:function(){e.tabIsText("Details")},children:[" ","Details"]}),Object(b.jsxs)("li",{className:"Characters"===e.tab?"active":"",onClick:function(){e.tabIsText("Characters")},children:[" ","Characters"]}),Object(b.jsxs)("li",{className:"Text"===e.tab?"active":"",onClick:function(){e.tabIsText("Text")},children:[" ","Text"]})]}),Object(b.jsxs)("div",{id:"tabHR",children:[" ",Object(b.jsx)("hr",{})," "]}),Object(b.jsx)("div",{className:"outlet",children:"Details"===e.tab?Object(b.jsx)(I,{current:e.current}):"Characters"===e.tab?Object(b.jsx)(N,{current:e.current}):"Text"===e.tab?Object(b.jsx)(_,{current:e.current,playInfo:JSON.parse(localStorage.getItem("playInfo")),currentAct:e.currentAct,currentScene:e.currentScene,currentSpeaker:e.currentSpeaker,highlightedWord:e.highlightedWord}):""})]})},H=(c(58),function(e){var t=Object(r.useState)("Details"),c=Object(u.a)(t,2),n=c[0],a=c[1],i=Object(r.useState)("ACT I"),s=Object(u.a)(i,2),l=s[0],o=s[1],p=Object(r.useState)("SCENE I"),x=Object(u.a)(p,2),O=x[0],f=x[1],v=Object(r.useState)(""),y=Object(u.a)(v,2),g=y[0],k=y[1],C=Object(r.useState)(""),w=Object(u.a)(C,2),S=w[0],B=w[1],T=function(e){a(e)},D=function(){a("Details")},F=function(){e.addToLike(e.current)};Object(r.useEffect)((function(e){var t=function(){var t=Object(j.a)(d.a.mark((function t(){var c,n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c="https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name="+e.current.id,t.next=4,fetch(c);case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,localStorage.setItem("playInfo",JSON.stringify(r)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var I=function(){e.updateFaveBox(),e.updateIsChecked()};if("Text"===n){var N=[];return N=JSON.parse(localStorage.getItem("playInfo")),Object(b.jsxs)("div",{className:"playDetailsPage",children:[Object(b.jsx)(m,{}),Object(b.jsxs)("div",{id:"playDetailsBox",children:[e.showFavorites&&!1===e.isChecked?Object(b.jsx)("div",{id:"detailsFavoriteList",children:Object(b.jsx)(L,{plays:e.likedPlays,removeFromLike:e.removeFromLike,updateCurrent:e.updateCurrent,updateTab:D})}):Object(b.jsx)("div",{id:"hiddenFaveBox",children:" "}),Object(b.jsxs)("div",{id:"playTitleBox",children:[Object(b.jsxs)("div",{id:"checkAndTitle",children:[Object(b.jsxs)("div",{id:"checkBoxDiv",children:[" ",Object(b.jsx)("input",{type:"checkbox",className:"checkboxFave",onChange:I})," "]}),Object(b.jsx)("h1",{id:"playTitle",children:e.current.title})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{id:"formBox",children:[Object(b.jsxs)("form",{id:"textFilterBox",children:[Object(b.jsx)("select",{name:"act",id:"act",onChange:function(e){console.log(e.target.value),o(e.target.value)},children:N.acts.map((function(e){return Object(b.jsxs)("option",{value:e.name,children:[" ",e.name," "]},e.name)}))}),Object(b.jsx)("select",{name:"scene",id:"scene",onChange:function(e){console.log(e.target.value),f(e.target.value)},children:N.acts.map((function(e){if(e.name===l)return e.scenes.map((function(e){return Object(b.jsxs)("option",{value:e.name,children:[" ",e.name," "]},e.name)}))}))})]}),Object(b.jsxs)("form",{className:"playerSearch",children:[Object(b.jsxs)("select",{name:"speaker",id:"speaker",onChange:function(e){""!==e.target.value&&"clear"!==e.target.value?(console.log(e.target.value),k(e.target.value)):"clear"===e.target.value&&(k(""),console.log("Search is cleared --\x3e"+e.target.value))},children:[Object(b.jsx)("option",{value:"",children:" Choose Player Here "}),N.persona.map((function(e){return Object(b.jsxs)("option",{value:e.player,children:[" ",e.player," "]},e.player)})),Object(b.jsx)("option",{value:"clear",children:" CLEAR SEARCH "})]}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"highlightedWord",type:"text",name:"name",onChange:function(e){console.log(e.target.value),B(e.target.value)}})]})]}),Object(b.jsxs)("div",{id:"textPlayDetailsButtons",children:[Object(b.jsx)(h.c,{to:{pathname:"/default",state:{filters:e.filters}},children:Object(b.jsx)("button",{type:"button",id:"closeButton",children:" Close "})}),Object(b.jsx)("button",{onClick:F,id:"likeButton",children:" \u2764 "})]})]}),Object(b.jsx)("div",{id:"tabsBox",children:Object(b.jsx)(E,{current:e.current,tab:n,tabIsText:T,currentAct:l,currentScene:O,currentSpeaker:g,highlightedWord:S})})]})]})}return Object(b.jsxs)("div",{className:"playDetailsPage",children:[Object(b.jsx)(m,{}),Object(b.jsxs)("div",{id:"playDetailsBox",children:[e.showFavorites&&!1===e.isChecked?Object(b.jsx)("div",{id:"detailsFavoriteList",children:Object(b.jsx)(L,{plays:e.likedPlays,removeFromLike:e.removeFromLike,updateCurrent:e.updateCurrent,updateTab:D})}):Object(b.jsx)("div",{id:"hiddenFaveBox",children:" "}),Object(b.jsxs)("div",{id:"playTitleBox",children:[Object(b.jsxs)("div",{id:"checkAndTitle",children:[Object(b.jsxs)("div",{id:"checkBoxDiv",children:[" ",Object(b.jsx)("input",{type:"checkbox",className:"checkboxFave",onChange:I})," "]}),Object(b.jsx)("h1",{id:"playTitle",children:e.current.title})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{id:"playSummaryBox",children:[Object(b.jsx)("div",{id:"synopsisBox",children:e.current.synopsis}),Object(b.jsxs)("div",{id:"playDetailsButtons",children:[Object(b.jsx)(h.c,{to:{pathname:"/default",state:{filters:e.filters}},children:Object(b.jsx)("button",{type:"button",id:"closeButton",children:" Close "})}),Object(b.jsx)("button",{onClick:F,id:"likeButton",children:" \u2764 "})]})]})]}),Object(b.jsx)("div",{id:"tabsBox",children:Object(b.jsx)(E,{current:e.current,tab:n,tabIsText:T,currentAct:l,currentScene:O,currentSpeaker:g,highlightedWord:S})})]})]})});var J=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)([]),i=Object(u.a)(a,2),s=i[0],o=i[1],p=Object(r.useState)([]),O=Object(u.a)(p,2),f=O[0],m=O[1],v=Object(r.useState)([]),y=Object(u.a)(v,2),g=y[0],k=y[1],C=Object(r.useState)(!1),w=Object(u.a)(C,2),S=w[0],B=w[1],F=Object(r.useState)(!0),L=Object(u.a)(F,2),I=L[0],N=L[1];Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php",e.next=4,fetch("https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,localStorage.setItem("playData",JSON.stringify(c)),n(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();null==localStorage.getItem("playData")?e():n(JSON.parse(localStorage.getItem("playData")))}),[]);var P=function(e){var t=Object(l.a)(f);t.find((function(t){return t.title===e.title}))?console.log("already in list"):(t.push(e),m(t))},A=function(e){var t=Object(l.a)(f),c=t.indexOf(e);t.splice(c,1),m(t)},_=function(e){k(e)},E=function(){B(!S)},J=function(){N(!I)};return Object(b.jsx)("main",{children:Object(b.jsxs)(h.b,{basename:"/",children:[Object(b.jsx)(T.a,{path:"/",exact:!0,component:x}),Object(b.jsx)(T.a,{path:"/home",exact:!0,component:x}),Object(b.jsxs)(T.a,{path:"/default",children:[Object(b.jsx)(D,{mainData:c,setFilteredData:o,plays:s,likedPlays:f,addToLike:P,removeFromLike:A,updateCurrent:_,current:g,isChecked:S,updateIsChecked:E,showFavorites:I,updateFaveBox:J}),";"]}),Object(b.jsx)(T.a,{path:"/playDetails",children:Object(b.jsx)(H,{plays:c,likedPlays:f,addToLike:P,removeFromLike:A,current:g,updateCurrent:_,filters:s,isChecked:S,updateIsChecked:E,showFavorites:I,updateFaveBox:J})})]})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(h.a,{children:Object(b.jsx)(J,{})})}),document.getElementById("root")),W()}},[[59,1,2]]]);
//# sourceMappingURL=main.3c8f397f.chunk.js.map