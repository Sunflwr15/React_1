import React from "react";
import { Button, Input, TextArea, Card } from "./component/index";

function App() {
  const [values, setValues] = React.useState({
    id: "",
    title: "",
    body: "",
    archived: false,
    createdAt: "",
  });
  const day = [
    new Date().getDate(),
    "-",
    new Date().getMonth(),
    "-",
    new Date().getFullYear(),
  ];
  const form = [values.id, values.title];
  const [inform, setInform] = React.useState("");
  const [catatan, setCatatan] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const handleChange = (e) => {
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
        id: new Date().getTime(),
        createdAt: new Date().getUTCDate(),
      };
    });
    handleBlur(e);
    setInform("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title === "" || values.body === "") {
      setInform("There's Empty Form");
      if (values.title === "") {
        setErrors((errors) => {
          return {
            ...errors,
            title: true,
          };
        });
      }
      if (values.body === "") {
        setErrors((errors) => {
          return {
            ...errors,
            body: true,
          };
        });
      }
      return;
    }

    setValues(() => {
      return {
        id: "",
        title: "",
        body: "",
        archived: false,
        createdAt: "",
      };
    });
    setCatatan((catatan) => {
      return [...catatan, values];
    });
  };

  const handleBlur = (e) => {
    if (e.target.value === "")
      setErrors((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    else
      setErrors((errors) => {
        return {
          ...errors,
          [e.target.name]: false,
        };
      });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    const hasilFilter = catatan.filter((item) => {
      return item.id !== parseInt(e.target.value);
    });
    setCatatan(()=> {
      return hasilFilter
    })
  };
  console.log(catatan);
  return (
    <React.Fragment>
      <div className="w-screen min-h-screen text-gray-500 p-0 space-y-5">
        <div className="grid grid-cols-5 border-b-2 py-5 bg-slate-800 px-10 items-center">
          <h1 className="text-3xl text-white">Notes</h1>
          <div className="col-start-5 border-2 rounded-xl p-2 bg-white">
            <input
              type="text"
              placeholder="Search Notes"
              style={{ padding: 10, background: "white" }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-center justify-center"></div>
          <div className="col-span-1  mb-5 flex items-center justify-center">
            <form
              action=""
              className="space-y-2 w-[1000px]"
              onSubmit={handleSubmit}
            >
              <p className="text-rose-500 font-extralight italic underline">
                {inform}
              </p>
              <h1 className="text-xl">Make a Notes</h1>
              <Input
                name={"title"}
                value={values.title}
                id={"title"}
                placeholder="Title"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.title}
              />
              <TextArea
                name={"body"}
                value={values.body}
                onBlur={handleBlur}
                id="body"
                cols="30"
                rows="10"
                placeholder="Notes"
                onChange={handleChange}
                error={errors.body}
              />

              <Button title="Simpan" />
            </form>
          </div>
          <div className="col-span-1 w-full px-5 py-3 border-t-2 h-96">
            <h1 className="text-xl font-bold mr-10">List of Notes</h1>
            <div className="max-w-[100%] justify-center pb-10">
              <div className="grid grid-cols-3 gap-5">
                {catatan.length === 0 ? (
                  <div className="my-5 text-gray-400 justify-center items-center">
                    There's No Notes
                  </div>
                ) : (
                  catatan.map((items, index) => {
                    return (
                      <div>
                        <Card
                          type={"button"}
                          title={items.title}
                          body={items.body}
                          id={items.id}
                          createdAt={day}
                          handleDelete={handleDelete}
                        />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
