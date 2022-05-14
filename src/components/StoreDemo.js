import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const codeBody = `

`;
const StoreDemo = () => {
  return (
    <div>
      <h2>Store, redux Demo</h2>
      <CopyBlock
        text={codeBody}
        language="jsx"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
    </div>
  );
};

export default StoreDemo;
