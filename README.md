# 3D Portfolio using Threejs

- This is the threejs portfolio building using the threejs and react.

## Tailwindcss

- installomg tailwindcss.
- index.css mein github-gist se code paste krrhe hain
- uske ilawa tailwind-config mein bhi github-gist se copy krrhe hain code.

## Routing

- npm i react-router-dom 
- By using this we can apply routing in our application
- 4-Routes created -- Home,About,Projects,Contact
- Navbar se link krne ke liye hm Navlink ka tag use kreinge jo ke hmein react-router-dom se milta hai -- by the help of this hm link krleinge within the application without reloading and it is the best one

### Home Page:

- Is page ko hm semantic element deinge all the way root pe jo hai section.
- Iski width full kredeinge hm apne pass all the way.
- 2 chezein hain ismein hmare pass
- 1- POPUP
- 2- 3D Screen

## 3D Development - npm i @react-three/fiber  -- https://sketchfab.com/ -- https://gltf.pmnd.rs/

- react three fiber is renderer for threejs in react.
- Canvas is the root element
- camera={{ near: 0.1, far: 1000 }}  -- camera property ko hm canvas mein add krdeinge iska matlb yh hai ke jo objects kareeb hain wo render hojainge hmare pass aur jo door hain wo render nhi hnge 1000 se.
- Suspense react buildin component ke liye use kreinge for loading.
- Suspense mein hmne Loader call krlia hai component lekin yh chalega nhi uski waja yh hai ke yh hmare pass jo hai yh 3d element nhi hai to isko 3d element bnana hoga hmein.
- @react-three/drei  helper library hai isko use krke hm threejs mein help leskte hain kionke yh helper library hai components mein help krdeti hai yh
- import { Html } from "@react-three/drei";  -- is element se hmne import krlia hai aur isse hm wrap krdeinge application ko all the way apne pass.
- https://sketchfab.com/ -- is website se hmare pass free mein 3D leskte hain hm -- .glb ki files ko hm use kreinge.
- .glb ki files ko hm use kreinge hm apne pass aur phr usse hm jsx bnaleinge aur phr usko use krleinge hm apne pass.
- https://gltf.pmnd.rs/  -- yh three-js-fiber ki team ne bnaya hai aur isse faida yh hoga hmein ke hm apna 3D model .glb file is mein daleinge aur yh hmein jsx react component bnake dedega - hm us component ko customize krleinge aur phr usko use krleinge - isse hmara 3D model hm use krleinge apne pass application mein.
- Meshes in 3D : In Three.js, a mesh is one of the fundamental objects used for rendering 3D graphics. It represents a geometric object made up of vertices, edges, and faces. Meshes are constructed from geometries and materials.
- Geometry: The geometry of a mesh defines its shape. It consists of vertices (points in 3D space), edges (lines connecting vertices), and faces (polygons formed by connecting vertices).
Three.js provides various built-in geometries such as BoxGeometry, SphereGeometry, PlaneGeometry, and more. You can also create custom geometries by specifying vertex positions and connecting them to form faces.
- Material: The material of a mesh defines its appearance, including its color, texture, transparency, shininess, etc.
Three.js offers a wide range of materials like MeshBasicMaterial, MeshStandardMaterial, MeshPhongMaterial, etc., each with different properties and shaders.
Materials can be solid colors, images (textures), or complex shaders.
- Mesh in 3D is actually the combination of geometry and material.
- A mesh is the combination of geometry and material. It represents the visual appearance of a 3D object in the scene.
- When you create a mesh, you typically specify a geometry and a material. For example:
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);  -- combination of geometry and material.
- Mesh ko hm manipulate krskte hain by giving properties like: position,rotaton & scale properties.
- Mesh bnane ke bad hmein mesh ko scene mein add krna hota hai aur wo hm krte hain -- scene.add(mesh);
- When the scene is rendered, Three.js processes each mesh, applying its geometry, material, and transformations to generate the final 3D image.
- Meshes are fundamental building blocks in Three.js and are used extensively in creating 3D scenes ranging from simple shapes to complex models. Understanding how to work with meshes is essential for developing interactive 3D applications with Three.js.

## Models - 3D  -- npm i @react-spring/three 

- glb to jsx.
- copy paste krdia hai code hmne ab hm us code ko modify krleinge apne pass all the way acccording to react.
- yh hmein khrha hai vscode ke ot has unknown property called geometry.
- import { useFrame, useThree } from "@react-three/fiber"; -- inko import krna hoga hmein file mein
- glb ki file ko bhi import krleinge hm apne pass
- npm i @react-spring/three  -- isse hm animation wagera ke tag import kreinge aur jo models hm create krrhe hain uske andar hm isko use krleinge all the way.
- import { a } from "@react-spring/three";  -- isse hm animate ke tags import krrhe hain aur group ko animate krrhe hai take canvas mein use krlein 3d-jsx-model ko jo hmne dlb se bnaya hai apne pas.
- const islandRef = useRef();  -- hmne yhn pe ref create krlia hai aur isko hm use kreinge apme pass to create the reference all the way.
- bug arha tha could not load island scene kionke hmne assets wala ko islandScene folder se import kra hai wo nhi dia wa hai.
- Ab chalgya hai hmare pass yh lekin adjust nhi hoa wa hai yh island hmare pass kionke screen pixels ki waja se hmare pass yh show nhi horha hai 
- Hmare pass screen adjust nhi thi to 3D model ajeeb sa show krrha tha hmein to usko properly dekhne ke liye hmne position,scale,rotation ke parameters ko apne hisab se adjust kra hai aur ab wo sahi chal rha hai hmare pass.
- yhn tk hmare pass model create hochuka hai aur ab hmne usko screen pe adjsut bhi krlia hai jo values di hain usse

## Lighting in 3D:

- <directionalLight /><ambientLight /><pointLight /><spotLight /><hemisphereLight /> -- yh sare lights ke attributes hhain jinpe khelke hm apni application better bnaskte hain all the way.
- Lightening se hmari application pe bht fark prta hai ke hm kia apply krrhe hain aur isse faida yh hota hai hmein ke uthti hai chez lightening se hmare pass.
- Directional lightening -- yh aisi hai jese light arhi ho sun se direct hmare pass.
- <directionalLight position={[1, 1, 1]} intensity={0} /> -- light ki intensity se hm kheleinge aur apne hisab se light ko hm modify krleinge apne pass all the way.
- position ko bhi modify krke hm lighteing kko change krskte hain aur khelskte hain hm according to our requirement all the way.
- Ambient Light -- yh hmare




##### Extra Learning:

- Tailwind ki utility classes ko hmne use kra hai ismein all the way aur sbse phle hmne environment set krlia hai apne pass Tailwind.config.js ko update krke.
- navbar ka root element html-5 ka header tag rkha hai jo ke semantic element hai aur isko use krte we semantic element hai faida hoga
- using nav html-5 semantic element
- className={({ isActive }) => {isActive ? "text-blue-500" : "text-black"}} -- is technique ke through hmne apni classes pe ternary operator lgaya hai.
- ziada pages ko import kreinge to ghichpik hojaegi bht ziada to usko khtm krne ke liye hmare pass aik technique yh hai ke aik file bnaeinge hm index.js ki usmein hm aik sth export krdeinge to isse hoga yh ke jb aik sath export hojaeinge sb to phr aik sath import bhi hojaeinge hmare pass sb App ke page mein all the way.
- Position in css -- absolute top-28 left-0 right-0   --  absolute hoga div agar uper wala parent div relative ho hmare pass all the way.
- react error derhe thi -- quick fix mein jake - no unknown property for react file ko select krlia hai to errors remove hogae hain.
- Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. You may need to install appropriate plugins to handle the .glb file format, or if it's an asset, add "**/*.glb" to `assetsInclude` in your configuration -- yh bug arha hai to isko hmne htane ke liye vite.config.js mein jake hm  --   assetsInclude:['**/*.glb'] --  vite.config.js mein jake hm yh apne assets ka btadeinge
- eslint is constatly complaining us regarding the errors so we will go to eslint.rc to -   ignorePatterns: ['dist', '.eslintrc.cjs','src'],
- 
