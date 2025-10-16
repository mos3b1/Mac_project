import React, { Suspense } from "react";
import useMacbookStore from "../Store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// FIXED: Import correct component names
import MAckbookModel14 from "./modals/Macbook-14";
import MAckbook16pro from "./modals/Macbook-16";
import {useMediaQuery} from "react-responsive";
import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModalSwithcher";


function ProductViewer() {
  const { color, scale, setColor, setScale } = useMacbookStore();

  // FIXED: Corrected scale logic to match ModelSwitcher
  // 14" model uses scale 0.06 (desktop) or 0.03 (mobile)
  // 16" model uses scale 0.08 (desktop) or 0.05 (mobile)
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)'});

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <div className="controls">
        <p className="info">
          {/* FIXED: Display correct size based on scale */}
          MacbookPro {scale === 0.06 ? '14"' : '16"'} in Space{" "}
          {color === "#adb5bd" ? "Gray" : "Black"}
        </p>
        <div className="flex-center gap-5 mt-5">
          {/* Color selector */}
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active"
              )}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
            />
          </div>

          {/* Size selector */}
          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Three.js Canvas - This is where 3D rendering happens */}
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        {/* Lighting setup for the 3D scene */}
        <StudioLights />

        {/* Component that handles switching between 14" and 16" models */}
        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
}

export default ProductViewer;