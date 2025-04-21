import {
  Duration,
  format as formatDate,
  formatDistance as formatDistanceDate,
  formatDuration as formatDurationDate,
  FormatDurationOptions,
  Locale,
  parse,
} from "date-fns";
import { enUS, vi } from "date-fns/locale";

const LOCALE_MAP: Record<string, Locale> = {
  "en-US": enUS,
  "vi-VN": vi,
};

export function format(date: Date, formatStr: string = "HH:mm:ss"): string {
  return formatDate(date, formatStr, { locale: getCurrentDateLocale() });
}

export function formatDistance(startDate: Date, endDate: Date) {
  return formatDistanceDate(startDate, endDate, {
    locale: getCurrentDateLocale(),
  });
}

export function formatDuration(
  duration: Duration,
  options?: FormatDurationOptions
) {
  return formatDurationDate(duration, {
    ...options,
    locale: getCurrentDateLocale(),
  });
}

export function localTimeToDate(localTime: string) {
  const today = new Date();
  const dateTimeString = today.toISOString().split("T")[0] + `T${localTime}`;

  return parse(dateTimeString, "yyyy-MM-dd'T'HH:mm:ss", new Date());
}

const getCurrentDateLocale = () => {
  const storedLocale = localStorage.getItem("locale") ?? "";
  return LOCALE_MAP[storedLocale] || vi;
};
