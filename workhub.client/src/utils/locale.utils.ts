import type { Locale as AntdLocale } from "antd/es/locale";
import type { Locale as DateFnsLocale } from "date-fns";

export const loadAntdLocale = async (lng: string): Promise<AntdLocale> => {
  switch (lng) {
    case "en-US":
      return (await import("antd/locale/en_US")).default;
    case "ja-JP":
      return (await import("antd/locale/ja_JP")).default;
    default:
      return (await import("antd/locale/vi_VN")).default;
  }
};

export const loadDateFnsLocale = async (
  lng: string
): Promise<DateFnsLocale> => {
  switch (lng) {
    case "en-US":
      return (await import("date-fns/locale/en-US")).enUS;
    case "ja-JP":
      return (await import("date-fns/locale/ja")).ja;
    default:
      return (await import("date-fns/locale/vi")).vi;
  }
};
