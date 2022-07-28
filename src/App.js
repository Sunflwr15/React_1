import React from "react";
import Siswa from "./module/siswa";
import Nilai from "./module/nilai";
import "./App.css";

function App() {
  let [data, setData] = React.useState([100, 90, 80, 70, 60, 50]);
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
    </React.Fragment>
  );
}

export default App;
