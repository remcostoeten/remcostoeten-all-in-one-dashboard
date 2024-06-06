import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import RayBackground from "@/components/theme/AnimGrid";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/core/utils/utils";

const BaseTemplate = (props: {
  leftNav: ReactNode;
  rightNav?: ReactNode;
  children: ReactNode;
}) => {
  const t = useTranslations("BaseTemplate");

  return (
    <div className="relative w-screen h-screen">
 <AnimatedGridPattern
        numSquares={15}
        maxOpacity={0.3}
        duration={1}
        repeatDelay={.1}
        className={cn(
          "[mask-image:radial-gradient(40vh_circle_at_center,white,transparent)]",
          // "inset-0 h-full w-full",

        )}
      />    {/* Other content */}
  </div> );
};

export { BaseTemplate };
