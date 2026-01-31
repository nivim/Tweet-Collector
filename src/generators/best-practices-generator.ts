import type { BestPractice, GeneratorConfig, BestPracticeCategory } from "../types/index.js";
import { BEST_PRACTICES, CATEGORIES_INFO } from "../data/best-practices.js";

/**
 * Generator for Claude Code Best Practices documentation
 * Based on Boris Cherny's tweets and public communications
 */

export class BestPracticesGenerator {
  private config: GeneratorConfig;
  private practices: BestPractice[];

  constructor(config: Partial<GeneratorConfig> = {}) {
    this.config = {
      outputFile: config.outputFile ?? "./CLAUDE_CODE_BEST_PRACTICES.md",
      format: config.format ?? "markdown",
      includeExamples: config.includeExamples ?? true,
    };
    this.practices = BEST_PRACTICES;
  }

  /**
   * Get all best practices
   */
  getAllPractices(): BestPractice[] {
    return this.practices;
  }

  /**
   * Get practices by category
   */
  getPracticesByCategory(category: BestPracticeCategory): BestPractice[] {
    return this.practices.filter((p) => p.category === category);
  }

  /**
   * Get all categories
   */
  getCategories(): BestPracticeCategory[] {
    return [...new Set(this.practices.map((p) => p.category))];
  }

  /**
   * Search practices by keyword
   */
  searchPractices(keyword: string): BestPractice[] {
    const lowerKeyword = keyword.toLowerCase();
    return this.practices.filter(
      (p) =>
        p.title.toLowerCase().includes(lowerKeyword) ||
        p.description.toLowerCase().includes(lowerKeyword) ||
        p.tips.some((t) => t.toLowerCase().includes(lowerKeyword))
    );
  }

  /**
   * Generate comprehensive Markdown documentation
   */
  generateMarkdown(): string {
    const categories = this.getCategories();

    let md = `# Claude Code Best Practices
## Based on Boris Cherny's Workflow (Creator of Claude Code)

> This guide compiles best practices from Boris Cherny ([@bcherny](https://x.com/bcherny)),
> the creator of Claude Code at Anthropic. These practices are derived from his public
> tweets and communications about how he uses Claude Code to achieve remarkable productivity
> (259 PRs in 30 days!).

---

## Table of Contents

`;

    // Generate TOC
    categories.forEach((category) => {
      const info = CATEGORIES_INFO[category];
      md += `- [${info?.name ?? category}](#${category})\n`;
    });

    md += `\n---\n\n`;

    // Most Important First
    md += `## The Most Important Tip

> **"Probably the most important thing to get great results out of Claude Code: give Claude a way to verify its work. If Claude has that feedback loop, it will 2-3x the quality of the final result."**
>
> — Boris Cherny

`;

    // Generate content for each category
    categories.forEach((category) => {
      const info = CATEGORIES_INFO[category];
      const practices = this.getPracticesByCategory(category);

      md += `---\n\n`;
      md += `## ${info?.name ?? category} {#${category}}\n\n`;
      if (info?.description) {
        md += `*${info.description}*\n\n`;
      }

      practices.forEach((practice) => {
        md += `### ${practice.title}\n\n`;
        md += `${practice.description}\n\n`;

        md += `**Key Tips:**\n`;
        practice.tips.forEach((tip) => {
          md += `- ${tip}\n`;
        });
        md += `\n`;

        if (this.config.includeExamples && practice.examples && practice.examples.length > 0) {
          md += `**Examples:**\n\n`;
          practice.examples.forEach((example) => {
            md += `*${example.title}*\n`;
            if (example.description) {
              md += `${example.description}\n`;
            }
            md += `\n\`\`\`${example.language}\n${example.code}\n\`\`\`\n\n`;
          });
        }

        md += `*Source: [${practice.source}](${practice.sourceUrl})*\n\n`;
      });
    });

    // Summary section
    md += `---\n\n`;
    md += `## Quick Reference Summary

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
`;

    return md;
  }

  /**
   * Generate JSON documentation
   */
  generateJSON(): string {
    return JSON.stringify(
      {
        title: "Claude Code Best Practices",
        subtitle: "Based on Boris Cherny's Workflow",
        author: {
          name: "Boris Cherny",
          handle: "bcherny",
          role: "Creator of Claude Code at Anthropic",
        },
        generatedAt: new Date().toISOString(),
        categories: CATEGORIES_INFO,
        practices: this.practices,
        summary: {
          totalPractices: this.practices.length,
          categories: this.getCategories(),
          mostImportant: "verification",
          productivityStats: {
            prsIn30Days: 259,
            commits: 497,
            linesAdded: 40000,
            linesRemoved: 38000,
          },
        },
      },
      null,
      2
    );
  }

  /**
   * Generate documentation in configured format
   */
  generate(): string {
    if (this.config.format === "json") {
      return this.generateJSON();
    }
    return this.generateMarkdown();
  }
}

export function createGenerator(config?: Partial<GeneratorConfig>): BestPracticesGenerator {
  return new BestPracticesGenerator(config);
}
