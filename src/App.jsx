import { useState } from "react";
import Header from "./Header";
import User from "./User";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Header />
      <h1>Counter Val: {counter}</h1>
      <User />
      <button onClick={() => setCounter(counter + 1)}>
        Increase Counter Val
      </button>
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Hello Fatima</h1>
      </div>
    </>
  );
}
export default App;
