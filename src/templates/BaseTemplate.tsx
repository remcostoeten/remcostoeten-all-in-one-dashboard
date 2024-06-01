import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import { AppConfig } from "@/utils/AppConfig";

const BaseTemplate = (props: {
  leftNav: ReactNode;
  rightNav?: ReactNode;
  children: ReactNode;
}) => {
  const t = useTranslations("BaseTemplate");

  return (
    <div className="w-full bg-neutral-800 px-1 text-neutral-200 antialiased">
      <div className="mx-auto max-w-screen-md">
        <header className="border-b border-gray-300">
          <div className="pb-8 pt-16">
            <h1 className="text-3xl font-bold text-gray-900">
              {AppConfig.name}
            </h1>
            <h2 className="text-xl">{t("description")}</h2>
          </div>

          <div className="flex justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>
      </div>
    </div>
  );
};

export { BaseTemplate };
