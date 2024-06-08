import { currentUser } from "@clerk/nextjs/server";
import { getTranslations } from "next-intl/server";

export default async function HelloWrapper() {
  const t = await getTranslations("Dashboard");
  const user = await currentUser();

  return (
    <p>
      👋 {t("hello_message", { email: user?.emailAddresses[0]?.emailAddress })}
    </p>
  );
}
