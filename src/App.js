import React from "react";
import Siswa from "./module/siswa";
import Nilai from "./module/nilai";
import Datasiswa from "./module/dataSiswa";
import "./App.css";

function App() {
  let [data, setData] = React.useState([100, 90, 80, 70, 60, 50]);
  let [dataSiswa, setDataSiswa] = React.useState([
    {
      nama: "Moriarty",
      kelas: "XI RPL",
      nilai: 100,
    },
    {
      nama: "Albert",
      kelas: "XI TKR",
      nilai: 100,
    },
    {
      nama: "Albert",
      kelas: "XI TKJ",
      nilai: 100,
    },
  ]);
  return (
    <React.Fragment>
      <h1>Latihan Props</h1>
      <section className="center">
        <Siswa name={"Moriarty"} prof={"Consultant"} salary={10000} />
        <Siswa />
      </section>

      <h1>Ini Komponen Nilai</h1>
      <section className="center">
        <Nilai nama={"Holmes"} data={data} />
      </section>

      <h1>Ini Komponen Data Siswa</h1>
      <section className="center">
        <Datasiswa data={dataSiswa} />
      </section>
    </React.Fragment>
  );
}

export default App;
