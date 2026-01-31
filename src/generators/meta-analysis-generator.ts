import type { MetaAnalysis, MetaInsight, Contributor, Tip } from "../types/index.js";
import { BORIS_TWEETS } from "../data/boris-tweets.js";
import { BEST_PRACTICES } from "../data/best-practices.js";
import { YK_SUGI, YK_SUGI_TIPS } from "../data/yk-sugi-tips.js";
import { MCKAY_WRIGLEY, MCKAY_WRIGLEY_TIPS } from "../data/mckay-wrigley-tips.js";
import { SHRIVU_SHANKAR, SHRIVU_SHANKAR_TIPS } from "../data/shrivu-shankar-tips.js";
import { ADO, ADO_ADVENT_TIPS } from "../data/ado-advent-tips.js";

/**
 * Meta-Analysis Generator
 * Synthesizes insights from all contributors to find patterns,
 * consensus, and unique perspectives.
 */

// All contributors
export const ALL_CONTRIBUTORS: Contributor[] = [
  {
    id: "boris-cherny",
    name: "Boris Cherny",
    handle: "bcherny",
    platform: "Twitter",
    role: "Creator of Claude Code at Anthropic",
    url: "https://x.com/bcherny",
    expertise: ["Claude Code Architecture", "Parallel Workflows", "Verification", "Plan Mode"],
  },
  YK_SUGI,
  MCKAY_WRIGLEY,
  SHRIVU_SHANKAR,
  ADO,
];

// Combine all tips
export const ALL_TIPS: Tip[] = [
  ...YK_SUGI_TIPS,
  ...MCKAY_WRIGLEY_TIPS,
  ...SHRIVU_SHANKAR_TIPS,
  ...ADO_ADVENT_TIPS,
];

/**
 * Generate meta-insights by finding patterns across contributors
 */
function generateMetaInsights(): MetaInsight[] {
  return [
    // ============================================
    // UNANIMOUS CONSENSUS
    // ============================================
    {
      id: "verification-is-key",
      title: "Verification is the Most Important Practice",
      description:
        "Every contributor emphasizes giving Claude a way to verify its work. This creates a feedback loop that dramatically improves output quality.",
      category: "verification",
      contributors: ["Boris Cherny", "YK Sugi", "McKay Wrigley", "Shrivu Shankar", "Ado"],
      consensusLevel: "unanimous",
      tips: [
        "Boris: 'Give Claude a way to verify its work - it will 2-3x the quality'",
        "YK: 'Master different output verification methods'",
        "Run tests, use linting, browser testing for UI",
        "The feedback loop is more important than the initial output",
        "Invest time in making verification rock-solid",
      ],
    },
    {
      id: "plan-before-execute",
      title: "Plan Mode Before Execution",
      description:
        "All contributors recommend using Plan mode (Shift+Tab twice) before diving into code. A good plan enables one-shot execution.",
      category: "plan-mode",
      contributors: ["Boris Cherny", "YK Sugi", "Shrivu Shankar", "Ado"],
      consensusLevel: "unanimous",
      tips: [
        "Boris: 'A good plan is really important!'",
        "Ado: 'I default to plan mode 90% of the time'",
        "YK: 'Balance planning with quick prototyping'",
        "Iterate on the plan until satisfied, then auto-accept",
        "Good plans enable Claude to one-shot implementation",
      ],
    },
    {
      id: "claude-md-essential",
      title: "CLAUDE.md is Essential for Team Success",
      description:
        "Maintaining a well-curated CLAUDE.md file checked into git is universally recommended. It's the agent's 'constitution'.",
      category: "claude-md",
      contributors: ["Boris Cherny", "YK Sugi", "Shrivu Shankar", "Ado"],
      consensusLevel: "unanimous",
      tips: [
        "Boris: 'Team shares single CLAUDE.md, contributes multiple times/week'",
        "Shrivu: 'The agent's constitution - primary source of truth'",
        "YK: 'Keep CLAUDE.md simple and review periodically'",
        "Document mistakes so Claude learns not to repeat them",
        "Check into git and share with team",
      ],
    },

    // ============================================
    // STRONG CONSENSUS
    // ============================================
    {
      id: "parallel-sessions",
      title: "Run Multiple Parallel Sessions",
      description:
        "Most contributors run 5-15 Claude Code sessions simultaneously across terminal and web to maximize productivity.",
      category: "parallel-sessions",
      contributors: ["Boris Cherny", "YK Sugi", "McKay Wrigley"],
      consensusLevel: "strong",
      tips: [
        "Boris: 5 terminal + 5-10 web sessions",
        "YK: Cascade multitasking with tabs",
        "McKay: Continuous 24/7 Claude (Claudeputer)",
        "Use separate git checkouts to avoid conflicts",
        "System notifications alert when session needs input",
      ],
    },
    {
      id: "slash-commands-automation",
      title: "Automate Repeated Workflows with Slash Commands",
      description:
        "Create slash commands in .claude/commands/ for workflows you do multiple times a day. Share via git.",
      category: "slash-commands",
      contributors: ["Boris Cherny", "YK Sugi", "McKay Wrigley", "Ado"],
      consensusLevel: "strong",
      tips: [
        "Boris: '/commit-push-pr used dozens of times daily'",
        "Store in .claude/commands/ directory",
        "Check into git to share with team",
        "Claude can use your slash commands too",
        "Include inline Bash for pre-computation",
      ],
    },
    {
      id: "hooks-for-formatting",
      title: "Use Hooks for Automatic Formatting",
      description:
        "Set up PostToolUse hooks to automatically format code after Claude writes/edits. Catches the last 10% of formatting issues.",
      category: "hooks",
      contributors: ["Boris Cherny", "Ado"],
      consensusLevel: "strong",
      tips: [
        "Boris: 'Hook handles last 10% to avoid CI formatting errors'",
        "Ado: 'Deterministic control over probabilistic AI'",
        "Trigger on Write|Edit actions",
        "Add || true to prevent failures from blocking",
        "Also use for linting, testing, etc.",
      ],
    },
    {
      id: "opus-for-coding",
      title: "Use Opus 4.5 with Thinking for Coding",
      description:
        "For coding tasks, Opus 4.5 with thinking is recommended despite being slower. Better tool use and less steering needed.",
      category: "model-selection",
      contributors: ["Boris Cherny"],
      consensusLevel: "strong",
      tips: [
        "Opus 4.5 with thinking = best coding model",
        "Slower per-response but faster task completion",
        "Less steering required",
        "Better at tool use",
        "Worth the extra cost for complex work",
      ],
    },
    {
      id: "context-management",
      title: "Actively Manage Context Window",
      description:
        "Monitor and manage your 200k token context window. Use /context to check usage, prefer /clear + /catchup over /compact.",
      category: "context",
      contributors: ["YK Sugi", "Shrivu Shankar", "Ado"],
      consensusLevel: "strong",
      tips: [
        "Shrivu: 'Run /context mid-session to understand usage'",
        "Fresh monorepo session costs ~20k baseline tokens",
        "Shrivu: 'Avoid /compact - use /clear + /catchup instead'",
        "YK: 'Keep context fresh by starting new conversations'",
        "MCP tools consume context just by being available",
      ],
    },

    // ============================================
    // MODERATE CONSENSUS
    // ============================================
    {
      id: "containers-for-risky",
      title: "Use Containers for Risky/Long-Running Tasks",
      description:
        "Run Claude in containers or VMs with --dangerously-skip-permissions for experimentation and long-running tasks.",
      category: "safety",
      contributors: ["YK Sugi", "Shrivu Shankar"],
      consensusLevel: "moderate",
      tips: [
        "Isolate risky operations in containers",
        "Safe to skip permissions in sandbox",
        "Great for vibe coding and experimentation",
        "Prevents damage to main system",
        "VMs work too - separate from production",
      ],
    },
    {
      id: "git-worktrees-vs-checkouts",
      title: "Git Worktrees vs Separate Checkouts",
      description:
        "For parallel sessions, use either git worktrees or separate clones. Boris prefers full checkouts, YK prefers worktrees.",
      category: "git",
      contributors: ["Boris Cherny", "YK Sugi"],
      consensusLevel: "moderate",
      tips: [
        "Boris: Separate full git checkouts",
        "YK: Git worktrees more efficient",
        "Both achieve session isolation",
        "Worktrees share git history",
        "Checkouts are fully independent",
      ],
      contradictions: [
        "Boris uses full checkouts for complete isolation",
        "YK prefers worktrees for efficiency",
      ],
    },
    {
      id: "subagent-philosophy",
      title: "Subagent Usage Philosophy",
      description:
        "Views differ on custom subagents. Boris uses them regularly, while Shrivu finds them 'brittle' and prefers Master-Clone architecture.",
      category: "subagents",
      contributors: ["Boris Cherny", "Shrivu Shankar", "Ado"],
      consensusLevel: "moderate",
      tips: [
        "Boris: Uses code-simplifier, verify-app subagents",
        "Shrivu: Custom subagents are brittle, gatekeep context",
        "Shrivu: Prefer Master-Clone over Lead-Specialist",
        "Ado: Subagents can run in background with MCP access",
        "Let Claude's built-in Task tool handle delegation",
      ],
      contradictions: [
        "Boris: Custom subagents for common workflows",
        "Shrivu: Give main agent context, let it decide delegation",
      ],
    },

    // ============================================
    // EMERGING PRACTICES
    // ============================================
    {
      id: "ultrathink-keyword",
      title: "Ultrathink for Complex Reasoning",
      description:
        "The 'ultrathink' keyword allocates up to 32k tokens for internal reasoning. Only works when MAX_THINKING_TOKENS is not set.",
      category: "thinking",
      contributors: ["Ado"],
      consensusLevel: "emerging",
      tips: [
        "Include 'ultrathink' in prompt for deep reasoning",
        "Allocates up to 32k thinking tokens",
        "Critical for complex architectural decisions",
        "Only 'ultrathink' works - others disabled in v2.0.0",
        "Only works when MAX_THINKING_TOKENS not configured",
      ],
    },
    {
      id: "obsidian-integration",
      title: "Claude Code for Notes and Research",
      description:
        "Use Claude Code with Obsidian vaults for AI-powered note-taking, automated tagging, and knowledge graph building.",
      category: "integration",
      contributors: ["McKay Wrigley"],
      consensusLevel: "emerging",
      tips: [
        "Obsidian vaults are just markdown folders",
        "Claude can manage notes like code",
        "Automated tags and wiki-style linking",
        "Builds knowledge graph over time",
        "Better than manual note organization",
      ],
    },
    {
      id: "ai-as-capacity",
      title: "Think of AI as Schedulable Capacity",
      description:
        "View AI not as a tool but as compute capacity to schedule. Allocate, queue, and manage sessions like distributed systems.",
      category: "philosophy",
      contributors: ["Boris Cherny"],
      consensusLevel: "emerging",
      tips: [
        "Each session is a separate worker",
        "Allocate tasks to sessions by context needs",
        "Queue work and check back when value is ready",
        "Bottleneck is attention allocation, not generation",
        "Distribute cognition like distributed compute",
      ],
    },
  ];
}

/**
 * Generate the full meta-analysis
 */
export function generateMetaAnalysis(): MetaAnalysis {
  const insights = generateMetaInsights();

  // Calculate category breakdown
  const categoryBreakdown: Record<string, number> = {};
  ALL_TIPS.forEach((tip) => {
    categoryBreakdown[tip.category] = (categoryBreakdown[tip.category] || 0) + 1;
  });
  // Add Boris's practices
  BEST_PRACTICES.forEach((bp) => {
    categoryBreakdown[bp.category] = (categoryBreakdown[bp.category] || 0) + 1;
  });

  // Top recommendations (unanimous + strong consensus)
  const topRecommendations = [
    "Give Claude a way to verify its work - this 2-3x quality",
    "Start in Plan mode (Shift+Tab twice) for 90% of tasks",
    "Maintain a team CLAUDE.md checked into git",
    "Run 5+ parallel sessions for maximum productivity",
    "Create slash commands for daily repeated workflows",
    "Use PostToolUse hooks for automatic formatting",
    "Use Opus 4.5 with thinking for complex coding tasks",
    "Monitor context with /context, prefer /clear + /catchup over /compact",
    "Use containers/VMs for risky or experimental work",
    "Ask Claude about Claude Code - it has a self-help subagent",
  ];

  return {
    title: "Claude Code Best Practices: Meta-Analysis",
    generatedAt: new Date(),
    contributors: ALL_CONTRIBUTORS,
    totalTips: ALL_TIPS.length + BEST_PRACTICES.length + BORIS_TWEETS.length,
    insights,
    categoryBreakdown,
    topRecommendations,
  };
}

/**
 * Generate Markdown output for the meta-analysis
 */
export function generateMetaAnalysisMarkdown(): string {
  const analysis = generateMetaAnalysis();

  let md = `# Claude Code Best Practices: Meta-Analysis

> Synthesized from ${analysis.contributors.length} expert contributors with ${analysis.totalTips} total tips and insights.

Generated: ${analysis.generatedAt.toISOString().split("T")[0]}

---

## Contributors

| Name | Handle | Role | Expertise |
|------|--------|------|-----------|
`;

  analysis.contributors.forEach((c) => {
    md += `| **${c.name}** | [@${c.handle}](${c.url}) | ${c.role} | ${c.expertise.slice(0, 3).join(", ")} |\n`;
  });

  md += `
---

## Executive Summary: Top 10 Recommendations

These practices have the strongest consensus across all contributors:

`;

  analysis.topRecommendations.forEach((rec, i) => {
    md += `${i + 1}. **${rec}**\n`;
  });

  md += `
---

## Consensus Analysis

### Unanimous Consensus (All Contributors Agree)

`;

  const unanimous = analysis.insights.filter((i) => i.consensusLevel === "unanimous");
  unanimous.forEach((insight) => {
    md += `#### ${insight.title}

${insight.description}

**Contributors:** ${insight.contributors.join(", ")}

**Key Points:**
`;
    insight.tips.forEach((tip) => {
      md += `- ${tip}\n`;
    });
    md += "\n";
  });

  md += `### Strong Consensus (Most Contributors Agree)

`;

  const strong = analysis.insights.filter((i) => i.consensusLevel === "strong");
  strong.forEach((insight) => {
    md += `#### ${insight.title}

${insight.description}

**Contributors:** ${insight.contributors.join(", ")}

**Key Points:**
`;
    insight.tips.forEach((tip) => {
      md += `- ${tip}\n`;
    });
    md += "\n";
  });

  md += `### Moderate Consensus (Some Debate)

`;

  const moderate = analysis.insights.filter((i) => i.consensusLevel === "moderate");
  moderate.forEach((insight) => {
    md += `#### ${insight.title}

${insight.description}

**Contributors:** ${insight.contributors.join(", ")}

**Key Points:**
`;
    insight.tips.forEach((tip) => {
      md += `- ${tip}\n`;
    });
    if (insight.contradictions && insight.contradictions.length > 0) {
      md += `\n**Different Perspectives:**\n`;
      insight.contradictions.forEach((c) => {
        md += `- ${c}\n`;
      });
    }
    md += "\n";
  });

  md += `### Emerging Practices (Unique Insights)

`;

  const emerging = analysis.insights.filter((i) => i.consensusLevel === "emerging");
  emerging.forEach((insight) => {
    md += `#### ${insight.title}

${insight.description}

**Contributor:** ${insight.contributors.join(", ")}

**Key Points:**
`;
    insight.tips.forEach((tip) => {
      md += `- ${tip}\n`;
    });
    md += "\n";
  });

  md += `---

## Category Breakdown

| Category | Number of Tips |
|----------|----------------|
`;

  const sortedCategories = Object.entries(analysis.categoryBreakdown).sort((a, b) => b[1] - a[1]);
  sortedCategories.forEach(([cat, count]) => {
    md += `| ${cat} | ${count} |\n`;
  });

  md += `
---

## The Most Important Insight

> **"Give Claude a way to verify its work. If Claude has that feedback loop, it will 2-3x the quality of the final result."**
>
> — Boris Cherny, Creator of Claude Code

This is the single most emphasized point across all contributors. Verification transforms Claude from a code generator into a reliable development partner.

---

## Sources

`;

  analysis.contributors.forEach((c) => {
    md += `- [${c.name} (@${c.handle})](${c.url}) - ${c.role}\n`;
  });

  md += `
---

*Generated by Boris Tweet Collector - Meta-Analysis Engine*
`;

  return md;
}

/**
 * Generate JSON output for the meta-analysis
 */
export function generateMetaAnalysisJSON(): string {
  return JSON.stringify(generateMetaAnalysis(), null, 2);
}
