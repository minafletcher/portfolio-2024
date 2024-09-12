export default function NoiseLanding(p, props) {

  let pg;

  let blobG1;
  let blobG2;
  let blobG3;
  let blobG4;

  p.setup = () => {

    p.pixelDensity(1)
    p.createCanvas(p.windowWidth, p.windowHeight);

    blobG1 = p.createGraphics(p.windowWidth, p.windowHeight);
    blobG2 = p.createGraphics(p.windowWidth, p.windowHeight);
    blobG3 = p.createGraphics(p.windowWidth, p.windowHeight);
    blobG4 = p.createGraphics(p.windowWidth, p.windowHeight);

    pg = p.createGraphics(p.windowWidth, p.windowHeight);


    // draw all objects relative to center of the screen
    pg.translate(p.windowWidth/2,p.windowHeight/2);
    blobG1.translate(p.windowWidth/2, p.windowHeight/2);
    blobG2.translate(p.windowWidth/2, p.windowHeight/2);
    blobG3.translate(p.windowWidth/2, p.windowHeight/2);
    blobG4.translate(p.windowWidth/2, p.windowHeight/2);

  };

  p.draw = () => {

    pg.clear()
    blobG1.clear()
    blobG2.clear()
    blobG3.clear()
    blobG4.clear()

    p.blendMode(p.BLEND)
    p.background('#FFFDF6');
    p.blendMode(p.MULTIPLY)

    // pg.noStroke()

    // pg.fill('red');
    // drawBlob(250,-200,12,0.002, 300, 1, 0.02);
    // pg.fill('blue');
    // drawBlob(500,0,14,0.002, 300, -1, 0.05);
    // pg.fill('yellow');
    // drawBlob(700,200,14,0.002, 150, 1, 0.01);

    // drawSquare(250,-150, 15, 15, 10, 10)

    // let gradient = p.drawingContext.createLinearGradient(20,20, p.width-20,p.height-20)

    // gradient.addColorStop(0, 'White');
    // gradient.addColorStop(1, 'Black');

    // p.drawingContext.fillStyle = gradient

    blobG1.noStroke()
    blobG1.fill('yellow')
    let xPos1 = 250
    let yPos1 = -200
    let size1 = 175
    drawBlob(blobG1, xPos1,yPos1,12,0.002, size1, 1, 0.03);

    blobG4.noStroke()
    blobG4.fill('red')
    drawBlob(blobG4, 450,-75,14,0.002, 275, -1, 0.05);

    blobG2.noStroke()
    blobG2.fill('blue');
    drawBlob(blobG2, 500,0,14,0.002, 275, -1, 0.05);

    blobG3.noStroke()
    blobG3.fill('yellow');
    drawBlob(blobG3, 700,200,14,0.002, 125, 1, 0.01)

    pixelate(blobG2, 10, 10)

    //fade(blobG1,p.windowWidth/3, p.windowWidth, 0, p.windowHeight, size1, "top-center")

    // p.image(pg, 0, 0)

    // applyNoiseFilter(pg)

    //pixelate(pg, 8, 8)

    p.image(blobG4, 0, 0)

    p.image(blobG1, 0, 0)
  
    p.image(blobG3, 0, 0)
    
    p.filter(p.BLUR, 10)
    
    p.image(blobG2, 0, 0)

    
    };

    function drawBlob(bg, startPosX, startPosY, vertexNum, speed, size, dir, flowDeg){
	
      bg.push();
      bg.translate(startPosX, startPosY)
      // rotate(frameCount/fcm);
      
      let dr = p.TWO_PI/vertexNum;
      bg.beginShape();
      
      for(let i = 0; i  < vertexNum + 6; i++){
        let ind = i%vertexNum;
        let rad = dr *ind;
        // 0.01 multiplied by sin value controls the amount of degree of flow in the blob
        let r = size + p.noise(p.frameCount*speed + ind) + dir*p.sin(dir*p.frameCount*speed + ind)*(flowDeg*2000);
        // let r = windowWidth*0.1 + noise(frameCount/slow + ind) * windowWidth*0.1 + sin(frameCount/slow + ind)*windowWidth*0.05;
        bg.curveVertex(p.cos(rad)*r, p.sin(rad)*r);
      }
      bg.endShape();
      bg.pop();
    }

    function fade(bg, xPos1, xPos2, yPos1, yPos2, size, fadeMode){
      bg.loadPixels()

      let offset = 4

      for(let i = 0; i < pg.width; i++){
        for(let j = 0; j < pg.height; j++){
          let loc = (i + j * pg.width) * offset;

          if (fadeMode == "top-center"){
            if (i > xPos1 && i < xPos2 && j > yPos1 && j < yPos2){
              if (bg.pixels[loc + 3] != 0){

                let dx = p.abs(i - ((xPos2 - xPos1) / 2))
                let dy = p.abs(j - (yPos1))

                bg.pixels[loc + 3] = 255 - 255 / (dx/dy)
              }
              
            }
          }

          

          // let r = pg.pixels[loc];       // Red component
          // let g = pg.pixels[loc + 1];   // Green component
          // let b = pg.pixels[loc + 2];   // Blue component
          // let a = pg.pixels[loc + 3];

          // pg.fill(r,g,b,a / i)
        }
      }

      bg.updatePixels()
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

    function pixelate(pg, pixelWidth, pixelHeight){
      pg.loadPixels()

      let offset = 4
      let dotA = 20
      let fadeThreshold = ((pg.width + pg.height * pg.width) * 4) * 0.30
      
      for(let i = 0; i < pg.width; i+= pixelWidth){
        for(let j = 0; j < pg.height; j+= pixelHeight){
          let loc = (i + j * pg.width) * offset;

          // color pixel dots white if they're inside a colored image
          if (pg.pixels[loc + 3] != 0){
            pg.pixels[loc + 3] = 0
            pg.pixels[loc + 3 + offset] = 0
            pg.pixels[loc + 3 + offset*pg.width] = 0
            pg.pixels[loc + 3 + offset*pg.width + offset] = 0
          }
           
          // fade dots based on distance from threshold
          else if(loc > fadeThreshold) {
            // alpha is from 0 to 255 (black to white)
            // set alpha to the inverse distance of the dot from the 90% mark
            // farther the distance, lighter the alpha
            // alpha value fades from dotA to 0

            // smaller number / larger number -> larger the number, smaller the result
            
            //338700 and 400000 vs 320000
            // go from 1 to 0
            // will start bigger, and get smaller as loc grows

            let dy = (fadeThreshold/loc)

            pg.pixels[loc + 3] = dotA * dy
            pg.pixels[loc + 3 + offset] = dotA * dy
            pg.pixels[loc + 3 + offset*pg.width] = dotA * dy
            pg.pixels[loc + 3 + offset*pg.width + offset] = dotA * dy
          }

          // set pixel dots to dark mode
          else {
            pg.pixels[loc + 3] = dotA
            pg.pixels[loc + 3 + offset] = dotA
            pg.pixels[loc + 3 + offset*pg.width] = dotA
            pg.pixels[loc + 3 + offset*pg.width + offset] = dotA
          }

          

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
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
};

