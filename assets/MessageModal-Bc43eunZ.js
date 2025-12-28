import{c as r,r as d,j as e}from"./index-C_wzGI65.js";import{C as y}from"./circle-check-PvNHOdUm.js";import{C as k}from"./circle-alert-GAaP9RL_.js";/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],f=r("circle-question-mark",v);/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],I=r("download",g);/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],x=r("info",j);/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],$=r("trash-2",N);/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],E=r("upload",M);/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],D=r("x",C),H=({isOpen:s,type:a,title:m,message:p,defaultValue:t="",confirmText:h="확인",cancelText:b="취소",onConfirm:l,onCancel:n})=>{const[o,i]=d.useState(t);if(d.useEffect(()=>{s&&i(t)},[s,t]),!s)return null;const u=()=>{switch(a){case"confirm":return e.jsx(f,{size:28,className:"text-indigo-500"});case"prompt":return e.jsx(x,{size:28,className:"text-amber-500"});case"error":return e.jsx(k,{size:28,className:"text-rose-500"});case"success":return e.jsx(y,{size:28,className:"text-emerald-500"});default:return e.jsx(x,{size:28,className:"text-indigo-500"})}};return e.jsxs("div",{className:"fixed inset-0 z-[1000] flex items-center justify-center p-4",children:[e.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-sm animate-fade-in",onClick:n}),e.jsxs("div",{className:"relative w-full max-w-sm glass-panel rounded-[2.5rem] shadow-2xl border animate-bounce-in flex flex-col overflow-hidden backdrop-blur-3xl",style:{borderColor:"var(--glass-border)",backgroundColor:"var(--glass-bg)"},children:[e.jsxs("div",{className:"p-8 flex flex-col items-center text-center space-y-4",children:[e.jsx("div",{className:"p-4 rounded-full bg-white/5 border border-white/5 mb-2",children:u()}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-xl font-black",style:{color:"var(--text-primary)"},children:m}),e.jsx("p",{className:"text-sm opacity-60 leading-relaxed whitespace-pre-wrap",style:{color:"var(--text-primary)"},children:p})]}),a==="prompt"&&e.jsx("input",{type:"text",autoFocus:!0,value:o,onChange:c=>i(c.target.value),onKeyDown:c=>c.key==="Enter"&&l(o),className:"w-full px-5 py-3 rounded-2xl bg-black/20 border outline-none focus:ring-2 focus:ring-indigo-500/50 mt-4 text-sm font-bold",style:{borderColor:"var(--glass-border)",color:"var(--text-primary)"}})]}),e.jsxs("div",{className:"flex border-t",style:{borderColor:"var(--glass-border)"},children:[(a==="confirm"||a==="prompt")&&e.jsx("button",{onClick:n,className:"flex-1 px-6 py-5 text-sm font-bold opacity-40 hover:opacity-100 hover:bg-black/5 transition-all border-r",style:{borderColor:"var(--glass-border)",color:"var(--text-primary)"},children:b}),e.jsx("button",{onClick:()=>l(o),className:"flex-1 px-6 py-5 text-sm font-black transition-all hover:bg-black/10 active:bg-black/20",style:{color:a==="error"?"#fb7185":"var(--accent-primary)",backgroundColor:"rgba(255,255,255,0.05)"},children:h})]})]})]})};export{f as C,I as D,x as I,H as M,$ as T,E as U,D as X};
