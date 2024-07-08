import { cn } from "../../utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  colour1 = "#F0DB4F",
  colour2 = "#E4C860",
  colour3 = "#FFD700",
  colour4 = "#FF0000",
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  const backgroundStyle = {
    backgroundImage: `
      radial-gradient(circle farthest-side at 0% 100%, ${colour1}, transparent),
      radial-gradient(circle farthest-side at 100% 0%, ${colour2}, transparent),
      radial-gradient(circle farthest-side at 100% 100%, ${colour3}, transparent),
      radial-gradient(circle farthest-side at 0% 0%, ${colour4}, #141316)
    `,
    backgroundSize: animate ? "400% 400%" : undefined,
  };

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={backgroundStyle}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={backgroundStyle}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform"
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
