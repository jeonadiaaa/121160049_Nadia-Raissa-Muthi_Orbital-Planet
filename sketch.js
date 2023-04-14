var backgroundImg;

let sunSize = 100
let earthSize = 75;
let moonSize = 50;

let angle = 30;
let distance = 150;

let suns = ['🌞'];
let sunIndex = 0;

let moons = ['🌕','🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔'];
let moonIndex = 0;

let earths = ['🌎', '🌍', '🌏'];
let earthIndex = 0;

function preload() {
  
  backgroundImg = loadImage("galaksi.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(backgroundImg);

  angle++;

  if(angle % 200 == 0){
    sunIndex++;
    if (sunIndex >= suns.length) {
      sunIndex = 0;
    }
  }
  
  if(angle % 45 == 0){
    moonIndex++;
    if (moonIndex >= moons.length) {
      moonIndex = 0;
    }
  }

  if(angle % 120 == 0){
    earthIndex++;
    if (earthIndex >= earths.length) {
      earthIndex = 0;
    }
  }
  
  let earthX = width / 2 + cos(radians(angle)) * distance;
  let earthY = height / 2 + sin(radians(angle)) * distance;

  let moonX = width / 2.3 + cos(radians(angle)) * distance;
  let moonY = height / 2.3 + sin(radians(angle)) * distance;

  textSize(sunSize);
  text(suns[sunIndex], width / 2, height / 2);
  
  textSize(earthSize);
  text(earths[earthIndex], earthX, earthY);

  textSize(moonSize);
  text(moons[moonIndex], moonX, moonY);  
}