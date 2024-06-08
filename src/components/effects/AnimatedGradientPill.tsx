import { cn } from "@/core/utils/cn";
import AnimatedGradientText from "@/components/effects/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";

export function AnimatedGradientPill() {
  return (
    <div className="z-10 flex items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          <i>The</i> all in one dashboard
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}
