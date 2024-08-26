import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { MathUtils } from "three";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import { useAspect } from "@react-three/drei";

export default function Blobs() {
  const mesh1Ref = useRef();
  const mesh2Ref = useRef();
  const mesh3Ref = useRef();
  const mesh4Ref = useRef();
  const hover1 = useRef(false);
  const hover2 = useRef(false);
  const hover3 = useRef(false);
  const hover4 = useRef(false);

  const blobTexture1 = useLoader(TextureLoader, "glitch-texture.png");
  const blobTexture2 = useLoader(TextureLoader, "white-marble.png");
  const blobTexture3 = useLoader(TextureLoader, "colored-dots-texture.png");
  const blobTexture4 = useLoader(TextureLoader, "glitch-texture-2.png");

  const { viewport } = useThree();

  const uniforms1 = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.5 },
      uTexture: { type: "t", value: blobTexture1 },
    };
  }, []);

  const uniforms2 = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.5 },
      uTexture: { type: "t", value: blobTexture2 },
    };
  }, []);

  const uniforms3 = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.5 },
      uTexture: { type: "t", value: blobTexture3 },
    };
  }, []);
  const uniforms4 = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.5 },
      uTexture: { type: "t", value: blobTexture4 },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;

    if (mesh1Ref.current) {
      mesh1Ref.current.material.uniforms.u_time.value =
        0.1 * clock.getElapsedTime();

      mesh1Ref.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh1Ref.current.material.uniforms.u_intensity.value,
        hover1.current ? 1 : 0.15,
        0.02
      );
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.material.uniforms.u_time.value =
        0.1 * clock.getElapsedTime();

      mesh2Ref.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh2Ref.current.material.uniforms.u_intensity.value,
        hover2.current ? 1 : 0.15,
        0.02
      );
    }
    if (mesh3Ref.current) {
      mesh3Ref.current.material.uniforms.u_time.value =
        0.1 * clock.getElapsedTime();

      mesh3Ref.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh3Ref.current.material.uniforms.u_intensity.value,
        hover3.current ? 1 : 0.15,
        0.02
      );
    }
    if (mesh4Ref.current) {
      mesh4Ref.current.material.uniforms.u_time.value =
        0.1 * clock.getElapsedTime();

      mesh4Ref.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh4Ref.current.material.uniforms.u_intensity.value,
        hover4.current ? 1 : 0.15,
        0.02
      );
    }
  });

  return (
    <>
      <mesh
        ref={mesh1Ref}
        onPointerOver={() => (hover1.current = true)}
        onPointerOut={() => (hover1.current = false)}
        position-x={viewport.width / 24}
        position-y={viewport.height / 2.35}
        position-z={-2.5}
        scale={1.65 - 7 / viewport.width}
      >
        <icosahedronGeometry args={[2, 20]} />
        <shaderMaterial
          uniforms={uniforms1}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
      <mesh
        ref={mesh2Ref}
        onPointerOver={() => (hover2.current = true)}
        onPointerOut={() => (hover2.current = false)}
        position-x={-viewport.width / 2.75}
        position-y={viewport.width / 8}
        position-z={-2.5}
        scale={2.5 - 10 / viewport.width}
      >
        <icosahedronGeometry args={[2, 20]} />
        <shaderMaterial
          uniforms={uniforms2}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
      <mesh
        ref={mesh3Ref}
        onPointerOver={() => (hover3.current = true)}
        onPointerOut={() => (hover3.current = false)}
        position-x={viewport.width / 2.5}
        position-y={viewport.width / 6}
        position-z={-2.5}
        scale={2 - 8 / viewport.width}
      >
        <icosahedronGeometry args={[2, 20]} />
        <shaderMaterial
          uniforms={uniforms3}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
      <mesh
        ref={mesh4Ref}
        onPointerOver={() => (hover4.current = true)}
        onPointerOut={() => (hover4.current = false)}
        position-x={viewport.width / 8}
        position-y={-viewport.height / 4.5}
        position-z={-2.5}
        scale={1.5 - 4 / viewport.width}
      >
        <icosahedronGeometry args={[2, 20]} />
        <shaderMaterial
          uniforms={uniforms4}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    </>
  );
}
