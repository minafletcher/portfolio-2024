export const animation = (p) => {
  let simplex,
    noiseImg1,
    noiseImg2,
    t = 0;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);

    simplex = new SimplexNoise();

    noiseImg1 = p.createImage(p.int(p.width / 2), p.int(p.height / 2));
    noiseImg2 = p.createImage(p.int(p.width / 2), p.int(p.height / 2));

    noiseImg1.loadPixels();
    noiseImg2.loadPixels();
  };

  p.draw = () => {
    p.background(0);
    t += 0.001;

    for (let rows = 0; rows < p.height * 2; rows += 4) {
      for (let cols = 0; cols < p.width * 2; cols += 4) {
        const n = simplex.noise3D(cols / 600, rows / 600, t) * 0.5 + 0.5;

        let index = cols + rows * p.width;
        // let indexMouse = mouseX + mouseY * p.width;

        const color = mapNoiseToColor(n);

        const distance = p.dist(cols, rows, p.mouseX, p.mouseY);

        // if (distance < 100) {
        //     // noiseImg1.pixels[index + 0] = 255 - n*255;
        //     // noiseImg1.pixels[index + 1] = 255 - (255-n*250);
        //     // noiseImg1.pixels[index + 2] = 255 - 200/n;
        //     // noiseImg1.pixels[index + 3] = 255 - 255*p.floor(n+0.5);

        //     // noiseImg2.pixels[index + 0] = 255 - 255 - n*250;
        //     // noiseImg2.pixels[index + 1] = 255 - n*255;
        //     // noiseImg2.pixels[index + 2] = 255 - 200/n;
        //     // noiseImg2.pixels[index + 3] = 255-255-(n+0.7)*255;
        // }
        // else {
        noiseImg1.pixels[index + 0] = 255 - n * 250;
        noiseImg1.pixels[index + 1] = n * 255;
        noiseImg1.pixels[index + 2] = 200 / n;
        noiseImg1.pixels[index + 3] = 255 * p.floor(n + 0.5);

        noiseImg2.pixels[index + 0] = 255 - n * 250;
        noiseImg2.pixels[index + 1] = n * 255;
        noiseImg2.pixels[index + 2] = 200 / n;
        noiseImg2.pixels[index + 3] = 255 - (n + 0.7) * 255;
        // }
      }
    }

    noiseImg1.updatePixels();
    noiseImg2.updatePixels();

    p.image(noiseImg1, 0, 0, p.width, p.height);
    p.image(noiseImg2, 0, 0, p.width, p.height);
  };
};

// Function to map noise value to a color
function mapNoiseToColor(value) {
  // Define the colors (black, red, green, blue, yellow)
  const colors = [
    [0, 0, 0], // Black
    [255, 0, 0], // Red
    [255, 255, 0], // Yellow
    [0, 255, 0], // Green
    [0, 0, 255], // Blue
  ];

  // Determine the number of colors
  const numColors = colors.length;

  // Calculate the index for the color
  const index = Math.floor(value * (numColors - 1));
  const nextIndex = (index + 1) % numColors;
  const blend = value * (numColors - 1) - index;

  // Interpolate between colors
  return interpolateColor(colors[index], colors[nextIndex], blend);
}

// Function to interpolate between two colors
function interpolateColor(color1, color2, factor) {
  const r = Math.round(color1[0] + factor * (color2[0] - color1[0]));
  const g = Math.round(color1[1] + factor * (color2[1] - color1[1]));
  const b = Math.round(color1[2] + factor * (color2[2] - color1[2]));
  return [r, g, b, 255]; // Return the interpolated color with full opacity
}
