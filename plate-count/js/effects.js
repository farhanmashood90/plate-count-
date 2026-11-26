/* ==========================================================
   EFFECTS
   Motivation line, button ripple, cursor glow, title letters, number count-up.
   ========================================================== */
const MOT=["Show up today. That’s the hard part.","Small reps, repeated, build big change.","You don’t need a perfect day, just a done one.","Strong is built on the days you didn’t feel like it.","Eat to fuel the work. Train to earn the results.","One more glass of water, one more set.","Progress is quiet until it isn’t.","Be a little better than yesterday’s you.","Sweat now, thank yourself later.","Consistency beats intensity."];
let mi=Math.floor(Date.now()/864e5)%MOT.length;
$("mot").textContent=MOT[mi];$("mot").onclick=()=>{mi=(mi+1)%MOT.length;$("mot").textContent=MOT[mi]};
document.addEventListener("pointerdown",e=>{const t=e.target.closest(".btn,.tabs button,.card,.sx");if(!t)return;const r=t.getBoundingClientRect(),s=document.createElement("span");s.className="rip";s.style.left=e.clientX-r.left+"px";s.style.top=e.clientY-r.top+"px";t.appendChild(s);setTimeout(()=>s.remove(),600)});
const gl=document.querySelector(".bg b");let gx=0,gy=0,gp=0;document.addEventListener("pointermove",e=>{gx=e.clientX;gy=e.clientY;if(!gp){gp=1;requestAnimationFrame(()=>{gl.style.transform="translate3d("+gx+"px,"+gy+"px,0)";gp=0})}},{passive:true});
function countUp(n){document.querySelectorAll("#p-"+n+" .stat b").forEach(b=>{const v=parseFloat(b.textContent);if(isNaN(v)||!v)return;const t0=performance.now(),I=Number.isInteger(v),st=now=>{const k=Math.min(1,(now-t0)/700),e=1-Math.pow(1-k,3);b.textContent=I?Math.round(v*e):r1(v*e);if(k<1)requestAnimationFrame(st)};requestAnimationFrame(st)})}
(()=>{const h=document.querySelector("h1"),t=h.textContent;h.innerHTML="";h.setAttribute("aria-label",t);[...t].forEach((c,i)=>{const s=document.createElement("span");s.textContent=c===" "?"\u00a0":c;s.style.setProperty("--i",i);s.setAttribute("aria-hidden","true");h.appendChild(s)})})();
