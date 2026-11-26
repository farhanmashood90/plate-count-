/* ==========================================================
   PROFILE
   The top card: weight, height, age, sex, goal, BMI bar.
   ========================================================== */
$("w").value=S.w;$("h").value=S.h;$("goal").value=S.goal;
$("age").value=S.age;$("sex").value=S.sex;$("act").value=S.act;
const prof=()=>{S.w=$("w").value;S.h=$("h").value;S.age=$("age").value;S.sex=$("sex").value;S.act=$("act").value;S.goal=$("goal").value;S.pg=S.goal;save();sum();eat();plan();cardio()};
["w","h","age","sex","act","goal"].forEach(i=>$(i).oninput=prof);
document.querySelectorAll(".sx").forEach(b=>b.onclick=()=>{$("sex").value=b.dataset.s;prof();syncSex()});

function sum(){const t=T(),w=+S.w,h=+S.h;bmi(0);let s="Add your weight and height and I’ll set your calorie, protein and water targets.";
  if(t.own){s="Targets: about "+t.k+" kcal, "+t.p+" g protein, "+t.c+" g carbs, "+t.f+" g fat and "+(t.w/1000)+" L water a day."+(t.full?"":" Add age and height for a closer number.");
    if(h>0){const b=w/((h/100)**2);s+=" BMI can’t tell muscle from fat, so use it loosely.";bmi(b);}
    s+=" These are rough starting points."}
  $("sum").textContent=s}

function bmi(b){const m=$("bm"),v=$("bmv");if(!(b>0)){m.style.opacity=0;m.style.left="0%";v.textContent="BMI –";return}
  const c=b<18.5?"Under range":b<25?"Healthy range":b<30?"Above range":"Well above range";m.style.opacity=1;m.style.left=Math.max(0,Math.min(100,(b-15)/25*100))+"%";v.textContent="BMI "+r1(b)+" · "+c}
function syncSex(){document.querySelectorAll(".sx").forEach(b=>b.classList.toggle("on",b.dataset.s===S.sex))}
