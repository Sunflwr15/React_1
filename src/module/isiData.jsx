import React from "react";

function Tampilan({ list }) {
  return (
    <React.Fragment>
      {list?.map((data, index) => {
        return (
          <React.Fragment key={index}>
            <div className="center">
              <div className="center1" key={index}>
                <h4>Jenis: {data.jenis}</h4>
                <h4>Produk: {data.produk}</h4>
                <h3>Tipe {index + 1}</h3>
                <div>
                  {data?.brand?.map((value, index2) => {
                    return (
                      <React.Fragment key={index2}>
                        <ul>
                          <li>Nama: {value.harga}</li>
                          <li>Harga: {value.nama}</li>
                        </ul>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default Tampilan;
