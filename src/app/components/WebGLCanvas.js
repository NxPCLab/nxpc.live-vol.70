"use client";
import { useEffect, useRef } from "react";

const WebGLCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let gl;
    let shaderProgram;
    let uResolution;
    let uTime;

    const initGL = (canvas) => {
      gl = canvas.getContext("webgl");
      if (!gl) {
        alert("Unable to initialize WebGL. Your browser may not support it.");
        return;
      }
    };

    const initShaderProgram = () => {
      const vertexShaderSource = `
        attribute vec4 aVertexPosition;
        void main() {
            gl_Position = aVertexPosition;
        }
      `;

      const fragmentShaderSource = `
        precision mediump float;
        uniform vec2 u_resolution;
        uniform float u_time;

        float customGradient(float t) {
            return pow(t, 3.0);
        }

        void main() {
            vec2 uv = gl_FragCoord.xy / u_resolution.xy;
            uv = uv * 2.0 - 1.0;
            uv *= u_resolution.xy / min(u_resolution.x, u_resolution.y);

            float distanceFromCenter = length(uv);
            // vec3 base = vec3(0.388, 0.541, 0.655);
            vec3 base = vec3(0.25, 0.541, 0.655);
            vec3 light = base*1.2;
            vec3 shadow = base*1.175;
            vec3 colorCenter = vec3(1.0);

            float movingCircles = mod(distanceFromCenter * 2.5 - u_time * 0.5, 1.0);

            float gradientLeft = customGradient(smoothstep(0.0, 0.5, movingCircles));
            vec3 leftToCenter = light * (1.0 - gradientLeft) + colorCenter * gradientLeft;

            float gradientRight = customGradient(smoothstep(0.5, 1.0, movingCircles));
            vec3 centerToRight = colorCenter * (1.0 - gradientRight) + shadow * gradientRight;

            float blendFactor = smoothstep(0.01, 0.99, movingCircles);
            vec3 innerSmooth = leftToCenter * (1.0 - blendFactor) + centerToRight * blendFactor;

            gl_FragColor = vec4(innerSmooth, 1.0);
        }
      `;

      const loadShader = (gl, type, source) => {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          alert(
            "An error occurred compiling the shaders: " +
              gl.getShaderInfoLog(shader)
          );
          gl.deleteShader(shader);
          return null;
        }

        return shader;
      };

      const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
      const fragmentShader = loadShader(
        gl,
        gl.FRAGMENT_SHADER,
        fragmentShaderSource
      );

      shaderProgram = gl.createProgram();
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);

      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert(
          "Unable to initialize the shader program: " +
            gl.getProgramInfoLog(shaderProgram)
        );
        return null;
      }

      gl.useProgram(shaderProgram);

      uResolution = gl.getUniformLocation(shaderProgram, "u_resolution");
      uTime = gl.getUniformLocation(shaderProgram, "u_time");
    };

    const resizeCanvasToDisplaySize = (canvas) => {
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      canvas.width = displayWidth;
      canvas.height = displayHeight;

      canvas.style.width = displayWidth + "px";
      canvas.style.height = displayHeight + "px";

      gl.viewport(0, 0, displayWidth, displayHeight);
    };

    const drawScene = () => {
      resizeCanvasToDisplaySize(gl.canvas);

      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform2f(uResolution, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(uTime, performance.now() / 1000.0);

      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      const positions = [-1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0];
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(positions),
        gl.STATIC_DRAW
      );

      const positionAttributeLocation = gl.getAttribLocation(
        shaderProgram,
        "aVertexPosition"
      );
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.vertexAttribPointer(
        positionAttributeLocation,
        2,
        gl.FLOAT,
        false,
        0,
        0
      );

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const animate = () => {
      drawScene();
      requestAnimationFrame(animate);
    };

    const canvas = canvasRef.current;
    initGL(canvas);
    initShaderProgram();
    animate();

    window.addEventListener("resize", () =>
      resizeCanvasToDisplaySize(gl.canvas)
    );

    return () => {
      window.removeEventListener("resize", () =>
        resizeCanvasToDisplaySize(gl.canvas)
      );
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default WebGLCanvas;
