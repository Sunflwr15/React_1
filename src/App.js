import React from "react";
import Layout from "./module/layout";
import "./style/style.css";

function App() {
  return (
    <React.Fragment>
      <h1>Belajar Props</h1>
      <Layout title={"1"}>
        <h1>SMK MQ</h1>
      </Layout>
      <Layout title={"2"}>
        <h1>SMK IDN</h1>
      </Layout>
      <Layout title={"3"}>
        <h1>SMK 01</h1>
      </Layout>
      {/* <Layout /> */}
    </React.Fragment>
  );
}

export default App;
