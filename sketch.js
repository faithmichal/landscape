// put in setup whatever needs to be done to get things started
function setup() {

    // this line creates a virtual canvas and attaches it to your HTML
    createCanvas(480, 640).parent('p5')
noLoop()
}

// put in draw everything you want to draw to the canvas
function draw() {

    // start off with a background
    background(232, 212, 190)

    // draw here!
strokeWeight(0)
  fill(237, 162, 104)
    circle(155, 169, 83)

  fill(117, 145, 209)
    rect(0, 377, 480, 265)


strokeWeight(0)
fill(0)
beginShape()
  vertex(0,530)
  vertex(6,480)
  vertex(15,503)
  vertex(18,486)
  vertex(21,507)
  vertex(27,518)
  vertex(37,503)
  vertex(40,535)
  vertex(49,519)
  vertex(58,538)
  vertex(60,528)
  vertex(62,545)
  vertex(68,528)
  vertex(73,556)
  vertex(78,546)
  vertex(84,560)
endShape()



strokeWeight(0)
fill(245, 200, 144, 100)
beginShape()
  curveVertex(169,140)
  curveVertex(138,139)
  curveVertex(119,173)
  curveVertex(129,190)
  curveVertex(132,186)
  curveVertex(142,170)
  curveVertex(148,168)
  curveVertex(167,140)
  curveVertex(156,150)








endShape()








  }
// this function will print coordinates to the console whenever you click
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}
