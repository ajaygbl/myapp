import { useState } from "react";

function App() {

const [advice, setAdvice] = useState("");
const [count, setCount] = useState(0);

async function getAdvice(){
const res = await fetch("https://api.adviceslip.com/advice");
const data = await res.json();
setAdvice(data.slip.advice);
setCount((c) => c+1);
}

return (
<div className="App">
<h1>{advice}</h1>
<button onClick={getAdvice}>Get Advice</button>
<p>you have read {count} advices till now</p>
</div>
);
}

export default App;