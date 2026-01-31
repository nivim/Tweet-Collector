import type { Contributor, Tip } from "../types/index.js";

/**
 * McKay Wrigley's Claude Code Tips
 * Source: https://x.com/mckaywrigley, https://mckaywrigley.substack.com
 * Focus: Agentic workflows, Obsidian integration, notes & research
 */

export const MCKAY_WRIGLEY: Contributor = {
  id: "mckay-wrigley",
  name: "McKay Wrigley",
  handle: "mckaywrigley",
  platform: "Twitter/Substack",
  role: "TakeoffAI Founder, AI Workflow Expert",
  url: "https://x.com/mckaywrigley",
  expertise: ["Agentic Workflows", "Notes & Research", "Obsidian Integration", "Subagents"],
};

export const MCKAY_WRIGLEY_TIPS: Tip[] = [
  // ============================================
  // CORE PHILOSOPHY
  // ============================================
  {
    id: "mw-philosophy",
    contributorId: "mckay-wrigley",
    title: "Claude Code is a Multi-Purpose Agent",
    category: "philosophy",
    description:
      "Claude Code is really just a customizable agentic system—an AI agent that's good at knowing when and how to use tools. While it's disguised as a coding tool, its primitives allow you to build flexible workflows for any task.",
    tips: [
      "Think beyond just coding tasks",
      "Use for notes, research, writing, and more",
      "The tool primitives are flexible and malleable",
      "Build custom workflows for any domain",
      "It's more of an agent OS than just a code tool",
    ],
    source: "https://mckaywrigley.substack.com/p/claude-agent",
  },

  // ============================================
  // OBSIDIAN INTEGRATION
  // ============================================
  {
    id: "mw-obsidian-setup",
    contributorId: "mckay-wrigley",
    title: "Use Claude Code with Obsidian",
    category: "integration",
    description:
      "Transform Obsidian from a simple note-taking app into an AI-powered knowledge base by pairing it with Claude Code. Since Obsidian uses markdown files, the workflow translates perfectly.",
    tips: [
      "Obsidian vaults are just folders of markdown files",
      "Claude Code can read and write to your vault",
      "Navigate to vault directory and start Claude",
      "Perfect for AI-assisted note-taking",
      "Much better than manual note organization",
    ],
    example: {
      title: "Starting Claude in Obsidian vault",
      language: "bash",
      code: `# Navigate to your Obsidian vault
cd ~/Documents/ObsidianVault

# Start Claude Code
claude

# Now Claude can manage your notes!`,
    },
    source: "https://mckaywrigley.substack.com/p/claude-agent",
  },
  {
    id: "mw-automated-tags",
    contributorId: "mckay-wrigley",
    title: "Automated Tags and Links",
    category: "automation",
    description:
      "Let Claude automatically add tags and create links between notes based on content, building a connected knowledge graph.",
    tips: [
      "Claude can analyze note content and add relevant tags",
      "Automatic wiki-style linking between related notes",
      "Builds knowledge graph over time",
      "Saves hours of manual organization",
      "Use custom commands to standardize tagging",
    ],
    source: "https://x.com/mckaywrigley/status/1943034127462339060",
  },

  // ============================================
  // AGENTIC WORKFLOWS
  // ============================================
  {
    id: "mw-core-flows",
    contributorId: "mckay-wrigley",
    title: "Core Agentic Flows",
    category: "workflow",
    description:
      "Build sophisticated agentic flows where Claude handles multi-step research, writing, and organization tasks autonomously.",
    tips: [
      "Chain multiple operations together",
      "Claude decides the best approach",
      "Works across files and folders",
      "Handles complex multi-step tasks",
      "Let the agent make decisions",
    ],
    source: "https://x.com/mckaywrigley/status/1943034127462339060",
  },
  {
    id: "mw-subagent-research",
    contributorId: "mckay-wrigley",
    title: "Subagent Parallelization for Research",
    category: "subagents",
    description:
      "Deploy sub-agents to handle multiple research tasks simultaneously, like gathering information from multiple sources in parallel.",
    tips: [
      "Spin up parallel sub-agents for concurrent work",
      "Multi-source research runs simultaneously",
      "Reduces total research time dramatically",
      "Each subagent has focused context",
      "Results aggregated in main session",
    ],
    example: {
      title: "Research subagent pattern",
      language: "text",
      code: `Ask Claude to:
"Research these 5 topics in parallel using subagents:
1. Topic A - search academic sources
2. Topic B - search news articles
3. Topic C - search documentation
4. Topic D - search forums
5. Topic E - search social media

Combine findings into a comprehensive summary."`,
    },
    source: "https://x.com/mckaywrigley/status/1943034127462339060",
  },

  // ============================================
  // MCP SERVERS
  // ============================================
  {
    id: "mw-mcp-integration",
    contributorId: "mckay-wrigley",
    title: "MCP Server Integrations",
    category: "mcp",
    description:
      "Integrate external tools via Model Context Protocol servers to pull or push data into/from your workflows. Examples: Context 7 for documentation, Google Drive, Notion.",
    tips: [
      "Connect to external data sources",
      "Pull in documentation automatically",
      "Sync with Google Drive or Notion",
      "Context 7 for framework docs",
      "Extend Claude's capabilities infinitely",
    ],
    source: "https://x.com/mckaywrigley/status/1943034127462339060",
  },

  // ============================================
  // CLOUD AUTOMATION
  // ============================================
  {
    id: "mw-cloud-automation",
    contributorId: "mckay-wrigley",
    title: "Cloud-Based Automation with GitHub Actions",
    category: "automation",
    description:
      "Deploy Claude Code in the cloud using GitHub Actions, allowing autonomous workflows and remote access to your system.",
    tips: [
      "Run Claude in GitHub Actions",
      "Autonomous workflows without local machine",
      "Schedule regular tasks",
      "Process triggered by events",
      "Scale beyond local resources",
    ],
    source: "https://x.com/mckaywrigley/status/1943034127462339060",
  },

  // ============================================
  // CLAUDEPUTER PROJECT
  // ============================================
  {
    id: "mw-claudeputer",
    contributorId: "mckay-wrigley",
    title: "Claudeputer: 24/7 Claude Machine",
    category: "advanced",
    description:
      "Give Claude its own dedicated computer (Mac Mini) running 24/7 with full control. This enables always-on AI assistance and autonomous task completion.",
    tips: [
      "Dedicated hardware for Claude",
      "Runs continuously 24/7",
      "Full computer control",
      "Handles tasks autonomously",
      "Ultimate Claude power user setup",
    ],
    source: "https://x.com/mckaywrigley",
  },

  // ============================================
  // CUSTOM COMMANDS
  // ============================================
  {
    id: "mw-custom-commands",
    contributorId: "mckay-wrigley",
    title: "Custom Commands for Repeated Workflows",
    category: "commands",
    description:
      "Create custom slash commands for workflows you repeat often. Drop markdown files in .claude/commands/ to create new commands.",
    tips: [
      "One command for complex workflows",
      "Share with team via git",
      "Consistent execution every time",
      "Claude can use your commands too",
      "Invest in building your command library",
    ],
    source: "https://x.com/mckaywrigley/status/1943034127462339060",
  },

  // ============================================
  // SPEECH TO TEXT
  // ============================================
  {
    id: "mw-stt",
    contributorId: "mckay-wrigley",
    title: "Speech-to-Text Integration",
    category: "input",
    description:
      "Use speech-to-text for faster input, especially for research notes and long-form content creation.",
    tips: [
      "Faster than typing for long content",
      "Great for dictating research notes",
      "Use while doing other tasks",
      "Local transcription for privacy",
      "Integrate with Claude seamlessly",
    ],
    source: "https://x.com/mckaywrigley/status/1943034127462339060",
  },

  // ============================================
  // HEAVY USAGE
  // ============================================
  {
    id: "mw-heavy-usage",
    contributorId: "mckay-wrigley",
    title: "Embrace Heavy Usage",
    category: "philosophy",
    description:
      "Don't hold back on usage. McKay is one of the biggest Claude Code users, sometimes consuming tens of thousands in model usage on a $200 plan.",
    tips: [
      "More usage = more productivity",
      "Run Claude continuously",
      "Multiple parallel sessions",
      "Background tasks running always",
      "The cost is worth the output",
    ],
    source: "https://x.com/mckaywrigley/status/1949922257171861922",
  },
];
