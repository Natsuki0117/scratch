let img;
let topLayer;

function preload() {
  img = loadImage("demo.png"); // aaa.png のパスを正確に指定
}

function setup() {
  createCanvas(600, 400);

  // 上層の透明レイヤーを作成
  topLayer = createGraphics(600, 400);
  topLayer.background("#fce4ec ");
  
  topLayer.textSize(40);
  topLayer.textAlign(CENTER, CENTER);
  topLayer.fill(
  94, 53, 177);
  topLayer.text("Scratch Me", width / 2, height / 2);
}

function draw() {
  // 背景画像を描画
  background(200); // 背景色（灰色）
  image(img, 0, 0, width, height); // 画像を描画

  // マウスを押している間に透明化
  if (mouseIsPressed) {
    topLayer.erase(); // 消去モードを有効化
    topLayer.strokeWeight(50);
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
    topLayer.noErase(); // 消去モードを解除
  }

  // 透明化効果を持つレイヤーを描画
  image(topLayer, 0, 0);
}
