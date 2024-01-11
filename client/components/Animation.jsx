import { React, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const RevealX = ({ children, width = "fit-content", delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateX: -50 },
        visible: { opacity: 1, translateX: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, ease: "easeIn", delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export const RevealY = ({ children, width = "fit-content", delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateY: -50 },
        visible: { opacity: 1, translateY: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, ease: "easeIn", delay: delay }}
    >
      {children}
    </motion.div>
  );
};
