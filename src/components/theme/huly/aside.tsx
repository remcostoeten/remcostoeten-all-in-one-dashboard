import * as React from "react";

export default function Aside() {
  return (
    <div className="flex flex-col text-sm font-medium text-white whitespace-nowrap max-w-[67px]">
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
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3156d5ab89a512f276f7c75d87f4242ce83563ec018ea6fb164e5414d9e7023c?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
        className="self-center mt-64 w-9 border-t border-solid aspect-[0.27] border-white border-opacity-10"
      />
    </div>
  );
}

