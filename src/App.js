import React from "react";
import "./App.css"
import Tampilan from './module/isiData'

function App() {
  let [produk, setProduk] = React.useState([
    {
      jenis: "Elektronik",
      produk: 'Handphone',
      brand: [
        {
          nama: "Samsung",
          harga: "Rp. 2.000.000",
        },
        {
          nama: "Xiaomi",
          harga: "Rp. 3.000.000",
        },
      ],
    },
    {
      jenis: "Transportasi",
      produk: "Mobil",
      brand: [
        {
          nama: "Toyota",
          harga: "Rp. 100.000.000",
        },
        {
          nama: "Honda",
          harga: "Rp. 500.000.000",
        },
      ],
    },
  ]);
  return (
    <React.Fragment>
      <h1 className="center">Latihan 1</h1>
      <Tampilan list = {produk} />
    </React.Fragment>
  );
}

export default App;
