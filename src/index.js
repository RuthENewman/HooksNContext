import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const App = props => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <p>
          The current {text || "count"} is {count}.
        </p>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(props.count)}>Reset</button>
      </div>
      <div>
        <label for="text">Change the text from '{text || "count"}' </label>
        <input
          id="text"
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </div>
    </div>
  );
};

App.defaultProps = {
  count: 0
};

ReactDOM.render(<App count={2} />, document.getElementById("root"));

serviceWorker.unregister();
