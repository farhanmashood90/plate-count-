/* ==========================================================
   PLAN TAB
   Food plans for losing weight, staying the same or building muscle: calories, protein, carbs, fat and a sample day.
   ========================================================== */
function items(m,fac){return MEALS[m][1].map(x=>{const f=FOODS.find(y=>y[0]===x[0]);if(!f[5]){const a=Math.max(5,Math.round(x[1]*fac/5)*5);return{f,g:a,lab:a+" g"}}
  const n=Math.max(.5,Math.round(x[1]*fac*2)/2);return{f,g:n*f[6],lab:n+" "+plural(n,f[5])}})}
const PGOALS=[["cut","Lose weight"],["keep","Stay the same"],["bulk","Build muscle"]];
function plan(){
  const g=S.pg||"cut",t=T(g),a=+S.age,box=$("meals");box.innerHTML="";
  const pg=$("pgoals");pg.innerHTML="";PGOALS.forEach(x=>{const b=document.createElement("button");b.className="btn "+(x[0]===g?"on":"g");b.textContent=x[1];b.onclick=()=>{S.pg=x[0];save();plan()};pg.appendChild(b)});
  $("pst").innerHTML=[[t.k,"kcal a day"],[t.p,"g protein"],[t.c,"g carbs"],[t.f,"g fat"]].map(x=>'<div class="stat"><b>'+x[0]+'</b><span>'+x[1]+'</span></div>').join("");
  if(a>0&&a<18){$("pn").textContent="These plan numbers are for adults 18 and over. Please talk to a doctor or coach for a plan that suits your age.";$("pst").innerHTML="";return}
  const GN={cut:"you burn about "+t.tdee+" kcal a day, so eating "+t.k+" puts you roughly 450 below that, around 0.4 kg a week.",keep:"you burn about "+t.tdee+" kcal a day, so eating about "+t.k+" keeps your weight steady.",bulk:"you burn about "+t.tdee+" kcal a day, so eating "+t.k+" is roughly 300 above that, enough to build muscle with little fat gain. Train hard and add weight when every rep feels clean."};
  $("pn").textContent=(t.own?"Estimate: "+GN[g]+" ":"Add your weight in the top box for numbers that fit you. ")+(t.full?"":"Add height and age too for a closer estimate. ")+"Protein is "+(g==="cut"?2:1.8)+" g per kg, fat 0.8 g per kg, and carbs fill the rest. The sample day below is scaled to your calories, so swap in foods you like.";
  const base=MEALS.flatMap(m=>m[1]).reduce((s,x)=>{const f=FOODS.find(y=>y[0]===x[0]);return s+f[1]*(f[5]?x[1]*f[6]:x[1])/100},0),fac=t.k/base;
  MEALS.forEach((m,mi2)=>{const it=items(mi2,fac),tot=it.reduce((s,x)=>{const c=scale(x.f,x.g);return{k:s.k+c.k,p:s.p+c.p}},{k:0,p:0});
    const wrap=document.createElement("div");wrap.className="meal";const h=document.createElement("h3");h.textContent=m[0]+" · "+tot.k+" kcal, "+r1(tot.p)+" g protein";wrap.appendChild(h);
    const ul=document.createElement("ul");it.forEach(x=>{const c=scale(x.f,x.g),li=document.createElement("li");li.innerHTML='<div class="em">'+em(x.f[0])+'</div><div class="nm">'+x.f[0]+'<span>'+x.lab+' · '+c.p+' g protein</span></div><div class="k">'+c.k+'</div>';ul.appendChild(li)});wrap.appendChild(ul);
    const b=document.createElement("button");b.className="btn g";b.style.marginTop="10px";b.textContent="Add "+m[0].toLowerCase()+" to my log";b.onclick=()=>{it.forEach(x=>S.log.push(Object.assign(scale(x.f,x.g),{lab:x.lab})));save();eat();toast(m[0]+" added")};wrap.appendChild(b);box.appendChild(wrap)})}
