import React from "react";

export default function Siswa({ name = 'default', prof = 'default', salary = 'default' }) {
  return (
    <React.Fragment>
      <section className="">
        <div className="center1">
          <h5>Name: {name}</h5>
          <h5>Profession: {prof}</h5>
          <h5>Salary: {salary}</h5>
        </div>
      </section>
    </React.Fragment>
  );
}
