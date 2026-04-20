export type Lang = "ko" | "zh" | "en";

export type Localized<T> = Record<Lang, T>;

export interface SourceRef {
  agency: string;            // "법제처", "경찰청" ...
  title: string;             // page title at source
  url: string;               // canonical URL
  fetchedAt: string;         // ISO 8601
  kogl: "type-1";            // KOGL license type
}

export interface VisaNode {
  code: string;              // "F-4", "H-2", ...
  label: Localized<string>;  // short label
  target: Localized<string>; // who this visa is for
  period: Localized<string>; // validity period
  requirements: Localized<string[]>; // requirement list
}

export interface ProcedureStep {
  id: string;
  label: Localized<string>;
  agency: Localized<string>;
  duration: Localized<string>; // "14 days"
  lawRef?: string;             // "출입국관리법 §46"
  note: Localized<string>;
}

export interface AgencyNode {
  id: string;
  name: Localized<string>;
  role: Localized<string>;
  phone: string;
  address: Localized<string>;
  url: string;
}

export interface DeadlineEvent {
  day: number;               // days from reference event
  title: Localized<string>;
  detail: Localized<string>;
}

export interface LawArticle {
  ref: string;               // "출입국관리법 §46 ①"
  text: Localized<string>;   // article text — ZH/EN via Claude translation
  revisedAt: string;         // "2024-03-01"
  sourceUrl: string;
}

export interface LegalPageContent {
  slug: "immigration";
  title: Localized<string>;
  summary: Localized<string>;             // one-sentence, ≤ 40 chars KO
  overview: Localized<string>;            // prose paragraph per language
  meta: {
    generatedAt: string;                   // ISO
    sourceCount: number;
    lastRevisionAt: string;                // oldest revision in law list
  };
  visas: VisaNode[];
  procedure: ProcedureStep[];
  agencies: AgencyNode[];
  deadlines: DeadlineEvent[];
  laws: LawArticle[];
  sources: SourceRef[];
  disclaimer: Localized<string>;
}
