import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computer = ({ isMobile }) => {
  const computer = useGLTF("./computer_desk/scene.gltf");


  const boxRef = useRef(null);

  useFrame(()=> {
    boxRef.current.rotation.y += 0.01
  })
  return (
    <mesh ref={boxRef}>
      <hemisphereLight intensity={3} groundColor="white" />
      <spotLight
        position={[-10, 50, 10]}
        angle={1.12}
        penumbra={2}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 3.0 : 2}
        position={isMobile ? [0, -2, 0] : [0, -1.5, -1.5]}
        rotation={[0, 0, 0]}

      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
      <Canvas
  
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />

        <Preload all />
      </Canvas>
  );
};

export default ComputerCanvas;
