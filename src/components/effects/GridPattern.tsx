"use client";
import React, { useEffect, useRef } from "react";

interface GridBackgroundProps {
  rayCount: number;
  animationDuration: number; // new prop for animation duration
}

const GridBackground: React.FC<GridBackgroundProps> = ({
  rayCount,
  animationDuration,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ns = "http://www.w3.org/2000/svg";

    const verticalPathFactory = (h: number) => (x: number) => {
      const path = document.createElementNS(ns, "path");
      path.setAttribute("d", `M ${x} 0 v ${h} 0`);
      return path;
    };

    const horizontalPathFactory = (w: number) => (y: number) => {
      const path = document.createElementNS(ns, "path");
      path.setAttribute("d", `M 0 ${y} h ${w} 0`);
      return path;
    };

    const createRayGroup = (
      position: number,
      pathCreator: (pos: number) => SVGPathElement,
      isVertical: boolean,
    ) => {
      const g = document.createElementNS(ns, "g");
      g.classList.add("ray");
      const track = pathCreator(position);
      track.classList.add("track");
      g.appendChild(track);
      if (isVertical) {
        const beam = pathCreator(position);
        beam.classList.add("beam");
        beam.style.animationDuration = `${animationDuration}s`; // use the prop here
        g.appendChild(beam);
      }
      return g;
    };

    const svgElement = svgRef.current;
    if (svgElement) {
      const { height, width } = svgElement.getBoundingClientRect();
      svgElement.setAttributeNS(
        ns,
        "viewBox",
        `0 0 ${Math.ceil(width)} ${Math.ceil(height)}`,
      );

      const createVerticalPath = verticalPathFactory(height);
      const createHorizontalPath = horizontalPathFactory(width);
      const spacing = Math.max(width, height) / rayCount;

      [...Array(rayCount + 1)]
        .map((_, i) => i * spacing)
        .forEach((pos) => {
          svgElement.appendChild(createRayGroup(pos, createVerticalPath, true));
          svgElement.appendChild(
            createRayGroup(pos, createHorizontalPath, false),
          );
        });
    }
  }, [rayCount, animationDuration]); // add animationDuration to the dependency array

  return (
    <div className="t">
      <svg
        ref={svgRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        preserveAspectRatio="none"
        className="grid-rays"
      ></svg>
    </div>
  );
};

export default GridBackground;
