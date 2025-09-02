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
          "w-full overflow-x-auto relative z-10 pb-4",
          "scrollbar-hide" // For hiding scrollbar on Chrome, Safari and Opera
        )}
        style={{
          // @ts-ignore
          "-ms-overflow-style": "none", // For hiding scrollbar on IE and Edge
          "scrollbar-width": "none", // For hiding scrollbar on Firefox
        }}
      >
        <div
          className={cn(
            "flex items-center gap-4 px-4 py-8",
            active !== null && "justify-start"
          )}
          style={{
            width: "max-content",
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={"card" + index}
              className={cn(
                "h-[350px] w-[280px] sm:h-[400px] sm:w-[320px] md:h-[450px] md:w-[350px] rounded-2xl border border-neutral-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 cursor-pointer",
                active === index &&
                  "fixed h-[80vh] w-[90vw] sm:h-[85vh] sm:w-[80vw] md:h-[90vh] md:w-[70vw] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
              )}
              onClick={() => setActive(index)}
              whileHover={{ scale: active === index ? 1 : 1.02 }}
              transition={{ duration: 0.2 }}
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
        <div className="absolute bottom-0 p-4 sm:p-6 md:p-8 text-white w-full">
          <p className="text-yellow-400 text-xs sm:text-sm font-medium mb-2">{card.category}</p>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight line-clamp-3">{card.title}</p>
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