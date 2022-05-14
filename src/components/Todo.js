import React, { useState } from "react";
import { connect } from "react-redux";
import * as todoActions from "../store/todo/todo_actions";
import { v4 as uuid } from "uuid";

const Todo = (props) => {
  const { todo_vals, addTodo, removeTodo, updateTodo } = props;
  const defaultV = { name: "", detail: "", id: "100b" };
  const [todo, setTodo] = useState(defaultV);
  const [flag, setFlag] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const handleOnSubmit = () => {
    if (todo.name.trim().length > 0 && todo.detail.trim().length > 0) {
      const unique_id = uuid();
      const small_id = unique_id.slice(0, 8);
      console.log("add id", small_id);
      setTodo({ ...todo, id: small_id });
      addTodo(small_id, todo);
      setTodo(defaultV);
      setFlag(false);
      setShowMsg(false);
    } else {
      setShowMsg(true);
      return false;
    }
  };
  const handleOnUpdate = (x) => {
    setTodo(x);
    setFlag(true);
  };
  const handleOnUpdateSubmit = () => {
    if (todo.name.trim().length > 0 && todo.detail.trim().length > 0) {
      console.log(todo);
      updateTodo(todo);
      setTodo(defaultV);
      setFlag(false);
      setShowMsg(false);
    } else {
      setShowMsg(true);
      return false;
    }
  };
  return (
    <div>
      <h2>Todo List Page</h2>
      <div>
        <div className="form-group">
          <label htmlFor="name">Todo Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={todo.name}
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          />
          <small id="nameHelp" className="form-text text-muted">
            Please setting unique todo name
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="detail">Details</label>
          <input
            type="text"
            className="form-control"
            name="detail"
            value={todo.detail}
            onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
          />
        </div>
        {showMsg ? (
          <p className="text-warning">{"* the name and detail no empty"}</p>
        ) : (
          <p> </p>
        )}
        <div>
          {!flag ? (
            <button
              style={{ margin: "5px" }}
              className="btn btn-primary"
              onClick={handleOnSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              style={{ margin: "5px" }}
              className="btn btn-primary"
              onClick={handleOnUpdateSubmit}
            >
              Update
            </button>
          )}
        </div>
      </div>
      <hr />
      {todo_vals.length > 0 ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todo_vals.map((it, idx) => (
              <tr key={it.name + "-" + idx}>
                <td>{idx + 1}</td>
                <td>{it.name}</td>
                <td>{it.detail}</td>
                <td>
                  <button
                    style={{ margin: "5px" }}
                    onClick={() => handleOnUpdate(it)}
                    className="btn btn-warning"
                  >
                    Update
                  </button>
                  <button
                    style={{ margin: "5px" }}
                    className="btn btn-danger"
                    onClick={() => removeTodo(it)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Empty Table</p>
      )}
    </div>
  );
};

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
