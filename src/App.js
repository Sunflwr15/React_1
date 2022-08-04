import React from "react";
// import Layout from "./module/layout";
import Button from "./module/button";
import Input from "./module/input";
import "./style/style.css";

// function Appp() {
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

// export default ;

function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    console.log("Ok Siap Jalan");
    e.preventDefault();
    setValues(() => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <React.Fragment>
      <div className="center-flex">
        <div className="center1">
          <div>
            <Input
              name="username"
              label={"Username"}
              placeholder={"John Doe"}
              value={values.username}
              onChange={(event) => {
                event.preventDefault();
                setValues((values) => {
                  return {
                    ...values,
                    username: event.target.value,
                  };
                });
              }}
            />
            <Input
              name="email"
              label={"Email"}
              placeholder={"@mail.com"}
              value={values.email}
              onChange={handleChange}
            />
            <Input
              name="password"
              label={"Password"}
              placeholder={"Password"}
              value={values.password}
              onChange={handleChange}
            />
            <Input
              name="confirmPassword"
              label={"Confirm Password"}
              placeholder={"Confirm Password"}
              value={values.confirmPassword}
              onChange={handleChange}
            />
            <Button title={"Submit"} color={"#151515"} />
          </div>
        </div>
        <div
          style={{
            margin: "0px 0px 0px 30px",
          }}
        >
          <h4>Username: {values?.username}</h4>
          <h4>Email: {values?.email}</h4>
          <h4>Password: {values?.password}</h4>
          <h4>Confirm Password: {values?.confirmPassword}</h4>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
