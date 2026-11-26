# Plate Count

A gym app for food calories, a weight-loss plan, training days with animations, and a cardio calculator.
Pure HTML, CSS and JavaScript. No install needed.

## Run it

**Easiest:** double-click `index.html`.

**Like localhost in VS Code:**
1. Open this folder in VS Code (File > Open Folder).
2. Install the extension **Live Server**.
3. Right-click `index.html` > **Open with Live Server**. It opens at http://127.0.0.1:5500 and refreshes when you save.

**From a terminal:** `python3 -m http.server 8000` in this folder, then open http://localhost:8000

The fonts load from Google Fonts, so connect to the internet once for the best look. Your data stays in your browser (localStorage).

## Where to edit

| I want to change | Open this file |
|---|---|
| Colours | `css/theme.css` |
| Layout, buttons, text sizes | `css/base.css` |
| Look of one section (profile, Eat, Plan, Train, Cardio) | `css/sections.css` |
| Animations and background | `css/effects.css` |
| Phone and laptop layouts | `css/responsive.css` |
| Page text and the order of sections | `index.html` |
| Foods, protein values, plates, emoji, sample meals, supplements | `js/data-food.js` |
| Training days, exercises, muscle tips, animation poses | `js/data-workouts.js` |
| Calorie and protein formulas, saved data | `js/core.js` |
| Profile card and BMI | `js/profile.js` |
| Eat tab (food search with how many + unit, log, water, supplements) | `js/eat.js` |
| Food plans tab (lose weight, stay the same, build muscle) | `js/plan.js` |
| Train tab | `js/train.js` |
| The animated man | `js/animation.js` |
| Cardio calculator | `js/cardio.js` |
| Motivation lines, glow, embers | `js/effects.js` |
| Tabs and start-up | `js/app.js` |

Scripts load in the order listed at the bottom of `index.html`, so keep that order.

Calorie, protein and BMI numbers are rough estimates, not medical advice.

## Publish it free

It is just static files, so any free static host works.

**Easiest: Netlify Drop (about 1 minute)**
1. Unzip the project so you have the folder that contains `index.html`.
2. Go to https://app.netlify.com/drop
3. Drag the whole folder onto the page. You get a link like `https://your-name.netlify.app`.
4. Sign up for a free Netlify account when it asks, so the site stays online.
To update later, drag the changed folder onto the same site's deploy area.

**Alternative: GitHub Pages**
1. Make a free GitHub account and create a new **public** repository.
2. Upload the project files (`index.html`, `css`, `js`) to it.
3. Open Settings > Pages, choose Deploy from a branch > `main` > `/ (root)`, then Save.
4. After a minute the site is at `https://your-username.github.io/your-repo/`

Free hosting gives you a free address (`.netlify.app` or `.github.io`). A custom domain like plate-count.com costs money.
