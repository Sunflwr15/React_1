import React from "react";

function Card({ data, setData, values, setValues, update, error, ...props}) {
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
  const handlePassword = (e) => {
    return 
  }
  return (
    <React.Fragment>
      {data?.map((item) => {
        return (
          
          <React.Fragment>
            <div className="pad white">
              <p>ID: {item?.id}</p>
              <p>Name: {item.username}</p>
              <p>Email: {item.email}</p>
              <p>Tempat Lahir: {item.tempatLahir}</p>
              <p>Tempat Tanggal Lahir: {item.tempatTanggalLahir}</p>
              <p>Jenis Kelamin: {item?.jenisKelamin}</p>
              <p>Password: {item.password}</p>
              <p>Confirm Password: {item.confirmPassword}</p>
              {error && <p className="error">Tes</p>}
              <button value={item.id} onClick={handleDelete}>
                Delete
              </button>
              <button value={item.id} onClick={update}>
                Update
              </button>
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default Card;
