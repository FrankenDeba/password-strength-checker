import { useState } from "react";
import styled from "styled-components";
import "./Input.style.css";

const InputField = styled.input`
  border: "5px solid red";
`;

export default function Input({ checkStrength }) {
  const [val, setVal] = useState("");
  return (
    <div className="input__container">
      <InputField
        className="password__input"
        style={{
          // border: "2px solid red"
          padding: "8px 5px",
          borderRadius: "3px",
          border: "none",
          margin: "10px",
          width: "300px"
        }}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={() => checkStrength(val)}>Check!</button>
    </div>
  );
}
