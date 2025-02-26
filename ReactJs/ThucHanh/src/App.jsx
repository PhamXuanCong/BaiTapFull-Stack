import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let localCounter = count;

  const increment = () => {
    localCounter++;
    setCount(count + 1);
  };

  const numbers = [1, 2, 3, 4, 5, 6];

  const evens = numbers.filter((num) => num % 2 == 0);

  console.log(evens);

  return (
    <div>
      <p>test</p>
      <h2>Counter : {count}</h2>
      <button onClick={increment}></button>
    </div>
  );
}

export default App;
