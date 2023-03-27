import React from "react";
import styled from "@emotion/styled";

const LastSelectBox = ({ grade }) => {
  const handleChange = e => {
    console.log(e.target.value);
  };

  return (
    <Select
      name="choice"
      onChange={handleChange}
      key={grade}
      defaultValue={grade}
    >
      <option
        key="A+"
        value="A+"
        // defaultValue={grade === Option.value ? grade : null}
      >
        A+
      </option>
      <option key="A" value="A">
        A
      </option>
      <option key="A0" value="A0">
        A0
      </option>
      <option key="B+" value="B+">
        B+
      </option>
      <option key="B" value="B">
        B
      </option>
      <option key="B-" value="B-">
        B-
      </option>
      <option key="C+" value="C+">
        C+
      </option>
      <option key="C" value="C">
        C
      </option>
      <option key="C-" value="C-">
        C-
      </option>
      <option key="F" value="F">
        F
      </option>
      <option key="none" value="none">
        F
      </option>
    </Select>
  );
};

const Select = styled.select`
  display: block;
  width: 100%;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 3px;
  color: inherit;
  background-color: transparent;
  &:focus {
    border-color: red;
  }
`;

export default LastSelectBox;
