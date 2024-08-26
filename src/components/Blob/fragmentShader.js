const fragmentShader = `
    uniform float u_intensity;
    uniform float u_time;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vDisplacement;

    void main() {
        vec4 color = texture2D(uTexture, vUv);
        gl_FragColor = vec4(color);
    }

    `;

    export default fragmentShader;