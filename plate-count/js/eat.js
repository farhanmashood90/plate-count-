/* ==========================================================
   EAT TAB
   Calories left, add food (food + how many + unit), today's log, plates, water advice, supplement ideas.
   ========================================================== */
function eat(){
  const t=T(),k=S.log.reduce((a,e)=>a+e.k,0),p=r1(S.log.reduce((a,e)=>a+e.p,0)),left=t.k-k;
  $("sk").textContent=Math.abs(Math.round(left));$("sk").className=left<0?"over":"";$("skl").textContent="kcal "+(left<0?"over":"left");
  $("sp").textContent=p;$("spl").textContent="of "+t.p+" g protein";
  
  $("pb").style.width=Math.min(100,p/t.p*100)+"%";water(t);
  // search results: shows the protein for the amount you type (e.g. 4 pieces of egg)
  const q=$("q").value.trim().toLowerCase(),match=f=>f[0].toLowerCase().includes(q);
  if($("u").value==="pc"&&q&&FOODS.some(match)&&!FOODS.find(match)[5]){$("u").value="g";$("a").value=100}  // best match has no piece size (chicken breast, paneer): switch to grams
  const pc=$("u").value==="pc",a=Math.max(0.5,+$("a").value||1);
  const list=FOODS.filter(f=>match(f)&&(!pc||f[5])).slice(0,q?20:8),ul=$("res");ul.innerHTML="";
  if(!list.length)ul.innerHTML='<div class="empty">No match. Try a simpler word like rice or egg.</div>';
  list.forEach(f=>{const g=pc?a*f[6]:a,s=scale(f,g),lab=pc?a+" "+plural(a,f[5]):a+" g",li=document.createElement("li");
    li.innerHTML='<div class="em">'+em(f[0])+'</div><div class="nm">'+f[0]+'<span>'+lab+' · '+s.k+' kcal · '+s.c+' g carbs · '+s.f+' g fat</span></div><div class="k">'+s.p+' g<small>protein</small></div>';
    const b=document.createElement("button");b.className="btn";b.textContent="Add";b.setAttribute("aria-label","Add "+lab+" "+f[0]);
    b.onclick=()=>add(s,lab);li.appendChild(b);ul.appendChild(li)});
  if(pc)ul.insertAdjacentHTML("beforeend",'<div class="empty">Pieces works for foods with a size, like egg, roti or banana. Switch the unit to grams for the rest.</div>');
  // log
  const lg=$("log");lg.innerHTML="";
  if(!S.log.length)lg.innerHTML='<div class="empty">Nothing logged yet. Add a food above.</div>';
  S.log.forEach((e,i)=>{const li=document.createElement("li");
    li.innerHTML='<div class="em">'+em(e.n)+'</div><div class="nm">'+e.n+'<span>'+(e.lab||e.g+" g")+' · '+e.p+' g protein</span></div><div class="k">'+e.k+'</div>';
    const b=document.createElement("button");b.className="btn g";b.textContent="Remove";b.setAttribute("aria-label","Remove "+e.n);
    b.onclick=()=>{S.log.splice(i,1);save();eat()};li.appendChild(b);lg.appendChild(li)});
}

["q","a"].forEach(i=>$(i).oninput=eat);
$("u").onchange=()=>{$("a").value=$("u").value==="pc"?1:100;eat()};
// Clear day: tap once, then tap again within 3 seconds. (No pop-up box, so it works everywhere.)
let clrTimer=0;
$("clr").onclick=()=>{const b=$("clr");
  if(!S.log.length){toast("Nothing to clear");return}
  if(b.dataset.arm){clearTimeout(clrTimer);delete b.dataset.arm;b.textContent="Clear day";b.classList.remove("on");S.log=[];save();eat();toast("Today\u2019s log cleared");return}
  b.dataset.arm=1;b.textContent="Tap again to clear";b.classList.add("on");
  clrTimer=setTimeout(()=>{delete b.dataset.arm;b.textContent="Clear day";b.classList.remove("on")},3000)};

// Water: just a recommended amount
function water(t){$("wv").style.transform="translateY(40px)";$("wn").textContent=(t.w/1000)+" L";
  $("wt").textContent="is a good amount for a day, about "+Math.ceil(t.w/250)+" glasses of 250 ml. Sip through the day, and drink more when you sweat or it’s hot.";
  const n=Math.ceil(t.w/250),g=$("gl");g.innerHTML="";for(let i=0;i<n;i++){const e=document.createElement("i");e.className="on";g.appendChild(e)}}

// Supplement ideas: a plain list
function sup(){const ul=$("sup");ul.innerHTML="";
  SUPS.forEach((x,i)=>{const li=document.createElement("li");li.innerHTML='<div class="em">'+x[1]+'</div><div class="nm">'+x[0]+'<span>'+x[2]+'</span></div>';
    ul.appendChild(li)})}

// Plates: quick meals with a plate counter (- 1 +). Half plates work too.
function plates(){const box=$("plates");box.innerHTML="";
  PLATES.forEach(p=>{const card=document.createElement("div");card.className="plate";let n=1;
    card.innerHTML='<div class="em">'+p[1]+'</div><div class="pn"><b>'+p[0]+'</b><span>'+p[6]+'</span></div><div class="pc"><button class="step" aria-label="Fewer plates">\u2212</button><b class="cnt">1</b><button class="step" aria-label="More plates">+</button></div><div class="pv"></div><button class="btn padd">Add</button>';
    const cnt=card.querySelector(".cnt"),pv=card.querySelector(".pv"),ab=card.querySelector(".padd"),st=card.querySelectorAll(".step");
    const lab=()=>n+(n===1?" plate":" plates");
    const show=()=>{cnt.textContent=n;ab.textContent="Add "+lab();pv.innerHTML="<b>"+Math.round(p[2]*n)+" kcal</b><span>"+r1(p[3]*n)+" g protein \u00b7 "+r1(p[4]*n)+" g carbs \u00b7 "+r1(p[5]*n)+" g fat</span>"};
    st[0].onclick=()=>{n=Math.max(0.5,n-0.5);show()};st[1].onclick=()=>{n=Math.min(10,n+0.5);show()};
    ab.onclick=()=>add({n:p[0],g:0,k:Math.round(p[2]*n),p:r1(p[3]*n),c:r1(p[4]*n),f:r1(p[5]*n)},lab());
    show();box.appendChild(card)})}
