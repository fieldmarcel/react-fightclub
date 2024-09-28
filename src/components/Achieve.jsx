// "use client";

import React, { useCallback, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import img from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/7.jpg";
import { cn } from "@/lib/utils"; // Update this path according to your project structure

// export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
//   gradientSize?: number;
//   gradientColor?: string;
//   gradientOpacity?: number;
// }

// export function MagicCard({
//   children,
//   className,
//   gradientSize = 200,
//   gradientColor = "#262626",
//   gradientOpacity = 0.8,
// }: MagicCardProps) {
//   const mouseX = useMotionValue(-gradientSize);
//   const mouseY = useMotionValue(-gradientSize);

//   const handleMouseMove = useCallback(
//     (e: React.MouseEvent<HTMLDivElement>) => {
//       const { left, top } = e.currentTarget.getBoundingClientRect();
//       mouseX.set(e.clientX - left);
//       mouseY.set(e.clientY - top);
//     },
//     [mouseX, mouseY]
//   );

//   const handleMouseLeave = useCallback(() => {
//     mouseX.set(-gradientSize);
//     mouseY.set(-gradientSize);
//   }, [mouseX, mouseY, gradientSize]);

//   useEffect(() => {
//     mouseX.set(-gradientSize);
//     mouseY.set(-gradientSize);
//   }, [mouseX, mouseY, gradientSize]);

//   return (
//     <div
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className={cn(
//         "group relative flex size-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border text-black dark:text-white",
//         className
//       )}
//     >
//       <div className="relative z-10">{children}</div>
//       <motion.div
//         className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//         style={{
//           background: useMotionTemplate`
//             radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
//           `,
//           opacity: gradientOpacity,
//         }}
//       />
//     </div>
//   );
// }

const Achieve = () => {
  return (
    <>
      <div className="container flex flex-col space-y-8 sm:space-y-16 p-4 sm:p-8">
        <div className="flex items-center justify-center sm:mt-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-center tracking-wide text-yellow-300 uppercase">
            What You Will Achieve
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          < div className="h-[200px] sm:h-[250px]">
            <img
              src={img}
              alt="Improved Physical Fitness"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="h-full flex flex-col justify-center bg-yellow-300 text-black rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
              IMPROVED PHYSICAL FITNESS
            </h3>
            <p className="text-center sm:text-left mt-2 sm:mt-4 leading-relaxed">
              Regular training enhances strength, flexibility, and endurance. It
              helps you stay in shape, improves cardiovascular health, and
              boosts overall energy levels.
            </p>
</div>
          <div div className="h-full flex flex-col justify-center border-2 border-yellow-300 rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 text-center sm:text-left">
              DISCIPLINE AND RESPECT
            </h3>
            <p className="text-center sm:text-left mt-2 sm:mt-4 leading-relaxed">
              Training instills discipline and respect, both for oneself and
              others. It teaches the importance of dedication, hard work, and
              perseverance.
            </p>
         </div>
        </div>
      </div>
    </>
  );
};

export default Achieve;
