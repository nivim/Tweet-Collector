import type { BestPractice } from "../types/index.js";

/**
 * Best Practices for Working with Claude Code
 * Curated from Boris Cherny's tweets and public communications
 * Source: https://x.com/bcherny
 */

export const BEST_PRACTICES: BestPractice[] = [
  // ============================================
  // PARALLEL SESSIONS
  // ============================================
  {
    id: "parallel-sessions-terminal",
    title: "Run Multiple Claude Sessions in Parallel",
    description:
      "Run 5+ Claude Code sessions simultaneously in your terminal to maximize productivity. Number your tabs for easy reference and use system notifications to know when Claude needs input.",
    category: "parallel-sessions",
    tips: [
      "Use 5 numbered terminal tabs (1-5) for Claude Code sessions",
      "Enable system notifications to alert you when a session needs input",
      "Each session should use its own git checkout to avoid conflicts",
      "Use separate git checkouts instead of branches or worktrees for isolation",
      "Expect 10-20% of sessions to be abandoned due to unexpected scenarios",
    ],
    examples: [
      {
        title: "Setting up parallel checkouts",
        language: "bash",
        code: `# Create multiple checkouts for parallel sessions
mkdir -p ~/claude-workspaces
cd ~/claude-workspaces

# Clone multiple copies for parallel work
git clone git@github.com:your/repo.git session-1
git clone git@github.com:your/repo.git session-2
git clone git@github.com:your/repo.git session-3
git clone git@github.com:your/repo.git session-4
git clone git@github.com:your/repo.git session-5`,
        description: "Create 5 separate git checkouts for parallel Claude sessions",
      },
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },
  {
    id: "parallel-sessions-web",
    title: "Use Web and Mobile Sessions for Flexibility",
    description:
      "Run additional Claude Code sessions on claude.ai/code and mobile. Start sessions on mobile in the morning and check back later. Use --teleport to move sessions between local and web.",
    category: "parallel-sessions",
    tips: [
      "Run 5-10 additional sessions on claude.ai/code beyond terminal sessions",
      "Start sessions on mobile during idle time (commute, morning routine)",
      "Use --teleport to move sessions between local CLI and web",
      "Keep total of 10-15 concurrent sessions active",
      "Check back on long-running sessions periodically",
    ],
    examples: [
      {
        title: "Teleporting a session",
        language: "bash",
        code: `# Start a session that can be teleported
claude --teleport

# Or teleport an existing session to the web
# Session ID is shown when you start Claude Code`,
        description: "Use teleport to move sessions between environments",
      },
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },
  {
    id: "ai-as-capacity",
    title: "Think of AI as Capacity to Schedule, Not Just a Tool",
    description:
      "Treat AI as distributed compute capacity rather than a single tool. Each session is a separate worker with its own context. Allocate, queue, and manage sessions like compute resources.",
    category: "parallel-sessions",
    tips: [
      "View each session as a separate worker with dedicated context",
      "Allocate tasks to sessions based on context requirements",
      "Queue work and check back when value is ready",
      "The bottleneck is attention allocation, not generation speed",
      "Switch contexts only when a session produces actionable value",
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },

  // ============================================
  // MODEL SELECTION
  // ============================================
  {
    id: "use-opus-with-thinking",
    title: "Use Opus 4.5 with Thinking Mode",
    description:
      "Use Opus 4.5 with thinking enabled for all coding tasks. While it's larger and slower than Sonnet, it requires less steering and is better at tool use, making it faster overall.",
    category: "model-selection",
    tips: [
      "Opus 4.5 with thinking is the best coding model available",
      "Less steering required = faster overall completion",
      "Better tool use capabilities mean fewer errors and retries",
      "The extra thinking time is worth the improved quality",
      "Don't optimize for individual response speed - optimize for task completion",
    ],
    examples: [
      {
        title: "Model configuration",
        language: "json",
        code: `{
  "model": "claude-opus-4-5-20251101",
  "thinking": true
}`,
        description: "Configure Claude Code to use Opus with thinking",
      },
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },

  // ============================================
  // PLAN MODE
  // ============================================
  {
    id: "start-with-plan-mode",
    title: "Start Sessions in Plan Mode",
    description:
      "Most sessions should start in Plan mode (Shift+Tab twice). Iterate on the plan with Claude until it's solid, then switch to auto-accept mode for execution.",
    category: "plan-mode",
    tips: [
      "Press Shift+Tab twice to enter Plan mode",
      "Go back and forth with Claude until you like the plan",
      "A good plan enables Claude to one-shot the execution",
      "Don't rush past planning - invest time upfront",
      "Switch to auto-accept edits mode only after plan is approved",
    ],
    examples: [
      {
        title: "Plan mode workflow",
        language: "text",
        code: `1. Start Claude Code
2. Press Shift+Tab twice to enter Plan mode
3. Describe your task/PR goal
4. Review Claude's plan
5. Iterate: "Actually, let's also consider X" or "Change step 3 to..."
6. Once satisfied: "Looks good, let's execute"
7. Switch to auto-accept mode
8. Claude executes the plan (often one-shot)`,
        description: "Step-by-step Plan mode workflow",
      },
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },

  // ============================================
  // CLAUDE.md
  // ============================================
  {
    id: "shared-claude-md",
    title: "Maintain a Shared CLAUDE.md File",
    description:
      "Keep a single CLAUDE.md file checked into git that the whole team contributes to. Document mistakes so Claude doesn't repeat them, and best practices for your codebase.",
    category: "claude-md",
    tips: [
      "Check CLAUDE.md into git for version control",
      "Have the whole team contribute multiple times a week",
      "Document Claude's mistakes so it learns not to repeat them",
      "Include style conventions, design guidelines, and PR templates",
      "Keep it concise - aim for ~2.5k tokens",
      "Review and prune regularly to keep it focused",
    ],
    examples: [
      {
        title: "Example CLAUDE.md structure",
        language: "markdown",
        code: `# CLAUDE.md

## Project Overview
Brief description of the project and its architecture.

## Common Mistakes to Avoid
- Don't use deprecated API X, use Y instead
- Always handle error cases in async functions
- Never commit .env files

## Style Guidelines
- Use TypeScript strict mode
- Prefer functional components in React
- Use named exports, not default exports

## PR Guidelines
- Include tests for all new features
- Update documentation for API changes
- Keep PRs focused and under 400 lines

## Testing
- Run \`npm test\` before submitting
- E2E tests live in /tests/e2e`,
        description: "Example structure for a team CLAUDE.md file",
      },
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },
  {
    id: "claude-md-via-pr",
    title: "Update CLAUDE.md During Code Review",
    description:
      "Use @.claude mentions on coworkers' PRs to add learnings to CLAUDE.md as part of the review process. This captures knowledge at the point of discovery.",
    category: "claude-md",
    tips: [
      "Tag @.claude on PRs to suggest CLAUDE.md updates",
      "Use the Claude Code GitHub Action (/install-github-action)",
      "Capture learnings immediately when discovered in reviews",
      "Make CLAUDE.md updates part of the PR, not separate tasks",
      "This builds institutional knowledge automatically",
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },

  // ============================================
  // SLASH COMMANDS
  // ============================================
  {
    id: "slash-commands-inner-loop",
    title: "Create Slash Commands for Repeated Workflows",
    description:
      "Use slash commands for every 'inner loop' workflow you do many times a day. Commands are checked into git and live in .claude/commands/.",
    category: "slash-commands",
    tips: [
      "Create commands for workflows you repeat multiple times daily",
      "Store commands in .claude/commands/ directory",
      "Check commands into git to share with team",
      "Claude can also use your slash commands",
      "Example: /commit-push-pr for the complete PR workflow",
    ],
    examples: [
      {
        title: "commit-push-pr.md slash command",
        language: "markdown",
        code: `# /commit-push-pr

Commit all staged changes with a descriptive message, push to origin, and create a PR.

## Steps
1. Review staged changes with \`git diff --staged\`
2. Write a concise, descriptive commit message
3. Commit the changes
4. Push to the current branch
5. Create a PR with a summary of changes`,
        description: "Example slash command for the complete PR workflow",
      },
      {
        title: "Slash command with inline Bash",
        language: "markdown",
        code: `# /status

Show current git status and recent commits.

\`\`\`bash
git status
git log --oneline -5
\`\`\`

Summarize the current state of the repository.`,
        description: "Slash command with pre-computed Bash for quick execution",
      },
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },
  {
    id: "slash-commands-bash",
    title: "Include Inline Bash in Slash Commands",
    description:
      "Slash commands can include inline Bash to pre-compute info (like git status) for quick execution without extra model calls.",
    category: "slash-commands",
    tips: [
      "Use code blocks in markdown to include Bash commands",
      "Pre-compute commonly needed info (git status, branch info, etc.)",
      "Reduces model calls and speeds up execution",
      "Combine multiple info-gathering commands in one block",
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },

  // ============================================
  // HOOKS
  // ============================================
  {
    id: "post-tool-use-formatting",
    title: "Use PostToolUse Hooks for Code Formatting",
    description:
      "Set up a PostToolUse hook to automatically format Claude's code after writes/edits. This handles the last 10% of formatting to avoid CI errors.",
    category: "hooks",
    tips: [
      "Claude generates well-formatted code, hooks handle edge cases",
      "Use PostToolUse hook triggered on Write|Edit actions",
      "Run your formatter (prettier, black, etc.) in the hook",
      "Add || true to prevent hook failures from blocking work",
      "Catches formatting issues before they fail in CI",
    ],
    examples: [
      {
        title: "PostToolUse formatting hook",
        language: "json",
        code: `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npm run format || true"
          }
        ]
      }
    ]
  }
}`,
        description: "Hook configuration to auto-format after file changes",
      },
      {
        title: "Python formatting hook",
        language: "json",
        code: `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "black . && isort . || true"
          }
        ]
      }
    ]
  }
}`,
        description: "Hook for Python projects using black and isort",
      },
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },
  {
    id: "agent-stop-hook",
    title: "Use Agent Stop Hooks for Long-Running Tasks",
    description:
      "For very long-running tasks, use an agent Stop hook to verify work deterministically when Claude finishes.",
    category: "hooks",
    tips: [
      "Set up Stop hooks for automated verification",
      "More deterministic than prompting Claude to self-verify",
      "Combine with background agents for async verification",
      "Consider --permission-mode=dontAsk for unattended sessions",
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },

  // ============================================
  // PERMISSIONS
  // ============================================
  {
    id: "pre-allow-permissions",
    title: "Pre-Allow Safe Bash Commands",
    description:
      "Instead of using --dangerously-skip-permissions, use /permissions to pre-allow safe bash commands. Store these in .claude/settings.json and share with the team.",
    category: "permissions",
    tips: [
      "Don't use --dangerously-skip-permissions in normal workflows",
      "Use /permissions command to allow specific safe commands",
      "Store permissions in .claude/settings.json",
      "Check settings.json into git to share with team",
      "Only allow commands you know are safe in your environment",
    ],
    examples: [
      {
        title: "Example settings.json with permissions",
        language: "json",
        code: `{
  "permissions": {
    "allow": [
      "Bash(npm run *)",
      "Bash(git *)",
      "Bash(npx prettier *)",
      "Bash(npx eslint *)",
      "Bash(npm test)",
      "Bash(npm run build)"
    ]
  }
}`,
        description: "Pre-allowed commands in settings.json",
      },
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },
  {
    id: "sandbox-permissions",
    title: "Use Relaxed Permissions in Sandboxed Environments",
    description:
      "For long-running tasks in sandboxed/isolated environments, use --permission-mode=dontAsk or --dangerously-skip-permissions to avoid permission prompts.",
    category: "permissions",
    tips: [
      "Only use relaxed permissions in truly sandboxed environments",
      "Good for CI/CD pipelines and isolated containers",
      "Combine with verification hooks for quality assurance",
      "Never use on your main development machine without sandbox",
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },

  // ============================================
  // VERIFICATION (Most Important!)
  // ============================================
  {
    id: "verification-feedback-loop",
    title: "Give Claude a Way to Verify Its Work (Most Important!)",
    description:
      "The most important thing for great results: give Claude a way to verify its work. This feedback loop can 2-3x the quality of the final result.",
    category: "verification",
    tips: [
      "This is THE most important tip for using Claude Code",
      "Verification creates a feedback loop that dramatically improves quality",
      "Claude will iterate until the code works correctly",
      "Invest time in making verification rock-solid",
      "Expect 2-3x quality improvement with good verification",
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },
  {
    id: "verification-methods",
    title: "Choose Verification Methods for Your Domain",
    description:
      "Verification looks different for each domain. It might be bash commands, test suites, browser testing, or phone simulators. Make it appropriate for your context.",
    category: "verification",
    tips: [
      "Simple: Run a bash command to check output",
      "Unit tests: Run your test suite",
      "Web apps: Use browser automation or Chrome extension",
      "Mobile: Use phone simulators",
      "APIs: Use curl/httpie to test endpoints",
      "Make verification fast enough to run frequently",
    ],
    examples: [
      {
        title: "Verification strategies by domain",
        language: "text",
        code: `Domain              | Verification Method
--------------------|------------------------------------------
CLI tools           | Run the command, check output
Libraries           | Run unit tests: npm test / pytest
Web frontends       | Browser testing with Chrome extension
APIs                | curl requests, API test suite
Mobile apps         | Phone simulator testing
DevOps/Infra        | terraform plan, dry-run modes
Data pipelines      | Sample data validation`,
        description: "Different verification approaches for different domains",
      },
      {
        title: "Verification subagent prompt",
        language: "markdown",
        code: `# verify-app subagent

Test the application end-to-end:

1. Start the dev server
2. Open the app in a browser
3. Test the main user flows:
   - Login/logout
   - Create new item
   - Edit existing item
   - Delete item
4. Check for console errors
5. Verify all API calls succeed
6. Report any issues found`,
        description: "Example verification subagent for web apps",
      },
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },
  {
    id: "verification-chrome-extension",
    title: "Use Browser Testing for Web Applications",
    description:
      "For web applications, Claude can use the Chrome extension to open a browser, test the UI, and iterate until the code works and the UX feels good.",
    category: "verification",
    tips: [
      "Claude can control browsers via Chrome extension",
      "Tests actual UI, not just API responses",
      "Iterates until both code works AND UX feels good",
      "Catches visual and interaction issues",
      "Essential for frontend development workflows",
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },

  // ============================================
  // SUBAGENTS
  // ============================================
  {
    id: "common-workflow-subagents",
    title: "Create Subagents for Common Workflows",
    description:
      "Use subagents to automate common workflows. Examples: code-simplifier to clean up code after Claude finishes, verify-app for end-to-end testing.",
    category: "subagents",
    tips: [
      "Think of subagents as automating common PR workflows",
      "code-simplifier: Simplifies/cleans up code after changes",
      "verify-app: Detailed E2E testing instructions",
      "Create subagents for any workflow you do on most PRs",
      "Subagents can be triggered manually or via hooks",
    ],
    examples: [
      {
        title: "code-simplifier subagent",
        language: "markdown",
        code: `# code-simplifier

Review the code changes and simplify where possible:

1. Remove unnecessary complexity
2. Consolidate duplicate code
3. Improve variable/function names
4. Remove dead code
5. Simplify conditional logic
6. Ensure consistent style

Keep functionality identical - only improve code quality.`,
        description: "Subagent for post-implementation code cleanup",
      },
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },
  {
    id: "background-verification-agents",
    title: "Use Background Agents for Async Verification",
    description:
      "For long-running tasks, prompt Claude to verify work with a background agent when done, or use agent Stop hooks for deterministic verification.",
    category: "subagents",
    tips: [
      "Background agents verify work asynchronously",
      "Useful for tasks that take a long time to complete",
      "Combine with Stop hooks for deterministic triggering",
      "Consider ralph-wiggum plugin for additional capabilities",
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },

  // ============================================
  // WORKFLOW PHILOSOPHY
  // ============================================
  {
    id: "no-one-correct-way",
    title: "There's No One Correct Way to Use Claude Code",
    description:
      "Claude Code is intentionally built to be customizable. Each person on the Claude Code team uses it differently. Find what works for you.",
    category: "philosophy",
    tips: [
      "Claude Code works great out of the box",
      "Customization is optional, not required",
      "Experiment to find your personal workflow",
      "What works for others may not work for you",
      "The tool is designed to be hacked and customized",
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },
  {
    id: "vanilla-is-fine",
    title: "Vanilla Setup Works Great",
    description:
      "Boris Cherny's setup is 'surprisingly vanilla' - he doesn't customize Claude Code much because it works great out of the box. Don't feel pressure to over-customize.",
    category: "philosophy",
    tips: [
      "The creator of Claude Code barely customizes it",
      "Focus on workflow, not configuration",
      "Add customizations only when you feel pain points",
      "Simple is often better than complex",
    ],
    source: "Boris Cherny (@bcherny)",
    sourceUrl: "https://x.com/bcherny/status/2007179832300581177",
  },
];

export const CATEGORIES_INFO: Record<string, { name: string; description: string }> = {
  "parallel-sessions": {
    name: "Parallel Sessions",
    description: "Running multiple Claude Code sessions simultaneously for maximum productivity",
  },
  "plan-mode": {
    name: "Plan Mode",
    description: "Using Plan mode to iterate on approach before execution",
  },
  "claude-md": {
    name: "CLAUDE.md",
    description: "Maintaining shared knowledge files for team-wide Claude improvement",
  },
  "slash-commands": {
    name: "Slash Commands",
    description: "Creating reusable commands for common workflows",
  },
  hooks: {
    name: "Hooks",
    description: "Automating tasks with pre/post tool use hooks",
  },
  permissions: {
    name: "Permissions",
    description: "Managing Claude's access to system commands safely",
  },
  verification: {
    name: "Verification",
    description: "Giving Claude ways to verify and iterate on its work",
  },
  subagents: {
    name: "Subagents",
    description: "Using specialized agents for common tasks",
  },
  "model-selection": {
    name: "Model Selection",
    description: "Choosing the right model for your tasks",
  },
  workflow: {
    name: "Workflow",
    description: "General workflow tips and patterns",
  },
  philosophy: {
    name: "Philosophy",
    description: "High-level thinking about AI-assisted development",
  },
};
