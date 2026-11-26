/* ==========================================================
   EXERCISE ANIMATION
   The animated man. Poses come from ANI in data-workouts.js. The 8th number of a pose is the foot angle (heel lift).
   ========================================================== */
let raf=0;
function stopAnim(){cancelAnimationFrame(raf)}
function startAnim(name){stopAnim();const c=ANI[name];if(!c)return;const[an,eq,pad,A,B]=c,svg=$("anim"),NS="http://www.w3.org/2000/svg",
  mk=(t,a)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);svg.appendChild(e);return e};
  svg.innerHTML="";const AX={f:[144,186],h:[130,120],d:[130,42],e:[130,100],g:[150,172]}[an],e0=eq[0];
  if((an==="f"&&e0!=="t")||an==="g")mk("line",{class:"fl",x1:30,y1:AX[1],x2:230,y2:AX[1]});
  if(pad==="kn")mk("line",{class:"fl",x1:30,y1:AX[1]+38,x2:230,y2:AX[1]+38});
  if(e0==="t"){mk("line",{class:"fl",x1:60,y1:212.6,x2:215,y2:153.7});mk("line",{class:"th",x1:215,y1:153.7,x2:222,y2:100})}
  if(pad==="pad"||pad==="padf")mk("rect",{class:"pd",x:pad==="pad"?-13:5,y:-60,width:8,height:84,rx:3,transform:"translate("+AX+") rotate("+A[0]+")"});
  if(pad==="seat"){mk("rect",{class:"pd",x:114,y:128,width:40,height:7,rx:3});mk("rect",{class:"pd",x:110,y:60,width:6,height:70,rx:3})}
  if(e0==="b"){mk("line",{class:"th",x1:AX[0],y1:AX[1],x2:AX[0]+60,y2:AX[1]});mk("line",{class:"th",x1:AX[0]+60,y1:AX[1],x2:AX[0]+60,y2:190})}
  let cab;if(e0==="c"){const[px,py]=eq.slice(1).split(",").map(Number);cab=mk("line",{class:"th",x1:0,y1:0,x2:px,y2:py});mk("circle",{class:"pl",cx:px,cy:py,r:5})}
  const lg=mk("polyline",{}),tr=mk("line",{}),ar=mk("polyline",{}),hd=mk("circle",{class:"hd",r:10}),pl=mk("circle",{class:"pl",r:9});
  const t0=performance.now(),still=(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches);
  const frame=now=>{const p=still?1:(1-Math.cos((now-t0)/1000*Math.PI/1.6))/2,P=A.map((v,i)=>v+(B[i]-v)*p),r=a=>a*Math.PI/180,
    v=(x,y,a,l)=>[x+l*Math.sin(r(a)),y+l*Math.cos(r(a))],
    sh=[44*Math.sin(r(P[1])),-44*Math.cos(r(P[1]))],el=v(sh[0],sh[1],P[2],26),hn=v(el[0],el[1],P[2]+P[3],24),
    kn=v(0,0,P[4],34),ak=v(kn[0],kn[1],P[4]-P[5],34),fa=r(P[7]||0),ft=[ak[0]+14*Math.cos(fa),ak[1]+14*Math.sin(fa)],he=[sh[0]+13*Math.sin(r(P[1])),sh[1]-13*Math.cos(r(P[1]))],
    R=r(P[0]),co=Math.cos(R),si=Math.sin(R),q=a=>[a[0]*co-a[1]*si,a[0]*si+a[1]*co],
    J={sh:q(sh),hn:q(hn),el:q(el),kn:q(kn),ak:q(ak),ft:q(ft),he:q(he),hp:[0,0]},
    base=an==="f"?J.ft:an==="h"?J.hp:J.hn,dx=AX[0]-base[0],dy=AX[1]-base[1]+(an==="f"?P[6]:0),
    w=a=>[a[0]+dx,a[1]+dy],pts=(...a)=>a.map(w).map(z=>z[0].toFixed(1)+","+z[1].toFixed(1)).join(" ");
    lg.setAttribute("points",pts(J.hp,J.kn,J.ak,J.ft));ar.setAttribute("points",pts(J.sh,J.el,J.hn));
    const hp=w(J.hp),s2=w(J.sh),h2=w(J.hn),he2=w(J.he);
    tr.setAttribute("x1",hp[0]);tr.setAttribute("y1",hp[1]);tr.setAttribute("x2",s2[0]);tr.setAttribute("y2",s2[1]);
    hd.setAttribute("cx",he2[0]);hd.setAttribute("cy",he2[1]);
    const pp=e0==="p"||e0==="c"?h2:e0==="s"?s2:e0==="o"?w(J.ak):null;
    if(pp){pl.setAttribute("cx",pp[0]);pl.setAttribute("cy",pp[1]);pl.setAttribute("r",e0==="o"?15:9);pl.style.display=""}else pl.style.display="none";
    if(cab){cab.setAttribute("x1",h2[0]);cab.setAttribute("y1",h2[1])}
    raf=requestAnimationFrame(frame)};
  raf=requestAnimationFrame(frame)}
