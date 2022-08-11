import React, { useEffect } from "react";
import "./style/style.css";

function App() {
  let [count, setCount] = React.useState(0)
  let [text, setText] = React.useState(false)
  let [message, setMessage] = React.useState(0)
  React.useEffect(() => {
    setMessage(message + 1)
  }, [count, text]);

  let [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 0*1000);
  })
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <React.Fragment>
      <h1>{count}</h1>
      <h1>{message}</h1>
      <h3>{message === 10 ? "Sepuluh" : "Bukan Sepuluh"}</h3>
      <button onClick={()=>{
        setText(!text)
        setCount(count + 1)
      }}>Tambah</button>
    </React.Fragment>
  );
}

export default App;
