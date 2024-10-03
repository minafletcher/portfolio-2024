export default function NoiseSketch(p, props) {
  let simplex,
    noiseImg,
    t = 0;

  let height = p.windowHeight;
  let width = p.windowWidth;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);

    simplex = new SimplexNoise();

    noiseImg = p.createImage(p.int(p.width / 2), p.int(p.height / 2));

    noiseImg.loadPixels();
  };

  p.draw = () => {
    p.background('#353532');
    t += 0.001;

    for (let rows = 0; rows < height * 2; rows += 8) {
      for (let cols = 0; cols < width * 2; cols += 6) {
        const n = simplex.noise3D(cols / 1200, rows / 1200, t) * 0.5 + 0.5;

        let index = cols + rows * p.width;

        noiseImg.pixels[index + 0] = 0;
        noiseImg.pixels[index + 1] = 0;
        noiseImg.pixels[index + 2] = 0;
        noiseImg.pixels[index + 3] = 255 * p.floor(n + 0.5);

      }
    }

    noiseImg.updatePixels();

    p.image(noiseImg, 0, 0, p.windowWidth, p.windowHeight);
  };

  // p.windowResized = () => {
  //   p.resizeCanvas(p.windowWidth, p.windowHeight);
    
  //   p.image(noiseImg, 0, 0, p.windowWidth, p.windowHeight)

  // }
};

