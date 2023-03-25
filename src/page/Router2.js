import React, { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Router2 = () => {
  const [speed, setSpeed] = useState(30.0);
 
  const {
    unityProvider,
    sendMessage, // unity 함수를 호출하기 위한 sendMessage 추가
    addEventListener, // unity -> react 통신
    removeEventListener, // unity -> react 통신
    requestFullscreen, // 전체 화면
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "build/html-hosting.loader.js",
    dataUrl: "build/html-hosting.data",
    frameworkUrl: "build/html-hosting.framework.js",
    codeUrl: "build/html-hosting.wasm",
  });

  const setSpeedUp = useCallback((curSpeed, value) => {
    setSpeed(curSpeed + value);
  }, []);

  const setSpeedDown = useCallback((curSpeed, value) => {
    setSpeed(curSpeed - value);
  }, []);

  useEffect(() => {
    addEventListener("reactSpeedUp", setSpeedUp);
    addEventListener("reactSpeedDown", setSpeedDown);

    return () => {
      detachAndUnloadImmediate().catch((reason) => {
        console.log(reason);
      });
      removeEventListener("reactSpeedUp", setSpeedUp);
      removeEventListener("reactSpeedDown", setSpeedDown);

    };
  }, [
    detachAndUnloadImmediate,
    addEventListener,
    removeEventListener,
    setSpeedUp,
    setSpeedDown,
  ]);

  const clickForFullScreen = () => {
    requestFullscreen(true)
  }

  return (
    <div>
      {/* 버튼 추가 */}
      <button onClick={() => sendMessage("Cube", "changeRotate")}>
        Rotate!!
      </button>
      <button onClick={clickForFullScreen}>
        전체 화면 on / off
      </button>
      <p>{`speed : ${speed}`}</p>
      <Unity unityProvider={unityProvider} style={{ width: "50%" }} />
    </div>
  );
};

export default Router2;
