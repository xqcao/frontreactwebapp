import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchDemo = () => {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  const [todoList, setTodoList] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get(`${URL}`);
    setTodoList(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  const handleDeleteClick = (x) => {
    setTodoList((pre) => {
      let yy = pre.filter((ii) => ii.id !== x.id);
      return yy;
    });
  };
  // const handleMarkIt = (xx) => {
  //   xx.completed = !xx.completed;
  //   console.log(xx);
  //   return xx;
  // };
  const handleMarkIt = (xx) => {
    setTodoList((pre) => {
      let yy = pre.map((ii) => {
        if (ii.id === xx.id) {
          // if (ii.completed === true) {
          //   ii.completed = false;
          // } else {

          // }
          // ii.completed = !xx.completed ? true : false;
          // console.log(ii);
          ii.completed = true;
        }
        return ii;
      });
      return yy;
    });
  };
  const handleUnMarkIt = (x) => {
    setTodoList((pre) => {
      let gg = pre.map((ii) => {
        if (ii.id === x.id) {
          ii.completed = false;
        }
        return ii;
      });
      return gg;
    });
  };
  return (
    <div>
      <h2>FetchDemo</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Title</th>
            <th>completed</th>
            <th>Action</th>
            <th>Mark to completed</th>
          </tr>
        </thead>
        <tbody>
          {todoList.length > 0 &&
            todoList.map((it, idx) => (
              <tr key={it.id}>
                <td>{it.id}</td>
                <td
                  style={{
                    color: it.completed ? "green" : "",
                    textDecorationLine: it.completed ? "line-through" : "",
                  }}
                >
                  {it.title}
                </td>
                <td> {"" + it.completed}</td>
                <td>
                  <button onClick={() => handleDeleteClick(it)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleMarkIt(it)}>Mark it</button>
                </td>
                <td>
                  <button onClick={() => handleUnMarkIt(it)}>Un Mark it</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchDemo;
