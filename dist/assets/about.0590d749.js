import{A as h,r as q,bd as O,B as K,_ as S,C as Q,b4 as me,e as J,h as ae,a_ as j,D as te,I as ye,z as _e,N as ge,b as be,O as ve,bx as he,o as I,i as N,j as u,q as d,w as p,E as r,t as C,l as Le,m as Ce,v as ze,a3 as Ae,a1 as Te,a2 as Be,P as Oe}from"./index.9d6b139f.js";import{_ as Ve}from"./VFlexItem.vue_vue_type_style_index_0_lang.f670399a.js";import{_ as $e}from"./VTabs.vue_vue_type_script_setup_true_lang.46858856.js";import{C as Re,a as G,e as H}from"./editor-data.2eb59c5b.js";import{u as Pe}from"./viewWrapper.8bdd3f7c.js";import{u as Se,f as je}from"./index.06423138.js";import{_ as F}from"./VFlex.vue_vue_type_style_index_0_lang.c00db461.js";import"./VIcon.vue_vue_type_script_setup_true_lang.647f7f20.js";import"./vue.runtime.esm-bundler.cf96260d.js";const ne=(e,n)=>{let o;return function(...t){const f=this;o&&clearTimeout(o),o=setTimeout(()=>{e.apply(f,t),o=null},n)}},Ee=e=>!e||typeof e.charAt!="function"?e:e.charAt(0).toUpperCase()+e.slice(1),X=(e,n,o)=>{for(const t in o){const f="set"+Ee(t);e[f]?te(()=>o[t],(m,b)=>{e[f](m,b)}):n[f]&&te(()=>o[t],m=>{n[f](m)})}},Y=e=>{const n={};for(const o in e)if(o.startsWith("on")&&!o.startsWith("onUpdate")&&o!=="onReady"){const t=o.slice(2).toLocaleLowerCase();n[t]=e[o]}return n},we=async e=>{const n=await Promise.all([S(()=>import("./marker-icon-2x.bc1654a8.js"),[]),S(()=>import("./marker-icon.5b94b333.js"),[]),S(()=>import("./marker-shadow.e34cb95b.js"),[])]);delete e.Default.prototype._getIconUrl,e.Default.mergeOptions({iconRetinaUrl:n[0].default,iconUrl:n[1].default,shadowUrl:n[2].default})},D=e=>{const n=h(()=>console.warn(`Method ${e} has been invoked without being replaced`)),o=(...t)=>n.value(...t);return o.wrapped=n,O(e,o),o},k=(e,n)=>e.wrapped.value=n,w=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||void 0,ee="useGlobalLeaflet",oe={options:{type:Object,default:()=>({})}},le=e=>({options:e.options,methods:{}}),se={...oe,pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},ie=(e,n,o)=>{const t=j("addLayer"),f=j("removeLayer"),{options:m,methods:b}=le(e),y={...m,attribution:e.attribution,pane:e.pane},_=()=>t({leafletObject:n.value}),v=()=>f({leafletObject:n.value}),l={...b,setAttribution(c,$){this.$parent.leafletObject.attributionControl.removeAttribution($).addAttribution(c)},setName(){v(),e.visible&&_()},setLayerType(){v(),e.visible&&_()},setVisible(c){n.value&&(c?_():v())},bindPopup({leafletObject:c}){n.value.bindPopup(c)},bindTooltip({leafletObject:c}){n.value.bindTooltip(c)},unbindTooltip(){const c=n.value?n.value.getTooltip():null;c&&c.unbindTooltip()},unbindPopup(){const c=n.value?n.value.getPopup():null;c&&c.unbindPopup()},updateVisibleProp(c){o.emit("update:visible",c)}};return O("bindPopup",l.bindPopup),O("bindTooltip",l.bindTooltip),O("unbindTooltip",l.unbindTooltip),O("unbindPopup",l.unbindPopup),ye(()=>{l.unbindPopup(),l.unbindTooltip(),v()}),{options:y,methods:l}},Ue=(e,n)=>{if(e&&n.default)return ae("div",{style:{display:"none"}},n.default())},Ie={...se,pane:{type:String,default:"tilePane"},opacity:{type:Number,custom:!1,default:1},zIndex:{type:Number,default:1},tileSize:{type:Number,default:256},noWrap:{type:Boolean,default:!1},minZoom:{type:Number,default:0},maxZoom:{type:Number,default:void 0}},Ne=(e,n,o)=>{const{options:t,methods:f}=ie(e,n,o);return{options:{...t,pane:e.pane,opacity:e.opacity,zIndex:e.zIndex,tileSize:e.tileSize,noWrap:e.noWrap,minZoom:e.minZoom,maxZoom:e.maxZoom},methods:{...f}}};var de={emits:["ready","update:zoom","update:center","update:bounds"],props:{...oe,center:{type:[Object,Array],default:()=>[0,0]},bounds:{type:[Array,Object],default:void 0},maxBounds:{type:[Array,Object],default:void 0},zoom:{type:Number,default:0},minZoom:{type:Number,default:void 0},maxZoom:{type:Number,default:void 0},paddingBottomRight:{type:Array,default:void 0},paddingTopLeft:{type:Array,default:void 0},padding:{type:Array,default:void 0},worldCopyJump:{type:Boolean,default:!1},crs:{type:[String,Object],default:"EPSG3857"},maxBoundsViscosity:{type:Number,default:void 0},inertia:{type:Boolean,default:void 0},inertiaDeceleration:{type:Number,default:void 0},inertiaMaxSpeed:{type:Number,default:void 0},easeLinearity:{type:Number,default:void 0},zoomAnimation:{type:Boolean,default:void 0},zoomAnimationThreshold:{type:Number,default:void 0},fadeAnimation:{type:Boolean,default:void 0},markerZoomAnimation:{type:Boolean,default:void 0},noBlockingAnimations:{type:Boolean,default:!1},useGlobalLeaflet:{type:Boolean,default:!1}},setup(e,n){const o=h(null),t=q({ready:!1,leafletRef:{},layersToAdd:[],layersInControl:[]}),{options:f}=le(e),m={...f,minZoom:e.minZoom,maxZoom:e.maxZoom,maxBounds:e.maxBounds,maxBoundsViscosity:e.maxBoundsViscosity,worldCopyJump:e.worldCopyJump,crs:e.crs,center:e.center,zoom:e.zoom,inertia:e.inertia,inertiaDeceleration:e.inertiaDeceleration,inertiaMaxSpeed:e.inertiaMaxSpeed,easeLinearity:e.easeLinearity,zoomAnimation:e.zoomAnimation,zoomAnimationThreshold:e.zoomAnimationThreshold,fadeAnimation:e.fadeAnimation,markerZoomAnimation:e.markerZoomAnimation},b=D("addLayer"),y=D("removeLayer"),_=D("registerControl"),v=D("registerLayerControl");O(ee,e.useGlobalLeaflet);const l={moveEndHandler(){n.emit("update:zoom",t.leafletRef.getZoom()),n.emit("update:center",t.leafletRef.getCenter()),n.emit("update:bounds",t.leafletRef.getBounds())},overlayAddHandler(A){const L=t.layersInControl.find(T=>T.name===A.name);L&&L.updateVisibleProp(!0)},overlayRemoveHandler(A){const L=t.layersInControl.find(T=>T.name===A.name);L&&L.updateVisibleProp(!1)}};K(async()=>{e.useGlobalLeaflet&&(w.L=w.L||await S(()=>import("./leaflet-src.f679cc9a.js").then(s=>s.l),["assets/leaflet-src.f679cc9a.js","assets/index.9d6b139f.js","assets/index.a260d743.css"]));const{map:A,CRS:L,Icon:T,latLngBounds:B,latLng:x,DomEvent:M}=e.useGlobalLeaflet?w.L:await S(()=>import("./leaflet-src.esm.357055dc.js"),[]);try{m.beforeMapMount&&await m.beforeMapMount()}catch(s){console.error(`The following error occurred running the provided beforeMapMount hook ${s.message}`)}await we(T);const U=typeof m.crs=="string"?L[m.crs]:m.crs;m.crs=U||L.EPSG3857;const R={addLayer(s){s.layerType!==void 0&&(t.layerControl===void 0?t.layersToAdd.push(s):t.layersInControl.find(i=>i.leafletObject._leaflet_id===s.leafletObject._leaflet_id)||(t.layerControl.addLayer(s),t.layersInControl.push(s))),s.visible!==!1&&t.leafletRef.addLayer(s.leafletObject)},removeLayer(s){s.layerType!==void 0&&(t.layerControl===void 0?t.layersToAdd=t.layersToAdd.filter(a=>a.name!==s.name):(t.layerControl.removeLayer(s.leafletObject),t.layersInControl=t.layersInControl.filter(a=>a.leafletObject._leaflet_id!==s.leafletObject._leaflet_id))),t.leafletRef.removeLayer(s.leafletObject)},registerLayerControl(s){t.layerControl=s,t.layersToAdd.forEach(a=>{t.layerControl.addLayer(a)}),t.layersToAdd=[],_(s)},registerControl(s){t.leafletRef.addControl(s.leafletObject)},setZoom(s){const a=t.leafletRef.getZoom();s!==a&&t.leafletRef.setZoom(s,{animate:e.noBlockingAnimations?!1:null})},setPaddingBottomRight(s){t.paddingBottomRight=s},setPaddingTopLeft(s){t.paddingTopLeft=s},setPadding(s){t.padding=s},setCrs(s){const a=t.leafletRef.getBounds();t.leafletRef.options.crs=s,t.leafletRef.fitBounds(a,{animate:!1,padding:[0,0]})},fitBounds(s){t.leafletRef.fitBounds(s,{animate:this.noBlockingAnimations?!1:null})},setBounds(s){if(!s)return;const a=B(s);if(!a.isValid())return;!(t.lastSetBounds||t.leafletRef.getBounds()).equals(a,0)&&(t.lastSetBounds=a,t.leafletRef.fitBounds(a,this.fitBoundsOptions))},setCenter(s){if(s==null)return;const a=x(s),i=t.lastSetCenter||t.leafletRef.getCenter();(i.lat!==a.lat||i.lng!==a.lng)&&(t.lastSetCenter=a,t.leafletRef.panTo(a,{animate:this.noBlockingAnimations?!1:null}))}};k(b,R.addLayer),k(y,R.removeLayer),k(_,R.registerControl),k(v,R.registerLayerControl),t.leafletRef=A(o.value,m),X(R,t.leafletRef,e);const Z=Y(n.attrs);t.leafletRef.on("moveend",ne(l.moveEndHandler,100)),t.leafletRef.on("overlayadd",l.overlayAddHandler),t.leafletRef.on("overlayremove",l.overlayRemoveHandler),M.on(t.leafletRef,Z),t.ready=!0,Q(()=>n.emit("ready",t.leafletRef))}),me(()=>{t.leafletRef&&t.leafletRef.remove()});const c=J(()=>t.leafletRef),$=J(()=>t.ready);return{root:o,ready:$,leafletObject:c}},render(){return ae("div",{style:{width:"100%",height:"100%"},ref:"root"},this.ready?this.$slots.default():{})}};de.__file="src/components/LMap.vue";const De={...se,pane:{type:String,default:"markerPane"},draggable:{type:Boolean,custom:!0,default:!1},latLng:{type:[Object,Array],custom:!0,default:null},icon:{type:[Object],default:()=>{},custom:!1},zIndexOffset:{type:Number,custom:!1,default:null}},ke=(e,n,o)=>{const{options:t,methods:f}=ie(e,n,o),m={...t,...e},b={...f,setDraggable(y){n.value.dragging&&(y?n.value.dragging.enable():n.value.dragging.disable())},latLngSync(y){o.emit("update:latLng",y.latlng),o.emit("update:lat-lng",y.latlng)},setLatLng(y){if(y!=null&&n.value){const _=n.value.getLatLng();(!_||!_.equals(y))&&n.value.setLatLng(y)}}};return{options:m,methods:b}};var re={name:"LMarker",props:De,setup(e,n){const o=h({}),t=h(!1),f=j(ee),m=j("addLayer");O("canSetParentHtml",()=>!!o.value.getElement()),O("setParentHtml",_=>o.value.getElement().innerHTML=_),O("setIcon",_=>o.value.setIcon&&o.value.setIcon(_));const{options:b,methods:y}=ke(e,o,n);return b.icon===void 0&&delete b.icon,K(async()=>{const{marker:_,DomEvent:v}=f?w.L:await S(()=>import("./leaflet-src.esm.357055dc.js"),[]);o.value=_(e.latLng,b);const l=Y(n.attrs);v.on(o.value,l),o.value.on("move",ne(y.latLngSync,100)),X(y,o.value,e),m({...e,...y,leafletObject:o.value}),t.value=!0,Q(()=>n.emit("ready",o.value))}),{ready:t,leafletObject:o}},render(){return Ue(this.ready,this.$slots)}};re.__file="src/components/LMarker.vue";const ue={...Ie,tms:{type:Boolean,default:!1},subdomains:{type:String,default:"abc"},detectRetina:{type:Boolean,default:!1},url:{type:String,default:null}},xe=(e,n)=>{const{options:o,methods:t}=Ne(e,n);return{options:{...o,tms:e.tms,subdomains:e.subdomains,detectRetina:e.detectRetina},methods:{...t}}};var ce={props:ue,setup(e,n){const o=h({}),t=j(ee),f=j("addLayer"),{options:m,methods:b}=xe(e,o);return K(async()=>{const{tileLayer:y,DomEvent:_}=t?w.L:await S(()=>import("./leaflet-src.esm.357055dc.js"),[]);o.value=y(e.url,m);const v=Y(n.attrs);_.on(o.value,v),X(b,o.value,e),f({...e,...b,leafletObject:o.value}),Q(()=>n.emit("ready",o.value))}),{leafletObject:o}},render(){return null}};ce.__file="src/components/LTileLayer.vue";({...ue});const Me=["onSubmit"],Ze={class:"container is-fluid"},We={class:"columns"},Ge={class:"column is-8"},He={key:0,class:"columns is-multiline pt-5"},Fe={class:"column is-12"},qe={class:"help has-text-danger"},Je={class:"help has-text-danger"},Ke={class:"help has-text-danger"},Qe={key:1,class:"columns is-multiline pt-5"},Xe={class:"column is-12"},Ye={class:"help has-text-danger"},et={class:"help has-text-danger"},tt={class:"help has-text-danger"},at={key:2,class:"columns is-multiline pt-5"},nt={class:"column is-12"},ot={class:"help has-text-danger"},lt={class:"help has-text-danger"},st={class:"help has-text-danger"},it=u("div",{class:"is-divider"},null,-1),dt={class:"column is-4"},rt={class:"file"},ut={class:"file-label"},ct={class:"file-cta"},pt=u("span",{class:"file-icon"},[u("i",{class:"fas fa-cloud-upload-alt"})],-1),ft={class:"file-label"},mt=["src"],yt=u("div",{class:"is-divider my-5"},null,-1),_t={class:"file"},gt={class:"file-label"},bt={class:"file-cta"},vt=u("span",{class:"file-icon"},[u("i",{class:"fas fa-cloud-upload-alt"})],-1),ht={class:"file-label"},Lt=["src"],Pt=_e({async setup(e){let n,o;const{t}=ge(),f=be();Pe().setPageTitle(t("About_page_form")),ve({title:J(()=>t("About_page_form"))});const b=h("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),y=h(15),_=Re.component,v=h(!1),l=q({name:{uz:"",ru:"",en:""},description:{uz:"",ru:"",en:""},address:{uz:"",ru:"",en:""},logo:null,image:null,point_x:41.2543754,point_y:69.1679692}),c=q({["name.uz"]:[],["name.ru"]:[],["name.en"]:[],["description.uz"]:[],["description.ru"]:[],["description.en"]:[],["address.uz"]:[],["address.ru"]:[],["address.en"]:[],logo:[],image:[],point_x:[],point_y:[]}),$=h([]),A=h(""),L=h([]),T=h(""),B=h([41.2543754,69.1679692]);[n,o]=he(()=>M()),await n,o();function x(){Object.assign(c,{["name.uz"]:[],["description.uz"]:[],["address.uz"]:[],["name.ru"]:[],["description.ru"]:[],["address.ru"]:[],["name.en"]:[],["description.en"]:[],["address.en"]:[],logo:[],image:[],point_x:[],point_y:[]})}async function M(){const a=await je();await Object.assign(l,a),A.value=a.logo,T.value=a.image,a.point_y&&a.point_y&&(B.value=[a.point_x,a.point_y])}async function U(){try{v.value=!0,x();const a=new FormData;a.append("name[uz]",l.name.uz),a.append("name[ru]",l.name.ru),a.append("name[en]",l.name.en),a.append("description[uz]",l.description.uz),a.append("description[ru]",l.description.ru),a.append("description[en]",l.description.en),a.append("address[uz]",l.address.uz),a.append("address[ru]",l.address.ru),a.append("address[en]",l.address.en),a.append("logo",$.value.length?$.value[0]:""),a.append("image",L.value.length?L.value[0]:""),a.append("point_x",B.value[0]),a.append("point_y",B.value[1]);const i=await Se(a);Object.assign(l,i),f.success(`${t("Updated_successfully")}`)}catch(a){Object.assign(c,a.response?.data?.errors),f.error(`Error while updating data: ${a.message}`)}finally{v.value=!1}}function R(a){const i=a.target;i.files?.length&&(A.value=URL.createObjectURL(i.files[0]),$.value=[i.files[0]])}function Z(a){const i=a.target;i.files?.length&&(T.value=URL.createObjectURL(i.files[0]),L.value=[i.files[0]])}function s(a){const i=a.target.getLatLng();console.log("lat: ",i.lat),console.log("lng: ",i.lng),B.value[0]=i.lat,B.value[1]=i.lng}return(a,i)=>{const P=Ae,V=Te,z=Be,pe=$e,W=Ve,fe=Oe;return I(),N("form",{id:"role-form",class:"modal-form",onSubmit:ze(U,["prevent"])},[u("div",Ze,[u("div",We,[u("div",Ge,[d(pe,{type:"boxed",selected:"uz",tabs:[{label:a.$t("Uzbek"),value:"uz"},{label:a.$t("Russian"),value:"ru"},{label:a.$t("English"),value:"en"}]},{tab:p(({activeValue:E})=>[E==="uz"?(I(),N("div",He,[u("div",Fe,[d(z,{label:a.$t("Name"),required:""},{default:p(()=>[d(V,null,{default:p(()=>[d(P,{type:"text",placeholder:a.$t("Type_name_uz"),modelValue:r(l).name.uz,"onUpdate:modelValue":i[0]||(i[0]=g=>r(l).name.uz=g)},null,8,["placeholder","modelValue"]),u("p",qe,C(r(c)["name.uz"][0]),1)]),_:1})]),_:1},8,["label"]),d(z,{label:a.$t("Address"),required:""},{default:p(()=>[d(V,null,{default:p(()=>[d(P,{type:"text",placeholder:a.$t("Type_address"),modelValue:r(l).address.uz,"onUpdate:modelValue":i[1]||(i[1]=g=>r(l).address.uz=g)},null,8,["placeholder","modelValue"]),u("p",Je,C(r(c)["address.uz"][0]),1)]),_:1})]),_:1},8,["label"]),d(z,{label:a.$t("Description"),required:""},{default:p(()=>[d(r(_),{modelValue:r(l).description.uz,"onUpdate:modelValue":i[2]||(i[2]=g=>r(l).description.uz=g),editor:r(G),config:r(H)},null,8,["modelValue","editor","config"]),u("p",Ke,C(r(c)["description.uz"][0]),1)]),_:1},8,["label"])])])):E==="ru"?(I(),N("div",Qe,[u("div",Xe,[d(z,{label:a.$t("Name")},{default:p(()=>[d(V,null,{default:p(()=>[d(P,{type:"text",placeholder:a.$t("Type_name"),modelValue:r(l).name.ru,"onUpdate:modelValue":i[3]||(i[3]=g=>r(l).name.ru=g)},null,8,["placeholder","modelValue"]),u("p",Ye,C(r(c)["name.ru"][0]),1)]),_:1})]),_:1},8,["label"]),d(z,{label:a.$t("Address")},{default:p(()=>[d(V,null,{default:p(()=>[d(P,{type:"text",placeholder:a.$t("Type_address"),modelValue:r(l).address.ru,"onUpdate:modelValue":i[4]||(i[4]=g=>r(l).address.ru=g)},null,8,["placeholder","modelValue"]),u("p",et,C(r(c)["address.ru"][0]),1)]),_:1})]),_:1},8,["label"]),d(z,{label:a.$t("Description")},{default:p(()=>[d(r(_),{modelValue:r(l).description.ru,"onUpdate:modelValue":i[5]||(i[5]=g=>r(l).description.ru=g),editor:r(G),config:r(H)},null,8,["modelValue","editor","config"]),u("p",tt,C(r(c)["description.ru"][0]),1)]),_:1},8,["label"])])])):E==="en"?(I(),N("div",at,[u("div",nt,[d(z,{label:a.$t("Name")},{default:p(()=>[d(V,null,{default:p(()=>[d(P,{type:"text",placeholder:a.$t("Type_name"),modelValue:r(l).name.en,"onUpdate:modelValue":i[6]||(i[6]=g=>r(l).name.en=g)},null,8,["placeholder","modelValue"]),u("p",ot,C(r(c)["name.en"][0]),1)]),_:1})]),_:1},8,["label"]),d(z,{label:a.$t("Address")},{default:p(()=>[d(V,null,{default:p(()=>[d(P,{type:"text",placeholder:a.$t("Type_address"),modelValue:r(l).address.en,"onUpdate:modelValue":i[7]||(i[7]=g=>r(l).address.en=g)},null,8,["placeholder","modelValue"]),u("p",lt,C(r(c)["address.en"][0]),1)]),_:1})]),_:1},8,["label"]),d(z,{label:a.$t("Description")},{default:p(()=>[d(r(_),{modelValue:r(l).description.en,"onUpdate:modelValue":i[8]||(i[8]=g=>r(l).description.en=g),editor:r(G),config:r(H)},null,8,["modelValue","editor","config"]),u("p",st,C(r(c)["description.en"][0]),1)]),_:1},8,["label"])])])):Le("",!0)]),_:1},8,["tabs"]),it,d(F,null,{default:p(()=>[d(W,{style:{width:"100%"}},{default:p(()=>[d(r(de),{id:"map",zoom:y.value,"onUpdate:zoom":i[9]||(i[9]=E=>y.value=E),center:B.value},{default:p(()=>[d(r(ce),{url:b.value,"layer-type":"base",name:"OpenStreetMap",attribution:""},null,8,["url"]),d(r(re),{"lat-lng":B.value,draggable:"",onMoveend:s},null,8,["lat-lng"])]),_:1},8,["zoom","center"])]),_:1})]),_:1})]),u("div",dt,[d(F,{"flex-direction":"column"},{default:p(()=>[d(W,{"align-self":"center"},{default:p(()=>[d(z,{grouped:""},{default:p(()=>[d(V,null,{default:p(()=>[u("div",rt,[u("label",ut,[u("input",{class:"file-input",type:"file",name:"logo",onChange:R},null,32),u("span",ct,[pt,u("span",ft,C(a.$t("Choose_a_logo")),1)])])])]),_:1})]),_:1}),u("img",{src:A.value,alt:"",width:"150"},null,8,mt)]),_:1}),yt,d(W,{"align-self":"center"},{default:p(()=>[d(z,{grouped:""},{default:p(()=>[d(V,null,{default:p(()=>[u("div",_t,[u("label",gt,[u("input",{class:"file-input",type:"file",name:"image",onChange:Z},null,32),u("span",bt,[vt,u("span",ht,C(a.$t("Choose_an_image")),1)])])])]),_:1})]),_:1}),u("img",{src:T.value,alt:""},null,8,Lt)]),_:1})]),_:1})])]),d(F,null,{default:p(()=>[d(fe,{class:"ml-auto",loading:v.value,color:"primary",outlined:"",type:"submit",disabled:v.value,onClick:U},{default:p(()=>[Ce(C(a.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1})])],40,Me)}}});export{Pt as default};
