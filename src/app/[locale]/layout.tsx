import "@/styles/app.scss";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { AppConfig } from "@/core/utils/AppConfig";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout(props: {
  children: ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(props.params.locale)) notFound();

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    // ToDo add viewport tag https://www.youtube.com/shorts/YqAxXBrrryc
    // ToDo implement logic for tab title change when switching https://www.phind.com/search?cache=bop1542bh6cu90jan1hi6y4c
    // ToDo: Spark effect : https://codepen.io/hexagoncircle/details/bGZdWyw
    // Dark glow btn https://codepen.io/collinsworth/pen/zYepgqG
    //  Glow card
    // Dark light mode toggle https://codepen.io/jh3y/pen/GRaWZrw
    // menu animation https://codepen.io/jh3y/pen/GRapZqO
    // card anchor effect  https://codepen.io/jh3y/pen/MWLyGxo

    <html lang={props.params.locale}>
      <body className="font-inter-display">
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}
        >
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/core/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
