import type { Contributor, Tip } from "../types/index.js";

/**
 * YK Sugi's Claude Code Tips
 * Source: https://github.com/ykdojo/claude-code-tips
 * 45 tips from basics to advanced
 */

export const YK_SUGI: Contributor = {
  id: "yk-sugi",
  name: "YK Sugi",
  handle: "ykdojo",
  platform: "GitHub/Twitter",
  role: "CS Dojo Creator, Developer Educator",
  url: "https://github.com/ykdojo",
  expertise: ["Developer Education", "Workflow Optimization", "Scripting", "Automation"],
};

export const YK_SUGI_TIPS: Tip[] = [
  // ============================================
  // BASIC TIPS (0-7)
  // ============================================
  {
    id: "yk-0",
    contributorId: "yk-sugi",
    title: "Customize Your Status Line",
    category: "customization",
    description:
      "Customize the status line at the bottom of Claude Code to show useful info like model, directory, git branch, uncommitted file count, sync status with origin, and a visual progress bar for token usage.",
    tips: [
      "Show model name and current directory",
      "Display git branch and uncommitted file count",
      "Add sync status with origin",
      "Include visual progress bar for token usage",
      "Show last message summary on second line",
    ],
    example: {
      title: "Status line configuration",
      language: "bash",
      code: `# Install the custom status line script
curl -o ~/.claude/status-line.sh https://raw.githubusercontent.com/ykdojo/claude-code-tips/main/scripts/context-bar.sh
chmod +x ~/.claude/status-line.sh`,
    },
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-1",
    contributorId: "yk-sugi",
    title: "Master Essential Slash Commands",
    category: "commands",
    description:
      "Learn the most useful built-in slash commands: /usage, /chrome, /mcp, /stats, /clear, /context, /compact.",
    tips: [
      "/usage - Check your API usage and costs",
      "/chrome - Control Chrome browser for testing",
      "/mcp - Manage Model Context Protocol servers",
      "/stats - View usage patterns and streaks",
      "/clear - Clear conversation and start fresh",
      "/context - See how you're using the 200k token window",
      "/compact - Summarize conversation to free up context",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-2",
    contributorId: "yk-sugi",
    title: "Voice Input with Local Transcription",
    category: "input",
    description:
      "Talk to Claude Code with your voice using local transcription tools for faster input.",
    tips: [
      "Use local transcription for privacy",
      "Faster than typing for long explanations",
      "Great for describing complex problems verbally",
      "Works with various speech-to-text tools",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-3",
    contributorId: "yk-sugi",
    title: "Break Down Large Problems",
    category: "workflow",
    description:
      "Break down large problems into smaller, manageable sub-tasks for better results.",
    tips: [
      "Divide complex tasks into atomic steps",
      "Each sub-task should be independently verifiable",
      "Prevents context overload",
      "Makes debugging easier",
      "Allows for parallel work across sessions",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-4",
    contributorId: "yk-sugi",
    title: "Git and GitHub CLI Integration",
    category: "git",
    description:
      "Use Git and GitHub CLI for commits, branching, and draft PRs directly through Claude Code.",
    tips: [
      "Create commits with descriptive messages",
      "Branch management through natural language",
      "Create draft PRs for review",
      "Use gh cli for GitHub operations",
      "Automate common git workflows",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-5",
    contributorId: "yk-sugi",
    title: "Keep Context Fresh",
    category: "context",
    description:
      "Keep AI context fresh and condensed by starting new conversations regularly.",
    tips: [
      "Long conversations accumulate noise",
      "Start fresh for new tasks",
      "Use handoff documents to preserve state",
      "Prevents confusion from stale context",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-6",
    contributorId: "yk-sugi",
    title: "Extract Terminal Output",
    category: "output",
    description:
      "Extract terminal output via /copy, clipboard, files, or opening in editors.",
    tips: [
      "/copy - Copy output to clipboard",
      "Redirect to files for persistence",
      "Open in external editors for review",
      "Use for documentation and sharing",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-7",
    contributorId: "yk-sugi",
    title: "Set Up Terminal Aliases",
    category: "customization",
    description:
      "Set up terminal aliases (c, ch, gb, co, q) for quick access to common commands.",
    tips: [
      "c - Start Claude Code",
      "ch - Claude Code with history",
      "gb - Git branch operations",
      "co - Checkout branches",
      "q - Quick exit",
    ],
    example: {
      title: "Example aliases",
      language: "bash",
      code: `# Add to ~/.bashrc or ~/.zshrc
alias c='claude'
alias ch='claude --continue'
alias cc='claude --context'`,
    },
    source: "https://github.com/ykdojo/claude-code-tips",
  },

  // ============================================
  // INTERMEDIATE TIPS (8-14)
  // ============================================
  {
    id: "yk-8",
    contributorId: "yk-sugi",
    title: "Use Handoff Documents",
    category: "context",
    description:
      "Proactively compact context with handoff documents between conversations. The /handoff command automates creating these documents.",
    tips: [
      "Creates HANDOFF.md with current state",
      "Includes goal, progress, what worked/didn't",
      "Documents next steps",
      "Enables seamless session transitions",
      "Install via dx plugin or manually create",
    ],
    example: {
      title: "Handoff document structure",
      language: "markdown",
      code: `# HANDOFF.md

## Goal
What we're trying to accomplish

## Progress
- [x] Completed step 1
- [x] Completed step 2
- [ ] In progress: step 3

## What Worked
- Approach A was successful

## What Didn't Work
- Approach B failed because...

## Next Steps
1. Complete step 3
2. Start step 4`,
    },
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-9",
    contributorId: "yk-sugi",
    title: "Write-Test Cycles with Tmux",
    category: "automation",
    description:
      "Complete write-test cycles for autonomous tasks using tmux patterns.",
    tips: [
      "Run tests automatically after changes",
      "Use tmux for persistent sessions",
      "Claude can monitor test output",
      "Enables autonomous iteration",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-10",
    contributorId: "yk-sugi",
    title: "Copy Inaccessible Web Content",
    category: "input",
    description:
      "Use Cmd+A/Ctrl+A to copy inaccessible web content directly into Claude Code.",
    tips: [
      "Works for sites that block scraping",
      "Select all and paste into prompt",
      "Useful for documentation and articles",
      "Bypasses web fetch limitations",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-11",
    contributorId: "yk-sugi",
    title: "Use Gemini CLI as Fallback",
    category: "tools",
    description:
      "Use Gemini CLI as fallback for sites Claude can't access (like Reddit).",
    tips: [
      "Gemini can access some blocked sites",
      "Use as Claude Code's 'minion'",
      "Great for Reddit content",
      "Complements Claude's capabilities",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-12",
    contributorId: "yk-sugi",
    title: "Invest in Your Workflow",
    category: "customization",
    description:
      "Invest in your own workflow with custom scripts and CLAUDE.md.",
    tips: [
      "Create project-specific CLAUDE.md",
      "Build custom scripts for repetitive tasks",
      "Automate your most common workflows",
      "Share with team via git",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-13",
    contributorId: "yk-sugi",
    title: "Search Conversation History",
    category: "history",
    description:
      "Search conversation history stored in ~/.claude/projects/. Folder names are based on project path with slashes as dashes.",
    tips: [
      "History stored as .jsonl files",
      "Search across past conversations",
      "Find previous solutions and approaches",
      "Useful for recurring problems",
    ],
    example: {
      title: "Finding conversation history",
      language: "bash",
      code: `# List recent conversations
ls -la ~/.claude/projects/

# Search for a specific topic
grep -r "authentication" ~/.claude/projects/`,
    },
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-14",
    contributorId: "yk-sugi",
    title: "Cascade Multitasking with Tabs",
    category: "parallel",
    description:
      "Multitask with terminal tabs using a 'cascade' left-to-right approach.",
    tips: [
      "Organize tabs by task progression",
      "Left-to-right workflow",
      "Each tab handles different aspect",
      "Similar to Boris's numbered tabs approach",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },

  // ============================================
  // ADVANCED TIPS (15-30)
  // ============================================
  {
    id: "yk-15",
    contributorId: "yk-sugi",
    title: "Slim Down System Prompt",
    category: "optimization",
    description:
      "Slim down Claude Code's system prompt for better performance and more context space.",
    tips: [
      "Default prompt uses significant tokens",
      "Customize to remove unused features",
      "Frees up context for your work",
      "Improves response speed",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-16",
    contributorId: "yk-sugi",
    title: "Use Git Worktrees",
    category: "git",
    description:
      "Use Git worktrees for parallel branch work instead of multiple clones.",
    tips: [
      "More efficient than multiple clones",
      "Share git history across worktrees",
      "Each worktree is a different branch",
      "Great for parallel Claude sessions",
    ],
    example: {
      title: "Creating worktrees",
      language: "bash",
      code: `# Create a worktree for a feature branch
git worktree add ../feature-branch feature-branch

# List worktrees
git worktree list

# Remove when done
git worktree remove ../feature-branch`,
    },
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-17",
    contributorId: "yk-sugi",
    title: "Manual Exponential Backoff",
    category: "automation",
    description:
      "Apply manual exponential backoff for long-running jobs to handle rate limits.",
    tips: [
      "Handle API rate limits gracefully",
      "Increase wait time between retries",
      "Prevents failed long-running tasks",
      "Essential for autonomous operations",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-21",
    contributorId: "yk-sugi",
    title: "Run Containers for Risky Tasks",
    category: "safety",
    description:
      "Run containers for long-running or risky tasks with --dangerously-skip-permissions.",
    tips: [
      "Isolate risky operations in containers",
      "Safe to use skip-permissions in sandbox",
      "Great for experimentation",
      "Prevents damage to main system",
    ],
    example: {
      title: "Docker container for Claude Code",
      language: "bash",
      code: `# Run Claude Code in a container
docker run -it --rm \\
  -v $(pwd):/workspace \\
  claude-code --dangerously-skip-permissions`,
    },
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-25",
    contributorId: "yk-sugi",
    title: "Understand CLAUDE.md vs Skills vs Commands vs Plugins",
    category: "architecture",
    description:
      "Understand the differences between CLAUDE.md, Skills, Slash Commands, and Plugins.",
    tips: [
      "CLAUDE.md: Project-specific instructions and context",
      "Skills: Packaged instructions that work across projects",
      "Slash Commands: Reusable prompts in .claude/commands/",
      "Plugins: Extended functionality like dx",
      "Each serves different customization needs",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-28",
    contributorId: "yk-sugi",
    title: "Master Output Verification Methods",
    category: "verification",
    description:
      "Master different output verification methods to ensure Claude's work is correct.",
    tips: [
      "Run tests after every change",
      "Use type checking (TypeScript, mypy)",
      "Linting catches style issues",
      "Browser testing for UI changes",
      "API testing with curl/httpie",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-30",
    contributorId: "yk-sugi",
    title: "Keep CLAUDE.md Simple",
    category: "claude-md",
    description:
      "Keep CLAUDE.md simple and review periodically. Don't overload it.",
    tips: [
      "Focus on essential instructions",
      "Remove outdated guidelines",
      "Review and prune regularly",
      "Quality over quantity",
      "Too much context can confuse Claude",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },

  // ============================================
  // EXPERT TIPS (31-45)
  // ============================================
  {
    id: "yk-34",
    contributorId: "yk-sugi",
    title: "Write Extensive Tests with TDD",
    category: "testing",
    description:
      "Write extensive tests and use TDD methodology for better code quality.",
    tips: [
      "Write tests before implementation",
      "Claude excels at test generation",
      "Tests provide verification feedback",
      "TDD reduces bugs and rework",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-36",
    contributorId: "yk-sugi",
    title: "Run Bash and Subagents in Background",
    category: "parallel",
    description:
      "Run bash commands and subagents in the background while continuing work.",
    tips: [
      "Long-running tasks don't block you",
      "Subagents work independently",
      "Check results when ready",
      "Maximizes productivity",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-39",
    contributorId: "yk-sugi",
    title: "Balance Planning with Quick Prototyping",
    category: "workflow",
    description:
      "Balance planning with quick prototyping - sometimes just try it.",
    tips: [
      "Plan mode for complex tasks",
      "Quick prototypes for exploration",
      "Don't over-plan simple changes",
      "Iterate based on feedback",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-40",
    contributorId: "yk-sugi",
    title: "Simplify Overcomplicated Code",
    category: "code-quality",
    description:
      "Use Claude to simplify overcomplicated code after initial implementation.",
    tips: [
      "Ask Claude to simplify after it works",
      "Remove unnecessary abstractions",
      "Consolidate duplicate code",
      "Improve readability",
    ],
    source: "https://github.com/ykdojo/claude-code-tips",
  },
  {
    id: "yk-44",
    contributorId: "yk-sugi",
    title: "Install the dx Plugin",
    category: "tools",
    description:
      "Install the dx plugin for enhanced functionality including handoff documents and more.",
    tips: [
      "Adds /handoff command",
      "Enhanced developer experience",
      "Community-maintained",
      "Regular updates and improvements",
    ],
    example: {
      title: "Installing dx plugin",
      language: "bash",
      code: `# Install dx plugin
claude plugins install dx`,
    },
    source: "https://github.com/ykdojo/claude-code-tips",
  },
];
