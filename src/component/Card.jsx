import React from "react";
import Button from "./Button";

function Card({ title, body, createdAt, id, handleDelete, ...props }) {
  return (
    <div className="border p-5 h-[350px] w-full shadow-md rounded-lg space-y-2 my-10">
      <div className="h-1/5 ">
        <p className="text-light text-gray-300">{id}</p>
        <h5 className="text-xl uppercase font-bold">{title}</h5>
        <p className="text-light italic text-gray-300">{createdAt}</p>
      </div>
      <div className="text-justify h-3/5 mt-10 mb-5">{body}</div>
      <div className="grid grid-cols-2 gap-5 ">
        <Button {...props} value={id} type="button" title={"Delete"} onClick={handleDelete} bg="red"/>
        <Button value={id} title="Arsipkan" bg="blue" />
      </div>
    </div>
  );
}

export default Card;
