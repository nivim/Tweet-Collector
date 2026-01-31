# Boris Tweet Collector

A tool to collect Boris Cherny's tweets about Claude Code and generate comprehensive best practices documentation.

**Boris Cherny** ([@bcherny](https://x.com/bcherny)) is the creator of Claude Code at Anthropic. This tool curates his public communications to help developers learn best practices for using Claude Code effectively.

## Features

- Curated collection of Boris Cherny's tweets about Claude Code
- Comprehensive best practices extracted from his workflow
- CLI interface for searching, filtering, and generating documentation
- Multiple output formats (Markdown, JSON, Text)
- Quick reference for Boris's setup

## Installation

```bash
npm install
```

## Usage

### Generate Best Practices Documentation

```bash
# Generate Markdown documentation
npm run generate

# Or use the CLI directly
npx tsx src/cli.ts generate

# Generate JSON format
npx tsx src/cli.ts generate --format json
```

### View Collected Tweets

```bash
# Show all tweets
npx tsx src/cli.ts collect

# Filter by topic
npx tsx src/cli.ts collect --topic verification

# Export as Markdown
npx tsx src/cli.ts collect --format markdown --output tweets.md
```

### Search Tweets and Practices

```bash
# Search for a keyword
npx tsx src/cli.ts search "plan mode"

# Search only tweets
npx tsx src/cli.ts search "parallel" --tweets-only

# Search only best practices
npx tsx src/cli.ts search "hooks" --practices-only
```

### View Statistics

```bash
npx tsx src/cli.ts stats
```

### Quick Reference

```bash
npx tsx src/cli.ts quick-ref
```

### List Topics and Categories

```bash
# List all tweet topics
npx tsx src/cli.ts topics

# List best practice categories
npx tsx src/cli.ts categories
```

## Key Insights from Boris Cherny

### The Most Important Tip

> **"Probably the most important thing to get great results out of Claude Code: give Claude a way to verify its work. If Claude has that feedback loop, it will 2-3x the quality of the final result."**

### Boris's Setup at a Glance

| Aspect | Configuration |
|--------|---------------|
| Terminal Sessions | 5 parallel sessions, numbered tabs 1-5 |
| Web Sessions | 5-10 additional on claude.ai/code |
| Model | Opus 4.5 with thinking enabled |
| Starting Mode | Plan mode (Shift+Tab twice) |
| CLAUDE.md | Team-shared, ~2.5k tokens, checked into git |
| Permissions | Pre-allowed via /permissions, stored in settings.json |
| Formatting | PostToolUse hook runs formatter |
| Git Strategy | Separate checkouts per session (not branches) |

### Productivity Results (30 days)

- **259 PRs** landed
- **497 commits**
- **40k lines added**, 38k lines removed
- Every line written by Claude Code + Opus 4.5

## Best Practice Categories

1. **Parallel Sessions** - Running multiple Claude Code sessions simultaneously
2. **Plan Mode** - Using Plan mode to iterate on approach before execution
3. **CLAUDE.md** - Maintaining shared knowledge files for team-wide improvement
4. **Slash Commands** - Creating reusable commands for common workflows
5. **Hooks** - Automating tasks with pre/post tool use hooks
6. **Permissions** - Managing Claude's access to system commands safely
7. **Verification** - Giving Claude ways to verify and iterate on its work
8. **Subagents** - Using specialized agents for common tasks
9. **Model Selection** - Choosing the right model for your tasks
10. **Philosophy** - High-level thinking about AI-assisted development

## Sources

- [Boris Cherny's Twitter Thread](https://x.com/bcherny/status/2007179832300581177)
- [Boris Cherny on Twitter](https://x.com/bcherny)
- [How Boris Cherny Uses Claude Code](https://karozieminski.substack.com/p/boris-cherny-claude-code-workflow)
- [VentureBeat Article](https://venturebeat.com/technology/the-creator-of-claude-code-just-revealed-his-workflow-and-developers-are)
- [InfoQ Article](https://www.infoq.com/news/2026/01/claude-code-creator-workflow/)

## License

MIT
