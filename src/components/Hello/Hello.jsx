import React from "react";

const Hello = ({ name, age }) => {
  // console.log(props)
  return (
    <>
      <p>
        Hello <span>{name}.</span>
      </p>
      <p>
        Возраст <span>{age}</span>
      </p>
    </>
  );
};

export default Hello;
