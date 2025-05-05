import fa from "../locales/fa.json";

export type TranslationsType = typeof fa;

export function getTranslations(): TranslationsType {
  return fa;
}

export function replaceVariables(text: string, variables: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => String(variables[key] || ""));
}
