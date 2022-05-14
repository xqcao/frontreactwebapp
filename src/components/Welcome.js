import React from "react";
import { CopyBlock, dracula, tomorrowNightEighties } from "react-code-blocks";

const textBody = `npm install --save react-code-blocks
import { v4 as uuid } from "uuid";
const unique_id = uuid();
const small_id = unique_id.slice(0, 8);
`;

const routerBody = `npm install --save react-router-dom
import {BrowserRouter, Link, Routes, Route } from "react-router-dom";
<BrowserRouter>
  <App/>
</BrowserRouter>
#variable
const toutes=[ { name: "Welcome", url: "/", component: Welcome },...]
#list:
<ol>
{toutes.map((it,idx)=><li><Link to={el.url} >{el.name}</Link></li>)}
</ol>
#view:
<Routes>
{toutes.map((it,idx)=><Route path={it.url} element={<it.component />}/></Route>)}
</Routes>

`;
const Welcome = () => {
  return (
    <div>
      <h2>Welcome Page</h2>
      <p>React Generate unique_id</p>
      <CopyBlock
        text={textBody}
        language="jsx"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
      <hr />
      <div>
        <p>React router</p>
        <CopyBlock
          text={routerBody}
          language="jsx"
          showLineNumbers={true}
          theme={tomorrowNightEighties}
          codeBlock
        />
      </div>
    </div>
  );
};

export default Welcome;
