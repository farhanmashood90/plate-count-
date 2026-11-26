/* ==========================================================
   CARDIO TAB
   Burn calculator: treadmill walk/run, elliptical, bike.
   ========================================================== */
const MODES=[["walk","Walk","tm"],["run","Run","tm"],["ell","Elliptical","el"],["cyc","Bike","bk"]];
function perMin(m,v,inc,w){let o;
  if(m==="walk"){const s=v*1000/60;o=.1*s+1.8*s*inc/100+3.5}
  else if(m==="run"){const s=v*1000/60;o=.2*s+.9*s*inc/100+3.5}
  else o=(m==="ell"?5:7.5)*3.5;
  return o*w/1000*5}
function cardio(){
  const m=S.mode,w=+S.w>0?+S.w:70,v=+$("cs").value||0,inc=+$("ci").value||0,goal=+$("ck").value||0;
  const sp=m==="walk"||m==="run";$("ls").hidden=!sp;$("li").hidden=!sp;
  const km=perMin(m,v,inc,w);
  $("cm").textContent=goal>0&&km>0?Math.ceil(goal/km):"–";
  $("cl").textContent="minutes to burn "+goal+" kcal ("+r1(km)+" kcal a minute)";
  $("ct").innerHTML=[20,30,45,60].map(t=>'<tr><td>'+t+' min</td><td>'+Math.round(km*t)+' kcal</td><td>'+Math.round(km*t/7.7)+' g</td></tr>').join("");
  $("cn").textContent=(+S.w>0?"":"Using 70 kg until you add your weight above. ")+"Estimates can be off by 20% or more. Fat loss depends on your whole week’s calories, not one session. The walking formula is most accurate up to about 15% incline, so treat very steep settings as a rough guide.";
  const md=$("modes");md.innerHTML="";MODES.forEach(x=>{const b=document.createElement("button");b.className="card"+(x[0]===m?" on":"");b.innerHTML='<svg viewBox="0 0 80 56"><use href="#i-'+x[2]+'"/></svg>'+x[1];b.onclick=()=>{S.mode=x[0];save();cardio()};md.appendChild(b)});
}
["cs","ci","ck"].forEach(i=>$(i).oninput=cardio);
