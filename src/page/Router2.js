import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Router2 = () => {
    const {
        unityProvider,
        UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
      } = useUnityContext({
        loaderUrl: "build/html-hosting.loader.js",
        dataUrl: "build/html-hosting.data",
        frameworkUrl: "build/html-hosting.framework.js",
        codeUrl: "build/html-hosting.wasm",
      });
    
      useEffect(() => {
        return () => {
          detachAndUnloadImmediate().catch((reason) => {
            console.log(reason);
          });
        };
      }, [detachAndUnloadImmediate]);

  return (
    <div>
      <div>Router 2</div>
      <Unity unityProvider={unityProvider} />
    </div>
  );
};

export default Router2;
