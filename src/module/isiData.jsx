import React from "react";

function Tampilan({ list }) {
  return (
    <React.Fragment>
      {list?.map((data, index) => {
        return (
          <React.Fragment>
            <div className="center">
              <div className="center1">
                <h4>Jenis: {data.jenis}</h4>
                <h4>Produk: {data.produk}</h4>
                <h3>Tipe 1</h3>
                <ul>
                  <li>Nama: {data.brand[0].nama}</li>
                  <li>Harga: {data.brand[0].harga}</li>
                </ul>
                <h3>Tipe 2</h3>
                <ul>
                  <li>Nama: {data.brand[1].nama}</li>
                  <li>Harga: {data.brand[1].harga}</li>
                </ul>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default Tampilan;
