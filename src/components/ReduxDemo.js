import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const reducesBody = `npm install --save redux react-redux
# store/todo/todo_reduce.js

const defaultState = [
  // { name: "shopping", detail: "street store shopping", id: "100a" },
];

const reduce = (state = defaultState, action) => {
  switch (action.type) {
    case "TODO_ADD":
      console.log("add", action.payload);
      return [...state, action.payload];
    default:
      return state
export default reduce
`;
const storeBody = `
# mystore.js
import { legacy_createStore as createStore } from "redux";
const store = createStore(reduces);
export default store
`;
const importStoreBody = `
# index.js
import { Provider } from "react-redux";
import store from "./store/mystore";
<Provider store={store}>
<App />
</Provider>
`;
const combineReducersBody = `
#reduces.js
#import { combineReducers } from "react-redux";
#import todoReduce from "./todo/todo_reduce";
const reducers = combineReducers({
  todoR: todoReduce,
});
export default reducers;
`;
const connectReduxBody = `
import { connect } from "react-redux";


const Todo=(props)=>{
  const { todo_vals, addTodo, removeTodo, updateTodo } = props;

  return (<div>
    ...
    </div>)
}

const mapStateToProps = (state) => {
  return {
    todo_vals: state.todoR,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (id, x) => {
      x.id = id;
      dispatch(todoActions.add_todo(x));
    },
    removeTodo: (x) => dispatch(todoActions.remove_todo(x)),
    updateTodo: (x) => dispatch(todoActions.update_todo(x)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);


`;
const ReduxDemo = () => {
  return (
    <div>
      <h2>ReduxDemo</h2>
      <p>1. create one or many reducers</p>
      <CopyBlock
        text={reducesBody}
        language="jsx"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
      <hr />
      <p>2. combine Reducers</p>
      <CopyBlock
        text={combineReducersBody}
        language="jsx"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
      <hr />
      <p>3. Create Store</p>
      <CopyBlock
        text={storeBody}
        language="jsx"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
      <p>4. Create Store</p>
      <CopyBlock
        text={importStoreBody}
        language="jsx"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
      <p>5. connect redux store from any child component</p>
      <CopyBlock
        text={connectReduxBody}
        language="jsx"
        showLineNumbers={false}
        theme={dracula}
        codeBlock
      />
    </div>
  );
};

export default ReduxDemo;
