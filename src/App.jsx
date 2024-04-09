import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;

// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Environment, Html } from "@react-three/drei";

// function Earth() {

//   const earthRef = useRef(null)

//   useFrame(()=>{
//     earthRef.current.rotation.x += 1
//   })

//   return (
//     <mesh ref={earthRef}>
//       <sphereGeometry args={[1, 32, 32]} />
//       <meshStandardMaterial>
//         <texture url='https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg' />
//       </meshStandardMaterial>
//     </mesh>
//   );
// }
// function App() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 0, 5] }} className='bg-red-100'>
//         <ambientLight intensity={0.5} />
//         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//         <pointLight position={[-10, -10, -10]} color='red' />

//         <OrbitControls />
//         <Earth />
//         <Environment preset='city' />

//         <Html center>
//           <div className='text-lg font-bold text-blue-600 text-center underline uppercase'>
//             Welcome to the Earth!
//           </div>
//         </Html>
//       </Canvas>
//     </div>
//   );
// }

// export default App;
