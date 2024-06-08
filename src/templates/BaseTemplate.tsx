import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import RayBackground from "@/components/theme/AnimGrid";
import GridPattern from "@/components/effects/magicui/grid-pattern";

const BaseTemplate = (props: {
  leftNav: ReactNode;
  rightNav?: ReactNode;
  children: ReactNode;
}) => {
  const t = useTranslations("BaseTemplate");

  return (
    <div className="relative w-screen h-screen">
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background fixed p-20 md:shadow-xl -z-10 mx-auto grid-pattern">
        {/* <GridPattern width={60} height={60} /> */}
      </div>{" "}
      {/* Other content */}
    </div>
  );
};

export { BaseTemplate };
