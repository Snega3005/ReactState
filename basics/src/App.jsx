import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Home from "./Home";


function App() {
  return (
    <>
      <Home name="Snega" />
      <Home age={33} />
      <Greet />
      <Counter />
    </>
  );
}

export default App;
