import React from "react";

function Tampilan({ list }) {
  return (
    <React.Fragment>
      {list?.map((data, index) => {
        return (
          <React.Fragment>
            <div>
              <h4>Jenis: {data.jenis}</h4>
              <h4>Produk: {data.produk}</h4>
              <h3>Tipe</h3>
              <p>Nama: {data.brand[0].nama}</p>
              <p>Harga: {data.brand[0].harga}</p>
              <p>Nama: {data.brand[1].nama}</p>
              <p>Harga: {data.brand[1].harga}</p>
            </div>
            
            
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default Tampilan;
