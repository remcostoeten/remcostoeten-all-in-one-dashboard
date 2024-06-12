// // export const navVariants = {
//     hidden: { scale: 0.99, transformOrigin: 'bottom', opacity: 0, height: 0 },
//     visible: {
//         opacity: 1,
//         height: 'var(--nav-height)',
//         transform: 'translateZ(0)',
//         scale: 1
//     }
// }

import { BEZIER_CURVES } from './bezier-curves'

export const navVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: 'var(--nav-height)',
        transition: {
            duration: 0.8,
            ease: BEZIER_CURVES.CUSTOM
        }
    }
}

export const defaultTransition = {
    duration: 0.8,
    ease: BEZIER_CURVES.CUSTOM
}
