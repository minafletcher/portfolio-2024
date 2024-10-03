export default function NoiseLanding(p) {
  let windowHeight;
  let windowWidth;

  // first layer - yellow green blobs behind dots
  let blobYG;

  // second layer, blurry red and cyan blobs
  let blobRC;

  // third layer - blue magenta blobs
  let blobBM;

  // top layer - cyan and yellow stroke blobs
  let blobStroke;

  let clockwise = 1;
  let counterClock = -1;

  // left red blob vars
  let sizeLR;
  let xPosLR;
  let yPosLR;
  let verticesLR;
  let speedLR;
  let stretchLR;

  // left blue blob vars
  let xPosLB;
  let yPosLB;
  let sizeLB;
  let speedLB;
  let verticesLB;
  let stretchLB;

  // left yellow blob vars
  let sizeLY;
  let verticesLY;
  let stretchLY;

  // left stroke blob
  let sizeLStroke;
  let xPosLStroke;
  let yPosLStroke;
  let verticesLStroke;
  let speedLStroke;
  let stretchLStroke;

  // top right cyan blob
  let sizeTC;
  let xPosTC;
  let yPosTC;
  let verticesTC;
  let speedTC;
  let stretchTC;

  // top right magenta blob, relative to TR cyan blob
  let xPosTM;
  let yPosTM;
  let sizeTM;
  let verticesTM;
  let speedTM;
  let stretchTM;

  // right stroke blob
  let sizeRStroke;
  let xPosRStroke;
  let yPosRStroke;
  let verticesRStroke;
  let speedRStroke;
  let stretchRStroke;

  // right green blob
  let sizeRG;
  let xPosRG;
  let yPosRG;
  let verticesRG;
  let speedRG;
  let stretchRG;

  p.setup = () => {
    if (p.windowHeight > 768) {
      windowHeight = p.windowHeight + 200;
    } else {
      windowHeight = p.windowHeight;
    }
    windowWidth = p.windowWidth;

    p.pixelDensity(1);
    p.createCanvas(windowWidth, windowHeight);

    // initial create graphics
    createGraphics();

    // set values for each blob
    setVars();
  };

  p.draw = () => {
    clearGraphics();

    p.blendMode(p.BLEND);
    // portfolio white
    p.background("#FFFDF6");
    p.blendMode(p.MULTIPLY);

    blobRC.noStroke();
    blobRC.fill(255, 0, 0, 255);
    drawBlob(
      blobRC,
      xPosLR,
      yPosLR,
      verticesLR,
      speedLR,
      sizeLR,
      clockwise,
      stretchLR
    );

    // left blue blob, relative to left red blob
    blobBM.noStroke();
    blobBM.fill(30, 72, 255);
    drawBlob(
      blobBM,
      xPosLB,
      yPosLB,
      verticesLB,
      speedLB,
      sizeLB,
      counterClock,
      stretchLB
    );

    // left yellow blob, relative to left red blob
    blobYG.noStroke();
    blobYG.fill(255, 196, 43);
    drawBlob(
      blobYG,
      xPosLR,
      yPosLR - windowWidth / 4,
      verticesLY,
      speedLR,
      sizeLY,
      clockwise,
      stretchLY
    );

    // left big line blob
    blobStroke.strokeWeight(3);
    blobStroke.stroke(0, 255, 255, 255);
    blobStroke.noFill();
    drawBlob(
      blobStroke,
      xPosLStroke,
      yPosLStroke,
      verticesLStroke,
      speedLStroke,
      sizeLStroke,
      clockwise,
      stretchLStroke
    );

    // top right cyan blob
    blobRC.noStroke();
    blobRC.fill(0, 255, 255, 255);
    drawBlob(
      blobRC,
      xPosTC,
      yPosTC,
      verticesTC,
      speedTC,
      sizeTC,
      counterClock,
      stretchTC
    );

    // top right magenta blob, relative to cyan blob
    blobBM.noStroke();
    blobBM.fill(255, 0, 255, 255);
    drawBlob(
      blobBM,
      xPosTM,
      yPosTM,
      verticesTM,
      speedTM,
      sizeTM,
      clockwise,
      stretchTM
    );

    // right stroke blob
    blobStroke.strokeWeight(3);
    blobStroke.stroke(255, 196, 43, 255);
    blobStroke.noFill();
    drawBlob(blobStroke, xPosRStroke, yPosRStroke, verticesRStroke, speedRStroke, sizeRStroke, counterClock, stretchRStroke);

    // right green blob
    blobYG.noStroke();
    blobYG.fill(70, 201, 67, 255);
    drawBlob(blobYG, xPosRG, yPosRG, verticesRG, speedRG, sizeRG, counterClock, stretchRG);

    // first layer - yellow green blurred blobs
    p.image(blobYG, 0, 0);

    // second layer - red cyan blurred blobs
    p.image(blobRC, 0, 0);

    // blur first two layers
    p.filter(p.BLUR, 10);

    p.image(blobStroke, 0, 0);

    // pixelate blue and magenta top layer blobs
    pixelate(blobBM, 10, 10);

    // blue and magenta top layer blobs
    p.image(blobBM, 0, 0);
  };

  function setVars() {
    // media queries
    if (windowWidth < 768) {
      // left red blob
      sizeLR = windowWidth / 5;
      yPosLR = windowHeight * 0.6;
      stretchLR = 0.03;

      // left blue blob
      sizeLB = windowWidth / 5;
      verticesLB = 6;
      stretchLB = 0.03;
      
      // left yellow blob
      verticesLY = 7;

      // left stroke blob
      yPosLStroke = windowHeight * 0.55;
      sizeLStroke = windowWidth / 4;
      stretchLStroke = 0.02;

      //top right cyan blob
      yPosTC = windowWidth * 0.2
      verticesTC = 6
      sizeTC = windowWidth / 5
      xPosTC = windowWidth * 0.6

      //top right magenta blob
      xPosTM = xPosTC + windowWidth * 0.25
      verticesTM = 5
      stretchTM = 0.03
      sizeTM = windowWidth / 6

      // right green blob
      xPosRG = windowWidth * 0.95;
      yPosRG = windowHeight * 0.2;
      verticesRG = 7;
      speedRG = 0.002;

      // right stroke blob
      sizeRStroke = windowWidth / 3
      stretchRStroke = 0.04
      yPosRStroke = windowHeight * 0.1


    } else {
      
      // left red blob
      sizeLR = windowWidth / 8;
      yPosLR = windowHeight * 0.5;
      stretchLR = 0.05;

      // left blue blob
      sizeLB = windowWidth / 8;
      verticesLB = 7;
      stretchLB = 0.05;

      // left yellow blob
      verticesLY = 12

      // left stroke blob
      yPosLStroke = windowHeight / 2;
      sizeLStroke = windowWidth / 6;
      stretchLStroke = 0.02;

      // top right cyan blob
      yPosTC = 0
      verticesTC = 8
      sizeTC = windowWidth / 9
      xPosTC = windowWidth * 0.75

      // top magenta cyan blob
      xPosTM = xPosTC + windowWidth * 0.1
      verticesTM = 8
      stretchTM = 0.05
      sizeTM = windowWidth / 8

      // right green blob
      xPosRG = windowWidth * 0.95;
      yPosRG = windowHeight * 0.3;
      verticesRG = 12;

      // right stroke blob
      sizeRStroke = windowWidth / 5
      stretchRStroke = 0.08
      yPosRStroke = windowHeight / 4
      
    }

    // UNCHANGING VALUES

    // left red blob
    xPosLR = windowWidth / 75;
    verticesLR = 6;
    speedLR = 0.002;

    // left blue blob
    xPosLB = xPosLR + windowWidth * 0.1;
    yPosLB = yPosLR + windowHeight * 0.1
    speedLB = 0.002;

    // left yellow blob
    sizeLY = windowWidth / 9;
    stretchLY = 0.02;

    // left stroke blob
    xPosLStroke = 0;
    verticesLStroke = 10;
    speedLStroke = 0.002;

    // top right cyan blob
    speedTC = 0.002;
    stretchTC = 0.03;

    // top right magenta blob
    yPosTM = yPosTC;
    speedTM = 0.002;

    // right stroke blob
    xPosRStroke = windowWidth * 0.95;
    verticesRStroke = 8;
    speedRStroke = 0.001;
    
    // right green blob
    sizeRG = windowWidth / 9;
    speedRG = 0.002;
    stretchRG = 0.02;

  }

  function drawBlob(
    bg,
    startPosX,
    startPosY,
    vertexNum,
    speed,
    size,
    dir,
    flowDeg
  ) {
    bg.push();
    bg.translate(startPosX, startPosY);
    // rotate(frameCount/fcm);

    let dr = p.TWO_PI / vertexNum;
    bg.beginShape();

    for (let i = 0; i < vertexNum + 6; i++) {
      let ind = i % vertexNum;
      let rad = dr * ind;
      // 0.01 multiplied by sin value controls the amount of degree of flow in the blob
      let r =
        size +
        p.noise(p.frameCount * speed + ind) +
        dir * p.sin(dir * p.frameCount * speed + ind) * (flowDeg * 2000);
      // let r = windowWidth*0.1 + noise(frameCount/slow + ind) * windowWidth*0.1 + sin(frameCount/slow + ind)*windowWidth*0.05;
      bg.curveVertex(p.cos(rad) * r, p.sin(rad) * r);
    }
    bg.endShape();
    bg.pop();
  }

  function pixelate(pg, pixelWidth, pixelHeight) {
    pg.loadPixels();

    let offset = 4;
    let dotA = 30;
    let fadeThreshold = (pg.width + pg.height * pg.width) * 4 * 0.35;

    for (let i = 0; i < pg.width; i += pixelWidth) {
      for (let j = 0; j < pg.height; j += pixelHeight) {
        let loc = (i + j * pg.width) * offset;

        // color pixel dots white if they're inside a colored image
        if (pg.pixels[loc + 3] != 0) {
          pg.pixels[loc + 3] = 0;
          pg.pixels[loc + 3 + offset] = 0;
          pg.pixels[loc + 3 + offset * pg.width] = 0;
          pg.pixels[loc + 3 + offset * pg.width + offset] = 0;
        }

        // fade dots based on distance from threshold
        else if (loc > fadeThreshold) {
          let dy = fadeThreshold / loc;

          pg.pixels[loc + 3] = dotA * dy;
          pg.pixels[loc + 3 + offset] = dotA * dy;
          pg.pixels[loc + 3 + offset * pg.width] = dotA * dy;
          pg.pixels[loc + 3 + offset * pg.width + offset] = dotA * dy;
        }

        // set pixel dots to dark mode
        else {
          pg.pixels[loc + 3] = dotA;
          pg.pixels[loc + 3 + offset] = dotA;
          pg.pixels[loc + 3 + offset * pg.width] = dotA;
          pg.pixels[loc + 3 + offset * pg.width + offset] = dotA;
        }
      }
    }

    pg.updatePixels();
  }

  // Resize the canvas when the
  // browser's size changes.
  p.windowResized = () => {
    // allow height resizing only when making screen larger
    if (p.windowHeight > windowHeight) {
      p.resizeCanvas(p.windowWidth, p.windowHeight);

      windowHeight = p.windowHeight;
    } else {
      p.resizeCanvas(p.windowWidth, windowHeight);
    }

    windowWidth = p.windowWidth;

    // recreate graphics
    createGraphics();

    // reset values for each blob
    setVars();
  };

  function clearGraphics() {
    blobYG.clear();
    blobBM.clear();
    blobRC.clear();
    blobStroke.clear();
  }

  function createGraphics() {
    blobYG = p.createGraphics(windowWidth, windowHeight);
    blobBM = p.createGraphics(windowWidth, windowHeight);
    blobRC = p.createGraphics(windowWidth, windowHeight);
    blobStroke = p.createGraphics(windowWidth, windowHeight);
  }
}
