export default function({ types: t }) {
  return {
    visitor : {
      ClassDeclaration(path) {
        path.traverse({
          Identifier(path) {
            if(path.node.name == "propTypes")
            {
              path.parentPath.remove();
            }
          }
        })
      },
      AssignmentExpression(path) {
        const assignmenPath = path;
        path.traverse({
          Identifier(path) {
            if(path.node.name == "propTypes")
            {
              assignmenPath.remove();
            }
          }
        })
      }
    }
  };
}
