import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const App = props => {
  const [count, setCount] = useState(props.count);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>The current count is {count}.</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
    </div>
  );
};

App.defaultProps = {
  count: 0
};

ReactDOM.render(<App count={2} />, document.getElementById("root"));

serviceWorker.unregister();
