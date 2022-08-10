import{az as ae,B as Z,f as h,E as ye,D as Re,o as R,g as M,m as C,y as Me,x as $e,F as fe,v as De,s as q,t as ne,i as H,p as au}from"./index.433ccf37.js";function Y(e){return[null,void 0,!1].indexOf(e)!==-1}function Ne(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return t?String(e).toLowerCase().trim():String(e).normalize("NFD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50]|\uD804[\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g,"").toLowerCase().trim()}function Ae(e){return(Ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function He(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(j){return Object.getOwnPropertyDescriptor(e,j).enumerable})),a.push.apply(a,l)}return a}function Ge(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?He(Object(a),!0).forEach(function(l){K(e,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):He(Object(a)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))})}return e}function K(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function lu(e,t,a){var l=ae(e),j=l.options,O=l.mode,i=l.trackBy,I=l.limit,A=l.hideSelected,E=l.createTag,ee=l.createOption,x=l.label,P=l.appendNewTag,k=l.appendNewOption,d=l.multipleLabel,s=l.object,f=l.loading,D=l.delay,n=l.resolveOnLoad,v=l.minChars,g=l.filterResults,F=l.clearOnSearch,B=l.clearOnSelect,c=l.valueProp,re=l.canDeselect,G=l.max,J=l.strict,U=l.closeOnSelect,y=l.groups,T=(l.groupLabel,l.groupOptions),le=l.groupHideEmpty,ce=l.groupSelect,p=a.iv,_=a.ev,S=a.search,V=a.clearSearch,W=a.update,Q=a.pointer,$=a.clearPointer,ie=a.blur,Se=a.focus,Oe=a.deactivate,ge=Z([]),X=Z([]),ue=Z(!1),be=h(function(){return E.value||ee.value||!1}),ve=h(function(){return P.value!==void 0?P.value:k.value===void 0||k.value}),z=h(function(){if(y.value){var u=X.value||[],r=[];return u.forEach(function(L){we(L[T.value]).forEach(function(w){r.push(Object.assign({},w,L.disabled?{disabled:!0}:{}))})}),r}var m=we(X.value||[]);return ge.value.length&&(m=m.concat(ge.value)),m}),o=h(function(){return y.value?tu((X.value||[]).map(function(u){var r,m=we(u[T.value]);return Ge(Ge({},u),{},(K(r={group:!0},T.value,ke(m,!1).map(function(L){return Object.assign({},L,u.disabled?{disabled:!0}:{})})),K(r,"__VISIBLE__",ke(m).map(function(L){return Object.assign({},L,u.disabled?{disabled:!0}:{})})),r))})):[]}),b=h(function(){var u=z.value;return Ee.value.length&&(u=Ee.value.concat(u)),u=ke(u),I.value>0&&(u=u.slice(0,I.value)),u}),N=h(function(){switch(O.value){case"single":return!Y(p.value[c.value]);case"multiple":case"tags":return!Y(p.value)&&p.value.length>0}}),me=h(function(){return d!==void 0&&d.value!==void 0?d.value(p.value):p.value&&p.value.length>1?"".concat(p.value.length," options selected"):"1 option selected"}),We=h(function(){return!z.value.length&&!ue.value&&!Ee.value.length}),ze=h(function(){return z.value.length>0&&b.value.length==0&&(S.value&&y.value||!y.value)}),Ee=h(function(){var u;return be.value!==!1&&S.value?Ze(S.value)!==-1?[]:[(u={},K(u,c.value,S.value),K(u,x.value,S.value),K(u,he.value,S.value),u)]:[]}),he=h(function(){return i.value||x.value}),Je=h(function(){switch(O.value){case"single":return null;case"multiple":case"tags":return[]}}),Qe=h(function(){return f.value||ue.value}),pe=function(u){switch(Ae(u)!=="object"&&(u=te(u)),O.value){case"single":W(u);break;case"multiple":case"tags":W(p.value.concat(u))}t.emit("select",Ie(u),u)},de=function(u){switch(Ae(u)!=="object"&&(u=te(u)),O.value){case"single":Ve();break;case"tags":case"multiple":W(Array.isArray(u)?p.value.filter(function(r){return u.map(function(m){return m[c.value]}).indexOf(r[c.value])===-1}):p.value.filter(function(r){return r[c.value]!=u[c.value]}))}t.emit("deselect",Ie(u),u)},Ie=function(u){return s.value?u:u[c.value]},_e=function(u){de(u)},Ve=function(){t.emit("clear"),W(Je.value)},oe=function(u){if(u.group!==void 0)return O.value!=="single"&&Ye(u[T.value])&&u[T.value].length;switch(O.value){case"single":return!Y(p.value)&&p.value[c.value]==u[c.value];case"tags":case"multiple":return!Y(p.value)&&p.value.map(function(r){return r[c.value]}).indexOf(u[c.value])!==-1}},Be=function(u){return u.disabled===!0},Le=function(){return!(G===void 0||G.value===-1||!N.value&&G.value>0)&&p.value.length>=G.value},Pe=function(u){te(u[c.value])===void 0&&be.value&&(t.emit("tag",u[c.value]),t.emit("option",u[c.value]),ve.value&&uu(u),V())},Xe=function(u){return u.find(function(r){return!oe(r)&&!r.disabled})===void 0},Ye=function(u){return u.find(function(r){return!oe(r)})===void 0},te=function(u){return z.value[z.value.map(function(r){return String(r[c.value])}).indexOf(String(u))]},Ze=function(u){return z.value.map(function(r){return r[he.value]}).indexOf(u)},eu=function(u){return["tags","multiple"].indexOf(O.value)!==-1&&A.value&&oe(u)},uu=function(u){ge.value.push(u)},tu=function(u){return le.value?u.filter(function(r){return S.value?r.__VISIBLE__.length:r[T.value].length}):u.filter(function(r){return!S.value||r.__VISIBLE__.length})},ke=function(u){var r=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],m=u;return S.value&&g.value&&(m=m.filter(function(L){return Ne(L[he.value],J.value).indexOf(Ne(S.value,J.value))!==-1})),A.value&&r&&(m=m.filter(function(L){return!eu(L)})),m},we=function(u){var r,m=u;return r=m,Object.prototype.toString.call(r)==="[object Object]"&&(m=Object.keys(m).map(function(L){var w,se=m[L];return K(w={},c.value,L),K(w,he.value,se),K(w,x.value,se),w})),m=m.map(function(L){var w;return Ae(L)==="object"?L:(K(w={},c.value,L),K(w,he.value,L),K(w,x.value,L),w)})},Fe=function(){Y(_.value)||(p.value=Ce(_.value))},qe=function(u){ue.value=!0,j.value(S.value).then(function(r){X.value=r,typeof u=="function"&&u(r),ue.value=!1})},Ce=function(u){return Y(u)?O.value==="single"?{}:[]:s.value?u:O.value==="single"?te(u)||{}:u.filter(function(r){return!!te(r)}).map(function(r){return te(r)})};if(O.value!=="single"&&!Y(_.value)&&!Array.isArray(_.value))throw new Error('v-model must be an array when using "'.concat(O.value,'" mode'));return j&&typeof j.value=="function"?n.value?qe(Fe):s.value==1&&Fe():(X.value=j.value,Fe()),D.value>-1&&ye(S,function(u){u.length<v.value||(ue.value=!0,F.value&&(X.value=[]),setTimeout(function(){u==S.value&&j.value(S.value).then(function(r){u!=S.value&&S.value||(X.value=r,Q.value=b.value.filter(function(m){return m.disabled!==!0})[0]||null,ue.value=!1)})},D.value))},{flush:"sync"}),ye(_,function(u){var r,m,L;if(Y(u))p.value=Ce(u);else switch(O.value){case"single":(s.value?u[c.value]!=p.value[c.value]:u!=p.value[c.value])&&(p.value=Ce(u));break;case"multiple":case"tags":r=s.value?u.map(function(w){return w[c.value]}):u,m=p.value.map(function(w){return w[c.value]}),L=m.slice().sort(),r.length===m.length&&r.slice().sort().every(function(w,se){return w===L[se]})||(p.value=Ce(u))}},{deep:!0}),typeof e.options!="function"&&ye(j,function(u,r){X.value=e.options,Object.keys(p.value).length||Fe(),function(){if(N.value)if(O.value==="single"){var m=te(p.value[c.value])[x.value];p.value[x.value]=m,s.value&&(_.value[x.value]=m)}else p.value.forEach(function(L,w){var se=te(p.value[w][c.value])[x.value];p.value[w][x.value]=se,s.value&&(_.value[w][x.value]=se)})}()}),{fo:b,filteredOptions:b,hasSelected:N,multipleLabelText:me,eo:z,extendedOptions:z,fg:o,filteredGroups:o,noOptions:We,noResults:ze,resolving:ue,busy:Qe,select:pe,deselect:de,remove:_e,selectAll:function(){O.value!=="single"&&pe(b.value)},clear:Ve,isSelected:oe,isDisabled:Be,isMax:Le,getOption:te,handleOptionClick:function(u){if(!Be(u)){switch(O.value){case"single":if(oe(u))return void(re.value&&de(u));Pe(u),ie(),pe(u);break;case"multiple":if(oe(u))return void de(u);if(Le())return;Pe(u),pe(u),B.value&&V(),A.value&&$(),U.value&&ie();break;case"tags":if(oe(u))return void de(u);if(Le())return;Pe(u),B.value&&V(),pe(u),A.value&&$(),U.value&&ie()}U.value?Oe():Se()}},handleGroupClick:function(u){if(!Be(u)&&O.value!=="single"&&ce.value){switch(O.value){case"multiple":case"tags":Xe(u[T.value])?de(u[T.value]):pe(u[T.value].filter(function(r){return p.value.map(function(m){return m[c.value]}).indexOf(r[c.value])===-1}).filter(function(r){return!r.disabled}).filter(function(r,m){return p.value.length+1+m<=G.value||G.value===-1}))}U.value&&Oe()}},handleTagRemove:function(u,r){r.button===0?_e(u):r.preventDefault()},refreshOptions:function(u){qe(u)},resolveOptions:qe}}function xe(e){return function(t){if(Array.isArray(t))return Te(t)}(e)||function(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(t,a){if(!!t){if(typeof t=="string")return Te(t,a);var l=Object.prototype.toString.call(t).slice(8,-1);if(l==="Object"&&t.constructor&&(l=t.constructor.name),l==="Map"||l==="Set")return Array.from(t);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return Te(t,a)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Te(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function nu(e){return function(t){if(Array.isArray(t))return je(t)}(e)||function(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(t,a){if(!!t){if(typeof t=="string")return je(t,a);var l=Object.prototype.toString.call(t).slice(8,-1);if(l==="Object"&&t.constructor&&(l=t.constructor.name),l==="Map"||l==="Set")return Array.from(t);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return je(t,a)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function je(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function Ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(j){return Object.getOwnPropertyDescriptor(e,j).enumerable})),a.push.apply(a,l)}return a}function ru(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function iu(e,t,a){var l=ae(e),j=l.classes,O=l.disabled,i=l.openDirection,I=l.showOptions,A=a.isOpen,E=a.isPointed,ee=a.isSelected,x=a.isDisabled,P=a.isActive,k=a.canPointGroups,d=a.resolving,s=a.fo,f=h(function(){return function(n){for(var v=1;v<arguments.length;v++){var g=arguments[v]!=null?arguments[v]:{};v%2?Ke(Object(g),!0).forEach(function(F){ru(n,F,g[F])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(g)):Ke(Object(g)).forEach(function(F){Object.defineProperty(n,F,Object.getOwnPropertyDescriptor(g,F))})}return n}({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer"},j.value)}),D=h(function(){return!!(A.value&&I.value&&(!d.value||d.value&&s.value.length))});return{classList:h(function(){var n=f.value;return{container:[n.container].concat(O.value?n.containerDisabled:[]).concat(D.value&&i.value==="top"?n.containerOpenTop:[]).concat(D.value&&i.value!=="top"?n.containerOpen:[]).concat(P.value?n.containerActive:[]),spacer:n.spacer,singleLabel:n.singleLabel,singleLabelText:n.singleLabelText,multipleLabel:n.multipleLabel,search:n.search,tags:n.tags,tag:[n.tag].concat(O.value?n.tagDisabled:[]),tagRemove:n.tagRemove,tagRemoveIcon:n.tagRemoveIcon,tagsSearchWrapper:n.tagsSearchWrapper,tagsSearch:n.tagsSearch,tagsSearchCopy:n.tagsSearchCopy,placeholder:n.placeholder,caret:[n.caret].concat(A.value?n.caretOpen:[]),clear:n.clear,clearIcon:n.clearIcon,spinner:n.spinner,dropdown:[n.dropdown].concat(i.value==="top"?n.dropdownTop:[]).concat(A.value&&I.value&&D.value?[]:n.dropdownHidden),options:[n.options].concat(i.value==="top"?n.optionsTop:[]),group:n.group,groupLabel:function(v){var g=[n.groupLabel];return E(v)?g.push(ee(v)?n.groupLabelSelectedPointed:n.groupLabelPointed):ee(v)&&k.value?g.push(x(v)?n.groupLabelSelectedDisabled:n.groupLabelSelected):x(v)&&g.push(n.groupLabelDisabled),k.value&&g.push(n.groupLabelPointable),g},groupOptions:n.groupOptions,option:function(v,g){var F=[n.option];return E(v)?F.push(ee(v)?n.optionSelectedPointed:n.optionPointed):ee(v)?F.push(x(v)?n.optionSelectedDisabled:n.optionSelected):(x(v)||g&&x(g))&&F.push(n.optionDisabled),F},noOptions:n.noOptions,noResults:n.noResults,fakeInput:n.fakeInput}}),showDropdown:D}}var Ue={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:[Object],default:()=>({})}},setup(e,t){const a=function(P,k){var d=ae(P),s=d.value,f=d.modelValue,D=d.mode,n=d.valueProp,v=Z(D.value!=="single"?[]:{}),g=k.expose!==void 0?f:s,F=h(function(){return D.value==="single"?v.value[n.value]:v.value.map(function(c){return c[n.value]})}),B=h(function(){return D.value!=="single"?v.value.map(function(c){return c[n.value]}).join(","):v.value[n.value]});return{iv:v,internalValue:v,ev:g,externalValue:g,textValue:B,plainValue:F}}(e,t),l=function(P,k,d){var s=ae(P),f=s.groupSelect,D=s.mode,n=s.groups,v=Z(null),g=function(F){F===void 0||F!==null&&F.disabled||n.value&&F&&F.group&&(D.value==="single"||!f.value)||(v.value=F)};return{pointer:v,setPointer:g,clearPointer:function(){g(null)}}}(e),j=function(P,k,d){var s=ae(P).disabled,f=Z(!1);return{isOpen:f,open:function(){f.value||s.value||(f.value=!0,k.emit("open"))},close:function(){f.value&&(f.value=!1,k.emit("close"))}}}(e,t),O=function(P,k,d){var s=Z(null),f=Z(null);return ye(s,function(D){k.emit("search-change",D)}),{search:s,input:f,clearSearch:function(){s.value=""},handleSearchInput:function(D){s.value=D.target.value},handlePaste:function(D){k.emit("paste",D)}}}(0,t),i=function(P,k,d){var s=ae(P),f=s.object,D=s.valueProp,n=s.mode,v=d.iv,g=function(B){return f.value||Y(B)?B:Array.isArray(B)?B.map(function(c){return c[D.value]}):B[D.value]},F=function(B){return Y(B)?n.value==="single"?{}:[]:B};return{update:function(B){v.value=F(B);var c=g(B);k.emit("change",c),k.emit("input",c),k.emit("update:modelValue",c)}}}(e,t,{iv:a.iv}),I=function(P,k,d){var s=ae(P),f=s.searchable,D=s.disabled,n=d.input,v=d.open,g=d.close,F=d.clearSearch,B=Z(null),c=Z(!1),re=h(function(){return f.value||D.value?-1:0}),G=function(){f.value&&n.value.blur(),B.value.blur()},J=function(){f.value&&!D.value&&n.value.focus()},U=function(){c.value=!1,setTimeout(function(){c.value||(g(),F())},1)};return{multiselect:B,tabindex:re,isActive:c,blur:G,focus:J,handleFocus:function(){J()},activate:function(){D.value||(c.value=!0,v())},deactivate:U,handleCaretClick:function(){U(),G()}}}(e,0,{input:O.input,open:j.open,close:j.close,clearSearch:O.clearSearch}),A=lu(e,t,{ev:a.ev,iv:a.iv,search:O.search,clearSearch:O.clearSearch,update:i.update,pointer:l.pointer,clearPointer:l.clearPointer,blur:I.blur,focus:I.focus,deactivate:I.deactivate}),E=function(P,k,d){var s=ae(P),f=s.valueProp,D=s.showOptions,n=s.searchable,v=s.groupLabel,g=s.groups,F=s.mode,B=s.groupSelect,c=d.fo,re=d.fg,G=d.handleOptionClick,J=d.handleGroupClick,U=d.search,y=d.pointer,T=d.setPointer,le=d.clearPointer,ce=d.multiselect,p=h(function(){return c.value.filter(function(o){return!o.disabled})}),_=h(function(){return re.value.filter(function(o){return!o.disabled})}),S=h(function(){return F.value!=="single"&&B.value}),V=h(function(){return y.value&&y.value.group}),W=h(function(){return ve(y.value)}),Q=h(function(){var o=V.value?y.value:ve(y.value),b=_.value.map(function(me){return me[v.value]}).indexOf(o[v.value]),N=_.value[b-1];return N===void 0&&(N=ie.value),N}),$=h(function(){var o=_.value.map(function(b){return b.label}).indexOf(V.value?y.value[v.value]:ve(y.value)[v.value])+1;return _.value.length<=o&&(o=0),_.value[o]}),ie=h(function(){return xe(_.value).slice(-1)[0]}),Se=h(function(){return y.value.__VISIBLE__.filter(function(o){return!o.disabled})[0]}),Oe=h(function(){var o=W.value.__VISIBLE__.filter(function(b){return!b.disabled});return o[o.map(function(b){return b[f.value]}).indexOf(y.value[f.value])-1]}),ge=h(function(){var o=ve(y.value).__VISIBLE__.filter(function(b){return!b.disabled});return o[o.map(function(b){return b[f.value]}).indexOf(y.value[f.value])+1]}),X=h(function(){return xe(Q.value.__VISIBLE__.filter(function(o){return!o.disabled})).slice(-1)[0]}),ue=h(function(){return xe(ie.value.__VISIBLE__.filter(function(o){return!o.disabled})).slice(-1)[0]}),be=function(){T(p.value[0]||null)},ve=function(o){return _.value.find(function(b){return b.__VISIBLE__.map(function(N){return N[f.value]}).indexOf(o[f.value])!==-1})},z=function(){var o=ce.value.querySelector("[data-pointed]");if(o){var b=o.parentElement.parentElement;g.value&&(b=V.value?o.parentElement.parentElement.parentElement:o.parentElement.parentElement.parentElement.parentElement),o.offsetTop+o.offsetHeight>b.clientHeight+b.scrollTop&&(b.scrollTop=o.offsetTop+o.offsetHeight-b.clientHeight),o.offsetTop<b.scrollTop&&(b.scrollTop=o.offsetTop)}};return ye(U,function(o){n.value&&(o.length&&D.value?be():le())}),{pointer:y,canPointGroups:S,isPointed:function(o){return!(!y.value||!(!o.group&&y.value[f.value]==o[f.value]||o.group!==void 0&&y.value[v.value]==o[v.value]))||void 0},setPointerFirst:be,selectPointer:function(){y.value&&y.value.disabled!==!0&&(V.value?J(y.value):G(y.value))},forwardPointer:function(){if(y.value===null)T((g.value&&S.value?_.value[0]:p.value[0])||null);else if(g.value&&S.value){var o=V.value?Se.value:ge.value;o===void 0&&(o=$.value),T(o||null)}else{var b=p.value.map(function(N){return N[f.value]}).indexOf(y.value[f.value])+1;p.value.length<=b&&(b=0),T(p.value[b]||null)}Re(function(){z()})},backwardPointer:function(){if(y.value===null){var o=p.value[p.value.length-1];g.value&&S.value&&(o=ue.value)===void 0&&(o=ie.value),T(o||null)}else if(g.value&&S.value){var b=V.value?X.value:Oe.value;b===void 0&&(b=V.value?Q.value:W.value),T(b||null)}else{var N=p.value.map(function(me){return me[f.value]}).indexOf(y.value[f.value])-1;N<0&&(N=p.value.length-1),T(p.value[N]||null)}Re(function(){z()})}}}(e,0,{fo:A.fo,fg:A.fg,handleOptionClick:A.handleOptionClick,handleGroupClick:A.handleGroupClick,search:O.search,pointer:l.pointer,setPointer:l.setPointer,clearPointer:l.clearPointer,multiselect:I.multiselect}),ee=function(P,k,d){var s=ae(P),f=s.mode,D=s.addTagOn,n=s.openDirection,v=s.searchable,g=s.showOptions,F=s.valueProp,B=s.groups,c=s.addOptionOn,re=s.createTag,G=s.createOption,J=d.iv,U=d.update,y=d.search,T=d.setPointer,le=d.selectPointer,ce=d.backwardPointer,p=d.forwardPointer,_=d.blur,S=d.fo,V=h(function(){return re.value||G.value||!1}),W=h(function(){return D.value!==void 0?D.value:c.value!==void 0?c.value:["enter"]}),Q=function(){f.value==="tags"&&!g.value&&V.value&&v.value&&!B.value&&T(S.value[S.value.map(function($){return $[F.value]}).indexOf(y.value)])};return{handleKeydown:function($){switch($.key){case"Backspace":if(f.value==="single"||v.value&&[null,""].indexOf(y.value)===-1||J.value.length===0)return;U(nu(J.value).slice(0,-1));break;case"Enter":if($.preventDefault(),W.value.indexOf("enter")===-1&&V.value)return;Q(),le();break;case" ":if(!V.value&&!v.value)return $.preventDefault(),Q(),void le();if(!V.value)return!1;if(W.value.indexOf("space")===-1&&V.value)return;$.preventDefault(),Q(),le();break;case"Tab":case";":case",":if(W.value.indexOf($.key.toLowerCase())===-1||!V.value)return;Q(),le(),$.preventDefault();break;case"Escape":_();break;case"ArrowUp":if($.preventDefault(),!g.value)return;n.value==="top"?p():ce();break;case"ArrowDown":if($.preventDefault(),!g.value)return;n.value==="top"?ce():p()}},preparePointer:Q}}(e,0,{iv:a.iv,update:i.update,search:O.search,setPointer:l.setPointer,selectPointer:E.selectPointer,backwardPointer:E.backwardPointer,forwardPointer:E.forwardPointer,blur:I.blur,fo:A.fo}),x=iu(e,0,{isOpen:j.isOpen,isPointed:E.isPointed,canPointGroups:E.canPointGroups,isSelected:A.isSelected,isDisabled:A.isDisabled,isActive:I.isActive,resolving:A.resolving,fo:A.fo});return{...a,...j,...I,...l,...i,...O,...A,...E,...ee,...x}}};Ue.render=function(e,t,a,l,j,O){return R(),M("div",{ref:"multiselect",tabindex:e.tabindex,class:e.classList.container,id:a.id,onFocusin:t[7]||(t[7]=(...i)=>e.activate&&e.activate(...i)),onFocusout:t[8]||(t[8]=(...i)=>e.deactivate&&e.deactivate(...i)),onKeydown:t[9]||(t[9]=(...i)=>e.handleKeydown&&e.handleKeydown(...i)),onFocus:t[10]||(t[10]=(...i)=>e.handleFocus&&e.handleFocus(...i))},[C(" Search "),a.mode!=="tags"&&a.searchable&&!a.disabled?(R(),M("input",Me({key:0,type:a.inputType,modelValue:e.search,value:e.search,class:e.classList.search,autocomplete:a.autocomplete},a.attrs,{onInput:t[1]||(t[1]=(...i)=>e.handleSearchInput&&e.handleSearchInput(...i)),onPaste:t[2]||(t[2]=$e((...i)=>e.handlePaste&&e.handlePaste(...i),["stop"])),ref:"input"}),null,16,["type","modelValue","value","autocomplete"])):C("v-if",!0),C(" Tags (with search) "),a.mode=="tags"?(R(),M("div",{key:1,class:e.classList.tags},[(R(!0),M(fe,null,De(e.iv,(i,I,A)=>H(e.$slots,"tag",{option:i,handleTagRemove:e.handleTagRemove,disabled:a.disabled},()=>[(R(),M("span",{class:e.classList.tag,key:A},[au(ne(i[a.label])+" ",1),a.disabled?C("v-if",!0):(R(),M("span",{key:0,class:e.classList.tagRemove,onClick:E=>e.handleTagRemove(i,E)},[q("span",{class:e.classList.tagRemoveIcon},null,2)],10,["onClick"]))],2))])),256)),q("div",{class:e.classList.tagsSearchWrapper},[C(" Used for measuring search width "),q("span",{class:e.classList.tagsSearchCopy},ne(e.search),3),C(" Actual search input "),a.searchable&&!a.disabled?(R(),M("input",Me({key:0,type:a.inputType,modelValue:e.search,value:e.search,class:e.classList.tagsSearch,autocomplete:a.autocomplete},a.attrs,{onInput:t[3]||(t[3]=(...i)=>e.handleSearchInput&&e.handleSearchInput(...i)),onPaste:t[4]||(t[4]=$e((...i)=>e.handlePaste&&e.handlePaste(...i),["stop"])),ref:"input"}),null,16,["type","modelValue","value","autocomplete"])):C("v-if",!0)],2)],2)):C("v-if",!0),C(" Single label "),a.mode=="single"&&e.hasSelected&&!e.search&&e.iv?H(e.$slots,"singlelabel",{key:2,value:e.iv},()=>[q("div",{class:e.classList.singleLabel},[q("span",{class:e.classList.singleLabelText},ne(e.iv[a.label]),3)],2)]):C("v-if",!0),C(" Multiple label "),a.mode=="multiple"&&e.hasSelected&&!e.search?H(e.$slots,"multiplelabel",{key:3,values:e.iv},()=>[q("div",{class:e.classList.multipleLabel},ne(e.multipleLabelText),3)]):C("v-if",!0),C(" Placeholder "),!a.placeholder||e.hasSelected||e.search?C("v-if",!0):H(e.$slots,"placeholder",{key:4},()=>[q("div",{class:e.classList.placeholder},ne(a.placeholder),3)]),C(" Spinner "),e.busy&&e.isActive?H(e.$slots,"spinner",{key:5},()=>[q("span",{class:e.classList.spinner},null,2)]):C("v-if",!0),C(" Clear "),e.hasSelected&&!a.disabled&&a.canClear&&!e.busy?H(e.$slots,"clear",{key:6,clear:e.clear},()=>[q("span",{class:e.classList.clear,onMousedown:t[5]||(t[5]=(...i)=>e.clear&&e.clear(...i))},[q("span",{class:e.classList.clearIcon},null,2)],34)]):C("v-if",!0),C(" Caret "),a.caret&&a.showOptions?H(e.$slots,"caret",{key:7},()=>[q("span",{class:e.classList.caret,onClick:t[6]||(t[6]=(...i)=>e.handleCaretClick&&e.handleCaretClick(...i))},null,2)]):C("v-if",!0),C(" Options "),q("div",{class:e.classList.dropdown,tabindex:"-1"},[H(e.$slots,"beforelist",{options:e.fo}),q("ul",{class:e.classList.options},[a.groups?(R(!0),M(fe,{key:0},De(e.fg,(i,I,A)=>(R(),M("li",{class:e.classList.group,key:A},[q("div",{class:e.classList.groupLabel(i),"data-pointed":e.isPointed(i),onMouseenter:E=>e.setPointer(i),onClick:E=>e.handleGroupClick(i)},[H(e.$slots,"grouplabel",{group:i},()=>[q("span",null,ne(i[a.groupLabel]),1)])],42,["data-pointed","onMouseenter","onClick"]),q("ul",{class:e.classList.groupOptions},[(R(!0),M(fe,null,De(i.__VISIBLE__,(E,ee,x)=>(R(),M("li",{class:e.classList.option(E,i),key:x,"data-pointed":e.isPointed(E),onMouseenter:P=>e.setPointer(E),onClick:P=>e.handleOptionClick(E)},[H(e.$slots,"option",{option:E,search:e.search},()=>[q("span",null,ne(E[a.label]),1)])],42,["data-pointed","onMouseenter","onClick"]))),128))],2)],2))),128)):(R(!0),M(fe,{key:1},De(e.fo,(i,I,A)=>(R(),M("li",{class:e.classList.option(i),key:A,"data-pointed":e.isPointed(i),onMouseenter:E=>e.setPointer(i),onClick:E=>e.handleOptionClick(i)},[H(e.$slots,"option",{option:i,search:e.search},()=>[q("span",null,ne(i[a.label]),1)])],42,["data-pointed","onMouseenter","onClick"]))),128))],2),e.noOptions?H(e.$slots,"nooptions",{key:0},()=>[q("div",{class:e.classList.noOptions,innerHTML:a.noOptionsText},null,10,["innerHTML"])]):C("v-if",!0),e.noResults?H(e.$slots,"noresults",{key:1},()=>[q("div",{class:e.classList.noResults,innerHTML:a.noResultsText},null,10,["innerHTML"])]):C("v-if",!0),H(e.$slots,"afterlist",{options:e.fo})],2),C(" Hacky input element to show HTML5 required warning "),a.required?(R(),M("input",{key:8,class:e.classList.fakeInput,tabindex:"-1",value:e.textValue,required:""},null,10,["value"])):C("v-if",!0),C(" Native input support "),a.nativeSupport?(R(),M(fe,{key:9},[a.mode=="single"?(R(),M("input",{key:0,type:"hidden",name:a.name,value:e.plainValue!==void 0?e.plainValue:""},null,8,["name","value"])):(R(!0),M(fe,{key:1},De(e.plainValue,(i,I)=>(R(),M("input",{type:"hidden",name:`${a.name}[]`,value:i,key:I},null,8,["name","value"]))),128))],64)):C("v-if",!0),C(" Create height for empty input "),q("div",{class:e.classList.spacer},null,2)],42,["tabindex","id"])},Ue.__file="src/Multiselect.vue";export{Ue as default};
