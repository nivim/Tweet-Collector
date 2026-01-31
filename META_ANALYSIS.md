# Claude Code Best Practices: Meta-Analysis

> Synthesized from 5 expert contributors with 105 total tips and insights.

Generated: 2026-01-31

---

## Contributors

| Name | Handle | Role | Expertise |
|------|--------|------|-----------|
| **Boris Cherny** | [@bcherny](https://x.com/bcherny) | Creator of Claude Code at Anthropic | Claude Code Architecture, Parallel Workflows, Verification |
| **YK Sugi** | [@ykdojo](https://github.com/ykdojo) | CS Dojo Creator, Developer Educator | Developer Education, Workflow Optimization, Scripting |
| **McKay Wrigley** | [@mckaywrigley](https://x.com/mckaywrigley) | TakeoffAI Founder, AI Workflow Expert | Agentic Workflows, Notes & Research, Obsidian Integration |
| **Shrivu Shankar** | [@ShrivuShankar](https://blog.sshh.io) | AI Infrastructure Engineer, Enterprise AI Tooling | Enterprise AI, Context Management, Multi-Agent Systems |
| **Ado** | [@adocomplete](https://x.com/adocomplete) | Developer Relations at Anthropic | Claude Code Features, DevRel, Best Practices |

---

## Executive Summary: Top 10 Recommendations

These practices have the strongest consensus across all contributors:

1. **Give Claude a way to verify its work - this 2-3x quality**
2. **Start in Plan mode (Shift+Tab twice) for 90% of tasks**
3. **Maintain a team CLAUDE.md checked into git**
4. **Run 5+ parallel sessions for maximum productivity**
5. **Create slash commands for daily repeated workflows**
6. **Use PostToolUse hooks for automatic formatting**
7. **Use Opus 4.5 with thinking for complex coding tasks**
8. **Monitor context with /context, prefer /clear + /catchup over /compact**
9. **Use containers/VMs for risky or experimental work**
10. **Ask Claude about Claude Code - it has a self-help subagent**

---

## Consensus Analysis

### Unanimous Consensus (All Contributors Agree)

#### Verification is the Most Important Practice

Every contributor emphasizes giving Claude a way to verify its work. This creates a feedback loop that dramatically improves output quality.

**Contributors:** Boris Cherny, YK Sugi, McKay Wrigley, Shrivu Shankar, Ado

**Key Points:**
- Boris: 'Give Claude a way to verify its work - it will 2-3x the quality'
- YK: 'Master different output verification methods'
- Run tests, use linting, browser testing for UI
- The feedback loop is more important than the initial output
- Invest time in making verification rock-solid

#### Plan Mode Before Execution

All contributors recommend using Plan mode (Shift+Tab twice) before diving into code. A good plan enables one-shot execution.

**Contributors:** Boris Cherny, YK Sugi, Shrivu Shankar, Ado

**Key Points:**
- Boris: 'A good plan is really important!'
- Ado: 'I default to plan mode 90% of the time'
- YK: 'Balance planning with quick prototyping'
- Iterate on the plan until satisfied, then auto-accept
- Good plans enable Claude to one-shot implementation

#### CLAUDE.md is Essential for Team Success

Maintaining a well-curated CLAUDE.md file checked into git is universally recommended. It's the agent's 'constitution'.

**Contributors:** Boris Cherny, YK Sugi, Shrivu Shankar, Ado

**Key Points:**
- Boris: 'Team shares single CLAUDE.md, contributes multiple times/week'
- Shrivu: 'The agent's constitution - primary source of truth'
- YK: 'Keep CLAUDE.md simple and review periodically'
- Document mistakes so Claude learns not to repeat them
- Check into git and share with team

### Strong Consensus (Most Contributors Agree)

#### Run Multiple Parallel Sessions

Most contributors run 5-15 Claude Code sessions simultaneously across terminal and web to maximize productivity.

**Contributors:** Boris Cherny, YK Sugi, McKay Wrigley

**Key Points:**
- Boris: 5 terminal + 5-10 web sessions
- YK: Cascade multitasking with tabs
- McKay: Continuous 24/7 Claude (Claudeputer)
- Use separate git checkouts to avoid conflicts
- System notifications alert when session needs input

#### Automate Repeated Workflows with Slash Commands

Create slash commands in .claude/commands/ for workflows you do multiple times a day. Share via git.

**Contributors:** Boris Cherny, YK Sugi, McKay Wrigley, Ado

**Key Points:**
- Boris: '/commit-push-pr used dozens of times daily'
- Store in .claude/commands/ directory
- Check into git to share with team
- Claude can use your slash commands too
- Include inline Bash for pre-computation

#### Use Hooks for Automatic Formatting

Set up PostToolUse hooks to automatically format code after Claude writes/edits. Catches the last 10% of formatting issues.

**Contributors:** Boris Cherny, Ado

**Key Points:**
- Boris: 'Hook handles last 10% to avoid CI formatting errors'
- Ado: 'Deterministic control over probabilistic AI'
- Trigger on Write|Edit actions
- Add || true to prevent failures from blocking
- Also use for linting, testing, etc.

#### Use Opus 4.5 with Thinking for Coding

For coding tasks, Opus 4.5 with thinking is recommended despite being slower. Better tool use and less steering needed.

**Contributors:** Boris Cherny

**Key Points:**
- Opus 4.5 with thinking = best coding model
- Slower per-response but faster task completion
- Less steering required
- Better at tool use
- Worth the extra cost for complex work

#### Actively Manage Context Window

Monitor and manage your 200k token context window. Use /context to check usage, prefer /clear + /catchup over /compact.

**Contributors:** YK Sugi, Shrivu Shankar, Ado

**Key Points:**
- Shrivu: 'Run /context mid-session to understand usage'
- Fresh monorepo session costs ~20k baseline tokens
- Shrivu: 'Avoid /compact - use /clear + /catchup instead'
- YK: 'Keep context fresh by starting new conversations'
- MCP tools consume context just by being available

### Moderate Consensus (Some Debate)

#### Use Containers for Risky/Long-Running Tasks

Run Claude in containers or VMs with --dangerously-skip-permissions for experimentation and long-running tasks.

**Contributors:** YK Sugi, Shrivu Shankar

**Key Points:**
- Isolate risky operations in containers
- Safe to skip permissions in sandbox
- Great for vibe coding and experimentation
- Prevents damage to main system
- VMs work too - separate from production

#### Git Worktrees vs Separate Checkouts

For parallel sessions, use either git worktrees or separate clones. Boris prefers full checkouts, YK prefers worktrees.

**Contributors:** Boris Cherny, YK Sugi

**Key Points:**
- Boris: Separate full git checkouts
- YK: Git worktrees more efficient
- Both achieve session isolation
- Worktrees share git history
- Checkouts are fully independent

**Different Perspectives:**
- Boris uses full checkouts for complete isolation
- YK prefers worktrees for efficiency

#### Subagent Usage Philosophy

Views differ on custom subagents. Boris uses them regularly, while Shrivu finds them 'brittle' and prefers Master-Clone architecture.

**Contributors:** Boris Cherny, Shrivu Shankar, Ado

**Key Points:**
- Boris: Uses code-simplifier, verify-app subagents
- Shrivu: Custom subagents are brittle, gatekeep context
- Shrivu: Prefer Master-Clone over Lead-Specialist
- Ado: Subagents can run in background with MCP access
- Let Claude's built-in Task tool handle delegation

**Different Perspectives:**
- Boris: Custom subagents for common workflows
- Shrivu: Give main agent context, let it decide delegation

### Emerging Practices (Unique Insights)

#### Ultrathink for Complex Reasoning

The 'ultrathink' keyword allocates up to 32k tokens for internal reasoning. Only works when MAX_THINKING_TOKENS is not set.

**Contributor:** Ado

**Key Points:**
- Include 'ultrathink' in prompt for deep reasoning
- Allocates up to 32k thinking tokens
- Critical for complex architectural decisions
- Only 'ultrathink' works - others disabled in v2.0.0
- Only works when MAX_THINKING_TOKENS not configured

#### Claude Code for Notes and Research

Use Claude Code with Obsidian vaults for AI-powered note-taking, automated tagging, and knowledge graph building.

**Contributor:** McKay Wrigley

**Key Points:**
- Obsidian vaults are just markdown folders
- Claude can manage notes like code
- Automated tags and wiki-style linking
- Builds knowledge graph over time
- Better than manual note organization

#### Think of AI as Schedulable Capacity

View AI not as a tool but as compute capacity to schedule. Allocate, queue, and manage sessions like distributed systems.

**Contributor:** Boris Cherny

**Key Points:**
- Each session is a separate worker
- Allocate tasks to sessions by context needs
- Queue work and check back when value is ready
- Bottleneck is attention allocation, not generation
- Distribute cognition like distributed compute

---

## Category Breakdown

| Category | Number of Tips |
|----------|----------------|
| subagents | 7 |
| automation | 5 |
| claude-md | 5 |
| workflow | 4 |
| context | 4 |
| verification | 4 |
| philosophy | 4 |
| hooks | 4 |
| shortcuts | 4 |
| customization | 3 |
| input | 3 |
| architecture | 3 |
| mcp | 3 |
| parallel-sessions | 3 |
| commands | 2 |
| git | 2 |
| tools | 2 |
| parallel | 2 |
| plan-mode | 2 |
| help | 2 |
| slash-commands | 2 |
| permissions | 2 |
| output | 1 |
| history | 1 |
| optimization | 1 |
| safety | 1 |
| testing | 1 |
| code-quality | 1 |
| integration | 1 |
| advanced | 1 |
| enterprise | 1 |
| thinking | 1 |
| skills | 1 |
| sessions | 1 |
| monitoring | 1 |
| model-selection | 1 |

---

## The Most Important Insight

> **"Give Claude a way to verify its work. If Claude has that feedback loop, it will 2-3x the quality of the final result."**
>
> — Boris Cherny, Creator of Claude Code

This is the single most emphasized point across all contributors. Verification transforms Claude from a code generator into a reliable development partner.

---

## Sources

- [Boris Cherny (@bcherny)](https://x.com/bcherny) - Creator of Claude Code at Anthropic
- [YK Sugi (@ykdojo)](https://github.com/ykdojo) - CS Dojo Creator, Developer Educator
- [McKay Wrigley (@mckaywrigley)](https://x.com/mckaywrigley) - TakeoffAI Founder, AI Workflow Expert
- [Shrivu Shankar (@ShrivuShankar)](https://blog.sshh.io) - AI Infrastructure Engineer, Enterprise AI Tooling
- [Ado (@adocomplete)](https://x.com/adocomplete) - Developer Relations at Anthropic

---

*Generated by Boris Tweet Collector - Meta-Analysis Engine*
