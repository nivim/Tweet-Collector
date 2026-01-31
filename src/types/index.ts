export interface Tweet {
  id: string;
  text: string;
  createdAt: Date;
  author: string;
  authorHandle: string;
  url: string;
  likes?: number;
  retweets?: number;
  replies?: number;
  isThread?: boolean;
  threadPosition?: number;
  topics: string[];
}

export interface TweetThread {
  id: string;
  tweets: Tweet[];
  title: string;
  summary: string;
  topics: string[];
}

export interface BestPractice {
  id: string;
  title: string;
  description: string;
  category: BestPracticeCategory;
  tips: string[];
  examples?: CodeExample[];
  source: string;
  sourceUrl: string;
}

export interface CodeExample {
  title: string;
  language: string;
  code: string;
  description?: string;
}

export type BestPracticeCategory =
  | "parallel-sessions"
  | "plan-mode"
  | "claude-md"
  | "slash-commands"
  | "hooks"
  | "permissions"
  | "verification"
  | "subagents"
  | "model-selection"
  | "workflow"
  | "philosophy";

export interface CollectorConfig {
  authorHandle: string;
  outputDir: string;
  format: "json" | "markdown" | "both";
}

export interface GeneratorConfig {
  inputFile?: string;
  outputFile: string;
  format: "markdown" | "json";
  includeExamples: boolean;
}

// ============================================
// CONTRIBUTOR TYPES
// ============================================

export interface Contributor {
  id: string;
  name: string;
  handle: string;
  platform: string;
  role: string;
  url: string;
  expertise: string[];
}

export interface Tip {
  id: string;
  contributorId: string;
  title: string;
  category: TipCategory;
  description: string;
  tips: string[];
  example?: CodeExample;
  source: string;
}

export type TipCategory =
  | "customization"
  | "commands"
  | "input"
  | "workflow"
  | "git"
  | "context"
  | "output"
  | "automation"
  | "tools"
  | "history"
  | "parallel"
  | "optimization"
  | "safety"
  | "architecture"
  | "testing"
  | "code-quality"
  | "claude-md"
  | "subagents"
  | "enterprise"
  | "thinking"
  | "hooks"
  | "mcp"
  | "plan-mode"
  | "skills"
  | "shortcuts"
  | "help"
  | "sessions"
  | "monitoring"
  | "integration"
  | "advanced"
  | "philosophy"
  | "verification";

// ============================================
// META-ANALYSIS TYPES
// ============================================

export interface MetaInsight {
  id: string;
  title: string;
  description: string;
  category: string;
  contributors: string[];
  consensusLevel: "unanimous" | "strong" | "moderate" | "emerging";
  tips: string[];
  contradictions?: string[];
}

export interface MetaAnalysis {
  title: string;
  generatedAt: Date;
  contributors: Contributor[];
  totalTips: number;
  insights: MetaInsight[];
  categoryBreakdown: Record<string, number>;
  topRecommendations: string[];
}
