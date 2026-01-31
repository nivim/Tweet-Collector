import type { Contributor, Tip } from "../types/index.js";

/**
 * Shrivu Shankar's Claude Code Tips
 * Source: https://blog.sshh.io/p/how-i-use-every-claude-code-feature
 * Focus: Enterprise usage, context management, multi-agent systems
 */

export const SHRIVU_SHANKAR: Contributor = {
  id: "shrivu-shankar",
  name: "Shrivu Shankar",
  handle: "ShrivuShankar",
  platform: "Twitter/Substack",
  role: "AI Infrastructure Engineer, Enterprise AI Tooling",
  url: "https://blog.sshh.io",
  expertise: [
    "Enterprise AI",
    "Context Management",
    "Multi-Agent Systems",
    "Monorepo Workflows",
  ],
};

export const SHRIVU_SHANKAR_TIPS: Tip[] = [
  // ============================================
  // CLAUDE.md PHILOSOPHY
  // ============================================
  {
    id: "ss-claude-md-constitution",
    contributorId: "shrivu-shankar",
    title: "CLAUDE.md as Agent Constitution",
    category: "claude-md",
    description:
      "The single most important file in your codebase for using Claude Code effectively is the root CLAUDE.md. This file is the agent's 'constitution,' its primary source of truth for how your specific repository works.",
    tips: [
      "Treat as the agent's constitution",
      "Primary source of truth for repo conventions",
      "High-level guardrails, not comprehensive manual",
      "Use to guide where to invest in better tooling",
      "Professional monorepo CLAUDE.md can be 13-25KB",
    ],
    source: "https://blog.sshh.io/p/how-i-use-every-claude-code-feature",
  },
  {
    id: "ss-claude-md-hobby-vs-pro",
    contributorId: "shrivu-shankar",
    title: "Hobby vs Professional CLAUDE.md",
    category: "claude-md",
    description:
      "For hobby projects, let Claude dump whatever it wants in CLAUDE.md. For professional work, strictly maintain it with curated content.",
    tips: [
      "Hobby: Let Claude self-document freely",
      "Professional: Strictly curated and maintained",
      "Monorepo CLAUDE.md currently 13KB, could grow to 25KB",
      "Quality matters more than quantity",
      "Regular review and pruning essential",
    ],
    source: "https://blog.sshh.io/p/how-i-use-every-claude-code-feature",
  },

  // ============================================
  // CONTEXT MANAGEMENT
  // ============================================
  {
    id: "ss-context-command",
    contributorId: "shrivu-shankar",
    title: "Use /context to Monitor Token Usage",
    category: "context",
    description:
      "Run /context mid coding session at least once to understand how you are using your 200k token context window.",
    tips: [
      "Check context usage mid-session",
      "Fresh monorepo session costs ~20k baseline tokens",
      "Leaves 180k for actual work",
      "Helps identify context bloat",
      "Essential for long sessions",
    ],
    example: {
      title: "Context usage breakdown",
      language: "text",
      code: `Example output from /context:
- System prompt: ~8k tokens
- CLAUDE.md: ~5k tokens
- MCP tools: ~5k tokens
- Conversation: ~2k tokens
- Available: ~180k tokens`,
    },
    source: "https://blog.sshh.io/p/how-i-use-every-claude-code-feature",
  },
  {
    id: "ss-avoid-compact",
    contributorId: "shrivu-shankar",
    title: "Avoid /compact, Use /clear + /catchup Instead",
    category: "context",
    description:
      "Avoid /compact as much as possible - it's opaque, error-prone, and not well-optimized. Default reboot is /clear followed by /catchup.",
    tips: [
      "/compact is opaque and error-prone",
      "Not well-optimized for most use cases",
      "Prefer /clear + /catchup for fresh start",
      "/catchup restores essential context",
      "More predictable than compaction",
    ],
    source: "https://blog.sshh.io/p/how-i-use-every-claude-code-feature",
  },

  // ============================================
  // SUBAGENTS CRITIQUE
  // ============================================
  {
    id: "ss-subagents-problems",
    contributorId: "shrivu-shankar",
    title: "Custom Subagents Create Problems",
    category: "subagents",
    description:
      "On paper, custom subagents are Claude Code's most powerful feature. In practice, they create two problems: they gatekeep context and force human workflows.",
    tips: [
      "Subagents hide context from main agent",
      "PythonTests subagent hides testing context",
      "Main agent can't reason holistically",
      "Forces rigid human-defined workflows",
      "Claude works better with flexibility",
    ],
    source: "https://blog.sshh.io/p/how-i-use-every-claude-code-feature",
  },
  {
    id: "ss-master-clone",
    contributorId: "shrivu-shankar",
    title: "Master-Clone Architecture Over Specialists",
    category: "subagents",
    description:
      "Put all key context in CLAUDE.md, then let the main agent decide when and how to delegate work to copies of itself. This 'Master-Clone' approach beats the 'Lead-Specialist' model.",
    tips: [
      "All context in CLAUDE.md, not siloed",
      "Main agent decides delegation",
      "Clones inherit full context",
      "More flexible than specialist subagents",
      "Let Claude use its own Task/Explore features",
    ],
    example: {
      title: "Master-Clone vs Lead-Specialist",
      language: "text",
      code: `Lead-Specialist (avoid):
Main Agent → PythonTests Agent (isolated context)
          → JSTests Agent (isolated context)
          → Lint Agent (isolated context)

Master-Clone (preferred):
Main Agent (full context) → Clone 1 (full context)
                         → Clone 2 (full context)
                         → Clone 3 (full context)`,
    },
    source: "https://blog.sshh.io/p/how-i-use-every-claude-code-feature",
  },
  {
    id: "ss-subagents-brittle",
    contributorId: "shrivu-shankar",
    title: "Custom Subagents are Brittle Solutions",
    category: "subagents",
    description:
      "Custom subagents are a brittle solution. Give your main agent the context (in CLAUDE.md) and let it use its own Task/Explore feature to manage delegation.",
    tips: [
      "Don't over-engineer subagent hierarchies",
      "Claude's built-in Task tool works well",
      "Explore tool for codebase navigation",
      "Trust Claude to make delegation decisions",
      "Simpler is usually better",
    ],
    source: "https://blog.sshh.io/p/how-i-use-every-claude-code-feature",
  },

  // ============================================
  // ENTERPRISE PATTERNS
  // ============================================
  {
    id: "ss-enterprise-scale",
    contributorId: "shrivu-shankar",
    title: "Enterprise-Scale Usage Patterns",
    category: "enterprise",
    description:
      "At enterprise scale, teams consume billions of tokens per month just for codegen. Build proper AI-IDE rules and tooling infrastructure.",
    tips: [
      "Billions of tokens/month is normal at scale",
      "Invest in AI-IDE tooling infrastructure",
      "Standardize CLAUDE.md across teams",
      "Build shared slash commands library",
      "Monitor and optimize token usage",
    ],
    source: "https://blog.sshh.io/p/how-i-use-every-claude-code-feature",
  },
  {
    id: "ss-vm-workflow",
    contributorId: "shrivu-shankar",
    title: "VM Workflow for Hobby Projects",
    category: "workflow",
    description:
      "For hobby projects, run Claude Code in a VM several times a week with --dangerously-skip-permissions to vibe code whatever idea is on your mind.",
    tips: [
      "VMs provide safe sandbox",
      "Skip permissions OK in isolated VM",
      "Great for experimentation",
      "Vibe coding without restrictions",
      "Separate from production systems",
    ],
    source: "https://blog.sshh.io/p/how-i-use-every-claude-code-feature",
  },

  // ============================================
  // MULTI-AGENT SYSTEMS
  // ============================================
  {
    id: "ss-planner-builder",
    contributorId: "shrivu-shankar",
    title: "Planner and Builder Loop",
    category: "architecture",
    description:
      "Agent design in 2026 is converging on a Planner and Builder (Execution Agent) loop, which spawns ephemeral Task Agents for sub-routines.",
    tips: [
      "Planner: High-level strategy and decisions",
      "Builder: Execution of planned steps",
      "Task Agents: Ephemeral workers for sub-tasks",
      "Fluid architecture, not rigid assembly lines",
      "Aligns with how Claude naturally works",
    ],
    source: "https://blog.sshh.io/p/building-multi-agent-systems-part-c0c",
  },
  {
    id: "ss-convergent-design",
    contributorId: "shrivu-shankar",
    title: "Agent Design is Converging",
    category: "architecture",
    description:
      "Multi-agent system design is shifting from rigid assembly lines to fluid loops. The trend is toward more autonomy and less human-defined structure.",
    tips: [
      "Less rigid workflows, more autonomy",
      "Let agents decide their own structure",
      "Assembly line patterns are outdated",
      "Embrace fluid, adaptive systems",
      "Trust the agent's reasoning",
    ],
    source: "https://blog.sshh.io/p/building-multi-agent-systems-part-c0c",
  },
];
