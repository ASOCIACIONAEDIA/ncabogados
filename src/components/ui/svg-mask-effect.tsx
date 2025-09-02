"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 300,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("h-screen relative bg-grid-white/[0.2] flex items-center justify-center overflow-hidden", className)}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="absolute inset-0 bg-black h-full w-full z-0" />
      <div
        className="absolute inset-0 h-full w-full bg-grid-black/[0.2] z-0"
        style={{
          WebkitMaskImage: `url(/mask.svg)`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "40px",
          maskImage: `url(/mask.svg)`,
          maskRepeat: "no-repeat",
          maskSize: "40px",
        }}
      ></div>

      <h1 className="text-white text-4xl md:text-8xl max-w-4xl text-center z-10">
        {children}
      </h1>
      <motion.div
        className="absolute inset-0 bg-black h-full w-full z-0"
        animate={{
          WebkitMaskPosition: `${mousePosition.x - revealSize / 2}px ${
            mousePosition.y - revealSize / 2
          }px`,
          WebkitMaskSize: `${revealSize}px`,
          maskPosition: `${mousePosition.x - revealSize / 2}px ${
            mousePosition.y - revealSize / 2
          }px`,
          maskSize: `${revealSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        style={{
          WebkitMaskImage: `url(/mask.svg)`,
          WebkitMaskRepeat: "no-repeat",
          maskImage: `url(/mask.svg)`,
          maskRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white h-full w-full" />
      </motion.div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center font-bold text-4xl md:text-8xl absolute inset-0 text-black flex items-center justify-center">
          {revealText}
        </div>
      </div>
    </div>
  );
};