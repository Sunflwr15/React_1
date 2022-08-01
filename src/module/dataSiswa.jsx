import React from "react";

function Datasiswa({data}) { //masukin variable props harus ditambahkan {}
  return (
    <React.Fragment>
      {data?.map(function (item, index) {
        return (
            <div className="center1">
              <p>Nama: default</p>
              <p>Kelas: default</p>
              <p>Nilai: default</p>
            </div>
        );
      })}
    </React.Fragment>
  );
}

export default Datasiswa;
