/* ==========================================================
   TRAIN TAB
   Day buttons, body picture, exercise list, tap an exercise for tips and the animation.
   ========================================================== */
let sel=null;
function train(){
  const d=$("days");d.innerHTML="";
  PLAN.forEach((p,i)=>{const b=document.createElement("button");b.className="btn "+(i===S.day?"on":"g");b.textContent="Day "+(i+1);b.onclick=()=>{S.day=i;sel=null;save();train()};d.appendChild(b)});
  const p=PLAN[S.day],ul=$("ex");ul.innerHTML="";let n=0;if(!sel||!p[1].some(x=>x.startsWith(sel+"|")))sel=p[1][0].split("|")[0];const hot=sel&&EXD[sel]?EXD[sel][0]:HOT[S.day];document.querySelectorAll(".mu").forEach(e=>e.classList.toggle("hot",hot.includes(e.dataset.m)));
  $("dt").textContent="Day "+(S.day+1)+": "+p[0];
  p[1].forEach((x,i)=>{const[nm,sr]=x.split("|"),key=S.day+"-"+i,ok=!!S.done[key];if(ok)n++;
    const li=document.createElement("li");if(ok)li.className="done";
    li.innerHTML='<input type="checkbox" aria-label="Done: '+nm+'"'+(ok?" checked":"")+'><button class="ex" aria-label="How to do '+nm+'">'+nm+'</button><div class="k">'+sr+'</div>';
    li.firstChild.onchange=e=>{S.done[key]=e.target.checked;save();train()};li.querySelector(".ex").onclick=()=>{sel=nm;train()};if(sel===nm)li.className+=" sel";ul.appendChild(li)});
  const dv=$("exd");if(sel&&EXD[sel]){const e=EXD[sel],row=p[1].find(x=>x.startsWith(sel+"|"));dv.hidden=false;if(dv.dataset.n!==sel){dv.dataset.n=sel;startAnim(sel)}$("exi").innerHTML='<b>'+sel+'</b> <span style="color:var(--mute)">'+row.split("|")[1]+'</span><div class="chips">'+e[0].map(m=>'<span>'+ML[m]+'</span>').join("")+'</div><p>'+e[1]+'</p>'}else{dv.hidden=true;dv.dataset.n="";stopAnim()}
  $("dp").textContent=n===p[1].length?"Day complete. Rest well, eat well, come back stronger.":n+" of "+p[1].length+" done";
}
$("rst").onclick=()=>{PLAN[S.day][1].forEach((_,i)=>delete S.done[S.day+"-"+i]);save();train()};
