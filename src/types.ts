export interface Info {
  date?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  info5?: string;
  info6?: string[];
}

export type InfoKey =
  | "date"
  | "info1"
  | "info2"
  | "info3"
  | "info4"
  | "info5"
  | "info6";

export interface InfoProps {
  infoCategory: InfoKey;
  defaultValue: string | string[];
  setDataFunc: (target: [string, string | string[]]) => void;
}

export interface MenuProps {
  id: string;
  subActive: string;
  setSubActive: (currMenu: string) => void;
}
