/**
 * Boris Tweet Collector
 *
 * A tool to collect Boris Cherny's tweets about Claude Code
 * and generate comprehensive best practices documentation.
 *
 * Boris Cherny is the creator of Claude Code at Anthropic.
 * This tool curates his public communications to help developers
 * learn best practices for using Claude Code effectively.
 */

export { TweetCollector, createCollector } from "./collectors/tweet-collector.js";
export { BestPracticesGenerator, createGenerator } from "./generators/best-practices-generator.js";
export { BORIS_TWEETS, BORIS_THREAD } from "./data/boris-tweets.js";
export { BEST_PRACTICES, CATEGORIES_INFO } from "./data/best-practices.js";
export * from "./types/index.js";

import { createCollector } from "./collectors/tweet-collector.js";
import { createGenerator } from "./generators/best-practices-generator.js";

/**
 * Main function to demonstrate the collector and generator
 */
async function main(): Promise<void> {
  console.log("=".repeat(60));
  console.log("Boris Tweet Collector - Claude Code Best Practices");
  console.log("=".repeat(60));
  console.log();

  // Initialize collector
  const collector = createCollector();
  const stats = collector.getStats();

  console.log("Tweet Collection Stats:");
  console.log(`  Total Tweets: ${stats.totalTweets}`);
  console.log(`  Thread Tweets: ${stats.threadTweets}`);
  console.log(`  Topics: ${stats.topics.join(", ")}`);
  console.log();

  // Initialize generator
  const generator = createGenerator();
  const practices = generator.getAllPractices();
  const categories = generator.getCategories();

  console.log("Best Practices Stats:");
  console.log(`  Total Practices: ${practices.length}`);
  console.log(`  Categories: ${categories.join(", ")}`);
  console.log();

  // Show the most important tip
  const verificationPractices = generator.getPracticesByCategory("verification");
  if (verificationPractices.length > 0) {
    console.log("Most Important Tip (from Boris Cherny):");
    console.log(`  "${verificationPractices[0].description}"`);
    console.log();
  }

  console.log("Run 'npm run generate' to create the full best practices document.");
  console.log("Run 'npm run cli -- --help' for all available commands.");
}

// Run main if this is the entry point
main().catch(console.error);
