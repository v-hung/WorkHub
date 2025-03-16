import { format, Locale, parse } from "date-fns";
import { enUS, vi } from "date-fns/locale";

const LOCALE_MAP: Record<string, Locale> = {
  "en-US": enUS,
  "vi-VN": vi,
};

export function formatDate(date: Date, formatStr: string = "HH:mm:ss"): string {
  const storedLocale = localStorage.getItem("locale") ?? "";
  const locale = LOCALE_MAP[storedLocale] || enUS;

  return format(date, formatStr, { locale });
}

export function localTimeToDate(localTime: string) {
  const today = new Date();
  const dateTimeString = today.toISOString().split("T")[0] + `T${localTime}`;

  return parse(dateTimeString, "yyyy-MM-dd'T'HH:mm:ss", new Date());
}
