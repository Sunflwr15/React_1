import React from "react";
import axios from "axios";
import Card from "./card";

const User = () => {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(`https://equran.id/api/surat`);
      console.log("Response =>", response.data);

      setUsers(response.data);
    } catch (err) {}
  };

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  console.log("Users =>", users);
  console.log("Page =>", page);
  return (
    <section className="bg-gray-900 w-screen h-full px-10 py-10 pb-10">

      <h1 className="text-[50px] text-white font-bold pb-10 text-center">
        DAFTAR SURAT<span className="text-violet-500">.</span>
      </h1>
      <div className="flex justify-center">
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {users.map((item, index) => {
          return (
            <div>
              <Card
                namaLatin={item.nama_latin}
                arti={item.arti}
                jumlahAyat={item.jumlah_ayat}
                tempatTurun={item.tempat_turun}
                nama={item.nama}
                nomor={item.nomor}
              />
            </div>
          );
        })}
      </section>
      </div>
        <p className="text-end text-gray-500 pr-[40px] pt-10">@gathfam.</p>
    </section>
  );
};

export default User;
