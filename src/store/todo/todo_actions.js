import * as types from "./todo_types";

export const add_todo = (x) => {
  return {
    type: types.TODO_ADD,
    payload: x,
  };
};

export const remove_todo = (x) => {
  return {
    type: types.TODO_REMOVE,
    payload: x,
  };
};

export const update_todo = (x) => {
  return {
    type: types.TODO_UPDATE,
    payload: x,
  };
};
