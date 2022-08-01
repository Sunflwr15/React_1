import React from "react";

function Datasiswa({ data, nilai }) {
  //masukin variable props harus ditambahkan {}
  return (
    <React.Fragment>
      {data?.map(function (item, index) {
        return (
          <React.Fragment>
            <div className="center1">
              <p>Nama: {item.nama}</p>
              <p>Kelas: {item.kelas}</p>
              <p>Nilai: {item.nilai}</p>
            </div>
          </React.Fragment>
        );
      })}
      <div className="center1">
        <p>Nama: {nilai.Nama}</p>
        <p>Kelas: {nilai.Kelas}</p>
        <div>Nilai: {nilai.Nilai.map((item) => {
            return <p>{item}</p>
        })}</div>
      </div>
    </React.Fragment>
  );
}

export default Datasiswa;
