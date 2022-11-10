import { Flex, Input, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addText } from "../redux/action";

function CreatText() {
  const [text, getText] = useState("");

  const dispatch = useDispatch();
  dispatch(addText(text));

  return (
    <Input
      placeholder="Text...."
      w={"570px"}
      h={"70px"}
      margin={"10px"}
      background={"white"}
      value={text}
      onChange={(e) => {
        getText(e.target.value);
      }}
    ></Input>
  );
}

export default CreatText;
