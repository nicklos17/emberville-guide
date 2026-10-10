import { Children, isValidElement, type ReactNode } from "react";
import { AdSlot } from "@/components/ads/AdSlot";

type AdArticleProps = {
  children: ReactNode;
  className?: string;
};

/** 内容页文章包装器：在第一段后、第一个 H2 前插入固定比例横幅。 */
export function AdArticle({ children, className }: AdArticleProps) {
  const content = Children.toArray(children);
  const firstParagraphIndex = content.findIndex(
    (child) => isValidElement(child) && child.type === "p",
  );

  if (firstParagraphIndex >= 0) {
    content.splice(
      firstParagraphIndex + 1,
      0,
      <AdSlot key="in-article-ad" position="in-article" className="my-6" />,
    );
  }

  return <article className={className}>{content}</article>;
}
