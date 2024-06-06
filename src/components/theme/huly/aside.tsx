import { MapIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import IconShell from "../shells/IconShell";
import GhostLabel from "../shells/IconShell";

export default function Aside() {
  return (
    <aside className="flex flex-col text-sm font-medium text-white w-sidebar justify-between bg-sidebar">
      <div className="flex flex-col items-center pb-14 w-full">
        <div className="justify-center items-center px-3 w-8 h-8 bg-red-400 rounded">
          R
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/afd695f1c0f90e9687cbfe900851a8a7e464e309371bb7d6ec804b664172918d?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
          className="mt-2.5 w-5 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f7492b1338c0edf06d038169ecacb129582ee764a09dea32c6f9f5e1d6b6dca?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
          className="mt-6 w-9 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/523a318f32e87384327664de3dee654d0141321109584d0fa0b0d0aa0a1c5eef?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
          className="self-stretch w-full aspect-[0.17]"
        />
      </div>
      <BottomSection />
    </aside>
  );
}

const BottomSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-24">
      {/* <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
        <svg
          className="w-4 h-4 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </div> */}
      <div>
        <GhostLabel label="Show" as="a" href="/dww" />
        <GhostLabel icon={MapIcon} label="Show" as="button" />
      </div>
    </div>
  );
};
