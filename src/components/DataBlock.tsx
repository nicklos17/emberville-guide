import type { ReactNode } from "react";

type Props = {
  source: string;
  url?: string;
  verified: string;
  children: ReactNode;
};

// 数据块 + 来源 + 核验日（CONTENT.md 强制；AGENT.md §1.3 数据必须带出处）
export function DataBlock({ source, url, verified, children }: Props) {
  return (
    <figure className="my-4">
      {children}
      <figcaption className="mt-2 text-xs text-ink-muted">
        Source: {url ? <a href={url} rel="noopener noreferrer">{source}</a> : source} · Verified: {verified}
      </figcaption>
    </figure>
  );
}
