import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function RemarkReadingTime() {
  return (tree: any, { data }: any) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.readingTime = readingTime;
  };
}
