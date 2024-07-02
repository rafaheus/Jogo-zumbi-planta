let mao
let grama
let girassol

let girassolX = 256
let girassolY = 256

let tamanho = 64

let andarX = 0
let andarY = 0

let velocidade = 64

let restart

function setup() {
  createCanvas(576, 576);
  mao = loadImage("mao.png")
  grama = loadImage("grama.png")
  girassol = loadImage("girassol.png")
}

function draw() {
  
  if(andarX < 0){
     andarX = 0
     }
  
  if(andarY < 0){
     andarY = 0
     }
  
  if(andarX > tamanho*9 - tamanho){
     andarX = tamanho*9 - tamanho
     }
  
   if(andarY > tamanho*9 - tamanho){
     andarY = tamanho*9 - tamanho
     }
  
  
  
  background(255);
  
  for(let i = 0; i < 9; i++){
    
    for(let j = 0; j < 9; j++){
    image(grama, i*tamanho, j*tamanho, tamanho, tamanho)
    }
    
  }
  
  image(mao, andarX, andarY, tamanho, tamanho) 
  
  image(girassol, girassolX, girassolY, tamanho, tamanho)
  
  if(andarX === girassolX && andarY === girassolY){
    rect(160, 160, 256, 256)
    textSize(35)
    text('Ganhou', 220, 300)
    
    restart = createButton('Reiniciar')
    restart.mousePressed(reset)
    
    noLoop()
  }
  
  text(`x:${andarX} y: ${andarY}`, 500, 500)
}

function reset(){
  andarX = 0
  andarY = 0
  restart.remove()
  loop()
}

function keyPressed() {
  if(keyIsDown(RIGHT_ARROW)){
    andarX += velocidade
  }
  
  if(keyIsDown(LEFT_ARROW)){
    andarX -= velocidade
  }
  
  if(keyIsDown(DOWN_ARROW)){
    andarY += velocidade
  }
  
  if(keyIsDown(UP_ARROW)){
    andarY -= velocidade
  }
  
}
