import type { Locale as AntdLocale } from "antd/es/locale";
import type { Locale as DateFnsLocale } from "date-fns";
import { AppLocale, loadAntdLocale, loadDateFnsLocale } from "./localeLoader";

type LocaleData = {
  appLocale: AppLocale;
  antdLocale: AntdLocale;
  dateFnsLocale: DateFnsLocale;
};

type Listener = () => void;

export class LocaleManager {
  private localeData: LocaleData | null = null;
  private listeners = new Set<Listener>();
  private isInitializedData = false;
  private initPromise: Promise<void> | null = null;

  constructor(private defaultLocale: AppLocale = "vi-VN") {}

  async init(locale?: AppLocale) {
    if (this.isInitializedData) return;

    if (!this.initPromise) {
      this.initPromise = (async () => {
        const initLocale = locale || this.defaultLocale;
        const [antdLocale, dateFnsLocale] = await Promise.all([
          loadAntdLocale(initLocale),
          loadDateFnsLocale(initLocale),
        ]);
        this.localeData = { appLocale: initLocale, antdLocale, dateFnsLocale };
        this.isInitializedData = true;
        this.notifyListeners();
      })();
    }

    return this.initPromise;
  }

  async setLocale(newLocale: AppLocale) {
    if (!this.isInitializedData) {
      await this.init(newLocale);
      return;
    }
    if (this.localeData?.appLocale === newLocale) return;

    const [antdLocale, dateFnsLocale] = await Promise.all([
      loadAntdLocale(newLocale),
      loadDateFnsLocale(newLocale),
    ]);

    this.localeData = { appLocale: newLocale, antdLocale, dateFnsLocale };
    this.notifyListeners();
  }

  get locale(): LocaleData {
    if (!this.localeData) throw new Error("LocaleManager not initialized");
    return this.localeData;
  }

  get isInitialized(): boolean {
    return this.isInitializedData;
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners() {
    for (const listener of this.listeners) {
      listener();
    }
  }
}

// export singleton instance
export const localeManager = new LocaleManager();
