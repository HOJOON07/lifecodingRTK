import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import counterSlice from "./counterSlice";
import store from "./store";
import { up } from "./counterSlice";

function Counter() {
  useEffect(() => {
    console.log(count);
  }, []);

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  //initialstate를 가져오는 것임-> state.counter까지. state.counter.value는 {value:0을 가져옴 }
  //슬라이스에 있는 것.

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
