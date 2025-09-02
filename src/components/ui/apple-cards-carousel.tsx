"use client";
import { cn } from "../../lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/use-outside-click";

export const Carousel = ({
  items,
  initialScroll = 0,
}: {
  items: React.ReactNode[];
  initialScroll?: number;
}) => {
  const carouselWrapper = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: carouselWrapper,
  });
  const [active, setActive] = useState<null | number>(null);

  const rotate = useTransform(
    scrollXProgress,
    [0, 1],
    ["-180deg", "180deg"]
  );

  useEffect(() => {
    if (carouselWrapper.current) {
      carouselWrapper.current.scrollLeft = initialScroll;
    }
  }, [initialScroll]);

  return (
    <>
      <div
        ref={carouselWrapper}
        className={cn(
          "w-full h-full flex items-center justify-start overflow-x-auto relative z-10",
          "scrollbar-hide" // For hiding scrollbar on Chrome, Safari and Opera
        )}
        style={{
          perspective: "1000px",
          // @ts-ignore
          "-ms-overflow-style": "none", // For hiding scrollbar on IE and Edge
          "scrollbar-width": "none", // For hiding scrollbar on Firefox
        }}
      >
        <div
          className={cn(
            "flex items-center h-full gap-4 p-4",
            active !== null && "justify-start"
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={"card" + index}
              className={cn(
                "h-[400px] w-[300px] md:h-[500px] md:w-[400px] rounded-2xl border border-neutral-200 dark:border-neutral-800 flex-shrink-0",
                active === index &&
                  "absolute h-[500px] w-full md:h-[600px] md:w-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                "transform-style: preserve-3d"
              )}
              style={{
                transform: `rotateY(calc(var(--rotate-y, 0) * 1deg)) translateZ(calc(var(--translate-z, 0) * 1px))`,
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
              onClick={() => setActive(index)}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      {typeof active === "number" && (
        <Overlay card={items[active]} active={active} setActive={setActive} />
      )}
    </>
  );
};

export const Card = ({
  card,
  index,
  active,
  setActive,
}: {
  card: {
    src: string;
    title: React.ReactNode;
    category: React.ReactNode;
    content: React.ReactNode;
  };
  index: number;
  active?: number | null;
  setActive?: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: ref,
  });

  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [1, 1.2, 1]);

  useOutsideClick(ref, () => {
    setActive && setActive(null);
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "h-full w-full rounded-2xl overflow-hidden relative",
        typeof active === "number" &&
          active === index &&
          "overflow-y-auto scrollbar-hide"
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="h-full w-full"
        style={{
          scale,
          background: `url("${card.src}") center center/cover`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 bg-black/40 h-full w-full" />
        <div className="absolute bottom-0 p-8 text-white w-full">
          <p className="text-neutral-300 text-sm">{card.category}</p>
          <p className="text-2xl md:text-4xl font-semibold">{card.title}</p>
        </div>
      </motion.div>
      {typeof active === "number" && active === index && (
        <div className="absolute inset-0 h-full w-full bg-white dark:bg-black z-20 p-4 md:p-10">
          <button
            onClick={() => setActive && setActive(null)}
            className="absolute top-4 right-4 text-neutral-500 dark:text-neutral-400"
          >
            <IconClose />
          </button>
          <p className="text-neutral-400 text-sm mt-10">{card.category}</p>
          <p className="text-2xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200">
            {card.title}
          </p>
          <div className="py-10 text-neutral-600 dark:text-neutral-400">
            {card.content}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Overlay = ({
  active,
  setActive,
  card,
}: {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
  card: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setActive(null));

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="fixed inset-0 h-screen w-screen bg-black/80 z-50 flex items-center justify-center"
    >
      <div
        ref={ref}
        className="h-[80%] w-[90%] md:w-[60%] relative"
      >
        {card}
      </div>
    </motion.div>
  );
};

export const IconClose = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};