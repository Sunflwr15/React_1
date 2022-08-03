import React from "react";
import Layout from "./module/layout";
import Button from "./module/button";
import "./style/style.css";

// function App() {
//   let [count, setCount] = React.useState(0);
//   const handleTambah = () => {
//     setCount(count + 1);
//   };
//   const handleKurang = () => {
//     setCount(count - 1);
//   };
//   const Reset = () => {
//     setCount(0)
//   }
//   return (
//     <React.Fragment>
//       <div className="center-fix layout">
//         <h1>Count = {count}</h1>
//         <Button onClick={handleTambah} title={"Tambah"} color={"#582eff"} />
//         <Button disabled={count <= 0 ? true : false} onClick={handleKurang} title={"Kurang"} color={"Crimson"} />
//         <Button
//         disabled={count === 0 ? true : false}
//           onClick={Reset}
//           title={"Reset"}
//         />
//       </div>
//     </React.Fragment>
//   );
// }

// export default App;

function App() {
  let [name, setName] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [Password, setPassword] = React.useState("");
  let [confirmPassword, setConfirmPassword] = React.useState("");
  return (
    <React.Fragment>
      <form className="center-fix"></form>
    </React.Fragment>
  );
}

export default App;
