import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export  const FramerAppear = ({ children, delay = 0 }: any) => {
  const controls = useAnimation();
  const ref = useRef(null)
  const isInView = useInView(ref)

  const handleFocus = () => {
    controls.start({ opacity: 1 });
  };

  const handleBlur = () => {
    controls.start({ opacity: 0 });
  };
  useEffect(() => {
    if (isInView)
      handleFocus();
  }, [isInView])
  return (
    <motion.div
      ref={ref}
      onFocus={handleFocus}
      onBlur={handleBlur}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.3, delay: delay}}
    >
      {children}
    </motion.div>
  );
};
