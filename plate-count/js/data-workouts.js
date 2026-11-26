/* ==========================================================
   DATA: WORKOUTS
   Edit the training split, muscles and exercise tips here.
   ========================================================== */
// PLAN: one line per day. Each exercise is "name|sets x reps"
const PLAN=[
["Chest + triceps",["Bench press|4 × 8","Incline dumbbell press|3 × 10","Cable fly|3 × 12","Chest dip|3 × 10","Push-up|2 × to failure","Triceps pushdown|3 × 12","Overhead triceps extension|3 × 12","Skull crusher|3 × 10"]],
["Back + biceps",["Lat pulldown|4 × 10","Barbell row|4 × 8","Seated cable row|3 × 12","Barbell curl|3 × 10","Hammer curl|3 × 12"]],
["Legs",["Squat|4 × 8","Leg press|3 × 12","Romanian deadlift|3 × 10","Leg curl|3 × 12","Calf raise|4 × 15"]],
["Shoulders",["Overhead press|4 × 8","Lateral raise|4 × 15","Rear delt fly|3 × 15","Front raise|3 × 12","Face pull|3 × 15"]],
["Full body + cardio",["Deadlift|3 × 5","Dumbbell press|3 × 10","Pull-ups or pulldown|3 × 8","Incline walk|20–30 min"]],
["Abs + core",["Crunch|3 × 15","Lying leg raise|3 × 12","Cable crunch|3 × 15","Hanging leg raise|3 × 10","Plank|3 × 45 sec"]]
];
// HOT: muscles lit up on the body picture for each day (same order as PLAN)
const HOT=[["chest","triceps"],["traps","lats","lowback","biceps"],["quads","hams","glutes","calves"],["delts","traps"],["chest","lats","quads","hams","glutes","abs","delts"],["abs"]];
// ML = muscle names, EXD = [muscles worked, how-to tip] for each exercise
const ML={chest:"Chest",delts:"Shoulders",triceps:"Triceps",biceps:"Biceps",traps:"Traps",lats:"Lats",lowback:"Lower back",abs:"Abs",quads:"Quads",hams:"Hamstrings",glutes:"Glutes",calves:"Calves"};
const EXD={
"Bench press":[["chest","triceps","delts"],"Lie flat with feet planted and shoulder blades pinched. Lower the bar to mid-chest with elbows about 45°, then press up without bouncing."],
"Incline dumbbell press":[["chest","delts","triceps"],"Set the bench at about 30°. Lower the dumbbells to upper chest height, then press up and slightly together."],
"Cable fly":[["chest"],"Keep a soft bend in your elbows. Sweep the handles together in a wide arc, squeeze your chest, and return slowly."],
"Triceps pushdown":[["triceps"],"Keep your elbows tucked at your sides. Press the handle down until your arms are straight, then let it rise slowly."],
"Overhead triceps extension":[["triceps"],"Hold one weight overhead with elbows close to your ears. Lower it behind your head, then straighten your arms."],
"Lat pulldown":[["lats","biceps"],"Grip a little wider than your shoulders. Pull the bar to your upper chest by driving your elbows down, then control it back up."],
"Barbell row":[["lats","traps","lowback","biceps"],"Hinge forward with a flat back. Pull the bar to your lower ribs, squeeze your shoulder blades, and lower with control."],
"Seated cable row":[["lats","traps","biceps"],"Sit tall. Pull the handle to your belly, squeeze your shoulder blades together, and avoid leaning back."],
"Barbell curl":[["biceps"],"Keep your elbows by your sides. Curl the bar up without swinging, then lower slowly."],
"Hammer curl":[["biceps"],"Keep your palms facing each other. Curl the dumbbells up with steady control and lower slowly."],
"Squat":[["quads","glutes","hams"],"Bar on your upper back, feet about shoulder-width. Sit down and back until your thighs are near parallel, then drive up through your whole foot."],
"Leg press":[["quads","glutes"],"Feet shoulder-width on the plate. Lower until your knees are about 90°, then press without locking your knees."],
"Romanian deadlift":[["hams","glutes","lowback"],"Keep a slight knee bend. Push your hips back, slide the bar down your thighs, then squeeze your glutes to stand."],
"Leg curl":[["hams"],"Curl the pad toward your glutes without lifting your hips, then lower slowly."],
"Calf raise":[["calves"],"Stand tall with the balls of your feet on the floor. Lift your heels as high as you can, pause for a second, then lower slowly."],
"Overhead press":[["delts","triceps","traps"],"Brace your core and glutes. Press the bar straight overhead, move your head through, and lower to your upper chest."],
"Lateral raise":[["delts"],"Keep a slight elbow bend. Lift the dumbbells out to shoulder height, then lower slowly."],
"Rear delt fly":[["delts","traps"],"Hinge forward. Open your arms wide with soft elbows, squeeze your upper back, and lower slowly."],
"Hanging knee raise":[["abs"],"Hang from the bar and curl your knees toward your chest, then lower without swinging."],
"Plank":[["abs","lowback"],"Forearms down, body in one straight line. Squeeze your abs and glutes and keep breathing steadily."],
"Deadlift":[["hams","glutes","lowback","traps","lats"],"Bar over mid-foot, back flat. Push the floor away, stand tall, and lower by sending your hips back first."],
"Dumbbell press":[["chest","delts","triceps"],"Press the dumbbells up from chest level until your arms are straight, then lower with control."],
"Pull-ups or pulldown":[["lats","biceps"],"Pull your chest toward the bar by driving your elbows down. Lower fully on every rep."],
"Incline walk":[["calves","glutes","quads","hams"],"Walk at a steady pace without holding the rails, standing tall. Raise the incline gradually."],
"Chest dip":[["chest","triceps","delts"],"Lean slightly forward on parallel bars. Lower until your elbows are about 90°, then press back up without shrugging."],
"Push-up":[["chest","triceps","delts","abs"],"Hands under shoulders, body in one straight line. Lower your chest toward the floor, then push the floor away."],
"Skull crusher":[["triceps"],"Lie on a bench with your arms pointing up. Bend only your elbows to lower the weight toward your forehead, then straighten."],
"Front raise":[["delts"],"Lift the dumbbells in front of you to shoulder height with a slight elbow bend, then lower slowly."],
"Face pull":[["delts","traps"],"Pull the rope toward your face with your elbows high, squeeze your rear shoulders, then return slowly."],
"Crunch":[["abs"],"Lie on your back with knees bent. Curl your ribs toward your hips so only your shoulders lift, then lower slowly."],
"Lying leg raise":[["abs"],"Press your lower back into the floor. Raise straight legs to vertical, then lower slowly without arching your back."],
"Cable crunch":[["abs"],"Kneel under the cable with your hands by your head. Curl your ribs toward your hips and keep your hips still."],
"Hanging leg raise":[["abs"],"Hang from the bar. Raise your legs by curling your pelvis up, then lower without swinging."]};
// ANI: pose data for the animated man, one line per exercise (advanced)
const ANI={
"Bench press":["h","p","pad",[-90,0,90,0,40,95,0],[-90,0,-40,130,40,95,0]],
"Incline dumbbell press":["h","p","pad",[-45,0,135,0,40,95,0],[-45,0,20,115,40,95,0]],
"Cable fly":["f","c40,60","",[0,5,15,10,0,0,0],[0,5,85,10,0,0,0]],
"Triceps pushdown":["f","c150,28","",[0,3,5,105,0,0,0],[0,3,5,5,0,0,0]],
"Overhead triceps extension":["f","p","",[0,0,175,140,0,0,0],[0,0,175,5,0,0,0]],
"Lat pulldown":["h","c150,18","seat",[0,-8,165,0,90,90,0],[0,-8,10,150,90,90,0]],
"Barbell row":["f","p","",[0,62,0,0,10,25,0],[0,62,-55,55,10,25,0]],
"Seated cable row":["h","c240,128","seat",[0,5,80,0,80,20,0],[0,-6,-30,120,80,20,0]],
"Barbell curl":["f","p","",[0,0,0,0,0,0,0],[0,0,0,140,0,0,0]],
"Squat":["f","s","",[0,0,-50,140,0,0,0],[0,45,-50,140,85,115,0]],
"Leg press":["h","o","pad",[-45,0,70,10,100,5,0],[-45,0,70,10,125,125,0]],
"Romanian deadlift":["f","p","",[0,0,0,0,0,10,0],[0,70,0,0,12,28,0]],
"Leg curl":["h","","padf",[90,0,85,0,0,0,0],[90,0,85,0,0,115,0]],
"Calf raise":["f","p","",[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,55]],
"Overhead press":["f","p","",[0,0,35,145,0,0,0],[0,0,175,5,0,0,0]],
"Lateral raise":["f","p","",[0,0,3,8,0,0,0],[0,0,88,8,0,0,0]],
"Rear delt fly":["f","p","",[0,62,0,0,10,25,0],[0,62,-40,10,10,25,0]],
"Hanging knee raise":["d","b","",[0,0,180,0,0,0,0],[0,-6,180,0,100,105,0]],
"Plank":["h","","",[75,0,90,0,0,0,0],[75,2,90,0,0,0,0]],
"Deadlift":["f","p","",[0,55,0,0,65,95,0],[0,0,0,0,0,0,0]],
"Pull-ups or pulldown":["d","b","",[0,0,180,0,5,15,0],[0,0,20,160,5,15,0]],
"Incline walk":["f","t","",[0,8,-20,30,28,8,0],[0,8,25,60,-25,35,0]]};
ANI["Hammer curl"]=ANI["Barbell curl"];
Object.assign(ANI,{
"Chest dip":["e","b","",[0,15,0,0,-10,40,0],[0,25,-75,75,-10,40,0]],
"Push-up":["g","","",[64,0,64,0,0,0,0],[78,0,5,73,0,0,0]],
"Skull crusher":["h","p","pad",[-90,0,90,0,40,95,0],[-90,0,90,85,40,95,0]],
"Front raise":["f","p","",[0,0,3,5,0,0,0],[0,0,88,5,0,0,0]],
"Face pull":["f","c240,62","",[0,0,80,0,0,0,0],[0,0,-10,130,0,0,0]],
"Crunch":["h","","pad",[-90,0,20,150,40,95,0],[-90,35,20,150,40,95,0]],
"Lying leg raise":["h","","pad",[-90,0,0,0,5,0,0],[-90,0,0,0,90,0,0]],
"Cable crunch":["h","c150,18","kn",[0,0,60,120,0,90,0],[0,50,60,120,0,90,0]],
"Hanging leg raise":["d","b","",[0,0,180,0,0,0,0],[0,-6,180,0,85,5,0]]});ANI["Dumbbell press"]=ANI["Bench press"];
