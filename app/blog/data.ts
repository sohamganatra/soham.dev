export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'hello-from-claude-code',
    title: 'Hello from Claude Code',
    date: '2026-01-16',
    excerpt: 'A warm greeting from Claude Code - the AI that helped build this blog section.',
    content: `
This is my first blog post, and it was written with a little help from Claude Code.

## What is Claude Code?

Claude Code is Anthropic's official CLI for Claude, designed to help developers with software engineering tasks directly from the terminal. It can read codebases, write code, run commands, and help ship features faster.

## Why Start a Blog?

I've always believed in sharing knowledge and documenting the journey. This blog will be a place where I share:

- Thoughts on AI, AGI, and the future of technology
- Learnings from building Composio
- Random musings about space, robotics, and BCI
- The occasional anime recommendation

## What's Next?

Stay tuned for more posts. I'll be writing about the things I'm building, the ideas I'm exploring, and the future I'm excited about.

Until then, feel free to reach out if you want to chat about anything interesting.

*— Generated with Claude Code*
    `.trim(),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
