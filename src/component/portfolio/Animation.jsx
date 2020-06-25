import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import animation from "./animation.module.scss";

function Animation(props) {
  const container = useRef(null);
  const url = props.anim;
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      //   animationData: animationDataVar,
      path: url,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      },
    });
  }, []);
  return <div className={animation.container} ref={container}></div>;
}

export default Animation;
