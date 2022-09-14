import React from "react";

function Card({ data, setData }) {
  //   console.log(data);
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("ok");
    let filter = data.filter((item) => {
      return item.id !== parseFloat(e.target.value);
    });
    console.log(filter)
    setData(()=>{
      return filter
    })
  };
  return (
    <React.Fragment>
      {data?.map((item) => {
        return (
          <React.Fragment>
            <div className="pad white">
              <p>ID: {item?.id}</p>
              <p>Name: {item.username}</p>
              <p>Email: {item.email}</p>
              <p>Password: {item.password}</p>
              <p>Confirm Password: {item.confirmPassword}</p>
              <button value={item.id} onClick={handleDelete}>
                Delete
              </button>
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default Card;
