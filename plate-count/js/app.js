/* ==========================================================
   APP START
   Tab switching and the first draw. Runs last.
   ========================================================== */
["eat","plan","train","cardio"].forEach(n=>{$("t-"+n).onclick=()=>{["eat","plan","train","cardio"].forEach(x=>{$("p-"+x).hidden=x!==n;$("t-"+x).setAttribute("aria-selected",x===n)});if(n==="cardio")cardio();countUp(n)}});
sum();eat();plates();plan();train();cardio();sup();syncSex();countUp("eat");
