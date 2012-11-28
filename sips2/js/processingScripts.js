/*
// All Examples Written by Casey Reas and Ben Fry
// unless otherwise stated.
int numBalls = 12;
float spring = 0.05;
float gravity = 0.03;
Ball[] balls = new Ball[numBalls];

void setup() 
{
  size(600, 300);
  noStroke();
  smooth();
  for (int i = 0; i < numBalls; i++) {
    balls[i] = new Ball(random(width), random(height), random(20, 40), i, balls);
  }
}

void draw() 
{
  background(0);
  for (int i = 0; i < numBalls; i++) {
    balls[i].collide();
    balls[i].move();
    balls[i].display();  
  }
}

class Ball {
  float x, y;
  float diameter;
  float vx = 0;
  float vy = 0;
  int id;
  Ball[] others;
 
  Ball(float xin, float yin, float din, int idin, Ball[] oin) {
    x = xin;
    y = yin;
    diameter = din;
    id = idin;
    others = oin;
  } 
  
  void collide() {
    for (int i = id + 1; i < numBalls; i++) {
      float dx = others[i].x - x;
      float dy = others[i].y - y;
      float distance = sqrt(dx*dx + dy*dy);
      float minDist = others[i].diameter/2 + diameter/2;
      if (distance < minDist) { 
        float angle = atan2(dy, dx);
        float targetX = x + cos(angle) * minDist;
        float targetY = y + sin(angle) * minDist;
        float ax = (targetX - others[i].x) * spring;
        float ay = (targetY - others[i].y) * spring;
        vx -= ax;
        vy -= ay;
        others[i].vx += ax;
        others[i].vy += ay;
      }
    }   
  }
  
  void move() {
    vy += gravity;
    x += vx;
    y += vy;
    if (x + diameter/2 > width) {
      x = width - diameter/2;
      vx += -0.9; 
    }
    else if (x - diameter/2 < 0) {
      x = diameter/2;
      vx *= -0.9;
    }
    if (y + diameter/2 > height) {
      y = height - diameter/2;
      vy *= -0.9; 
    } 
    else if (y - diameter/2 < 0) {
      y = diameter/2;
      vy *= -0.9;
    }
  }
  
  void display() {
    fill(255, 204);
    ellipse(x, y, diameter, diameter);
  }
}
*/


// All Examples Written by Casey Reas and Ben Fry
// unless otherwise stated.
// Global variables for the ball
float ball_x;
float ball_y;
float ball_dir = 1;
float ball_size = 5;  // Radius
float dy = 0;  // Direction

// Global variables for the paddle
int paddle_width = 5;
int paddle_height = 20;

int dist_wall = 15;

void setup()
{
  size(600, 300);
  rectMode(CENTER_RADIUS);
  ellipseMode(CENTER_RADIUS);
  noStroke();
  smooth();
  ball_y = height/2;
  ball_x = 1;
}

void draw() 
{
  background(51);
  
  ball_x += ball_dir * 8.0;
  ball_y += dy;
  if(ball_x > width+ball_size) {
    ball_x = -width/2 - ball_size;
    ball_y = random(0, height);
    dy = 0;
  }
  
  // Constrain paddle to screen
  float paddle_y = constrain(mouseY, paddle_height, height-paddle_height);

  // Test to see if the ball is touching the paddle
  float py = width-dist_wall-paddle_width-ball_size;
  if(ball_x == py 
     && ball_y > paddle_y - paddle_height - ball_size 
     && ball_y < paddle_y + paddle_height + ball_size) {
    ball_dir *= -1;
    if(mouseY != pmouseY) {
      dy = (mouseY-pmouseY)/2.0;
      if(dy >  5) { dy =  5; }
      if(dy < -5) { dy = -5; }
    }
  } 
  
  // If ball hits paddle or back wall, reverse direction
  if(ball_x < ball_size && ball_dir == -1) {
    ball_dir *= -1;
  }
  
  // If the ball is touching top or bottom edge, reverse direction
  if(ball_y > height-ball_size) {
    dy = dy * -1;
  }
  if(ball_y < ball_size) {
    dy = dy * -1;
  }

  // Draw ball
  fill(255);
  ellipse(ball_x, ball_y, ball_size, ball_size);
  
  // Draw the paddle
  fill(153);
  rect(width-dist_wall, paddle_y, paddle_width, paddle_height);  
}