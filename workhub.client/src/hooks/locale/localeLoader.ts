import type { Locale as AntdLocale } from "antd/es/locale";
import type { Locale as DateFnsLocale } from "date-fns";

export type AppLocale = "en-US" | "ja-JP" | "vi-VN";

const ANT_LOCALE_MAP: Partial<Record<AppLocale, AntdLocale>> = {};
const DATE_FNS_LOCALE_MAP: Partial<Record<AppLocale, DateFnsLocale>> = {};

export const loadAntdLocale = async (lng: AppLocale): Promise<AntdLocale> => {
  if (ANT_LOCALE_MAP[lng]) {
    return ANT_LOCALE_MAP[lng];
  }

  let locale: AntdLocale;

  switch (lng) {
    case "en-US":
      locale = (await import("antd/locale/en_US")).default;
      break;
    case "ja-JP":
      locale = (await import("antd/locale/ja_JP")).default;
      break;
    default:
      locale = (await import("antd/locale/vi_VN")).default;
      break;
  }

  ANT_LOCALE_MAP[lng] = locale;
  return locale;
};

export const loadDateFnsLocale = async (
  lng: AppLocale
): Promise<DateFnsLocale> => {
  if (DATE_FNS_LOCALE_MAP[lng]) {
    return DATE_FNS_LOCALE_MAP[lng];
  }

  let locale: DateFnsLocale;

  switch (lng) {
    case "en-US":
      locale = (await import("date-fns/locale/en-US")).enUS;
      break;
    case "ja-JP":
      locale = (await import("date-fns/locale/ja")).ja;
      break;
    default:
      locale = (await import("date-fns/locale/vi")).vi;
      break;
  }

  DATE_FNS_LOCALE_MAP[lng] = locale;
  return locale;
};
