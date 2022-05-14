import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
const installBody = `
npm install gh-pages --save-dev
`;
const editPKGBody = `
vi package.json
homepage format: https://{username}.github.io/{repo-name}
add "homepage":"https://xqcao.github.io/frontreactwebapp" to package.json
cat package.json
{
"homepage":"https://xqcao.github.io/frontreactwebapp",
  "name": "frontreactwebapp",
  "version": "0.1.0",
  "private": true,
  ...
}
`;
const scriptBody = `
"scripts": {
  +   "predeploy": "npm run build",
  +   "deploy": "gh-pages -d build",
      "start": "react-scripts start",
      "build": "react-scripts build",
      ...
}
`;
const deployBody = `
npm run build
npm run deploy
`;
const viewBody = `
https://{username}.github.io/{repo-name}
open from browser: https://xqcao.github.io/frontreactwebapp
`;
const DeployGitPage = () => {
  return (
    <div>
      <h2>Deploy to Git Pages</h2>
      <p>1. install gh-pages</p>
      <CopyBlock
        text={installBody}
        language="jsx"
        showLineNumbers={false}
        theme={dracula}
        codeBlock
      />
      <hr />
      <p>2. install gh-pages</p>
      <CopyBlock
        text={editPKGBody}
        language="jsx"
        showLineNumbers={false}
        theme={dracula}
        codeBlock
      />
      <hr />
      <p>3. add homepage to package.json</p>
      <CopyBlock
        text={editPKGBody}
        language="jsx"
        showLineNumbers={false}
        theme={dracula}
        codeBlock
      />
      <hr />
      <p>4. add build and deploy to scripts in package.json</p>
      <CopyBlock
        text={scriptBody}
        language="json"
        showLineNumbers={false}
        theme={dracula}
        codeBlock
      />
      <hr />
      <p>5. build and deploy</p>
      <CopyBlock
        text={deployBody}
        language="json"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
      <hr />
      <p>6. view pages</p>
      <CopyBlock
        text={viewBody}
        language="json"
        showLineNumbers={false}
        theme={dracula}
        codeBlock
      />
    </div>
  );
};

export default DeployGitPage;
