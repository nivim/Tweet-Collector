import type { Tweet, TweetThread, CollectorConfig } from "../types/index.js";
import { BORIS_TWEETS, BORIS_THREAD } from "../data/boris-tweets.js";

/**
 * Tweet Collector for Boris Cherny's Claude Code posts
 *
 * Note: Direct Twitter/X API access requires authentication and API keys.
 * This collector uses curated data from Boris Cherny's public posts.
 * For real-time collection, you would need to:
 * 1. Apply for Twitter API access
 * 2. Set up OAuth authentication
 * 3. Use the Twitter API v2 endpoints
 */

export class TweetCollector {
  private config: CollectorConfig;

  constructor(config: Partial<CollectorConfig> = {}) {
    this.config = {
      authorHandle: config.authorHandle ?? "bcherny",
      outputDir: config.outputDir ?? "./output",
      format: config.format ?? "both",
    };
  }

  /**
   * Get all collected tweets
   */
  getAllTweets(): Tweet[] {
    return BORIS_TWEETS;
  }

  /**
   * Get tweets by topic
   */
  getTweetsByTopic(topic: string): Tweet[] {
    return BORIS_TWEETS.filter((tweet) =>
      tweet.topics.some((t) => t.toLowerCase().includes(topic.toLowerCase()))
    );
  }

  /**
   * Get the main thread
   */
  getMainThread(): TweetThread {
    return BORIS_THREAD;
  }

  /**
   * Get all unique topics
   */
  getAllTopics(): string[] {
    const topics = new Set<string>();
    BORIS_TWEETS.forEach((tweet) => {
      tweet.topics.forEach((topic) => topics.add(topic));
    });
    return Array.from(topics).sort();
  }

  /**
   * Search tweets by keyword
   */
  searchTweets(keyword: string): Tweet[] {
    const lowerKeyword = keyword.toLowerCase();
    return BORIS_TWEETS.filter(
      (tweet) =>
        tweet.text.toLowerCase().includes(lowerKeyword) ||
        tweet.topics.some((t) => t.toLowerCase().includes(lowerKeyword))
    );
  }

  /**
   * Get statistics about the collected tweets
   */
  getStats(): {
    totalTweets: number;
    threadTweets: number;
    standaloneTweets: number;
    topics: string[];
    dateRange: { earliest: Date; latest: Date };
  } {
    const tweets = this.getAllTweets();
    const dates = tweets.map((t) => t.createdAt);

    return {
      totalTweets: tweets.length,
      threadTweets: tweets.filter((t) => t.isThread).length,
      standaloneTweets: tweets.filter((t) => !t.isThread).length,
      topics: this.getAllTopics(),
      dateRange: {
        earliest: new Date(Math.min(...dates.map((d) => d.getTime()))),
        latest: new Date(Math.max(...dates.map((d) => d.getTime()))),
      },
    };
  }

  /**
   * Export tweets to JSON format
   */
  toJSON(): string {
    return JSON.stringify(
      {
        author: {
          name: "Boris Cherny",
          handle: this.config.authorHandle,
          profile: `https://x.com/${this.config.authorHandle}`,
        },
        collectedAt: new Date().toISOString(),
        stats: this.getStats(),
        thread: this.getMainThread(),
        tweets: this.getAllTweets(),
      },
      null,
      2
    );
  }

  /**
   * Export tweets to Markdown format
   */
  toMarkdown(): string {
    const thread = this.getMainThread();
    const stats = this.getStats();

    let md = `# Boris Cherny's Claude Code Tweets\n\n`;
    md += `> Collected from [@${this.config.authorHandle}](https://x.com/${this.config.authorHandle})\n\n`;
    md += `## Statistics\n\n`;
    md += `- **Total Tweets:** ${stats.totalTweets}\n`;
    md += `- **Thread Tweets:** ${stats.threadTweets}\n`;
    md += `- **Topics:** ${stats.topics.join(", ")}\n\n`;

    md += `## Main Thread: ${thread.title}\n\n`;
    md += `${thread.summary}\n\n`;

    thread.tweets.forEach((tweet, index) => {
      md += `### ${index + 1}. ${tweet.topics.join(", ")}\n\n`;
      md += `${tweet.text}\n\n`;
      md += `*Topics: ${tweet.topics.join(", ")}*\n\n`;
      md += `---\n\n`;
    });

    return md;
  }
}

export function createCollector(config?: Partial<CollectorConfig>): TweetCollector {
  return new TweetCollector(config);
}
