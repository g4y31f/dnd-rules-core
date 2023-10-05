interface TreeNode {
  [key: string]: TreeNode | string;
}

interface TreeProps {
  tree: TreeNode;
}

export const Tree = ({ tree }: TreeProps) => {
  const renderNode = (node: TreeNode | string, key: string) => {
    if (typeof node === 'string') {
      // If the node is a string, render it as a link
      return (
        <span className="internal-link-container" key={key}>
          <a href={node} className="internal-link">
            {key}
          </a>
        </span>
      );
    } else {
      // If the node is an object, render it as a nested tree
      return (
        <div key={key}>
          <h3>{key}</h3>
          <Tree tree={node} />
        </div>
      );
    }
  };

  return (
    <div>
      {Object.entries(tree).map(([key, node]) => renderNode(node, key))}
    </div>
  );
};
