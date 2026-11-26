/* ==========================================================
   CORE
   Shared helpers, saved state (localStorage) and the calorie/protein target formulas.
   ========================================================== */
const $=id=>document.getElementById(id), r1=n=>Math.round(n*10)/10;
let tt;
const em=n=>EMO[n]||"🍽️";
const plural=(n,w)=>n>1?(/(s|sh|ch|x)$/.test(w)?w+'es':w+'s'):w;
let S={w:"",h:"",age:"",sex:"m",act:"1.55",goal:"keep",water:0,log:[],done:{},day:0,mode:"walk"};
try{const o=JSON.parse(localStorage.getItem("pc2")||"null");if(o&&Array.isArray(o.log))S=Object.assign(S,o)}catch(e){}
const save=()=>{try{localStorage.setItem("pc2",JSON.stringify(S))}catch(e){}};

function T(goal){goal=goal||S.goal;const w=+S.w,h=+S.h,a=+S.age;if(!(w>0))return{k:2200,p:120,c:240,f:70,w:2500,own:false};
  const full=h>0&&a>0;let tdee=w*31;if(full)tdee=(10*w+6.25*h-5*a+(S.sex==="f"?-161:5))*(+S.act||1.55);
  const adj=goal==="cut"?-450:goal==="bulk"?300:0,fl=S.sex==="f"?1200:1500,k=Math.max(fl,Math.round((tdee+adj)/10)*10),p=Math.round(w*(goal==="cut"?2:1.8)),f=Math.round(w*.8),c=Math.max(0,Math.round((k-p*4-f*9)/4));
  return{k,p,c,f,w:Math.round(w*35/50)*50,own:true,tdee:Math.round(tdee/10)*10,full}}

function scale(f,g){const m=g/100;return{n:f[0],g:r1(g),k:Math.round(f[1]*m),p:r1(f[2]*m),c:r1(f[3]*m),f:r1(f[4]*m)}}

function toast(m){const e=$("toast");e.textContent=m;e.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>e.classList.remove("on"),1800)}
function add(s,lab){const t=T(),b=S.log.reduce((a,e)=>a+e.p,0);S.log.push(Object.assign(s,{lab}));save();eat();toast(b<t.p&&b+s.p>=t.p?"Protein goal hit. Strong.":"Added "+s.k+" kcal")}
