type TreeNode = { [key: string]: TreeNode | string };

export function buildTree(paths: string[]): TreeNode {
  const tree: TreeNode = {};
  paths.forEach((path) => {
    const parts = path.split('/');
    let node = tree;
    parts.forEach((part, i) => {
      if (!node[part]) {
        node[part] = i === parts.length - 1 ? path : {};
      }
      node = node[part] as TreeNode;
    });
  });
  return tree;
}