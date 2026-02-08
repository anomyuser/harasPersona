import{c as r,r as d,j as e,b as f,k as v,C as j}from"./index-CzIweWNM.js";import{C as k}from"./chevron-up-F4zRenqr.js";/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],N=r("bug",w);/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],$=r("copy",C);/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],R=r("triangle-alert",M),A=({error:s,onClose:a,onOpenSettings:x})=>{const[l,n]=d.useState(!1),[o,b]=d.useState(!1);if(!s)return null;const t=s.message.includes("API Key")||s.message.includes("API key")||s.message.includes("403"),i=()=>{const m=`[HARAS PERSONA ERROR LOG]
Time: ${new Date().toISOString()}
Screen: ${s.screen||"Unknown"}
Message: ${s.message}`,h=s.functionName?`
Function: ${s.functionName}`:"",u=s.variables?`
Variables: ${JSON.stringify(s.variables,null,2)}`:"",y=s.rawLog?`

[RAW JSON LOG]
${s.rawLog}`:"",g=s.rawResponse?`

[RAW RESPONSE DATA]
${typeof s.rawResponse=="object"?JSON.stringify(s.rawResponse,null,2):s.rawResponse}`:"";return`${m}${h}${u}${y}${g}`},p=()=>{const c=i();navigator.clipboard.writeText(c),n(!0),setTimeout(()=>n(!1),2e3)};return e.jsxs("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-4",children:[e.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in",onClick:a}),e.jsxs("div",{className:"relative w-full max-w-lg glass-panel rounded-2xl shadow-2xl overflow-hidden animate-bounce-in border flex flex-col max-h-[90vh]",style:{backgroundColor:"var(--glass-bg)",borderColor:"var(--glass-border)"},children:[e.jsxs("div",{className:`p-6 flex flex-col items-center justify-center text-center border-b shrink-0 ${t?"bg-amber-500/10":"bg-rose-500/10"}`,style:{borderColor:"var(--glass-border)"},children:[e.jsx("div",{className:`p-4 rounded-full mb-4 ${t?"bg-amber-500/20 text-amber-500":"bg-rose-500/20 text-rose-500"}`,children:t?e.jsx(R,{size:32}):e.jsx(N,{size:32})}),e.jsx("h2",{className:"text-xl font-bold",style:{color:"var(--text-primary)"},children:t?"설정 확인 필요":"오류 발생"})]}),e.jsxs("div",{className:"p-6 space-y-4 overflow-y-auto custom-scrollbar",children:[e.jsx("p",{className:"text-center leading-relaxed opacity-90 font-medium",style:{color:"var(--text-primary)"},children:s.message}),!t&&e.jsxs("div",{className:"w-full",children:[e.jsxs("button",{onClick:()=>b(!o),className:"w-full flex items-center justify-between p-3 rounded-lg bg-black/10 border border-white/5 text-xs font-bold opacity-70 hover:opacity-100 transition-all mb-2",style:{color:"var(--text-primary)"},children:[e.jsx("span",{children:"상세 로그 확인 (개발자용)"}),o?e.jsx(k,{size:14}):e.jsx(f,{size:14})]}),o&&e.jsx("div",{className:"text-[10px] p-3 rounded-lg border text-left font-mono break-all whitespace-pre-wrap opacity-80 overflow-x-auto max-h-48 custom-scrollbar bg-black/20",style:{borderColor:"var(--glass-border)",color:"var(--text-primary)"},children:i()})]})]}),e.jsx("div",{className:"p-4 border-t flex gap-3 shrink-0",style:{borderColor:"var(--glass-border)",backgroundColor:"rgba(0,0,0,0.02)"},children:t?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:a,className:"flex-1 py-3 rounded-xl border font-medium transition-colors hover:bg-black/5",style:{borderColor:"var(--glass-border)",color:"var(--text-primary)"},children:"닫기"}),e.jsxs("button",{onClick:()=>{a(),x()},className:"flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20",children:[e.jsx(v,{size:18})," 설정 열기"]})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:a,className:"flex-1 py-3 rounded-xl border font-medium transition-colors hover:bg-black/5",style:{borderColor:"var(--glass-border)",color:"var(--text-primary)"},children:"닫기"}),e.jsxs("button",{onClick:p,className:"flex-1 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-500/20",children:[l?e.jsx(j,{size:18}):e.jsx($,{size:18}),l?"복사 완료":"오류 내용 복사"]})]})})]})]})};export{A as default};
