export default function NoiseLanding(p, props) {

  let pg;
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    pg = p.createGraphics(p.windowWidth, p.windowHeight);

    // draw all objects relative to center of the screen
    pg.translate(p.windowWidth/2,p.windowHeight/2);

  };

  p.draw = () => {
    pg.blendMode(p.BLEND)
    pg.background('#FFFDF6');
    pg.blendMode(p.MULTIPLY)
    pg.noStroke()

    pg.fill('red');
    drawBlob(250,-200,12,0.002, 300, 1, 0.02);
    pg.fill('blue');
    drawBlob(500,0,14,0.002, 300, -1, 0.05);
    pg.fill('yellow');
    drawBlob(700,200,14,0.002, 150, 1, 0.01);

    // drawSquare(250,-150, 15, 15, 10, 10)
    

    pixelate(pg)

    // p.image(pg, 0, 0)

    // applyNoiseFilter(pg)

    // grain(pg)

    p.image(pg, 0, 0)

    };

    function drawBlob(startPosX, startPosY, vertexNum, speed, size, dir, flowDeg){
	
      pg.push();
      pg.translate(startPosX, startPosY)
      // rotate(frameCount/fcm);
      
      let dr = p.TWO_PI/vertexNum;
      pg.beginShape();
      
      for(let i = 0; i  < vertexNum + 6; i++){
        let ind = i%vertexNum;
        let rad = dr *ind;
        // 0.01 multiplied by sin value controls the amount of degree of flow in the blob
        let r = size + p.noise(p.frameCount*speed + ind) + dir*p.sin(dir*p.frameCount*speed + ind)*(flowDeg*2000);
        // let r = windowWidth*0.1 + noise(frameCount/slow + ind) * windowWidth*0.1 + sin(frameCount/slow + ind)*windowWidth*0.05;
        pg.curveVertex(p.cos(rad)*r, p.sin(rad)*r);
      }
      pg.endShape();
      pg.pop();
    }

    function grain(img){
      img.loadPixels()

      for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
          let index = (x + y * img.width) * 4; // Pixel array index
          let rand = p.random(-15, 15)
          
          // Apply noise to the red, green, and blue components
          img.pixels[index] = img.pixels[index] + rand; // Red
          img.pixels[index + 1] = img.pixels[index + 1] + rand; // Green
          img.pixels[index + 2] = img.pixels[index + 2] + rand; // Blue
          // Alpha (img.pixels[index + 3]) remains unchanged
        }
      }

      img.updatePixels()
    }

    function pixelate(pg){
      pg.loadPixels()

      let offset = 4
      
      for(let i = 0; i < pg.width; i+= 8){
        for(let j = 0; j < pg.height; j+= 8){
          let loc = (i + j * pg.width) * offset;

          pg.pixels[loc + 3] = 0
          pg.pixels[loc + 3 + offset] = 0
          pg.pixels[loc + 3 + offset*pg.width] = 0
          pg.pixels[loc + 3 + offset*pg.width + offset] = 0

          // let r = pg.pixels[loc];       // Red component
          // let g = pg.pixels[loc + 1];   // Green component
          // let b = pg.pixels[loc + 2];   // Blue component
          // let a = pg.pixels[loc + 3];

          // pg.fill(r,g,b,a / i)

        }
      }

      pg.updatePixels()
    }
    
    // Resize the canvas when the
    // browser's size changes.
    p.windowResized = () => {
      resizeCanvas(p.windowWidth, p.windowHeight);
    }
};

