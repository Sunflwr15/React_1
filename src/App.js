import React from "react";
// import Layout from "./module/layout";

import Card from "./module/card";
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
//   };-=
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
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    values.id = new Date().getTime()
    setData((data) => {
      return [...data, values];
    });
    setValues((values) => {
      return {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    });
  };
  const handleBlur = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    }else{
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: false,
        }
      })
    }
  };
  const handleChange = (e) => {
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log("error", error);
  return (
    <React.Fragment>
      <div className="center-flex">
        <div className="center1">
          <form onSubmit={handleSubmit}>
            <Input
              isError={error?.username}
              name="username"
              label={"Username"}
              placeholder={"John Doe"}
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              isError={error?.email}
              name="email"
              label={"Email"}
              placeholder={"@mail.com"}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              isError={error?.password}
              name="password"
              label={"Password"}
              placeholder={"Password"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              isError={error?.confirmPassword}
              name="confirmPassword"
              label={"Confirm Password"}
              placeholder={"Confirm Password"}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button title={"Submit"} color={"#151515"} />
          </form>
        </div>
        <div className="pad scroll view">
          <Card data={data} setData={setData}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
