{
  /* POPUP THAT WILL APPEAR IN THE HOME PAGE */
}
{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        PoPUP
      </div> */
}

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/island";

const Home = () => {
  // screen adjustment ke liye hmare pass hmein aik function bnana prega
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    // default rotation bhi btarhe hain hm
    let rotation = [0.1, 4, 7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    // hmne return krdia hai array screenScale ka aur screenPosition ka --
    // rotation bhi return krrhe hai aur inko hm as props use krleinge models mein
    return [screenScale, screenPosition, rotation];
  };

  // function ko call krrhe hain aur jo chezein usmein se return horhi hain unko use krrhe hain hm apne pass
  // yh do variables hmne destructure krlie hain function mein se ab inko hm use krrhe hain
  // Uper wale function se jo array return krrhe hain usko extract krrhe hain hm aise
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* 3D SCREEN RENDERING OF ELEMENTS */}
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting plays an important role in 3D elements with their attributes*/}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          {/* 3D Model island */}
          {/* Island ki position ke liye position aur scale ke attributes hm pass kreinge jo function mein se ae hain hmare pass */}
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
