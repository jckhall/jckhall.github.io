import * as THREE from "three";
import React, {
  Suspense,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { extend, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  ContactShadows,
} from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

extend({ SphereGeometry: THREE.SphereGeometry });

const AnimatedMaterial = a(MeshDistortMaterial);

export default function Scene({ setBg, onSphereClick }) {
  const sphere = useRef();
  const light = useRef();
  const [mode, setMode] = React.useState(false);
  const [{ down, hovered }, setInteractionState] = React.useState({
    down: false,
    hovered: false,
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? "none" : "auto";
  }, [hovered]);

  const updateSpherePosition = useCallback(
    (state) => {
      if (sphere.current) {
        sphere.current.position.x = THREE.MathUtils.lerp(
          sphere.current.position.x,
          hovered ? state.mouse.x / 1.1 : 0,
          0.2
        );
        sphere.current.position.y = THREE.MathUtils.lerp(
          sphere.current.position.y,
          Math.sin(state.clock.elapsedTime / 1.5) / 8 +
            (hovered ? state.mouse.y / 1.1 : 0),
          0.2
        );
      }
    },
    [hovered]
  );

  useFrame((state) => {
    if (light.current) {
      light.current.position.x = state.mouse.x * 20;
      light.current.position.y = state.mouse.y * 20;
    }
    updateSpherePosition(state);
  });

  const { wobble, coat, color, ambient, env } = useSpring({
    wobble: down ? 1.95 : hovered ? 1.92 : 1.83,
    coat: 1,
    ambient: hovered ? 0.5 : 0.8,
    env: hovered ? 1 : 0.7,
    color: hovered ? "#E8B059" : "#202020",
    config: (n) =>
      n === "wobble" && hovered
        ? { mass: 5, tension: 1000, friction: 3 }
        : { mass: 1, tension: 500, friction: 20 },
  });

  const handlePointerUp = useCallback(() => {
    setInteractionState((state) => ({ ...state, down: false }));
    setMode((prevMode) => !prevMode);
    setBg({
      background: mode ? "#202020" : "#f0f0f0",
      fill: mode ? "#f0f0f0" : "#202020",
    });
    onSphereClick();
  }, [mode, setBg, onSphereClick]);

  const memoizedSphere = useMemo(
    () => (
      <a.mesh
        ref={sphere}
        scale={wobble}
        position={[0, 0, 0]}
        onPointerOver={() =>
          setInteractionState((state) => ({ ...state, hovered: true }))
        }
        onPointerOut={() =>
          setInteractionState((state) => ({ ...state, hovered: false }))
        }
        onPointerDown={() =>
          setInteractionState((state) => ({ ...state, down: true }))
        }
        onPointerUp={handlePointerUp}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <AnimatedMaterial
          color={color}
          envMapIntensity={env}
          clearcoat={coat}
          clearcoatRoughness={0}
          metalness={0.3}
        />
      </a.mesh>
    ),
    [wobble, color, env, coat, handlePointerUp]
  );

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <a.ambientLight intensity={ambient} />
        <a.pointLight
          ref={light}
          position-z={-15}
          intensity={env}
          color="#F8C069"
        />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        {memoizedSphere}
        <Environment preset="dawn" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={mode ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      </Suspense>
    </>
  );
}
