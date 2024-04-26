function setup() {
  createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(230,230,250);

    triangle(500, 265, 560, 180, 456, 155);

    triangle(850, 285, 900, 160, 800, 200);


     fill(554, 206, 27);
   circle(680, 370, 450);
 

   fill(0, 0, 0);
   ellipse(600, 300, 45, 75);

   fill(0, 0, 0);
   ellipse(750, 300, 45, 75);

   fill(255,192,203);
   circle(680, 430, 60, 50);

   fill(0, 0, 0);
   ellipse(680, 410, 65, 35);

noFill();
arc(700, 380, 50, 50, 0, HALF_PI);
arc(700, 380, 90, 60, 0, HALF_PI);

arc(660, 380, 50, 50, HALF_PI, PI);
arc(660, 380, 90, 60, HALF_PI, PI);


fill(255, 255, 280);
ellipse(755, 305, 25, 35);

fill(255, 255, 280);
ellipse(605, 305, 25, 35);

  }