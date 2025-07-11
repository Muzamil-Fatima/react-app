import { useState } from "react";
import Header from "./Header";
import User from "./User";
import Login, {Profile, Setting, UserKey} from "./UserComponent";

function App() {
  const userName = "Muzamil Fatima";
  console.log(sum());
  const [counter, setCounter] = useState(0);
  return (
    <>
    <button onClick={() => alert("hello")}>Click Me</button>
    <h1>{userName}</h1>
      <Header />
      <Login />
      <h1>Counter Val: {counter}</h1>
      <User />
      <Profile />
      <Setting />
      <Fruit />
      <Colors />
      <h1>{UserKey}</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Increase Counter Val
      </button>
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Hello Fatima</h1>
      </div>
    </>
  );
}

function Fruit() {
  return (
    <>
      <h1>Apple {sum()}</h1>
    </>
  );
}

function Colors() {
  return (
    <>
      <h1>Red Color</h1>
    </>
  );
}

function sum() {
  return 10 + 2;
}
export default App;
