import BigBlock from './components/BigBlock';

import LoadingSpinner from './components/LoadingSpinner';
import NavBar from './components/NavBar';
import ResultText from './components/ResultText';
import SubmitButton from './components/SubmitButton';
import Canvas from './components/Canvas';
import SingleFileUploader from   './components/fileUpload';
function App(){
  
  return <div> <NavBar />
    {/* <ListGroup /> */}
    <BigBlock />
    {/* <ProgressBar /> */}
    <Canvas />
    <SingleFileUploader />
    <SubmitButton />
    <ResultText />
    <LoadingSpinner/>
    </div>
}
export default App;
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
