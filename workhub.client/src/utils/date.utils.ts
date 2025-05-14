import {
  Duration,
  format as formatDate,
  formatDistance as formatDistanceDate,
  formatDuration as formatDurationDate,
  formatDistanceStrict as formatDistanceStrictDate,
  FormatDurationOptions,
  Locale,
} from "date-fns";
import { enUS, vi, ja } from "date-fns/locale";

const LOCALE_MAP: Record<string, Locale> = {
  "en-US": enUS,
  "vi-VN": vi,
  "ja-JP": ja,
};

export function format(date: Date, formatStr: string = "HH:mm:ss"): string {
  return formatDate(date, formatStr, { locale: getCurrentDateLocale() });
}

export function formatDistance(startDate: Date, endDate: Date) {
  return formatDistanceDate(startDate, endDate, {
    locale: getCurrentDateLocale(),
  });
}

export function formatDistanceStrict(startDate: Date, endDate: Date) {
  return formatDistanceStrictDate(startDate, endDate, {
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
  const [hours, minutes, seconds] = localTime.split(":").map(Number);
  return new Date(1970, 0, 1, hours, minutes, seconds);
}

export function setTimeToDate(time: Date): Date {
  return new Date(
    1970,
    0,
    1,
    time.getHours(),
    time.getMinutes(),
    time.getSeconds()
  );
}

const getCurrentDateLocale = () => {
  const storedLocale = localStorage.getItem("locale") ?? "";
  return LOCALE_MAP[storedLocale] || vi;
};
