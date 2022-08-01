import React from "react";
import Siswa from "./module/siswa";
import Nilai from "./module/nilai";
import Datasiswa from "./module/dataSiswa";
import "./App.css";

function App() {
  let [data, setData] = React.useState([100, 90, 80, 70, 60, 50]);
  let [dataSiswa, setDataSiswa] = React.useState([
    {
      nama: "Albert",
      kelas: "XI RPL",
      nilai: 100,
    },
    {
      nama: "James",
      kelas: "XI TKR",
      nilai: 100,
    },
    {
      nama: "Moriarty",
      kelas: "XI TKJ",
      nilai: 100,
    },
  ]);
  let [nilaiSiswa, setNilaiSiswa] = React.useState((
    {
      Nama: "Gathfan",
      Kelas: "XI RPL",
      Nilai: [100, 100, 100, 100]
    }
  ))
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
        <Datasiswa data={dataSiswa} nilai={nilaiSiswa}/>
      </section>
    </React.Fragment>
  );
}

export default App;
