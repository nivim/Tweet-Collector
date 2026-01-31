# Claude Code Best Practices
## Based on Boris Cherny's Workflow (Creator of Claude Code)

> This guide compiles best practices from Boris Cherny ([@bcherny](https://x.com/bcherny)),
> the creator of Claude Code at Anthropic. These practices are derived from his public
> tweets and communications about how he uses Claude Code to achieve remarkable productivity
> (259 PRs in 30 days!).

---

## Table of Contents

- [Parallel Sessions](#parallel-sessions)
- [Model Selection](#model-selection)
- [Plan Mode](#plan-mode)
- [CLAUDE.md](#claude-md)
- [Slash Commands](#slash-commands)
- [Hooks](#hooks)
- [Permissions](#permissions)
- [Verification](#verification)
- [Subagents](#subagents)
- [Philosophy](#philosophy)

---

## The Most Important Tip

> **"Probably the most important thing to get great results out of Claude Code: give Claude a way to verify its work. If Claude has that feedback loop, it will 2-3x the quality of the final result."**
>
> — Boris Cherny

---

## Parallel Sessions {#parallel-sessions}

*Running multiple Claude Code sessions simultaneously for maximum productivity*

### Run Multiple Claude Sessions in Parallel

Run 5+ Claude Code sessions simultaneously in your terminal to maximize productivity. Number your tabs for easy reference and use system notifications to know when Claude needs input.

**Key Tips:**
- Use 5 numbered terminal tabs (1-5) for Claude Code sessions
- Enable system notifications to alert you when a session needs input
- Each session should use its own git checkout to avoid conflicts
- Use separate git checkouts instead of branches or worktrees for isolation
- Expect 10-20% of sessions to be abandoned due to unexpected scenarios

**Examples:**

*Setting up parallel checkouts*
Create 5 separate git checkouts for parallel Claude sessions

```bash
# Create multiple checkouts for parallel sessions
mkdir -p ~/claude-workspaces
cd ~/claude-workspaces

# Clone multiple copies for parallel work
git clone git@github.com:your/repo.git session-1
git clone git@github.com:your/repo.git session-2
git clone git@github.com:your/repo.git session-3
git clone git@github.com:your/repo.git session-4
git clone git@github.com:your/repo.git session-5
```

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

### Use Web and Mobile Sessions for Flexibility

Run additional Claude Code sessions on claude.ai/code and mobile. Start sessions on mobile in the morning and check back later. Use --teleport to move sessions between local and web.

**Key Tips:**
- Run 5-10 additional sessions on claude.ai/code beyond terminal sessions
- Start sessions on mobile during idle time (commute, morning routine)
- Use --teleport to move sessions between local CLI and web
- Keep total of 10-15 concurrent sessions active
- Check back on long-running sessions periodically

**Examples:**

*Teleporting a session*
Use teleport to move sessions between environments

```bash
# Start a session that can be teleported
claude --teleport

# Or teleport an existing session to the web
# Session ID is shown when you start Claude Code
```

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

### Think of AI as Capacity to Schedule, Not Just a Tool

Treat AI as distributed compute capacity rather than a single tool. Each session is a separate worker with its own context. Allocate, queue, and manage sessions like compute resources.

**Key Tips:**
- View each session as a separate worker with dedicated context
- Allocate tasks to sessions based on context requirements
- Queue work and check back when value is ready
- The bottleneck is attention allocation, not generation speed
- Switch contexts only when a session produces actionable value

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

---

## Model Selection {#model-selection}

*Choosing the right model for your tasks*

### Use Opus 4.5 with Thinking Mode

Use Opus 4.5 with thinking enabled for all coding tasks. While it's larger and slower than Sonnet, it requires less steering and is better at tool use, making it faster overall.

**Key Tips:**
- Opus 4.5 with thinking is the best coding model available
- Less steering required = faster overall completion
- Better tool use capabilities mean fewer errors and retries
- The extra thinking time is worth the improved quality
- Don't optimize for individual response speed - optimize for task completion

**Examples:**

*Model configuration*
Configure Claude Code to use Opus with thinking

```json
{
  "model": "claude-opus-4-5-20251101",
  "thinking": true
}
```

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

---

## Plan Mode {#plan-mode}

*Using Plan mode to iterate on approach before execution*

### Start Sessions in Plan Mode

Most sessions should start in Plan mode (Shift+Tab twice). Iterate on the plan with Claude until it's solid, then switch to auto-accept mode for execution.

**Key Tips:**
- Press Shift+Tab twice to enter Plan mode
- Go back and forth with Claude until you like the plan
- A good plan enables Claude to one-shot the execution
- Don't rush past planning - invest time upfront
- Switch to auto-accept edits mode only after plan is approved

**Examples:**

*Plan mode workflow*
Step-by-step Plan mode workflow

```text
1. Start Claude Code
2. Press Shift+Tab twice to enter Plan mode
3. Describe your task/PR goal
4. Review Claude's plan
5. Iterate: "Actually, let's also consider X" or "Change step 3 to..."
6. Once satisfied: "Looks good, let's execute"
7. Switch to auto-accept mode
8. Claude executes the plan (often one-shot)
```

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

---

## CLAUDE.md {#claude-md}

*Maintaining shared knowledge files for team-wide Claude improvement*

### Maintain a Shared CLAUDE.md File

Keep a single CLAUDE.md file checked into git that the whole team contributes to. Document mistakes so Claude doesn't repeat them, and best practices for your codebase.

**Key Tips:**
- Check CLAUDE.md into git for version control
- Have the whole team contribute multiple times a week
- Document Claude's mistakes so it learns not to repeat them
- Include style conventions, design guidelines, and PR templates
- Keep it concise - aim for ~2.5k tokens
- Review and prune regularly to keep it focused

**Examples:**

*Example CLAUDE.md structure*
Example structure for a team CLAUDE.md file

```markdown
# CLAUDE.md

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
- Run `npm test` before submitting
- E2E tests live in /tests/e2e
```

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

### Update CLAUDE.md During Code Review

Use @.claude mentions on coworkers' PRs to add learnings to CLAUDE.md as part of the review process. This captures knowledge at the point of discovery.

**Key Tips:**
- Tag @.claude on PRs to suggest CLAUDE.md updates
- Use the Claude Code GitHub Action (/install-github-action)
- Capture learnings immediately when discovered in reviews
- Make CLAUDE.md updates part of the PR, not separate tasks
- This builds institutional knowledge automatically

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

---

## Slash Commands {#slash-commands}

*Creating reusable commands for common workflows*

### Create Slash Commands for Repeated Workflows

Use slash commands for every 'inner loop' workflow you do many times a day. Commands are checked into git and live in .claude/commands/.

**Key Tips:**
- Create commands for workflows you repeat multiple times daily
- Store commands in .claude/commands/ directory
- Check commands into git to share with team
- Claude can also use your slash commands
- Example: /commit-push-pr for the complete PR workflow

**Examples:**

*commit-push-pr.md slash command*
Example slash command for the complete PR workflow

```markdown
# /commit-push-pr

Commit all staged changes with a descriptive message, push to origin, and create a PR.

## Steps
1. Review staged changes with `git diff --staged`
2. Write a concise, descriptive commit message
3. Commit the changes
4. Push to the current branch
5. Create a PR with a summary of changes
```

*Slash command with inline Bash*
Slash command with pre-computed Bash for quick execution

```markdown
# /status

Show current git status and recent commits.

```bash
git status
git log --oneline -5
```

Summarize the current state of the repository.
```

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

### Include Inline Bash in Slash Commands

Slash commands can include inline Bash to pre-compute info (like git status) for quick execution without extra model calls.

**Key Tips:**
- Use code blocks in markdown to include Bash commands
- Pre-compute commonly needed info (git status, branch info, etc.)
- Reduces model calls and speeds up execution
- Combine multiple info-gathering commands in one block

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

---

## Hooks {#hooks}

*Automating tasks with pre/post tool use hooks*

### Use PostToolUse Hooks for Code Formatting

Set up a PostToolUse hook to automatically format Claude's code after writes/edits. This handles the last 10% of formatting to avoid CI errors.

**Key Tips:**
- Claude generates well-formatted code, hooks handle edge cases
- Use PostToolUse hook triggered on Write|Edit actions
- Run your formatter (prettier, black, etc.) in the hook
- Add || true to prevent hook failures from blocking work
- Catches formatting issues before they fail in CI

**Examples:**

*PostToolUse formatting hook*
Hook configuration to auto-format after file changes

```json
{
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
}
```

*Python formatting hook*
Hook for Python projects using black and isort

```json
{
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
}
```

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

### Use Agent Stop Hooks for Long-Running Tasks

For very long-running tasks, use an agent Stop hook to verify work deterministically when Claude finishes.

**Key Tips:**
- Set up Stop hooks for automated verification
- More deterministic than prompting Claude to self-verify
- Combine with background agents for async verification
- Consider --permission-mode=dontAsk for unattended sessions

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

---

## Permissions {#permissions}

*Managing Claude's access to system commands safely*

### Pre-Allow Safe Bash Commands

Instead of using --dangerously-skip-permissions, use /permissions to pre-allow safe bash commands. Store these in .claude/settings.json and share with the team.

**Key Tips:**
- Don't use --dangerously-skip-permissions in normal workflows
- Use /permissions command to allow specific safe commands
- Store permissions in .claude/settings.json
- Check settings.json into git to share with team
- Only allow commands you know are safe in your environment

**Examples:**

*Example settings.json with permissions*
Pre-allowed commands in settings.json

```json
{
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
}
```

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

### Use Relaxed Permissions in Sandboxed Environments

For long-running tasks in sandboxed/isolated environments, use --permission-mode=dontAsk or --dangerously-skip-permissions to avoid permission prompts.

**Key Tips:**
- Only use relaxed permissions in truly sandboxed environments
- Good for CI/CD pipelines and isolated containers
- Combine with verification hooks for quality assurance
- Never use on your main development machine without sandbox

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

---

## Verification {#verification}

*Giving Claude ways to verify and iterate on its work*

### Give Claude a Way to Verify Its Work (Most Important!)

The most important thing for great results: give Claude a way to verify its work. This feedback loop can 2-3x the quality of the final result.

**Key Tips:**
- This is THE most important tip for using Claude Code
- Verification creates a feedback loop that dramatically improves quality
- Claude will iterate until the code works correctly
- Invest time in making verification rock-solid
- Expect 2-3x quality improvement with good verification

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

### Choose Verification Methods for Your Domain

Verification looks different for each domain. It might be bash commands, test suites, browser testing, or phone simulators. Make it appropriate for your context.

**Key Tips:**
- Simple: Run a bash command to check output
- Unit tests: Run your test suite
- Web apps: Use browser automation or Chrome extension
- Mobile: Use phone simulators
- APIs: Use curl/httpie to test endpoints
- Make verification fast enough to run frequently

**Examples:**

*Verification strategies by domain*
Different verification approaches for different domains

```text
Domain              | Verification Method
--------------------|------------------------------------------
CLI tools           | Run the command, check output
Libraries           | Run unit tests: npm test / pytest
Web frontends       | Browser testing with Chrome extension
APIs                | curl requests, API test suite
Mobile apps         | Phone simulator testing
DevOps/Infra        | terraform plan, dry-run modes
Data pipelines      | Sample data validation
```

*Verification subagent prompt*
Example verification subagent for web apps

```markdown
# verify-app subagent

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
6. Report any issues found
```

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

### Use Browser Testing for Web Applications

For web applications, Claude can use the Chrome extension to open a browser, test the UI, and iterate until the code works and the UX feels good.

**Key Tips:**
- Claude can control browsers via Chrome extension
- Tests actual UI, not just API responses
- Iterates until both code works AND UX feels good
- Catches visual and interaction issues
- Essential for frontend development workflows

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

---

## Subagents {#subagents}

*Using specialized agents for common tasks*

### Create Subagents for Common Workflows

Use subagents to automate common workflows. Examples: code-simplifier to clean up code after Claude finishes, verify-app for end-to-end testing.

**Key Tips:**
- Think of subagents as automating common PR workflows
- code-simplifier: Simplifies/cleans up code after changes
- verify-app: Detailed E2E testing instructions
- Create subagents for any workflow you do on most PRs
- Subagents can be triggered manually or via hooks

**Examples:**

*code-simplifier subagent*
Subagent for post-implementation code cleanup

```markdown
# code-simplifier

Review the code changes and simplify where possible:

1. Remove unnecessary complexity
2. Consolidate duplicate code
3. Improve variable/function names
4. Remove dead code
5. Simplify conditional logic
6. Ensure consistent style

Keep functionality identical - only improve code quality.
```

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

### Use Background Agents for Async Verification

For long-running tasks, prompt Claude to verify work with a background agent when done, or use agent Stop hooks for deterministic verification.

**Key Tips:**
- Background agents verify work asynchronously
- Useful for tasks that take a long time to complete
- Combine with Stop hooks for deterministic triggering
- Consider ralph-wiggum plugin for additional capabilities

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

---

## Philosophy {#philosophy}

*High-level thinking about AI-assisted development*

### There's No One Correct Way to Use Claude Code

Claude Code is intentionally built to be customizable. Each person on the Claude Code team uses it differently. Find what works for you.

**Key Tips:**
- Claude Code works great out of the box
- Customization is optional, not required
- Experiment to find your personal workflow
- What works for others may not work for you
- The tool is designed to be hacked and customized

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

### Vanilla Setup Works Great

Boris Cherny's setup is 'surprisingly vanilla' - he doesn't customize Claude Code much because it works great out of the box. Don't feel pressure to over-customize.

**Key Tips:**
- The creator of Claude Code barely customizes it
- Focus on workflow, not configuration
- Add customizations only when you feel pain points
- Simple is often better than complex

*Source: [Boris Cherny (@bcherny)](https://x.com/bcherny/status/2007179832300581177)*

---

## Quick Reference Summary

### Boris Cherny's Setup at a Glance

| Aspect | Configuration |
|--------|---------------|
| **Terminal Sessions** | 5 parallel sessions, numbered tabs 1-5 |
| **Web Sessions** | 5-10 additional on claude.ai/code |
| **Model** | Opus 4.5 with thinking enabled |
| **Starting Mode** | Plan mode (Shift+Tab twice) |
| **CLAUDE.md** | Team-shared, ~2.5k tokens, checked into git |
| **Permissions** | Pre-allowed via /permissions, stored in settings.json |
| **Formatting** | PostToolUse hook runs formatter |
| **Git Strategy** | Separate checkouts per session (not branches) |

### Productivity Results

- **259 PRs** in 30 days
- **497 commits**
- **40k lines added**, 38k lines removed
- Every line written by Claude Code + Opus 4.5

### Core Philosophy

1. **AI as Capacity** - Treat AI as distributed compute to schedule, not just a tool
2. **Verification is Key** - Always give Claude a way to verify its work
3. **Good Plans Enable One-Shots** - Invest in planning before execution
4. **No One Correct Way** - Customize to your needs, vanilla works great too

---

## Sources

- [Boris Cherny's Twitter Thread](https://x.com/bcherny/status/2007179832300581177)
- [Boris Cherny on Twitter](https://x.com/bcherny)
- [Anthropic Claude Code](https://claude.ai/code)

---

*Generated by Boris Tweet Collector - Collecting wisdom from the creator of Claude Code*
