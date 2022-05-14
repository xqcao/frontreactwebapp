import * as types from "./todo_types";

const defaultState = [
  // { name: "shopping", detail: "street store shopping", id: "100a" },
];

const reduce = (state = defaultState, action) => {
  switch (action.type) {
    case types.TODO_ADD:
      console.log("add", action.payload);
      return [...state, action.payload];
    case types.TODO_REMOVE:
      const s1 = [...state].filter((x) => x.id !== action.payload.id);
      return s1;
    case types.TODO_UPDATE:
      console.log("====>", action.payload);
      const s2 = [...state].map((x) => {
        if (x.id === action.payload.id) {
          x.detail = action.payload.detail;
          x.name = action.payload.name;
        }
        return x;
      });
      return s2;
    default:
      return state;
  }
};

export default reduce;
