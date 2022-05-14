import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const codeBody = `npm install --save axios
import axios from "axios";
// variable
const [todoList, setTodoList] = useState([]);
// async all
const URL = "https://jsonplaceholder.typicode.com/todos";
const getUsers = async () => {
  const { data } = await axios.get(URL);
  setTodoList(data);
};
// call it
useEffect(() => {
  getUsers();
}, []);
// view
<ol>
{todoList.map((el,idx)=><li key={el.idx}>{el.name} {el.title} {el.completed}</li>)}
</ol>
`;
const blockBody = `npm install --save react-code-blocks
import { CopyBlock, dracula } from "react-code-blocks";

<CopyBlock
        text={blockBody}
        language="jsx"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
`;
const AxiosDemo = () => {
  return (
    <div>
      <h2>AxiosDemo</h2>
      <a href="/fetchdemo">Example Page</a>
      <CopyBlock
        text={codeBody}
        language="jsx"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
      <hr />
      <p>CopyBlock section</p>
      <CopyBlock
        text={blockBody}
        language="jsx"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
    </div>
  );
};

export default AxiosDemo;
