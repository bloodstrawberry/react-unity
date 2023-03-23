import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Router2 = () => {
    const {
        unityProvider,
        sendMessage, // unity 함수를 호출하기 위한 sendMessage 추가
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
      {/* 버튼 추가 */}
      <button onClick={() => sendMessage("Cube", "changeRotate")}>Rotate!!</button>
      <div>Router 2</div>
      <Unity unityProvider={unityProvider} style={{width:"50%"}}/>
    </div>
  );
};

export default Router2;
