import { useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

const useAnimateOnInView = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return { ref };
};

export default useAnimateOnInView;
