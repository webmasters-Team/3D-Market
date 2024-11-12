const commonr3fCode = [
  {
    filename: 'package.json',
    code: `
{
"scripts": {
  "test": "react-scripts test --env=jsdom",
  "start": "react-scripts start",
  "eject": "react-scripts eject",
  "build": "react-scripts build"
},
"devDependencies": {
  "react-scripts": "4.0.3"
},
"dependencies": {
  "@react-three/drei": "4.3.3",
  "@react-three/fiber": "6.0.19",
  "@types/three": "0.127.1",
  "react": "17.0.2",
  "react-dom": "17.0.2",
  "three": "0.128.0"
},
"browserslist": [
  ">0.2%",
  "not dead",
  "not ie <= 11",
  "not op_mini all"
]
}
`,
  },
  {
    filename: '.gitignore',
    code: `
  node_modules
  build
`,
  },
  {
    filename: 'src/style.css',
    code: `
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }
          
`,
  },
  {
    filename: 'src/index.js',
    code: `
  import React from 'react'
  import ReactDOM from "react-dom"
  import './style.css'
  import App from "./App"
  
  ReactDOM.render(<App />, document.getElementById("root"))
`,
  },
  {
    filename: 'src/App.js',
    code: `
  import React, { Suspense, useRef } from "react";
  import { Canvas } from "@react-three/fiber";
  import { OrbitControls, Stage } from "@react-three/drei";
  import Model from "./Model";
  
  export default function Viewer() {
    const ref = useRef();
  
    return (
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <Stage
            controls={ref}
            preset="rembrandt"
            intensity={1}
            environment="city"
          >
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
    );
  }    
`,
  },
  {
    filename: 'public/index.html',
    code: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <!--
                  manifest.json provides metadata used when your web app is added to the
                  homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
                -->
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    
        <title>React App</title>
      </head>
    
      <body>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <div id="root"></div>
      </body>
    </html>    
`,
  },
]

export default commonr3fCode
