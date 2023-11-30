type TreeNode = { [key: string]: TreeNode | string };

export function buildTree(
  paths: string[],
  node: TreeNode = {},
  pathIndex: number = 0
): TreeNode {
  if (pathIndex >= paths.length) {
    return node;
  }

  const path = paths[pathIndex];
  const parts = path.split('/');
  let currentNode = node;

  parts.reduce((node, part, i) => {
    if (typeof node[part] === 'string') {
      const temp = node[part];
      node[part] = { [temp]: {} };
    }
    if (!node[part]) {
      node[part] = i === parts.length - 1 ? path : {};
    }
    return node[part] as TreeNode;
  }, currentNode);

  return buildTree(paths, node, pathIndex + 1);
}