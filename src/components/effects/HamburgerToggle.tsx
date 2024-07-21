// 'use client'

// import { useMenuStore } from '@/core/stores/MenuStore'
// import type React from 'react'

// const HamburgerToggle = () => {
//     const { isExpanded, setIsExpanded } = useMenuStore()

//     const toggleMenu = () => {
//         setIsExpanded(!isExpanded)
//     }

//     return (
//         <button
//
//             className={`p-1  bg-ghost-active w-min border border-transparent hover:border-ghost-active rounded-md hover:bg-gray-800 h-8 grid place-items-center`}
//         >
//             <div className='flex flex-col justify-center items-center   rounded focus:outline-none'>
//                 <span
//                     className={`bg-white block transition-all duration-300 ease-out
//                     h-0.5 w-4 rounded-sm ${isExpanded ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
//                 />
//                 <span
//                     className={`bg-white block transition-all duration-300 ease-out
//                     h-0.5 w-4 rounded-sm my-0.5 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
//                 />
//                 <span
//                     className={`bg-white block transition-all duration-300 ease-out
//                     h-0.5 w-4 rounded-sm ${isExpanded ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
//                 />
//             </div>
//         </button>
//     )
// }

// export default HamburgerToggle

import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { useMenuStore } from "../../core/stores/MenuStore";

export default function HamburgerToggle() {
    return (
        <AnimatedHamburgerButton />
    );
};

const AnimatedHamburgerButton = () => {
    const [active, setActive] = useState(false);
    const { isExpanded, setIsExpanded } = useMenuStore()


    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <motion.button
                initial={false}
                animate={isExpanded ? "open" : "closed"}
                onClick={isExpanded ? () => setIsExpanded(false) : () => setIsExpanded(true)}
                className="relative w-16 h-16 p-4 scale-[.6] transition-colors hover:bg-white/20 bg-ghost-active border border-transparent hover:border-ghost-active rounded-md hover:bg-gray-800"
            >
                <motion.span
                    variants={VARIANTS.top}
                    className="absolute h-1 w-10 bg-white"
                    style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />
                <motion.span
                    variants={VARIANTS.middle}
                    className="absolute h-1 w-10 bg-white"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                    variants={VARIANTS.bottom}
                    className="absolute h-1 w-5 bg-white"
                    style={{
                        x: "-50%",
                        y: "50%",
                        bottom: "35%",
                        left: "calc(50% + 10px)",
                    }}
                />
            </motion.button>
        </MotionConfig >
    );
};

const VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "calc(50% + 10px)",
        },
    },
};
