export interface PillarData {
  id: 'fluxo' | 'eficiencia' | 'pessoas' | 'excelencia';
  title: string;
  subtitle: string;
  question: string;
  description: string;
  iconName: string;
  badge: string;
  highlights: string[];
}

export interface AlexStep {
  letter: string;
  word: string;
  subtitle: string;
  description: string;
  keyAction: string;
  metric: string;
}

export interface ApplicationFront {
  id: string;
  title: string;
  badge: string;
  description: string;
  iconName: string;
  deliverables: string[];
  idealFor: string;
}

export interface DiagnosticQuestion {
  id: number;
  dimension: string;
  question: string;
  options: {
    text: string;
    points: number;
  }[];
}

export interface DiagnosticResult {
  title: string;
  level: string;
  scoreRange: string;
  diagnosis: string;
  recommendation: string;
}
