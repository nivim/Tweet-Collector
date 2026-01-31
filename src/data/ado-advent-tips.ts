import type { Contributor, Tip } from "../types/index.js";

/**
 * Ado's Advent of Claude Tips
 * Source: https://adocomplete.com/advent-of-claude-2025/
 * 31 days of Claude Code tips from Anthropic DevRel
 */

export const ADO: Contributor = {
  id: "ado",
  name: "Ado",
  handle: "adocomplete",
  platform: "Twitter",
  role: "Developer Relations at Anthropic",
  url: "https://x.com/adocomplete",
  expertise: ["Claude Code Features", "DevRel", "Best Practices", "Hidden Features"],
};

export const ADO_ADVENT_TIPS: Tip[] = [
  // ============================================
  // ULTRATHINK
  // ============================================
  {
    id: "ado-ultrathink",
    contributorId: "ado",
    title: "Ultrathink for Deep Reasoning",
    category: "thinking",
    description:
      "When you include 'ultrathink' in your prompt, Claude allocates up to 32k tokens for internal reasoning before responding. Essential for complex architectural decisions or tricky debugging.",
    tips: [
      "Include 'ultrathink' keyword in prompt",
      "Allocates up to 32k reasoning tokens",
      "Critical for complex architecture decisions",
      "Helps with tricky debugging sessions",
      "Only 'ultrathink' works - other keywords disabled since v2.0.0",
      "Only works when MAX_THINKING_TOKENS is not set",
    ],
    example: {
      title: "Using ultrathink",
      language: "text",
      code: `"ultrathink about the best architecture for
handling real-time websocket connections with
message persistence and replay capability"`,
    },
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },

  // ============================================
  // HOOKS
  // ============================================
  {
    id: "ado-hooks-intro",
    contributorId: "ado",
    title: "Hooks: Deterministic Control Over AI",
    category: "hooks",
    description:
      "Hooks are shell commands that run at predetermined lifecycle events. They provide deterministic control over probabilistic AI behavior.",
    tips: [
      "PreToolUse: Run before tool execution",
      "PostToolUse: Run after tool execution",
      "PermissionRequest: Auto approve/deny permissions",
      "Configure via /hooks or .claude/settings.json",
      "Deterministic control over probabilistic AI",
    ],
    example: {
      title: "Hook configuration",
      language: "json",
      code: `{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "hooks": [{
        "type": "command",
        "command": "npm run lint:fix || true"
      }]
    }],
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "echo 'Running bash command...'"
      }]
    }]
  }
}`,
    },
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },
  {
    id: "ado-mcp-hooks",
    contributorId: "ado",
    title: "Hooks Work with MCP Tools",
    category: "hooks",
    description:
      "Claude Code hooks work seamlessly with Model Context Protocol (MCP) tools. MCP tools follow the pattern mcp__<server>__<tool> for matching.",
    tips: [
      "MCP tools have special naming pattern",
      "Pattern: mcp__<server>__<tool>",
      "Can hook into any MCP tool execution",
      "Wildcard syntax: mcp__server__*",
      "Enables automation across integrations",
    ],
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },

  // ============================================
  // MCP (Model Context Protocol)
  // ============================================
  {
    id: "ado-mcp-context-cost",
    contributorId: "ado",
    title: "MCP Tools Consume Context Space",
    category: "mcp",
    description:
      "MCP tools consume context window space just by being available, even when not used. Tool descriptions are loaded into context - some consume 8-30% of available context.",
    tips: [
      "Tools consume context just by existing",
      "Some tools use 8-30% of context window",
      "Use /context to see space per tool",
      "Disable unused MCP servers",
      "Be selective about which tools to enable",
    ],
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },
  {
    id: "ado-mcp-wildcard",
    contributorId: "ado",
    title: "MCP Wildcard Permissions",
    category: "mcp",
    description:
      "Use wildcard syntax like mcp__server__* for allowing entire MCP servers in permissions, rather than listing individual tools.",
    tips: [
      "Wildcard: mcp__server__* allows all tools",
      "Simpler than listing each tool",
      "Useful for trusted MCP servers",
      "Reduces permission prompt fatigue",
      "Configure in settings.json",
    ],
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },

  // ============================================
  // HEADLESS MODE
  // ============================================
  {
    id: "ado-headless-mode",
    contributorId: "ado",
    title: "Headless Mode for Automation",
    category: "automation",
    description:
      "Claude Code includes headless mode for non-interactive contexts: CI, pre-commit hooks, build scripts, and automation. Use -p flag with a prompt.",
    tips: [
      "Use -p flag for headless mode",
      "--output-format stream-json for JSON output",
      "Perfect for CI/CD pipelines",
      "Pre-commit hook integration",
      "Build script automation",
      "Does not persist between sessions",
    ],
    example: {
      title: "Headless mode examples",
      language: "bash",
      code: `# Basic headless query
claude -p "Analyze this code for security issues"

# With JSON output
claude -p "List all TODO comments" --output-format stream-json

# Plan mode headless
claude --permission-mode plan -p "Analyze the auth system"`,
    },
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },

  // ============================================
  // PLAN MODE
  // ============================================
  {
    id: "ado-plan-mode-default",
    contributorId: "ado",
    title: "Default to Plan Mode 90% of the Time",
    category: "plan-mode",
    description:
      "Ado defaults to plan mode 90% of the time. Press Shift+Tab twice or use /plan to enter. Planning before execution dramatically improves results.",
    tips: [
      "Shift+Tab twice to enter Plan mode",
      "Or use /plan command",
      "Default to plan mode for most tasks",
      "90% of work should start with planning",
      "Iterate on plan before execution",
    ],
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },

  // ============================================
  // AGENT SKILLS
  // ============================================
  {
    id: "ado-agent-skills",
    contributorId: "ado",
    title: "Agent Skills: Portable Instruction Packages",
    category: "skills",
    description:
      "Skills are folders of instructions, scripts, and resources that teach Claude specialized tasks. They're packaged once and usable everywhere. Agent Skills are now an open standard.",
    tips: [
      "Folders of instructions and resources",
      "Package once, use everywhere",
      "Open standard across tools",
      "Include scripts and examples",
      "Share via git or package managers",
    ],
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },

  // ============================================
  // KEYBOARD SHORTCUTS
  // ============================================
  {
    id: "ado-bash-prefix",
    contributorId: "ado",
    title: "! Prefix for Instant Bash Execution",
    category: "shortcuts",
    description:
      "Don't waste tokens asking Claude to run commands. The ! prefix executes bash instantly and injects output into context.",
    tips: [
      "! at start executes bash directly",
      "Output injected into context",
      "Saves tokens vs asking Claude",
      "Faster for simple commands",
      "Example: !git status",
    ],
    example: {
      title: "Bash prefix usage",
      language: "text",
      code: `# Instead of "please run git status"
!git status

# Chain commands
!npm test && npm run build

# Check file contents
!cat package.json`,
    },
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },
  {
    id: "ado-checkpoints",
    contributorId: "ado",
    title: "Escape Twice for Checkpoints",
    category: "shortcuts",
    description:
      "Made a mess? Press Esc twice to jump back to a checkpoint. Claude creates checkpoints automatically during work.",
    tips: [
      "Esc + Esc to revert to checkpoint",
      "Checkpoints created automatically",
      "Undo mistakes quickly",
      "Don't fear experimentation",
      "Safety net for risky changes",
    ],
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },
  {
    id: "ado-vim-mode",
    contributorId: "ado",
    title: "Vim Mode for Power Users",
    category: "shortcuts",
    description:
      "Enable vim-style editing with /vim command. Get familiar insert/command modes for editing prompts. Run /vim again to disable.",
    tips: [
      "/vim to enable vim mode",
      "Full insert/command mode support",
      "Arrow keys navigate history in normal mode",
      "/vim again to disable",
      "Or configure permanently via /config",
    ],
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },
  {
    id: "ado-multiline-input",
    contributorId: "ado",
    title: "Multiline Input Methods",
    category: "shortcuts",
    description:
      "Type backslash followed by Enter for newlines. Shift+Enter works in iTerm2, WezTerm, Ghostty, Kitty. Run /terminal-setup for other terminals.",
    tips: [
      "Backslash + Enter for newlines (universal)",
      "Shift+Enter in compatible terminals",
      "/terminal-setup for other terminals",
      "Ctrl+G opens external editor",
      "External editor good for long pastes",
    ],
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },

  // ============================================
  // SUBAGENTS
  // ============================================
  {
    id: "ado-background-subagents",
    contributorId: "ado",
    title: "Background Subagents with MCP Access",
    category: "subagents",
    description:
      "Subagents can run in the background while you continue working, and they have full access to MCP tools.",
    tips: [
      "Run subagents in background",
      "Continue working while they run",
      "Full MCP tool access",
      "Great for long-running tasks",
      "Check results when ready",
    ],
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },

  // ============================================
  // SELF-HELP
  // ============================================
  {
    id: "ado-ask-claude",
    contributorId: "ado",
    title: "Ask Claude About Claude Code",
    category: "help",
    description:
      "If you have a question about Claude Code, just ask it. Claude Code has a specialized sub-agent for answering questions about its own features.",
    tips: [
      "Claude knows its own features",
      "Specialized sub-agent for self-help",
      "Ask about slash commands, settings, hooks",
      "MCP server questions answered",
      "Faster than searching documentation",
    ],
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },
  {
    id: "ado-release-notes",
    contributorId: "ado",
    title: "/release-notes for Latest Features",
    category: "help",
    description:
      "Type /release-notes to see what's new in your current version. Best way to learn about latest features.",
    tips: [
      "/release-notes shows version changes",
      "Best way to discover new features",
      "Check after updates",
      "Learn about improvements",
      "Stay current with capabilities",
    ],
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },

  // ============================================
  // SESSIONS
  // ============================================
  {
    id: "ado-named-sessions",
    contributorId: "ado",
    title: "Named Sessions for Organization",
    category: "sessions",
    description:
      "Use named sessions to organize different workstreams and easily switch between contexts.",
    tips: [
      "Name sessions by project or task",
      "Easy context switching",
      "Resume specific sessions later",
      "Keep workstreams separate",
      "Better than anonymous sessions",
    ],
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },
  {
    id: "ado-stats-command",
    contributorId: "ado",
    title: "/stats for Usage Insights",
    category: "monitoring",
    description:
      "Use /stats to view your usage patterns, streaks, and other insights about how you're using Claude Code.",
    tips: [
      "View usage patterns",
      "Track your streaks",
      "Understand your habits",
      "Identify optimization opportunities",
      "Fun gamification element",
    ],
    source: "https://adocomplete.com/advent-of-claude-2025/",
  },
];
