import React from "react";
import {Button, Input, TextArea, Card} from './component/index'

function App() {
  const [values, setValues] = React.useState({
    id: "",
    title: "",
    body: "",
    archived: "",
    createdAt: "",
  });
  const [catatan, setCatatan] = React.useState([]);
  return (
    <React.Fragment>
      <div className="w-screen min-h-screen text-gray-500 p-0 space-y-5">
        <div className="grid grid-cols-5 border-b-2 py-5 bg-slate-800 px-10 items-center">
          <h1 className="text-3xl text-white">Notes</h1>
          <div className="col-start-5 border-2 rounded-xl p-2 bg-white">
            <input type="text" placeholder="Cari Catatan" style={{padding: 10, background: 'white',}}/>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items center justify-center">
          </div>
            <div className="col-span-1  mb-5 flex items-center justify-center">
              <form action="" className="space-y-2 w-[1000px]">
                <h1 className="text-xl">Buat Catatan</h1>
                <Input type="text" name={"title"} title={"Judul"} placeholder="Judul"/>
                <TextArea name="body" id="body" cols="30" rows="10" 
                placeholder="Catatan"/>
                <Button title="Simpan"/>
              </form>
            </div>
            <div className="col-span-1 overflow-auto w-full px-5 py-3 border h-96">
              <h1 className="text-xl font-bold">Daftar Catatan</h1>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
