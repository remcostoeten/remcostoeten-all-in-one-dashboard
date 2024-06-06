import { useTranslations } from "next-intl";

import Navigation from "@/components/theme/sidebar/Navigation";
import Aside from "@/components/theme/huly/aside";
import IconShell from "@/components/theme/shells/IconShell";

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const t = useTranslations("DashboardLayout");

  return (
    <>
      <main className="w-full h-screen flex flex-row relative">
        <Aside />
        <Navigation />
        <IconShell label="Show" as="a" href="/dww" />
        <section className="flex flex-col p-10 ml-20 w-full gap-5">
          <h1 className="text-4xl text-neutral-200">Dashboard</h1>
          <div className="w-full h-80 border border-neutral-500/50 bg-neutral-800/20 rounded" />
          <div className="flex flex-row gap-5 w-full">
            <div className="border-neutral-500/50 h-60 w-1/2 bg-neutral-800/20 rounded border" />
            <div className="border-neutral-500/50 h-60 w-1/2 bg-neutral-800/20 rounded border" />
          </div>
        </section>
      </main>
    </>
  );
}
