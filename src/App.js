import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import counterSlice from "./counterSlice";
import store from "./store";
import { up } from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: "counter/up", step: 2 });
          dispatch(up(2));
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
