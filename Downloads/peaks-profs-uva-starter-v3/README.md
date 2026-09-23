# Peaks & Professors UVA starter v3

This is a simple, multi-page static site with placeholder content and images.

## Pages
- Home
- About: History, Mission, FAQ
- Trips: Upcoming, Completed, Difficulty Guide
- People: Faculty, Trip Leads, Leadership
- Get Involved: Join a Trip, Become a Trip Lead, Faculty Interest, Mailing List
- Contact
- Trip detail template

## Change section header font
Open `styles.css`. At the very top:

--heading:"Helvetica Neue", Arial, sans-serif;
--body:"Georgia", "Times New Roman", serif;
--ui:"Helvetica Neue", Arial, sans-serif;

`--heading` controls H1/H2/H3. `--ui` controls labels/nav/buttons. `--body` controls paragraphs.

For an even simpler all-sans-serif site:
--heading:Arial,sans-serif;
--body:Arial,sans-serif;
--ui:Arial,sans-serif;

## Add images
Put image files inside `assets/`, then replace:
<div class="card-image">IMAGE PLACEHOLDER</div>

with:
<div class="card-image"><img src="assets/your-photo.jpg" alt="Description"></div>

For the homepage hero replace:
<div class="image-placeholder">...</div>

with:
<img class="hero-image" src="assets/hero.jpg" alt="Description">

## Run
Use VS Code Live Server on `index.html`.

## Publish
Push all files to GitHub. GitHub Pages can serve this folder directly from `main` / root.
