#!/usr/bin/env node

/**
 * CLI for Boris Tweet Collector
 *
 * Commands:
 *   collect  - Display collected tweets
 *   generate - Generate best practices documentation
 *   search   - Search tweets and practices
 *   stats    - Show collection statistics
 */

import { Command } from "commander";
import { writeFileSync } from "fs";
import { createCollector } from "./collectors/tweet-collector.js";
import { createGenerator } from "./generators/best-practices-generator.js";

const program = new Command();

program
  .name("boris-collector")
  .description("Collect Boris Cherny's Claude Code tweets and generate best practices")
  .version("1.0.0");

// Collect command
program
  .command("collect")
  .description("Display collected tweets from Boris Cherny")
  .option("-t, --topic <topic>", "Filter by topic")
  .option("-f, --format <format>", "Output format: json, markdown, text", "text")
  .option("-o, --output <file>", "Write output to file")
  .action((options) => {
    const collector = createCollector();

    let tweets = options.topic
      ? collector.getTweetsByTopic(options.topic)
      : collector.getAllTweets();

    let output: string;

    if (options.format === "json") {
      output = JSON.stringify(tweets, null, 2);
    } else if (options.format === "markdown") {
      output = collector.toMarkdown();
    } else {
      output = tweets
        .map((t, i) => {
          return `[${i + 1}] ${t.text}\n    Topics: ${t.topics.join(", ")}\n    Source: ${t.url}\n`;
        })
        .join("\n");
    }

    if (options.output) {
      writeFileSync(options.output, output);
      console.log(`Output written to ${options.output}`);
    } else {
      console.log(output);
    }
  });

// Generate command
program
  .command("generate")
  .description("Generate best practices documentation")
  .option("-f, --format <format>", "Output format: markdown, json", "markdown")
  .option("-o, --output <file>", "Output file path")
  .option("--no-examples", "Exclude code examples")
  .action((options) => {
    const generator = createGenerator({
      format: options.format,
      includeExamples: options.examples !== false,
    });

    const output = generator.generate();
    const defaultFile =
      options.format === "json"
        ? "./CLAUDE_CODE_BEST_PRACTICES.json"
        : "./CLAUDE_CODE_BEST_PRACTICES.md";

    const outputFile = options.output ?? defaultFile;

    writeFileSync(outputFile, output);
    console.log(`Best practices documentation generated: ${outputFile}`);
    console.log(`Total practices: ${generator.getAllPractices().length}`);
    console.log(`Categories: ${generator.getCategories().join(", ")}`);
  });

// Search command
program
  .command("search <keyword>")
  .description("Search tweets and best practices")
  .option("--tweets-only", "Search only tweets")
  .option("--practices-only", "Search only best practices")
  .action((keyword, options) => {
    const collector = createCollector();
    const generator = createGenerator();

    if (!options.practicesOnly) {
      const tweets = collector.searchTweets(keyword);
      if (tweets.length > 0) {
        console.log(`\nTweets matching "${keyword}" (${tweets.length} results):\n`);
        tweets.forEach((t, i) => {
          console.log(`[${i + 1}] ${t.text.substring(0, 100)}...`);
          console.log(`    Topics: ${t.topics.join(", ")}\n`);
        });
      } else {
        console.log(`\nNo tweets found matching "${keyword}"`);
      }
    }

    if (!options.tweetsOnly) {
      const practices = generator.searchPractices(keyword);
      if (practices.length > 0) {
        console.log(`\nBest Practices matching "${keyword}" (${practices.length} results):\n`);
        practices.forEach((p, i) => {
          console.log(`[${i + 1}] ${p.title}`);
          console.log(`    Category: ${p.category}`);
          console.log(`    ${p.description.substring(0, 100)}...\n`);
        });
      } else {
        console.log(`\nNo best practices found matching "${keyword}"`);
      }
    }
  });

// Stats command
program
  .command("stats")
  .description("Show collection statistics")
  .action(() => {
    const collector = createCollector();
    const generator = createGenerator();

    const tweetStats = collector.getStats();
    const practices = generator.getAllPractices();
    const categories = generator.getCategories();

    console.log("\n" + "=".repeat(50));
    console.log("Boris Tweet Collector - Statistics");
    console.log("=".repeat(50));

    console.log("\nTweet Collection:");
    console.log(`  Total Tweets: ${tweetStats.totalTweets}`);
    console.log(`  Thread Tweets: ${tweetStats.threadTweets}`);
    console.log(`  Standalone Tweets: ${tweetStats.standaloneTweets}`);
    console.log(`  Topics: ${tweetStats.topics.length}`);

    console.log("\nBest Practices:");
    console.log(`  Total Practices: ${practices.length}`);
    console.log(`  Categories: ${categories.length}`);

    console.log("\nPractices by Category:");
    categories.forEach((cat) => {
      const count = generator.getPracticesByCategory(cat).length;
      console.log(`  ${cat}: ${count}`);
    });

    console.log("\nTop Topics from Tweets:");
    tweetStats.topics.slice(0, 10).forEach((topic) => {
      const count = collector.getTweetsByTopic(topic).length;
      console.log(`  ${topic}: ${count} tweets`);
    });

    console.log("\n" + "=".repeat(50));
  });

// Topics command
program
  .command("topics")
  .description("List all topics")
  .action(() => {
    const collector = createCollector();
    const topics = collector.getAllTopics();

    console.log("\nAvailable Topics:\n");
    topics.forEach((topic) => {
      const count = collector.getTweetsByTopic(topic).length;
      console.log(`  ${topic} (${count} tweets)`);
    });
  });

// Categories command
program
  .command("categories")
  .description("List all best practice categories")
  .action(() => {
    const generator = createGenerator();
    const categories = generator.getCategories();

    console.log("\nBest Practice Categories:\n");
    categories.forEach((cat) => {
      const practices = generator.getPracticesByCategory(cat);
      console.log(`  ${cat}:`);
      practices.forEach((p) => {
        console.log(`    - ${p.title}`);
      });
      console.log();
    });
  });

// Quick reference command
program
  .command("quick-ref")
  .description("Show quick reference of Boris Cherny's setup")
  .action(() => {
    console.log(`
╔══════════════════════════════════════════════════════════════╗
║          BORIS CHERNY'S CLAUDE CODE SETUP                    ║
║              (Creator of Claude Code)                        ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  SESSIONS                                                    ║
║  ├─ 5 terminal sessions (tabs numbered 1-5)                  ║
║  ├─ 5-10 web sessions on claude.ai/code                      ║
║  ├─ Mobile sessions started in the morning                   ║
║  └─ Each uses separate git checkout (not branches)           ║
║                                                              ║
║  MODEL                                                       ║
║  └─ Opus 4.5 with thinking enabled (always)                  ║
║                                                              ║
║  WORKFLOW                                                    ║
║  ├─ Start in Plan mode (Shift+Tab twice)                     ║
║  ├─ Iterate on plan until satisfied                          ║
║  ├─ Switch to auto-accept mode for execution                 ║
║  └─ Claude often one-shots after good planning               ║
║                                                              ║
║  CLAUDE.md                                                   ║
║  ├─ Single file shared by whole team                         ║
║  ├─ Checked into git                                         ║
║  ├─ ~2.5k tokens                                             ║
║  └─ Updated when Claude makes mistakes                       ║
║                                                              ║
║  SLASH COMMANDS                                              ║
║  ├─ Stored in .claude/commands/                              ║
║  ├─ /commit-push-pr used dozens of times daily               ║
║  └─ Can include inline Bash for pre-computation              ║
║                                                              ║
║  HOOKS                                                       ║
║  └─ PostToolUse hook runs formatter on Write|Edit            ║
║                                                              ║
║  PERMISSIONS                                                 ║
║  ├─ Pre-allowed via /permissions command                     ║
║  └─ Stored in .claude/settings.json                          ║
║                                                              ║
║  MOST IMPORTANT TIP                                          ║
║  └─ Give Claude a way to VERIFY its work!                    ║
║     This 2-3x the quality of results.                        ║
║                                                              ║
║  RESULTS (30 days)                                           ║
║  ├─ 259 PRs                                                  ║
║  ├─ 497 commits                                              ║
║  ├─ 40k lines added                                          ║
║  └─ 38k lines removed                                        ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

Source: https://x.com/bcherny/status/2007179832300581177
`);
  });

program.parse();
