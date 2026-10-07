import type { Locale } from "@/i18n";

/** Dates render identically on server and client, so pin the locale and time zone. */
export function formatDate(date: Date, locale: Locale) {
  return date.toLocaleDateString(locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
