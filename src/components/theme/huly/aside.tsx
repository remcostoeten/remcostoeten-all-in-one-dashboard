'use client';

import { SettingsIcon, UserIcon } from '../icons';
import IconGhost from '../shells/IconShell';
import IconComponent from '../shells/IconShell';

export default function Aside() {
  return (
    <aside className="flex h-screen  w-sidebar flex-col justify-between py-4 !bg-zinc-900 bg-sidebar text-sm font-medium text-white">
      <div className="flex w-full flex-col items-center pb-14 flex-1">
        <div className="size-8 items-center justify-center rounded bg-red-400 px-3">
          R
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/afd695f1c0f90e9687cbfe900851a8a7e464e309371bb7d6ec804b664172918d?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
          className="mt-2.5 aspect-square w-5"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f7492b1338c0edf06d038169ecacb129582ee764a09dea32c6f9f5e1d6b6dca?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
          className="mt-6 aspect-square w-9"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/523a318f32e87384327664de3dee654d0141321109584d0fa0b0d0aa0a1c5eef?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
          className="aspect-[0.17] w-full self-stretch"
        />
      </div>
      <BottomSection />
    </aside>
  );
}

const BottomSection = () => {
  return (
    <><div className="w-[65%] mx-auto px-4 h-[1px] my-4 bg-border" /><div className="flex  gap-1 w-full flex-col items-center justify-center">
      <IconGhost hasBorder={false}>
        <SettingsIcon fill='#fff9' width='20 ' height='20' />
      </IconGhost>
      <IconComponent>
        <UserIcon  width={36} height={24} />
      </IconComponent>
    </div></>
  );
};
