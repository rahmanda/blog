import { visit } from "unist-util-visit";

const defaultReplacer = async (url: string) => url;
const nodeTypes = ["link", "image"];

export function RemarkLinkRewrite(options = { replacer: defaultReplacer }) {
  const { replacer } = options;
  return async (tree: any) => {
    const nodes: any = [];

    visit(tree, (node) => {
      if (nodeTypes.includes(node.type)) {
        nodes.push(node);
      }
    });

    await Promise.all(
      nodes.map(async (node: any) => {
        node.url = await replacer(node.url);
      }),
    );
    return tree;
  };
}
