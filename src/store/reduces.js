import { combineReducers } from "redux";
import todoReduce from "./todo/todo_reduce";
const reducers = combineReducers({
  todoR: todoReduce,
});
export default reducers;
