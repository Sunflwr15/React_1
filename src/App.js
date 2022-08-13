import React from "react";
import Select from "./module/select";
import Card from "./module/card";
import Button from "./module/button";
import Input from "./module/input";
import "./style/style.css";

function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    tempatLahir: "",
    tempatTanggalLahir: "",
    jenisKelamin: "",
    password: "",
    confirmPassword: "",
  });
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState({});
  const [password, setPassword] = React.useState("");
  const [form, setForm] = React.useState("")
  const handlePassword = (e) => {
    const password = values.password;
    const confirmPassword = values.confirmPassword;
    if (password !== confirmPassword) {
      e.preventDefault();
      alert("Password doesn't match");
      setPassword("Password Doesn't Match")
    }
    else if (values.username === "") {
      e.preventDefault();
      alert("There's Empty Form");
      setForm("Form is empty")
    }
    else if (values.email === "") {
      e.preventDefault();
      alert("There's Empty Form");
      setForm("Form is empty")

    }
    else if (values.password === "") {
      e.preventDefault();
      setForm("Form is empty")
      alert("There's Empty Form");
    }
    else if (values.confirmPassword === "") {
      e.preventDefault();
      alert("There's Empty Form");
      setForm("Form is empty")

    }
    else if (values.tempatLahir === "") {
      e.preventDefault();
      setForm("Form is empty")
      alert("There's Empty Form");
    }
    else if (values.tempatTanggalLahir === "") {
      e.preventDefault();
      setForm("Form is empty")
      alert("There's Empty Form");
    }
    else if (values.jenisKelamin === "") {
      e.preventDefault();
      setForm("Form is empty")
      alert("There's Empty Form");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    values.id = new Date().getTime();
    setValues((values) => {
      return {
        username: "",
        email: "",
        tempatLahir: "",
        tempatTanggalLahir: "",
        jenisKelamin: "",
        password: "",
        confirmPassword: "",
      };
    });
    setData((data) => {
      return [...data, values];
    });
  };
  const handleReset = (e) => {
    e.preventDefault();
    setValues((values) => {
      return {
        username: "",
        email: "",
        tempatLahir: "",
        tempatTanggalLahir: "",
        jenisKelamin: "",
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
    } else {
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: false,
        };
      });
    }
  };
  const handleChange = (e) => {
    const password = values.password;
    const confirmPassword = values.confirmPassword;
    if (password !== confirmPassword) {
      e.preventDefault();
      setPassword("")
    }
    else if (values.username === "") {
      e.preventDefault();
      setForm("")
    }
    else if (values.email === "") {
      e.preventDefault();
      setForm("")

    }
    else if (values.password === "") {
      e.preventDefault();
      setForm("")
    }
    else if (values.confirmPassword === "") {
      e.preventDefault();
      setForm("")

    }
    else if (values.tempatLahir === "") {
      e.preventDefault();
      setForm("")
    }
    else if (values.tempatTanggalLahir === "") {
      e.preventDefault();
      setForm("")
    }
    else if (values.jenisKelamin === "") {
      e.preventDefault();
      setForm("")
    }
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
          <form onSubmit={handleSubmit} isError={error?.form}>
            <p className="error">{form}</p>
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
              isError={error?.tempatLahir}
              name="tempatLahir"
              label={"Birth Place"}
              placeholder={"Birth Place"}
              value={values.tempatLahir}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              isError={error?.tempatTanggalLahir}
              name="tempatTanggalLahir"
              label={"Birthday"}
              placeholder={""}
              value={values.tempatTanggalLahir}
              onChange={handleChange}
              onBlur={handleBlur}
              type={"date"}
            />
            <Select
              isError={error?.jenisKelamin}
              name="jenisKelamin"
              label={"Gender"}
              placeholder={"@mail.com"}
              value={values.jenisKelamin}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value={"None"}>None</option>
              <option value={"Laki-laki"}>Laki-laki</option>
              <option value={"Perempuan"}>Perempuan</option>
            </Select>
            <Input
              error={password?.password}
              isError={error?.password}
              name="password"
              label={"Password"}
              placeholder={"Password"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              error={password?.confirmPassword}
              isError={error?.confirmPassword}
              name="confirmPassword"
              label={"Confirm Password"}
              placeholder={"Confirm Password"}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="error">{password}</p>
            <Button
              title={"Submit"}
              color={"#151515"}
              onClick={handlePassword}
            />
            <Button title={"Reset"} color={"#151515"} onClick={handleReset} />
          </form>
        </div>
        <div className="pad scroll view">
          <Card
            data={data}
            setData={setData}
            values={values}
            setValues={setValues}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
