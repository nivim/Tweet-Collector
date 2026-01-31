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
