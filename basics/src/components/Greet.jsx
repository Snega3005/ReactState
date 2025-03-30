import { useState } from "react";

export default function Greet() {
  let [name, setName] = useState("Pooja");
  let toggle = true;
  const update = () => {
    if (toggle) {
      setName("Akash");
      toggle = false;
    } else {
      setName("Pooja");
      toggle = true;
    }
  };
  return (
    <div>
      <h1>Hello, {name}</h1>
      <button onClick={update}>Click</button>
    </div>
  );
}
