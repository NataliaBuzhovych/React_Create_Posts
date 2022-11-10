import { Flex, Button, Input, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { POSTS } from "../redux/reducer";
import { addName } from "../redux/action";

function SelectAuthor() {
  const [name, getName] = useState("");

  const dispatch = useDispatch();
  dispatch(addName(name));

  return (
    <form>
      <label>Authors: </label>
      <select
        value={name}
        onChange={(e) => {
          getName(e.target.value);
        }}
      >
        <option></option>
        {POSTS.map((el, i) => (
          <option key={i} value={el.name}>
            {el.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default SelectAuthor;
