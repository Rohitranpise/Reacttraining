import React from "react";
import "./NameList.css";

function NameList() {
  const names = [
    {
      id: 1,
      name: "rohit",
      skill: "nodeJs",
    },
    {
      id: 2,
      name: "Urvesh",
      skill: "ReactJS",
    },
    {
      id: 3,
      name: "dharmesh",
      skill: "Full stack",
    },
  ];
  const nameList1 = names.map((person) => (
    <div>
      <h2 className="property">
        {person.id}. {person.name} Knows {person.skill}
      </h2>
    </div>
  ));
  return <div>{nameList1}</div>;
}
export default NameList;
