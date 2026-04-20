import type { LegalPageContent, Lang, Localized } from "./types";
import immigration from "../../content/legal/immigration.json";

const REGISTRY: Record<"immigration", LegalPageContent> = {
  immigration: immigration as unknown as LegalPageContent,
};

export function getLegalContent(slug: keyof typeof REGISTRY): LegalPageContent {
  return REGISTRY[slug];
}

export function pick<T>(value: Localized<T>, lang: Lang): T {
  return value[lang] ?? value.ko;
}
