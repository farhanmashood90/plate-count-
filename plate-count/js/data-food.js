/* ==========================================================
   DATA: FOOD
   Edit foods, emoji, the sample meal plan and supplement ideas here.
   ========================================================== */
// FOODS: [name, kcal, protein g, carbs g, fat g, piece name, grams per piece]  (values are per 100 g)
const FOODS=[
["Chicken breast, cooked",165,31,0,3.6],["Egg, whole",143,12.6,0.7,9.5,"egg",50],["Egg white",52,11,0.7,0.2,"egg white",33],
["Paneer",265,18,1.2,20],["Curd (dahi), whole milk",61,3.5,4.7,3.3,"bowl",150],["Greek yogurt",59,10,3.6,0.4,"cup",170],
["Milk, whole",61,3.2,4.8,3.3,"glass",240],["Whey protein powder",400,80,8,6,"scoop",30],["Soya chunks, dry",345,52,33,0.5],
["White rice, cooked",130,2.7,28,0.3,"cup",160],["Chapati / roti",297,9.5,46,7.5,"roti",40],["Idli",135,4,28,0.5,"idli",40],
["Dosa, plain",168,3.9,29,3.7,"dosa",90],["Dal, cooked",105,6.5,17,1.5,"bowl",150],["Sambar",50,2.5,7,1.5,"bowl",150],
["Rajma, cooked",127,8.7,23,0.5,"bowl",150],["Chickpeas, cooked",164,8.9,27,2.6,"bowl",150],["Chicken biryani",180,8,22,6,"plate",300],
["Oats, dry",389,16.9,66,6.9,"bowl",40],["Brown bread",247,13,41,3.4,"slice",28],["Potato, boiled",87,1.9,20,0.1,"potato",150],
["Sweet potato, boiled",86,1.6,20,0.1,"potato",130],["Banana",89,1.1,23,0.3,"banana",118],["Apple",52,0.3,14,0.2,"apple",180],
["Broccoli",34,2.8,7,0.4],["Avocado",160,2,9,15,"avocado",150],["Almonds",579,21,22,50],
["Peanuts",567,26,16,49],["Peanut butter",588,25,20,50,"tbsp",16],["Ghee",900,0,0,100,"tsp",5],
["Salmon, cooked",206,22,0,12],["Tuna, canned in water",116,26,0,1]
];
// EMO: the emoji shown next to each food
const EMO={"Chicken breast, cooked":"🍗","Egg, whole":"🥚","Egg white":"🍳","Paneer":"🧀","Curd (dahi), whole milk":"🥣","Greek yogurt":"🥣","Milk, whole":"🥛","Whey protein powder":"🥤","Soya chunks, dry":"🌱","White rice, cooked":"🍚","Chapati / roti":"🫓","Idli":"🍙","Dosa, plain":"🥞","Dal, cooked":"🍲","Sambar":"🍲","Rajma, cooked":"🫘","Chickpeas, cooked":"🫘","Chicken biryani":"🍛","Oats, dry":"🥣","Brown bread":"🍞","Potato, boiled":"🥔","Sweet potato, boiled":"🍠","Banana":"🍌","Apple":"🍎","Broccoli":"🥦","Avocado":"🥑","Almonds":"🌰","Peanuts":"🥜","Peanut butter":"🥜","Ghee":"🧈","Salmon, cooked":"🐟","Tuna, canned in water":"🐟"};
// MEALS: the sample weight-loss day (food, amount in pieces or grams)
const MEALS=[["Breakfast",[["Egg, whole",3],["Egg white",3],["Oats, dry",1],["Banana",1]]],["Lunch",[["Chicken breast, cooked",150],["White rice, cooked",1],["Dal, cooked",1],["Broccoli",100]]],["Snack",[["Greek yogurt",1],["Whey protein powder",1],["Almonds",20],["Apple",1]]],["Dinner",[["Paneer",100],["Chapati / roti",2],["Sambar",1]]]];
// SUPS: supplement suggestions [name, emoji, note]
const SUPS=[["Omega-3 (fish oil)","🐟","With a meal that has some fat. Supports heart and joints. Labels usually give 1 to 2 g of EPA + DHA."],["Multivitamin","💊","With breakfast. Fills small gaps if your food is limited. Take 1 as per the label."],["Magnesium glycinate","🌙","In the evening. Supports muscle relaxation and sleep. Many labels give 200 to 400 mg of elemental magnesium."],["Creatine monohydrate","⚡","Any time, every day. Helps strength and power. The usual dose is 3 to 5 g."],["Vitamin D3","☀️","With a meal that has some fat. Ask your doctor about a dose, ideally after a blood test."],["Whey protein","🥤","After training or to fill a protein gap. One scoop is usually about 24 g of protein."]];

// PLATES: quick meals, values for 1 plate (approximate)
// [name, emoji, kcal, protein g, carbs g, fat g, what is on the plate]
const PLATES=[
["Chicken biryani","🍛",540,24,66,18,"1 big plate, about 300 g"],
["Veg thali","🍱",700,20,105,22,"2 rotis, rice, dal, 1 sabzi"],
["Masala dosa","🥞",350,7,52,13,"1 dosa with potato filling"],
["Idli plate","🍙",240,9,44,3,"3 idli with sambar"],
["Poha","🍚",270,5,50,6,"1 plate, about 200 g"],
["Upma","🥣",250,6,38,8,"1 plate, about 200 g"],
["Aloo paratha + curd","🫓",320,10,41,13,"1 paratha with 100 g curd"],
["Chole bhature","🍛",650,17,80,30,"1 plate, 2 bhature"],
["Egg fried rice","🍳",480,14,70,15,"1 plate, about 300 g"],
["Curd rice","🥛",320,8,52,8,"1 plate, about 250 g"],
["Pasta","🍝",400,13,65,9,"1 plate with sauce"],
["Veg pizza","🍕",540,22,66,20,"2 slices"],
["Chicken burger","🍔",500,25,42,24,"1 burger"]];
PLATES.forEach(p=>{EMO[p[0]]=p[1]});
