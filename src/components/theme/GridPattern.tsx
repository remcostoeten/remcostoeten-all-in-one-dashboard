"use client";

import GridPattern from "../effects/magicui/grid-pattern";

export default function GridPatternLinearGradient() {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background fixed p-20 md:shadow-xl -z-10 mx-auto grid-pattern">
        <GridPattern width={60} height={60} x={-1} y={-1} />
      </div>
    </>
  );
}
