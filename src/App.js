import logo from "./logo.svg";
import "./App.css";

import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "react-unity/build/html-hosting.loader.js",
    dataUrl: "react-unity/build/html-hosting.data",
    frameworkUrl: "react-unity/build/html-hosting.framework.js",
    codeUrl: "react-unity/build/html-hosting.wasm",
  });

  // const { unityProvider } = useUnityContext({
  //   loaderUrl: "build/html-hosting.loader.js",
  //   dataUrl: "build/html-hosting.data",
  //   frameworkUrl: "build/html-hosting.framework.js",
  //   codeUrl: "react-unity/build/html-hosting.wasm",
  // });

  return (
    <div className="App">
      <header className="App-header">
        <Unity unityProvider={unityProvider} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
